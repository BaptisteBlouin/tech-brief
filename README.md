# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-09-24
<sub>updated 24 September 2026 at 13:09</sub>

## AI Models, Agents, and RAG
- **Meta Connect 2026 Launches**: Meta introduced the Muse personal agent and a lightweight $1,299 VR glasses headset weighing ~100 grams with an external compute pack <sup>[1](<https://www.latent.space/p/ainews-meta-connect-2026-muse-glasses>), [2](<https://www.bloomberg.com/news/articles/2026-09-23/meta-launches-1-299-vr-headset-that-look-like-glasses-to-rival-apple-vision-pro?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc5MDIyNjQ3MywiZXhwIjoxNzkwODMxMjczLCJhcnRpY2xlSWQiOiJUTFRUVFFUOU5KTFMwMCIsImJjb25uZWN0SWQiOiIwOThFNzNDQTE5QTA0RDkxODEyQzQ4MjcwRDZERTI0QiJ9.M6Y1QJ3bC19uLscLkm71ztDA6rRfF34NahHUdWj1-_o>)</sup>. Meta also re-emerged its stealth MSL acquisition as "Charm," a palm-sized dedicated hardware device for the Muse assistant <sup>[1](<https://www.latent.space/p/ainews-meta-connect-2026-muse-glasses>), [3](<https://www.bloomberg.com/news/articles/2026-09-23/meta-debuts-a-dedicated-palm-sized-muse-charm-device-to-use-ai-on-the-go?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc5MDIyNjQyMywiZXhwIjoxNzkwODMxMjIzLCJhcnRpY2xlSWQiOiJUTFRUVUxUOU5KTFMwMCIsImJjb25uZWN0SWQiOiIwOThFNzNDQTE5QTA0RDkxODEyQzQ4MjcwRDZERTI0QiJ9.J09uijjWHjD0wCb8T3pAGsyiMxA0T5aNTAT18py752s>)</sup>. Reports indicate Muse relies partly on human contractors to handle phone-calling errands like booking appointments <sup>[4](<https://spyglass.org/meta-muse-ai-humans/>)</sup>.
- **Anthropic Life Sciences Breakthrough**: Anthropic's new life sciences research lab used Claude to discover a novel enzyme system featuring CRISPR-like repeat properties using high-level direction from scientists <sup>[5](<https://www.anthropic.com/news/claude-discovers-novel-enzyme-system>)</sup>.
- **Agent Frameworks & Patterns**: Successful multi-agent challenge submissions rely heavily on foundational patterns such as bidirectional Model Context Protocol (MCP), asynchronous event buses, and tiered routing to minimize expensive inference calls <sup>[6](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>)</sup>. Additionally, the Google Antigravity SDK added support for local offline execution via LiteRT and OpenAI-compatible endpoints like Ollama <sup>[7](<https://developers.googleblog.com/introducing-support-for-local-ai-models-in-the-antigravity-sdk/>)</sup>, while Kotlin ADK 1.0 reached parity for multi-platform agent workflows <sup>[8](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>)</sup>.
- **Clinical AI & Scale**: Concurrence uses Databricks and Unity Gateway to govern clinical AI workloads at an annualized scale of 1.2 trillion input tokens, centralizing access controls, agent states, and evaluation pipelines <sup>[9](<https://www.databricks.com/blog/how-concurrence-governs-clinical-ai-trillion-token-scale-unity-gateway>)</sup>.

## MLOps, Guardrails, and Evaluations
- **Real-Time Guardrails & Analytics**: TypeSafe's Jev model provides real-time guardrails, matching GPT-5.4 nano decisions while running significantly faster and cheaper <sup>[10](<https://arize.com/blog/llm-guardrails-jev/>)</sup>. Integrations for Jev have expanded to Snowflake via dbt (`Jevflake`) and MotherDuck SQL (`prompt_jev()`) for analytics-scale text classification <sup>[11](<https://github.com/KranzL/Jevflake>), [12](<https://motherduck.com/blog/motherduck-supports-jev/>)</sup>.
- **Autonomous Post-Training & Evaluation**: Google demonstrated `autofinetune`, an autonomous loop running on TPUs using Tunix and Gemma for self-directed SFT and GRPO fine-tuning experiments <sup>[13](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>)</sup>. Meanwhile, an audit of over 5,000 AI benchmark tasks exposed that 29 major datasets suffer from leaked answers and gameable graders that artificially inflate model scores <sup>[14](<https://www.horizonanalyticslabs.com/research/public-benchmark-dataset-audit>)</sup>.
- **Agent Governance & Safety**: Platforms are introducing out-of-band monitoring layers, such as Gemini Enterprise's Agent Anomaly Detection, which uses OpenTelemetry traces and OWASP Agentic Top 10 rules to flag behavioral risks without adding latency <sup>[15](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>)</sup>.

## DevOps, Cloud, and Infrastructure
- **OpenTelemetry & Collector Updates**: OpenTelemetry is advancing an adaptive tail sampler in the Collector that buffers traces, applies ordered rules, and attaches W3C probability thresholds to accurately retain rare incident data without blowing memory limits <sup>[16](<https://www.honeycomb.io/blog/how-adaptive-tail-sampling-works>)</sup>.
- **Data Infrastructure & Real-Time Lakehouses**: Apache Fluss 1.0 launched as a real-time data foundation for AI, adding a Rust HTTP Gateway, native Python access, and deep integration with Flink, Spark, and Hudi <sup>[17](<https://fluss.apache.org/blog/releases/1.0/>)</sup>. Apache Cassandra versions 5 and 6 bring native vector search, storage-attached indexing, and cross-partition transactions <sup>[18](<https://softwaremill.com/apache-cassandra-5-6-what-changed-since-3-11/>)</sup>.
- **Edge & Space Compute**: China launched the Supercomputing-1 satellite featuring onboard AI compute to process Earth-observation data in orbit, cutting cross-regional pipeline times from hours to minutes <sup>[19](<https://www.tomshardware.com/tech-industry/space/china-puts-ai-compute-into-orbit-with-supercomputing-1-satellite-onboard-processing-aims-to-cut-earth-observation-data-processing-from-hours-to-minutes>)</sup>.

## Developer Tools and Software Engineering
- **Claude.ai Performance Sprint**: Anthropic optimized claude.ai and its desktop apps during a two-week sprint, reducing initial page load times from 3.1 to 0.55 seconds <sup>[20](<https://claude.dev/blog/how-we-made-claude-ai-faster/>)</sup>.
- **SQL & Data Tooling Innovations**: CedarDB ported the logic and renderer of the original *Doom* almost entirely to SQL, running the game loop at 35 Hz <sup>[21](<https://cedardb.com/blog/sqldoom/>)</sup>. DuckDB shipped directly inside dbt v2's Rust-based Fusion engine, adding Iceberg REST catalog support and static type analysis before warehouse execution <sup>[22](<https://duckdb.org/2026/09/22/dbt-fusion.html>)</sup>. Polars also introduced a local open-source query profiler <sup>[23](<https://pola.rs/posts/profile-local-queries/>)</sup>.
- **Open-Source SDK Generation**: Google partnered with Speakeasy to open-source its OpenAPI code generation suite under AGPLv3, providing multi-language SDK and MCP server generators for CI pipelines <sup>[24](<https://developers.googleblog.com/why-client-sdk-generation-belongs-in-the-open/>)</sup>.

## Sources

1. [\[AINews\] Meta Connect 2026: Muse glasses, voice, video, and Charm](<https://www.latent.space/p/ainews-meta-connect-2026-muse-glasses>) — _latent.space_
2. [Meta Launches Lightweight $1,299 VR Headset That Looks Like Glasses](<https://www.bloomberg.com/news/articles/2026-09-23/meta-launches-1-299-vr-headset-that-look-like-glasses-to-rival-apple-vision-pro?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc5MDIyNjQ3MywiZXhwIjoxNzkwODMxMjczLCJhcnRpY2xlSWQiOiJUTFRUVFFUOU5KTFMwMCIsImJjb25uZWN0SWQiOiIwOThFNzNDQTE5QTA0RDkxODEyQzQ4MjcwRDZERTI0QiJ9.M6Y1QJ3bC19uLscLkm71ztDA6rRfF34NahHUdWj1-_o>) — _bloomberg.com_
3. [Meta Debuts Dedicated ‘Charm' Device for Using Muse AI](<https://www.bloomberg.com/news/articles/2026-09-23/meta-debuts-a-dedicated-palm-sized-muse-charm-device-to-use-ai-on-the-go?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc5MDIyNjQyMywiZXhwIjoxNzkwODMxMjIzLCJhcnRpY2xlSWQiOiJUTFRUVUxUOU5KTFMwMCIsImJjb25uZWN0SWQiOiIwOThFNzNDQTE5QTA0RDkxODEyQzQ4MjcwRDZERTI0QiJ9.J09uijjWHjD0wCb8T3pAGsyiMxA0T5aNTAT18py752s>) — _bloomberg.com_
4. [Meta Muse is People](<https://spyglass.org/meta-muse-ai-humans/>) — _spyglass.org_
5. [Claude discovers a novel enzyme system with CRISPR-like repeats](<https://www.anthropic.com/news/claude-discovers-novel-enzyme-system>) — _anthropic.com_
6. [4 engineering patterns behind the strongest AI Agents Challenge submissions](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>) — _google ai_
7. [Introducing Support for Local AI Models in the Antigravity SDK](<https://developers.googleblog.com/introducing-support-for-local-ai-models-in-the-antigravity-sdk/>) — _google ai_
8. [Announcing ADK for Kotlin 1.0: Building Production-Ready AI Agents in Kotlin, Android, and Beyond](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>) — _google ai_
9. [How Concurrence governs clinical AI at a trillion-token scale with Unity Gateway](<https://www.databricks.com/blog/how-concurrence-governs-clinical-ai-trillion-token-scale-unity-gateway>) — _databricks.com_
10. [Real-time LLM guardrails with Jev: comparing latency and cost](<https://arize.com/blog/llm-guardrails-jev/>) — _arize.com_
11. [Jevflake](<https://github.com/KranzL/Jevflake>) — _github.com_
12. [Introducing prompt_jev(): bringing Jev to MotherDuck SQL](<https://motherduck.com/blog/motherduck-supports-jev/>) — _motherduck.com_
13. [Autonomous LLM post-training with Tunix on TPUs](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>) — _google ai_
14. [Benchmarks are more broken than we could have imagined](<https://www.horizonanalyticslabs.com/research/public-benchmark-dataset-audit>) — _horizonanalyticslabs.com_
15. [Agent Anomaly Detection, now in Private Preview on the Gemini Enterprise Agent Platform](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>) — _google ai_
16. [How Adaptive Tail Sampling Works in the OpenTelemetry Collector](<https://www.honeycomb.io/blog/how-adaptive-tail-sampling-works>) — _honeycomb.io_
17. [Announcing Apache Fluss 1.0: Real-Time Data Foundation for AI](<https://fluss.apache.org/blog/releases/1.0/>) — _fluss.apache.org_
18. [If You Last Used Cassandra 3.11, You Might Not Recognize It Today](<https://softwaremill.com/apache-cassandra-5-6-what-changed-since-3-11/>) — _softwaremill.com_
19. [China puts AI compute into orbit with Supercomputing-1 satellite — onboard processing aims to cut Earth-observation data processing from hours to minutes](<https://www.tomshardware.com/tech-industry/space/china-puts-ai-compute-into-orbit-with-supercomputing-1-satellite-onboard-processing-aims-to-cut-earth-observation-data-processing-from-hours-to-minutes>) — _tomshardware.com_
20. [How we made claude.ai 3x faster in two weeks](<https://claude.dev/blog/how-we-made-claude-ai-faster/>) — _claude.dev_
21. [We ported the original Doom to SQL](<https://cedardb.com/blog/sqldoom/>) — _cedardb.com_
22. [DuckDB Now Ships inside dbt v2](<https://duckdb.org/2026/09/22/dbt-fusion.html>) — _duckdb.org_
23. [Profile your Polars queries](<https://pola.rs/posts/profile-local-queries/>) — _pola.rs_
24. [Why client SDK generation belongs in the open](<https://developers.googleblog.com/why-client-sdk-generation-belongs-in-the-open/>) — _google ai_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-09-23` | Wednesday | [Read →](news/en/2026-09-23.md) |
| `2026-09-22` | Tuesday | [Read →](news/en/2026-09-22.md) |
| `2026-09-21` | Monday | [Read →](news/en/2026-09-21.md) |
| `2026-09-20` | 🗓️ Weekly recap | [Read →](news/en/2026-09-20.md) |
| `2026-09-19` | Saturday | [Read →](news/en/2026-09-19.md) |
| `2026-09-18` | Friday | [Read →](news/en/2026-09-18.md) |
| `2026-09-17` | Thursday | [Read →](news/en/2026-09-17.md) |
| `2026-09-16` | Wednesday | [Read →](news/en/2026-09-16.md) |
| `2026-09-15` | Tuesday | [Read →](news/en/2026-09-15.md) |
| `2026-09-14` | Monday | [Read →](news/en/2026-09-14.md) |
| `2026-09-13` | 🗓️ Weekly recap | [Read →](news/en/2026-09-13.md) |
| `2026-09-12` | Saturday | [Read →](news/en/2026-09-12.md) |
| `2026-09-11` | Friday | [Read →](news/en/2026-09-11.md) |
| `2026-09-10` | Thursday | [Read →](news/en/2026-09-10.md) |

<sub>[Browse the full archive (101) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
