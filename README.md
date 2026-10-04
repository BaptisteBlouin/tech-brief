# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-10-04
<sub>updated 4 October 2026 at 13:00</sub>

## AI Models and Training
- Google successfully reproduced Ai2's Olmo 3 7B language model from scratch on Cloud TPUs using MaxText and JAX/XLA, achieving up to 57.4% Model Flops Utilization while surviving mid-run cluster resizes <sup>[1](<https://developers.googleblog.com/reproducing-olmo-3-7b-pre-training-in-maxtext-case-study-of-large-scale-training-on-tpus/>)</sup>.
- The MaxText case study highlighted the critical need for held-out validation after catching a silent data loader memorization bug that artificially depressed training loss during reproduction <sup>[1](<https://developers.googleblog.com/reproducing-olmo-3-7b-pre-training-in-maxtext-case-study-of-large-scale-training-on-tpus/>)</sup>.
- Developers implemented Sparse VideoGen (SVG) and optimized the Splash Attention kernel on TPUs to achieve a 1.69x speedup for 1440p video generation by routing attention heads to sparse masks and optimizing memory layouts <sup>[2](<https://developers.googleblog.com/accelerating-spatio-temporal-attention-for-video-diffusion-on-tpus/>)</sup>.

## LLM Tooling and MLOps
- Google introduced **autofinetune**, an autonomous research loop for LLM post-training (Supervised Fine-Tuning and GRPO reinforcement learning) using Tunix, Gemma, and TPUs orchestrated with Antigravity CLI <sup>[3](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>)</sup>.
- Google released version 1.0 of the Agent Development Kit (ADK) for Kotlin, built on Kotlin Multiplatform with KSP for zero-reflection function calling and Android extensions supporting LiteRT-LM and Firebase AI <sup>[4](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>)</sup>.
- The Google Antigravity SDK added support for local AI models via LiteRT and drop-in compatibility with Ollama and vLLM for privacy-first workflows <sup>[5](<https://developers.googleblog.com/introducing-support-for-local-ai-models-in-the-antigravity-sdk/>)</sup>.
- Google Cloud API Gateway now functions as a native remote Model Context Protocol (MCP) server, allowing developers to convert REST APIs into agent-ready tools via OpenAPI annotations <sup>[6](<https://developers.googleblog.com/turn-your-rest-apis-into-mcp-tools-with-google-cloud-api-gateway/>)</sup>.
- Google partnered with Speakeasy to open-source their OpenAPI code generation suite under the AGPLv3 license for deterministic multi-language client SDK and documentation MCP server generation <sup>[7](<https://developers.googleblog.com/why-client-sdk-generation-belongs-in-the-open/>)</sup>.

## RAG, Agents, and Security
- Industry observers highlighted an urgent requirement for default hard budget caps on pay-by-usage APIs and AI agent services to prevent runaway resource consumption overnight <sup>[8](<https://simonwillison.net/2026/Oct/3/default-hard-budget-caps/>)</sup>.
- Google introduced platform-level runtime governance features for the Gemini Enterprise Agent Platform, including Model Armor, Semantic Governance Policies, and Agent Anomaly Detection <sup>[9](<https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/>)</sup>.
- Agent Anomaly Detection leverages OpenTelemetry traces, statistical scanning, and deep reasoning to catch behavioral risks based on the OWASP Agentic Top 10 without adding live request latency <sup>[10](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>)</sup>.

## Developer Tools and Infrastructure
- Google AI subscribers now receive premium Colab benefits, including priority accelerator access, background execution, and integration with developer tools like Antigravity and AI Studio <sup>[11](<https://developers.googleblog.com/colab-is-now-part-of-your-google-ai-plan/>)</sup>.

## Sources

1. [Reproducing Olmo 3 7B Pre-training in MaxText: case study of large scale training on TPUs](<https://developers.googleblog.com/reproducing-olmo-3-7b-pre-training-in-maxtext-case-study-of-large-scale-training-on-tpus/>) — _google ai_
2. [Accelerating Spatio-Temporal Attention for Video Diffusion on TPUs](<https://developers.googleblog.com/accelerating-spatio-temporal-attention-for-video-diffusion-on-tpus/>) — _google ai_
3. [Autonomous LLM post-training with Tunix on TPUs](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>) — _google ai_
4. [Announcing ADK for Kotlin 1.0: Building Production-Ready AI Agents in Kotlin, Android, and Beyond](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>) — _google ai_
5. [Introducing Support for Local AI Models in the Antigravity SDK](<https://developers.googleblog.com/introducing-support-for-local-ai-models-in-the-antigravity-sdk/>) — _google ai_
6. [Turn your REST APIs into MCP tools with Google Cloud API Gateway](<https://developers.googleblog.com/turn-your-rest-apis-into-mcp-tools-with-google-cloud-api-gateway/>) — _google ai_
7. [Why client SDK generation belongs in the open](<https://developers.googleblog.com/why-client-sdk-generation-belongs-in-the-open/>) — _google ai_
8. [We're going to need default hard budget caps on pretty much everything](<https://simonwillison.net/2026/Oct/3/default-hard-budget-caps/>) — _simonwillison.net_
9. [Build zero-trust AI agents that judge intent, not just syntax](<https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/>) — _google ai_
10. [Agent Anomaly Detection, now in Private Preview on the Gemini Enterprise Agent Platform](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>) — _google ai_
11. [Colab is now part of your Google AI plan](<https://developers.googleblog.com/colab-is-now-part-of-your-google-ai-plan/>) — _google ai_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-10-03` | Saturday | [Read →](news/en/2026-10-03.md) |
| `2026-10-02` | Friday | [Read →](news/en/2026-10-02.md) |
| `2026-10-01` | Thursday | [Read →](news/en/2026-10-01.md) |
| `2026-09-30` | Wednesday | [Read →](news/en/2026-09-30.md) |
| `2026-09-29` | Tuesday | [Read →](news/en/2026-09-29.md) |
| `2026-09-28` | Monday | [Read →](news/en/2026-09-28.md) |
| `2026-09-27` | 🗓️ Weekly recap | [Read →](news/en/2026-09-27.md) |
| `2026-09-26` | Saturday | [Read →](news/en/2026-09-26.md) |
| `2026-09-25` | Friday | [Read →](news/en/2026-09-25.md) |
| `2026-09-24` | Thursday | [Read →](news/en/2026-09-24.md) |
| `2026-09-23` | Wednesday | [Read →](news/en/2026-09-23.md) |
| `2026-09-22` | Tuesday | [Read →](news/en/2026-09-22.md) |
| `2026-09-21` | Monday | [Read →](news/en/2026-09-21.md) |
| `2026-09-20` | 🗓️ Weekly recap | [Read →](news/en/2026-09-20.md) |

<sub>[Browse the full archive (111) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
