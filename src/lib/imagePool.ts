import imageData from "../data/pd-images.json";

type CachedImage = {
  uuid: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  artist: string;
  displayDate: string;
  detailUrl: string;
};

const images = imageData.images as CachedImage[];

const hashSeed = (seed: string) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const pickEveryNth = (collection: CachedImage[], start: number, count: number, step: number) => {
  if (!collection.length) return [];
  const picked: CachedImage[] = [];
  let index = start % collection.length;
  const seen = new Set<string>();

  while (picked.length < count && seen.size < collection.length) {
    const candidate = collection[index];
    if (!seen.has(candidate.uuid)) {
      picked.push(candidate);
      seen.add(candidate.uuid);
    }
    index = (index + step) % collection.length;
  }

  return picked;
};

const byRatio = (mode: "portrait" | "landscape" | "all") => {
  if (mode === "all") return images;
  return images.filter((image) =>
    mode === "portrait" ? image.height >= image.width : image.width > image.height
  );
};

export const pickImages = (
  seed: string,
  count: number,
  mode: "portrait" | "landscape" | "all" = "all"
) => {
  const pool = byRatio(mode);
  const index = hashSeed(seed) % Math.max(pool.length, 1);
  const step = (hashSeed(`${seed}-step`) % 5) + 1;
  return pickEveryNth(pool.length ? pool : images, index, count, step);
};

export const routeImageSets = {
  visualArtist: {
    lead: pickImages("visual-lead", 1, "landscape")[0],
    gallery: pickImages("visual-grid", 9, "all")
  },
  dancer: {
    strips: pickImages("dancer-strip", 6, "landscape"),
    portraits: pickImages("dancer-portrait", 4, "portrait")
  },
  writer: {
    covers: pickImages("writer-covers", 3, "portrait"),
    details: pickImages("writer-details", 5, "all")
  },
  blog: {
    featured: pickImages("blog-featured", 1, "landscape")[0],
    thumbnails: pickImages("blog-thumbs", 8, "all")
  }
};

export type ImageCard = CachedImage;
