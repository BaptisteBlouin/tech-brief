# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-08-14
<sub>updated 14 August 2026 at 13:01</sub>

## AI Models & Capabilities
- OpenAI previews an Ultrafast API tier for GPT-5.6 Sol, delivering 750 output tokens per second—14× faster than Standard—initially for select customers, with a broader rollout planned as Cerebras-powered capacity scales <sup>[1](<https://www.testingcatalog.com/openai-previews-ultrafast-api-tier-for-gpt-5-6-sol/>)</sup>.
- Google’s Gemini 3.7 Flash update narrows the gap with Claude 4.8+ and GPT-5.5+ series, reviving Google’s GDM (Gemini Data Model) competitiveness after prior versions fell behind <sup>[2](<https://www.latent.space/p/ainews-gemini-37-flash-brings-gdm>)</sup>.

## LLM Tooling & Agents
- DeepSeek releases **DeepSeek Harness** in developer preview: a modular, plugin-based framework where every capability can be swapped or recomposed, with append-only session logging for full transparency <sup>[3](<https://deepseek.com/harness/en/>)</sup>.
- **Foreman** (Vercel Labs) is an AI-native software factory that orchestrates agents across the dev loop: Classifier (triage), Analyst (planning), Implementer (sandboxed execution), and Reviewer (independent judgment), delivering reviewed draft PRs from GitHub/Linear tasks <sup>[4](<https://github.com/vercel-labs/eve-software-factory-template>), [5](<https://ask-foreman.dev/docs/how-it-works>)</sup>.
- BLP Digital integrates **300 AI agents into core ERP processes**, emphasizing ROI over pilot costs, with governance shifting from IT to business owners and a focus on validation sets and change management <sup>[6](<https://ai-first.ai/podcast/agentic-ai-im-erp-wie-blp-300-agenten-in-kernprozesse-bringt>)</sup>.

## MLOps & Engineering Practices
- OpenAI’s revenue run rate exceeds **$40B**, driven by AI coding tools, subscriptions, ads, and consumer products, signaling rapid enterprise and developer adoption <sup>[7](<https://www.bloomberg.com/news/articles/2026-08-13/openai-s-revenue-run-rate-tops-40-billion-ahead-of-ipo?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4NjY4NDEzNywiZXhwIjoxNzg3Mjg4OTM3LCJhcnRpY2xlSWQiOiJUSlE1OTFOM04wOUswMCIsImJjb25uZWN0SWQiOiIwOThFNzNDQTE5QTA0RDkxODEyQzQ4MjcwRDZERTI0QiJ9.ck5lnOJGYjhYF2uLM8H2-BhUlJ_8XuDgIDW_i3EsXZo>)</sup>.

## Developer Tools & Infrastructure
- **sqlite-utils 4.2.1** patches a crash caused by a missing `typing-extensions` dependency and introduces a smoke test to ensure CLI functionality without dev dependencies <sup>[8](<https://simonwillison.net/2026/Aug/13/sqlite-utils-2/>)</sup>.
- Bluesky launches **Bluesky Protocol Services**, consolidating documentation, clarifying service contracts for Bluesky-provided infra, and streamlining future releases <sup>[9](<https://atproto.com/blog/introducing-bluesky-protocol-services>)</sup>.

## Cloud & Platforms
- X open-sources its **For You ranking algorithm and core engine** under Apache 2.0, expanding transparency and enabling users to check for shadowbanning via a pilot tool <sup>[10](<https://techcrunch.com/2026/08/13/x-open-sources-its-ranking-algorithm-letting-users-see-if-theyve-been-shadowbanned/>)</sup>.

## Sources

1. [OpenAI previews Ultrafast API tier for GPT-5.6 Sol](<https://www.testingcatalog.com/openai-previews-ultrafast-api-tier-for-gpt-5-6-sol/>) — _testingcatalog.com_
2. [\[AINews\] Gemini 3.7 Flash brings GDM back to the forefront](<https://www.latent.space/p/ainews-gemini-37-flash-brings-gdm>) — _latent.space_
3. [DeepSeek Harness (Website)](<https://deepseek.com/harness/en/>) — _deepseek.com_
4. [Foreman](<https://github.com/vercel-labs/eve-software-factory-template>) — _github.com_
5. [Foreman](<https://ask-foreman.dev/docs/how-it-works>) — _ask-foreman.dev_
6. [Agentic AI im ERP: Wie BLP 300 Agenten in Kernprozesse bringt](<https://ai-first.ai/podcast/agentic-ai-im-erp-wie-blp-300-agenten-in-kernprozesse-bringt>) — _ai first podcast_
7. [OpenAI's Revenue Run Rate Tops $40 Billion Ahead of IPO](<https://www.bloomberg.com/news/articles/2026-08-13/openai-s-revenue-run-rate-tops-40-billion-ahead-of-ipo?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4NjY4NDEzNywiZXhwIjoxNzg3Mjg4OTM3LCJhcnRpY2xlSWQiOiJUSlE1OTFOM04wOUswMCIsImJjb25uZWN0SWQiOiIwOThFNzNDQTE5QTA0RDkxODEyQzQ4MjcwRDZERTI0QiJ9.ck5lnOJGYjhYF2uLM8H2-BhUlJ_8XuDgIDW_i3EsXZo>) — _bloomberg.com_
8. [sqlite-utils 4.2.1](<https://simonwillison.net/2026/Aug/13/sqlite-utils-2/>) — _simonwillison.net_
9. [Introducing Bluesky Protocol Services](<https://atproto.com/blog/introducing-bluesky-protocol-services>) — _atproto.com_
10. [X open sources its ranking algorithm, letting users see if they've been ‘shadowbanned'](<https://techcrunch.com/2026/08/13/x-open-sources-its-ranking-algorithm-letting-users-see-if-theyve-been-shadowbanned/>) — _techcrunch.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-08-13` | Thursday | [Read →](news/en/2026-08-13.md) |
| `2026-08-12` | Wednesday | [Read →](news/en/2026-08-12.md) |
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

<sub>[Browse the full archive (60) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
