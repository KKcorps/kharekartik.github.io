# Choosing a story and learning from its reach

Read this when selecting an angle for a new post or substantial rewrite, preparing a launch,
or reviewing readership. Use only the relevant sections. The editorial brief and prose rules
live in `../SKILL.md`; small edits do not require a publication campaign.

## Research beyond the project

Start with the specific problem in the brief. Review a small set of relevant explanations,
usually three to five, and reader questions from places where that problem is actually discussed.
Use official documentation, original research and firsthand engineering accounts for technical
claims. Discussions supply reader language and objections; verify their technical claims against
primary evidence. The user's supplied sources can satisfy this step when they cover the question.

Record links in working notes with what each source establishes, leaves unclear or assumes.
Then name the contribution this article can support. Useful forms include a reproducible failure,
a measured comparison with its method, a worked example that resolves an ambiguity, or a clearer
mechanism that changes a decision. Do not manufacture disagreement with documentation or mistake
an unfamiliar fact for a new discovery. Prefer "the sources reviewed leave this unclear" to
"nobody has written about this". If no outside review was possible, record novelty as unverified.

Separate topical interest from evidence that this particular audience needs an answer. A recent
release or recurring question may create an occasion to publish, but the connection to the
article must be real. Use observed questions with links rather than invented reader quotes or
unsupported assertions that everyone is discussing something.

If the material is useful but familiar, identify the practical benefit honestly. If it cannot
support the proposed claim, narrow the pitch, propose a bounded experiment or explain what evidence
is missing. Respect a user-selected subject and do not run a costly experiment merely to improve
a headline. Never invent incidents, measurements or personal experience to increase the stakes.

## Make the value easy to pass on

Complete the brief's sharing sentence with a real role and use: "An engineer evaluating generated
tests could send this to the teammate designing their fixtures because it shows which conditions
a passing test must exercise."

Identify an existing useful element or develop one where the reasoning needs it. It might be a
small diagnostic, a runnable example, an explanatory figure or a comparison. Plain prose can do
this job. Avoid quotas for charts, quotes or interactive widgets. Use the `blog-widget` skill when
an authorized interactive widget is needed, following the main skill's widget workflow.

Check that the element is accurate when excerpted with a short explanation. Preserve the scope,
units, comparison baseline and source links needed to interpret it. A result from one experiment
must not become a claim about all systems in a social caption. Place the element where the reader
has the question it resolves, preserving the article's discovery sequence.

For an international engineering audience, explain the consequence before company shorthand or
project-specific vocabulary. Follow the main skill's first-use explanations and honest narrator.
Keep Kartik's voice without making an unexplained cultural reference essential to understanding.

## Prepare publication materials when requested

For a launch or explicit reach objective, prepare a compact set of drafts alongside the article:

- A concrete page summary and accurate preview. For kharekartik.dev, check `src/content.config.ts`
  before using optional `seoTitle`, `seoDescription` or `socialImage` fields. Only reference an
  image that exists. Keep the same promise across the headline, metadata and preview.
- An excerpt that teaches something useful on its own and gives the full article a clear purpose.
  Carry necessary qualifications into the excerpt. Adapt to the requested channel's format.
- A short list of relevant communities or channels, with a specific connection to the reader's
  problem. For a concrete launch recommendation, verify current relevance and submission rules.
  Prepare pitches that explain the finding in that context rather than repeating one teaser.

Scale this set to the request. Preserve explicitly chosen channels. If the brief identifies no
credible community fit, say so rather than fabricating demand. Inspect the rendered article and
link preview when preparing a release, including readability of visuals on a phone.

Preparation is local drafting. Publish, send messages or schedule follow-ups only within the
user's explicit authorization. A writing or reach request alone does not authorize outreach.

## Review what happened

When the user requests a review, start with their objective and available data. Use comparable
elapsed time since publication and account for differences in distribution. Keep these signals
separate rather than collapsing them into one popularity score:

- **Discovery:** Referral sources and visits; search impressions and clicks when available.
- **Usefulness:** Substantive responses, citations or links, and evidence that readers applied it.
- **Continued interest:** Return visits or subscriptions when reliably measured.

Report the observation, a plausible explanation and the next change to test separately. With no
analytics, provide an editorial assessment and label performance claims unknown. Low traffic
alone cannot establish a weak headline or poor writing; exposure may be unknown. Scroll depth
does not establish comprehension, and private sharing is often invisible.

Compare several posts before turning an association into a rule. Avoid declaring a sequential
headline edit an A/B test or attributing a spike to prose when distribution also changed. Choose
one meaningful editorial change to evaluate next. Keep review notes with the requested work;
do not silently rewrite the skill, update persistent memory or create a recurring automation.

## Supporting guidance

[Google's guidance on helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
supports original contribution, a defined audience and useful titles, and states that Google has
no preferred word count. These are search guidelines, not evidence that a particular post will
spread socially. Treat reach recommendations as hypotheses to evaluate rather than guarantees.
