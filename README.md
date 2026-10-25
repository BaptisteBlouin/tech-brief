# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-10-24
<sub>updated 25 October 2026 at 01:00</sub>

## AI models

- Kimi K3.1 Pro, a post-trained version of Kimi K3 with substantially larger post-training compute, is reported as a 2.8T-parameter open-weights model that Latent Space says beats Fable 5.1 <sup>[1](<https://latent.space/p/ainews-kimi-31/>)</sup>. The release also comes with a Pro Highspeed API that the same newsletter says runs 2 to 3 times faster <sup>[1](<https://latent.space/p/ainews-kimi-31/>)</sup>.
- Sebastian Raschka has published a free eight-video course (about 11 hours) that builds reasoning models from a pre-trained LLM in PyTorch, covering inference scaling, reinforcement learning and distillation, as a companion to his Build Reasoning Model (From Scratch) book <sup>[2](<https://magazine.sebastianraschka.com/p/building-reasoning-models>)</sup>.

## Developer tools and coding agents

- GitHub's Copilot usage metrics API now includes a new `totals_by_client` array in the enterprise, organization and per-user 1-day and 28-day reports <sup>[3](<https://github.blog/changelog/2026-10-23-usage-metrics-api-adds-usage-from-tools-like-opencode>)</sup>. Each entry gives request count, session count and token usage per client, so usage from tools such as OpenCode, Claude Code and Codex can be tracked <sup>[3](<https://github.blog/changelog/2026-10-23-usage-metrics-api-adds-usage-from-tools-like-opencode>)</sup>.
- Each client entry also breaks usage down by model, with a `model_selection_mode` field showing whether the model was chosen directly by the user or selected automatically <sup>[3](<https://github.blog/changelog/2026-10-23-usage-metrics-api-adds-usage-from-tools-like-opencode>)</sup>.

## AI engineering and RAG

- ByteByteGo explains the difference between standard RAG, which retrieves once from a knowledge base and adds the results to the prompt, and agentic RAG, where an agent decides how and when to retrieve <sup>[4](<https://blog.bytebytego.com/p/ep230-rag-vs-agentic-rag>)</sup>.

## Projects and experiments

- Simon Willison's Battledrones gained a four-player "Compass Rose" map, built with Claude Opus 5.5, which adds four-way rotational symmetry and WebSocket multiplayer support for up to four humans, with open slots filled by AI <sup>[5](<https://simonwillison.net/2026/Oct/24/battledrones/>)</sup>.

## Sources

1. [\[AINews\] Kimi 3.1 Pro 104BA-2.8T: Fable-5.1-Class Open Weights narrows Closed-AI lead to 1 month... and Pro Highspeed API with 2-3× speed](<https://latent.space/p/ainews-kimi-31/>) — _latent.space_
2. [Building Reasoning Models from the Ground Up: A Full Video Course](<https://magazine.sebastianraschka.com/p/building-reasoning-models>) — _magazine.sebastianraschka.com_
3. [Usage metrics API adds usage from tools like OpenCode](<https://github.blog/changelog/2026-10-23-usage-metrics-api-adds-usage-from-tools-like-opencode>) — _github.blog_
4. [EP230: RAG vs Agentic RAG](<https://blog.bytebytego.com/p/ep230-rag-vs-agentic-rag>) — _blog.bytebytego.com_
5. [battledrones v14: Compass Rose, a four player map](<https://simonwillison.net/2026/Oct/24/battledrones/>) — _simonwillison.net_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-10-24` | Saturday | [Read →](news/en/2026-10-24.md) |
| `2026-10-23` | Friday | [Read →](news/en/2026-10-23.md) |
| `2026-10-22` | Thursday | [Read →](news/en/2026-10-22.md) |
| `2026-10-21` | Wednesday | [Read →](news/en/2026-10-21.md) |
| `2026-10-20` | Tuesday | [Read →](news/en/2026-10-20.md) |
| `2026-10-19` | Monday | [Read →](news/en/2026-10-19.md) |
| `2026-10-18` | 🗓️ Weekly recap | [Read →](news/en/2026-10-18.md) |
| `2026-10-17` | Saturday | [Read →](news/en/2026-10-17.md) |
| `2026-10-16` | Friday | [Read →](news/en/2026-10-16.md) |
| `2026-10-15` | Thursday | [Read →](news/en/2026-10-15.md) |
| `2026-10-14` | Wednesday | [Read →](news/en/2026-10-14.md) |
| `2026-10-13` | Tuesday | [Read →](news/en/2026-10-13.md) |
| `2026-10-12` | Monday | [Read →](news/en/2026-10-12.md) |
| `2026-10-11` | 🗓️ Weekly recap | [Read →](news/en/2026-10-11.md) |

<sub>[Browse the full archive (132) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
