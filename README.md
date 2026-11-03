# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-11-03
<sub>updated 3 November 2026 at 12:01</sub>

## Models and LLM tooling

- The "Weight Space Programming" paper shows that a capable model can read and edit the weights of a weaker model, with a demonstration of training a model autonomously without human expertise <sup>[1](<https://latent.space/p/ainews-llms-can-read-write-neural-network-weights-weight-space-programming-cuts-autoresearch-out-of/>)</sup>. The item presents this as a follow-up to Karpathy's autoresearch, which raised recursive self-improvement concerns <sup>[1](<https://latent.space/p/ainews-llms-can-read-write-neural-network-weights-weight-space-programming-cuts-autoresearch-out-of/>)</sup>.
- Simon Willison released llm 0.37, adding the gpt-6.1-sol and gpt-6.1-terra models and a `llm openai endpoint add` command for OpenAI-compatible endpoints <sup>[2](<https://simonwillison.net/2026/Nov/2/llm/>)</sup>. The default model switches to gpt-6-luna, which the release notes describe as half the price of the previous default <sup>[2](<https://simonwillison.net/2026/Nov/2/llm/>)</sup>.
- The same release adds embedding support for different content types, which Gemini Embedding 2 needs for text, audio, images and video <sup>[2](<https://simonwillison.net/2026/Nov/2/llm/>)</sup>.

## Inference and MLOps

- A Hugging Face post introduces Transformers Model Integration Contracts, with a smollm example model page <sup>[3](<https://huggingface.co/blog/transformers-mic>)</sup>.
- A PyTorchKR and XCENA recap of KVCache Meetup Korea 2026 covers KV Cache optimization for LLM inference, with talks on CXL memory expansion, GPU and HBM bottlenecks, request scheduling on RNGD, and LMCache MP Mode <sup>[4](<https://pytorch.org/blog/kvcache-meetup-korea-2026-event-recap/>)</sup>.

## Agents and applied AI

- Latent Space interviews Jacob Lauritzen, CTO of Legora, on building agents for lawyers: the agent drafts and edits Word documents, reviews thousands of contracts at once, and coordinates lawyers, clients and other agents <sup>[5](<https://latent.space/p/building-ai-for-lawyers-jacob-lauritzen-cto-of-legora/>)</sup>.
- OpenAI describes how Heimstaden uses ChatGPT Enterprise and Codex for property management, with cost reductions and employee empowerment across Europe <sup>[6](<https://openai.com/index/heimstaden>)</sup>.

## Security and privacy

- A Simon Willison post highlights an OSINT technique that recovers a video's location from the Doppler curves of background plane noise, cross-referenced against ADS-B data <sup>[7](<https://simonwillison.net/2026/Nov/3/a-sound-that-leaks-your-exact-location/>)</sup>.

## Industry context

- MIT Technology Review reports that US agencies were directed to rebrand "artificial intelligence" as "Super Intelligence" in a September executive order <sup>[8](<https://www.technologyreview.com/2026/11/02/1147932/heres-who-is-falling-in-line-for-trumps-super-intelligence-loyalty-test/>)</sup>.

## Sources

1. [\[AINews\] LLMs can read & write neural network weights: "Weight Space Programming" cuts Autoresearch out of the RSI loop](<https://latent.space/p/ainews-llms-can-read-write-neural-network-weights-weight-space-programming-cuts-autoresearch-out-of/>) — _latent.space_
2. [llm 0.37](<https://simonwillison.net/2026/Nov/2/llm/>) — _simonwillison.net_
3. [Transformers Model Integration Contracts](<https://huggingface.co/blog/transformers-mic>) — _huggingface.co_
4. [KVCache Meetup Korea 2026: Event Recap](<https://pytorch.org/blog/kvcache-meetup-korea-2026-event-recap/>) — _pytorch.org_
5. [Building AI for Lawyers - Jacob Lauritzen, CTO of Legora](<https://latent.space/p/building-ai-for-lawyers-jacob-lauritzen-cto-of-legora/>) — _latent.space_
6. [Heimstaden is changing residential real estate management with AI](<https://openai.com/index/heimstaden>) — _openai.com_
7. [I discovered a sound that leaks your exact location (and it's everywhere) - YouTube](<https://simonwillison.net/2026/Nov/3/a-sound-that-leaks-your-exact-location/>) — _simonwillison.net_
8. [Here’s who is falling in line for Trump’s “Super Intelligence” loyalty test](<https://www.technologyreview.com/2026/11/02/1147932/heres-who-is-falling-in-line-for-trumps-super-intelligence-loyalty-test/>) — _technologyreview.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
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
| `2026-10-21` | Wednesday | [Read →](news/en/2026-10-21.md) |
| `2026-10-20` | Tuesday | [Read →](news/en/2026-10-20.md) |
| `2026-10-19` | Monday | [Read →](news/en/2026-10-19.md) |

<sub>[Browse the full archive (140) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
