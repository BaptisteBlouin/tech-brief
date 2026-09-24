# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-09-23
<sub>mis à jour le 24 septembre 2026 à 01:03</sub>

The user wants a concise English summary of the day's notable news across AI/ML and the surrounding engineering stack, based on the provided items. The items are from a window ending 2026-09-23, and many are tagged . I need to group by theme, most important first, with 10-18 bullets total. Every statement must be sourced with [n] references. I must not reproduce the tag. I must ignore sponsored/advertising content and job postings. I must not invent facts. I must use markdown format with concise bullets.

Let me analyze the items and identify the most important themes:

1. **Major Model Releases & AI Advances** (high priority):
 - OpenAI GPT-6 Sol and Luna released <sup>[1](<https://openai.com/index/introducing-gpt-6-sol-and-luna/>)</sup>
 - Anthropic Claude Opus 5.5 released <sup>[2](<https://www.anthropic.com/claude-opus-5-5>), [3](<https://www.latent.space/p/ainews-claude-opus-55-the-new-default>)</sup>
 - Google Gemini 3.8 TTS models released <sup>[4](<https://simonwillison.net/2026/Sep/23/gemini-tts-playground/>), [5](<https://deepmind.google/blog/say-hello-to-gemini-38-text-to-speech/>)</sup>
 - Anthropic Claude discovers novel enzyme system with CRISPR-like repeats <sup>[6](<https://www.anthropic.com/news/claude-discovers-novel-enzyme-system>)</sup>
 - GPT-6 Astra can drive a car (DrivingBench) <sup>[7](<https://drivingbench.com/>)</sup>
 - GPT-6 Astra breaks Enigma message <sup>[8](<https://www.schneier.com/blog/archives/2026/09/gpt-6-astra-breaks-an-old-enigma-message.html>)</sup>

2. **AI Agent Tooling & Platforms**:
 - Anthropic launches Claude Marketplace for plugins, agents, services <sup>[9](<https://claude.com/blog/claude-marketplace>)</sup>
 - Cursor releases Rollouts and Security Reviewer bots <sup>[10](<https://cursor.com/blog/rollouts-and-security-reviewer>)</sup>
 - Cursor improves token efficiency for longer agent runs <sup>[11](<https://cursor.com/blog/improved-token-efficiency>)</sup>
 - Google ADK for Kotlin 1.0 released <sup>[12](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>)</sup>
 - Google Agent Anomaly Detection in private preview <sup>[13](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>)</sup>
 - Google zero-trust AI agents with intent judging <sup>[14](<https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/>)</sup>
 - NVIDIA Warp/MjWarp for robotics simulation <sup>[15](<https://huggingface.co/blog/nvidia/how-to-use-nvidia-warp-and-mjwarp>)</sup>
 - Intrinsic open sources robotics platform parts <sup>[16](<https://www.therobotreport.com/intrinsic-open-sources-key-parts-platform-easier-development/>)</sup>
 - Microsoft open-sources TauGrid for AI workload management on Kubernetes <sup>[17](<https://www.infoq.com/news/2026/09/microsoft-taugrid-open-source/>)</sup>
 - Google AX orchestrator for agent workloads <sup>[18](<https://github.com/google/ax>)</sup>

3. **MLOps / Evaluation / Benchmarks**:
 - SWE-Bench Pro V2 released with 642 tasks <sup>[19](<https://labs.scale.com/leaderboard/swe_bench_pro_public_v2>)</sup>
 - NVIDIA blog on evaluating AI agents <sup>[20](<https://developer.nvidia.com/blog/how-to-evaluate-ai-agents-from-tool-calls-to-task-completion/>)</sup>
 - Google blog on harness engineering for AI coding agents <sup>[21](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>)</sup>
 - Google RRSI for self-improving AI agents <sup>[22](<https://regularized-rsi.com/>)</sup>
 - OpenAI introduces MentalHealthBench <sup>[23](<https://openai.com/index/introducing-mentalhealthbench>)</sup>
 - OpenAI better GPT-6 prompt caching <sup>[24](<https://openai.com/index/better-prompt-caching-for-gpt-6/>)</sup>

4. **Developer Tools & GitHub Copilot Updates**:
 - GitHub Copilot code review: more ways to request/configure <sup>[25](<https://github.blog/changelog/2026-09-23-copilot-code-review-more-ways-to-request-and-configure-reviews>)</sup>
 - GitHub Copilot app: rendering huge PRs <sup>[26](<https://github.blog/engineering/user-experience/rendering-huge-pull-requests-in-the-github-copilot-app/>)</sup>
 - GitHub Copilot app: local sandboxing <sup>[27](<https://github.blog/changelog/2026-09-23-local-sandboxing-in-the-github-copilot-app>)</sup>
 - GitHub Copilot app: OpenTelemetry support <sup>[28](<https://github.blog/changelog/2026-09-22-opentelemetry-in-the-github-copilot-app>)</sup>
 - GitHub Copilot for JetBrains new features <sup>[29](<https://github.blog/changelog/2026-09-22-new-features-and-improvements-in-copilot-for-jetbrains>)</sup>
 - GitHub Copilot CLI: faster C++ code intelligence with whole codebase indexing <sup>[30](<https://github.blog/changelog/2026-09-22-faster-c-code-intelligence-with-whole-codebase-indexing>)</sup>
 - GitHub Actions: Node 20 no longer available, Node 24 required <sup>[31](<https://github.blog/changelog/2026-09-23-node-20-is-no-longer-available-in-github-actions>)</sup>

5. **Infrastructure / Cloud / DevOps**:
 - Pinecone BYOC generally available on AWS, GCP, Azure <sup>[32](<https://www.pinecone.io/blog/byoc-generally-available/>)</sup>
 - Cloudflare Python Workers GA <sup>[33](<https://blog.cloudflare.com/python-workers-ga/>)</sup>
 - Cloudflare Worker Previews <sup>[34](<https://blog.cloudflare.com/worker-previews/>)</sup>
 - Cloudflare Cache Rules Vary support <sup>[35](<https://www.cnbc.com/2026/09/22/altman-amodei-unga-ai-safety.html>)</sup>
 - Kubernetes v1.37: PVC last used time tracking beta <sup>[36](<https://kubernetes.io/blog/2026/09/21/kubernetes-v1-37-pvc-last-used-time/>)</sup>
 - Prometheus/OpenTelemetry interoperability survey results <sup>[37](<https://prometheus.io/blog/2026/09/21/otel-prometheus-interoperability-survey/>)</sup>
 - Canva Worker Backpressure for queue workers <sup>[38](<https://www.canva.dev/blog/engineering/worker-backpressure-part-1-how-we-taught-our-queue-workers-to-slow-down/>)</sup>
 - Platform Engineering: cutting CI pipeline time by 64% <sup>[39](<https://platformengineering.org/blog/cutting-ci-pipeline-time-by-64-what-actually-works-in-production>)</sup>

6. **Security / Supply Chain**:
 - Meta Muse AI assistant has serious 0-day <sup>[40](<https://arstechnica.com/security/2026/09/muse-metas-extraordinarily-privileged-ai-assistant-has-a-serious-0-day/>)</sup>
 - TanStack NPM supply chain attack exposes CrowdSec repos <sup>[41](<https://cyberpress.org/tanstack-npm-supply-chain-attack-exposes-170-private-crowdsec-github-repositories/>)</sup>
 - Brevo supply chain attack injects malware into 100k websites <sup>[42](<https://www.securityweek.com/brevo-supply-chain-attack-injects-malware-into-100000-websites/>)</sup>
 - ShinyHunters hacks Clop leak site <sup>[43](<https://www.bleepingcomputer.com/news/security/shinyhunters-hacks-clop-leak-site-threatens-to-extort-ransomware-gang/>)</sup>
 - ShinyHunters claims FBI hack via PeopleSoft zero-day <sup>[44](<https://www.bleepingcomputer.com/news/security/shinyhunters-claims-fbi-hack-data-theft-in-peoplesoft-zero-day-breach/>)</sup>
 - Talos: Closed Quorum autonomous AI C2 implant <sup>[45](<https://blog.talosintelligence.com/the-closed-quorum-inside-the-first-reported-autonomous-ai-c2-implant/>)</sup>
 - Gen Digital: infostealers targeting AI agents <sup>[46](<https://www.gendigital.com/blog/insights/research/infostealers-your-ai-agent>)</sup>
 - Critical Check Point Management flaw <sup>[47](<https://thehackernews.com/2026/09/critical-check-point-management-server.html>)</sup>
 - glibc ld.so TOCTOU vulnerability <sup>[48](<https://freenode.net/article/glibc-ld-so-toctou-lets-local-users-hijack-origin-on-setuid-binaries>)</sup>
 - Anthropic-linked CVEs pile up but low exploitation <sup>[49](<https://www.theregister.com/security/2026/09/21/anthropic-linked-cves-pile-up-attackers-mostly-shrug/5298018>)</sup>

7. **AI Policy / Governance / Society**:
 - OpenAI extends cyber access to Ukraine for civilian defense <sup>[50](<https://openai.com/index/openai-extends-cyber-access-to-ukraine-for-civilian-defense>)</sup>
 - Sam Altman remarks at UN Security Council <sup>[51](<https://openai.com/index/sam-altman-un-security-council-remarks>)</sup>
 - Altman and Amodei expected at UN Security Council meeting <sup>[35](<https://www.cnbc.com/2026/09/22/altman-amodei-unga-ai-safety.html>)</sup>
 - Technology Review: AI Hype Index - AI loves cheating <sup>[52](<https://www.technologyreview.com/2026/09/23/1144940/ai-hype-index-ai-loves-cheating/>)</sup>
 - Vinod Khosla's two moats for personal AI <sup>[53](<https://x.com/tbpn/status/2102177383306670393>)</sup>
 - Epoch AI: plunging price of thought <sup>[54](<https://epoch.ai/publications/the-plunging-price-of-thought>)</sup>
 - Google fined $463M for EU location data breach <sup>[55](<https://abcnews.com/Technology/wireStory/google-hit-463-million-fine-eu-location-data-136616044>)</sup>

8. **Other Notable**:
 - OpenAI Academy two years <sup>[56](<https://openai.com/index/two-years-of-openai-academy>)</sup>
 - Stripe's Knowledge AI Platform <sup>[57](<https://stripe.dev/blog/meet-stripes-knowledge-ai-platform>)</sup>
 - Perplexity training AI from real-world tool use <sup>[58](<https://www.perplexity.ai/hub/blog/learning-from-real-world-experience>)</sup>
 - LiteParse PDF parsing tool <sup>[59](<https://github.com/run-llama/liteparse>)</sup>
 - Treg unified API proxy <sup>[60](<https://github.com/superdesigndev/treg>)</sup>
 - Floci AWS emulator <sup>[61](<https://github.com/floci-io/floci>)</sup>
 - HelmGuard GRC software <sup>[62](<https://helmguard.ai/>)</sup>
 - Markdown in /src for agent-generated software <sup>[63](<https://htmx.org/essays/markdown-in-src/>)</sup>
 - Jev model analysis <sup>[64](<https://www.nobodywho.ai/posts/jev-in-25-lines/>), [65](<https://blog.senko.net/analyzing-jev-a-new-ai-model?pk_campaign=rss-feed>)</sup>
 - AMD Ryzen 50% faster in two years <sup>[66](<https://lemire.me/blog/2026/09/18/how-did-amd-ryzen-get-50-faster-in-two-years/>)</sup>
 - China's CXMT DRAM catches up to Samsung/Micron <sup>[67](<https://thenextweb.com/news/cxmt-dram-fifth-generation-mass-production-memory-shortage>)</sup>
 - Biological Computing Co. partners with AWS for neuron-derived AI video model <sup>[68](<https://thenextweb.com/news/biological-computing-co-aws-neuron-derived-ai-video-model>)</sup>
 - Apple developing new fitness tracker <sup>[69](<https://www.bloomberg.com/news/articles/2026-09-22/apple-is-developing-new-fitness-tracker-aimed-at-rivaling-whoop?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc5MDEzNjYxNCwiZXhwIjoxNzkwNzQxNDE0LCJhcnRpY2xlSWQiOiJUTEg1UVhLSzNOWTkwMCIsImJjb25uZWN0SWQiOiJBOEExRDhFQTI5OTc0OTRGQTQ1QUE2REJBMjAwNTM3MSJ9.AtCpENNe4dQed0J88CommJlysQU47Ou9UWvQ6jtGh7c>)</sup>
 - Xbox restructuring <sup>[70](<https://arstechnica.com/gaming/2026/09/shuffling-the-deck-chairs-xbox-continues-its-reset-with-dramatic-restructuring/>)</sup>
 - Various opinion pieces (bug blindness, defensive driving, etc.)

Now I need to select the most important 10-18 bullets, grouped by theme, with AI/ML first, then engineering stack. I'll prioritize items and major announcements.

Let me structure:

## Major Model Releases & Breakthroughs
- OpenAI releases GPT-6 Sol and Luna, faster and more affordable counterparts to GPT-6 Astra with advances in coding, factuality, computer use, and professional tasks <sup>[1](<https://openai.com/index/introducing-gpt-6-sol-and-luna/>)</sup>
- Anthropic launches Claude Opus 5.5, matching Claude Fable 5.1 on most tasks while costing 40% less than Opus 5, with strongest automated behavioral audit results <sup>[2](<https://www.anthropic.com/claude-opus-5-5>), [3](<https://www.latent.space/p/ainews-claude-opus-55-the-new-default>)</sup>
- Google debuts Gemini 3.8 Flash TTS and Flash-Lite TTS with 2,000+ voices and custom voice creation from 30-second samples <sup>[4](<https://simonwillison.net/2026/Sep/23/gemini-tts-playground/>), [5](<https://deepmind.google/blog/say-hello-to-gemini-38-text-to-speech/>)</sup>
- Anthropic's Claude discovers a novel enzyme system with CRISPR-like repeats, launching a new life sciences research group <sup>[6](<https://www.anthropic.com/news/claude-discovers-novel-enzyme-system>)</sup>
- GPT-6 Astra demonstrates real-world car driving on a fixed cone course via DrivingBench <sup>[7](<https://drivingbench.com/>)</sup>

## AI Agent Platforms & Tooling
- Anthropic launches Claude Marketplace with 2,000+ connectors/plugins, agents/products from partners like CrowdStrike/Cursor, and service partners <sup>[9](<https://claude.com/blog/claude-marketplace>)</sup>
- Cursor releases Rollouts (tracks PR-to-production, flags regressions) and Security Reviewer (finds/fixes security issues) bots <sup>[10](<https://cursor.com/blog/rollouts-and-security-reviewer>)</sup>
- Google releases ADK for Kotlin 1.0 with full feature parity, KMP-based, zero-reflection function calling, and Android-first extensions <sup>[12](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>)</sup>
- Google introduces Agent Anomaly Detection in private preview on Gemini Enterprise Agent Platform, analyzing OpenTelemetry traces for behavioral risks <sup>[13](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>)</sup>
- NVIDIA Warp and MjWarp enable GPU-accelerated robotics simulation with up to 2,048 parallel MuJoCo environments <sup>[15](<https://huggingface.co/blog/nvidia/how-to-use-nvidia-warp-and-mjwarp>)</sup>
- Microsoft open-sources TauGrid, a Kubernetes platform unifying scheduling, queuing, and monitoring for GPU AI workloads via Helm <sup>[17](<https://www.infoq.com/news/2026/09/microsoft-taugrid-open-source/>)</sup>

## MLOps, Evaluation & Benchmarks
- SWE-Bench Pro V2 releases 642 tasks from 11 repos, with top models scoring ~23% on public set, highlighting increased realism <sup>[19](<https://labs.scale.com/leaderboard/swe_bench_pro_public_v2>)</sup>
- NVIDIA details AI agent evaluation: step-level scoring, end-to-end verification, and production metrics including consistency, steps, and cost <sup>[20](<https://developer.nvidia.com/blog/how-to-evaluate-ai-agents-from-tool-calls-to-task-completion/>)</sup>
- Google advocates behavioral evaluations (fast, local unit-style tests) alongside macro benchmarks for AI coding agents <sup>[21](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>)</sup>
- Google publishes RRSI method to regularize recursive self-improvement of AI agents, improving out-of-distribution performance <sup>[22](<https://regularized-rsi.com/>)</sup>
- OpenAI improves GPT-6 prompt caching with higher default hit rates, 30-minute shared prefix discounts, and monitoring tools <sup>[24](<https://openai.com/index/better-prompt-caching-for-gpt-6/>)</sup>

## Developer Tools & GitHub Copilot Enhancements
- GitHub Copilot code review gains personal settings page, enterprise-wide defaults, and expanded plan availability <sup>[25](<https://github.blog/changelog/2026-09-23-copilot-code-review-more-ways-to-request-and-configure-reviews>)</sup>
- GitHub Copilot app adds local sandboxing (filesystem, network, credential controls per project) [3

## Sources

1. [GPT-6 Sol and Luna](<https://openai.com/index/introducing-gpt-6-sol-and-luna/>) — _openai.com_
2. [Claude Opus 5.5](<https://www.anthropic.com/claude-opus-5-5>) — _anthropic.com_
3. [\[AINews\] Claude Opus 5.5, the new default model for AINews — and everybody cuts prices 40-50%](<https://www.latent.space/p/ainews-claude-opus-55-the-new-default>) — _latent.space_
4. [Gemini 3.8 TTS Playground](<https://simonwillison.net/2026/Sep/23/gemini-tts-playground/>) — _simonwillison.net_
5. [Gemini 3.8 text-to-speech says hello](<https://deepmind.google/blog/say-hello-to-gemini-38-text-to-speech/>) — _deepmind.google_
6. [Claude discovers a novel enzyme system with CRISPR-like repeats](<https://www.anthropic.com/news/claude-discovers-novel-enzyme-system>) — _anthropic news_
7. [GPT-6 Astra has gained the ability to drive a car](<https://drivingbench.com/>) — _hnrss.org_
8. [GPT-6 Astra Breaks an Old Enigma Message](<https://www.schneier.com/blog/archives/2026/09/gpt-6-astra-breaks-an-old-enigma-message.html>) — _schneier.com_
9. [Claude Marketplace: one place to discover plugins, agents, and services from our partners](<https://claude.com/blog/claude-marketplace>) — _claude_
10. [Bots for the last mile: Rollouts, Security Review](<https://cursor.com/blog/rollouts-and-security-reviewer>) — _cursor_
11. [Improved token efficiency for longer agent runs](<https://cursor.com/blog/improved-token-efficiency>) — _cursor_
12. [Announcing ADK for Kotlin 1.0: Building Production-Ready AI Agents in Kotlin, Android, and Beyond](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>) — _google ai_
13. [Agent Anomaly Detection, now in Private Preview on the Gemini Enterprise Agent Platform](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>) — _google ai_
14. [Build zero-trust AI agents that judge intent, not just syntax](<https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/>) — _google ai_
15. [How to Use NVIDIA Warp and MjWarp to Accelerate Robotics Simulation and Learning Workflows](<https://huggingface.co/blog/nvidia/how-to-use-nvidia-warp-and-mjwarp>) — _huggingface.co_
16. [Intrinsic open sources key parts of its platform for easier development](<https://www.therobotreport.com/intrinsic-open-sources-key-parts-platform-easier-development/>) — _therobotreport.com_
17. [Microsoft Open-Sources TauGrid to Simplify AI Workload Management on Kubernetes](<https://www.infoq.com/news/2026/09/microsoft-taugrid-open-source/>) — _infoq.com_
18. [Ax](<https://github.com/google/ax>) — _github.com_
19. [SWE-Bench Pro V2](<https://labs.scale.com/leaderboard/swe_bench_pro_public_v2>) — _labs.scale.com_
20. [How to Evaluate AI Agents: From Tool Calls to Task Completion](<https://developer.nvidia.com/blog/how-to-evaluate-ai-agents-from-tool-calls-to-task-completion/>) — _developer.nvidia.com_
21. [The Anatomy of Harness Engineering: How to Evaluate, Iterate, and Guard AI Coding Agents](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>) — _google ai_
22. [Google Publishes RRSI for Self-Improving AI Agents](<https://regularized-rsi.com/>) — _regularized-rsi.com_
23. [Introducing MentalHealthBench](<https://openai.com/index/introducing-mentalhealthbench>) — _openai.com_
24. [Better GPT-6 Prompt Caching](<https://openai.com/index/better-prompt-caching-for-gpt-6/>) — _openai.com_
25. [More ways to request and configure Copilot code reviews](<https://github.blog/changelog/2026-09-23-copilot-code-review-more-ways-to-request-and-configure-reviews>) — _github.blog_
26. [Rendering huge pull requests in the GitHub Copilot app](<https://github.blog/engineering/user-experience/rendering-huge-pull-requests-in-the-github-copilot-app/>) — _github.blog_
27. [Local sandboxing in the GitHub Copilot app](<https://github.blog/changelog/2026-09-23-local-sandboxing-in-the-github-copilot-app>) — _github.blog_
28. [OpenTelemetry in the GitHub Copilot app](<https://github.blog/changelog/2026-09-22-opentelemetry-in-the-github-copilot-app>) — _github.blog_
29. [New features and improvements in Copilot for JetBrains](<https://github.blog/changelog/2026-09-22-new-features-and-improvements-in-copilot-for-jetbrains>) — _github.blog_
30. [Faster C++ code intelligence with whole codebase indexing](<https://github.blog/changelog/2026-09-22-faster-c-code-intelligence-with-whole-codebase-indexing>) — _github.blog_
31. [Node 20 is no longer available in GitHub Actions](<https://github.blog/changelog/2026-09-23-node-20-is-no-longer-available-in-github-actions>) — _github.blog_
32. [Pinecone BYOC: Trusted AI Knowledge in the Customer Cloud](<https://www.pinecone.io/blog/byoc-generally-available/>) — _pinecone_
33. [Python Workers are now generally available](<https://blog.cloudflare.com/python-workers-ga/>) — _blog.cloudflare.com_
34. [Introducing Worker Previews](<https://blog.cloudflare.com/worker-previews/>) — _blog.cloudflare.com_
35. [Altman and Amodei expected to join UN Security Council meeting about AI](<https://www.cnbc.com/2026/09/22/altman-amodei-unga-ai-safety.html>) — _cnbc.com_
36. [Kubernetes v1.37: Tracking When a PersistentVolumeClaim Was Last Used (Beta)](<https://kubernetes.io/blog/2026/09/21/kubernetes-v1-37-pvc-last-used-time/>) — _kubernetes.io_
37. [Prometheus and OpenTelemetry interoperability in 2026 - Survey results](<https://prometheus.io/blog/2026/09/21/otel-prometheus-interoperability-survey/>) — _prometheus.io_
38. [Worker Backpressure (Part 1): teaching queue workers to slow down](<https://www.canva.dev/blog/engineering/worker-backpressure-part-1-how-we-taught-our-queue-workers-to-slow-down/>) — _canva.dev_
39. [Cutting CI pipeline time by 64%: What actually works in production](<https://platformengineering.org/blog/cutting-ci-pipeline-time-by-64-what-actually-works-in-production>) — _platformengineering.org_
40. [Muse, Meta's extraordinarily privileged AI assistant, has a serious 0-day](<https://arstechnica.com/security/2026/09/muse-metas-extraordinarily-privileged-ai-assistant-has-a-serious-0-day/>) — _arstechnica.com_
41. [TanStack NPM Supply Chain Attack Exposes 170 Private CrowdSec GitHub Repositories](<https://cyberpress.org/tanstack-npm-supply-chain-attack-exposes-170-private-crowdsec-github-repositories/>) — _cyberpress.org_
42. [Brevo Supply Chain Attack Injects Malware Into 100,000 Websites](<https://www.securityweek.com/brevo-supply-chain-attack-injects-malware-into-100000-websites/>) — _securityweek.com_
43. [ShinyHunters Hacks Clop Leak Site, Threatens to Extort Ransomware Gang](<https://www.bleepingcomputer.com/news/security/shinyhunters-hacks-clop-leak-site-threatens-to-extort-ransomware-gang/>) — _bleepingcomputer.com_
44. [ShinyHunters Claims FBI Hack, Data Theft in PeopleSoft Zero-Day Breach](<https://www.bleepingcomputer.com/news/security/shinyhunters-claims-fbi-hack-data-theft-in-peoplesoft-zero-day-breach/>) — _bleepingcomputer.com_
45. [The Closed Quorum: Inside the first reported autonomous AI C2 implant](<https://blog.talosintelligence.com/the-closed-quorum-inside-the-first-reported-autonomous-ai-c2-implant/>) — _blog.talosintelligence.com_
46. [Infostealers Have Found a New Target: Your AI Agent](<https://www.gendigital.com/blog/insights/research/infostealers-your-ai-agent>) — _gendigital.com_
47. [Critical Check Point Management Flaw Lets Unauthenticated Attackers Run Code as Root](<https://thehackernews.com/2026/09/critical-check-point-management-server.html>) — _thehackernews.com_
48. [glibc ld.so TOCTOU lets local users hijack $ORIGIN on setuid binaries](<https://freenode.net/article/glibc-ld-so-toctou-lets-local-users-hijack-origin-on-setuid-binaries>) — _freenode.net_
49. [Anthropic-linked CVEs pile up, attackers mostly shrug](<https://www.theregister.com/security/2026/09/21/anthropic-linked-cves-pile-up-attackers-mostly-shrug/5298018>) — _theregister.com_
50. [OpenAI extends cyber access to Ukraine for civilian defense](<https://openai.com/index/openai-extends-cyber-access-to-ukraine-for-civilian-defense>) — _openai.com_
51. [Sam Altman’s remarks at the United Nations Security Council](<https://openai.com/index/sam-altman-un-security-council-remarks>) — _openai.com_
52. [The AI Hype Index: AI loves cheating](<https://www.technologyreview.com/2026/09/23/1144940/ai-hype-index-ai-loves-cheating/>) — _technologyreview.com_
53. [Vinod Khosla's Two Moats for Personal AI](<https://x.com/tbpn/status/2102177383306670393>) — _x.com_
54. [The plunging price of thought](<https://epoch.ai/publications/the-plunging-price-of-thought>) — _epoch.ai_
55. [Google hit with $463 million fine for EU location data rule breach](<https://abcnews.com/Technology/wireStory/google-hit-463-million-fine-eu-location-data-136616044>) — _abcnews.com_
56. [Two years of OpenAI Academy](<https://openai.com/index/two-years-of-openai-academy>) — _openai.com_
57. [Stripe's Knowledge AI Platform](<https://stripe.dev/blog/meet-stripes-knowledge-ai-platform>) — _hnrss.org_
58. [Training AI From Real-World Tool Use](<https://www.perplexity.ai/hub/blog/learning-from-real-world-experience>) — _perplexity.ai_
59. [LiteParse](<https://github.com/run-llama/liteparse>) — _github.com_
60. [Treg](<https://github.com/superdesigndev/treg>) — _github.com_
61. [Floci](<https://github.com/floci-io/floci>) — _github.com_
62. [HelmGuard](<https://helmguard.ai/>) — _helmguard.ai_
63. [Markdown in /src](<https://htmx.org/essays/markdown-in-src/>) — _htmx.org_
64. [Jev in 25 Lines of Python](<https://www.nobodywho.ai/posts/jev-in-25-lines/>) — _hnrss.org_
65. [Analyzing Jev, a new AI model](<https://blog.senko.net/analyzing-jev-a-new-ai-model?pk_campaign=rss-feed>) — _blog.senko.net_
66. [How did AMD Ryzen get 50% faster in two years?](<https://lemire.me/blog/2026/09/18/how-did-amd-ryzen-get-50-faster-in-two-years/>) — _lemire.me_
67. [China's biggest memory maker says it has caught up with Samsung and Micron](<https://thenextweb.com/news/cxmt-dram-fifth-generation-mass-production-memory-shortage>) — _thenextweb.com_
68. [The Biological Computing Co. partners with AWS to sell its neuron-derived AI video model](<https://thenextweb.com/news/biological-computing-co-aws-neuron-derived-ai-video-model>) — _thenextweb.com_
69. [Apple Developing New Fitness Tracker Aimed at Rivaling Whoop](<https://www.bloomberg.com/news/articles/2026-09-22/apple-is-developing-new-fitness-tracker-aimed-at-rivaling-whoop?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc5MDEzNjYxNCwiZXhwIjoxNzkwNzQxNDE0LCJhcnRpY2xlSWQiOiJUTEg1UVhLSzNOWTkwMCIsImJjb25uZWN0SWQiOiJBOEExRDhFQTI5OTc0OTRGQTQ1QUE2REJBMjAwNTM3MSJ9.AtCpENNe4dQed0J88CommJlysQU47Ou9UWvQ6jtGh7c>) — _bloomberg.com_
70. [Shuffling the deck chairs: Xbox continues its “reset” with dramatic restructuring](<https://arstechnica.com/gaming/2026/09/shuffling-the-deck-chairs-xbox-continues-its-reset-with-dramatic-restructuring/>) — _arstechnica.com_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-09-23` | Mercredi | [Lire →](news/fr/2026-09-23.md) |
| `2026-09-22` | Mardi | [Lire →](news/fr/2026-09-22.md) |
| `2026-09-21` | Lundi | [Lire →](news/fr/2026-09-21.md) |
| `2026-09-20` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-09-20.md) |
| `2026-09-19` | Samedi | [Lire →](news/fr/2026-09-19.md) |
| `2026-09-18` | Vendredi | [Lire →](news/fr/2026-09-18.md) |
| `2026-09-17` | Jeudi | [Lire →](news/fr/2026-09-17.md) |
| `2026-09-16` | Mercredi | [Lire →](news/fr/2026-09-16.md) |
| `2026-09-15` | Mardi | [Lire →](news/fr/2026-09-15.md) |
| `2026-09-14` | Lundi | [Lire →](news/fr/2026-09-14.md) |
| `2026-09-13` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-09-13.md) |
| `2026-09-12` | Samedi | [Lire →](news/fr/2026-09-12.md) |
| `2026-09-11` | Vendredi | [Lire →](news/fr/2026-09-11.md) |
| `2026-09-10` | Jeudi | [Lire →](news/fr/2026-09-10.md) |

<sub>[Parcourir toute l’archive (101) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
