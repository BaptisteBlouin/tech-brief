# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-11-13
<sub>updated 14 November 2026 at 00:01</sub>

## AI and LLM news

- NVIDIA announced that Jensen Huang has stepped down as CEO, president and board member after 33 years, with CFO Colette Kress serving as interim CEO <sup>[1](<https://latent.space/p/ainews-jensen-huang-resigns-after-33-years-leading-nvidia/>)</sup>. Reports tied the change to personal controversies, though the causal link is unconfirmed <sup>[1](<https://latent.space/p/ainews-jensen-huang-resigns-after-33-years-leading-nvidia/>)</sup>.
- The same reporting notes ongoing debate over whether some Chinese models were trained on Blackwell GPUs they should not have had access to, with the scale of this disputed <sup>[1](<https://latent.space/p/ainews-jensen-huang-resigns-after-33-years-leading-nvidia/>)</sup>.

## Open source and developer tooling

- At the AI Engineer Code Summit, ArtCraft presented its open-source push: 17 open-source tool versions so far, including PhotoCraft, a Photoshop alternative built from scratch in Rust, and PdfCraft, a clone of Adobe Acrobat <sup>[2](<https://latent.space/p/artcraft/>)</sup>.

## Voice AI and business applications

- A podcast interview with fonio.ai's founder describes growth from 1.5 million to a projected 30 million ARR, with voice AI used for phone support and sales and the company aiming to become an AI operating system for business processes <sup>[3](<https://ai-first.ai/podcast/von-0-auf-25-mio-arr-mit-voice-ai-mit-daniel-keinrath>)</sup>.

## AI Models and Tooling

- Google introduced Gemini 4 Hydrogen, a fast model optimized for coding and agentic workflows, scoring 51 on the Artificial Analysis Intelligence Index and priced at $1.50 per million input tokens and $7.50 per million output tokens <sup>[4](<https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/>)</sup>. It is now generally available in GitHub Copilot across Pro, Pro+, Max, Business, and Enterprise plans, with a gradual rollout <sup>[5](<https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot>)</sup>.
- GitHub will deprecate several Copilot models on December 14, 2026, including Claude Fable 5, Claude Haiku 4.5 (which stays available to individual annual-plan subscribers), Gemini 3.8 Flash, Gemini 4 Argon, Grok 4.6, and Kimi K3, with suggested replacements listed <sup>[6](<https://github.blog/changelog/2026-11-13-upcoming-deprecation-of-selected-github-copilot-models-in-december>)</sup>.
- Perplexity released Decider v1.3 and Decider Flash v1.3, classifiers that return probabilities for classification, routing, ranking, and evaluation, plus highlighting for named entity recognition and extractive QA <sup>[7](<https://www.perplexity.ai/hub/blog/perplexity-decider>)</sup>.
- llama.cpp v1.0.0 was released, with llama.cpp and ggml committing to signal API and ABI incompatibilities through major-version bumps <sup>[8](<https://huggingface.co/blog/ggml-org/llama-cpp-v1>)</sup>.
- Liquid AI presented LiquidCodec, an audio tokenizer aimed at fast speech generation with a small memory footprint for local conversational apps <sup>[9](<https://www.liquid.ai/blog/liquidcodec>)</sup>.

## Agents and Developer Tooling

- Anthropic published a guide on always-on agents, which run indefinitely across sessions and are built from primitives controlling when they wake, what state persists between runs, and how output reaches the user <sup>[10](<https://claude.com/resources/articles/building-always-on-agents>)</sup>.
- Cloudflare open-sourced Kitesurf under Apache 2.0, a stateless browser for agents that runs on Workers and supports the Chrome DevTools Protocol <sup>[11](<https://blog.cloudflare.com/kitesurf-open-source/>)</sup>.
- Cloudflare introduced Spend Management in beta for pay-as-you-go customers, with spending thresholds that can pause activity when reached, starting with Workers and Durable Objects <sup>[12](<https://blog.cloudflare.com/spend-management/>)</sup>.
- Resend migrated its email API from Node.js to Go in seven weeks; during a 50% rollout, median latency fell from 58 ms to 31 ms and memory per task dropped from about 1.3 GB to 180 MB <sup>[13](<https://resend.com/blog/migrating-our-email-api-to-go>)</sup>.
- OpenAI announced ChatGPT Wallet, letting agents complete purchases with user approval and existing card protections <sup>[14](<https://openai.com/index/introducing-chatgpt-wallet>)</sup>.
- GitHub added a repository_scan setting to the REST API for AI Scan, so organizations can roll it out with scripts <sup>[15](<https://github.blog/changelog/2026-11-13-manage-ai-scan-for-repositories-using-the-rest-api>)</sup>.

## Security

- A critical RCE in Apache HTTP Server's mod_http2 (CVE-2026-119618, CVSS 9.8) affects versions 2.4.55 through 2.4.70 when HTTP/2 is enabled; the fix is upgrading to 2.4.71 or disabling h2 and h2c <sup>[16](<https://thehackernews.com/2026/11/critical-apache-http2-flaw-could-let.html>), [17](<https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability>)</sup>.
- A campaign pushed a CI secret stealer to tens of thousands of repositories using stolen GitHub credentials, with 1,835 repositories reported as having run the payload and lost credentials <sup>[18](<https://www.aikido.dev/blog/compromised-github-accounts-push-ci-secret-stealer-to-tens-of-thousands-of-repositories>)</sup>.
- Microsoft reported GSocket-based C2 detections rising 356% between March and August, with defenders advised to block relay egress and mount /dev/shm as noexec <sup>[19](<https://www.microsoft.com/en-us/security/blog/2026/11/11/global-socket-how-threat-actors-weaponizing-gsocket-stealthy-c2/>)</sup>.
- Microsoft's FORGE Lab used AI models to find Linux kernel bugs, producing 59 upstream reports and 33 CVEs, while the median fix took 41 days, which it says shows discovery now outpaces repair <sup>[20](<https://www.microsoft.com/en-us/security/blog/2026/11/11/lessons-from-59-linux-kernel-bug-reports/>)</sup>.

## DevOps, Infrastructure, and Platforms

- Istio 1.32.0 supports Kubernetes 1.33 to 1.37 and adds experimental Gateway API authorization targeting for HTTPRoute <sup>[21](<https://istio.io/latest/news/releases/1.32.x/announcing-1.32/>)</sup>.
- Open Cluster Management became a CNCF Incubating project; eBay uses it with Argo CD across more than 190 clusters <sup>[22](<https://www.cncf.io/blog/2026/11/10/open-cluster-management-ocm-becomes-a-cncf-incubating-project/>)</sup>.
- A critical Red Hat Quay flaw (CVE-2026-123710, CVSS 9.8) lets a registry user plant a non-expiring signing key granting access to every repository, with no fixed release yet <sup>[23](<https://www.securityweek.com/critical-red-hat-quay-vulnerability-could-expose-private-container-images/>)</sup>.
- PlanetScale open-sourced a Heroku Migrator for multi-terabyte databases using Bucardo trigger-based replication, splitting transfer and index rebuild to speed copies by about five times <sup>[24](<https://planetscale.com/blog/migrate-from-heroku-to-planetscale>)</sup>.

## Sources

1. [\[AINews\] Jensen Huang resigns after 33 years leading NVIDIA](<https://latent.space/p/ainews-jensen-huang-resigns-after-33-years-leading-nvidia/>) — _latent.space_
2. [AI Ambition: ArtCraft Cloned Photoshop and Now Wants to "Rebuild Everything"](<https://latent.space/p/artcraft/>) — _latent.space_
3. [Von 0 auf 25 Mio. ARR mit Voice AI – mit Daniel Keinrath](<https://ai-first.ai/podcast/von-0-auf-25-mio-arr-mit-voice-ai-mit-daniel-keinrath>) — _ai first podcast_
4. [Gemini 4 Hydrogen](<https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/>) — _blog.google_
5. [Gemini 4 Hydrogen in GitHub Copilot](<https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot>) — _github.blog_
6. [Upcoming deprecation of selected GitHub Copilot models in December](<https://github.blog/changelog/2026-11-13-upcoming-deprecation-of-selected-github-copilot-models-in-december>) — _github.blog_
7. [Perplexity Decider](<https://www.perplexity.ai/hub/blog/perplexity-decider>) — _perplexity.ai_
8. [llama.cpp v1.0.0 : A stronger foundation for the local AI ecosystem](<https://huggingface.co/blog/ggml-org/llama-cpp-v1>) — _huggingface.co_
9. [LiquidCodec: High-Fidelity Audio Tokenization Optimized for Speed](<https://www.liquid.ai/blog/liquidcodec>) — _liquid.ai_
10. [Building always-on agents](<https://claude.com/resources/articles/building-always-on-agents>) — _claude_
11. [Kitesurf is now open source](<https://blog.cloudflare.com/kitesurf-open-source/>) — _blog.cloudflare.com_
12. [Introducing Spend Management: Spending limits and alerts for Cloudflare](<https://blog.cloudflare.com/spend-management/>) — _blog.cloudflare.com_
13. [Migrating Our Email API to Go](<https://resend.com/blog/migrating-our-email-api-to-go>) — _resend.com_
14. [Introducing ChatGPT Wallet](<https://openai.com/index/introducing-chatgpt-wallet>) — _openai.com_
15. [Manage AI Scan for repositories using the REST API](<https://github.blog/changelog/2026-11-13-manage-ai-scan-for-repositories-using-the-rest-api>) — _github.blog_
16. [Critical Apache HTTP/2 Flaw Could Let Unauthenticated Attackers Execute Code Remotely](<https://thehackernews.com/2026/11/critical-apache-http2-flaw-could-let.html>) — _thehackernews.com_
17. [Critical RCE Vulnerability in Apache HTTP Server: Everything You Need To Know](<https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability>) — _wiz.io_
18. [wfx-loot campaign pushes CI secret stealer to tens of thousands of repositories](<https://www.aikido.dev/blog/compromised-github-accounts-push-ci-secret-stealer-to-tens-of-thousands-of-repositories>) — _aikido.dev_
19. [The global socket: how threat actors are weaponizing GSocket for stealthy C2](<https://www.microsoft.com/en-us/security/blog/2026/11/11/global-socket-how-threat-actors-weaponizing-gsocket-stealthy-c2/>) — _microsoft.com_
20. [Lessons from 59 Linux Kernel Bug Reports](<https://www.microsoft.com/en-us/security/blog/2026/11/11/lessons-from-59-linux-kernel-bug-reports/>) — _microsoft.com_
21. [Announcing Istio 1.32.0](<https://istio.io/latest/news/releases/1.32.x/announcing-1.32/>) — _istio.io_
22. [Open Cluster Management (OCM) becomes a CNCF Incubating Project](<https://www.cncf.io/blog/2026/11/10/open-cluster-management-ocm-becomes-a-cncf-incubating-project/>) — _cncf.io_
23. [Critical Red Hat Quay Vulnerability Could Expose Private Container Images](<https://www.securityweek.com/critical-red-hat-quay-vulnerability-could-expose-private-container-images/>) — _securityweek.com_
24. [How we migrate TBs from Heroku without logical replication](<https://planetscale.com/blog/migrate-from-heroku-to-planetscale>) — _planetscale.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-11-13` | Friday | [Read →](news/en/2026-11-13.md) |
| `2026-11-12` | Thursday | [Read →](news/en/2026-11-12.md) |
| `2026-11-11` | Wednesday | [Read →](news/en/2026-11-11.md) |
| `2026-11-10` | Tuesday | [Read →](news/en/2026-11-10.md) |
| `2026-11-09` | Monday | [Read →](news/en/2026-11-09.md) |
| `2026-11-08` | 🗓️ Weekly recap | [Read →](news/en/2026-11-08.md) |
| `2026-11-07` | Saturday | [Read →](news/en/2026-11-07.md) |
| `2026-11-06` | Friday | [Read →](news/en/2026-11-06.md) |
| `2026-11-05` | Thursday | [Read →](news/en/2026-11-05.md) |
| `2026-11-04` | Wednesday | [Read →](news/en/2026-11-04.md) |
| `2026-11-03` | Tuesday | [Read →](news/en/2026-11-03.md) |
| `2026-11-02` | Monday | [Read →](news/en/2026-11-02.md) |
| `2026-11-01` | 🗓️ Weekly recap | [Read →](news/en/2026-11-01.md) |
| `2026-10-31` | Saturday | [Read →](news/en/2026-10-31.md) |

<sub>[Browse the full archive (151) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
