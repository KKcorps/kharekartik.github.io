---
title: Backpressure
summary: A Cities Skylines style game where your B2B SaaS client hands you an absurd requirement and you build the AWS city that survives it.
status: Shipping
startedOn: 2026-10-07
stack:
  - three.js
  - JavaScript
  - Web Audio
demo: https://backpressure-city.netlify.app/
featured: true
---

## What it is

Backpressure is a city builder for distributed systems. Every level starts with a message from a client. The message reads the way client requirements usually read: ten numbers, one budget and a casual line at the end that turns out to matter.

You lay out AWS services as buildings and draw network links as roads. Every car on a road is a batch of requests. Then you press play and the traffic decides whether your design was any good.

![The map picker with the Enterprise onboarding client request open](/images/backpressure/client-ask.jpg)

[Play it in the browser](https://backpressure-city.netlify.app/). It runs on a laptop and needs no install.

## How a level plays out

The Enterprise onboarding level is a good example. The client wants fulfillment to see every order in three seconds and a live dashboard for each of four thousand stores. Support needs search over every order. Analytics wants every event in the lake. All of this has to happen on Black Friday for fifty dollars an hour. Also checkout is shipping a small deploy in the middle of the sale.

A first build of Kafka, Lambda, Flink, OpenSearch, Pinot and Firehose looks reasonable and fails in about twenty seconds. The incident feed tells you why: the Lambda is capped by the number of Kafka partitions and Firehose is over its throughput quota. You fix those, run again and Black Friday finds the next weak spot. Then the small deploy sends malformed events and one consumer gets stuck retrying them forever.

![Tuning Pinot servers between runs](/images/backpressure/tuning-pinot.jpg)

Each failure points at a real setting: partitions, batch size, KPUs, data nodes, a failure destination for bad records and provisioned capacity once the on-demand bill blows the budget. The level is done when a full run holds every objective through the spike, the bad deploy and an availability zone outage.

## What is real and what is simplified

The limits and prices come from public AWS documentation. MSK broker throughput, Kinesis shard caps, Firehose quotas, DynamoDB write units, Lambda concurrency and per hour pricing all follow the published numbers. The game keeps a sources tab with the references.

| Modelled closely | Simplified |
| --- | --- |
| Service throughput limits and quotas | Exact latency distributions |
| Hourly and per request pricing | Network topology inside a region |
| Retries, poison records and dead letter destinations | Most tuning knobs beyond the important few |
| AZ failures and provisioning delays | Real query plans inside databases |

## Scenarios

There are fifteen levels. They cover real-time ingestion, flash sale checkout, a payment provider brownout, merchant dashboards on Pinot, picking the right database for each team, metrics and logs, surge pricing, finance reporting on a lake, oversized invoice payloads, telemetry fan-out and a live leaderboard. There is also a sandbox with a ramp test that keeps adding load until something breaks.

![The same build at night during the Black Friday spike](/images/backpressure/black-friday-night.jpg)

## How it was built

I built the whole thing with Claude Opus 5.5. The game is a single HTML file with a tile-based simulation underneath and a small three.js renderer on top. Sound is generated in the browser with Web Audio, so there are no asset files. A headless test suite runs every level with a naive build and a correct build to make sure each one fails and passes for the intended reason.
