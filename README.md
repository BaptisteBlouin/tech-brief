# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-10-27
<sub>updated 27 October 2026 at 12:01</sub>

## Frontier models and AI labs

- Anthropic filed its IPO paperwork, with a 350-page S-1 that reportedly shows 1400% growth, 48% of revenue through cloud partners, an 85% margin and $1B operating profit in Q2 <sup>[1](<https://latent.space/p/ainews-anthropic-s1/>)</sup>. The prospectus puts the valuation between $1.5 trillion and $2 trillion, with a listing on NASDAQ under 'ANT' expected before Thanksgiving <sup>[2](<https://www.wsj.com/tech/ai/anthropic-ipo-s1-report-takeaways-6eebd721>)</sup>.
- The S-1 pitches "virtual collaborators" for over a billion knowledge workers by 2028 <sup>[1](<https://latent.space/p/ainews-anthropic-s1/>)</sup>. It also warns that AI could enable new bioweapons and destabilize the geopolitical order <sup>[2](<https://www.wsj.com/tech/ai/anthropic-ipo-s1-report-takeaways-6eebd721>)</sup>.
- Anthropic's own S-1 analysis, as summarized by Tomasz Tunguz, describes an AI company with explosive growth and rising efficiency <sup>[3](<https://tomtunguz.com/anthropics-s1-grew-eleven-fold>)</sup>.
- OpenAI released GPT-6.1 Terra, positioned for visual reasoning and computer use, sitting between cheaper and more expensive tiers, similar to Sonnet in Anthropic's lineup <sup>[4](<https://simonwillison.net/2026/Oct/26/gpt-61-terra/>)</sup>.

## Software engineering and AI-assisted development

- The Claude Code team reports that Claude writes about 90% of the code in Claude Code. Merged pull requests more than doubled between June and September while the share reverted fell by over 40%, because most of the review reading was moved to machines <sup>[5](<https://claude.dev/blog/solving-code-review-at-anthropic/>)</sup>.
- Kiro describes keeping a software factory stable at 1,000 PRs a week, arguing that the quality bar depends on knowing each change is correct and safe without a human reading every line <sup>[6](<https://kiro.dev/blog/software-factory-stability/>)</sup>.
- The Counting House essay proposes adding AI to high-volume human workflows, such as customer service, using cheaper models on hardened rails and measuring them against human counterparts on cost, quality and ramp-up time <sup>[7](<https://yegge.ai/essays/the-counting-house/>)</sup>.
- Python's experimental JIT is to be removed, though an alternative PEP might still be submitted before the council's deadline <sup>[8](<https://lwn.net/SubscriberLink/1102102/489e41d80e4966aa/>)</sup>.

## Search, data and infrastructure

- turbopuffer v3 is announced as the first search engine with fully vectorized query execution, an architecture more common in analytical databases, due for production later this year <sup>[9](<https://turbopuffer.com/blog/fully-vectorized-search-engine>)</sup>.
- Nvidia is reportedly discussing a $2,000-per-GPU annual fee for software that runs agents on AI factories. Its existing AI Enterprise subscription is $4,500 per GPU, and it is unclear whether the two cover the same products <sup>[10](<https://www.tomshardware.com/pc-components/gpus/nvidia-discusses-usd2-000-per-gpu-annual-software-fee-for-running-agents-on-ai-infrastructure-firm-already-charges-more-than-twice-that-amount-for-its-ai-enterprise-software-platform>)</sup>.

## Industry and broader context

- Microsoft is offering voluntary buyouts to 60,000 employees in Canada, India, the UK and the US, and expects fewer than 30% to accept <sup>[11](<https://www.wsj.com/tech/microsoft-will-offer-buyouts-to-60-000-employees-4c32945f>)</sup>.
- Solar is becoming a larger share of world power than nuclear, with the BBC projecting around 10% of world power by year end <sup>[12](<https://www.bbc.com/future/article/20261023-how-solar-became-bigger-than-nuclear>)</sup>.
- Stratechery argues that AI-driven security vulnerabilities will further shrink the public internet <sup>[13](<https://stratechery.com/2026/the-end-of-the-internet/>)</sup>.

## Sources

1. [\[AINews\] Anthropic files for $2T IPO in 2 weeks: 1400% growth rate, 48% of revenue through cloud partners, 85% margin, $1B op profit in Q2, $134B cash in bank and $10B lifetime burn](<https://latent.space/p/ainews-anthropic-s1/>) — _latent.space_
2. [The Biggest Takeaways From Anthropic's IPO Prospectus](<https://www.wsj.com/tech/ai/anthropic-ipo-s1-report-takeaways-6eebd721>) — _wsj.com_
3. [Anthropic S-1 Analysis: How 7 Key Metrics Stack Up](<https://tomtunguz.com/anthropics-s1-grew-eleven-fold>) — _tomtunguz.com_
4. [GPT-6.1 Terra](<https://simonwillison.net/2026/Oct/26/gpt-61-terra/>) — _simonwillison.net_
5. [How the Claude Code team does code review](<https://claude.dev/blog/solving-code-review-at-anthropic/>) — _claude.dev_
6. [Keeping a software factory stable at 1,000 PRs a week](<https://kiro.dev/blog/software-factory-stability/>) — _kiro.dev_
7. [The Counting House](<https://yegge.ai/essays/the-counting-house/>) — _yegge.ai_
8. [Python's experimental JIT to be removed](<https://lwn.net/SubscriberLink/1102102/489e41d80e4966aa/>) — _lwn.net_
9. [The first search engine with fully vectorized query execution](<https://turbopuffer.com/blog/fully-vectorized-search-engine>) — _turbopuffer.com_
10. [Nvidia discusses $2,000-per-GPU annual fee for software that 'runs agents on AI factories'](<https://www.tomshardware.com/pc-components/gpus/nvidia-discusses-usd2-000-per-gpu-annual-software-fee-for-running-agents-on-ai-infrastructure-firm-already-charges-more-than-twice-that-amount-for-its-ai-enterprise-software-platform>) — _tomshardware.com_
11. [Microsoft Will Offer Buyouts to 60,000 Employees](<https://www.wsj.com/tech/microsoft-will-offer-buyouts-to-60-000-employees-4c32945f>) — _wsj.com_
12. ['It's offensively cheap': How solar power is quietly becoming bigger than nuclear](<https://www.bbc.com/future/article/20261023-how-solar-became-bigger-than-nuclear>) — _bbc.com_
13. [The End of the Internet](<https://stratechery.com/2026/the-end-of-the-internet/>) — _stratechery.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-10-26` | Monday | [Read →](news/en/2026-10-26.md) |
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

<sub>[Browse the full archive (133) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
