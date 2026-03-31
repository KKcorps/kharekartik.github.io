# AGENTS.md

This repo is an Astro personal site with content-driven writing pages. The notes below capture repo-specific preferences and implementation details learned during recent edits.

## Content and writing

- New blog posts live in `src/content/posts/` as Markdown files.
- Post schema is defined in `src/content.config.ts`.
- Writing index and post routes auto-pick up posts from the content collection. No manual route registration is needed.
- Preferred writing style:
  - avoid overly technical or spec-like headings
  - avoid excessive punctuation and rhetorical flourishes
  - break up long sections with visuals or tables where useful
  - prefer calm, practical explanations over hype-heavy phrasing

## Article page typography

- The article title font is controlled by `.article-page .article-title` in `src/styles/global.css`.
- `--font-display` is set to `Zilla Slab` and should be used for display/title treatments.
- There was a prior hardcoded `Playfair Display` override on article titles. Do not reintroduce per-title font overrides unless intentionally changing the editorial system.

## Inline code styling

- Inline `<code>` on article pages should use the site accent color.
- `--article-code-inline` in `src/styles/global.css` is intentionally wired to `var(--accent)`.

## Mermaid diagrams

- Mermaid support is implemented on writing pages in `src/pages/writing/[slug].astro`.
- Astro emits fenced Mermaid blocks as `pre[data-language="mermaid"]`, not `code.language-mermaid`.
- Mermaid must be bundled by Astro. Use a normal script block with `import mermaid from 'mermaid'` inside the Astro component so the build emits a bundled module asset.
- Diagrams are upgraded client-side from fenced code blocks into rendered Mermaid figures.
- Theme colors are derived from CSS custom properties so diagrams match the site theme and accent color.
- The diagram wrapper should not use decorative gradients. Keep the background plain and high contrast.
- Diagrams are auto-fit to the article width and include basic zoom controls.
- Wide left-to-right Mermaid graphs can become unreadably small when auto-fit by width. Prefer top-to-bottom layouts for article diagrams unless horizontal layout is necessary.

## Visual content inside posts

- Prefer native content elements first:
  - Mermaid diagrams for flows
  - Markdown tables for compact comparisons
- If a post feels like a wall of text, add one or two explanatory visuals rather than more sectioning alone.

## Build and verification

- Use `npm run build` after content, styling, or writing page changes.
- Current builds may show a Vite warning about `@astrojs/internal-helpers/remote` unused imports. That warning is benign in this repo at the moment.

## Dependencies added during this session

- `mermaid`
- `@fontsource/zilla-slab`

## Files touched for these capabilities

- `src/pages/writing/[slug].astro`
- `src/styles/global.css`
- `src/content/posts/wtf-is-time-travel-in-data-lakes-and-does-it-actually-solve-anything.md`
- `package.json`
