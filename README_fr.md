# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-10-02
<sub>mis à jour le 2 octobre 2026 à 13:00</sub>

## AI Models, Tooling, and Infrastructure
- **Pi 1.0 & Pi Durable**: The Earendil team released Pi 1.0 featuring native Model Context Protocol (MCP) support, virtual model extensions, deferred tool loading, cache warming for Anthropic models, and mid-conversation system messages <sup>[1](<https://www.latent.space/p/ainews-pi-10-pi-durable-and-aie-nyc>)</sup>. Additionally, Pi Durable externalizes stateful components and ports the framework to TypeScript to record every step as a checkpointed task, allowing agents to automatically resume from their exact state after a crash <sup>[1](<https://www.latent.space/p/ainews-pi-10-pi-durable-and-aie-nyc>)</sup>.
- **Blackwell Attention Optimization**: PyTorch introduced Jagged Flash Attention (JFA) for Meta's Generative Ads Model on NVIDIA Blackwell B200, built using Triton Low-level Extensions (TLX) <sup>[2](<https://pytorch.org/blog/optimizing-jagged-flash-attention-with-tlx-the-road-toward-sota-fa4-on-blackwell/>)</sup>. TLX achieves a 3.2K-line implementation that outperforms state-of-the-art FlashAttention-4 kernels by ~13% on forward passes and ~50% on backward passes while remaining in Triton's high-level programming model <sup>[2](<https://pytorch.org/blog/optimizing-jagged-flash-attention-with-tlx-the-road-toward-sota-fa4-on-blackwell/>)</sup>.
- **Cloudflare Clef Decision Models**: Cloudflare introduced Clef and Clef-flash, fully Jev-API compatible open-source decision models designed to help agents programmatically gather context, make decisions, and take actions <sup>[3](<https://blog.cloudflare.com/clef-decision-models/>)</sup>.
- **Autonomous Post-Training on TPUs**: Google detailed an autonomous reinforcement learning and supervised fine-tuning pipeline utilizing Tunix and Cloud TPUs, allowing agent loops to iterate over hyperparameters like LoRA ranks and rollout temperatures autonomously <sup>[4](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>)</sup>.
- **Broadcom and Anthropic Infrastructure**: Broadcom is reportedly amassing $60 billion to fund custom chips and underlying infrastructure for Anthropic and other AI partners <sup>[5](<https://www.bloomberg.com/news/articles/2026-10-02/broadcom-starts-amassing-60-billion-to-fund-chips-for-anthropic?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc5MDkyMjQzOCwiZXhwIjoxNzkxNTI3MjM4LCJhcnRpY2xlSWQiOiJUTTkwWUVLSzNOWUQwMCIsImJjb25uZWN0SWQiOiJFQTExNDNDNTM4NEE0RUY5QTg5RjJEN0IxMTg2MzcwOSJ9.ou2DaP8DyjOKlNzvvF7qkpSHPum6rWuWYguG_k-KLHo>)</sup>.

## Agents, RAG, and Security
- **Kotlin Agent Development Kit (ADK) 1.0**: Google released ADK 1.0 for Kotlin with full parity across Python and Java cores, supporting KMP, zero-reflection type-safe function calling via KSP, and Android-first extensions for local LiteRT-LM models and AppSearch semantic memory <sup>[6](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>)</sup>.
- **Runtime Agent Security Governance**: The Gemini Enterprise Agent Platform introduced managed defenses including Model Armor for prompt screening, Semantic Governance Policies for evaluating tool intent, and Agent Anomaly Detection to catch multi-turn exploits and OpenTelemetry trace anomalies without runtime latency <sup>[7](<https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/>), [8](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>)</sup>.
- **Agent Session Transcripts**: Practitioners emphasize the critical value of retaining and monitoring agent session transcripts as a primary telemetry layer for catching early behavioral warning signs and logic regressions <sup>[9](<https://quesma.com/blog/agent-session-transcripts-are-precious/>)</sup>.

## DevOps, Database, and Developer Engineering
- **DuckDB Dimension Tables**: DuckDB highlighted performance improvements for analytical workloads with repeated strings by utilizing dimension tables to reduce redundant string storage across large Parquet datasets <sup>[10](<https://duckdb.org/2026/10/02/dimension-tables.html>)</sup>.
- **Aurora PostgreSQL Lakehouse Queries**: Amazon Aurora PostgreSQL added native support for directly querying Apache Iceberg and Parquet data residing in data lakes using standard PostgreSQL applications <sup>[11](<https://aws.amazon.com/blogs/aws/amazon-aurora-postgresql-now-supports-direct-querying-of-apache-iceberg-and-parquet-data-in-your-data-lake/>)</sup>.
- **Rust 32-bit Windows Target Demotion**: Rust version 1.100.0 demotes i686-pc-windows-msvc to a target without host tools and i686-pc-windows-gnu to a Tier 2 target without host tools, requiring developers to cross-compile 32-bit binaries from 64-bit Windows host toolchains <sup>[12](<https://blog.rust-lang.org/2026/10/02/demoting-i686-windows-targets-to-std-only/>)</sup>.
- **OpenAPI Code Generation Open-Sourced**: Google partnered with Speakeasy to open-source its OpenAPI code generation suite under AGPLv3, giving teams deterministic multi-language SDK generators and tools for compiling documentation MCP servers <sup>[13](<https://developers.googleblog.com/why-client-sdk-generation-belongs-in-the-open/>)</sup>.

## Sources

1. [\[AINews\] Pi 1.0, Pi Durable, and AIE NYC](<https://www.latent.space/p/ainews-pi-10-pi-durable-and-aie-nyc>) — _latent.space_
2. [Optimizing Jagged Flash Attention with TLX: The Road Toward SOTA FA4 on Blackwell](<https://pytorch.org/blog/optimizing-jagged-flash-attention-with-tlx-the-road-toward-sota-fa4-on-blackwell/>) — _pytorch.org_
3. [Introducing Clef: our open-source decision models, and new RL fine-tuning platform](<https://blog.cloudflare.com/clef-decision-models/>) — _blog.cloudflare.com_
4. [Autonomous LLM post-training with Tunix on TPUs](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>) — _google ai_
5. [Broadcom Starts Amassing $60 Billion to Fund Chips for Anthropic](<https://www.bloomberg.com/news/articles/2026-10-02/broadcom-starts-amassing-60-billion-to-fund-chips-for-anthropic?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc5MDkyMjQzOCwiZXhwIjoxNzkxNTI3MjM4LCJhcnRpY2xlSWQiOiJUTTkwWUVLSzNOWUQwMCIsImJjb25uZWN0SWQiOiJFQTExNDNDNTM4NEE0RUY5QTg5RjJEN0IxMTg2MzcwOSJ9.ou2DaP8DyjOKlNzvvF7qkpSHPum6rWuWYguG_k-KLHo>) — _bloomberg.com_
6. [Announcing ADK for Kotlin 1.0: Building Production-Ready AI Agents in Kotlin, Android, and Beyond](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>) — _google ai_
7. [Build zero-trust AI agents that judge intent, not just syntax](<https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/>) — _google ai_
8. [Agent Anomaly Detection, now in Private Preview on the Gemini Enterprise Agent Platform](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>) — _google ai_
9. [Your agent session transcripts are precious, keep them](<https://quesma.com/blog/agent-session-transcripts-are-precious/>) — _quesma.com_
10. [Faster String Aggregations with Dimension Tables](<https://duckdb.org/2026/10/02/dimension-tables.html>) — _duckdb.org_
11. [Amazon Aurora PostgreSQL now supports direct querying of Apache Iceberg and Parquet data in your data lake](<https://aws.amazon.com/blogs/aws/amazon-aurora-postgresql-now-supports-direct-querying-of-apache-iceberg-and-parquet-data-in-your-data-lake/>) — _aws.amazon.com_
12. [Demoting i686 Windows targets to std-only](<https://blog.rust-lang.org/2026/10/02/demoting-i686-windows-targets-to-std-only/>) — _blog.rust-lang.org_
13. [Why client SDK generation belongs in the open](<https://developers.googleblog.com/why-client-sdk-generation-belongs-in-the-open/>) — _google ai_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-10-01` | Jeudi | [Lire →](news/fr/2026-10-01.md) |
| `2026-09-30` | Mercredi | [Lire →](news/fr/2026-09-30.md) |
| `2026-09-29` | Mardi | [Lire →](news/fr/2026-09-29.md) |
| `2026-09-28` | Lundi | [Lire →](news/fr/2026-09-28.md) |
| `2026-09-27` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-09-27.md) |
| `2026-09-26` | Samedi | [Lire →](news/fr/2026-09-26.md) |
| `2026-09-25` | Vendredi | [Lire →](news/fr/2026-09-25.md) |
| `2026-09-24` | Jeudi | [Lire →](news/fr/2026-09-24.md) |
| `2026-09-23` | Mercredi | [Lire →](news/fr/2026-09-23.md) |
| `2026-09-22` | Mardi | [Lire →](news/fr/2026-09-22.md) |
| `2026-09-21` | Lundi | [Lire →](news/fr/2026-09-21.md) |
| `2026-09-20` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-09-20.md) |
| `2026-09-19` | Samedi | [Lire →](news/fr/2026-09-19.md) |
| `2026-09-18` | Vendredi | [Lire →](news/fr/2026-09-18.md) |

<sub>[Parcourir toute l’archive (109) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
