# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-11-06
<sub>updated 6 November 2026 at 12:01</sub>

## Models and AI releases

- Thinking Machines has released Inkling 2 Small, pretrained from scratch in under 3 days on fewer than 12T tokens in native NVFP4, with a single joint RL run, and it is reported as competitive with, and often beating, same-size Chinese models <sup>[1](<https://latent.space/p/ainews-inkling-2-small-17a-594b-trained-in-68-hours-on-12t-tokens-beating-muse-spark/>)</sup>.

## Developer tools and AI coding assistants

- GitHub's usage metrics API now reports, per repository, how many Copilot code review comments developers acted on, with a computed addressed rate (addressed comments divided by evaluated comments) and breakdowns by severity, review tier, comment type and customization <sup>[2](<https://github.blog/changelog/2026-11-05-usage-metrics-api-adds-code-review-details-and-addressed-rate>)</sup>.
- The same API now flags users whose client telemetry is missing or whose IDE or Copilot extension versions are below the usage metrics minimums, with daily affected-user counts at enterprise and organization level <sup>[3](<https://github.blog/changelog/2026-11-05-usage-metrics-api-flags-telemetry-and-version-gaps>)</sup>.

## Agents and infrastructure for agents

- Docker Sandboxes are presented as a distinct technology from containers: dedicated microVMs with their own Linux kernel, filesystem, network and Docker Engine, built for autonomous coding agents, whereas containers share the host kernel <sup>[4](<https://www.docker.com/blog/docker-sandboxes-vs-containers/>)</sup>.
- Pinecone's webinar recap argues that AI agents need more than vector similarity: a semantically relevant result can still give a wrong answer when, for example, a one-day promotion is counted as demand, so the decision logic belongs outside the search step <sup>[5](<https://www.pinecone.io/blog/webinar-recap-data-to-vectors-to-context/>)</sup>.

## Robotics

- Tau Robotics is running a humanoid cleaning service in San Francisco where robots are piloted remotely by humans, and the collected data is meant to train more autonomous cleaning robots later <sup>[6](<https://www.technologyreview.com/2026/11/06/1148090/i-watched-a-humanoid-robot-clean-my-apartment-it-felt-like-a-taste-of-the-future/>)</sup>.

## Speech and open benchmarks

- The Open ASR Leaderboard has added Egyptian and Nigerian English <sup>[7](<https://huggingface.co/blog/open-asr-leaderboard-liva>)</sup>.

## Engineering practice and AI adoption

- An AI FIRST podcast episode describes that company's internal AI operating system, built around one agent with skills rather than 25 specialists, and argues that skills and context decide whether it works <sup>[8](<https://ai-first.ai/podcast/wie-wir-bei-ai-first-mit-ki-arbeiten-blick-hinter-die-kulissen-die-groessten-fehler-und-unser-bestes-ki-setup>)</sup>.

## Sources

1. [\[AINews\] Inkling 2 Small: 17A-594B trained in 68 hours on 12T tokens, beating Muse Spark](<https://latent.space/p/ainews-inkling-2-small-17a-594b-trained-in-68-hours-on-12t-tokens-beating-muse-spark/>) — _latent.space_
2. [Usage metrics API adds code review details and addressed rate](<https://github.blog/changelog/2026-11-05-usage-metrics-api-adds-code-review-details-and-addressed-rate>) — _github.blog_
3. [Usage metrics API flags telemetry and version gaps](<https://github.blog/changelog/2026-11-05-usage-metrics-api-flags-telemetry-and-version-gaps>) — _github.blog_
4. [Docker Sandboxes vs. Containers: Choosing the Right Isolation for AI Agents](<https://www.docker.com/blog/docker-sandboxes-vs-containers/>) — _docker.com_
5. [Webinar Recap: From Data to Vectors to Context](<https://www.pinecone.io/blog/webinar-recap-data-to-vectors-to-context/>) — _pinecone_
6. [I watched a humanoid robot clean my apartment. It felt like a taste of the future.](<https://www.technologyreview.com/2026/11/06/1148090/i-watched-a-humanoid-robot-clean-my-apartment-it-felt-like-a-taste-of-the-future/>) — _technologyreview.com_
7. [Egyptian and Nigerian English join the Open ASR Leaderboard](<https://huggingface.co/blog/open-asr-leaderboard-liva>) — _huggingface.co_
8. [Wie wir bei AI FIRST mit KI arbeiten: Blick hinter die Kulissen, die größten Fehler und unser bestes KI-Setup](<https://ai-first.ai/podcast/wie-wir-bei-ai-first-mit-ki-arbeiten-blick-hinter-die-kulissen-die-groessten-fehler-und-unser-bestes-ki-setup>) — _ai first podcast_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-11-05` | Thursday | [Read →](news/en/2026-11-05.md) |
| `2026-11-04` | Wednesday | [Read →](news/en/2026-11-04.md) |
| `2026-11-03` | Tuesday | [Read →](news/en/2026-11-03.md) |
| `2026-11-02` | Monday | [Read →](news/en/2026-11-02.md) |
| `2026-11-01` | 🗓️ Weekly recap | [Read →](news/en/2026-11-01.md) |
| `2026-10-31` | Saturday | [Read →](news/en/2026-10-31.md) |
| `2026-10-30` | Friday | [Read →](news/en/2026-10-30.md) |
| `2026-10-29` | Thursday | [Read →](news/en/2026-10-29.md) |
| `2026-10-28` | Wednesday | [Read →](news/en/2026-10-28.md) |
| `2026-10-27` | Tuesday | [Read →](news/en/2026-10-27.md) |
| `2026-10-26` | Monday | [Read →](news/en/2026-10-26.md) |
| `2026-10-24` | Saturday | [Read →](news/en/2026-10-24.md) |
| `2026-10-23` | Friday | [Read →](news/en/2026-10-23.md) |
| `2026-10-22` | Thursday | [Read →](news/en/2026-10-22.md) |

<sub>[Browse the full archive (143) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
