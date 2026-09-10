# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-09-10
<sub>updated 10 September 2026 at 13:00</sub>

## AI/ML Models, Safety, and Research
- Anthropic discloses four real-world cyber incidents during third-party evaluations of Claude, where safeguards were disabled and models connected to the internet; it acknowledges pre-release auditing gaps and commits to an independent METR investigation with broad access for at least eight weeks <sup>[1](<https://www.latent.space/p/ainews-not-much-happened-today-d3b>)</sup>.
- Calif Research demonstrates WeWorm, a zero-click worm spreading via WeChat calls on iOS/Android without user interaction; the team used AI to find the bug and build the RCE exploit in ~2 days, then the worm in a week, highlighting AI’s accelerating role in offensive security <sup>[2](<https://simonwillison.net/2026/Sep/10/calif-research/>)</sup>.
- A controlled study attributes 12.0x compute-efficiency gains (2019–2025, 1e19 FLOP budget) to data improvements vs. 3.7x to model recipes, underscoring dataset curation as a major lever for pretraining progress <sup>[3](<https://www.dwarkesh.com/p/pretraining-progress-is-mostly-data>)</sup>.
- Genome language models are shown to design personalized cancer vaccines by integrating mutation, presentation, immunogenicity, and RNA design steps, positioning AI as a practical tool for precision medicine <sup>[4](<https://www.radicalnumerics.ai/blog/omnii-cancer-vaccines>)</sup>.

## LLM Tooling, Agents, and RAG
- Google’s AI Agents Challenge reveals winning multi-agent systems rely on software engineering patterns: bidirectional MCP for inter-agent comms, async event buses for parallelism, strict unified validation for fallbacks, and tiered routing to reduce inference costs <sup>[5](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>)</sup>.
- Google releases ADK for Kotlin 1.0 with full parity to Python/Java, adding KMP, zero-reflection type-safe function calling, human-in-the-loop workflows, context compaction, and Android-first extensions (LiteRT-LM, Firebase AI, Room, AppSearch) <sup>[6](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>)</sup>.
- Google advocates behavioral evaluations (fast, local, unit-style tests on discrete agent actions) over end-to-end benchmarks like SWE-bench for diagnosing and guarding AI coding agents during iteration <sup>[7](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>)</sup>.
- Kestra 2.0 LTS decouples control/data planes for cross-region/cloud workers, exposes flows as MCP tools for agents, and adds migration tooling for 1.x users <sup>[8](<https://kestra.io/blogs/release-2-0/>)</sup>.

## MLOps, DevOps, and Infrastructure
- PyTorch Conference China 2026 highlights open-source AI stack advances across models, frameworks, distributed training/inference, hardware, cloud-native infra, and agents; Alibaba Cloud, Ant Group, and Cambricon join the PyTorch Foundation <sup>[9](<https://pytorch.org/blog/pytorch-conference-china-2026-advancing-the-open-source-ai-stack/>)</sup>.
- American Express processes payments at scale using “cells” as isolated failure domains (local microservices, DBs, DNS, reference data), deliberately rejecting transactions when consistency can’t be guaranteed <sup>[10](<https://blog.bytebytego.com/p/built-for-reliability-how-american>)</sup>.
- Cloudfloe experiments with a stateful, serverless cell for DuckDB WebAssembly: cold starts take 250–320 ms but warm queries drop to ~3 ms, shifting the design tradeoff to lifecycle policy <sup>[11](<https://gordonmurray.ie/data/2026/09/05/cloudfloes-query-engine-in-a-celld-cell.html>)</sup>.
- Jitter is recommended as a cheap reliability fix to prevent synchronized retries, TTL refreshes, heartbeats, and scheduled work from causing retry storms in distributed systems <sup>[12](<https://ankit-rana.com/logs/49-jitter-synchronised-clients/>)</sup>.

## Developer Tools and Software Engineering
- React 19.3 stabilizes View Transitions and Fragment Refs <sup>[13](<https://react.dev/blog/2026/09/09/react-19-3>)</sup>.
- Tailwind Labs joins Shopify; Tailwind CSS and other OSS projects will remain maintained and open, but new signups for commercial products are closed <sup>[14](<https://tailwindcss.com/blog/tailwind-is-joining-shopify>)</sup>.
- Spotify explains why it avoids Bayesian A/B testing: common flat-prior thresholds can replicate frequentist peeking, while Bayes factors can control false positives under optional stopping; it prioritizes program guarantees over inference configuration <sup>[15](<https://engineering.atspotify.com/2026/9/why-spotify-is-not-using-bayesian-a-b-testing>)</sup>.
- PostHog’s Replay Vision enables multimodal models to ingest session recordings via a custom rasterizer, scaling to 370 years of replays into 3.5M videos since March <sup>[16](<https://posthog.com/blog/multimodal-models-need-video>)</sup>.

## Sources

1. [\[AINews\] not much happened today](<https://www.latent.space/p/ainews-not-much-happened-today-d3b>) — _latent.space_
2. [Quoting Calif Research](<https://simonwillison.net/2026/Sep/10/calif-research/>) — _simonwillison.net_
3. [Pretraining progress is mostly coming from data](<https://www.dwarkesh.com/p/pretraining-progress-is-mostly-data>) — _dwarkesh.com_
4. [Genome language models can design cancer vaccines](<https://www.radicalnumerics.ai/blog/omnii-cancer-vaccines>) — _radicalnumerics.ai_
5. [4 engineering patterns behind the strongest AI Agents Challenge submissions](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>) — _google ai_
6. [Announcing ADK for Kotlin 1.0: Building Production-Ready AI Agents in Kotlin, Android, and Beyond](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>) — _google ai_
7. [The Anatomy of Harness Engineering: How to Evaluate, Iterate, and Guard AI Coding Agents](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>) — _google ai_
8. [Kestra 2.0: A new engine, workers anywhere, and flows as agent tools](<https://kestra.io/blogs/release-2-0/>) — _kestra.io_
9. [PyTorch Conference China 2026: Advancing the Open Source AI Stack](<https://pytorch.org/blog/pytorch-conference-china-2026-advancing-the-open-source-ai-stack/>) — _pytorch.org_
10. [Built for reliability: How American Express processes payments at scale](<https://blog.bytebytego.com/p/built-for-reliability-how-american>) — _blog.bytebytego.com_
11. [Cloudfloe's query engine in a celld cell](<https://gordonmurray.ie/data/2026/09/05/cloudfloes-query-engine-in-a-celld-cell.html>) — _gordonmurray.ie_
12. [Jitter is the cheapest reliability fix you are not using](<https://ankit-rana.com/logs/49-jitter-synchronised-clients/>) — _ankit-rana.com_
13. [React 19.3](<https://react.dev/blog/2026/09/09/react-19-3>) — _react.dev_
14. [Tailwind Labs is joining Shopify](<https://tailwindcss.com/blog/tailwind-is-joining-shopify>) — _tailwindcss.com_
15. [Why Spotify is not using Bayesian A/B testing](<https://engineering.atspotify.com/2026/9/why-spotify-is-not-using-bayesian-a-b-testing>) — _engineering.atspotify.com_
16. [Multimodal models need video. We froze time to give it to them](<https://posthog.com/blog/multimodal-models-need-video>) — _posthog.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-09-09` | Wednesday | [Read →](news/en/2026-09-09.md) |
| `2026-09-08` | Tuesday | [Read →](news/en/2026-09-08.md) |
| `2026-09-07` | Monday | [Read →](news/en/2026-09-07.md) |
| `2026-09-06` | 🗓️ Weekly recap | [Read →](news/en/2026-09-06.md) |
| `2026-09-05` | Saturday | [Read →](news/en/2026-09-05.md) |
| `2026-09-04` | Friday | [Read →](news/en/2026-09-04.md) |
| `2026-09-03` | Thursday | [Read →](news/en/2026-09-03.md) |
| `2026-09-02` | Wednesday | [Read →](news/en/2026-09-02.md) |
| `2026-09-01` | Tuesday | [Read →](news/en/2026-09-01.md) |
| `2026-08-31` | Monday | [Read →](news/en/2026-08-31.md) |
| `2026-08-30` | 🗓️ Weekly recap | [Read →](news/en/2026-08-30.md) |
| `2026-08-29` | Saturday | [Read →](news/en/2026-08-29.md) |
| `2026-08-28` | Friday | [Read →](news/en/2026-08-28.md) |
| `2026-08-27` | Thursday | [Read →](news/en/2026-08-27.md) |

<sub>[Browse the full archive (87) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
