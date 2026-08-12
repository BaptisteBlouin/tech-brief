# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-08-12
<sub>updated 12 August 2026 at 13:01</sub>

## AI/ML Security and Interpretability
- A new paper demonstrates that encrypted chain-of-thought blocks from Anthropic, OpenAI, and Google can be replayed across sessions/users/models, enabling attackers to decode and port reasoning traces and improve open models via stolen traces <sup>[1](<https://www.latent.space/p/ainews-how-to-steal-a-reasoning-trace>), [2](<https://simonwillison.net/2026/Aug/11/stealing-reasoning-traces/#atom-everything>)</sup>.
- The technique builds on earlier responsible disclosures (e.g., latency side-channels) and shows that even cryptographically signed reasoning can be exfiltrated, raising concerns for alignment, security, and CoT monitoring <sup>[1](<https://www.latent.space/p/ainews-how-to-steal-a-reasoning-trace>)</sup>.

## LLM Adoption and Agents
- Google’s Gemini reaches 1 billion monthly active users, becoming the company’s fastest-growing product and embedding deeply into Google’s search and product ecosystem <sup>[3](<https://arstechnica.com/ai/2026/08/google-says-gemini-has-reached-1b-users-faster-than-any-other-google-product/>)</sup>.
- SpaceXAI unveils Grok Bot, an agentic system that operates like a team of AI agents, retaining context across tasks, signing into apps, and sharing state; it is already used internally for engineering, growth, marketing, sales, and finance workflows <sup>[4](<https://www.bloomberg.com/news/articles/2026-08-11/spacexai-unveils-grok-bot-to-work-like-a-team-of-ai-agents?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4NjUxNDY4OSwiZXhwIjoxNzg3MTE5NDg5LCJhcnRpY2xlSWQiOiJUSks0RVpUOTZPU0cwMCIsImJjb25uZWN0SWQiOiJFQTExNDNDNTM4NEE0RUY5QTg5RjJEN0IxMTg2MzcwOSJ9.6KeWdyBAMxNwBVL5_raTXhaTvTFoDOI__drrs5yRJLU>)</sup>.

## AI Applications and Startups
- Columbia researchers deploy an AI system to locate rare sperm in infertile men, addressing cases of azoospermia where manual microscopy misses viable cells <sup>[5](<https://www.nytimes.com/2026/08/11/science/ai-infertile-men-sperm.html?unlocked_article_code=1.41A.Jn5D.uMN3qB1ku73k&smid=url-share>)</sup>.
- Igor Babuschkin (ex-xAI) launches River AI to build trainable, open-source AI that runs on personal home computers, aiming to decentralize control away from big corporations <sup>[6](<https://www.nytimes.com/2026/08/11/technology/igor-babuschkin-xai-river-ai.html?unlocked_article_code=1.41A.60Pc.HSJcWvW3aO1r&smid=url-share>)</sup>.

## Engineering and Developer Practices
- Sophie Alpert’s policy for AI-assisted writing emphasizes that engineers must stand behind every idea and sentence in their docs, as lossless transformations of natural language are impossible; reviewers should never hear “AI wrote that” as an excuse <sup>[7](<https://simonwillison.net/2026/Aug/11/there-are-no-lossless-transformations-of-natural-language-text/#atom-everything>)</sup>.
- Vercel argues that as AI models become more capable at cybersecurity, defenders must continuously improve vulnerability discovery and remediation, since the gap between open and closed models will shrink <sup>[8](<https://vercel.com/blog/everything-hackable-will-get-hacked>)</sup>.
- Scaling agentic coding SDKs requires accounting for the high cost of concurrency, as it involves many partially trusted computers operating simultaneously <sup>[9](<https://sahansera.dev/scaling-an-agentic-coding-sdk-what-concurrency-actually-costs/>)</sup>.

## Language and Tooling
- Modular announces Mojo 1.0, marking the language’s transition into a general-purpose tool with a growing developer community <sup>[10](<https://www.modular.com/blog/modular-26-5-mojo-1-0-is-here>)</sup>.
- ngrok explores the duality between compression and prediction, linking entropy in compression to improved language model performance <sup>[11](<https://ngrok.com/blog/compression-is-prediction>)</sup>.

## Software Engineering Insights
- A deep dive into Optiver reveals how proprietary trading firms invest in bespoke hardware and large platform teams, offering lucrative, full-stack engineering challenges <sup>[12](<https://newsletter.pragmaticengineer.com/p/optiver>)</sup>.
- Roadmaps should prioritize decisions over dates, as timelines are rarely constrained purely by time but by approvals, handoffs, or unresolved choices <sup>[13](<https://lethain.com/decisions-not-dates/>)</sup>.

## Sources

1. [\[AINews\] How to steal a Reasoning Trace](<https://www.latent.space/p/ainews-how-to-steal-a-reasoning-trace>) — _latent.space_
2. [Stealing Reasoning Traces from Proprietary LLM APIs](<https://simonwillison.net/2026/Aug/11/stealing-reasoning-traces/#atom-everything>) — _simonwillison.net_
3. [Gemini becomes Google's fastest-growing product ever as it hits 1B users](<https://arstechnica.com/ai/2026/08/google-says-gemini-has-reached-1b-users-faster-than-any-other-google-product/>) — _arstechnica.com_
4. [SpaceXAI Unveils Grok Bot to Work Like a Team of AI Agents](<https://www.bloomberg.com/news/articles/2026-08-11/spacexai-unveils-grok-bot-to-work-like-a-team-of-ai-agents?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4NjUxNDY4OSwiZXhwIjoxNzg3MTE5NDg5LCJhcnRpY2xlSWQiOiJUSks0RVpUOTZPU0cwMCIsImJjb25uZWN0SWQiOiJFQTExNDNDNTM4NEE0RUY5QTg5RjJEN0IxMTg2MzcwOSJ9.6KeWdyBAMxNwBVL5_raTXhaTvTFoDOI__drrs5yRJLU>) — _bloomberg.com_
5. [AI Is Finding Sperm Where Doctors Couldn't](<https://www.nytimes.com/2026/08/11/science/ai-infertile-men-sperm.html?unlocked_article_code=1.41A.Jn5D.uMN3qB1ku73k&smid=url-share>) — _nytimes.com_
6. [His Start-Up's Goal: AI That Is Trainable and Not Controlled by a Big Company](<https://www.nytimes.com/2026/08/11/technology/igor-babuschkin-xai-river-ai.html?unlocked_article_code=1.41A.60Pc.HSJcWvW3aO1r&smid=url-share>) — _nytimes.com_
7. [There are no lossless transformations of natural-language text](<https://simonwillison.net/2026/Aug/11/there-are-no-lossless-transformations-of-natural-language-text/#atom-everything>) — _simonwillison.net_
8. [Everything hackable will get hacked](<https://vercel.com/blog/everything-hackable-will-get-hacked>) — _vercel.com_
9. [Scaling an Agentic Coding SDK: What Concurrency Actually Costs](<https://sahansera.dev/scaling-an-agentic-coding-sdk-what-concurrency-actually-costs/>) — _sahansera.dev_
10. [Modular 26.5: Mojo 1.0 is here!](<https://www.modular.com/blog/modular-26-5-mojo-1-0-is-here>) — _modular.com_
11. [Compression is prediction](<https://ngrok.com/blog/compression-is-prediction>) — _ngrok.com_
12. [Software engineering at a proprietary trading company: Optiver](<https://newsletter.pragmaticengineer.com/p/optiver>) — _newsletter.pragmaticengineer.com_
13. [Roadmap decisions rather than dates](<https://lethain.com/decisions-not-dates/>) — _lethain.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-08-11` | Tuesday | [Read →](news/en/2026-08-11.md) |
| `2026-08-10` | Monday | [Read →](news/en/2026-08-10.md) |
| `2026-08-09` | 🗓️ Weekly recap | [Read →](news/en/2026-08-09.md) |
| `2026-08-08` | Saturday | [Read →](news/en/2026-08-08.md) |
| `2026-08-07` | Friday | [Read →](news/en/2026-08-07.md) |
| `2026-08-06` | Thursday | [Read →](news/en/2026-08-06.md) |
| `2026-08-05` | Wednesday | [Read →](news/en/2026-08-05.md) |
| `2026-08-04` | Tuesday | [Read →](news/en/2026-08-04.md) |
| `2026-08-03` | Monday | [Read →](news/en/2026-08-03.md) |
| `2026-08-02` | 🗓️ Weekly recap | [Read →](news/en/2026-08-02.md) |
| `2026-08-01` | Saturday | [Read →](news/en/2026-08-01.md) |
| `2026-07-31` | Friday | [Read →](news/en/2026-07-31.md) |
| `2026-07-30` | Thursday | [Read →](news/en/2026-07-30.md) |
| `2026-07-29` | Wednesday | [Read →](news/en/2026-07-29.md) |

<sub>[Browse the full archive (58) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
