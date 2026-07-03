# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-07-03
<sub>updated 3 July 2026 at 13:01</sub>

## AI/ML: Models, Agents, and Engineering Practice
- A live debate at AI Engineer World’s Fair centers on whether autonomous "loops" (self-improving agentic workflows) are production-ready today or if engineering rigor still lags the ambition; proponents argue loops are inevitable and already usable, while skeptics emphasize the need for verifiability and human oversight in generated code <sup>[1](<https://www.latent.space/p/aiewf-daily-dispatch-locomotives>)</sup>.
- Vercel’s Chief of Software argues agents are a fundamentally new kind of software, detailing lessons from building agent frameworks (e.g., eve) and MCP libraries, and framing agents as a shift from traditional web apps <sup>[2](<https://www.latent.space/p/vercel-agents-new-software>)</sup>.
- Meta’s internal progress on AI agents is slower than expected, with Zuckerberg noting improvements from current investments may take 3–6 months to materialize <sup>[3](<https://techcrunch.com/2026/07/02/mark-zuckerberg-tells-staff-that-ai-agents-havent-progressed-as-quickly-as-hed-hoped/>)</sup>.
- Industry commentary highlights "understanding" as the new bottleneck: verifying agent output and maintaining human participation in the creative process remain critical for correctness and trust <sup>[4](<https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html>)</sup>.
- A practical case study shows how a Slack-based AI "intern" agent was built over four months, with human review and steering baked into the workflow; full source is shared <sup>[5](<https://cra.mr/building-an-intern/>)</sup>.
- Skill engineering is advocated over one-shot AI design: agents require domain knowledge, contextual grounding, and explicit human steering mechanisms to be effective <sup>[6](<https://www.latent.space/p/skill-engineering-design>)</sup>.

## LLM Tooling and Ecosystem
- GitHub Copilot usage metrics gain accuracy: CLI now reports suggested lines of code, IDE identification extends to server-side users, and AI credit consumption is more completely attributed <sup>[7](<https://github.blog/changelog/2026-07-02-improved-accuracy-and-coverage-in-copilot-usage-metrics-reports>)</sup>.
- GitHub Copilot will deprecate Gemini 2.5 Pro and Gemini 3 Flash on July 31, 2026, recommending migration to Gemini 3.1 Pro and 3.5 Flash; admins must enable the new models via policy settings <sup>[8](<https://github.blog/changelog/2026-07-02-upcoming-deprecation-of-gemini-2-5-pro-and-gemini-3-flash>)</sup>.
- Smart model routing is emerging as a best practice for cost and performance optimization across LLM workloads <sup>[9](<https://blog.pragmaticengineer.com/the-pulse-a-new-trend-smart-model-routing/>)</sup>.
- Anthropic is in early discussions with Samsung to develop a custom AI chip, with use cases and specs still undefined <sup>[10](<https://techcrunch.com/2026/07/02/anthropic-is-discussing-a-new-custom-chip-with-samsung/>)</sup>.

## MLOps, DevOps, and Infrastructure
- Microsoft launches a $2.5B "Frontier Company" initiative to embed AI engineers directly within customer organizations to build and operate AI systems end-to-end <sup>[11](<https://www.geekwire.com/2026/microsoft-announces-2-5b-frontier-company-to-embed-ai-engineers-inside-customers/>)</sup>.
- Cloudflare sets a September deadline for AI crawlers to separate search-indexing bots from training-data scrapers, or face blocking on ad-supported pages <sup>[12](<https://www.nbcnews.com/tech/tech-news/cloudflare-sets-ai-crawler-deadline-separate-search-blocked-rcna352446>)</sup>.
- Cost controls tighten: Tesla caps employee AI spending at $200/week, exempting Grok, signaling broader industry pressure to manage AI compute costs <sup>[13](<https://electrek.co/2026/07/02/tesla-caps-employee-ai-spending-200-week/>)</sup>.

## Cloud and Business Context
- Meta is doubling down on AI to diversify beyond ads, with a new cloud service positioned as a strategic expansion <sup>[14](<https://spyglass.org/meta-cloud/>)</sup>.
- In China, AI-driven quant funds surpass 2.6 trillion yuan in AUM, as AI outperforms human traders at scale across thousands of stocks <sup>[15](<https://www.bloomberg.com/news/articles/2026-07-02/china-quant-funds-draw-billions-as-ai-trounces-human-traders?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4MzA0OTY2OSwiZXhwIjoxNzgzNjU0NDY5LCJhcnRpY2xlSWQiOiJURlkxUkZLSkg2VjQwMCIsImJjb25uZWN0SWQiOiJFQTExNDNDNTM4NEE0RUY5QTg5RjJEN0IxMTg2MzcwOSJ9.RyjaD3xJUXnuIyF9b5x590kKewCjSLyfSlMN-UfATyI>)</sup>.

## Sources

1. [AIEWF Daily Dispatch: The great loops debate and the state of AI engineering](<https://www.latent.space/p/aiewf-daily-dispatch-locomotives>) — _latent.space_
2. [Vercel's Andrew Qu on why agents are a new kind of software](<https://www.latent.space/p/vercel-agents-new-software>) — _latent.space_
3. [Mark Zuckerberg tells staff that AI agents haven't progressed as quickly as he'd hoped](<https://techcrunch.com/2026/07/02/mark-zuckerberg-tells-staff-that-ai-agents-havent-progressed-as-quickly-as-hed-hoped/>) — _techcrunch.com_
4. [Understanding is the new bottleneck](<https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html>) — _geoffreylitt.com_
5. [Building an Intern](<https://cra.mr/building-an-intern/>) — _cra.mr_
6. [Skill engineering and the case against one-shot AI design](<https://www.latent.space/p/skill-engineering-design>) — _latent.space_
7. [Improved accuracy and coverage in Copilot usage metrics reports](<https://github.blog/changelog/2026-07-02-improved-accuracy-and-coverage-in-copilot-usage-metrics-reports>) — _github.blog_
8. [Upcoming deprecation of Gemini 2.5 Pro and Gemini 3 Flash](<https://github.blog/changelog/2026-07-02-upcoming-deprecation-of-gemini-2-5-pro-and-gemini-3-flash>) — _github.blog_
9. [A new trend, smart model routing](<https://blog.pragmaticengineer.com/the-pulse-a-new-trend-smart-model-routing/>) — _blog.pragmaticengineer.com_
10. [Anthropic is discussing a new custom chip with Samsung](<https://techcrunch.com/2026/07/02/anthropic-is-discussing-a-new-custom-chip-with-samsung/>) — _techcrunch.com_
11. [Microsoft unveils $2.5B ‘Frontier Company' to embed AI engineers inside customers](<https://www.geekwire.com/2026/microsoft-announces-2-5b-frontier-company-to-embed-ai-engineers-inside-customers/>) — _geekwire.com_
12. [Cloudflare sets deadline to block AI crawlers that bundle search with AI training](<https://www.nbcnews.com/tech/tech-news/cloudflare-sets-ai-crawler-deadline-separate-search-blocked-rcna352446>) — _nbcnews.com_
13. [Tesla caps employee AI spending at $200/week except for Grok](<https://electrek.co/2026/07/02/tesla-caps-employee-ai-spending-200-week/>) — _electrek.co_
14. [Meta's Inevitable Cloud](<https://spyglass.org/meta-cloud/>) — _spyglass.org_
15. [China Quant Funds Draw Billions as AI Trounces Human Traders](<https://www.bloomberg.com/news/articles/2026-07-02/china-quant-funds-draw-billions-as-ai-trounces-human-traders?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4MzA0OTY2OSwiZXhwIjoxNzgzNjU0NDY5LCJhcnRpY2xlSWQiOiJURlkxUkZLSkg2VjQwMCIsImJjb25uZWN0SWQiOiJFQTExNDNDNTM4NEE0RUY5QTg5RjJEN0IxMTg2MzcwOSJ9.RyjaD3xJUXnuIyF9b5x590kKewCjSLyfSlMN-UfATyI>) — _bloomberg.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-07-02` | Thursday | [Read →](news/en/2026-07-02.md) |
| `2026-07-01` | Wednesday | [Read →](news/en/2026-07-01.md) |
| `2026-06-30` | Tuesday | [Read →](news/en/2026-06-30.md) |
| `2026-06-29` | Monday | [Read →](news/en/2026-06-29.md) |
| `2026-06-28` | 🗓️ Weekly recap | [Read →](news/en/2026-06-28.md) |
| `2026-06-27` | Saturday | [Read →](news/en/2026-06-27.md) |
| `2026-06-26` | Friday | [Read →](news/en/2026-06-26.md) |
| `2026-06-25` | Thursday | [Read →](news/en/2026-06-25.md) |
| `2026-06-24` | Wednesday | [Read →](news/en/2026-06-24.md) |
| `2026-06-23` | Tuesday | [Read →](news/en/2026-06-23.md) |
| `2026-06-22` | Monday | [Read →](news/en/2026-06-22.md) |
| `2026-06-21` | 🗓️ Weekly recap | [Read →](news/en/2026-06-21.md) |
| `2026-06-20` | Saturday | [Read →](news/en/2026-06-20.md) |
| `2026-06-19` | Friday | [Read →](news/en/2026-06-19.md) |

<sub>[Browse the full archive (18) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
