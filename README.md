# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-09-16
<sub>updated 16 September 2026 at 13:01</sub>

## AI Models and Agent Systems
- Google releases **Gemini 3.8 Live** and **3.8 Live Extended Thinking**, speech-to-speech models comparable to OpenAI’s GPT-Live; a community-built web UI enables voice conversations with interrupt capability <sup>[1](<https://simonwillison.net/2026/Sep/15/gemini-live/>)</sup>.
- Google’s AI Agents Challenge highlights **four engineering patterns** for robust multi-agent systems: bidirectional MCP for inter-agent communication, async event buses for parallelism, unified validation for fallbacks, and tiered routing to reduce inference costs <sup>[2](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>)</sup>.
- **ADK for Kotlin 1.0** achieves feature parity with Python/Java, enabling idiomatic multi-agent development with Kotlin Multiplatform, zero-reflection type-safe function calling, and Android-first extensions (LiteRT-LM, Firebase AI, Room, AppSearch) <sup>[3](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>)</sup>.
- **Autonomous LLM post-training** is demonstrated using **Tunix on TPUs**, with agents iterating over fine-tuning experiments (LoRA ranks, learning rates, batch sizes) and committing verified improvements to Git <sup>[4](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>)</sup>.
- **TypeSafe AI** introduces **System One Models** and **Jev**, a new class of frontier models designed for fast, structured, software-usable decision-making <sup>[5](<https://typesafe.ai/blog/introducing-system-one-models-and-jev>)</sup>.

## AI Governance, Security, and Evaluation
- **Zero-trust AI agents** can be built using **Gemini Enterprise Agent Platform**, with dynamic runtime governance via Model Armor (prompt screening), Semantic Governance Policies (intent evaluation), and Agent Anomaly Detection (multi-turn exploit prevention) <sup>[6](<https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/>)</sup>.
- **Behavioral evaluations** (fast, local, unit-style tests) are recommended over end-to-end benchmarks like SWE-bench for diagnosing AI coding agent failures, enabling safer iteration on prompts and model upgrades <sup>[7](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>)</sup>.
- Google’s **Gemini DevEx program** refines enterprise AI governance, improving setup prerequisites, extension security, and policy enforcement for Agent Gateway and Semantic Governance <sup>[8](<https://developers.googleblog.com/driving-developer-excellence-inside-the-program-sprints/>)</sup>.

## Developer Tools and Infrastructure
- **Tailcat** is released: a netcat-like tool operating over Tailscale’s data plane without its control plane, useful for secure networking workflows <sup>[9](<https://github.com/tailscale/tailcat>)</sup>.
- Cloudflare introduces a **Disallow AI Training** setting, allowing content to remain search-indexed while blocking AI training crawlers <sup>[10](<https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/>)</sup>.

## Notable Industry Context
- OpenRouter users **spent more on OpenAI models than Anthropic** last week for the first time in over two years, signaling shifting model preferences <sup>[11](<https://threadreaderapp.com/thread/2099898254905549220.html>)</sup>.

## Sources

1. [Gemini Live audio](<https://simonwillison.net/2026/Sep/15/gemini-live/>) — _simonwillison.net_
2. [4 engineering patterns behind the strongest AI Agents Challenge submissions](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>) — _google ai_
3. [Announcing ADK for Kotlin 1.0: Building Production-Ready AI Agents in Kotlin, Android, and Beyond](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>) — _google ai_
4. [Autonomous LLM post-training with Tunix on TPUs](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>) — _google ai_
5. [Introducing System One Models & Jev](<https://typesafe.ai/blog/introducing-system-one-models-and-jev>) — _typesafe.ai_
6. [Build zero-trust AI agents that judge intent, not just syntax](<https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/>) — _google ai_
7. [The Anatomy of Harness Engineering: How to Evaluate, Iterate, and Guard AI Coding Agents](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>) — _google ai_
8. [Driving Developer Excellence: Inside the Program Sprints](<https://developers.googleblog.com/driving-developer-excellence-inside-the-program-sprints/>) — _google ai_
9. [Tailcat](<https://github.com/tailscale/tailcat>) — _github.com_
10. [Have it both ways: stay discoverable in search while disallowing AI training](<https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/>) — _blog.cloudflare.com_
11. [OpenRouter users spent more on OpenAI models than on Anthropic models last week](<https://threadreaderapp.com/thread/2099898254905549220.html>) — _threadreaderapp.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
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
| `2026-09-05` | Saturday | [Read →](news/en/2026-09-05.md) |
| `2026-09-04` | Friday | [Read →](news/en/2026-09-04.md) |
| `2026-09-03` | Thursday | [Read →](news/en/2026-09-03.md) |
| `2026-09-02` | Wednesday | [Read →](news/en/2026-09-02.md) |

<sub>[Browse the full archive (93) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
