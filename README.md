# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · archives kept 14 days._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-06-26
<sub>updated 27 June 2026 at 01:01</sub>

## AI Models and Capabilities
- OpenAI previewed the GPT‑5.6 series: Sol (flagship), Terra (2× cheaper than GPT‑5.5 with competitive performance), and Luna (lowest‑cost), with per‑1M‑token pricing at $5/$30 (Sol), $2.50/$15 (Terra), and $1/$6 (Luna) <sup>[1](<https://openai.com/index/previewing-gpt-5-6-sol>), [2](<https://simonwillison.net/2026/Jun/26/openai/#atom-everything>)</sup>.
- US government requested a staggered release of GPT‑5.6, initially to ~20 trusted partners via Amazon Bedrock, signaling regulatory control over frontier models <sup>[3](<https://www.washingtonpost.com/technology/2026/06/26/openai-says-us-government-will-vet-users-its-latest-ai-model/>), [4](<https://www.bloomberg.com/news/articles/2026-06-25/trump-administration-asks-openai-to-stagger-release-of-ai-model?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4MjQ1NDI5NywiZXhwIjoxNzgzMDU5MDk3LCJhcnRpY2xlSWQiOiJUSDdBNkFUOTZPU1AwMCIsImJjb25uZWN0SWQiOiJFQTExNDNDNTM4NEE0RUY5QTg5RjJEN0IxMTg2MzcwOSJ9.w0NYcPW16doskolzehTQfhLBdghuG8gJed1aypmfrjo>), [5](<https://techcrunch.com/2026/06/25/the-white-house-is-asking-openai-to-slow-roll-the-release-of-its-new-model-over-safety-concerns/>)</sup>.
- Liquid AI released LFM 2.5 (230M parameters), a non‑transformer model using state‑space/liquid neural networks that matches transformer models 3× its size on edge reasoning/sequence tasks <sup>[6](<https://www.liquid.ai/blog/lfm2-5-230m>)</sup>.
- DeepReinforce released Ornith‑1.0, an open‑source coding model family built on Gemma 4/Qwen 3.5, state‑of‑the‑art for comparable sizes <sup>[7](<https://www.testingcatalog.com/deepreinforce-releases-ornith-1-0-open-source-coding-models/>)</sup>.

## AI Adoption, Tooling and Agents
- OpenAI reports explosive internal Codex adoption: median output tokens grew 56× (Research), 32× (Support), 27× (Engineering), 13× (Legal) since Nov 2025 <sup>[8](<https://www.latent.space/p/ainews-openai-reports-median-internal>)</sup>.
- A Deloitte AI partner uses Anthropic/OpenAI/Google daily for newsletters, market monitoring, and podcast workflows <sup>[9](<https://ai-first.ai/podcast/unsere-top-3-use-cases>)</sup>.
- GitHub Copilot adds MAI‑Code‑1‑Flash (Microsoft’s in‑house coding model) for Business/Enterprise with low‑latency, usage‑based billing; admins must enable the policy <sup>[10](<https://github.blog/changelog/2026-06-26-mai-code-1-flash-for-copilot-business-and-copilot-enterprise>)</sup>.
- Vercel AI SDK 7 adds zero‑overhead streaming and tool orchestration with unified telemetry for token usage, model choices, and tool latency <sup>[11](<https://vercel.com/blog/ai-sdk-7>)</sup>.
- Cloudflare brings agent harnesses (e.g., Flue) to its platform with durable execution, sandboxed code, and persistent state primitives <sup>[12](<https://blog.cloudflare.com/agents-platform-flue-sdk/>)</sup>.
- Orca (open‑source) runs multiple coding agents (Claude Code, Codex, OpenCode) side‑by‑side in isolated environments for comparison and management <sup>[13](<https://github.com/stablyai/orca>)</sup>.
- GitHub Desktop 3.6 integrates Copilot for commit authoring and merge conflict resolution, and adds Git worktree support <sup>[14](<https://github.blog/changelog/2026-06-26-github-desktop-3-6-worktrees-and-deeper-copilot-integration>)</sup>.

## AI Security, Governance and Economics
- German court rules Google liable for AI Overview errors, reinforcing deployer responsibility for AI inaccuracies <sup>[15](<https://simonwillison.net/2026/Jun/25/ai-and-liability/#atom-everything>), [16](<https://www.schneier.com/blog/archives/2026/06/ai-and-liability.html>)</sup>.
- An OpenClaw‑based assistant (Fiu) survived a 6,000‑email stress test by 2,000 attackers with no secrets leaked or unauthorized replies, demonstrating resilience to prompt injection/social engineering <sup>[17](<https://www.fernandoi.cl/posts/hackmyclaw/>), [18](<https://simonwillison.net/2026/Jun/26/hack-my-ai-assistant/#atom-everything>)</sup>.
- High LLM costs remain unsustainable for many firms; frontier model pricing and plateauing gains pressure incumbents as open‑weight and local alternatives rise <sup>[19](<https://aditya.patadia.org/p/ai-and-cloud-costs>), [20](<https://jamesoclaire.com/2026/06/25/the-unbearable-cheapness-of-open-weight-models/>)</sup>.
- Kaspersky reports 33,352 attacks (Jan–Apr) masquerading as AI services (e.g., Claude, OpenClaw), nearly 5× YoY, with fake AI tools now outpacing fake office software lures <sup>[21](<https://securelist.com/smb-threat-report-2026/120357/>)</sup>.

## MLOps, DevOps and Infrastructure
- Hugging Face enables one‑command private vLLM server deployment via HF Jobs with pay‑per‑second billing and no Kubernetes required <sup>[22](<https://huggingface.co/blog/vllm-jobs>)</sup>.
- Argo CD v3.5 RC adds ApplicationSet UI with previews, beta impersonation/Source Hydrator, Helm 4 support, repo‑server mTLS, and expanded multi‑tenant GitOps features <sup>[23](<https://blog.argoproj.io/argo-cd-v3-5-release-candidate-02b1fbf7b419>)</sup>.
- Kubernetes Headlamp plugin for Cluster API (CAPI) provides a visual UI to simplify cluster provisioning/debugging/lifecycle management <sup>[24](<https://kubernetes.io/blog/2026/06/25/headlamp-cluster-api-plugin/>)</sup>.
- Grafana 13.1 GA extends Git Sync (GitLab, BitBucket, signed commits) and Grafana Assistant to eight more data sources (Snowflake, Oracle, Elasticsearch) <sup>[25](<https://grafana.com/blog/grafana-13-1-release-all-the-latest-features/>)</sup>.
- Jaeger v2.18 adds ClickHouse storage backend with 8.6× compression on 10M spans and >50K spans/sec throughput <sup>[26](<https://www.cncf.io/blog/2026/06/23/building-jaegers-clickhouse-backend-8-6x-compression-on-10-million-spans/>)</sup>.
- AWS DevOps Agent (GA) + Datadog MCP Server enable autonomous incident resolution with correlated observability and code telemetry <sup>[27](<https://aws.amazon.com/blogs/devops/production-ready-autonomous-incident-resolution-with-aws-devops-agent-now-ga-and-datadog-mcp-server/>)</sup>.
- GitHub adds totals_by_ai_adoption_phase to Copilot reports, exposing total PR merges per phase for throughput and impact analysis <sup>[28](<https://github.blog/changelog/2026-06-26-track-total-merges-by-adoption-phase-in-enterprise-and-organization-reports>), [29](<https://github.blog/ai-and-ml/github-copilot/getting-more-from-each-token-how-copilot-improves-context-handling-and-model-routing/>)</sup>.
- Crossplane-based Modelplane unifies scattered GPU clusters into a single inference fleet without custom operators <sup>[30](<https://blog.crossplane.io/building-modelplane/>)</sup>.

## Developer Tools and Practices
- GitHub Desktop 3.6 deepens Copilot integration for commits and merge conflicts, and supports Git worktrees <sup>[14](<https://github.blog/changelog/2026-06-26-github-desktop-3-6-worktrees-and-deeper-copilot-integration>)</sup>.
- Drizzle ORM hit NPM packument size limits (100 MB), blocking releases for a month; resolved by pruning old versions with NPM support <sup>[31](<https://www.vlt.io/blog/packument-size-limits>)</sup>.
- no‑mistakes (open‑source) acts as a local Git proxy that validates pushes via AI in a disposable worktree, auto‑opening PRs with fixes <sup>[32](<https://github.com/kunchenguid/no-mistakes>)</sup>.
- Runlayer (new) provides an enterprise control layer for AI agents: access monitoring, identity/permissions enforcement, and blocking of prompt injection, data exfiltration, and unmanaged agents <sup>[33](<https://www.runlayer.com/>)</sup>.

## Security and Incident Notes
- New macOS malware "GasLight" embeds fake system errors to confuse AI analysis tools; it functions as an infostealer/backdoor <sup>[34](<https://www.bleepingcomputer.com/news/security/new-macos-malware-embeds-fake-errors-to-confuse-ai-analysis-tools/>)</sup>.
- Malicious Edge extension "Edgecution" abuses Chrome Native Messaging to bridge to a Python backdoor, delivered via fake Microsoft portals <sup>[35](<https://www.bleepingcomputer.com/news/security/malicious-edge-extension-abuses-native-messaging-as-bridge-to-malware/amp/>)</sup>.
- Polymarket frontend hack via a compromised vendor drained ~$3M from 11 wallets; funds swapped to ETH and sent to one address; full refunds promised <sup>[36](<https://cryptonews.net/news/security/33065348/>)</sup>.

## Sources

1. [Previewing GPT-5.6 Sol: a next-generation model](<https://openai.com/index/previewing-gpt-5-6-sol>) — _openai.com_
2. [Quoting OpenAI](<https://simonwillison.net/2026/Jun/26/openai/#atom-everything>) — _simonwillison.net_
3. [U.S. government will decide who gets to use GPT-5.6](<https://www.washingtonpost.com/technology/2026/06/26/openai-says-us-government-will-vet-users-its-latest-ai-model/>) — _hnrss.org_
4. [Trump Administration Asks OpenAI to Stagger AI Model Release](<https://www.bloomberg.com/news/articles/2026-06-25/trump-administration-asks-openai-to-stagger-release-of-ai-model?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4MjQ1NDI5NywiZXhwIjoxNzgzMDU5MDk3LCJhcnRpY2xlSWQiOiJUSDdBNkFUOTZPU1AwMCIsImJjb25uZWN0SWQiOiJFQTExNDNDNTM4NEE0RUY5QTg5RjJEN0IxMTg2MzcwOSJ9.w0NYcPW16doskolzehTQfhLBdghuG8gJed1aypmfrjo>) — _bloomberg.com_
5. [White House Asks OpenAI to Slow Roll New Model Release](<https://techcrunch.com/2026/06/25/the-white-house-is-asking-openai-to-slow-roll-the-release-of-its-new-model-over-safety-concerns/>) — _techcrunch.com_
6. [Liquid AI Releases Liquid Foundation Models 2.5 230M](<https://www.liquid.ai/blog/lfm2-5-230m>) — _liquid.ai_
7. [DeepReinforce releases Ornith-1.0 open-source coding models](<https://www.testingcatalog.com/deepreinforce-releases-ornith-1-0-open-source-coding-models/>) — _testingcatalog.com_
8. [\[AINews\] OpenAI reports median internal Codex output tokens grew 56x in Research, 32x in Customer Support, 27x in Engineering, and 13x in Legal since November 2025.](<https://www.latent.space/p/ainews-openai-reports-median-internal>) — _latent.space_
9. [Unsere Top 3 Use Cases](<https://ai-first.ai/podcast/unsere-top-3-use-cases>) — _ai first podcast_
10. [MAI-Code-1-Flash for Copilot Business and Copilot Enterprise](<https://github.blog/changelog/2026-06-26-mai-code-1-flash-for-copilot-business-and-copilot-enterprise>) — _github.blog_
11. [Vercel Launches AI SDK 7 with Enhanced Stream and Tool Orchestration](<https://vercel.com/blog/ai-sdk-7>) — _vercel.com_
12. [Bringing more agent harnesses and frameworks to Cloudflare, starting with Flue](<https://blog.cloudflare.com/agents-platform-flue-sdk/>) — _blog.cloudflare.com_
13. [Orca](<https://github.com/stablyai/orca>) — _github.com_
14. [GitHub Desktop 3.6: Worktrees and deeper Copilot integration](<https://github.blog/changelog/2026-06-26-github-desktop-3-6-worktrees-and-deeper-copilot-integration>) — _github.blog_
15. [AI and Liability](<https://simonwillison.net/2026/Jun/25/ai-and-liability/#atom-everything>) — _simonwillison.net_
16. [AI and Liability](<https://www.schneier.com/blog/archives/2026/06/ai-and-liability.html>) — _schneier.com_
17. [What happened after 2k people tried to hack my AI assistant](<https://www.fernandoi.cl/posts/hackmyclaw/>) — _hnrss.org_
18. [What happened after 2,000 people tried to hack my AI assistant](<https://simonwillison.net/2026/Jun/26/hack-my-ai-assistant/#atom-everything>) — _simonwillison.net_
19. [Why current LLM costs are not sustainable](<https://aditya.patadia.org/p/ai-and-cloud-costs>) — _hnrss.org_
20. [The Unbearable Cheapness of Open Weight Models](<https://jamesoclaire.com/2026/06/25/the-unbearable-cheapness-of-open-weight-models/>) — _jamesoclaire.com_
21. [Inside the 2026 SMB threat landscape: From phishing and scams to fake AI tools](<https://securelist.com/smb-threat-report-2026/120357/>) — _securelist.com_
22. [Run a vLLM Server on HF Jobs in One Command](<https://huggingface.co/blog/vllm-jobs>) — _huggingface.co_
23. [Argo CD v3.5 Release Candidate](<https://blog.argoproj.io/argo-cd-v3-5-release-candidate-02b1fbf7b419>) — _blog.argoproj.io_
24. [Introducing the Cluster API plugin for Headlamp](<https://kubernetes.io/blog/2026/06/25/headlamp-cluster-api-plugin/>) — _kubernetes.io_
25. [Grafana 13.1 release: observability as code updates, extending Grafana Assistant across more data sources, and more](<https://grafana.com/blog/grafana-13-1-release-all-the-latest-features/>) — _grafana.com_
26. [Building Jaeger's ClickHouse backend: 8.6× compression on 10 million spans](<https://www.cncf.io/blog/2026/06/23/building-jaegers-clickhouse-backend-8-6x-compression-on-10-million-spans/>) — _cncf.io_
27. [Production-Ready Autonomous Incident Resolution with AWS DevOps Agent (now GA) and Datadog MCP Server](<https://aws.amazon.com/blogs/devops/production-ready-autonomous-incident-resolution-with-aws-devops-agent-now-ga-and-datadog-mcp-server/>) — _aws.amazon.com_
28. [Track total merges by adoption phase in enterprise and organization reports](<https://github.blog/changelog/2026-06-26-track-total-merges-by-adoption-phase-in-enterprise-and-organization-reports>) — _github.blog_
29. [Getting more from each token: How Copilot improves context handling and model routing](<https://github.blog/ai-and-ml/github-copilot/getting-more-from-each-token-how-copilot-improves-context-handling-and-model-routing/>) — _github.blog_
30. [Building Modelplane on Crossplane](<https://blog.crossplane.io/building-modelplane/>) — _blog.crossplane.io_
31. [Why Drizzle ORM couldn't publish new releases on NPM for a month](<https://www.vlt.io/blog/packument-size-limits>) — _vlt.io_
32. [No-mistakes](<https://github.com/kunchenguid/no-mistakes>) — _github.com_
33. [Runlayer](<https://www.runlayer.com/>) — _runlayer.com_
34. [New macOS Malware Embeds Fake Errors to Confuse AI Analysis Tools](<https://www.bleepingcomputer.com/news/security/new-macos-malware-embeds-fake-errors-to-confuse-ai-analysis-tools/>) — _bleepingcomputer.com_
35. [Malicious Edge Extension Abuses Native Messaging as Bridge to Malware](<https://www.bleepingcomputer.com/news/security/malicious-edge-extension-abuses-native-messaging-as-bridge-to-malware/amp/>) — _bleepingcomputer.com_
36. [Polymarket users lose $3 million after frontend hack](<https://cryptonews.net/news/security/33065348/>) — _cryptonews.net_


## Recent archive

_One file per day (kept 14 days)._

- [2026-06-26](news/en/2026-06-26.md)
- [2026-06-25](news/en/2026-06-25.md)
- [2026-06-24](news/en/2026-06-24.md)
- [2026-06-23](news/en/2026-06-23.md)
- [2026-06-22](news/en/2026-06-22.md)
- [2026-06-21](news/en/2026-06-21.md)

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
