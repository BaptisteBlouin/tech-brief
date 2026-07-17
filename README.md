# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-07-17
<sub>updated 17 July 2026 at 13:01</sub>

## AI/ML Models and Frontier Releases
- Moonshot AI releases **Kimi K3 2.8T-A50B** as the largest open-weights model to date, positioning it near top closed models and above prior open competitors, with claims of Opus 4.8-class performance at Sonnet 5 pricing <sup>[1](<https://www.latent.space/p/ainews-kimi-k3-28t-a50b-the-largest>)</sup>.
- Google delays **Gemini 3.5 Pro** by months due to unmet internal goals, particularly in coding, frustrating engineers and researchers amid concerns over losing competitive edge <sup>[2](<https://www.bloomberg.com/news/articles/2026-07-16/google-gemini-launch-delayed-as-tech-falls-short-of-internal-goals?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4NDI2OTE3MiwiZXhwIjoxNzg0ODczOTcyLCJhcnRpY2xlSWQiOiJUSUE1MDNLR1pBSVQwMCIsImJjb25uZWN0SWQiOiIwOThFNzNDQTE5QTA0RDkxODEyQzQ4MjcwRDZERTI0QiJ9.O0SviXMAGu0iKNg_uO7uhvm9WNFIOkTzDWQqg889I1o>)</sup>.
- Nvidia unveils **Cosmos 3 Edge**, a world model for real-time physical environment perception and navigation, expanding Japan’s physical AI ecosystem <sup>[3](<https://www.cnbc.com/2026/07/16/nvidia-reveals-new-ai-model-and-expands-japans-physical-ai-ecosystem.html>)</sup>.
- China’s Xi Jinping endorses open-source AI models, framing China as a champion of openness and criticizing US semiconductor restrictions <sup>[4](<https://www.wsj.com/tech/ai/chinas-xi-touts-open-source-ai-and-takes-a-swipe-at-u-s-dominance-1eaa5cfe?st=Ht1Bp8&reflink=desktopwebshare_permalink&mod=tldr>)</sup>.

## LLM Tooling, Agents, and Engineering
- **Firefox compiled to WebAssembly** by Puter runs entirely in-browser (via Chrome), using ~$25K worth of AI tokens (Claude Opus/Fable) and the Wisp protocol for WebSocket traffic; showcases AI-assisted porting of large codebases <sup>[5](<https://simonwillison.net/2026/Jul/16/firefox-in-webassembly/#atom-everything>)</sup>.
- Bun’s **Zig-to-Rust rewrite completes in 11 days** using Fable, costing $165K in API spend (5.9B input tokens, 690M output tokens), demonstrating AI’s cost-effectiveness for large-scale codebase migrations <sup>[6](<https://blog.pragmaticengineer.com/the-pulse-what-can-we-learn-from-buns-rapid-rust-rewrite-with-ai/>)</sup>.
- Microsoft’s Nadella criticizes Anthropic’s **Fable** for being overly "editorially controlled," highlighting tensions over model guardrails and refusal policies <sup>[7](<https://www.cnbc.com/2026/07/16/microsoft-ceo-says-anthropic-fable-request-policy-doesnt-make-sense.html>)</sup>.

## MLOps/DevOps, Cloud, and Infrastructure
- TSMC **adds $100B to its US spending plan**, bringing Arizona investment to $265B, signaling accelerated semiconductor manufacturing expansion <sup>[8](<https://www.nytimes.com/2026/07/16/business/tsmc-chips-investment-arizona.html?unlocked_article_code=1.yVA.pm56.TxGKx79CAJJn&smid=url-share>)</sup>.
- Meta plans to hire **AWS executive Dave Brown** to lead data center build-out, signaling a potential cloud push <sup>[9](<https://www.wsj.com/tech/meta-plans-to-hire-top-amazon-computing-executive-as-it-weighs-cloud-push-2166869b?st=q71S1n&reflink=desktopwebshare_permalink&mod=tldr>)</sup>.
- Linus Torvalds defends **AI-assisted coding in Linux**, telling critics to "fork it or walk away" <sup>[10](<https://arstechnica.com/ai/2026/07/linus-torvalds-to-critics-of-ai-coding-in-linux-fork-it-or-just-walk-away/>)</sup>.

## Sustainability and Risk
- Hyperscalers’ water use under scrutiny: Google used **10.9B gallons in 2025** (~30M/day); a satirical proposal suggests converting golf courses to public parks to offset data center consumption <sup>[11](<https://simonwillison.net/2026/Jul/17/spot-birds-not-golf/#atom-everything>)</sup>.
- Rising risks of **weather data sabotage** as prediction markets and critical industries grow more dependent on forecasts, increasing incentives for manipulation <sup>[12](<https://www.technologyreview.com/2026/07/17/1140622/weather-data-sabotage/>)</sup>.

## Sources

1. [\[AINews\] Kimi K3 2.8T-A50B: the largest open model ever released; Opus 4.8-class at Sonnet 5 pricing](<https://www.latent.space/p/ainews-kimi-k3-28t-a50b-the-largest>) — _latent.space_
2. [Google Gemini Launch Delayed as Tech Falls Short of Internal Goals](<https://www.bloomberg.com/news/articles/2026-07-16/google-gemini-launch-delayed-as-tech-falls-short-of-internal-goals?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4NDI2OTE3MiwiZXhwIjoxNzg0ODczOTcyLCJhcnRpY2xlSWQiOiJUSUE1MDNLR1pBSVQwMCIsImJjb25uZWN0SWQiOiIwOThFNzNDQTE5QTA0RDkxODEyQzQ4MjcwRDZERTI0QiJ9.O0SviXMAGu0iKNg_uO7uhvm9WNFIOkTzDWQqg889I1o>) — _bloomberg.com_
3. [Nvidia unveils new AI model and expands Japan's physical AI ecosystem](<https://www.cnbc.com/2026/07/16/nvidia-reveals-new-ai-model-and-expands-japans-physical-ai-ecosystem.html>) — _cnbc.com_
4. [China's Xi Touts Open-Source AI and Takes a Swipe at US Dominance](<https://www.wsj.com/tech/ai/chinas-xi-touts-open-source-ai-and-takes-a-swipe-at-u-s-dominance-1eaa5cfe?st=Ht1Bp8&reflink=desktopwebshare_permalink&mod=tldr>) — _wsj.com_
5. [Firefox in WebAssembly](<https://simonwillison.net/2026/Jul/16/firefox-in-webassembly/#atom-everything>) — _simonwillison.net_
6. [What can we learn from Bun's rapid Rust rewrite with AI?](<https://blog.pragmaticengineer.com/the-pulse-what-can-we-learn-from-buns-rapid-rust-rewrite-with-ai/>) — _blog.pragmaticengineer.com_
7. [Microsoft's Nadella criticizes Anthropic's Fable for being ‘editorially controlled'](<https://www.cnbc.com/2026/07/16/microsoft-ceo-says-anthropic-fable-request-policy-doesnt-make-sense.html>) — _cnbc.com_
8. [TSMC Adds $100 Billion to Its US Spending Plan](<https://www.nytimes.com/2026/07/16/business/tsmc-chips-investment-arizona.html?unlocked_article_code=1.yVA.pm56.TxGKx79CAJJn&smid=url-share>) — _nytimes.com_
9. [Meta Plans to Hire Top Amazon Computing Executive as it Weighs Cloud Push](<https://www.wsj.com/tech/meta-plans-to-hire-top-amazon-computing-executive-as-it-weighs-cloud-push-2166869b?st=q71S1n&reflink=desktopwebshare_permalink&mod=tldr>) — _wsj.com_
10. [Linus Torvalds to critics of AI coding in Linux: “Fork it. Or just walk away.”](<https://arstechnica.com/ai/2026/07/linus-torvalds-to-critics-of-ai-coding-in-linux-fork-it-or-just-walk-away/>) — _arstechnica.com_
11. [Spot birds not golf](<https://simonwillison.net/2026/Jul/17/spot-birds-not-golf/#atom-everything>) — _simonwillison.net_
12. [The risk of weather data sabotage is rising](<https://www.technologyreview.com/2026/07/17/1140622/weather-data-sabotage/>) — _technologyreview.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-07-16` | Thursday | [Read →](news/en/2026-07-16.md) |
| `2026-07-15` | Wednesday | [Read →](news/en/2026-07-15.md) |
| `2026-07-14` | Tuesday | [Read →](news/en/2026-07-14.md) |
| `2026-07-13` | Monday | [Read →](news/en/2026-07-13.md) |
| `2026-07-12` | 🗓️ Weekly recap | [Read →](news/en/2026-07-12.md) |
| `2026-07-11` | Saturday | [Read →](news/en/2026-07-11.md) |
| `2026-07-10` | Friday | [Read →](news/en/2026-07-10.md) |
| `2026-07-09` | Thursday | [Read →](news/en/2026-07-09.md) |
| `2026-07-08` | Wednesday | [Read →](news/en/2026-07-08.md) |
| `2026-07-07` | Tuesday | [Read →](news/en/2026-07-07.md) |
| `2026-07-06` | Monday | [Read →](news/en/2026-07-06.md) |
| `2026-07-05` | 🗓️ Weekly recap | [Read →](news/en/2026-07-05.md) |
| `2026-07-04` | Saturday | [Read →](news/en/2026-07-04.md) |
| `2026-07-03` | Friday | [Read →](news/en/2026-07-03.md) |

<sub>[Browse the full archive (32) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
