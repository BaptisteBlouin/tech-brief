# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-09-11
<sub>updated 11 September 2026 at 13:01</sub>

## AI Agents and Tooling
- OpenAI releases a public beta of its **Agents API**, offering a managed harness for long-running agents with context management, tool use, subagent coordination, file/environment interactions, and persistent sessions <sup>[1](<https://openai.com/index/introducing-the-agents-api/>)</sup>.
- Google highlights **four engineering patterns** behind top AI agent submissions: bidirectional MCP for inter-agent comms, async event buses for parallelism, unified validation for fallbacks, and tiered routing to cut inference costs <sup>[2](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>)</sup>.
- Google’s **ADK for Kotlin 1.0** achieves parity with Python/Java, enabling idiomatic multi-agent development with KMP, zero-reflection KSP, human-in-the-loop workflows, and Android-first extensions (LiteRT-LM, Firebase AI, Room, AppSearch) <sup>[3](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>)</sup>.
- Google recommends **behavioral evaluations** (fast, local, unit-style tests on discrete actions) to complement end-to-end agent benchmarks, enabling safer prompt/system iteration without regressions <sup>[4](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>)</sup>.
- Industry trend: companies increasingly **route simpler requests to cheaper open models** and invest in model routing to reduce costs, with growing knowledge-sharing on cost-effective AI usage <sup>[5](<https://blog.pragmaticengineer.com/the-pulse-tech-companies-move-to-open-ai-models/>)</sup>.

## MLOps / DevOps and Infrastructure
- PlanetScale details the **lifecycle of a sharded Postgres query**, explaining how complex deployments across thousands of servers emulate a single database, with a concrete example across four shards <sup>[6](<https://planetscale.com/blog/the-lifecycle-of-a-sharded-postgres-query>)</sup>.
- Analysis argues **centralized router platforms** can deliver better economics than local deployments, with outcomes pricing best suited to the infrastructure layer rather than model or app layers <sup>[7](<https://hypersoren.xyz/posts/router-power/>)</sup>.

## Developer Tools and Practices
- **Datasette 1.0a39 and 0.65.4** ship security patches for public-facing instances mixing public/private tables; fixes were audited with Claude Fable 5.1, GPT-5.6, and GPT-6 Astra <sup>[8](<https://simonwillison.net/2026/Sep/11/datasette-security/>)</sup>.
- **trynix.dev** runs any Nix package from the past 13 years in a browser via qemu-wasm x86_64 Linux VM, enabling interactive shells (e.g., Python 3.6.2) and novel workflows like booting a PR environment for review <sup>[9](<https://simonwillison.net/2026/Sep/10/trynix/>)</sup>.
- Google’s **Gemini DevEx program** refines enterprise AI governance via sprint testing, improving setup prerequisites, extension security, and policy enforcement for Agent Gateway and Semantic Governance <sup>[10](<https://developers.googleblog.com/driving-developer-excellence-inside-the-program-sprints/>)</sup>.

## Sources

1. [Introducing the Agents API](<https://openai.com/index/introducing-the-agents-api/>) — _openai.com_
2. [4 engineering patterns behind the strongest AI Agents Challenge submissions](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>) — _google ai_
3. [Announcing ADK for Kotlin 1.0: Building Production-Ready AI Agents in Kotlin, Android, and Beyond](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>) — _google ai_
4. [The Anatomy of Harness Engineering: How to Evaluate, Iterate, and Guard AI Coding Agents](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>) — _google ai_
5. [Tech companies move to open AI models](<https://blog.pragmaticengineer.com/the-pulse-tech-companies-move-to-open-ai-models/>) — _blog.pragmaticengineer.com_
6. [The lifecycle of a sharded Postgres query](<https://planetscale.com/blog/the-lifecycle-of-a-sharded-postgres-query>) — _planetscale.com_
7. [Router Power](<https://hypersoren.xyz/posts/router-power/>) — _hypersoren.xyz_
8. [Datasette 1.0a39 and 0.65.4 security releases](<https://simonwillison.net/2026/Sep/11/datasette-security/>) — _simonwillison.net_
9. [Any Nix package, live in your browser](<https://simonwillison.net/2026/Sep/10/trynix/>) — _simonwillison.net_
10. [Driving Developer Excellence: Inside the Program Sprints](<https://developers.googleblog.com/driving-developer-excellence-inside-the-program-sprints/>) — _google ai_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-09-10` | Thursday | [Read →](news/en/2026-09-10.md) |
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

<sub>[Browse the full archive (88) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
