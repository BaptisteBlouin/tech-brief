# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-10-16
<sub>updated 16 October 2026 at 13:01</sub>

## Models and Open Weights

- Meta released Muse Spark Open, an 816-billion-parameter open-weight mixture-of-experts model that activates 42 billion parameters per token and supports up to 1 million tokens of context <sup>[1](<https://venturebeat.com/technology/meta-unveils-muse-spark-open-the-new-top-u-s-open-weights-model-and-it-runs-on-two-paired-mac-desktops>)</sup>. Meta's benchmarks ran on a pair of M5 Ultra Mac Studios, with an unspecified memory configuration <sup>[1](<https://venturebeat.com/technology/meta-unveils-muse-spark-open-the-new-top-u-s-open-weights-model-and-it-runs-on-two-paired-mac-desktops>)</sup>.
- Per the same newsletter, a version of Muse Spark Open shipped today, but it is weaker than Meta's earlier Spark 1.3 model <sup>[2](<https://www.latent.space/p/ainews-agents-disprove-polysemanticity>)</sup>.

## Interpretability and Alignment

- Goodfire's Nick Cammarata published an essay arguing that neural networks are already clean, claiming that many known cases of polysemanticity and superposition resolve under further agentic analysis <sup>[2](<https://www.latent.space/p/ainews-agents-disprove-polysemanticity>)</sup>.

## Agents and Developer Tooling

- GitHub Copilot in Slack and Microsoft Teams now works across multiple repositories in one conversation, for tasks such as tracking pull requests and investigating issues spanning frontend and backend repos <sup>[3](<https://github.blog/changelog/2026-10-15-copilot-in-slack-and-teams-adds-model-and-repository-updates>)</sup>.
- Perplexity open-sourced SPACE, the sandbox platform behind its Computer product, positioned as a foundation for safer agent systems <sup>[4](<https://www.perplexity.ai/hub/blog/open-sourcing-space>)</sup>.
- Tech companies are building internal "vibe-coding" apps for non-engineers, which the Pragmatic Engineer reports gets higher adoption than vendor products and keeps internal data exposure safer <sup>[5](<https://blog.pragmaticengineer.com/the-pulse-new-trend-of-building-internal-vibe-coding-apps-at-tech-companies/>)</sup>.
- Developers are using Claude to reverse engineer hardware: it can read long USB captures, spot a repeating sequence where one byte changes, propose what that byte means, and write tests to confirm, while humans still decide what to build and verify on real hardware <sup>[6](<https://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/>)</sup>.
- The Every article "How Codex Happened" tells the inside story of Codex, which began as an effort to build an AI software engineer and became central to OpenAI's comeback after the first cloud version failed to find product-market fit <sup>[7](<https://every.to/p/how-codex-happened>)</sup>.

## Enterprise AI in Practice

- Unzer reports integrating AI into three core processes with 60 to 90 percent efficiency gains, including cutting merchant onboarding from 47 to 8 days and adverse media screening from 15 minutes to under 3 <sup>[8](<https://ai-first.ai/podcast/wie-unzer-ki-in-3-kernprozesse-mit-60-90-effizienzgewinn-integriert-hat>)</sup>.
- IBM's Lisa Precht discusses how IBM saved $4.5 billion with AI, emphasizing that running agents in production is harder than prototyping, that governance must live in the system, and that small specialized models suit some tasks better <sup>[9](<https://ai-first.ai/podcast/wie-ibm-mit-ki-4-5-milliarden-dollar-einsparte>)</sup>.

## Data, Infrastructure and Cloud

- DuckDB benchmarked a v2.0 development build on NVIDIA's Vera chip (88 Olympus cores, up to 1.2 TB/s memory bandwidth) against an Intel Xeon 6 baseline, running the full TPC-H benchmark at scale factor 1,000 on two Ubuntu 26.04 machines with 768 GB RAM <sup>[10](<https://duckdb.org/2026/10/16/nvidia-vera-benchmark.html>)</sup>.
- Redis now includes compressed Roaring bitmaps, which store sparse integer sets in little space <sup>[11](<https://lemire.me/blog/2026/10/15/redis-now-has-compressed-bitmaps-roaring/>)</sup>.
- CoreWeave has taken on more than $51 billion of debt and obligations for its AI infrastructure, and its five-year credit default swap spreads have soared, signaling investor concern about AI debt <sup>[12](<https://www.cnbc.com/2026/10/15/coreweave-credit-default-swaps-hit-distress-levels-as-investors-sour-on-ai-debt.html>)</sup>.

## Robotics and Hardware Research

- Google Quantum AI demonstrated magic state cultivation on its Willow processor, reporting a 40-fold reduction in errors for error-corrected magic states <sup>[13](<https://blog.google/innovation-and-ai/models-and-research/quantum-computing/magic-state-cultivation-quantum-computing/>)</sup>.
- Construction Physics examines how robot training data is expensive to collect, and how researchers are trying to gather enough of it to see the scaling gains seen in large language models <sup>[14](<https://www.construction-physics.com/p/how-to-train-your-robot>)</sup>.

## Engineering Culture and Careers

- Weli.dev argues that job seekers face a cost pressure because every job expects AI use, but using AI costs money <sup>[15](<https://weli.dev/blog/the-cost-of-getting-a-job-today/>)</sup>.
- A post on GitHub stars warns that influencers can make repositories look widely used when they are not, undermining the signal stars once provided <sup>[16](<https://avdi.codes/lies-damn-lies-and-github-stars/>)</sup>.

## Sources

1. [Meta unveils Muse Spark Open, the new top US open weights model — and it runs on two paired Mac desktops](<https://venturebeat.com/technology/meta-unveils-muse-spark-open-the-new-top-u-s-open-weights-model-and-it-runs-on-two-paired-mac-desktops>) — _venturebeat.com_
2. [\[AINews\] Agents disprove Polysemanticity; greatly improve Interpretability & Alignment](<https://www.latent.space/p/ainews-agents-disprove-polysemanticity>) — _latent.space_
3. [Multi-repo support and other improvements for GitHub Copilot in Slack and Microsoft Teams](<https://github.blog/changelog/2026-10-15-copilot-in-slack-and-teams-adds-model-and-repository-updates>) — _github.blog_
4. [Open-sourcing SPACE, the sandbox platform behind Computer](<https://www.perplexity.ai/hub/blog/open-sourcing-space>) — _perplexity.ai_
5. [New trend of building “internal vibe-coding apps” at tech companies](<https://blog.pragmaticengineer.com/the-pulse-new-trend-of-building-internal-vibe-coding-apps-at-tech-companies/>) — _blog.pragmaticengineer.com_
6. [Using Artificial Intelligence to reverse engineer hardware](<https://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/>) — _blogs.gnome.org_
7. [How Codex Happened](<https://every.to/p/how-codex-happened>) — _every.to_
8. [Wie Unzer KI in 3 Kernprozesse mit 60-90% Effizienzgewinn integriert hat](<https://ai-first.ai/podcast/wie-unzer-ki-in-3-kernprozesse-mit-60-90-effizienzgewinn-integriert-hat>) — _ai first podcast_
9. [Wie IBM mit KI 4,5 Milliarden Dollar einsparte](<https://ai-first.ai/podcast/wie-ibm-mit-ki-4-5-milliarden-dollar-einsparte>) — _ai first podcast_
10. [Benchmarking DuckDB v2.0-dev on NVIDIA Vera](<https://duckdb.org/2026/10/16/nvidia-vera-benchmark.html>) — _duckdb.org_
11. [Redis now has compressed bitmaps (Roaring)](<https://lemire.me/blog/2026/10/15/redis-now-has-compressed-bitmaps-roaring/>) — _lemire.me_
12. [CoreWeave credit default swaps hit distress levels as investors sour on AI debt](<https://www.cnbc.com/2026/10/15/coreweave-credit-default-swaps-hit-distress-levels-as-investors-sour-on-ai-debt.html>) — _cnbc.com_
13. [Bringing the magic: Google breaks open a bottleneck in quantum computing](<https://blog.google/innovation-and-ai/models-and-research/quantum-computing/magic-state-cultivation-quantum-computing/>) — _blog.google_
14. [How to Train Your Robot](<https://www.construction-physics.com/p/how-to-train-your-robot>) — _construction-physics.com_
15. [The Cost of Getting a Job Today](<https://weli.dev/blog/the-cost-of-getting-a-job-today/>) — _weli.dev_
16. [Lies, Damn Lies, and GitHub Stars](<https://avdi.codes/lies-damn-lies-and-github-stars/>) — _avdi.codes_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-10-15` | Thursday | [Read →](news/en/2026-10-15.md) |
| `2026-10-14` | Wednesday | [Read →](news/en/2026-10-14.md) |
| `2026-10-13` | Tuesday | [Read →](news/en/2026-10-13.md) |
| `2026-10-12` | Monday | [Read →](news/en/2026-10-12.md) |
| `2026-10-11` | 🗓️ Weekly recap | [Read →](news/en/2026-10-11.md) |
| `2026-10-10` | Saturday | [Read →](news/en/2026-10-10.md) |
| `2026-10-09` | Friday | [Read →](news/en/2026-10-09.md) |
| `2026-10-08` | Thursday | [Read →](news/en/2026-10-08.md) |
| `2026-10-07` | Wednesday | [Read →](news/en/2026-10-07.md) |
| `2026-10-06` | Tuesday | [Read →](news/en/2026-10-06.md) |
| `2026-10-05` | Monday | [Read →](news/en/2026-10-05.md) |
| `2026-10-04` | 🗓️ Weekly recap | [Read →](news/en/2026-10-04.md) |
| `2026-10-03` | Saturday | [Read →](news/en/2026-10-03.md) |
| `2026-10-02` | Friday | [Read →](news/en/2026-10-02.md) |

<sub>[Browse the full archive (123) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
