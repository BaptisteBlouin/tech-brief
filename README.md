# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-11-27
<sub>updated 28 November 2026 at 00:00</sub>

## AI agents and go-to-market tooling

- Clay's usage is already split close to 50/50 between its own agent and outside harnesses, and the company aims for similar results whichever agent is used <sup>[1](<https://latent.space/p/how-clay-builds-gtm-agents-jeff-barg-head-of-ai/>)</sup>.
- Clay's head of AI says models have been acing its lead-qualification evals for about a year, and estimates that screening its 40 million companies against an ideal customer profile with a classifier would cost roughly $1,500 <sup>[1](<https://latent.space/p/how-clay-builds-gtm-agents-jeff-barg-head-of-ai/>)</sup>.
- Multiagent coding is expected to have a seismic impact on software development and knowledge work, though labs have not yet shipped good multiagent coding products, and autonomous agent swarms interacting with infrastructure carry real dangers <sup>[2](<https://www.kalzumeus.com/2026/11/25/multiagent-coding-is-the-future/>)</sup>.
- A main Claude Code session plans work and delegates implementation to agents in separate Git worktrees, with the developer approving plans and a manager checking commits, tests and Release builds; this produced 37 TestFlight builds in five days, up from nine in the previous five <sup>[3](<https://jurajb.dev/main-session-manager/>)</sup>.
- A production agent architecture of six layers (event triggers, workflow state, tools, trusted context, evaluation and runtime controls) recommends checkpointing runs in Postgres, putting deterministic logic behind typed tools, requiring human approval for high-impact actions, and using a shared model gateway for spend caps and traces <sup>[4](<https://threadreaderapp.com/thread/2125913331915784509.html>)</sup>.
- CLI Agent Orchestrator from AWS Labs runs Claude Code, Kiro and Codex in separate tmux sessions, with a supervisor agent delegating work to them in parallel or in sequence <sup>[5](<https://github.com/awslabs/cli-agent-orchestrator>)</sup>.
- Teleport's delegated identity approach has agents start without access, request only what a task needs, and leave an audit trail tied to the person who assigned the work <sup>[6](<https://thenewstack.io/teleport-agent-delegated-identity/>)</sup>.

## AI adoption and strategy

- A German podcast guest argues that AI makes individuals more productive, but that organisations must rebuild processes around outcomes; he warns that the gap between active AI users and those waiting will widen within two years <sup>[7](<https://ai-first.ai/podcast/zehn-harte-ki-wahrheiten-was-unternehmen-und-gesellschaft-erwartet-mit-tristan-post>)</sup>.
- A CloudBees survey of 450 European IT leaders found that 69% expect boards to demand proof of AI ROI by 2027, yet only 43% could show it within a month <sup>[8](<https://www.cloudbees.com/blog/european-it-leaders-ai-coding-roi>)</sup>.
- OpenRouter reports that Jevons Paradox has defined inference so far, with usage growth pushing total spend up as token prices fall, but spend growth has slowed significantly in recent months <sup>[9](<https://openrouter.ai/blog/insights/is-jevons-paradox-holding/>)</sup>.

## AI models and research

- OpenAI's Astra 6.2 and Sol 6.2 updates drew criticism for reduced performance, with both showing significant drops in reasoning and output tokens, which suggests a cost-efficiency shift <sup>[10](<https://micjm.com/blog/openai-is-in-cost-control-mode/>)</sup>.
- Nebius' LayerStream trains MoE models by streaming each layer's state through the GPU only when that layer runs; on 16 H200 GPUs it cut a 25.8M-token pass from 22.4 to 7.1 minutes, with 3.15x the throughput of a tuned Megatron-LM trainer and 68% lower GPU cost per token <sup>[11](<https://nebius.com/blog/posts/layerstream-moe-fine-tuning>)</sup>.
- Compression experiments show deeper layers can be compressed more aggressively than early ones, suggesting models do not use their architectures as fully as hoped, and looped transformers add computational depth without duplicating backbone parameters <sup>[12](<https://shiweiliuiiiiiii.github.io/blog/2026/from-model-compression-to-looped-transformers/>)</sup>.
- Research on the Platonic Representation Hypothesis shows LLMs can use each other's representations through a rotation and one global scale fit in closed form, without gradient descent <sup>[13](<https://hazyresearch.stanford.edu/blog/2026-11-25-platos-key>)</sup>.
- Trainium3 is used to generate video with LTX-2.5, a 19B text-to-video model <sup>[14](<https://huggingface.co/blog/video-trainium3>)</sup>.

## Security and supply chain

- A security incident on hex.pm let an attacker run commands on six web servers through an Erlang-term deserialisation gadget chain (CVE-2026-129514); Hex found no tampered packages but cannot rule out reads of user data, so users should change passwords and reset 2FA, and Elixir teams should upgrade Ash to 3.38.0 <sup>[15](<https://hex.pm/blog/security-incident-on-hexpm>)</sup>.
- North Korea-linked PolinRider force-pushed malicious loaders into at least 7,609 GitHub repositories using stolen tokens, hiding code in build configs, conftest.py and VS Code auto-run tasks; developers should block two listed C2 IPs, check those files and rotate tokens <sup>[16](<https://thehackernews.com/2026/11/north-korea-linked-polinrider-poisons.html>)</sup>.
- Samsung Knox DualDAR flaws let a zero-permission app root Galaxy S23 and bootloader-locked S26 devices (CVE-2026-21102), fixed in the August and September 2026 updates; fleet admins should require at least the September patch level <sup>[17](<https://calif.io/research/oempocalypse-part-2>)</sup>.
- Intruder claimed 28 dangling AWS Elastic IPs, including five US Treasury subdomains, for about $3 per takeover, and AWS said it has no plans to change its approach <sup>[18](<https://www.intruder.io/research/taking-over-us-treasury-subdomains-for-3-each>)</sup>.
- An AI coding agent found a financial firm's planted access key in under six minutes, following a decoy API document to a fake environment, showing that blocklists would miss such activity <sup>[19](<https://www.theregister.com/security/2026/11/24/an-ai-coding-agent-a-browser-and-a-mac-tool-found-a-financial-firms-access-key-in-under-6-minutes/5311922>)</sup>.
- Remus infostealer uses a fake Google Sheets Chrome extension to pull Gmail messages, without exploiting a zero-day as its developer claimed <sup>[20](<https://www.bleepingcomputer.com/news/security/remus-malware-steals-gmail-messages-via-fake-google-sheets-extension/>)</sup>.
- Chainguard moved thousands of daily builds off GitHub Actions to its own microVM infrastructure, and its CVE-remediation agents run at 97 to 98% weekly success <sup>[21](<https://www.chainguard.dev/unchained/dogfooding-checks-and-workspaces-hard-lessons-from-3-000-repos>)</sup>.

## Developer tooling and engineering practice

- Octopus Deploy redesigned its interface with instance-wide search and a searchable REST API reference of about 1,800 endpoints, rolling out to Octopus Cloud now and to self-hosted servers in 2027.0 on December 2 <sup>[22](<https://octopus.com/blog/the-best-octopus-yet>)</sup>.
- Terraform made HCL-based policy for Stacks generally available, with multi-deployment group orchestration, agent-ready CLI commands with JSON output, and SCIM 2.0 provisioning for HCP Terraform Standard and Premium <sup>[23](<https://www.hashicorp.com/blog/terraform-introduces-tfpolicy-support-for-stacks-scim-support-and-more>)</sup>.
- Vite 8.4 adds an opt-in dev server allowlist limiting file serving to project entry points, detects duplicate dev servers and supports package subpath imports in CSS URLs <sup>[24](<https://vite.dev/blog/announcing-vite8-4>)</sup>.
- Rust 1.100.1 fixes a regression where some types with valid Iterator impls were not recognised as implementing Iterator <sup>[25](<https://blog.rust-lang.org/2026/11/27/Rust-1.100.1/>)</sup>.
- Harness shows that identical exit status 1 CI failures can have different root causes (a full disk, an out-of-memory kill, a timed-out database wait), so teams should read stage logs rather than banners <sup>[26](<https://www.harness.io/blog/your-ci-pipeline-just-failed-with-system-failure>)</sup>.
- Honeycomb moved its query processing from AWS Lambda Functions to Lambda Managed Instances to address scaling limits and rising costs <sup>[27](<https://www.honeycomb.io/blog/outgrowing-lambda-functions-not-lambda>)</sup>.
- SemSec is an open-source Semgrep ruleset of 262 rules, including 35 targeting common mistakes in vibe-coded apps such as disabled Supabase RLS and unverified Stripe webhooks <sup>[28](<https://github.com/RobustaStudio/semsec>)</sup>.
- Docker Compose Linter checks Compose files for configuration errors and style violations, with automatic fixes and CI integration <sup>[29](<https://github.com/zavoloklom/docker-compose-linter>)</sup>.
- Dedicated Kubernetes clusters per workload are justified by blast radius, network reach and regulatory boundaries, though duplicated components and upgrades add cost <sup>[30](<https://cloudnativenow.com/contributed-content/dedicated-clusters-per-workload-when-shared-stops-paying/>)</sup>.

## Sources

1. [How Clay Builds GTM Agents — Jeff Barg, Head of AI](<https://latent.space/p/how-clay-builds-gtm-agents-jeff-barg-head-of-ai/>) — _latent.space_
2. [Multiagent coding is the future](<https://www.kalzumeus.com/2026/11/25/multiagent-coding-is-the-future/>) — _kalzumeus.com_
3. [My main Claude Code session writes almost no code](<https://jurajb.dev/main-session-manager/>) — _jurajb.dev_
4. [There are six layers to a working agentic system](<https://threadreaderapp.com/thread/2125913331915784509.html>) — _threadreaderapp.com_
5. [CLI Agent Orchestrator](<https://github.com/awslabs/cli-agent-orchestrator>) — _github.com_
6. [Please don't give the robot my SSH keys: How to keep AI out of trouble](<https://thenewstack.io/teleport-agent-delegated-identity/>) — _thenewstack.io_
7. [Zehn harte KI-Wahrheiten: Was Unternehmen und Gesellschaft erwartet – mit Tristan Post](<https://ai-first.ai/podcast/zehn-harte-ki-wahrheiten-was-unternehmen-und-gesellschaft-erwartet-mit-tristan-post>) — _ai first podcast_
8. [Can European IT Leaders Prove AI ROI to the Board?](<https://www.cloudbees.com/blog/european-it-leaders-ai-coding-roi>) — _cloudbees.com_
9. [Is Jevons Paradox holding?](<https://openrouter.ai/blog/insights/is-jevons-paradox-holding/>) — _openrouter.ai_
10. [OpenAI may be in cost control mode](<https://micjm.com/blog/openai-is-in-cost-control-mode/>) — _micjm.com_
11. [LayerStream: faster MoE fine-tuning on fewer or cheaper GPUs](<https://nebius.com/blog/posts/layerstream-moe-fine-tuning>) — _nebius.com_
12. [From Model Compression to Looped Transformers](<https://shiweiliuiiiiiii.github.io/blog/2026/from-model-compression-to-looped-transformers/>) — _shiweiliuiiiiiii.github.io_
13. [Plato's Key](<https://hazyresearch.stanford.edu/blog/2026-11-25-platos-key>) — _hazyresearch.stanford.edu_
14. [Taking Trainium3 to the Track: Generating Videos with LTX-2.5](<https://huggingface.co/blog/video-trainium3>) — _huggingface.co_
15. [Security incident on hex.pm](<https://hex.pm/blog/security-incident-on-hexpm>) — _hex.pm_
16. [North Korea-Linked PolinRider Poisons Over 7,600 GitHub Repositories to Spread Malware](<https://thehackernews.com/2026/11/north-korea-linked-polinrider-poisons.html>) — _thehackernews.com_
17. [OEMpocalypse Part 2: Rooting Samsung Flagships via Knox DualDAR](<https://calif.io/research/oempocalypse-part-2>) — _calif.io_
18. [Taking over US Treasury subdomains for $3 each](<https://www.intruder.io/research/taking-over-us-treasury-subdomains-for-3-each>) — _intruder.io_
19. [An AI coding agent, a browser, and a Mac tool found a financial firm's access key in under 6 minutes](<https://www.theregister.com/security/2026/11/24/an-ai-coding-agent-a-browser-and-a-mac-tool-found-a-financial-firms-access-key-in-under-6-minutes/5311922>) — _theregister.com_
20. [Remus Malware Steals Gmail Messages via Fake Google Sheets Extension](<https://www.bleepingcomputer.com/news/security/remus-malware-steals-gmail-messages-via-fake-google-sheets-extension/>) — _bleepingcomputer.com_
21. [Dogfooding Checks and Workspaces: Hard lessons from 3,000 repos](<https://www.chainguard.dev/unchained/dogfooding-checks-and-workspaces-hard-lessons-from-3-000-repos>) — _chainguard.dev_
22. [The best Octopus yet](<https://octopus.com/blog/the-best-octopus-yet>) — _octopus.com_
23. [Terraform introduces tfpolicy support for Stacks, SCIM support, and more](<https://www.hashicorp.com/blog/terraform-introduces-tfpolicy-support-for-stacks-scim-support-and-more>) — _hashicorp.com_
24. [Vite 8.4 is out!](<https://vite.dev/blog/announcing-vite8-4>) — _vite.dev_
25. [Announcing Rust 1.100.1](<https://blog.rust-lang.org/2026/11/27/Rust-1.100.1/>) — _blog.rust-lang.org_
26. [Why Your CI Pipeline Failed: Decoding Exit Status 1 & OOM](<https://www.harness.io/blog/your-ci-pipeline-just-failed-with-system-failure>) — _harness.io_
27. [Outgrowing Lambda Functions, Not Lambda](<https://www.honeycomb.io/blog/outgrowing-lambda-functions-not-lambda>) — _honeycomb.io_
28. [SemSec](<https://github.com/RobustaStudio/semsec>) — _github.com_
29. [Docker Compose Linter](<https://github.com/zavoloklom/docker-compose-linter>) — _github.com_
30. [Dedicated Clusters per Workload: When Shared Stops Paying](<https://cloudnativenow.com/contributed-content/dedicated-clusters-per-workload-when-shared-stops-paying/>) — _cloudnativenow.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-11-27` | Friday | [Read →](news/en/2026-11-27.md) |
| `2026-11-26` | Thursday | [Read →](news/en/2026-11-26.md) |
| `2026-11-25` | Wednesday | [Read →](news/en/2026-11-25.md) |
| `2026-11-24` | Tuesday | [Read →](news/en/2026-11-24.md) |
| `2026-11-23` | Monday | [Read →](news/en/2026-11-23.md) |
| `2026-11-22` | 🗓️ Weekly recap | [Read →](news/en/2026-11-22.md) |
| `2026-11-21` | Saturday | [Read →](news/en/2026-11-21.md) |
| `2026-11-20` | Friday | [Read →](news/en/2026-11-20.md) |
| `2026-11-19` | Thursday | [Read →](news/en/2026-11-19.md) |
| `2026-11-18` | Wednesday | [Read →](news/en/2026-11-18.md) |
| `2026-11-17` | Tuesday | [Read →](news/en/2026-11-17.md) |
| `2026-11-16` | Monday | [Read →](news/en/2026-11-16.md) |
| `2026-11-15` | 🗓️ Weekly recap | [Read →](news/en/2026-11-15.md) |
| `2026-11-14` | Saturday | [Read →](news/en/2026-11-14.md) |

<sub>[Browse the full archive (165) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
