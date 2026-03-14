# Editing content (CMS)

Content is stored in **Markdown and YAML** in `src/content/`. Non-developers can edit it in a browser via **Decap CMS** (formerly Netlify CMS).

## Via the CMS (recommended for non-developers)

1. **One-time setup**
   - In `public/admin/config.yml`, set `backend.repo` to your GitHub repo (e.g. `yourname/your-repo`).
   - If you deploy on Netlify: set `base_url` to your site URL and enable **Identity** and **Git Gateway** in Netlify (see [Decap + Netlify](https://decapcms.org/docs/github-backend/)).
   - For local testing: uncomment `local_backend: true` and run `npx decap-server` in another terminal.

2. **Edit content**
   - Open **yoursite.com/admin** (or localhost:4321/admin when running `npm run dev`).
   - Log in with GitHub (or use the local backend).
   - Use **Blog**, **Events**, and **Portfolio personas** to add or edit entries. Changes are saved as commits to your repo.

3. **Rebuild**
   - After saving in the CMS, trigger a new build (e.g. push to main, or your host’s deploy hook) so the site shows the new content.

## Via the repo (developers)

- **Blog:** `src/content/blog/*.md` — frontmatter + Markdown body.
- **Events:** `src/content/events/*.md` — frontmatter only (title, date, time, venue, location, url, note).
- **Personas:** `src/content/personas/visual-artist.md`, `dancer.md`, `writer.md` — frontmatter (label, title, statement, location, focus, format, notes list, and for writer: excerpts list).

If a persona file is missing, the site falls back to the data in `src/lib/content.ts`.
