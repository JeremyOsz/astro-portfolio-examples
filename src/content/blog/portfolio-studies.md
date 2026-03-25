---
title: "Portfolio Studies: a small system for artist sites"
date: "2026-03-14"
excerpt: "A single Astro app with three editorial routes and a blog. Image-first, angular, a bit edgy — and all of it fed by the Public Domain Image Archive."
category: "Project"
---
# Portfolio Studies: a small system for artist sites
## Introduction
This site is an example system. It exists to show how artists can put together a portfolio that feels like a place, not an app: image-first, angular, a bit edgy, with a print-inspired sense of hierarchy and pacing.

It's built with **Astro**. One codebase, a few routes. No heavy framework, no dashboard. Content and layout are close together. At build time a script fetches images from the [Public Domain Image Archive](https://pdimagearchive.org/infinite-view/) and caches them locally, so the site stays fast and stable without depending on a live API at runtime.

<p class="pull-quote">The idea is simple: one shared data layer, three distinct visual identities — for a visual artist, a dancer or movement practitioner, and a writer — and a blog. Each route uses the same palette and typography tokens but arranges them differently.</p>

The **visual artist** route leads with a large hero image and an asymmetric grid; a small red block overlaps the frame. The **dancer** route uses a bold, condensed headline and a horizontal sequence strip, then a full-width black band for meta and portraits. The **writer** route is text-forward: pull quotes, an editorial spread, sparse imagery. The blog reuses the same language: featured post with a dominant image, then a grid of further posts.

Typography is serif for titles and sans for UI and body; spacing and borders are deliberate. The accent colour is used sparingly — labels, underlines, one geometric block — so it stays sharp. Tailwind handles layout and the design tokens so the system stays easy to tweak.

If you're an artist looking for a portfolio that doesn't look like everyone else's: clone this, swap in your own words and images, and adjust the grid. The structure is the same; the identity is in the angles and the restraint.
