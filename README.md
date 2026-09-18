# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-09-18
<sub>updated 18 September 2026 at 13:01</sub>

## AI Models and Agents
- Anthropic rolls out **Claude Code Projects**, enabling a single conversation to spawn parallel cloud sessions, pass context between threads, and continue running after user disconnect; described internally as a coordinator abstraction with long-lived memory and aggregated status updates <sup>[1](<https://www.latent.space/p/ainews-not-much-happened-today-612>)</sup>.
- Anthropic reports **Claude drives 26% of its R&D**, with over 30,000 agents active at any time and staff collaborating with the model for ~90% of their work <sup>[2](<https://www.bloomberg.com/news/articles/2026-09-17/anthropic-says-claude-drives-26-of-its-research-and-development?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4OTcxMDY4NywiZXhwIjoxNzkwMzE1NDg3LCJhcnRpY2xlSWQiOiJUTElaRDlSMjRVOFEwMCIsImJjb25uZWN0SWQiOiJBOEExRDhFQTI5OTc0OTRGQTQ1QUE2REJBMjAwNTM3MSJ9.fTu1G_CGaCwSN3j0oCYF2DV7eS4Q4BFX-e_vcQx3qTY>)</sup>.
- **Figure’s Helix 2.5** demonstrates zero-shot generalization across 30 unseen homes, performing tasks like tidying and folding towels, suggesting whole-body intelligence can be learned from large-scale human behavior data <sup>[3](<https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization>)</sup>.
- Google highlights **engineering patterns for robust AI agents**: bidirectional MCP for inter-agent communication, async event buses, unified validation, and tiered routing to reduce latency and cost <sup>[4](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>)</sup>.
- Google releases **ADK for Kotlin 1.0**, achieving feature parity with Python/Java for production-ready agents, with Android-first extensions (LiteRT-LM, Firebase AI, Room, AppSearch) <sup>[5](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>)</sup>.

## LLM Tooling and Workflows
- **Safari 27.0** introduces **Safari MCP**, giving coding agents control over browser windows, DOM, network requests, screenshots, and console output to streamline web-based development workflows <sup>[6](<https://webkit.org/blog/18325/webkit-features-for-safari-27-0/>)</sup>.
- **Bend** emerges as a new language for communicating intent to AI, aiming to bridge human-AI collaboration <sup>[7](<https://github.com/bendlang/bend>)</sup>.
- Practical guidance on **LLM-assisted writing**: use models as copyeditors, avoid adopting their phrasing, and leverage them for fact-checking and grammar <sup>[8](<https://simonwillison.net/2026/Sep/17/how-to-write-with-an-llm/>), [9](<https://sockpuppet.org/blog/2026/09/17/how-to-write-with-an-llm/>)</sup>.

## Security and Governance
- **OpenAI accounts compromised** via chained vulnerabilities, enabling access to internal repositories and connectors; a full disclosure timeline is published <sup>[10](<https://www.hacktron.ai/blog/hacking-openai>)</sup>.
- **Targeted attacks on Rust maintainers**: ongoing campaign uses fake video calls to trick targets into installing malware or executing commands, following a recent supply-chain attack on the `arrayref` crate <sup>[11](<https://simonwillison.net/2026/Sep/17/targeted-attacks-on-rustaceans/>)</sup>.
- Google’s **Gemini Enterprise Agent Platform** adds **Agent Anomaly Detection** (private preview) to analyze OpenTelemetry traces and tool calls for behavioral risks, grounded in OWASP Agentic Top 10 <sup>[12](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>)</sup>.
- **Zero-trust AI agents** shift from static to dynamic runtime governance with **Model Armor**, **Semantic Governance Policies**, and anomaly detection to judge intent, not just syntax <sup>[13](<https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/>)</sup>.

## MLOps and DevOps
- Google advocates **behavioral evaluations** for AI agents: fast, local unit-style tests for intermediate actions (e.g., tool calls) to complement macro benchmarks like SWE-bench, enabling safer iterations <sup>[14](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>)</sup>.
- **Autonomous LLM post-training** with **Tunix on TPUs** automates fine-tuning loops (e.g., LoRA ranks, learning rates) using Google’s AI stack (Gemma, Cloud TPUs, Antigravity CLI, Gemini Flash 3.7) <sup>[15](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>)</sup>.
- Google open-sources **OpenAPI SDK generation** (via Speakeasy) under AGPLv3, offering deterministic, multi-language generators with strict typing and SSE streaming for CI integration <sup>[16](<https://developers.googleblog.com/why-client-sdk-generation-belongs-in-the-open/>)</sup>.

## Cloud and Infrastructure
- **Huawei** plans to release two new AI chips next year, having shipped over 1,000 AI systems to 370+ customers, as China’s AI chip market targets $67B by 2030 <sup>[17](<https://www.wsj.com/tech/ai/huaweis-plan-to-become-chinas-nvidia-8af8d8a1?st=uMfgNY&reflink=desktopwebshare_permalink>)</sup>.
- **Crusoe** pivots from massive AI data centers to **modular, factory-built micro data centers** for faster, cheaper inference deployment <sup>[18](<https://www.wsj.com/tech/ai/the-startup-that-built-openais-biggest-data-center-is-now-making-tiny-ones-71f36a4f?st=CxscFN&reflink=desktopwebshare_permalink>)</sup>.
- **PyTorch Day Japan 2026** (Dec 10) announced, with CFP open; topics include sovereign AI, edge/physical AI, and PyTorch ecosystem projects (vLLM, DeepSpeed, Ray) <sup>[19](<https://pytorch.org/blog/pytorch-day-japan-2026-comes-to-tokyo/>)</sup>.

## Sources

1. [\[AINews\] not much happened today](<https://www.latent.space/p/ainews-not-much-happened-today-612>) — _latent.space_
2. [Anthropic Says Claude Drives 26% of Its Research and Development](<https://www.bloomberg.com/news/articles/2026-09-17/anthropic-says-claude-drives-26-of-its-research-and-development?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4OTcxMDY4NywiZXhwIjoxNzkwMzE1NDg3LCJhcnRpY2xlSWQiOiJUTElaRDlSMjRVOFEwMCIsImJjb25uZWN0SWQiOiJBOEExRDhFQTI5OTc0OTRGQTQ1QUE2REJBMjAwNTM3MSJ9.fTu1G_CGaCwSN3j0oCYF2DV7eS4Q4BFX-e_vcQx3qTY>) — _bloomberg.com_
3. [Helix 2.5: Zero-Shot 30-Home Generalization](<https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization>) — _figure.ai_
4. [4 engineering patterns behind the strongest AI Agents Challenge submissions](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>) — _google ai_
5. [Announcing ADK for Kotlin 1.0: Building Production-Ready AI Agents in Kotlin, Android, and Beyond](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>) — _google ai_
6. [WebKit Features for Safari 27.0](<https://webkit.org/blog/18325/webkit-features-for-safari-27-0/>) — _webkit.org_
7. [Bend](<https://github.com/bendlang/bend>) — _github.com_
8. [How To Write With An LLM](<https://simonwillison.net/2026/Sep/17/how-to-write-with-an-llm/>) — _simonwillison.net_
9. [How To Write With An LLM](<https://sockpuppet.org/blog/2026/09/17/how-to-write-with-an-llm/>) — _sockpuppet.org_
10. [Hacking OpenAI](<https://www.hacktron.ai/blog/hacking-openai>) — _hacktron.ai_
11. [Be alert: targeted attacks on prominent Rustaceans](<https://simonwillison.net/2026/Sep/17/targeted-attacks-on-rustaceans/>) — _simonwillison.net_
12. [Agent Anomaly Detection, now in Private Preview on the Gemini Enterprise Agent Platform](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>) — _google ai_
13. [Build zero-trust AI agents that judge intent, not just syntax](<https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/>) — _google ai_
14. [The Anatomy of Harness Engineering: How to Evaluate, Iterate, and Guard AI Coding Agents](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>) — _google ai_
15. [Autonomous LLM post-training with Tunix on TPUs](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>) — _google ai_
16. [Why client SDK generation belongs in the open](<https://developers.googleblog.com/why-client-sdk-generation-belongs-in-the-open/>) — _google ai_
17. [Huawei's Plan to Become China's Nvidia](<https://www.wsj.com/tech/ai/huaweis-plan-to-become-chinas-nvidia-8af8d8a1?st=uMfgNY&reflink=desktopwebshare_permalink>) — _wsj.com_
18. [The Startup That Built OpenAI's Biggest Data Center Is Now Making Tiny Ones](<https://www.wsj.com/tech/ai/the-startup-that-built-openais-biggest-data-center-is-now-making-tiny-ones-71f36a4f?st=CxscFN&reflink=desktopwebshare_permalink>) — _wsj.com_
19. [PyTorch Day Japan 2026 Comes to Tokyo on December 10](<https://pytorch.org/blog/pytorch-day-japan-2026-comes-to-tokyo/>) — _pytorch.org_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
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
| `2026-09-05` | Saturday | [Read →](news/en/2026-09-05.md) |
| `2026-09-04` | Friday | [Read →](news/en/2026-09-04.md) |

<sub>[Browse the full archive (95) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
