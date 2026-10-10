---
name: blog-writer
description: >
  Write single or multi-part blog posts in Kartik's voice, either personal build logs for
  kharekartik.dev about side projects whose code is on this machine, or technical deep dives for
  the startree.ai resources blog. Selects a reader and evidence-backed angle, researches source
  artifacts, develops pitches before drafting and refines with a style validator. Handles
  frontmatter, slug and placement. Use when the user wants to write, rewrite or take notes on a
  blog post.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, Agent, AskUserQuestion
---

# Blog Writer Skill

Write technically deep blog posts in Kartik's voice. Each post is a proof-of-work artifact. It
shows the reader what was built, what broke, what was decided, and why.

Make the consequence legible to someone who has never heard of the project. Reach begins with
a specific reader's problem and a useful contribution. Preserve the user's chosen subject and
voice; no workflow can guarantee that a post will trend.

## The core: track the reader

A post is one half of a conversation. The reader supplies the other half silently, and the whole
craft is keeping a running model of their side. At any line the reader has three things:

- **What they know.** Only what the post has established so far, plus everyday knowledge. Not the
  codebase, not the earlier parts of a series, not what you learned researching.
- **What they are asking.** Every claim raises the next question or objection, and it is usually
  obvious once you look: "so just build faster?", "what does that cost?", "what happens when that
  machine dies?", "if it were that easy it would already work that way."
- **What they believe.** A mental model of the mechanism, built from nothing but your words. One
  wrong word installs a wrong model. Calling the consumer "the partition" told readers the whole
  partition sat idle, when the server was doing the most expensive work in the post.

Writing the post is running that model down the page and serving it at every line:

1. **Answer the question they have, where they have it.** Not in a later section shaped like a
   FAQ. The reader's internal conversation is a texture that runs through every paragraph, not a
   feature you add in two places.
2. **Let them arrive before you announce.** Lay out the facts so the reader forms the conclusion
   one beat before you state it. Section headings and figures must not resolve a question before
   it has been asked. The article title can name an observed result or contradiction. Establish
   the stakes early so the reader knows why the investigation matters.
3. **Never cut the thread.** A sentence that promises something owns the next thing the reader
   sees. No figure, glossary, aside or section break between a setup and its payoff.
4. **Hand them each word before you spend it.** Name a term and gloss it in plain words at first
   use, after the hook, never in a wall of six at once. If a paragraph's job is to make the reader
   feel something, like a duration, it does not also get to teach machinery.
5. **Teach the mechanism, not the artifact.** The reader is building a model of the system, not of
   the source tree. Name an identifier only when they would type it or search for it. A class name
   that just labels machinery the sentence already explains is noise in the model.
6. **Run the model at the outline too.** The strongest structure is one investigation walked in
   order, where each section opens by answering the question the previous section planted and the
   thesis lands at the end, earned. Topics filed under a theme read as a report even when every
   sentence is discovery shaped. Supporting material enters where the walk demands it, never as
   its own stop. The tells and the recorded case are in revision-traps under "A survey of lessons
   is conclusion-led structure", and the shape ground truth to read before outlining is
   `~/Documents/Developers/pinot-all-worktrees/master/flight-path-part3-v2.md`.

Every style rule in this file is a special case of this. When rules seem to conflict, or a case
comes up that no rule covers, run the reader model and it decides. And when the user gives a style
note, they are pointing at one place where the model broke. Find every other place it broke the
same way before touching anything. Fix the class, then report the count.

### The narrator's position

Style does not change with the venue. Two surface details follow from the subject on their own:

- **Person follows whose work it is.** A build log about your own code is "I", because you broke
  it. An explainer of a system you did not write uses "we" for the narration and "you" for the
  reader. Do not force "I" onto someone else's protocol or hide your own mistake behind "we".
- **Code follows whose code it is.** Show code you wrote, as real snippets from the repo. Describe
  code you are explaining, in prose with a subject and a verb.

**Before the second draft, and again after every style note, read
[reference/revision-traps.md](reference/revision-traps.md).** Each trap there is a recorded way
the reader model broke on a real post. For a post in an established series, read
[reference/startree-series.md](reference/startree-series.md) for that series' conventions, which
are separate from style.

---

## 1. Establish the reader and story

For a new post or substantial rewrite, infer the project or system, venue, scope and exclusions
from the request and available material. Locate the repo for a build log. For an explainer,
use the relevant primary sources. Establish whether this is standalone or part of a series.
Ask only for missing information that materially affects the work. A small edit uses the
existing article's intent and does not restart research or require a new brief.

Before outlining, write a compact editorial brief. Start with hypotheses and revise them after
research. Keep it with the working notes, outside the published article:

- **Reader:** Someone trying to ___ who currently believes ___ and will leave able to ___.
- **Tension:** What do they expect, what does the evidence reveal and what question connects them?
- **Contribution:** What can this article establish or explain that the material reviewed does
  not? Name the artifact or source that supports it and the limits of that evidence.
- **Consequence:** What decision, behavior or understanding could change for that reader?
- **Sharing:** Who would they send this to and why? Identify a useful element worth passing on.

One investigation or one claim carries the post. Match the frame to the project's actual status.
A miss by a tool that gates nothing is an evaluation opportunity, not a production postmortem.
For an international audience, make the problem understandable across teams without requiring
familiarity with Kartik, the company or earlier posts. Technical depth can follow that entrance.

When selecting an angle, preparing a release or reviewing reach, read
[reference/reach-and-learning.md](reference/reach-and-learning.md) for the outside research,
sharing and publication workflow. Broader reach is an editorial objective, not permission to
replace a requested subject with whatever is trending.

---

## 2. Research the project

Research only the sources relevant to the chosen scope. For a project on disk:

### Git history analysis
```bash
# Get commit log for the relevant time range
git -C <project-path> log --oneline --reverse [--after="YYYY-MM-DD" --before="YYYY-MM-DD"]

# For multi-part: scope commits to the part being written
git -C <project-path> log --oneline --reverse --after="<start>" --before="<end>"

# Understand what changed
git -C <project-path> log --stat --reverse [time-range flags]
```

Use subagents (Agent tool with subagent_type=Explore) to dig into the codebase if needed. Read key files, understand architecture, trace how specific features evolved.

### Quote artifacts, not summaries
The strongest beats in a post are verbatim artifacts. The plan file's own step, the recorded
result JSON, the fixture manifest with its exact numbers. Run dirs, session logs and other
branches usually hold better material than the git log, so go get them. And on any rewrite from
scratch, re-derive every story fact from the artifacts rather than from the previous draft, which
by then contains your own inventions (see revision-traps, "Verify inherited claims").

### Establish the contribution
For a fresh angle, compare the evidence with a small relevant set of existing explanations and
real reader questions, following the reach reference. Record what is already covered and what
this post adds. A concrete worked example can be a contribution without being a new invention.
When browsing or supporting evidence is unavailable, mark the gap instead of claiming novelty.
If the evidence cannot sustain the pitch, narrow the claim or select another angle within scope.

### What to extract
- **Timeline of decisions:** What was built in what order? What was added, then ripped out?
- **Architecture:** What are the main components? How do they connect?
- **Interesting technical choices:** Unusual patterns, tradeoffs, things the user did differently than the obvious approach.
- **Failure modes and fixes:** What broke and why. What the user learned from it.

### What NOT to put in the blog
- Raw commit messages or SHAs (never reference these in prose)
- Dates or timestamps (the user never uses dates in articles)
- Line counts or file counts unless they illustrate a meaningful point
- Anything that reads like a changelog

---

## 3. Kartik's writing style

Everything here is the core applied at sentence and section level. None of it is arbitrary taste
except the mechanical list, which the validator owns.

### Voice
- First person, conversational, storytelling. Write like you're telling a colleague what happened over coffee.
- Setups should read like personal narratives: "So in 2024, I was building..." not clinical summaries of what the system does.
- Raw language is fine: fuck, mess, broke, prayer-based testing. Don't sanitize.
- Dry humor. Not jokes, just honest observations that happen to be funny.

### Sentence rhythm (critical)

A sentence is one turn in the conversation, so its size is set by what the reader needs next.

- **A fragment is a turn like any other, so it has to answer a question the reader just formed.**
  That is the whole test. "Nothing." right after asking what the consumer was doing, or
  "Milliseconds." right after calling three ZooKeeper writes cheap, each carries the payload and
  is the best line on its page. "Clean premise." or "All true." answer nothing that was asked, so
  they only pad the rhythm. Cut or merge those.
- **One idea per turn, because the reader updates their model one step at a time.** This cuts both
  ways. Two sentences doing one job get merged: "Arrow's IPC writer is chatty. A single
  `writeBatch()` call doesn't produce one contiguous write" is a claim plus its own explanation.
  One sentence doing two jobs gets split: "It polls the metadata, and while it waits it looks for
  a peer" is two actions. Sentence length is an output, not a target.
- **Frame a discovery as a discovery, because the reader is making it with you.** "I discovered
  that X is expensive" when you found it out. On someone else's system, "It turns out X is
  expensive" or "Ask why and there is no good answer" does the same work without pretending you
  were there.

### Before/after examples

These are real corrections from past sessions. Study them.

**Bad. clipped declarative opener:**
> Arrow's IPC writer is chatty. A single `writeBatch()` call doesn't produce one contiguous write to disk.

**Good. conversational discovery:**
> I didn't realize how chatty Arrow's IPC writer actually is until I looked at what a single `writeBatch()` call does under the hood. It doesn't produce one contiguous write to disk.

**Bad. two disconnected facts:**
> Mappers write Arrow files, reducers read them. Arrow has maybe the cleanest elevator pitch in all of data infra.

**Good. one connected thought:**
> I was building a custom map-reduce framework and I needed an intermediate format for shuffling data between mappers and reducers. I picked Arrow because it has maybe the cleanest elevator pitch in all of data infra.

**Bad. impersonal second-person:**
> If you approach it that way the code still compiles but your design instincts are just wrong.

**Good. first-person experience:**
> I started with row-by-row logic in the hot path because it felt natural and Arrow let me do it, but it quietly made me pay at scale.

**Bad. staccato fragment pair:**
> Everything above was about discipline. The read side introduced a different category of problem.

**Good. flowing transition:**
> Everything I described so far was about discipline on the write path. The read side introduced a completely different category of problem.

**Bad. clinical setup:**
> Even the basic map-reduce path was not simple. Getting Arrow to write efficiently, manage off-heap memory correctly...

**Good. storytelling setup:**
> The map-reduce path itself was already not simple. I needed Arrow to write efficiently, manage off-heap memory correctly... all of that had to work before I could even think about the next problem.

### Structure
- Clear `##` sections, `###` subsections
- **Bold** for key concepts on first mention
- Mermaid diagrams for architecture overviews (```mermaid blocks)
- Real code blocks with actual implementation, not toy examples
- Comparison tables where two approaches are being contrasted

### What to avoid
- No emojis, ever
- No hyphens as em-dashes (use commas or periods to break up sentences)
- No hyphenated compound phrases in prose. Write `per row`, `off heap`, `zero copy`, `type specialized`, `variable width`, `in place`, `map reduce`, `row by row`, `built in`, `memory mapped`, `cross language`, `batch scoped`, `sort only`, etc. Never `per-row`, `off-heap`, `zero-copy`, etc. Hyphens are only acceptable in YAML tags, URLs, code identifiers and proper nouns like tool names (`async-profiler`).
- **No comma before "and" or "or", ever.** Not only the Oxford comma in a list. Also a comma
  joining two clauses. "It polls the metadata, and while it waits it looks for a peer" becomes two
  sentences. Splitting serves the one-clause-per-sentence rule at the same time.
- **No colons in prose.** Not only in headings. "three small writes to ZooKeeper: mark the old
  segment done" becomes a full stop. A colon introducing a bullet list is fine, since the published
  posts use it, but a label-colon-fragment bullet is not. Rewrite
  "**ALLOW_ALWAYS:** consume during both" as "**ALLOW_ALWAYS** consumes during both."
- No em dashes or en dashes, and no semicolons
- No preamble ("In today's rapidly evolving...", "Let me walk you through...")
- No trailing summaries or recaps at the end
- No buzzwords (leverage, utilize, cutting-edge, etc.)
- No dates or timestamps in prose
- No commit messages in prose
- No "In this post, I'll cover..." meta-commentary
- No numbered lists for narrative flow. Use prose paragraphs
- No recap sections disguised as "What X actually looked like". If a section just bullet-points things the reader already read in detail, cut it. Only keep genuinely new content (e.g. a code snippet not shown earlier).

### Headings
- A heading is the one place the reader looks before the prose, so it must never hold the
  punchline (core move 2). A section headed "The one line idea" followed by the one line idea
  wastes the reader's arrival. Name the tension or the question, not the answer.
- Headings should be opinionated and memorable, not generic labels.
- **Bad:** "The root allocator problem", "Compression", "Sorting", "The read side"
- **Good:** "The off heap roulette", "Not every byte deserves to be squeezed", "Sorting under a memory ceiling", "Bounded memory, unbounded edge cases", "Death by a thousand casts"
- Don't front load setup sections with jargon that gets explained later. Keep setups simple and narrative.

### Paragraph discipline
- **One idea per paragraph, and one job.** If a paragraph does two jobs, split it at the natural
  seam. The worst case is subtle: a paragraph whose job is to make the reader feel something, like
  a duration, quietly also teaching six terms of machinery. Only one of those is its job.
- **Don't stack unrelated fixes into one block.** If you're listing 3+ distinct fixes or changes, either give each its own short paragraph or use a bulleted list. A wall of "I also... And I had to... And then..." loses the reader.
- **Don't repeat the same point twice within 100 lines.** If a concept (e.g. "the model rationalizes bad output") appears in an earlier section, don't restate it. Reference it or let the later, punchier version be the only one.
- **Don't repeat the same fact across sections.** If you mention bumping a config value from X to Y in one section, don't re-tell the same bump in a later section. Tell the full progression once, in the section where it matters most. Earlier mentions should be vague ("the history was too short") so the detailed version lands fresh.
- **Trim justification scaffolding.** If a decision is supported by 3 sources ("I read in guides... and on X... and leaked prompts confirmed it"), compress to the strongest one. The reader trusts you did the research.

### Opening
Start with a storytelling hook that puts the reader in the moment. Choose the point where the
reader's problem becomes tangible: an observed failure, a surprising result or a consequential
decision. A project's origin earns the opening when it serves that problem. Follow the narrator's
position; never invent personal experience to make an explainer sound like a build log.

**Bad:** "I was building a custom map-reduce pipeline where Apache Arrow was the intermediate format. Mappers write Arrow files, reducers read them."

**Good:** "So in 2024, I was building a custom map-reduce framework and I needed an intermediate format for shuffling data between mappers and reducers. I picked Arrow because it has maybe the cleanest elevator pitch in all of data infra. I read all that and thought this would be the easy part of the project. Little did I know."

The opening should make the reader feel like they're hearing a story, not reading a spec.

Read the title and opening alone. A reader unfamiliar with the project should be able to name
the problem, what is at stake and what question the article will resolve. Introduce the system
through that consequence. Let the explanation unfold without delaying the reason to care.

### Setup sections
Setup sections orient the reader on what the project was and why it was hard. Core move 4 applies
hardest here: the reader has no words yet, so a setup that previews later terms (bounded memory
windows, heap based merging, lookahead) reads as a table of contents and teaches nothing. Two
layers only. "Here is what the project was" and "here is why it was harder than expected", in
plain language, hinting at difficulty without naming the machinery that gets its own section
later.

### Ending
End with practical takeaways, a "my take" observation, or a forward-looking statement about
what's next. For multi-part: tease the next part's scope. No recap of what was covered.

### Emphasis on "why"
Every section leads with WHY a decision was made. What failed first, what constraint forced the
approach. The posts are proof-of-work. They show the thinking, not just the output.

---

## 4. Blog post frontmatter

New posts for kharekartik.dev use this base frontmatter. Preserve existing publication state and
dates on edits; use the destination's format for other venues:

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

### Frontmatter rules for new personal-site posts
- `title`: Provocative or direct. Kartik's style: "WTF Is...", "I Built...", "How I...", "Me vs...". Keep under 80 chars if possible.
- `summary`: Concrete and specific. Not "A deep dive into X", more like "What happens when you try to build X and everything breaks."
- `publishedOn`: Use today's date.
- `draft: true` always on first creation. The user publishes when ready.
- `tags`: 3-6 lowercase kebab-case tags. Always include `software-engineering` for technical posts. Use `build-in-public` for side project posts. Use `ai` or `llm` for AI projects.
- `featured: false` by default.
- For a new personal-site series, lead the title with the installment's problem or contribution
  and include the part number after it. Preserve an established series' naming conventions.

### File naming and placement
- Path: `src/content/posts/<slug>.md`
- Slug: lowercase kebab-case, descriptive. Match the blog's existing naming convention.
- For multi-part: append `-part-N` to the slug, e.g. `automating-visual-explainers-part-1.md`

---

## 5. Develop the pitch before the outline

For a new post or a substantial change of angle, develop a few competing pitches, usually three.
Each gets a working title and a short opening paragraph grounded in researched evidence. Vary
the reader's question or the entry into the story, not just adjectives in the same headline.
For a title-only request, respect the existing article's promise and scope.

Compare the pitches on reader relevance, specificity, supporting evidence and whether the
opening can deliver the title's promise. Recommend the strongest and explain the choice briefly.
Proceed with it unless the user has asked to choose first; honor any title already selected.
If the user requests more title options, generate the requested set.

Questions, first-person build logs, direct technical titles and challenge frames can all work.
Use the shape that communicates this story. An observed contradiction such as "My QA Agent
Wrote the Right Test on the Wrong Data" creates a clear question without exposing every causal
step. "WTF" and "I Built" are available expressions of voice, not required templates.

Common rejection reasons (from past sessions):

- "Too long". keep titles punchy
- "Too vague". needs to reference the specific thing built
- "Too specific". shouldn't read like a README title
- "Doesn't seem like my proof of work". needs to show the user DID something
- "No reference to [core concept]". the key technical contribution must be in the title
- A number that measures effort without explaining the reader's stakes. Include figures when
  they establish a meaningful result or scale; preserve their units, context and accuracy.

Recheck the title after drafting and whenever the central claim changes. Revise the promise to
match the evidence rather than stretching the article to rescue a headline.

---

## 6. Multi-part blog workflow

When writing a multi-part series:

### Scoping
- Each part should be self-contained: a reader should get value from one part without reading the others.
- Scope by time range (e.g. "first month of commits"), feature set, or conceptual phase.
- The user decides scope, so ask if unclear.

### Cross-references
- Open with this installment's problem. Place series context and links after the hook, giving
  only the earlier facts needed here. A new reader should not need to read another post first.
- Preserve an established venue's conventions. The flight path series uses the recap opening
  specified in `reference/startree-series.md`.
- End each part (except the last) with a tease of what comes next.
- Do NOT duplicate content across parts.

### Consistency
- Maintain the same slug base across parts: `<slug>-part-1.md`, `<slug>-part-2.md`
- Same tag set across all parts
- Consistent voice and depth level
- Load bearing claims must agree across parts. A concession in one part ("the model writes tests
  fine") must not be contradicted by the next part's story ("the scripts it wrote failed
  everywhere"). Before drafting part N, list the claims its neighbors lean on and check the new
  part escalates the shared thesis instead of flipping it.

---

## 7. Drafting workflow

Use the full workflow for new posts and substantial rewrites. For targeted edits, apply only the
relevant phases and report existing issues outside scope without expanding the assignment.

### Phase 1: Research and choose the story
1. Establish the editorial brief from section 1 and research the relevant artifacts and sources.
2. Verify the event sequence, contribution and limits of the central claim.
3. Develop the pitches from section 5 before committing to an outline.
4. Outline the chosen investigation as a sequence of reader questions and supporting evidence.
   Use as many sections as the story needs. Share the compact brief and outline for visibility;
   continue into drafting unless the user requested an outline or approval stage only.

### Phase 2: First draft
1. Write the full post in one pass.
2. Let the question and evidence determine length. No Markdown line or word quota. Keep the
   reasoning needed to fulfill the promise; cut material that does not advance it. SVG and code
   line counts do not measure how much a reader learns.
3. Follow the narrator's position for code. Use real implementation snippets where they help
   readers reproduce or understand your work, and prose for machinery they do not need to type.
4. Use diagrams, tables or experiments where they resolve a reader's question. Make the useful
   element identified in the brief understandable with its necessary context and limitations.
5. Leave `<!-- TODO: verify with user -->` comments on any facts you're uncertain about.

### Phase 3: Style check
Run `lint.py` from section 10 first and clear every BLOCK. Then do the reader walk from the
section 9 checklist, with [reference/revision-traps.md](reference/revision-traps.md) open. Issues
the script cannot see:
- **Unhelpful fragments**. keep a short sentence when it answers the reader's current question;
  cut or merge fragments that only pad the rhythm. Length alone is not a violation.
- **Clipped sentence pairs**. two short sentences where the first states a fact and the second explains it. Merge with "because", "which means", "so", etc.
- **Declarative openers**. sections starting with "X is Y." instead of "I found that X is Y" or "The thing about X is..."
- **Clinical/impersonal tone**. "The writer supports..." vs "I tried..." or "Arrow's model is..." vs "Arrow is..."
- Hyphens used as em-dashes
- Colons in headings
- Preamble or meta-commentary that crept in
- Sections that explain "what" without "why"
- Paragraphs doing double duty (split them)
- Same fact or observation stated twice across sections (keep the better one)
- Recap sections that just summarize earlier narrative (cut or replace with new content)
- Justification chains with 3+ sources when one would do

### Phase 4: Iterative refinement
The user WILL provide corrections. Expect:
- **Fact corrections:** "Actually that's not what happened". Update immediately
- **Raw paragraphs:** The user sometimes writes a paragraph and asks you to incorporate it
- **Structural changes:** "These sections are related, merge them" or "This deserves its own section"
- **Cuts:** "Remove this paragraph". Just do it, don't argue
- **Additions:** "We should also cover X". Research the topic from the codebase and add

### Phase 5: Title and polish
- Check the chosen title, opening and ending against the editorial brief. Adjust the promise if
  the evidence changed, and confirm the article delivers it.
- Final proofread for style violations
- Verify frontmatter and tags using section 4, preserving existing publication state on edits

### Phase 6: Widgets (optional)
If the post would benefit from interactive visualizations, suggest using the `blog-widget` skill
to create SVG widgets. Do NOT create widgets yourself. That's a separate skill with its own
design system. Just identify where in the post a widget would add value and what concept it
should visualize.

### Phase 7: Publication and learning, when in scope
For a launch or an explicit reach objective, prepare the relevant publication materials using
[reference/reach-and-learning.md](reference/reach-and-learning.md). For a performance review,
use available observations to update editorial hypotheses. A prose edit does not trigger this
phase. Drafting materials does not authorize posting them, contacting people or scheduling work.

---

## 8. Working with the user's corrections

**If the user says they have already edited the file, confirm it landed before you write.** Compare
the file's modification time against your last write and grep for a line they quoted. An unsaved
editor buffer looks exactly like a saved one from here, and writing over it destroys their work.
Once they save, re-read the whole file, because their cuts change what your edits can anchor to.
See [reference/revision-traps.md](reference/revision-traps.md).

This is critical. The user knows their project better than the git history reveals. When the user
corrects a fact:

- Apply the correction immediately. Do not ask "are you sure?"
- Do not preserve the old version in a comment
- If the correction changes the narrative flow, restructure the surrounding paragraphs
- The user's memory of their own project is ground truth, so always trust it over git history

When the user provides a raw paragraph:
- Incorporate the substance, but adjust voice to match the rest of the post if needed
- Do not add to it or editorialize unless asked
- Place it where it fits the narrative flow, not necessarily where the user suggested

---

## 9. Quality checklist

Before presenting a draft as "ready":

Mechanical rules are not listed here. `lint.py` from section 10 owns them, and it must report
zero BLOCK. This list is what a script cannot judge.

- [ ] `lint.py` reports 0 BLOCK, and every REVIEW finding has a stated decision
- [ ] For a new post or substantial rewrite, the brief names a reader, an evidenced contribution,
      a consequence and a credible reason to share
- [ ] The title and opening establish a truthful promise understandable without project history;
      the article fulfills it and the conclusion stays within the evidence
- [ ] The useful element can be understood with its context and limitations; no decorative quote
      or extra visual was added merely to satisfy the sharing check
- [ ] **Walk the draft as the reader.** At every paragraph, name what they know, what they are
      asking and what they now believe. Check the next line serves it. This one pass covers the
      five core moves: questions answered in place, arrival before announcement, no cut threads,
      words handed over before they are spent, mechanism over artifact
- [ ] Narrator's position is honest: person follows whose work it is, code follows whose code it is
- [ ] Opening reads like storytelling, not a system description
- [ ] Every section explains WHY, not just what
- [ ] No fact repeated across sections, and no coined phrase leaned on
- [ ] Nothing orphaned by an edit: no dangling citation, no broken pronoun
- [ ] Every factual claim verified against the relevant repo artifacts or primary sources,
      including inherited claims; unresolved facts are not presented as established
- [ ] Frontmatter matches the venue; new personal-site posts start as drafts, while edits preserve
      existing publication state and dates unless the user requests a change
- [ ] Length is earned by the reader's question and evidence, with no padding to meet a quota
- [ ] For multi-part: the installment works independently, with cross-references and naming that
      follow the series' conventions
- [ ] When launch or performance work is requested, the reach reference's relevant steps are done
      and observations are distinguished from hypotheses

---
## 10. Style validator

`lint.py` in this skill directory replaces the old grep snippets. Do not retype checks by hand.

```bash
python3 .agents/skills/blog-writer/lint.py POST.md
```

Run it after the first draft, after every round of the user's notes, and once more before saying
the post is ready. **BLOCK findings must be zero before presenting a full article draft.** REVIEW
findings need a human call, so read each one and say what you decided.

The validator checks article prose, not editorial briefs, pitch notes or this skill's instructions.
It cannot judge audience demand, originality or sharing value; the editorial and reader walks
remain necessary. When reviewing an existing article, report findings without silently rewriting
material outside the requested scope.

It exits 1 while any BLOCK stands, so it works as a gate.

What it catches, so you do not check these by hand:

- comma before "and" or "or", colons in prose, em and en dashes, semicolons, emoji
- hyphenated two-word compounds, with real prefixes like `re-` and `non-` left alone
- a connective plus a bare code identifier as a sentence, which is a log line not prose
- a sentence opening on a raw identifier
- a figure sitting between a promise and its payoff, and a figure directly before a heading
- a numbered step referenced before the list that defines it exists
- counts of code blocks and tables, and an inventory of every code identifier left in the file,
  so keeping or cutting each one is a deliberate call
- generic single-noun headings

What it cannot catch, so read for these using
[reference/revision-traps.md](reference/revision-traps.md):

- whether a fragment answers a question the reader just formed or only pads the rhythm
- a phrase you coined and then leaned on, when the uses are far apart
- a citation or pronoun orphaned by a cut
- a paragraph doing two jobs
- a claim inherited from an earlier draft that was never true
- whether the structure walks the reader to the answer or just announces it

## 11. Example blog posts for reference

Read these existing posts to calibrate voice and structure before writing:

- `src/content/posts/wtf-does-it-take-to-automate-visual-explainers-part-1.md`. multi-part, build log, agent infrastructure
- `src/content/posts/debugging-race-conditions-in-distributed-systems.md`. incident walkthrough, raw voice
- `src/content/posts/wtf-is-time-travel-in-data-lakes-and-does-it-actually-solve-anything.md`. explainer with widgets
- `src/content/posts/i-built-a-pinterest-board-for-github-commits.md`. side project build log
- `src/content/posts/building-a-text-to-sql-studio-that-actually-connects-to-your-database.md`. product-oriented build log
