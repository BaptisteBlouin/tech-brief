# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-07-28
<sub>updated 28 July 2026 at 13:01</sub>

## AI Models & Open Weights
- Moonshot AI releases **Kimi K3** (2.8T parameters) weights on Hugging Face (1.56TB), with independent validations showing it outperforms OpenAI o1; the model uses a modified MIT license requiring attribution for very large commercial users <sup>[1](<https://www.latent.space/p/ainews-much-ado-about-open-weights>), [2](<https://simonwillison.net/2026/Jul/27/kimi-k3/#atom-everything>)</sup>.
- OpenAI signs the open models letter after initial hesitation, while Anthropic abstains; industry debate continues but actual open-weight releases remain sparse <sup>[1](<https://www.latent.space/p/ainews-much-ado-about-open-weights>)</sup>.
- NVIDIA is the largest publisher of open AI models globally, detailing its strategy for building and releasing open models <sup>[3](<https://blog.bytebytego.com/p/how-nvidia-builds-open-models-for>)</sup>.

## LLM Tooling & Agents
- GitHub Copilot for JetBrains adds **OpenTelemetry export for agent workflows**, model behavior controls (token limits, BYOK/custom endpoints), and MCP server/custom agent integration for advanced observability and governance <sup>[4](<https://github.blog/changelog/2026-07-27-github-copilot-for-jetbrains-adds-improvved-opentelemetry-configuration-and-model-management>)</sup>.
- Cursor launches **Cursor Start** in India (₹649/month, UPI payments), offering generous access to **Grok 4.5** and **Composer**, targeting high-usage developer demand <sup>[5](<https://cursor.com/blog/cursor-start-india>)</sup>.

## Infrastructure & Cloud
- OpenAI is close to leasing a **$500B data center in Ohio**, with NVIDIA providing a $250B financial backstop; deal awaits final government approval <sup>[6](<https://www.nytimes.com/2026/07/27/technology/openai-data-center-nvidia.html?unlocked_article_code=1.1FA.IBnW.rbhWt5-1bZFI&smid=url-share>)</sup>.
- Amazon plans to launch **5,105 LEO satellites** to expand mobile data/voice services via Globalstar’s spectrum, orbiting at 510–580 km <sup>[7](<https://www.pcmag.com/news/amazon-plans-to-launch-5000-new-satellites-to-beam-data-to-iphones>)</sup>.
- ASML’s stock drops after reports of a Shanghai firm beginning **mass production of immersion DUV lithography tools** (5 in 2026, targeting 20 next year), though these are less advanced than ASML’s EUV machines <sup>[8](<https://www.bloomberg.com/news/articles/2026-07-27/asml-slides-after-report-of-china-beginning-duv-tool-production?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4NTIxNDcyNywiZXhwIjoxNzg1ODE5NTI3LCJhcnRpY2xlSWQiOiJUSVU2RkpLSkg2VjUwMCIsImJjb25uZWN0SWQiOiJBOEExRDhFQTI5OTc0OTRGQTQ1QUE2REJBMjAwNTM3MSJ9.Q54YNz9gCx-9OBsDOxd6rfHWnPHX1iuBzzqpYJsu0Zg>)</sup>.

## Semiconductors & Hardware
- **SK Hynix** lures Samsung chip workers with record **$476K bonuses**, sparking an exodus as HBM demand for AI accelerators drives a fierce talent war <sup>[9](<https://www.technologyreview.com/2026/07/28/1140853/samsung-chip-workers-exodus-sk-hynix/>)</sup>.
- NVIDIA invests in **Ilya Sutskever’s Safe Superintelligence**, securing GPU access and expanding compute reach; the startup previously relied on Google chips <sup>[10](<https://www.wsj.com/tech/ai/nvidia-bets-on-ilya-sutskevers-new-ai-lab-to-expand-compute-reach-f95596e8?st=ytRWBB&reflink=desktopwebshare_permalink&mod=tldr>)</sup>.

## Robotics & Data
- Robotics faces a **data bottleneck**: unlike LLMs trained on web text, physical AGI lacks an equivalent large-scale data source; progress is ongoing but "enough" data remains unknown <sup>[11](<https://www.tanayj.com/p/the-robot-data-pyramid>)</sup>.

## Developer Tools & Open Source
- **Seal**: Open standard for proving file authenticity via sealed artifacts (integrity, timestamp, certificate), anchored to a public ledger for perpetual verification <sup>[12](<https://github.com/letsseal/letsseal>)</sup>.
- **Octane**: React-compatible UI library with a compiler that eliminates the virtual DOM, Suspense waterfalls, and hooks bookkeeping, targeting near-handwritten DOM performance <sup>[13](<https://github.com/octanejs/octane>)</sup>.

## Software Engineering Practices
- Antithesis demonstrates **fuzz testing at scale** to uncover bugs in Raft implementations, leveraging cheap, abundant compute for novel testing approaches <sup>[14](<https://antithesis.com/blog/2026/finding-bugs-in-raft-implementations/>)</sup>.

## Sources

1. [\[AINews\] Much ado about Open Weights](<https://www.latent.space/p/ainews-much-ado-about-open-weights>) — _latent.space_
2. [moonshotai/Kimi-K3](<https://simonwillison.net/2026/Jul/27/kimi-k3/#atom-everything>) — _simonwillison.net_
3. [How NVIDIA Builds Open Models for the Age of AI](<https://blog.bytebytego.com/p/how-nvidia-builds-open-models-for>) — _blog.bytebytego.com_
4. [GitHub Copilot for JetBrains adds improved OpenTelemetry configuration and model management](<https://github.blog/changelog/2026-07-27-github-copilot-for-jetbrains-adds-improvved-opentelemetry-configuration-and-model-management>) — _github.blog_
5. [Introducing Cursor Start](<https://cursor.com/blog/cursor-start-india>) — _cursor_
6. [OpenAI Close to Landing $500 Billion Data Center With Nvidia's Backing](<https://www.nytimes.com/2026/07/27/technology/openai-data-center-nvidia.html?unlocked_article_code=1.1FA.IBnW.rbhWt5-1bZFI&smid=url-share>) — _nytimes.com_
7. [Amazon Plans to Launch 5,000 New Satellites to Beam Data to iPhones](<https://www.pcmag.com/news/amazon-plans-to-launch-5000-new-satellites-to-beam-data-to-iphones>) — _pcmag.com_
8. [ASML Slides on Report of China Starting DUV Tool Production](<https://www.bloomberg.com/news/articles/2026-07-27/asml-slides-after-report-of-china-beginning-duv-tool-production?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4NTIxNDcyNywiZXhwIjoxNzg1ODE5NTI3LCJhcnRpY2xlSWQiOiJUSVU2RkpLSkg2VjUwMCIsImJjb25uZWN0SWQiOiJBOEExRDhFQTI5OTc0OTRGQTQ1QUE2REJBMjAwNTM3MSJ9.Q54YNz9gCx-9OBsDOxd6rfHWnPHX1iuBzzqpYJsu0Zg>) — _bloomberg.com_
9. [Samsung’s chip workers are jumping ship to rival SK Hynix](<https://www.technologyreview.com/2026/07/28/1140853/samsung-chip-workers-exodus-sk-hynix/>) — _technologyreview.com_
10. [Nvidia Bets on Ilya Sutskever's New AI Lab to Expand Compute Reach](<https://www.wsj.com/tech/ai/nvidia-bets-on-ilya-sutskevers-new-ai-lab-to-expand-compute-reach-f95596e8?st=ytRWBB&reflink=desktopwebshare_permalink&mod=tldr>) — _wsj.com_
11. [The Data Pyramid in Robotics](<https://www.tanayj.com/p/the-robot-data-pyramid>) — _tanayj.com_
12. [Seal](<https://github.com/letsseal/letsseal>) — _github.com_
13. [Octane](<https://github.com/octanejs/octane>) — _github.com_
14. [Finding bugs in Raft implementations](<https://antithesis.com/blog/2026/finding-bugs-in-raft-implementations/>) — _antithesis.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-07-27` | Monday | [Read →](news/en/2026-07-27.md) |
| `2026-07-26` | 🗓️ Weekly recap | [Read →](news/en/2026-07-26.md) |
| `2026-07-25` | Saturday | [Read →](news/en/2026-07-25.md) |
| `2026-07-24` | Friday | [Read →](news/en/2026-07-24.md) |
| `2026-07-23` | Thursday | [Read →](news/en/2026-07-23.md) |
| `2026-07-22` | Wednesday | [Read →](news/en/2026-07-22.md) |
| `2026-07-21` | Tuesday | [Read →](news/en/2026-07-21.md) |
| `2026-07-20` | Monday | [Read →](news/en/2026-07-20.md) |
| `2026-07-19` | 🗓️ Weekly recap | [Read →](news/en/2026-07-19.md) |
| `2026-07-18` | Saturday | [Read →](news/en/2026-07-18.md) |
| `2026-07-17` | Friday | [Read →](news/en/2026-07-17.md) |
| `2026-07-16` | Thursday | [Read →](news/en/2026-07-16.md) |
| `2026-07-15` | Wednesday | [Read →](news/en/2026-07-15.md) |
| `2026-07-14` | Tuesday | [Read →](news/en/2026-07-14.md) |

<sub>[Browse the full archive (43) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
