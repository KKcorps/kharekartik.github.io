# Personal Site

Writing-first personal site built with Astro. The primary surface is the writeup archive; projects are present, but secondary.

## Local development

```sh
npm install
npm run dev
```

Useful commands:

- `npm run dev` starts the local dev server.
- `npm run build` creates the static production build in `dist/`.
- `npm run preview` serves the built output locally.
- `npm run check` runs Astro's type and content checks.

## Content model

All content lives in Markdown under `src/content/`.

```text
src/content/
├── posts/
└── projects/
```

Add a new writeup by creating a file in `src/content/posts/` with this frontmatter shape:

```md
---
title: My writeup title
summary: One-sentence summary for lists and meta tags.
publishedOn: 2026-03-27
updatedOn: 2026-03-28 # optional
tags:
  - systems
  - debugging
featured: false
draft: false
---
```

Add a new project by creating a file in `src/content/projects/`:

```md
---
title: Project name
summary: What it is and why it exists.
status: Shipping # Shipping | Exploring | Archived
startedOn: 2026-03-27
stack:
  - Astro
  - TypeScript
featured: true
repo: https://github.com/your-user/your-repo # optional
demo: https://example.com # optional
draft: false
---
```

## GitHub Pages

This repo includes `.github/workflows/deploy.yml` for GitHub Pages.

- If the repo is a user site such as `username.github.io`, the site builds at `/`.
- If the repo is a project site, the workflow sets `PUBLIC_BASE_PATH=/<repo-name>` before build so asset and route paths still work.

If you want to test the project-site path locally, run:

```sh
PUBLIC_BASE_PATH=/your-repo-name npm run build
```

Then preview with:

```sh
PUBLIC_BASE_PATH=/your-repo-name npm run preview
```
