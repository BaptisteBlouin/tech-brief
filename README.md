# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-08-27
<sub>updated 27 August 2026 at 13:00</sub>

## AI Models and Tooling
- NVIDIA is in advanced talks to acquire Hugging Face for ~$13B, roughly 80x its $150M ARR, following a doubled customer base in 2026 <sup>[1](<https://www.latent.space/p/ainews-nvidia-buys-huggingface-for>), [2](<https://www.bloomberg.com/news/articles/2026-08-27/nvidia-discussed-buying-ai-startup-hugging-face-insider-says?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4NzgwNDE3MSwiZXhwIjoxNzg4NDA4OTcxLCJhcnRpY2xlSWQiOiJUS0VLSlhUOU5KTFcwMCIsImJjb25uZWN0SWQiOiJCMzZENUE5QzIxMDQ0NjU4OTFBMTc1MTVDRDNBQkZFNiJ9.Ff4hpy1ocSnzvdZdbuzix3Qqh2bpMJlDlp5U3vvlZ-8>)</sup>.
- Z.ai reveals it is the lab behind the "Ox Alpha" model, now confirmed as GLM-5.3-Flash, a reasoning model for coding and agentic workloads, with open-sourced weights <sup>[3](<https://techcrunch.com/2026/08/26/surprise-z-ai-is-the-ai-lab-behind-the-mysterious-ox-alpha-model/>)</sup>.
- Qwen releases Qwen3.8-Flash-Next, a 125B-token multimodal MoE with 6B active parameters, previewing Qwen4’s architecture and showing strong reasoning in early tests <sup>[4](<https://simonwillison.net/2026/Aug/26/qwen38-flash-next/>)</sup>.
- OpenAI unveils its custom inference chip "Jalapeño" at Hot Chips, claiming performance-per-watt advantages over Blackwell and signaling a shift in the inference stack <sup>[5](<https://www.latent.space/p/ainews-hot-chips-openais-jalapeno>)</sup>.

## Agents, RAG and LLM Engineering
- LinkedIn details a cognitive memory agent for hiring personalization using four memory layers (conversational, episodic, semantic, procedural), replacing GraphRAG with a hierarchical tree for cheaper, traceable updates <sup>[6](<https://stackoverflow.blog/2026/08/25/inside-linkedin-s-cognitive-memory-agent/>)</sup>.
- Salesforce integrates its entire CRM into Claude ("Claudeforce"), enabling live data queries and updates via 37 pre-built sales skills, with an open beta planned for September <sup>[7](<https://venturebeat.com/orchestration/salesforce-just-put-its-entire-crm-inside-claude-and-says-youll-never-need-its-app-again>)</sup>.
- OpenExecutive, an open-source AI executive system, orchestrates eight specialist agents (CFO, CMO, etc.) with episodic memory and proactive follow-ups for business decision-making <sup>[8](<https://github.com/SenteLabsAI/OpenExecutive>)</sup>.
- Graph Engineering is proposed as a method to coordinate multi-agent systems by mapping tasks, agents, and states for parallel work and verification <sup>[9](<https://arxiv.org/abs/2608.21156v2>)</sup>.

## MLOps and Evaluation
- GitHub shares lessons from secret-scanning: version prompts, models, and configs like code, and test against production-like ambiguity to cut false positives by 95% while preserving recall <sup>[10](<https://github.blog/ai-and-ml/llms/how-to-evaluate-llms-before-production/>)</sup>.
- GitHub rolls out a global model policy for Copilot Business/Enterprise, enforcing defaults for unconfigured models and disabling open-weight or data-retention models by default <sup>[11](<https://github.blog/changelog/2026-08-26-global-model-policy-generally-available>)</sup>.

## DevOps, Infrastructure and Developer Tools
- DuckLabs joins AWS; DuckDB, DuckLake, and Quack remain MIT-licensed under the DuckDB Foundation while AWS accelerates development and adoption <sup>[12](<https://ducklabs.com/news/2026/08/26/ducklabs-to-join-aws>)</sup>.
- GitHub adds auto-update for plugin marketplaces in enterprise-managed settings, reducing manual maintenance for Copilot Business/Enterprise users <sup>[13](<https://github.blog/changelog/2026-08-26-enterprise-managed-settings-now-support-autoupdate-for-plugin-marketplaces>)</sup>.
- The LogDrive introduces a shared-log abstraction splitting sequencing (AtomicLog) and durability layers, enabling reusable striping and quorum replication across backends like S3 or DynamoDB <sup>[14](<https://jack-vanlightly.com/blog/2026/8/25/the-logdrive-flexible-composition-through-abstraction-in-shared-logs>)</sup>.
- Khaos, a Go-rewritten Kafka load-testing and chaos-engineering tool, simulates producers/consumers, broker failures, and backpressure for repeatable pre-production testing <sup>[15](<https://github.com/aleksandarskrbic/khaos>)</sup>.
- PostgreSQL regex performance gains: pg_trgm cuts LIKE scans from ~40s to 1.6s on a 33 GB table, while pg_re2 offers faster regex execution with trade-offs in features <sup>[16](<https://www.depesz.com/2026/08/25/new-things-for-regular-expressions-in-postgresql-pg_tre-and-pg_re2>)</sup>.

## Performance and Systems
- Speculative decoding can make LLM generation up to 3x faster by using a small draft model to propose tokens evaluated in a single forward pass <sup>[17](<https://blog.bytebytego.com/p/how-to-make-llms-3x-faster>)</sup>.
- PagedAttention applies virtual-memory paging to KV caches, eliminating fragmentation, achieving ~96% utilization, and serving 2–4x more users per GPU <sup>[18](<https://thegustafson.com/blog/paged-attention>)</sup>.

## Sources

1. [\[AINews\] NVIDIA buys HuggingFace for $13B, as OpenAI publishes their HF incident retro](<https://www.latent.space/p/ainews-nvidia-buys-huggingface-for>) — _latent.space_
2. [Nvidia in Talks to Buy AI Startup Hugging Face](<https://www.bloomberg.com/news/articles/2026-08-27/nvidia-discussed-buying-ai-startup-hugging-face-insider-says?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4NzgwNDE3MSwiZXhwIjoxNzg4NDA4OTcxLCJhcnRpY2xlSWQiOiJUS0VLSlhUOU5KTFcwMCIsImJjb25uZWN0SWQiOiJCMzZENUE5QzIxMDQ0NjU4OTFBMTc1MTVDRDNBQkZFNiJ9.Ff4hpy1ocSnzvdZdbuzix3Qqh2bpMJlDlp5U3vvlZ-8>) — _bloomberg.com_
3. [Surprise: Z.ai is the AI lab behind the mysterious Ox Alpha model](<https://techcrunch.com/2026/08/26/surprise-z-ai-is-the-ai-lab-behind-the-mysterious-ox-alpha-model/>) — _techcrunch.com_
4. [Qwen3.8-Flash-Next](<https://simonwillison.net/2026/Aug/26/qwen38-flash-next/>) — _simonwillison.net_
5. [\[AINews\] Hot Chips: OpenAI’s Jalapeño, Cerebras CS-5, Groq 3 LPX, Apple M6](<https://www.latent.space/p/ainews-hot-chips-openais-jalapeno>) — _latent.space_
6. [Inside LinkedIn's cognitive memory agent for agentic personalization (32 minute podcast)](<https://stackoverflow.blog/2026/08/25/inside-linkedin-s-cognitive-memory-agent/>) — _stackoverflow.blog_
7. [Salesforce just put its entire CRM inside Claude — and says you'll never need its app again](<https://venturebeat.com/orchestration/salesforce-just-put-its-entire-crm-inside-claude-and-says-youll-never-need-its-app-again>) — _venturebeat.com_
8. [CEO fired developers to make room for AI. Developers create open source AI CEO](<https://github.com/SenteLabsAI/OpenExecutive>) — _hnrss.org_
9. [Graph Engineering in the Era of LLM Agents: From Individual Intelligence to System Intelligence](<https://arxiv.org/abs/2608.21156v2>) — _arxiv 2608.21156v2_
10. [How to evaluate LLMs before production](<https://github.blog/ai-and-ml/llms/how-to-evaluate-llms-before-production/>) — _github.blog_
11. [Global model policy generally available](<https://github.blog/changelog/2026-08-26-global-model-policy-generally-available>) — _github.blog_
12. [DuckLabs to Join AWS, Projects to Remain Open Source](<https://ducklabs.com/news/2026/08/26/ducklabs-to-join-aws>) — _ducklabs.com_
13. [Enterprise-managed settings now support autoUpdate for plugin marketplaces](<https://github.blog/changelog/2026-08-26-enterprise-managed-settings-now-support-autoupdate-for-plugin-marketplaces>) — _github.blog_
14. [The LogDrive: Flexible Composition Through Abstraction in Shared Logs](<https://jack-vanlightly.com/blog/2026/8/25/the-logdrive-flexible-composition-through-abstraction-in-shared-logs>) — _jack-vanlightly.com_
15. [Khaos: Kafka Load Testing & Chaos Engineering](<https://github.com/aleksandarskrbic/khaos>) — _github.com_
16. [New things for regular expressions in PostgreSQL: pg_tre and pg_re2](<https://www.depesz.com/2026/08/25/new-things-for-regular-expressions-in-postgresql-pg_tre-and-pg_re2>) — _depesz.com_
17. [How to Make LLMs 3X Faster](<https://blog.bytebytego.com/p/how-to-make-llms-3x-faster>) — _blog.bytebytego.com_
18. [PagedAttention: Virtual Memory for the KV Cache](<https://thegustafson.com/blog/paged-attention>) — _thegustafson.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-08-26` | Wednesday | [Read →](news/en/2026-08-26.md) |
| `2026-08-25` | Tuesday | [Read →](news/en/2026-08-25.md) |
| `2026-08-24` | Monday | [Read →](news/en/2026-08-24.md) |
| `2026-08-23` | 🗓️ Weekly recap | [Read →](news/en/2026-08-23.md) |
| `2026-08-22` | Saturday | [Read →](news/en/2026-08-22.md) |
| `2026-08-21` | Friday | [Read →](news/en/2026-08-21.md) |
| `2026-08-20` | Thursday | [Read →](news/en/2026-08-20.md) |
| `2026-08-19` | Wednesday | [Read →](news/en/2026-08-19.md) |
| `2026-08-18` | Tuesday | [Read →](news/en/2026-08-18.md) |
| `2026-08-17` | Monday | [Read →](news/en/2026-08-17.md) |
| `2026-08-16` | 🗓️ Weekly recap | [Read →](news/en/2026-08-16.md) |
| `2026-08-15` | Saturday | [Read →](news/en/2026-08-15.md) |
| `2026-08-14` | Friday | [Read →](news/en/2026-08-14.md) |
| `2026-08-13` | Thursday | [Read →](news/en/2026-08-13.md) |

<sub>[Browse the full archive (73) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
