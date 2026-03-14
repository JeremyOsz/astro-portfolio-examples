export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  body?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "portfolio-studies",
    title: "Portfolio Studies: a small system for artist sites",
    date: "2026-03-14",
    excerpt: "A single Astro app with three editorial routes and a blog. Image-first, angular, a bit edgy — and all of it fed by the Public Domain Image Archive.",
    category: "Project",
    body: `<p>This site is an example system. It exists to show how artists can put together a portfolio that feels like a place, not an app: image-first, angular, a bit edgy, with a print-inspired sense of hierarchy and pacing.</p>

<p>It’s built with <strong>Astro</strong>. One codebase, a few routes. No heavy framework, no dashboard. Content and layout are close together. At build time a script fetches images from the <a href="https://pdimagearchive.org/infinite-view/" target="_blank" rel="noopener noreferrer">Public Domain Image Archive</a> and caches them locally, so the site stays fast and stable without depending on a live API at runtime.</p>

<p class="pull-quote">The idea is simple: one shared data layer, three distinct visual identities — for a visual artist, a dancer or movement practitioner, and a writer — and a blog. Each route uses the same palette and typography tokens but arranges them differently.</p>

<p>The <strong>visual artist</strong> route leads with a large hero image and an asymmetric grid; a small red block overlaps the frame. The <strong>dancer</strong> route uses a bold, condensed headline and a horizontal sequence strip, then a full-width black band for meta and portraits. The <strong>writer</strong> route is text-forward: pull quotes, an editorial spread, sparse imagery. The blog reuses the same language: featured post with a dominant image, then a grid of further posts.</p>

<p>Typography is serif for titles and sans for UI and body; spacing and borders are deliberate. The accent colour is used sparingly — labels, underlines, one geometric block — so it stays sharp. Tailwind handles layout and the design tokens so the system stays easy to tweak.</p>

<p>If you’re an artist looking for a portfolio that doesn’t look like everyone else’s: clone this, swap in your own words and images, and adjust the grid. The structure is the same; the identity is in the angles and the restraint.</p>`
  },
  {
    slug: "soft-evidence",
    title: "Soft Evidence: notes from the studio",
    date: "2026-03-10",
    excerpt: "Assemblage and transfer work from the current cycle. Grids, misfiled histories, and the weight of paper.",
    category: "Process"
  },
  {
    slug: "ground-as-instrument",
    title: "Ground as Instrument",
    date: "2026-03-02",
    excerpt: "A movement practice built from score-based improvisation and architectural listening. Research notes and fragments.",
    category: "Research"
  },
  {
    slug: "portable-archives",
    title: "Portable Archives",
    date: "2026-02-28",
    excerpt: "Every image carries a previous hand. Editing becomes a way of naming who touched it.",
    category: "Essay"
  },
  {
    slug: "rehearsal-log",
    title: "Rehearsal log — February",
    date: "2026-02-20",
    excerpt: "Practice is not repetition. It is an argument with timing, materials, and weather.",
    category: "Process"
  },
  {
    slug: "scale-and-attention",
    title: "Scale and Attention",
    date: "2026-02-14",
    excerpt: "A room changes when a sentence is read aloud. The line breaks before the body does.",
    category: "Essay"
  },
  {
    slug: "public-domain-interventions",
    title: "Public domain interventions",
    date: "2026-02-05",
    excerpt: "Working with found imagery from the archive. Collage, caption, and the ethics of reuse.",
    category: "Process"
  }
];

export function formatBlogDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
