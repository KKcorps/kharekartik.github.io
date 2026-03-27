---
title: Queueglass
summary: A debugging surface for background jobs that shows retries and state transitions without opening five separate tools.
status: Exploring
startedOn: 2026-01-14
stack:
  - Node.js
  - Postgres
  - OpenTelemetry
featured: true
---

## What it is

Queueglass is an exploration into making async job systems easier to inspect. The goal is not to replace existing queue dashboards. It is to expose the small timeline of an individual job clearly enough that failures and retries make sense on first read.

## Why it matters

Queue systems are often reliable enough to ignore until they are not. When something fails, the debugging experience becomes fragmented across logs, queue metrics, application traces, and the worker code itself. This project is an attempt to bring the useful parts of that picture into one narrow view.

## What I am testing

Right now the experiment is focused on a few concrete questions:

- what is the smallest event model that still makes retries readable
- how much detail is useful in a single-job timeline
- whether traces and logs can be merged into one useful narrative without becoming noisy

If the answers hold up, this will turn into a proper writeup and a more durable tool.
