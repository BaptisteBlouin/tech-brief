# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-10-21
<sub>updated 21 October 2026 at 13:01</sub>

## AI and LLM Models

- DeepSeek open-sourced DeepInfer, its production inference stack, which is a customization of vLLM crediting SGLang and TensorRT-LLM; the release omits DeepSeek's KV cache, PD disaggregation and load balancing, and the article claims prompt caching of up to 72 hours <sup>[1](<https://www.latent.space/p/ainews-deepseek-deepinfer-open-source>)</sup>.
- Anthropic's Claude was used to design mini protein binders against scorpion neurotoxins: 17 of 211 designs met Anthropic's criteria, but whether they neutralize venom in cells is not confirmed, so it is not claimed as an antivenom <sup>[2](<https://www.anthropic.com/research/claude-scorpion-toxin-binder-design>)</sup>.
- Anthropic's draft S-1 reports a net loss above $80 billion in the first half of the year, alongside fast revenue growth and a possible $750 billion compute spend over the next few years <sup>[3](<https://www.wsj.com/tech/ai/anthropic-revenue-growth-ipo-accaf0f1>)</sup>.

## Security

- Eight eMudhra intermediate CA certificates had compromised private keys, and they chain to roots trusted by major browser and OS root programs; an attacker could forge certificates for any domain <sup>[4](<https://blog.cloudflare.com/emudhra-certificate-compromise/>), [5](<https://simonwillison.net/2026/Oct/20/emudhra-certificates/>), [6](<https://arstechnica.com/security/2026/10/the-internet-goes-on-high-alert-after-discovery-of-8-compromised-tls-certs/>)</sup>.
- Cloudflare patched its critical services, has released updates for its WARP and 1.1.1.1 clients, and reports no active exploitation on its services so far <sup>[4](<https://blog.cloudflare.com/emudhra-certificate-compromise/>)</sup>.
- Python tooling shipped updated certificate lists: uv 0.13.4, pip 26.2.2 and certifi 2026.10.19 <sup>[5](<https://simonwillison.net/2026/Oct/20/emudhra-certificates/>)</sup>.
- PHP warned of two critical remote code execution flaws (CVE-2026-109618 and CVE-2026-109619) affecting PHP 5 through 8, with emergency patches expected the next day <sup>[7](<https://www.bleepingcomputer.com/news/security/php-warns-admins-of-two-critical-flaws-emergency-patches-coming-tomorrow/>)</sup>.

## Robotics and Simulation

- NVIDIA published SimReady Central on Hugging Face: over 2,000 free, ungated simulation-ready OpenUSD assets, covering robot arms, grippers, racks and cooling equipment, aimed at robotics and AI factory digital twins <sup>[8](<https://huggingface.co/blog/nvidia/simready-central-assets-robotics-ai-factories>)</sup>.

## Engineering Practice

- Tenex's talk on an AI-native SDLC describes paying engineers for delivered output rather than hours, and still uses story points in compensation <sup>[9](<https://www.latent.space/p/tenex>)</sup>.

## Sources

1. [\[AINews\] DeepSeek DeepInfer: Open Source SOTA Inference running 155T toks/day/cluster making $22m/day at ~80% margin for a 81 day payback](<https://www.latent.space/p/ainews-deepseek-deepinfer-open-source>) — _latent.space_
2. [How Claude designed protein binders against scorpion neurotoxins](<https://www.anthropic.com/research/claude-scorpion-toxin-binder-design>) — _anthropic.com_
3. [Anthropic S-1 Shows Red-Hot Growth, Risks, and Massive Computing Costs](<https://www.wsj.com/tech/ai/anthropic-revenue-growth-ipo-accaf0f1>) — _wsj.com_
4. [8 eMudhra certificates are compromised. Here's what you need to know](<https://blog.cloudflare.com/emudhra-certificate-compromise/>) — _blog.cloudflare.com_
5. [eMudhra Intermediate CA Compromise](<https://simonwillison.net/2026/Oct/20/emudhra-certificates/>) — _simonwillison.net_
6. [The Internet goes on high alert after discovery of 8 compromised TLS certs](<https://arstechnica.com/security/2026/10/the-internet-goes-on-high-alert-after-discovery-of-8-compromised-tls-certs/>) — _arstechnica.com_
7. [PHP warns admins of two critical flaws, emergency patches coming tomorrow](<https://www.bleepingcomputer.com/news/security/php-warns-admins-of-two-critical-flaws-emergency-patches-coming-tomorrow/>) — _bleepingcomputer.com_
8. [Announcing SimReady Central: An Open Library of Simulation-Ready 3D Assets for Robotics and AI Factories](<https://huggingface.co/blog/nvidia/simready-central-assets-robotics-ai-factories>) — _huggingface.co_
9. [AI for the Fortune 2000: How Tenex Builds an AI-Native SDLC — Alex Lieberman & CJ Hess](<https://www.latent.space/p/tenex>) — _latent.space_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
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
| `2026-10-10` | Saturday | [Read →](news/en/2026-10-10.md) |
| `2026-10-09` | Friday | [Read →](news/en/2026-10-09.md) |
| `2026-10-08` | Thursday | [Read →](news/en/2026-10-08.md) |
| `2026-10-07` | Wednesday | [Read →](news/en/2026-10-07.md) |

<sub>[Browse the full archive (128) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
