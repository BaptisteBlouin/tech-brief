# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-09-20
<sub>updated 20 September 2026 at 13:00</sub>

## AI Agents & LLM Engineering
- Google highlights four engineering patterns behind top AI Agents Challenge submissions: bidirectional MCP for inter-agent communication, async event buses for parallel execution, unified validation for model fallbacks, and tiered routing to cut inference costs, emphasizing robust software design over linear prompt chains <sup>[1](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>)</sup>.
- Google releases ADK for Kotlin 1.0 with full parity to Python/Java, adding KMP support, zero-reflection type-safe function calling via KSP, and Android-first extensions (LiteRT-LM, Firebase AI, Room, AppSearch) for production-grade multi-agent workflows <sup>[2](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>)</sup>.
- Autonomous LLM post-training is demonstrated using Tunix on TPUs, where an agent iteratively explores SFT and RL (GRPO) hyperparameters (LoRA ranks, learning rates, batch sizes) and commits verified improvements to Git, orchestrated via Antigravity CLI and Gemma on Cloud TPUs <sup>[3](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>)</sup>.
- Behavioral (unit-style) evaluations are recommended over slow end-to-end benchmarks like SWE-bench: assert discrete intermediate actions (tool calls, file edits) to catch regressions quickly during prompt or model upgrades <sup>[4](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>)</sup>.

## AI Security & Governance
- Zero-trust AI agents are advocated via runtime governance on the Gemini Enterprise Agent Platform, using Model Armor (prompt screening), Semantic Governance Policies (intent evaluation), and Agent Anomaly Detection to neutralize multi-turn exploits without code changes <sup>[5](<https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/>)</sup>.
- Agent Anomaly Detection enters private preview for the platform, analyzing OpenTelemetry traces and tool calls with a multi-tier pipeline (statistical + LLM reasoning) to flag OWASP Agentic Top 10 risks and enable programmatic blocking via Security Command Center or API <sup>[6](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>)</sup>.

## Developer Experience & Tooling
- Google’s DevEx program refines enterprise AI governance by optimizing setup prerequisites, extension security, and policy enforcement, with updated docs and standardized samples for Agent Gateway and Semantic Governance <sup>[7](<https://developers.googleblog.com/driving-developer-excellence-inside-the-program-sprints/>)</sup>.
- Google open-sources its OpenAPI SDK generation suite with Speakeasy under AGPLv3, offering deterministic, multi-language generators with strict typing, SSE streaming, agent-native CLI compilation, and MCP documentation servers for CI-integrated SDK generation <sup>[8](<https://developers.googleblog.com/why-client-sdk-generation-belongs-in-the-open/>)</sup>.

## Sources

1. [4 engineering patterns behind the strongest AI Agents Challenge submissions](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>) — _google ai_
2. [Announcing ADK for Kotlin 1.0: Building Production-Ready AI Agents in Kotlin, Android, and Beyond](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>) — _google ai_
3. [Autonomous LLM post-training with Tunix on TPUs](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>) — _google ai_
4. [The Anatomy of Harness Engineering: How to Evaluate, Iterate, and Guard AI Coding Agents](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>) — _google ai_
5. [Build zero-trust AI agents that judge intent, not just syntax](<https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/>) — _google ai_
6. [Agent Anomaly Detection, now in Private Preview on the Gemini Enterprise Agent Platform](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>) — _google ai_
7. [Driving Developer Excellence: Inside the Program Sprints](<https://developers.googleblog.com/driving-developer-excellence-inside-the-program-sprints/>) — _google ai_
8. [Why client SDK generation belongs in the open](<https://developers.googleblog.com/why-client-sdk-generation-belongs-in-the-open/>) — _google ai_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
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
| `2026-09-09` | Wednesday | [Read →](news/en/2026-09-09.md) |
| `2026-09-08` | Tuesday | [Read →](news/en/2026-09-08.md) |
| `2026-09-07` | Monday | [Read →](news/en/2026-09-07.md) |
| `2026-09-06` | 🗓️ Weekly recap | [Read →](news/en/2026-09-06.md) |

<sub>[Browse the full archive (97) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
