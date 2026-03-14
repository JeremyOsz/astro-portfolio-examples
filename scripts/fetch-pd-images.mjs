import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(__dirname, "../src/data/pd-images.json");
const baseUrl = "https://pdimagearchive.org";
const imageCdnBaseUrl = "https://images.pdimagearchive.org";
const sourceUrl = "https://pdimagearchive.org/infinite-view/";
const quiet = process.argv.includes("--quiet");
const pagesArg = process.argv.find((arg) => arg.startsWith("--pages="));
const pageCount = Math.max(1, Number.parseInt(pagesArg?.split("=")[1] ?? "4", 10) || 4);

/**
 * The first page uses rollup data in the PD app.
 * Following pages can be read from the standard galleries API.
 */
const endpointForPage = (page) =>
  page === 1
    ? `${baseUrl}/api/galleries/rollup/all/pub-date/desc/1.json`
    : `${baseUrl}/api/galleries/all/pub-date/desc/${page}.json`;

const toAbsoluteUrl = (src) => {
  if (!src) return "";
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `${imageCdnBaseUrl}${src.startsWith("/") ? "" : "/"}${src}`;
};

const log = (message) => {
  if (!quiet) {
    console.log(`[fetch-pd-images] ${message}`);
  }
};

const loadExistingCache = async () => {
  try {
    const raw = await readFile(outputPath, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const fetchPage = async (page) => {
  const url = endpointForPage(page);
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (AstroPortfolioExamples)"
    }
  });

  if (!response.ok) {
    throw new Error(`Failed ${url} with status ${response.status}`);
  }

  return response.json();
};

const normalizeImage = (image) => ({
  uuid: image.uuid,
  src: toAbsoluteUrl(image.src),
  width: image.width ?? 0,
  height: image.height ?? 0,
  alt: image.alt ?? "Public domain archive image",
  title: image.title ?? image.encompassingWork ?? "Untitled",
  artist: image.artists?.[0]?.label ?? "Unknown",
  displayDate: image.displayDate ?? "",
  detailUrl: `${baseUrl}/images/${image.uuid}`
});

const uniqueByUuid = (items) => {
  const seen = new Set();
  return items.filter((item) => {
    if (!item.uuid || seen.has(item.uuid)) return false;
    seen.add(item.uuid);
    return true;
  });
};

const run = async () => {
  const allImages = [];
  let totalImages = 0;

  for (let page = 1; page <= pageCount; page += 1) {
    log(`Fetching page ${page}/${pageCount}`);
    const payload = await fetchPage(page);
    const normalized = (payload.images ?? []).map(normalizeImage);
    allImages.push(...normalized);
    if (payload.meta?.totalImages) {
      totalImages = payload.meta.totalImages;
    }
  }

  const deduped = uniqueByUuid(allImages);
  if (deduped.length === 0) {
    throw new Error("Fetched zero images from PD API.");
  }

  const result = {
    source: sourceUrl,
    apiPattern: "/api/galleries/rollup/all/pub-date/desc/{page}.json",
    generatedAt: new Date().toISOString(),
    totalImages: totalImages || deduped.length,
    images: deduped
  };

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(result, null, 2)}\n`, "utf8");
  log(`Wrote ${deduped.length} images to src/data/pd-images.json`);
};

run().catch(async (error) => {
  const existing = await loadExistingCache();
  if (existing?.images?.length) {
    log(`Fetch failed, using cached data. Reason: ${error.message}`);
    process.exit(0);
    return;
  }

  console.error(`[fetch-pd-images] ${error.message}`);
  process.exit(1);
});
