---
name: blog-writer
description: >
  Write single or multi-part blog posts for kharekartik.dev about side projects whose code is on
  this machine. Analyzes git history and code from the project repo, drafts in Kartik's writing
  style, supports iterative refinement, and handles frontmatter/slug/placement. Use when the user
  wants to write a blog post about one of their projects.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, Agent, AskUserQuestion
---

# Blog Writer Skill

Write technically deep, first-person blog posts for kharekartik.dev about side projects whose
source code lives on this machine. Each post is a proof-of-work artifact — it shows the reader
what was built, what broke, what decisions were made, and why.

---

## 1. Kick-off: ask the user what they want

Before writing anything, gather intent. Ask the user:

1. **Which project?** Get the path to the repo on disk (e.g. `~/Documents/Developers/LLM_Experiments/text_2_sql`).
2. **Single or multi-part?**
   - **Single:** One self-contained post covering the whole project.
   - **Multi-part:** A series. Ask which part this is and what scope it covers (a time range of commits, a feature set, or a conceptual phase).
3. **What angle?** What's the core story — a build log, a specific technical challenge, a comparison, a postmortem? Let the user describe it loosely.
4. **Anything to emphasize or skip?** The user often has specific learnings, decisions, or dead ends they want highlighted — or things they explicitly don't want mentioned.

Do NOT start writing until you have answers to at least (1) and (2). If the user provides all context upfront, skip the questions and proceed.

---

## 2. Research the project

Once you know the project path and scope:

### Git history analysis
```bash
# Get commit log for the relevant time range
git -C <project-path> log --oneline --reverse [--after="YYYY-MM-DD" --before="YYYY-MM-DD"]

# For multi-part: scope commits to the part being written
git -C <project-path> log --oneline --reverse --after="<start>" --before="<end>"

# Understand what changed
git -C <project-path> log --stat --reverse [time-range flags]
```

Use subagents (Agent tool with subagent_type=Explore) to dig into the codebase if needed — read key files, understand architecture, trace how specific features evolved.

### What to extract
- **Timeline of decisions:** What was built in what order? What was added, then ripped out?
- **Architecture:** What are the main components? How do they connect?
- **Interesting technical choices:** Unusual patterns, tradeoffs, things the user did differently than the obvious approach.
- **Failure modes and fixes:** What broke and why. What the user learned from it.
- **Evolution:** How the system changed over time. What the first version looked like vs later.

### What NOT to put in the blog
- Raw commit messages or SHAs (never reference these in prose)
- Dates or timestamps (the user never uses dates in articles)
- Line counts or file counts unless they illustrate a meaningful point
- Anything that reads like a changelog

---

## 3. Kartik's writing style

This is non-negotiable. Every draft must match this voice. Read the style memory at
`~/.claude/projects/-home-kharekartik-Documents-Developers-MyWebsite/memory/user_writing_style.md`
before drafting, but here's the enforced ruleset:

### Voice
- First person, conversational, direct
- "I built this because...", "The first thing that broke was...", "That hypothesis was right in principle and wrong in every implementation detail."
- Raw language is fine: fuck, mess, broke, prayer-based testing. Don't sanitize.
- Dry humor. Not jokes — just honest observations that happen to be funny.

### Structure
- Clear `##` sections, `###` subsections
- **Bold** for key concepts on first mention
- Mermaid diagrams for architecture overviews (```mermaid blocks)
- Real code blocks with actual implementation, not toy examples
- Comparison tables where two approaches are being contrasted

### What to avoid
- No emojis, ever
- No hyphens as em-dashes (use commas or periods to break up sentences)
- No colons in headings
- No preamble ("In today's rapidly evolving...", "Let me walk you through...")
- No trailing summaries or recaps at the end
- No buzzwords (leverage, utilize, cutting-edge, etc.)
- No dates or timestamps in prose
- No commit messages in prose
- No "In this post, I'll cover..." meta-commentary
- No numbered lists for narrative flow — use prose paragraphs

### Opening
Start with context and motivation. Why did the project exist? What problem was the user solving?
The first paragraph should hook the reader with a concrete situation, not an abstract claim.

### Ending
End with practical takeaways, a "my take" observation, or a forward-looking statement about
what's next. For multi-part: tease the next part's scope. No recap of what was covered.

### Emphasis on "why"
The most important thing in every section is WHY a decision was made. Not what was built — why
it was built that way. What failed first. What constraint forced the approach. The user's posts
are proof-of-work: they show the reader the thinking, not just the output.

---

## 4. Blog post frontmatter

Every post uses this exact frontmatter format:

```yaml
---
title: "Post Title Here"
summary: "One or two sentences. Concrete, not generic."
publishedOn: YYYY-MM-DD
draft: true
tags:
  - tag-1
  - tag-2
  - tag-3
featured: false
---
```

### Frontmatter rules
- `title`: Provocative or direct. Kartik's style: "WTF Is...", "I Built...", "How I...", "Me vs...". Keep under 80 chars if possible.
- `summary`: Concrete and specific. Not "A deep dive into X" — more like "What happens when you try to build X and everything breaks."
- `publishedOn`: Use today's date.
- `draft: true` always on first creation. The user publishes when ready.
- `tags`: 3-6 lowercase kebab-case tags. Always include `software-engineering` for technical posts. Use `build-in-public` for side project posts. Use `ai` or `llm` for AI projects.
- `featured: false` by default.
- For multi-part: include the part number in the title, e.g. "Automating X, Part 1: Subtitle"

### File naming and placement
- Path: `src/content/posts/<slug>.md`
- Slug: lowercase kebab-case, descriptive. Match the blog's existing naming convention.
- For multi-part: append `-part-N` to the slug, e.g. `automating-visual-explainers-part-1.md`

---

## 5. Title generation

Titles are hard. The user is very particular. When proposing titles:

1. Generate 5-7 candidates in different styles:
   - Provocative question: "WTF Does It Take to..."
   - First-person build log: "I Built X and Here's What Actually Worked"
   - Direct technical: "Building X From Scratch"
   - Challenge-framed: "Me vs [Problem]"
   - Proof-of-work: shows the user did something hard

2. Present all candidates and let the user pick or riff on them.

3. Common rejection reasons (from past sessions):
   - "Too long" — keep titles punchy
   - "Too vague" — needs to reference the specific thing built
   - "Too specific" — shouldn't read like a README title
   - "Doesn't seem like my proof of work" — needs to show the user DID something
   - "No reference to [core concept]" — the key technical contribution must be in the title

Expect 3-5 rounds of title iteration. This is normal.

---

## 6. Multi-part blog workflow

When writing a multi-part series:

### Scoping
- Each part should be self-contained: a reader should get value from one part without reading the others.
- Scope by time range (e.g. "first month of commits"), feature set, or conceptual phase.
- The user decides scope — ask if unclear.

### Cross-references
- Part 1 intro should mention "This is Part 1 of a series" and briefly describe what the series covers.
- Later parts open with a one-line callback: "In Part 1, I covered X. This post picks up where that left off."
- End each part (except the last) with a tease of what comes next.
- Do NOT duplicate content across parts.

### Consistency
- Maintain the same slug base across parts: `<slug>-part-1.md`, `<slug>-part-2.md`
- Same tag set across all parts
- Consistent voice and depth level

---

## 7. Drafting workflow

### Phase 1: Research (do NOT write yet)
1. Read the project repo: key files, architecture, git history.
2. Use subagents for deep dives into specific areas if the codebase is large.
3. Build a mental model of: what was built, in what order, what broke, what decisions were interesting.
4. Present a brief outline (5-8 bullet points) to the user for alignment. Each bullet = a section.

### Phase 2: First draft
1. Write the full post in one pass.
2. Target 250-500 lines of markdown (this is Kartik's typical range).
3. Include real code blocks from the project — not toy examples, actual implementation snippets.
4. Include mermaid diagrams for architecture overviews.
5. Leave `<!-- TODO: verify with user -->` comments on any facts you're uncertain about.

### Phase 3: Style check
After the first draft, do a self-review against the style rules in section 3. Fix violations before
showing to the user. Common issues to catch:
- Hyphens used as em-dashes
- Colons in headings
- Preamble or meta-commentary that crept in
- Sections that explain "what" without "why"
- Overly polite tone (should be raw and direct)

### Phase 4: Iterative refinement
The user WILL provide corrections. Expect:
- **Fact corrections:** "Actually that's not what happened" — update immediately
- **Raw paragraphs:** The user sometimes writes a paragraph and asks you to incorporate it
- **Structural changes:** "These sections are related, merge them" or "This deserves its own section"
- **Cuts:** "Remove this paragraph" — just do it, don't argue
- **Additions:** "We should also cover X" — research the topic from the codebase and add

### Phase 5: Title and polish
- Generate title candidates (see section 5)
- Final proofread for style violations
- Set frontmatter dates, verify tags

### Phase 6: Widgets (optional)
If the post would benefit from interactive visualizations, suggest using the `blog-widget` skill
to create SVG widgets. Do NOT create widgets yourself — that's a separate skill with its own
design system. Just identify where in the post a widget would add value and what concept it
should visualize.

---

## 8. Working with the user's corrections

This is critical. The user knows their project better than the git history reveals. When the user
corrects a fact:

- Apply the correction immediately. Do not ask "are you sure?"
- Do not preserve the old version in a comment
- If the correction changes the narrative flow, restructure the surrounding paragraphs
- The user's memory of their own project is ground truth — always trust it over git history

When the user provides a raw paragraph:
- Incorporate the substance, but adjust voice to match the rest of the post if needed
- Do not add to it or editorialize unless asked
- Place it where it fits the narrative flow, not necessarily where the user suggested

---

## 9. Quality checklist

Before presenting a draft as "ready":

- [ ] Frontmatter is complete with all required fields
- [ ] `draft: true` is set
- [ ] No emojis anywhere
- [ ] No hyphens used as em-dashes
- [ ] No colons in headings
- [ ] No preamble or trailing summary
- [ ] No dates or commit messages in prose
- [ ] No "In this post" meta-commentary
- [ ] Opening paragraph hooks with a concrete situation
- [ ] Every section explains WHY, not just what
- [ ] Code blocks use real implementation, not toy examples
- [ ] Bold on key concepts at first mention
- [ ] 250-500 lines of markdown
- [ ] File placed at correct path with correct slug
- [ ] For multi-part: part number in title and slug, cross-references in place

---

## 10. Example blog posts for reference

Read these existing posts to calibrate voice and structure before writing:

- `src/content/posts/wtf-does-it-take-to-automate-visual-explainers-part-1.md` — multi-part, build log, agent infrastructure
- `src/content/posts/debugging-race-conditions-in-distributed-systems.md` — incident walkthrough, raw voice
- `src/content/posts/wtf-is-time-travel-in-data-lakes-and-does-it-actually-solve-anything.md` — explainer with widgets
- `src/content/posts/i-built-a-pinterest-board-for-github-commits.md` — side project build log
- `src/content/posts/building-a-text-to-sql-studio-that-actually-connects-to-your-database.md` — product-oriented build log
