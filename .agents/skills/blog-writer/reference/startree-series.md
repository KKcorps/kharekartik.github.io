# The flight path series

Read this when writing a part of the Apache Pinot realtime ingestion series on startree.ai.

Nothing here is a style rule. The writing rules in SKILL.md apply to every post regardless of
venue. This file is only the conventions of this particular series, plus what is safe to publish.

## Contents

- [Headers are aviation puns, in every section](#headers-are-aviation-puns-in-every-section)
- [Opening and closing conventions](#opening-and-closing-conventions)
- [What is safe to publish](#what-is-safe-to-publish)
- [The parts](#the-parts)

## Headers are aviation puns, in every section

Not just the sign-off. Part 1 runs Liftoff Into the (Consume) Loop, Hitting the Brakes, Houston
We've Gone Immutable. Part 2 runs Hailing the right tower, Radio check, Holding pattern, Final
approach, Touchdown, Turbulence protocols.

A draft with flat headers like "The pause nobody budgeted for" and "Rewiring the commit sequence"
reads as a different series even when the prose is right.

One exception to describing code in prose, learned from reviewer feedback on part 3: a **copyable
config block earns its place**, because the reader pastes it into their own table config. That is
core move 5 applied, not an exemption from it. Showing a Java enum is still out.

Titles are the searchable surface, so the flight path stays in the article and out of the title.
The series pattern from the same review round is an adjective in front of "ingestion" that names
the innovation, like "Pauseless Ingestion in Apache Pinot". Real numbers beat vague magnitudes in
review, so cite the 300s to 5s figure rather than saying "minutes to seconds".

Question headers fit the series and carry the reader's own doubt at the same time. Part 1 has
"Everyone asks Where is data, no one asks How is data?" and part 2 has "Ground control: who talks
to whom?"

## Opening and closing conventions

- Every part opens with a recap of the earlier parts, one short paragraph each.
- Both published parts close on "Mission Accomplished (For Now)".
- Every part except the last ends by naming what the next one covers.
- On a finale, drop the "(for now)" and say why in one line. The running qualifier becomes the
  payoff. Then replace the tease with the series arc, and hand the reader the tools rather than a
  promise. Part 3 does this.
- **Do not turn a cut tease into a list of what is left unexplored.** That silently converts a
  promise into factual claims about things the post never examined, which is how a wrong statement
  about consistency modes survived three rewrites. See
  [revision-traps.md](revision-traps.md).

## What is safe to publish

- Numbers already public: the 300s to 5s ingestion lag improvement and the "tens of minutes" worst
  case, both from StarTree's 2024 year in review. Keep the citation link next to the number.
  Without it the claim sounds bad and unsourced.
- Company context is fine in the abstract. "At our largest customer deployments" appears in part 2.
- Never a customer name.

## The parts

- Part 1, the bytes: https://startree.ai/resources/inside-the-flight-path-of-real-time-ingestion-in-apache-pinot/
- Part 2, the agreement: https://startree.ai/resources/inside-the-flight-path-of-real-time-ingestion-in-apache-pinot-part-2/
- Part 3, the clock, and the finale:
  `~/Documents/Developers/pinot-all-worktrees/master/flight-path-part3-v2.md`

Part 3 went through about a dozen rounds of the user's own notes, so it is the best available
sample of the voice. It runs clean on `lint.py`.

The series ends at part 3. There is no part 4.
