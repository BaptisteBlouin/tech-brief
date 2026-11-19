# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-11-19
<sub>updated 19 November 2026 at 12:01</sub>

## AI models and LLM tooling

- Google DeepMind released Gemini 4 Neon, its fourth Gemini 4 model in about seven weeks, while the earlier Argon model is now retired <sup>[1](<https://latent.space/p/ainews-gemini-4-neon-gdm-s-opus-sol-contender/>)</sup>. Neon is priced at $3 per million input tokens and $15 per million output tokens, and Google's lineup now runs Carbon, Neon, Hydrogen from most to least expensive, with Carbon currently at half price until December 1st <sup>[1](<https://latent.space/p/ainews-gemini-4-neon-gdm-s-opus-sol-contender/>)</sup>.
- A community reader of Simon Willison's post notes that Gemini 4 pricing has become harder to follow, since Hydrogen's discount and Carbon's expiring promotion change the ordering <sup>[2](<https://simonwillison.net/2026/Nov/18/llm-gemini/>)</sup>.

## Developer tooling and DevOps

- GitHub CLI v2.105.0 adds `gh event listen`, which waits for pull request events such as a submitted review, merge conflicts or completed check suites, replacing polling loops in scripts and agents <sup>[3](<https://github.blog/changelog/2026-11-18-wait-for-pull-request-events-with-github-cli>)</sup>.
- Agents using `gh pr create`, `gh pr view`, `gh run watch` or `gh api` are now pointed to `gh event listen` instead of polling <sup>[3](<https://github.blog/changelog/2026-11-18-wait-for-pull-request-events-with-github-cli>)</sup>.

## Cloud, security and infrastructure

- GitHub Enterprise Cloud with data residency (GHE.com) now supports streaming enterprise audit logs to Amazon S3 using OpenID Connect, so no long-lived AWS credentials need to be stored on GitHub <sup>[4](<https://github.blog/changelog/2026-11-19-s3-audit-log-streaming-with-openid-connect-expands-to-ghe-com>)</sup>.

## Sources

1. [\[AINews\] Gemini 4 Neon: GDM's Opus/Sol Contender](<https://latent.space/p/ainews-gemini-4-neon-gdm-s-opus-sol-contender/>) — _latent.space_
2. [llm-gemini 0.38](<https://simonwillison.net/2026/Nov/18/llm-gemini/>) — _simonwillison.net_
3. [Wait for pull request events with GitHub CLI](<https://github.blog/changelog/2026-11-18-wait-for-pull-request-events-with-github-cli>) — _github.blog_
4. [S3 audit log streaming with OpenID Connect expands to GHE.com](<https://github.blog/changelog/2026-11-19-s3-audit-log-streaming-with-openid-connect-expands-to-ghe-com>) — _github.blog_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-11-18` | Wednesday | [Read →](news/en/2026-11-18.md) |
| `2026-11-17` | Tuesday | [Read →](news/en/2026-11-17.md) |
| `2026-11-16` | Monday | [Read →](news/en/2026-11-16.md) |
| `2026-11-15` | 🗓️ Weekly recap | [Read →](news/en/2026-11-15.md) |
| `2026-11-14` | Saturday | [Read →](news/en/2026-11-14.md) |
| `2026-11-13` | Friday | [Read →](news/en/2026-11-13.md) |
| `2026-11-12` | Thursday | [Read →](news/en/2026-11-12.md) |
| `2026-11-11` | Wednesday | [Read →](news/en/2026-11-11.md) |
| `2026-11-10` | Tuesday | [Read →](news/en/2026-11-10.md) |
| `2026-11-09` | Monday | [Read →](news/en/2026-11-09.md) |
| `2026-11-08` | 🗓️ Weekly recap | [Read →](news/en/2026-11-08.md) |
| `2026-11-07` | Saturday | [Read →](news/en/2026-11-07.md) |
| `2026-11-06` | Friday | [Read →](news/en/2026-11-06.md) |
| `2026-11-05` | Thursday | [Read →](news/en/2026-11-05.md) |

<sub>[Browse the full archive (156) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
