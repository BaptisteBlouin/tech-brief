# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-07-10
<sub>updated 10 July 2026 at 13:00</sub>

## AI Models & Capabilities
- OpenAI releases GPT‑5.6 family (Sol, Terra, Luna) across ChatGPT Work, Codex and the API, with higher intelligence per token, lower cost for complex work, and stronger agentic performance; a new "ultra" effort level coordinates multiple agents in parallel for demanding tasks <sup>[1](<https://www.latent.space/p/ainews-openai-launches-gpt-56-solterraluna>), [2](<https://www.testingcatalog.com/openai-launches-gpt-5-6-sol-terra-and-luna-on-apps-and-api/>)</sup>.
- Meta launches Muse Spark 1.1 in its Model API, positioning it as state‑of‑the‑art for agentic reasoning and tool use, and introduces a paid tier priced at roughly 25 % of competing top models <sup>[1](<https://www.latent.space/p/ainews-openai-launches-gpt-56-solterraluna>), [3](<https://www.bloomberg.com/news/articles/2026-07-09/meta-starts-charging-for-ai-with-muse-spark-1-1-agentic-model?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4MzY0NzUxMSwiZXhwIjoxNzg0MjUyMzExLCJhcnRpY2xlSWQiOiJUSFZDVENSS1YyVTYwMCIsImJjb25uZWN0SWQiOiI2NTc1NjkyN0UwMkM0N0MwQkQ0MDNEQTJGMEUyNzIyMyJ9.036PyX7IFhgdqyc5QHadS6Ans-LlAztL8vSoBa_ytUk>)</sup>.

## LLM Tooling & Agents
- ChatGPT Work and Codex are positioned as a unified superapp, with Work conversations in the cloud and desktop Work threads remaining local; cloud and desktop Work conversations do not sync at launch <sup>[4](<https://simonwillison.net/2026/Jul/10/openai/#atom-everything>)</sup>.
- PostHog proposes delegating AI‑generated code reviews to agents to remove the human bottleneck while maintaining quality <sup>[5](<https://newsletter.posthog.com/p/code-review-tips>)</sup>.

## MLOps / DevOps & Engineering Practices
- GitHub Mobile adds improved filters and sorting for Copilot sessions (status, repository, type, agent) with preserved sort context, available now on iOS and Android <sup>[6](<https://github.blog/changelog/2026-07-10-github-mobile-improved-filters-and-sorting-for-copilot-sessions>)</sup>.
- GitHub details how it assigned validated owners to every active internal repository in under 45 days, archiving the rest, to make ownership the foundation for security and operations <sup>[7](<https://github.blog/security/application-security/how-github-gave-every-repository-a-durable-owner/>)</sup>.

## Cloud, Infrastructure & On‑Device AI
- Apple explores running much larger models on iPhones, including a 27B‑parameter Qwen 3.6 shrunk via PrismML, to enable more on‑device Apple Intelligence features and enhance privacy <sup>[8](<https://www.macrumors.com/2026/07/09/apple-prismml-larger-on-device-ai-models/>)</sup>.
- Humanoid robots teleoperated by surgeons performed gallbladder removals on live pigs, demonstrating a low‑cost, space‑efficient surgical approach using Unitree G1 robots <sup>[9](<https://arstechnica.com/ai/2026/07/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs/>)</sup>.

## Developer Tools & Profiling
- Hugging Face publishes a guide on profiling attention in PyTorch, offering practical techniques for performance analysis of transformer models <sup>[10](<https://huggingface.co/blog/torch-attention-profile>)</sup>.

## Sources

1. [\[AINews\] OpenAI launches GPT 5.6 Sol/Terra/Luna, Codex becomes ChatGPT superapp](<https://www.latent.space/p/ainews-openai-launches-gpt-56-solterraluna>) — _latent.space_
2. [OpenAI launches GPT-5.6 Sol, Terra, and Luna on apps and API](<https://www.testingcatalog.com/openai-launches-gpt-5-6-sol-terra-and-luna-on-apps-and-api/>) — _testingcatalog.com_
3. [Zuckerberg Pledges ‘Aggressive' Pricing With Meta's First Pay-to-Use AI](<https://www.bloomberg.com/news/articles/2026-07-09/meta-starts-charging-for-ai-with-muse-spark-1-1-agentic-model?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4MzY0NzUxMSwiZXhwIjoxNzg0MjUyMzExLCJhcnRpY2xlSWQiOiJUSFZDVENSS1YyVTYwMCIsImJjb25uZWN0SWQiOiI2NTc1NjkyN0UwMkM0N0MwQkQ0MDNEQTJGMEUyNzIyMyJ9.036PyX7IFhgdqyc5QHadS6Ans-LlAztL8vSoBa_ytUk>) — _bloomberg.com_
4. [Quoting OpenAI](<https://simonwillison.net/2026/Jul/10/openai/#atom-everything>) — _simonwillison.net_
5. [Stop being the code review bottleneck](<https://newsletter.posthog.com/p/code-review-tips>) — _newsletter.posthog.com_
6. [GitHub Mobile: Improved filters and sorting for Copilot sessions](<https://github.blog/changelog/2026-07-10-github-mobile-improved-filters-and-sorting-for-copilot-sessions>) — _github.blog_
7. [How GitHub gave every repository a durable owner](<https://github.blog/security/application-security/how-github-gave-every-repository-a-durable-owner/>) — _github.blog_
8. [Apple Exploring Ways to Run Much Larger AI Models Directly on iPhones](<https://www.macrumors.com/2026/07/09/apple-prismml-larger-on-device-ai-models/>) — _macrumors.com_
9. [Humanoid robots controlled by surgeons did world-first operation on live pigs](<https://arstechnica.com/ai/2026/07/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs/>) — _arstechnica.com_
10. [Profiling in PyTorch (Part 3): Attention is all you profile](<https://huggingface.co/blog/torch-attention-profile>) — _huggingface.co_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-07-09` | Thursday | [Read →](news/en/2026-07-09.md) |
| `2026-07-08` | Wednesday | [Read →](news/en/2026-07-08.md) |
| `2026-07-07` | Tuesday | [Read →](news/en/2026-07-07.md) |
| `2026-07-06` | Monday | [Read →](news/en/2026-07-06.md) |
| `2026-07-05` | 🗓️ Weekly recap | [Read →](news/en/2026-07-05.md) |
| `2026-07-04` | Saturday | [Read →](news/en/2026-07-04.md) |
| `2026-07-03` | Friday | [Read →](news/en/2026-07-03.md) |
| `2026-07-02` | Thursday | [Read →](news/en/2026-07-02.md) |
| `2026-07-01` | Wednesday | [Read →](news/en/2026-07-01.md) |
| `2026-06-30` | Tuesday | [Read →](news/en/2026-06-30.md) |
| `2026-06-29` | Monday | [Read →](news/en/2026-06-29.md) |
| `2026-06-28` | 🗓️ Weekly recap | [Read →](news/en/2026-06-28.md) |
| `2026-06-27` | Saturday | [Read →](news/en/2026-06-27.md) |
| `2026-06-26` | Friday | [Read →](news/en/2026-06-26.md) |

<sub>[Browse the full archive (25) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
