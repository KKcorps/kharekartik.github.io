# Project Memory

## Debugging Patterns

- Learning: Mermaid blocks on writing pages must be upgraded from Astro's `pre[data-language="mermaid"]` output rather than `code.language-mermaid`.
  - Applies when: Editing or debugging diagram rendering in `src/pages/writing/[slug].astro`.
  - Why it matters: Looking for `code.language-mermaid` will miss the actual emitted nodes and make the client-side upgrade logic appear broken.
  - Evidence: The repo notes explicitly call out Astro's fenced Mermaid output shape and the current renderer wiring.
  - Avoid: Reintroducing selectors that target only `code.language-mermaid`.

## Pitfalls

- Learning: Article title typography is controlled centrally by `.article-page .article-title` in `src/styles/global.css` and should stay on `--font-display` (`Zilla Slab`) unless the editorial system is intentionally changing.
  - Applies when: Adjusting writing page typography or polishing individual article pages.
  - Why it matters: Per-title overrides caused drift before and make the editorial system inconsistent.
  - Evidence: Repo notes mention a prior `Playfair Display` override that should not be reintroduced.
  - Avoid: Hardcoding title fonts on individual article pages.

## Tooling and Environment Quirks

- Learning: Mermaid needs a normal script block import inside the Astro page component so Astro bundles it into a client module asset.
  - Applies when: Refactoring Mermaid setup or trying to lazy-load diagram rendering differently.
  - Why it matters: If Mermaid is not imported through Astro's bundling path, diagrams may fail at runtime even if the page markup looks correct.
  - Evidence: The repo notes document that Mermaid support works by importing `mermaid` directly in `src/pages/writing/[slug].astro`.
  - Avoid: Switching back to an unbundled inline usage pattern.

## Testing and CI

- Learning: Run `npm run build` after content, styling or writing-page changes, and treat the current Vite warning about `@astrojs/internal-helpers/remote` unused imports as benign unless behavior changes.
  - Applies when: Verifying article, style or Mermaid-related edits.
  - Why it matters: The build catches real regressions in the writing pipeline, while the known warning is noise and should not block routine verification.
  - Evidence: Repo notes mark `npm run build` as the verification step and the Vite warning as expected in this repo.
  - Avoid: Chasing the unused-import warning as if it were the source of a new regression.

## Architecture and Design Decisions

## Workflow Improvements
