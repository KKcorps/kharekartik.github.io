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

This runs a sweep across Slack, Jira, Confluence, my drive and my recent work, then spits out one primary driver for the day and one secondary lane, with no list of twelve options to stare at. My failure mode on any given morning isn't lack of information, it's the inability to pick one thing and ignore the rest, and forcing the output to exactly two items is the constraint that makes it useful.

## slack-daily-update

Every morning this builds a digest of Slack threads where I was tagged, classified by urgency and importance. The useful part isn't the summary, it's that it filters out threads that already resolved themselves without my input, which on most days is about half of them.

## answer-slack-queries

This sweeps for questions directed at me personally, plus a small set of channels I watch, and drafts answers without posting them. The expensive part of a Slack reply isn't typing, it's rebuilding the context of what the person is actually asking, and if that's done by the time I open the thread I can respond in thirty seconds instead of fifteen minutes.

## standup-update

Once a week this does a pass over Slack, my docs and my Jira activity, assembles a standup update and flags work that should have had a ticket but didn't. The ticket gap detection turned out to be the more useful half, because the work that isn't tracked explicitly is exactly the work that's easiest to undercount when someone asks what I did this week.

## rebase-main

This is a lightweight sync that keeps my local checkouts aligned with their respective mains, running pull and rebase and flagging conflicts without trying to resolve them. The value isn't the mechanical work, it's context switching cost, because when I come back to a branch that's been idle for a few days the friction of getting it back to clean is often enough that I just don't jump back in, and this removes that.

## project-doc-sync

This is a heartbeat that keeps a long running project doc up to date as new Jira tickets, PRs and implementation evidence appear. Every long running project I've watched dies the same way: the doc gets stale, people stop trusting it, people stop updating it. This automation breaks the loop by being the thing that updates the doc, so I still own the narrative parts but the bookkeeping handles itself.

## What I actually got back

None of these are doing the interesting part of my job, which is still writing code, reading code and debugging weird behavior. What I got back is the thirty to ninety minutes a day I used to spend reconstructing context: which threads need a reply, which tickets I was supposed to move, which branches have drifted. Most of that is handled before I sit down now. The AI automation that actually works isn't the one that sounds smart in a demo, it's the one that's small enough to trust, specific enough to run on autopilot and tied tightly enough to an existing chore that you reach for it without thinking.

I'll keep adding to this post as I build more.
