# Revision traps

Read this before the second draft, and again every time the user gives a style note.

These are mistakes made on real posts, in the order of how often they recur. Every one survived a
first draft and had to be caught by the user. All of them are the same failure: the reader model
from SKILL.md's core stopped running somewhere. The trap names where. So the fix is never just the
quoted line. Re-run the model over the whole draft and repair every place it broke the same way.

## Contents

- [A style note is never about one instance](#a-style-note-is-never-about-one-instance)
- [Nothing goes between a setup and its payoff](#nothing-goes-between-a-setup-and-its-payoff)
- [The reader's internal conversation is a texture, not a section](#the-readers-internal-conversation-is-a-texture-not-a-section)
- [Do not put the punchline in the header](#do-not-put-the-punchline-in-the-header)
- [A survey of lessons is conclusion-led structure](#a-survey-of-lessons-is-conclusion-led-structure)
- [A paragraph that does two jobs does neither](#a-paragraph-that-does-two-jobs-does-neither)
- [Name a term where it earns its keep](#name-a-term-where-it-earns-its-keep)
- [Structural edits break references](#structural-edits-break-references)
- [Verify inherited claims](#verify-inherited-claims)
- [Check the file before you write to it](#check-the-file-before-you-write-to-it)

## A style note is never about one instance

When the user points at a bad sentence, they are naming a class of bug. Fix the whole file, not
the line they quoted.

This has now gone wrong twice on the same post. The user quoted one dense paragraph and asked
whether it was the only one. It was one of nine. The user asked why one aside sat in the wrong
place. It was one of six.

So the response to a style note is always the same shape. Grep or script the pattern across the
whole document first. Report the count. Then fix all of them. If you find yourself offering the
rest as a follow-up question, you have not done the work.

## Nothing goes between a setup and its payoff

A sentence that promises something owns the next thing the reader sees. Do not insert a figure,
a glossary, an aside or a section break in between.

Real failures on one post:

- "We ended that post feeling pretty good about ourselves." then a 100 word glossary, then
  "Then someone asked what the consumer was doing." The setup and the punchline, split.
- "Now, if you were reading step 4 closely, you have an objection." then a figure, then the
  section that delivers the objection.
- A matched pair, "On the controller, X does this" and "On the server, Y does this", with a
  reflection paragraph wedged between them.
- A cliffhanger raised, then four paragraphs of unrelated mechanics before it was answered.
  Tension does not survive that. Move the cliffhanger to the section close instead.

`lint.py` flags a figure that sits directly before a heading, and blocks one that follows a line
ending in a promise. The rest is a read.

## The reader's internal conversation is a texture, not a section

Asked to make a post mirror the reader's thinking, the obvious move is to add two sections shaped
like questions. That is the wrong move, and it was made on a real post before the user pushed back.

Every claim triggers a reaction. The next sentence should meet that reaction. So the work is
per paragraph, not per section. Walk the draft and at each claim ask what the reader now doubts,
wants, or has already worked out. Then answer it there.

Beats that were missing from a draft that already had two question sections:

- A term used as a consequence without ever saying what the consequence costs. "The consumer is
  dark" never said what going dark loses you.
- A fix presented as obvious, with no room for "if it were that easy it would already work
  that way."
- A number given as reassuring without acknowledging it looks too small. "It overrides three
  methods" for a change everyone is nervous about.
- A cliffhanger the reader reaches before the text does. Say so. "You probably spotted it several
  paragraphs ago" is better than pretending you got there first.

## Do not put the punchline in the header

Conclusion-led writing announces the answer and then explains it. Discovery-led writing walks the
reader to the answer and lets them arrive one beat early. The second is what the user wants.

A section headed "The one line idea" followed by the one line idea is the failure. The fix was to
sort the work by cost, notice the cheap step was stuck behind the expensive one for no defensible
reason, and let the reader land on "so split them" themselves.

Figures leak the answer too, and this is easy to miss. A figure captioned "blocking versus
pauseless" sat two sections before the post asked whether there was an alternative. The prose was
discovery-led and the image was not.

## A survey of lessons is conclusion-led structure

The reader model runs at the outline level, and sentence rules cannot save a page whose sections
answer your outline instead of the reader's questions. This was caught by the user on a post that
was fully lint clean and discovery shaped at every sentence: "why does it still not feel on the
mark."

The diagnosis, made by reading the draft against the flight path part 3 exemplar:

- Seven topics at four hundred words each. That altitude is a report. Part 3 spends 3,700 words
  walking one mechanism.
- Sections opened with topic changes instead of answering the question the previous section had
  just planted. Part 3's headers literally are the reader's objection. "So just build faster?"
- Fixes and rules arrived as announced verdicts. Part 3 sorts the work by cost and lets the
  reader invent the reordering one beat before the text states it.
- A quotable line sat in nearly every paragraph. Stacked epigrams read as written to be quoted.
  Part 3 has about two, each earned at the end of a long walk.
- No reader-facing texture. Part 3 keeps telling readers about their own state. "If that is your
  table you can stop reading here and go enjoy your afternoon." "You probably spotted it several
  paragraphs ago." "Run the arithmetic yourself before reading on."

The fix was a rebuild on a single spine, not edits. One real event walked in order, each section
answering the question the reader now holds, supporting themes entering only where the walk
demands them (the planning flashback when the plan's quality matters, the bug taxonomy when the
reader asks whether the bug was a freak), the thesis landing at the end as the earned conclusion.
The confession threads and deferred tables that part 3 uses ("a thread I will pull later", "I am
saving that one for the end") are the legal way to postpone a payoff, because they tell the
reader it is postponed.

## A paragraph that does two jobs does neither

The worst paragraph on one post was the first mention of six unexplained terms. The instinct is to
gloss all six. The right fix was to notice the paragraph was teaching mechanism and conveying
duration at the same time, and that only the second was its job.

So before glossing, ask what the paragraph is for. If it is making the reader feel a cost, it does
not also get to teach the machinery. Describe effects and let the terms land where they do work.

## Name a term where it earns its keep

Three options exist for unexplained jargon. A glossary up front dies unread. Writing around the
terms costs the readers who want to map prose onto code. Name it and gloss it in plain words right
after, which is what the published posts already do.

Two refinements that are not obvious:

- Recurring plumbing goes in the recap paragraph, which readers actually read, and which most
  posts already have. It does double duty and needs no new convention.
- Put it after the hook, never before. A glossary above the hook is the front loaded friction a
  glossary is supposed to avoid.
- Say it is skippable in its first sentence so returning readers jump it.
- Tie an abbreviation to its full form once. A post used ZooKeeper twice and ZK twelve times
  without ever connecting them.

## Structural edits break references

Every cut and every split leaves damage somewhere else. Check for all three after any structural
edit.

- **Orphaned citations.** Deleting the paragraph that established "it overrides three methods"
  left a later line reading "not into the FSM, which changed by three methods."
- **Broken antecedents.** Trimming one sentence left "The complexity is not in the FSM. The one
  that matters is committerNotifiedCommit", where "the one" now pointed at complexity.
- **New repetition.** Splitting a long paragraph put "Only now does the real work start" and
  "Only now does the partition start reading" three sentences apart.
- **A coined phrase leaned on.** A callback phrase used three times reads as a tic even when the
  referent is genuinely the same. Vary all but the first. `lint.py` does not catch this, so read
  for it.

## Verify inherited claims

A claim already sitting in the draft is not verified. It is just old.

One post asserted that consistency modes govern what a query sees while a segment is mid commit.
The user doubted it. Two greps showed `ConsistencyMode` is declared inside `UpsertConfig` and its
only query path use sits behind an upsert null check, so it never runs on a non upsert table. The
claim was wrong and had been carried forward from an earlier draft through several rewrites.

If the code is on this machine, check it. Repo facts beat draft facts and beat memory. And when
one claim in a list turns out to be invented, cut the whole list rather than the one sentence.
Two of the three claims in that paragraph were plausible sounding filler.

The inventor can be you, at first drafting. A QA post embellished a bug into "reached a customer"
when the artifact said a teammate's parity suite caught it in the weekly certification run. The
claim survived four full rewrites, because every rewrite treated the previous draft as ground
truth. On any rewrite from scratch, re-derive every story fact, especially the dramatic ones, from
the artifacts rather than from the draft being replaced.

## Check the file before you write to it

When the user says they have edited the file, confirm it before writing. Compare the modification
time against your last write, and grep for a line they quoted.

On one post the user said they had made changes. The file's mtime was still my own last write and
the quoted line was absent, so the edits were unsaved in the editor. Writing then would have
destroyed them. Say so and wait rather than guessing.

After they save, read the whole file before editing. Their cuts change what your replacements can
anchor to, and they may have already fixed half of what you were about to fix.
