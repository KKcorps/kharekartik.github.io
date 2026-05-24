---
title: "How I'm using Claude Code to reduce my workload"
summary: "A growing set of small Claude Code automations, each tied to a specific chore I already do. A living list I'll keep adding to as I build more."
publishedOn: 2026-04-21
draft: false
tags:
  - ai
  - claude-code
  - software-engineering
  - build-in-public
featured: false
---

I'm using Claude Code less as one big assistant and more as a growing set of small automations, each tied to a specific chore I already do. My day isn't one job. It's Slack threads, Jira tickets, docs, PRs, rebase drift, standup updates and a dozen smaller flavors of coordination tax that each need a different kind of attention. A single assistant trying to handle all of that spent more time asking me what I wanted than doing anything useful, so I stopped building that and started building narrow automations instead, each one invoked on a schedule or when I ask for it.

I'm treating this post as a living index. The ones below are what I run today and I'll keep adding more here as I build them.

## priority-items-for-me

This runs a sweep across Slack, Jira, Confluence, my drive and my recent work, then spits out one primary driver for the day plus one secondary lane, with no list of twelve options to stare at. My failure mode on any given morning isn't lack of information, because the real problem is the inability to pick one thing and ignore the rest. Forcing the output to exactly two items is the constraint that makes it useful.

## slack-daily-update

Every morning this builds a digest of Slack threads where I was tagged, classified by urgency and importance. The useful part isn't the summary, it's that it filters out threads that already resolved themselves without my input, which on most days is about half of them.

## answer-slack-queries

This sweeps for questions directed at me personally plus a small set of channels I watch, then drafts answers without posting them. The expensive part of a Slack reply isn't typing, it's rebuilding the context of what the person is actually asking. If that's done by the time I open the thread, I can respond in thirty seconds instead of fifteen minutes.

## standup-update

Once a week this does a pass over Slack, my docs and my Jira activity, assembles a standup update and flags work that should have had a ticket but didn't. The ticket gap detection turned out to be the more useful half, because the work that isn't tracked explicitly is exactly the work that's easiest to undercount when someone asks what I did this week.

## rebase-main

This is a lightweight sync that keeps my local checkouts aligned with their respective mains by running pull and rebase, then flagging conflicts without trying to resolve them. The value isn't the mechanical work, it's context switching cost, because when I come back to a branch that's been idle for a few days the friction of getting it back to clean is often enough that I just don't jump back in. The workflow removes that before it becomes a reason to abandon the branch.

## project-doc-sync

This is a heartbeat that keeps a long running project doc up to date as new Jira tickets, PRs and implementation evidence appear. Every long running project I've watched dies the same way: the doc gets stale, people stop trusting it, people stop updating it. This automation breaks the loop by being the thing that updates the doc, so I still own the narrative parts but the bookkeeping handles itself.


The shape of these automations has moved one level deeper since the first version. The first batch mostly helped me decide what deserved attention. The newer batch is trying to keep ownership loops alive: a Slack thread should turn into a draft answer, a PR review should keep moving and a runbook should absorb evidence while it is still fresh.

The line I am still trying to keep is that each automation gets a narrow lane. It can gather context, draft, update a bounded artifact or push a small PR fix when the rule is explicit. It should not become a second brain that gets to decide what my job is.

## hourly question sweep

This is the sharper version of my Slack question automation. Every hour it looks at recent Slack activity, with extra attention on places where people usually ask technical or operational questions, then writes draft answers to my own DM instead of replying publicly.

The valuable part is not that it can summarize Slack. The valuable part is that it does the expensive context rebuild before I open the thread: it checks the relevant repos, prior Slack context, tickets and wiki context, then gives me an answer that is written for the person asking, not for an engineer showing off implementation details. I still decide whether to post it, but I no longer start from a blank thread.

## PR monitors

For branches with heavy review traffic, I now spin up monitors tied to a specific PR. They watch a single PR, ignore bot review noise, look for teammate comments and CI failures and try to keep the branch from going stale. When the fix is mechanical or bounded, they make the code change, run the smallest relevant validation, push the branch and leave a status note with the commands, evidence, likely root cause and next step.

This is one of the places where narrowness matters most. The monitor does not own the feature and it does not resolve human review comments on behalf of reviewers. It owns the boring loop: did CI fail, did someone ask for a small correction, is there a targeted test to run and can the branch be moved forward without me reconstructing the whole PR state.

## runbook watchers

This watches for recurring operational and debugging threads that should change a runbook. The rule is intentionally conservative: update the doc only when there is supporting evidence from a resolved Slack thread, ticket, PR, validation artifact or already visible doc state.

The job here is artifact hygiene. Incident and debugging knowledge usually appears in the worst possible format: a Slack thread at the exact moment everyone is trying to fix the problem. If the runbook update waits until later, it usually turns into memory archaeology. This automation keeps checking whether fresh operational evidence should become durable documentation.

## release readiness planner

I also turned release readiness into a reusable workflow instead of a scavenger hunt. Given a release, hotfix, PR list, candidate image or source thread, it builds the structure I actually need: scope, artifact provenance, owner signoff, validation surfaces, tested and untested areas, behavior change rows, regression audit rows, release note callouts and a proceed/block recommendation.

The key improvement is that the automation is shaped around the real release artifacts, not a generic test plan template. This kind of work fails when the output is too vague to paste into the release docs or too detached from ticket metadata. This one is useful because it speaks in the same fields the release process already uses.

## eval runner

Another kind of automation is not a scheduled job, but a repeatable eval pipeline. It can collect system metadata, execution plans, runtime stats and model prompts from a live environment without making an LLM call, then run the collected prompts locally and judge the results afterward.

This matters because a lot of recommendation tuning is otherwise hidden inside expensive runs that are hard to replay. Splitting collection from judgment gives me reviewable artifacts for each case: what the input was, what the system observed, what the model was asked, what it recommended and whether the judge agreed. That turns prompt and threshold tuning from a vibes exercise into something I can diff.

## learning proposals with a brake

The newest layer is learning from completed work, but with a hard brake. I do not want an agent quietly rewriting its own instructions in the background. The workflow now produces learning proposals that need review: JSON changes that can patch a skill, add a support file, create a new skill or update an agent instruction, but only after validation, rendered diff review and an explicit apply step.

That is the version of this learning loop I can trust. The automation captures durable lessons from real tasks, but it keeps the write boundary visible. If a workflow correction is worth preserving, it becomes a proposal with evidence and validation commands, not a mysterious mutation to the tool I depend on.

## What changed since the first version

The first set of automations mostly reduced daily context reconstruction. The newer set is more about keeping loops from decaying while I am focused somewhere else.

There are now three categories:

- Attention filters: priority selection, Slack digests, hourly question sweeps.
- Artifact keepers: standup notes, project docs, runbooks, release readiness rows.
- Review and validation loops: PR monitors, eval runners, release planners, learning proposals.

That distinction matters because not every chore wants the same level of autonomy. Slack answers should be drafted to me. Runbooks can be edited if evidence is strong. PR monitors can push small targeted fixes but should not resolve review comments. Learning proposals can suggest changes but should not apply them silently.

The pattern is still the same as before: useful automation is not one giant assistant. It is a collection of small, opinionated loops with enough context to remove the boring part and enough restraint to leave the judgment where it belongs.


## What I actually got back

None of these are doing the interesting part of my job, which is still writing code, reading code and debugging weird behavior. What I got back is the thirty to ninety minutes a day I used to spend reconstructing context: which threads need a reply, which tickets I was supposed to move, which branches have drifted. Most of that is handled before I sit down now. The AI automation that actually works isn't the one that sounds smart in a demo, it's the one that's small enough to trust, specific enough to run on autopilot and tied tightly enough to an existing chore that you reach for it without thinking.

I'll keep adding to this post as I build more.
