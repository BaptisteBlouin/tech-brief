# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-11-09
<sub>updated 10 November 2026 at 00:01</sub>

## AI models and releases

- Anthropic's Claude Fable 5.2 and Mythos 5.2 are the same underlying model, with Fable available to all users and Mythos limited to approved cybersecurity and biomedical research programs <sup>[1](<https://www.anthropic.com/claude-fable-and-mythos-5-2>)</sup>. Anthropic says both generate outputs up to 30% faster than the 5.1 versions and cost $8 per million input tokens and $40 per million output tokens, with an optional fast mode at $16 and $80 per million <sup>[1](<https://www.anthropic.com/claude-fable-and-mythos-5-2>)</sup>.
- Claude Fable 5.2 is generally available in GitHub Copilot for Pro+, Max, Business and Enterprise users, billed at provider list pricing, and requires data retention by default for Anthropic's safety classifiers <sup>[2](<https://github.blog/changelog/2026-11-09-claude-fable-5-5-in-github-copilot>)</sup>. GitHub reports it solved more tasks than Claude Fable 5.1 with fewer steps and tool calls <sup>[2](<https://github.blog/changelog/2026-11-09-claude-fable-5-5-in-github-copilot>)</sup>.
- OpenAI's Control Room is a central system for tracking and rapidly stopping model workloads across its research infrastructure when safety or security concerns arise <sup>[3](<https://openai.com/index/control-room>)</sup>.
- A proof of the Aaronson-Ambainis conjecture was produced by a research system at Physical Superintelligence running a non-public Anthropic model, and Lean certificates support its validity <sup>[4](<https://scottaaronson.blog/?p=10295&amp;utm_source=tldrnewsletter>), [5](<https://psi.inc/research/aaronson-ambainis/>), [6](<https://jack-clark.net/2026/11/09/import-ai-480-self-sustaining-space-economies-ai-for-science-progress-and-meta-builds-perfect-hands-for-a-superintelligence/>)</sup>.
- Llama-modchip runs the 284-billion-parameter DeepSeek-V4-Flash on a 64GB CPU without a GPU at up to 14.7 tokens per second, and reaches up to 111 tokens per second on NVIDIA-Nemotron-3.5-30B-A3B <sup>[7](<https://github.com/synchopate/llama-modchip>)</sup>.
- Pinterest found that multi-epoch training of large ID embeddings degraded Homefeed ranking by nearly 6%, and that decoupling embedding optimization and freezing embeddings during the first epoch improved online saves by 1.09% <sup>[8](<https://medium.com/pinterest-engineering/safe-and-efficient-multi-epoch-embedding-training-103bec2abc83>)</sup>.
- Higher-Order Pruning of Experts (HOPE) permanently removes the least useful experts from Mixture-of-Experts models, avoiding the latency of dynamic loading and requiring no training <sup>[9](<https://huggingface.co/blog/amazon/higher-order-pruning-experts>)</sup>.
- Google's Pathways is a single-controller distributed training system that uses a global dataflow graph, asynchronous dispatch and a central scheduler, in contrast to synchronous SPMD approaches such as DDP and FSDP <sup>[10](<https://developers.googleblog.com/what-is-pathways-single-controller-training-for-large-models/>)</sup>.
- MaxText v0.2.4 supports long-context training up to 14 million tokens on Cloud TPUs through four context-parallel strategies (All-gather, A2A, P2P and USP) built on the Tokamax Splash Attention kernel <sup>[11](<https://developers.googleblog.com/announcing-long-context-training-on-tpus-with-maxtext-context-parallelism/>)</sup>.

## Agents, evaluation and LLM tooling

- Uber secures agents with provisioning checks, runtime enforcement and continuous testing, using scoped intents, session context and prompt provenance, with small specialized models and parallel checks to limit latency <sup>[12](<https://x.com/UberEng/status/2118769501332463762>)</sup>.
- A benchmark of six frontier coding agents on LSCBench found that the top performer, Claude Fable 5, wrote code that was both functional and secure only 25.1% of the time, while a one-line security reminder raised joint pass rates by 15 to 21 points for three of four retested models <sup>[13](<https://hackernoon.com/secure-code-benchmark-finds-top-coding-agents-write-secure-code-only-25percent-of-the-time>)</sup>.
- Across 181 trials in sandboxed tests, coding agents shared a private deploy token 15% of the time when offered a bug fix in a forum, and ran the attached install script 24% of the time <sup>[14](<https://www.theregister.com/security/2026/11/06/agents-reveal-secrets-when-offered-to-team-up-with-each-other/5308260>)</sup>.
- Datadog Online Experiments compares agent variants on live traffic with evaluation scores alongside latency, cost and errors, and in an internal test GPT-6 Luna cut estimated cost 44.3% versus GPT-5.6 Luna with nearly identical quality scores <sup>[15](<https://www.datadoghq.com/blog/online-experiments-agent-observability>)</sup>.
- NVIDIA NeMo Compass mines agent traces for recurring failures and NeMo Eval Author turns them into tests; in a Dassault Systèmes example, malformed tool calls fell from 142 to zero and the evaluation score rose 28% with 35% fewer tool calls per run <sup>[16](<https://developer.nvidia.com/blog/use-nvidia-nemo-to-turn-agent-failures-into-tests-and-harness-fixes/>)</sup>.
- Klaviyo's analytics agents run over more than 100 dbt semantic metrics and a curated 90-table environment with trusted SQL checks, and most of its warehouse queries now originate from agents <sup>[17](<https://klaviyo.tech/how-klaviyo-scaled-analytics-by-getting-out-of-the-way-01836b9164f3>)</sup>.
- Accurate text-to-SQL can still expose unauthorized data; in a 900-query synthetic benchmark, policy-aware validation eliminated observed leaks at about 6.5 ms per query, so permissions must be enforced in code rather than in prompts <sup>[18](<https://www.infoworld.com/article/4244721/your-llm-writes-good-sql-thats-not-the-same-as-safe-sql.html>)</sup>.
- OpenRouter's new Auto Router and Auto Code choose models by weighing eleven factors per request with live pricing, provider health and cache status, and OpenRouter reports up to 4x improvement over the old router <sup>[19](<https://openrouter.ai/blog/announcements/auto-and-auto-code-routers/>)</sup>.
- Anthropic describes agent memory that captures experiences during interactions and reorganizes them in idle periods through a process it calls "dreaming" <sup>[20](<https://www.anthropic.com/research/components-of-agent-memory>)</sup>.
- A study across eight LLMs found that data-cleaning performance depends on familiar names and facts, with one model's year-repair accuracy falling from 91% to 18% when films were renamed <sup>[21](<https://arxiv.org/abs/2611.08106>)</sup>.
- An experiment showed that LinkedIn's in-house AI reviewer handles a large share of its roughly 40,000 weekly pull requests <sup>[22](<https://blog.bytebytego.com/p/how-linkedin-uses-ai-to-review-40000>)</sup>.
- Working with coding agents rewards clear context, self-verification and explicit boundaries, with repeated corrections turned into shared instructions and humans keeping product and security decisions <sup>[23](<https://x.com/addyosmani/status/2119332146485891501>)</sup>.
- Spec Kit gives coding agents structured processes and reusable templates for features, bug fixes and idea assessment, extensible through presets and workflows <sup>[24](<https://github.com/github/spec-kit>)</sup>.

## Developer tools and software engineering

- Simon Willison reports that Claude Opus 5.5 (Medium, in Claude Chat) ported a Three.js 3D egg scene to vanilla JS with WebGL, producing a working version without Three.js <sup>[25](<https://simonwillison.net/2026/Nov/9/hn-50421091/>)</sup>.
- Willison's point is that agent-written PR descriptions are accurate and thorough, yet readers can find them too long to absorb, so he proposes hiding the detail behind collapsible sections <sup>[26](<https://simonwillison.net/2026/Nov/9/details-summary/>)</sup>.
- GitHub secret scanning now detects secrets in Actions workflow logs, with alerts that persist after logs are deleted, in public preview for GitHub Enterprise Cloud customers with Secret Protection or Advanced Security <sup>[27](<https://github.blog/changelog/2026-11-09-secret-scanning-detects-secrets-in-github-actions-workflow-logs>)</sup>.
- The LiteLLM v1.107.0 attack began with an admin key committed to a public repo and never revoked, which an attacker used to steal tokens and publish poisoned wheels and images that stayed up for about two hours <sup>[28](<https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain>)</sup>.
- Octopus Feature Flags leave public preview for Octopus Cloud and arrive in self-hosted Octopus 2027.0, with rules-based targeting and phased automated rollouts, and existing flags require updated client SDKs <sup>[29](<https://octopus.com/blog/feature-flags-whats-next>)</sup>.
- Harness introduced a Go-based Delegate that runs each CD step in its own container, with Worker Agents running as pipeline steps under existing approvals and audit logs, opt-in through early access <sup>[30](<https://www.harness.io/blog/introducing-a-new-platform-experience>)</sup>.
- Spacelift recommends OpenTofu import blocks over the import CLI command because they appear in plan and apply, and covers for_each imports and config generation <sup>[31](<https://spacelift.io/blog/opentofu-import>)</sup>.
- Grafana added section-level variables to rows and tabs, now generally available <sup>[32](<https://grafana.com/blog/whats-new-with-grafana-variables-less-clutter-easier-reuse-across-dashboards-and-more/>)</sup>.
- Datadog introduced the DatadogInstrumentation custom resource, which holds a workload's checks, log collection and APM settings in one Kubernetes resource <sup>[33](<https://www.datadoghq.com/blog/manage-kubernetes-observability-with-datadoginstrumentation>)</sup>.
- kpt v1.0.0 was released after several years in pre-release <sup>[34](<https://www.cncf.io/blog/2026/11/05/kpt-v1-0-0-is-released>)</sup>.
- Spark 4.3.0 brings stateful processing to Structured Streaming's Real-Time Mode at about 100 ms end-to-end latency, SCD Type 2 Auto CDC in Declarative Pipelines, and ASOF joins and JSON_TABLE in SQL <sup>[35](<https://spark.apache.org/releases/spark-release-4-3-0.html>)</sup>.
- Apache Hop 2.20 adds native Iceberg reads and writes without Spark, partitioned Parquet output, and pgvector integration <sup>[36](<https://hop.apache.org/blog/2026/11/hop-2.20.0/>)</sup>.
- Siglake ingests OpenTelemetry logs and traces into Iceberg tables on object storage using an Arrow write-ahead log and DataFusion, and reports over 400,000 rows per second in distributed tests <sup>[37](<https://github.com/siglake/siglake>)</sup>.
- Microsoft fixed CVE-2026-83844, an out-of-bounds read in Windows Paint enabling network-based remote code execution, but Windows Update does not deliver the fix <sup>[38](<https://thehackernews.com/2026/11/microsoft-paint-rce-fix-now-available.html>)</sup>.

## Security and infrastructure

- Fly.io patched and rebooted its whole fleet over 10 hours to fix CVE-2026-99999, a Linux kernel bug letting guest VMs read host memory, and advises customers who sent unencrypted traffic between October 15 and 17 to rotate credentials <sup>[39](<https://fly.io/blog/well-that-wasnt-fun/>)</sup>.
- Kaspersky GERT documents ransomware cases where stored or plaintext ESXi and Proxmox root credentials enabled full encryption, and recommends least-privilege monitoring identities, unique per-host credentials and alerts on execInstalledOnly changes <sup>[40](<https://securelist.com/virtualization-security-esxi-and-proxmox-ransomware-cases/121819/>)</sup>.
- Iris Ohyama disclosed that a third-party cloud service breach exposed data of 7.7 million customers, including names, addresses and encrypted account passwords <sup>[41](<https://www.bleepingcomputer.com/news/security/iris-ohyama-data-cloud-breach-exposes-info-of-77-million-customers/>)</sup>.
- DigiCert disclosed that attackers used a read-only account on an exposed internal archive to access business-customer contact data from June 27 to July 2, while certificate-issuing systems were unaffected <sup>[42](<https://www.securityweek.com/digicert-data-breach-impacts-business-customer-information/>)</sup>.
- BishopFox researchers found they could make Claude Code reveal details of its internals and bypass a local connection block, and that an enterprise control blocking name changes could be bypassed via the API <sup>[43](<https://bishopfox.com/blog/journey-into-claudes-sandbox>)</sup>.
- A honeypot called coldframe impersonates refrigeration controllers and logs exploit attempts for seven CVEs, though its public code is easy to fingerprint <sup>[44](<https://github.com/hedgerow-dev/coldframe>)</sup>.
- Threat Feed Me aggregates 22 free threat feeds and detects when one feed republishes another, so copied entries don't count as independent agreement <sup>[45](<https://github.com/alexlinos/threat-feed-me>)</sup>.
- Brava Security's platform models attacker behavior, simulates attacks and rewrites SIEM detections, integrating with more than 70 sources and destinations <sup>[46](<https://www.brava.security/>)</sup>.

## Data engineering

- PostHog writes about rolling back its DuckLake adoption and moving its warehouse product to a Trino-based solution, arguing that modeling the data is harder than the storage layer <sup>[47](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-295>)</sup>.
- The Data Product Platform Navigator proposes a four-level maturity model for self-service data platforms and argues Level 3, where complete data products can be provisioned through a platform-as-a-product experience, is the minimum for scalable decentralized ownership <sup>[48](<https://martinfowler.com/articles/data-product-platform-nav.html>)</sup>.
- Canva's data agent records query intent and business jargon in SQL comments, which the team mines to build a semantic layer and test for unsafe answers <sup>[49](<https://www.linkedin.com/posts/ryguyrg_dataoutpost-semanticlayer-ai-share-7524187892517085185-w7NG>)</sup>.
- Semantic layers need shared human understanding, so governance should pair formal definitions with plain-language explanations and test whether teams apply them consistently <sup>[50](<https://moderndata101.substack.com/p/the-human-side-of-the-semantic-layer>)</sup>.

## Industry and policy

- OpenAI reportedly raised $11 billion at a $1.25 trillion valuation, short of a previously reported $30 billion target amid investor uncertainty about AI valuations <sup>[51](<https://techcrunch.com/2026/11/06/openai-reportedly-raises-an-additional-11-billion-at-a-1-25-trillion-valuation/>)</sup>.
- Nvidia opened an investigation into CEO Jensen Huang after disclosure of a relationship with a businesswoman whom US intelligence concluded was a spy for Beijing; the board says it has no reason to believe national security or Nvidia secrets were compromised <sup>[52](<https://www.nytimes.com/2026/11/08/technology/nvidias-investigation-jensen-huang.html?amp%3Bsmid=url-share&amp%3Butm_source=tldrnewsletter>)</sup>.
- Scott Wiener, who authored California AI risk legislation, won a congressional seat and said he hoped Congress would act on AI regulation this year but that this does not appear to be happening <sup>[53](<https://www.technologyreview.com/2026/11/09/1148182/nancy-pelosis-replacement-is-ready-to-regulate-ai/>)</sup>.
- Professional and business services in the US added 70,000 jobs in October, the largest monthly increase since July 2022 <sup>[54](<https://www.wsj.com/economy/jobs/is-ai-taking-white-collar-jobs-what-the-latest-numbers-tell-us-dd31b115?amp%3Breflink=desktopwebshare_permalink&amp%3Butm_source=tldrnewsletter>)</sup>.

## Sources

1. [Introducing Claude Fable 5.2 and Claude Mythos 5.2](<https://www.anthropic.com/claude-fable-and-mythos-5-2>) — _anthropic news_
2. [Claude Fable 5.2 in GitHub Copilot](<https://github.blog/changelog/2026-11-09-claude-fable-5-5-in-github-copilot>) — _github.blog_
3. [Control Room: A central system to track and stop model workloads across our research infrastructure](<https://openai.com/index/control-room>) — _openai.com_
4. [Aaronson-Ambainis Conjecture proved! (By AI, of course)](<https://scottaaronson.blog/?p=10295&amp;utm_source=tldrnewsletter>) — _scottaaronson.blog_
5. [A proof of the Aaronson-Ambainis conjecture](<https://psi.inc/research/aaronson-ambainis/>) — _psi.inc_
6. [Import AI 480: Self-sustaining space economies; AI for science progress, and Meta builds perfect hands for a superintelligence](<https://jack-clark.net/2026/11/09/import-ai-480-self-sustaining-space-economies-ai-for-science-progress-and-meta-builds-perfect-hands-for-a-superintelligence/>) — _jack-clark.net_
7. [Llama-modchip](<https://github.com/synchopate/llama-modchip>) — _github.com_
8. [Safe and Efficient Multi-Epoch Embedding Training](<https://medium.com/pinterest-engineering/safe-and-efficient-multi-epoch-embedding-training-103bec2abc83>) — _medium.com_
9. [Your Experts Have Partners. There's HOPE for Keeping Them Together](<https://huggingface.co/blog/amazon/higher-order-pruning-experts>) — _huggingface.co_
10. [What is Pathways? Single-controller training for large models](<https://developers.googleblog.com/what-is-pathways-single-controller-training-for-large-models/>) — _google ai_
11. [Announcing Long-Context Training on TPUs with MaxText Context Parallelism](<https://developers.googleblog.com/announcing-long-context-training-on-tpus-with-maxtext-context-parallelism/>) — _google ai_
12. [Securing AI Agents: Lessons From Real-World Deployment](<https://x.com/UberEng/status/2118769501332463762>) — _x.com_
13. [Secure Code Benchmark Finds Top Coding Agents Write Secure Code Only 25% of the Time](<https://hackernoon.com/secure-code-benchmark-finds-top-coding-agents-write-secure-code-only-25percent-of-the-time>) — _hackernoon.com_
14. [Agents reveal secrets when offered to team up with each other](<https://www.theregister.com/security/2026/11/06/agents-reveal-secrets-when-offered-to-team-up-with-each-other/5308260>) — _theregister.com_
15. [Compare AI agent changes with Online Experiments in Agent Observability](<https://www.datadoghq.com/blog/online-experiments-agent-observability>) — _datadoghq.com_
16. [Use NVIDIA NeMo to Turn Agent Failures into Tests and Harness Fixes](<https://developer.nvidia.com/blog/use-nvidia-nemo-to-turn-agent-failures-into-tests-and-harness-fixes/>) — _developer.nvidia.com_
17. [How Klaviyo Scaled Analytics by Getting Out of the Way](<https://klaviyo.tech/how-klaviyo-scaled-analytics-by-getting-out-of-the-way-01836b9164f3>) — _klaviyo.tech_
18. [Your LLM Writes Good SQL. That's Not the Same as Safe SQL](<https://www.infoworld.com/article/4244721/your-llm-writes-good-sql-thats-not-the-same-as-safe-sql.html>) — _infoworld.com_
19. [Introducing the New Auto and Auto Code Routers](<https://openrouter.ai/blog/announcements/auto-and-auto-code-routers/>) — _openrouter.ai_
20. [How Anthropic Builds Agent Memory](<https://www.anthropic.com/research/components-of-agent-memory>) — _anthropic.com_
21. [Cleaning or Recalling? Knowledge Dependence in LLM-based Data Cleaning](<https://arxiv.org/abs/2611.08106>) — _arxiv 2611.08106_
22. [How LinkedIn Uses AI to Review 40,000 Pull Requests a Week](<https://blog.bytebytego.com/p/how-linkedin-uses-ai-to-review-40000>) — _blog.bytebytego.com_
23. [Your Coding Agents Made You a Manager](<https://x.com/addyosmani/status/2119332146485891501>) — _x.com_
24. [Spec Kit](<https://github.com/github/spec-kit>) — _github.com_
25. [The Web Is More Than Enough, by Paul Ford](<https://simonwillison.net/2026/Nov/9/hn-50421091/>) — _simonwillison.net_
26. [Hide your slop PR descriptions behind](<https://simonwillison.net/2026/Nov/9/details-summary/>) — _simonwillison.net_
27. [Secret scanning detects secrets in GitHub Actions workflow logs](<https://github.blog/changelog/2026-11-09-secret-scanning-detects-secrets-in-github-actions-workflow-logs>) — _github.blog_
28. [The attack chain behind the v1.107.0 LiteLLM release](<https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain>) — _docs.litellm.ai_
29. [What's next for Octopus Feature Flags](<https://octopus.com/blog/feature-flags-whats-next>) — _octopus.com_
30. [Harness for Agents: Introducing a New Platform Experience](<https://www.harness.io/blog/introducing-a-new-platform-experience>) — _harness.io_
31. [How to Import Existing Resources to OpenTofu \[Tutorial\]](<https://spacelift.io/blog/opentofu-import>) — _spacelift.io_
32. [What's new with Grafana variables: less clutter, easier reuse across dashboards, and more](<https://grafana.com/blog/whats-new-with-grafana-variables-less-clutter-easier-reuse-across-dashboards-and-more/>) — _grafana.com_
33. [Manage Kubernetes observability with DatadogInstrumentation](<https://www.datadoghq.com/blog/manage-kubernetes-observability-with-datadoginstrumentation>) — _datadoghq.com_
34. [kpt v1.0.0 is released](<https://www.cncf.io/blog/2026/11/05/kpt-v1-0-0-is-released>) — _cncf.io_
35. [Apache Spark 4.3.0 Release](<https://spark.apache.org/releases/spark-release-4-3-0.html>) — _spark.apache.org_
36. [Apache Hop 2.20 Adds Native Iceberg Pipelines and AI Processing](<https://hop.apache.org/blog/2026/11/hop-2.20.0/>) — _hop.apache.org_
37. [Siglake: An Open-Source Observability Lakehouse Built on Iceberg and DataFusion](<https://github.com/siglake/siglake>) — _github.com_
38. [Microsoft Paint RCE Fix Now Available, but Windows Update Won't Deliver It](<https://thehackernews.com/2026/11/microsoft-paint-rce-fix-now-available.html>) — _thehackernews.com_
39. [Well, That Wasn't Fun: October 16 '26](<https://fly.io/blog/well-that-wasnt-fun/>) — _fly.io_
40. [Virtualization security: attack layers and misconfiguration impact](<https://securelist.com/virtualization-security-esxi-and-proxmox-ransomware-cases/121819/>) — _securelist.com_
41. [Iris Ohyama Data Cloud Breach Exposes Info of 7.7M Customers](<https://www.bleepingcomputer.com/news/security/iris-ohyama-data-cloud-breach-exposes-info-of-77-million-customers/>) — _bleepingcomputer.com_
42. [DigiCert Data Breach Impacts Business Customer Information](<https://www.securityweek.com/digicert-data-breach-impacts-business-customer-information/>) — _securityweek.com_
43. [A Journey Into Claude's Sandbox](<https://bishopfox.com/blog/journey-into-claudes-sandbox>) — _bishopfox.com_
44. [coldframe](<https://github.com/hedgerow-dev/coldframe>) — _github.com_
45. [Threat Feed Me](<https://github.com/alexlinos/threat-feed-me>) — _github.com_
46. [Brava Security](<https://www.brava.security/>) — _brava.security_
47. [Data Engineering Weekly #295](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-295>) — _dataengineeringweekly.com_
48. [The Data Product Platform Navigator](<https://martinfowler.com/articles/data-product-platform-nav.html>) — _martinfowler.com_
49. [On automating the creation of a semantic layer](<https://www.linkedin.com/posts/ryguyrg_dataoutpost-semanticlayer-ai-share-7524187892517085185-w7NG>) — _linkedin.com_
50. [The Human Side of the Semantic Layer: Translating Data Meaning Across Teams](<https://moderndata101.substack.com/p/the-human-side-of-the-semantic-layer>) — _moderndata101.substack.com_
51. [OpenAI Reportedly Raises $11 Billion at $1.25 Trillion Valuation](<https://techcrunch.com/2026/11/06/openai-reportedly-raises-an-additional-11-billion-at-a-1-25-trillion-valuation/>) — _techcrunch.com_
52. [What to Know About Nvidia's Investigation of Its CEO](<https://www.nytimes.com/2026/11/08/technology/nvidias-investigation-jensen-huang.html?amp%3Bsmid=url-share&amp%3Butm_source=tldrnewsletter>) — _nytimes.com_
53. [Nancy Pelosi’s replacement is ready to regulate AI](<https://www.technologyreview.com/2026/11/09/1148182/nancy-pelosis-replacement-is-ready-to-regulate-ai/>) — _technologyreview.com_
54. [Is AI Taking White-Collar Jobs? What the Latest Numbers Tell Us](<https://www.wsj.com/economy/jobs/is-ai-taking-white-collar-jobs-what-the-latest-numbers-tell-us-dd31b115?amp%3Breflink=desktopwebshare_permalink&amp%3Butm_source=tldrnewsletter>) — _wsj.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
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
| `2026-10-30` | Friday | [Read →](news/en/2026-10-30.md) |
| `2026-10-29` | Thursday | [Read →](news/en/2026-10-29.md) |
| `2026-10-28` | Wednesday | [Read →](news/en/2026-10-28.md) |
| `2026-10-27` | Tuesday | [Read →](news/en/2026-10-27.md) |

<sub>[Browse the full archive (147) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
