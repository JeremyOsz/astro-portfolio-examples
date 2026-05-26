# Astro Portfolio Examples

Route-level portfolio studies for artists, writers, performers, and campaign-oriented creative practices. The project is an Astro site with content collections, Decap CMS configuration, Tailwind CSS, and a small image-cache script that pulls public-domain artwork metadata.

## What Is Included

- Index page linking to each study
- Portfolio examples for visual artists, dancers / movement practitioners, writers, and political action projects
- Blog / journal pages backed by Astro content collections
- Events timeline backed by Markdown frontmatter
- Contact page
- Free hosting guide
- Decap CMS admin configuration at `/admin`
- Public-domain image data cache in `src/data/pd-images.json`

## Tech Stack

- [Astro](https://astro.build/)
- Tailwind CSS via `@tailwindcss/vite`
- TypeScript
- Decap CMS configuration
- Starwind-style local UI components for sheets, dialogs, and dropdowns

## Getting Started

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Astro will print the local URL, usually:

```txt
http://localhost:4321
```

Build the production site:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Refreshes the public-domain image cache quietly, then starts Astro dev. |
| `npm run fetch:images` | Fetches public-domain image metadata into `src/data/pd-images.json`. |
| `npm run build` | Refreshes image data, then builds the static site into `dist/`. |
| `npm run preview` | Serves the built site locally. |

The image fetch script falls back to the existing cache if the remote API is unavailable and cached data already exists.

## Project Structure

```txt
src/
  components/starwind/   Local UI primitives
  content/               Blog, events, and persona content collections
  data/                  Cached public-domain image metadata
  layouts/               Shared Astro layouts
  lib/                   Navigation, content helpers, image selection, utilities
  pages/                 Route-level Astro pages
  styles/                Global and Starwind styles
public/
  admin/                 Decap CMS admin app and configuration
scripts/
  fetch-pd-images.mjs    Public-domain image metadata cache script
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Index of available portfolio studies |
| `/visual-artist` | Image-led artist portfolio |
| `/dancer` | Movement / performance portfolio |
| `/writer` | Text-first writer portfolio |
| `/political-action` | Campaign and mobilisation layout |
| `/blog` | Journal index |
| `/blog/[slug]` | Individual journal entry |
| `/events` | Public programme / events timeline |
| `/contact` | Contact and links |
| `/host-free` | Static hosting guide |
| `/palette` | Palette reference page |
| `/admin` | Decap CMS admin interface |

## Editing Content

Most editable content lives in `src/content/`.

```txt
src/content/blog/*.md       Blog posts
src/content/events/*.md     Events
src/content/personas/*.md   Portfolio persona content
```

The content schemas are defined in `src/content/config.ts`.

Persona pages can also fall back to default data in `src/lib/content.ts` if a persona content file is missing.

For more detail, see [CONTENT.md](./CONTENT.md).

## CMS Setup

Decap CMS is configured in `public/admin/config.yml`.

Before using it on a hosted site:

1. Replace `owner/repo` with your GitHub repository.
2. Set `branch` if your production branch is not `main`.
3. Set `base_url` to your deployed site URL.
4. Configure your host's OAuth / Git Gateway flow.

For local CMS testing, uncomment `local_backend: true` in `public/admin/config.yml` and run:

```sh
npx decap-server
```

Then open:

```txt
http://localhost:4321/admin
```

## Public-Domain Images

`scripts/fetch-pd-images.mjs` fetches metadata from the Public Domain Image Archive and writes normalized data to:

```txt
src/data/pd-images.json
```

The site uses `src/lib/imagePool.ts` to select stable image sets for different routes. You can refresh the cache manually:

```sh
npm run fetch:images
```

To fetch more pages from the source API:

```sh
npm run fetch:images -- --pages=8
```

## Deployment

This is a static Astro site. Any static host that supports Node builds should work.

Typical settings:

```txt
Build command: npm run build
Publish directory: dist
```

Suitable hosts include Netlify, Vercel, Cloudflare Pages, and GitHub Pages.

## Notes for Customizing

- Update `src/lib/mainNav.ts` when adding or removing top-level pages.
- Keep route IDs in sync with the navigation and page labels.
- Add new content collection fields in both `src/content/config.ts` and `public/admin/config.yml`.
- Keep generated uploads under `public/images/uploads` if using the CMS media library.
