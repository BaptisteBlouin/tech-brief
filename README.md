# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### 🗓️ Weekly recap (2026-10-12 → 2026-10-18)
<sub>updated 19 October 2026 at 01:01</sub>

## AI Models and Open Weights

- Meta released Muse Spark Open, an 816B-total / 42B-active parameter open-weights MoE model with a 1M-token context window under the Muse Model License, optimized for SGLang and vLLM on NVIDIA, AMD and Intel hardware <sup>[1](<https://pytorch.org/blog/muse-spark-open/>), [2](<https://research.meta.ai/blog/muse-spark-open>)</sup>. It can run locally across two Apple M5 Ultra Mac Studios using MLX <sup>[3](<https://venturebeat.com/technology/meta-unveils-muse-spark-open-the-new-top-u-s-open-weights-model-and-it-runs-on-two-paired-mac-desktops>)</sup>. Artificial Analysis scores it 39 on its Intelligence Index, the highest of any US open-weights model <sup>[4](<https://www.latent.space/p/ainews-high-taste-testers-ep-1>)</sup>; a version that shipped separately is weaker than Meta's earlier Spark 1.3 <sup>[5](<https://www.latent.space/p/ainews-agents-disprove-polysemanticity>)</sup>. It is in limited preview on GroqCloud at 350+ tokens per second per user <sup>[6](<https://groq.com/blog/meta-s-muse-spark-open-release-is-now-in-limited-preview-on-groqcloud>)</sup>.
- Google's Gemini 4 Argon is broadly available with limited-time API pricing of $2/$10 per 1M tokens, and it is on Google Cloud as a frontier model for long, multi-step enterprise work <sup>[7](<https://venturebeat.com/technology/google-makes-gemini-4-argon-broadly-available-with-limited-time-low-api-pricing-of-2-10-per-1m-token>), [8](<https://cloud.google.com/blog/products/ai-machine-learning/gemini-4-argon-available-on-google-cloud>)</sup>. Simon Willison notes the launch price doubles on December 1st and argues per-token prices mislead, since what matters is tokens needed to reach a goal in an agentic harness <sup>[9](<https://simonwillison.net/2026/Oct/13/llm-gemini/>)</sup>. It is generally available in GitHub Copilot for Pro+, Max, Business and Enterprise users <sup>[10](<https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot>)</sup>, and scores 87% on ERQA, which Google says beats every other frontier model <sup>[11](<https://deepmind.google/blog/gemini-4-argon-for-robotics/>)</sup>.
- Meta launched Muse Wonder and Wonder Full with stronger coding and Active Memory <sup>[12](<https://research.meta.ai/blog/muse-wonder>), [13](<https://www.latent.space/p/ainews-meta-muse-wonder-and-wonder>)</sup>; Muse Wonder is in the Meta Model API and Muse Code, Wonder Full only for Muse Code subscribers <sup>[14](<https://www.testingcatalog.com/meta-launches-muse-wonder-and-wonder-full-for-ai-agents/>)</sup>.
- GPT-6.1 Sol now has a default 500k context window, which means fewer compactions on long-running tasks <sup>[15](<https://threadreaderapp.com/thread/2109543080609165508.html>)</sup>. OpenAI's Higgsfield announcement says creators can now get videos over 10 minutes long using GPT-6 Astra <sup>[16](<https://openai.com/index/higgsfield-longer-videos-voice>)</sup>.
- Liquid AI released LFM2.5-24B-A2B, a 24B-parameter reasoning model with 2B active parameters that it reports matches or beats Qwen3.6-35B-A3B on five of eight benchmarks and runs up to 1.7x faster <sup>[17](<https://www.liquid.ai/blog/lfm2-5-24b-a2b>), [18](<https://huggingface.co/blog/LiquidAI/lfm25-24b-a2b>)</sup>.
- Reflection released Beam-1.0-501B-A23B, a 501B open model <sup>[19](<https://huggingface.co/blog/reflection-beam>)</sup>. Nvidia released Nemotron 3.5 Super VL, scoring 26.5 on Artificial Analysis' Intelligence Index with fewer output tokens than its predecessor, plus the smaller Nemotron 3.5 Bolt 74B-A9B <sup>[20](<https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/>)</sup>. Black Forest Labs released FLUX 3 Image Klein, a 5.6B open-weight image model <sup>[21](<https://bfl.ai/blog/flux-3-image-klein>)</sup>. Microsoft detailed MAI-Base-2, a 2.8T-parameter MoE with 80B active parameters <sup>[22](<https://microsoft.ai/news/frontier-pre-training-at-microsoft-ai/>)</sup>. Mistral released Timestral, time-series foundation models from 5M to 209M parameters <sup>[23](<https://mistral.ai/news/timestral>)</sup>.
- Microsoft unveiled the Maia 300 inference accelerator, claiming 40% better performance per megawatt than leading GPU systems, with deployment planned from 2027 <sup>[24](<https://news.microsoft.com/maia-2026/>), [25](<https://www.bloomberg.com/news/articles/2026-10-12/microsoft-prepares-to-put-gigawatts-of-its-chips-in-data-centers>)</sup>.
- Open-weight models now process over seven in ten tokens on Vercel's AI Gateway and nearly a quarter of spend <sup>[26](<https://vercel.com/blog/ai-gateway-production-index-october-2026>)</sup>.
- Anthropic says new limits on access to Claude's reasoning cut distillation-attack data harvesting by 90% to 99%, naming Z.ai as one company that tried to copy Claude <sup>[27](<https://www.reuters.com/world/china/anthropic-says-new-safeguards-sharply-reduce-ai-distillation-attacks-2026-10-13/>)</sup>.

## Agents, Coding Tools and Evaluation

- Anthropic's Claude Code team runs review continuously while code is written, so most changes are reviewed and fixed by Claude before a human looks, and merged pull requests more than doubled from June to September while the revert share fell over 40% <sup>[28](<https://simonwillison.net/2026/Oct/16/code-review/>), [29](<https://claude.dev/blog/solving-code-review-at-anthropic/>)</sup>.
- Anthropic added OpenTelemetry trace export from Claude Managed Agents, the Messages API and the SDKs, for tools like Grafana, Datadog and Langfuse <sup>[30](<https://claude.com/resources/articles/agent-observability-on-the-claude-platform>)</sup>. Phoenix is an open-source, self-hosted LLM observability platform with OpenTelemetry tracing and evaluations <sup>[31](<https://github.com/Arize-ai/phoenix>)</sup>.
- Cohere reports coding-agent teams improve on ProgramBench by up to ~10 points at 3–7x the cost, and a strong lead with cheap workers reaches near-frontier results at about 70% lower cost <sup>[32](<https://cohere.com/blog/lessons-from-scaling-teams-of-frontier-coding-agents>)</sup>.
- Docker runs Harbor eval tasks in Docker Sandboxes with custom network policies to limit reward hacking <sup>[33](<https://www.docker.com/blog/harbor-docker-sandboxes-run-safe-reproducible-agent-evals/>)</sup>. Martin Fowler argues a behavioral harness is not an automatic win for every model and task <sup>[34](<https://martinfowler.com/articles/are-harnesses-worth-the-cost.html>)</sup>.
- LangChain recommends starting agent evals with 10 to 20 examples drawn from traces, combining code evaluators, LLM judges and human review <sup>[35](<https://www.langchain.com/blog/common-questions-about-agent-evals>)</sup>. Google's agent-evals guide warns agents can loop or burn tokens while still looking fine <sup>[36](<https://developers.googleblog.com/evaluating-ai-agents-moving-past-the-vibe-check/>)</sup>.
- Jev's team picked the right page first 88% of the time versus 70% for embedding search, and cut irrelevant results from 33% to 3% by answering "none" when no page fit <sup>[37](<https://sayora.ai/many-hands/jev-vs-embeddings/>)</sup>.
- Hybrid reasoning agents proposed in research switch between latent reasoning and text tool interaction within one generation, keeping latent thoughts inspectable <sup>[38](<https://arxiv.org/abs/2610.18861>)</sup>.
- GitHub's HydraFusion now draws from Claude Opus 5.5, GPT-6 Astra, GPT-6.1 Sol and GPT-6 Luna, setting reasoning effort per step <sup>[39](<https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option>)</sup>. GitHub's agentic autofix for code scanning is generally available: Copilot proposes a fix, reruns CodeQL and opens a draft PR <sup>[40](<https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability>)</sup>.
- Google's Agent Development Kit now covers Python, Go, TypeScript, Java and Kotlin, with MCP and A2A support <sup>[41](<https://cloud.google.com/blog/topics/developers-practitioners/one-agent-development-kit-five-languages/>)</sup>. Devin Oncall is generally available for investigating production issues with company-specific skills and memory <sup>[42](<https://devin.ai/blog/introducing-devin-oncall>)</sup>.
- Perplexity open-sourced SPACE, the sandbox platform behind its Computer product <sup>[43](<https://www.perplexity.ai/hub/blog/open-sourcing-space>)</sup>. Pulumi ESC now mints OIDC tokens for any service, expiring within one hour <sup>[44](<https://www.pulumi.com/blog/esc-oidc-tokens-for-any-service/>)</sup>.
- Google's Harness² lets agents improve prompts, tools, memory and orchestration without changing weights <sup>[45](<https://github.com/google-research/harness2>)</sup>.
- Anthropic's Code Review is generally available for Team and Enterprise; most reviews now finish about 3x faster <sup>[46](<https://claude.com/resources/articles/code-review-is-now-generally-available>)</sup>.
- Securing agent work: prompts are not permissions, so limits belong in isolated workspaces, task-scoped identities, short-lived credentials and network policy <sup>[47](<https://vinny.dev/blog/2026-10-12-the-prompt-is-not-the-permission-securing-the-agentic-sdlc/>)</sup>. Docker's guide argues for containing what an agent can reach <sup>[48](<https://www.docker.com/blog/ai-agent-security-risks/>)</sup>.

## AI Safety, Policy and Industry

- Anthropic opened a Singapore office and signed an MOU with Singapore's Ministry of Digital Development covering AI safety and evaluation <sup>[49](<https://www.anthropic.com/news/singapore-office-opening>)</sup>. It is committing 5% of its shares to a Public Benefit Fund, plus 2% more per 50% value increase above a baseline, subject to stockholder approval <sup>[50](<https://www.anthropic.com/news/public-benefit-fund>)</sup>. Its proposed safety bill would apply only if 50 deaths or $1B in damages are at stake <sup>[51](<https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropics-proposed-ai-safety-bill-only-kicks-in-if-50-deaths-or-usd1-billion-in-damages-are-on-the-line-proposal-would-effectively-make-the-commerce-department-the-only-agency-capable-of-stopping-an-ai-model>)</sup>.
- Anthropic told investors Q3 revenue rose about 45% to $16.8B ahead of a possible IPO that could value it at $2 trillion <sup>[52](<https://www.nytimes.com/2026/10/14/technology/anthropic-ipo-revenue-profit.html>)</sup>. It gave METR employee-like access to evaluate its models <sup>[53](<https://www.anthropic.com/news/an-update-on-independent-evaluators>)</sup>.
- Anthropic's research says small models of 30B parameters or fewer can already complete many steps of self-replication on commodity IoT devices, and it warns they could spread to smart devices, though it could not demonstrate full replication <sup>[54](<https://www.anthropic.com/research/self-replicating-ai>), [55](<https://www.bleepingcomputer.com/news/security/anthropic-warns-self-replicating-ai-could-spread-to-your-smart-devices/>)</sup>.
- Anthropic analyzed 250,000 Claude.ai conversations: about 5.75% touch politics or social issues and about 0.01% of US conversations request voting recommendations <sup>[56](<https://www.anthropic.com/news/2026-us-midterms>)</sup>.
- Goodfire's essay "Neural Networks Are Already Clean" argues the superposition explanation for polysemanticity was overstated <sup>[57](<https://already-clean.goodfire.com/>), [5](<https://www.latent.space/p/ainews-agents-disprove-polysemanticity>)</sup>.
- The UK's AI minister is drafting compulsory safety reporting for frontier AI and possibly pre-release model access <sup>[58](<https://www.ft.com/content/ba28b7cd-293e-4eee-a073-ad81aaefced3>)</sup>.
- An arXiv paper shows models can provably hide capabilities via encrypted networks embedded in weights, resisting fine-tuning-based audits <sup>[59](<https://arxiv.org/abs/2610.13928>)</sup>.
- Modal says it crossed $1B annualized run rate and raised a $16B Series D <sup>[60](<https://www.latent.space/p/ainews-modals-1b-arr-16b-series-d>)</sup>. Cohere proposed acquiring AISLE, an autonomous vulnerability-finding company <sup>[61](<https://cohere.com/blog/cohere-and-aisle-sign-letter-of-intent-to-advance-cyber-resilient-sovereign-ai>)</sup>.

## DevOps, Infrastructure and Cloud

- Anthropic redesigned source control: it moved its monorepo off git in five months, built a system called Scion, and went from about 2,500 merged changes per day in May to over 30,000 <sup>[62](<https://www.anthropic.com/engineering/redesigning-source-control>), [63](<https://simonwillison.net/2026/Oct/13/redesigning-source-control-at-anthropic/>)</sup>.
- GitHub is rebuilding Git storage, decoupling writes from reads, with early internal tests showing a 35x write improvement <sup>[64](<https://www.theregister.com/devops/2026/10/09/so-long-spokes-github-rewrites-storage-to-restore-reliability-just-in-time-for-agentic-hordes/5302148>)</sup>. GitHub Actions workflow lockfiles entered public preview, pinning actions to reviewed commits; locking does not verify a dependency is safe <sup>[65](<https://github.blog/changelog/2026-10-14-github-actions-workflow-lockfiles-in-public-preview>)</sup>.
- GitHub's Evergreen app automates quarterly outside-collaborator access reviews <sup>[66](<https://github.blog/engineering/platform-security/staying-evergreen-how-we-automated-secure-access-and-repo-hygiene-in-a-shared-org/>)</sup>. GitHub retired push-event email notifications on October 15, 2026 <sup>[67](<https://github.blog/changelog/2026-10-15-email-notifications-for-repository-push-events-have-been-retired>)</sup>.
- Cloudflare describes how D1 scales its control plane to millions of databases <sup>[68](<https://blog.cloudflare.com/d1-control-plane/>)</sup> and says its pipeline handles about two billion events per second <sup>[69](<https://blog.cloudflare.com/rewinding-the-exponential/>)</sup>. Hyperdrive reached GA for MySQL after a caching bug was fixed in beta <sup>[70](<https://blog.cloudflare.com/hyperdrive-mysql/>)</sup>.
- AWS announced Lambda Web Functions, running standard HTTP apps without rewrites, with up to 128 concurrent requests per environment <sup>[71](<https://aws.amazon.com/blogs/aws/announcing-aws-lambda-web-functions-for-fast-consistent-web-app-performance-anywhere/>)</sup>. S3 can be provisioned directly from the Vercel Marketplace <sup>[72](<https://aws.amazon.com/blogs/aws/amazon-s3-vercel-marketplace-v0/>)</sup>.
- NVIDIA open-sourced the full Run:ai platform, including KAI Scheduler <sup>[73](<https://developer.nvidia.com/blog/nvidia-runai-is-now-open-source-as-part-of-nvidia-dsx-ai-factory-platform>)</sup>. Google's Apigee hybrid 1.17.0 runs an MCP data plane inside your own cluster <sup>[74](<https://developers.googleblog.com/announcing-mcp-support-in-apigee-hybrid-agentic-tools-that-run-in-your-own-cluster/>)</sup>. Google released a second edition of its SRE book covering LLM operations <sup>[75](<https://cloud.google.com/blog/products/devops-sre/sre-book-second-edition/>)</sup>.
- Pinecone BYOC added an on-demand capacity mode with shared pools and dynamic sharding <sup>[76](<https://www.pinecone.io/blog/byoc-on-demand/>)</sup>. Netflix described detecting faulty GPUs and network hardware and keeping training jobs alive through failures <sup>[77](<https://netflixtechblog.com/reliable-gpu-compute-for-large-training-inference-jobs-d62b03a96d7a>)</sup>.
- Meta uses opportunistic idle inference capacity for ads ranking and stronger-model routing <sup>[78](<https://engineering.fb.com/2026/10/12/ml-applications/turning-opportunistic-ai-inference-capacity-into-better-ads-recommendations/>)</sup>. vLLM added a push-based NIXL connector for disaggregated inference <sup>[79](<https://vllm.ai/blog/2026-10-14-nixl-push-connector>)</sup>.
- DigitalOcean MicroVMs are in public preview, and its Managed Agents use Firecracker microVMs resuming in under 200 ms at p50 <sup>[80](<https://www.digitalocean.com/blog/microvms-public-preview>), [81](<https://www.digitalocean.com/blog/microvm-architecture>)</sup>.
- A 2026 Kubernetes report says AKS CPU utilization is 8% and memory 20% <sup>[82](<https://cloudnativenow.com/features/aks-is-growing-along-with-its-kubernetes-utilization-problem/>)</sup>. Let's Encrypt begins issuing 64-day certificates on October 14 <sup>[83](<https://scotthelme.co.uk/the-first-reduction-in-their-history-64-day-lets-encrypt-certificates/>)</sup>.
- GitHub's Xcode 27 runner image is generally available <sup>[84](<https://github.blog/changelog/2026-10-15-xcode-27-runner-image-generally-available>)</sup>.

## Data, Databases and Engineering

- LinkedIn's data context layer raised acceptable answers in one agent test from 25.9% to 79.5% <sup>[85](<https://www.linkedin.com/blog/engineering/infrastructure/inside-linkedins-data-context-layer-curating-trustworthy-context-for-humans-and-agents>)</sup>. Netflix uses an ontology-driven knowledge graph to make observability and service topology queryable together <sup>[86](<https://www.infoq.com/presentations/netflix-observability-aiops-ontology-scale>)</sup>.
- Salesforce cut weekly Spark compute costs by 31% by sizing workloads to measured usage <sup>[87](<https://engineering.salesforce.com/apache-spark-resource-optimization-lessons-from-eight-million-jobs-a-day/>)</sup>. Elastic describes a context engine aimed at cutting agent token use by 71% <sup>[88](<https://www.elastic.co/search-labs/blog/context-engineering-for-agents>)</sup>.
- DuckDB's CLI detects AI agent use, switching to compact output, and cut agent token reads by about 60% across 132 TPC-H runs <sup>[89](<https://duckdb.org/2026/10/09/agent-mode>)</sup>. DuckDB benchmarked v2.0-dev on NVIDIA Vera against Xeon 6 <sup>[90](<https://duckdb.org/2026/10/16/nvidia-vera-benchmark.html>)</sup>, and read_json can now turn a JSON column directly into typed columns <sup>[91](<https://duckdb.org/2026/10/16/json-to-typed-columns.html>)</sup>.
- Apache Fluss's "Streamhouse" proposes one logical table covering streaming, serving and analytics <sup>[92](<https://ipolyzos.substack.com/p/what-defines-the-streamhouse-architecture>)</sup>.
- Five PostgreSQL benchmarks show unnecessary deduplication, CTE materialization and unindexed expressions can slow queries sharply <sup>[93](<https://explainmeasured.com/posts/queries-doing-extra-work/>)</sup>. A logical-replication walkthrough reports a major upgrade with 181 ms of write interruption and no data loss <sup>[94](<https://tapoueh.org/blog/2026/10/zero-downtime-postgres-upgrades-with-logical-replication>)</sup>.
- Eight to ten features were pulled from Postgres 19 during beta <sup>[95](<https://peter.eisentraut.org/blog/2026/10/09/the-reverts-will-continue-until-morale-improves>)</sup>. Neki coordinates sequence allocation across shards so distributed queries do not produce duplicate IDs <sup>[96](<https://planetscale.com/blog/neki-volatile-expressions>)</sup>.
- SQLBuild checks contracts and lineage before SQL runs across Snowflake, Postgres, BigQuery and Databricks <sup>[97](<https://github.com/chio-labs/sqlbuild>)</sup>. Atlassian built an OCSF security lakehouse on Databricks normalizing 44 billion daily events <sup>[98](<https://www.databricks.com/blog/reducing-noise-how-atlassian-built-ocsf-security-lakehouse-databricks>)</sup>.
- A MonetDB count-distinct query saturated an NVMe drive with writes, cutting runtime from 73 minutes to 97 seconds by moving scratch files to tmpfs <sup>[99](<https://swingbit.github.io/dirty_pages/>)</sup>.
- Redis added compressed Roaring bitmaps <sup>[100](<https://lemire.me/blog/2026/10/15/redis-now-has-compressed-bitmaps-roaring/>)</sup>. A benchmark parsed 7.6 GB of JSON in about 0.12 seconds on 64 cores with free-threaded Python <sup>[101](<https://lemire.me/blog/2026/10/12/parsing-json-at-tens-of-gigabytes-per-second-in-python/>)</sup>.

## Security

- Ivanti warned of actively exploited Connect Secure zero-days, an auth bypass chained with two others to run commands as root <sup>[102](<https://www.bleepingcomputer.com/news/security/ivanti-warns-of-connect-secure-zero-day-exploited-in-attacks/>)</sup>. Cisco's Secure Email Gateway has an actively exploited zero-day, CVE-2026-76519, rated CVSS 9.8 <sup>[103](<https://www.theregister.com/security/2026/10/14/cisco-make-me-root-email-bug-exploited-as-a-0-day-by-unknown-crims/5303168>)</sup>.
- A Linux vhost bug, CVE-2026-74580 (CVSS 8.8), lets any user with access to /dev/vhost-net or /dev/vhost-vsock escalate to root on kernels 4.11 through 7.2; patch or remove world access <sup>[104](<https://matrix.tencent.com/en/2026/10/12/vghost-cve-2026-74580>)</sup>.
- A flaw in Claude Code Desktop's preview pane let malicious HTML run when a developer asked Claude to review a repository, chaining weaknesses to steal credentials; Anthropic patched it after a bypass of the first fix <sup>[105](<https://www.darkreading.com/threat-intelligence/new-anthropic-sneakpeek-silent-zero-click-threat>)</sup>.
- Chrome 155 fixed 37 flaws, at least 15 reported by Anthropic with Claude's help <sup>[106](<https://www.securityweek.com/chrome-firefox-updates-patch-114-flaws-as-mozilla-unveils-firefox-enterprise/>)</sup>. XBOW's agents built a Chrome full chain in six days for about $40,000 in API costs <sup>[107](<https://xbow.com/labs/research/zero-to-calc-in-six-days-inside-xbow-chrome-full-chain>)</sup>.
- GitLab fixed CVE-2026-97229, a CVSS 10.0 CI/CD regex overflow letting unauthenticated users run code on the server <sup>[108](<https://thehackernews.com/2026/10/gitlab-patches-cvss-100-flaw-that-could.html>)</sup>. Ghostscript flaws could allow RCE via crafted PDFs <sup>[109](<https://www.bleepingcomputer.com/news/security/ghostscript-flaw-lets-hackers-hijack-servers-via-pdf-uploads/>)</sup>. Drupal fixed critical CVE-2026-108097 in Field UI <sup>[110](<https://thehackernews.com/2026/10/drupal-patches-critical-core-rce-flaw.html>)</sup>.
- curl 8.23.0 patched CVE-2026-92392, an HTTP/2 use-after-free rated below critical by maintainers <sup>[111](<https://daniel.haxx.se/blog/2026/10/14/a-uaf-turned-rce/>)</sup>. Discourse fixed CVE-2026-55420, an ImageMagick upload flaw <sup>[112](<https://gbhackers.com/discourse-imagemagick-vulnerability-enables-arbitrary-file-read-through-malicious-image-uploads>)</sup>. Weaviate fixed a nearObject authorization flaw <sup>[113](<https://weaviate.io/blog/weaviate-security-release-nearobject-2026>)</sup>.
- Three OAuth account takeovers stemmed from auto-linking sign-ins to existing accounts by email; match on issuer and subject ID instead <sup>[114](<https://workos.com/blog/oauth-auto-link-email-account-takeover>)</sup>. Datadog showed a planted "counterfeit policy" could cut prompt-injection recall from 82.90% to 3.88% <sup>[115](<https://securitylabs.datadoghq.com/articles/jev-as-a-judge-how-counterfeit-policy-steers-jev/>)</sup>.
- Racket's Apple and Windows signing keys were exposed after a crypto miner ran on a compromised build server, and both were rotated <sup>[116](<https://blog.racket-lang.org/2026/10/infrastructure-compromise.html>)</sup>. Meta says hackers took code and data of about 1,500 people in a GitHub breach <sup>[117](<https://www.securityweek.com/meta-says-hackers-took-code-personal-data-of-1500-in-github-breach/>)</sup>.
- Citizen Lab reports spyware vendors used an ad platform to infect at least 45 Al Jazeera computers in 2024–2025 <sup>[118](<https://techcrunch.com/2026/10/15/citizen-lab-says-governments-are-abusing-online-ads-to-hack-people-with-zero-click-spyware/>)</sup>. Hackers altered refrigeration controllers at European supermarkets, forcing freezers into defrost <sup>[119](<https://www.securityweek.com/refrigeration-controller-hack-spoils-food-across-european-supermarkets/>)</sup>.
- Docker Hub fixed an identity flaw that could transfer personal access tokens during account conversions <sup>[120](<https://www.docker.com/blog/docker-hub-security-advisory-cve-2026-105445/>)</sup>. Telegram Desktop 7.2.8 and earlier allowed one-click session cloning; update to 7.2.9 <sup>[121](<https://hackingpassion.com/telegram-desktop-one-click-account-takeover/>)</sup>. A GhostAction phishing kit relayed maintainers' passwords and TOTP codes <sup>[122](<https://opensourcemalware.com/blog/ghostaction-phishing-campaign>)</sup>.
- Datadog found credential-harvesting platforms test exposed AWS keys against Bedrock <sup>[123](<https://securitylabs.datadoghq.com/articles/beyond-valid-credentials-how-exposed-aws-keys-are-tested-for-amazon-bedrock-access/>)</sup>.

## Developer Tools and Software Engineering

- Google's Gemini 4 Argon ran unattended on a 205,000-line Python codebase, cutting ADK session prep time by about 40% in an 11-hour run <sup>[124](<https://developers.googleblog.com/optimizing-a-200000-line-python-codebase-overnight-with-gemini-4-argon/>)</sup>.
- GitHub's push attribution in public preview records the authenticated pusher of each commit and blocks forged metadata <sup>[125](<https://github.blog/changelog/2026-10-12-push-attribution-public-preview>)</sup>. Secret scanning now blocks Anthropic API keys by default <sup>[126](<https://github.blog/changelog/2026-10-13-secret-scanning-blocks-anthropic-keys-by-default-adds-salesforce>)</sup>.
- GitHub reconstructed star history without exposing stargazers, cutting requests from about 2,500 to 24 <sup>[127](<https://github.blog/engineering/architecture-optimization/from-2500-requests-to-24-rebuilding-star-history-without-the-stargazers/>)</sup>. A post warns influencers can make repositories look widely used, undermining stars as a signal <sup>[128](<https://avdi.codes/lies-damn-lies-and-github-stars/>)</sup>.
- Robert C. Martin suggests relying on constraints such as unit tests and QA rather than reading AI-written code <sup>[129](<https://blog.ploeh.dk/2026/10/12/releasing-ai-generated-software/>)</sup>. An essay proposes AI code review will increasingly replace reading every diff <sup>[130](<https://scienceisneato.substack.com/p/human-pr-review-is-next>)</sup>.
- Anthropic's Frontier Red Team used Claude to settle the origin of the NIST ECDSA curve seeds, concluding they were timestamps <sup>[131](<https://www.anthropic.com/research/ecdsa-curve-origins>)</sup>. Developers are using Claude to reverse engineer USB hardware, with humans verifying on real devices <sup>[132](<https://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/>)</sup>.
- Tech companies are building internal "vibe-coding" apps for non-engineers, which reportedly see higher adoption than vendor products <sup>[133](<https://blog.pragmaticengineer.com/the-pulse-new-trend-of-building-internal-vibe-coding-apps-at-tech-companies/>)</sup>.
- Sphinx is an open-source Git hook that pauses a push and asks the developer a question about how the diff behaves under failure conditions <sup>[134](<https://sphinx-six-theta.vercel.app/>)</sup>.
- Google's adk-recipes repo organizes ADK resources into core, plugins and contrib layers <sup>[135](<https://developers.googleblog.com/three-layers-one-repo-a-tour-of-googleadk-recipes/>)</sup>. Rust 1.99.1 fixes regressions including a missing wcslen symbol breaking some UEFI targets <sup>[136](<https://blog.rust-lang.org/2026/10/15/Rust-1.99.1/>)</sup>.
- Meta's Instagram Live moved live ingest to the open Media over QUIC standard, which Meta says matched its in-house protocol in testing <sup>[137](<https://engineering.fb.com/2026/10/12/video-engineering/shipping-media-over-quic-at-meta-scale-for-instagram-live-ingest/>)</sup>. TanStack Start 1.0 is stable <sup>[138](<https://tanstack.com/blog/tanstack-start-1-0>)</sup>. Google's DPoP support for OAuth sender-constrains refresh tokens <sup>[139](<https://developers.googleblog.com/announcing-dpop-support-for-google-oauth-securing-refresh-tokens/>)</sup>.
- Google Quantum AI demonstrated magic state cultivation on its Willow processor, reporting a 40-fold error reduction <sup>[140](<https://blog.google/innovation-and-ai/models-and-research/quantum-computing/magic-state-cultivation-quantum-computing/>)</sup>.
- Synopsys describes orchestrated task agents turning specifications into verified RTL, with humans defining architecture <sup>[141](<https://semiengineering.com/how-close-are-we-to-fully-autonomous-chip-design/>)</sup>.

## Sources

1. [Muse Spark Is Now an Open-Weights Model](<https://pytorch.org/blog/muse-spark-open/>) — _pytorch.org_
2. [Muse Spark Open](<https://research.meta.ai/blog/muse-spark-open>) — _research.meta.ai_
3. [Meta unveils Muse Spark Open, the new top US open weights model — and it runs on two paired Mac desktops](<https://venturebeat.com/technology/meta-unveils-muse-spark-open-the-new-top-u-s-open-weights-model-and-it-runs-on-two-paired-mac-desktops>) — _venturebeat.com_
4. [\[AINews\] High Taste Testers Ep. 1](<https://www.latent.space/p/ainews-high-taste-testers-ep-1>) — _latent.space_
5. [\[AINews\] Agents disprove Polysemanticity; greatly improve Interpretability & Alignment](<https://www.latent.space/p/ainews-agents-disprove-polysemanticity>) — _latent.space_
6. [Meta's Muse Spark open-weight release Is Now in Limited Preview on GroqCloud](<https://groq.com/blog/meta-s-muse-spark-open-release-is-now-in-limited-preview-on-groqcloud>) — _groq_
7. [Google makes Gemini 4 Argon broadly available with limited-time low API pricing of 2/10 per 1M token](<https://venturebeat.com/technology/google-makes-gemini-4-argon-broadly-available-with-limited-time-low-api-pricing-of-2-10-per-1m-token>) — _venturebeat.com_
8. [Gemini 4 Argon Lands on Google Cloud](<https://cloud.google.com/blog/products/ai-machine-learning/gemini-4-argon-available-on-google-cloud>) — _cloud.google.com_
9. [llm-gemini 0.35](<https://simonwillison.net/2026/Oct/13/llm-gemini/>) — _simonwillison.net_
10. [Gemini 4 Argon in GitHub Copilot](<https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot>) — _github.blog_
11. [Gemini 4 Argon for Robotics](<https://deepmind.google/blog/gemini-4-argon-for-robotics/>) — _deepmind.google_
12. [Muse Wonder](<https://research.meta.ai/blog/muse-wonder>) — _research.meta.ai_
13. [\[AINews\] Meta Muse Wonder & Wonder Full: MSL’s Claude 5.5-tier Frontier Model](<https://www.latent.space/p/ainews-meta-muse-wonder-and-wonder>) — _latent.space_
14. [Meta launches Muse Wonder and Wonder Full for AI agents](<https://www.testingcatalog.com/meta-launches-muse-wonder-and-wonder-full-for-ai-agents/>) — _testingcatalog.com_
15. [PSA: Starting today, GPT 6.1 Sol has a default context window of 500k](<https://threadreaderapp.com/thread/2109543080609165508.html>) — _threadreaderapp.com_
16. [Higgsfield takes AI video from 1 minute to over 10](<https://openai.com/index/higgsfield-longer-videos-voice>) — _openai.com_
17. [LFM2.5-24B-A2B](<https://www.liquid.ai/blog/lfm2-5-24b-a2b>) — _liquid.ai_
18. [Run fast, private agents on-device with LFM2.5-24B-A2B](<https://huggingface.co/blog/LiquidAI/lfm25-24b-a2b>) — _huggingface.co_
19. [Welcome Beam: a 501B open model you can own, customize, and scale](<https://huggingface.co/blog/reflection-beam>) — _huggingface.co_
20. [Nvidia released Nemotron 3.5 Super VL](<https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/>) — _developer.nvidia.com_
21. [FLUX 3 Image Klein](<https://bfl.ai/blog/flux-3-image-klein>) — _bfl.ai_
22. [Inside Microsoft's Frontier Pre-Training Stack](<https://microsoft.ai/news/frontier-pre-training-at-microsoft-ai/>) — _microsoft.ai_
23. [Introducing Timestral](<https://mistral.ai/news/timestral>) — _mistral_
24. [Microsoft Introduced the Maia 300 AI Chip](<https://news.microsoft.com/maia-2026/>) — _news.microsoft.com_
25. [Microsoft Prepares to Put Gigawatts of Its Chips in Data Centers](<https://www.bloomberg.com/news/articles/2026-10-12/microsoft-prepares-to-put-gigawatts-of-its-chips-in-data-centers>) — _bloomberg.com_
26. [Open weight takes 71.5% of tokens and 23% of spend](<https://vercel.com/blog/ai-gateway-production-index-october-2026>) — _vercel.com_
27. [Anthropic says new safeguards sharply reduce AI distillation attacks](<https://www.reuters.com/world/china/anthropic-says-new-safeguards-sharply-reduce-ai-distillation-attacks-2026-10-13/>) — _reuters.com_
28. [Quoting Addy Osmani, Morgan Westlee Lunt, and Qing Wang](<https://simonwillison.net/2026/Oct/16/code-review/>) — _simonwillison.net_
29. [How the Claude Code team does code review](<https://claude.dev/blog/solving-code-review-at-anthropic/>) — _claude_
30. [Agent observability on the Claude Platform](<https://claude.com/resources/articles/agent-observability-on-the-claude-platform>) — _claude_
31. [Phoenix](<https://github.com/Arize-ai/phoenix>) — _github.com_
32. [Lessons from scaling teams of coding agents: reach the frontier at 30% of the cost](<https://cohere.com/blog/lessons-from-scaling-teams-of-frontier-coding-agents>) — _cohere_
33. [Harbor + Docker Sandboxes: Run Safe, Reproducible Agent Evals](<https://www.docker.com/blog/harbor-docker-sandboxes-run-safe-reproducible-agent-evals/>) — _docker.com_
34. [Are Harnesses Worth the Cost?](<https://martinfowler.com/articles/are-harnesses-worth-the-cost.html>) — _martinfowler.com_
35. [The Most Common Questions About Agent Evals, Answered](<https://www.langchain.com/blog/common-questions-about-agent-evals>) — _langchain.com_
36. [Evaluating AI agents: moving past the vibe check](<https://developers.googleblog.com/evaluating-ai-agents-moving-past-the-vibe-check/>) — _google ai_
37. [Jev handed our LLM the wrong page a tenth as often as our embeddings](<https://sayora.ai/many-hands/jev-vs-embeddings/>) — _sayora.ai_
38. [Hybrid Reasoning Agents: LLM agents that think in latent space, act through text](<https://arxiv.org/abs/2610.18861>) — _hnrss.org_
39. [HydraFusion updates and new Max option](<https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option>) — _github.blog_
40. [Agentic autofix for code scanning alerts general availability](<https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability>) — _github.blog_
41. [One Agent Development Kit, Five Languages](<https://cloud.google.com/blog/topics/developers-practitioners/one-agent-development-kit-five-languages/>) — _cloud.google.com_
42. [Introducing Devin Oncall](<https://devin.ai/blog/introducing-devin-oncall>) — _devin.ai_
43. [Open-sourcing SPACE, the sandbox platform behind Computer](<https://www.perplexity.ai/hub/blog/open-sourcing-space>) — _perplexity.ai_
44. [Pulumi ESC now issues OIDC tokens for any service](<https://www.pulumi.com/blog/esc-oidc-tokens-for-any-service/>) — _pulumi.com_
45. [Google Harness² for Recursive Self Improvement](<https://github.com/google-research/harness2>) — _github.com_
46. [Code Review is now generally available](<https://claude.com/resources/articles/code-review-is-now-generally-available>) — _claude_
47. [The Prompt Is Not the Permission: Securing the Agentic SDLC](<https://vinny.dev/blog/2026-10-12-the-prompt-is-not-the-permission-securing-the-agentic-sdlc/>) — _vinny.dev_
48. [AI Agent Security Risks: What Can Go Wrong When Agents Act on Their Own](<https://www.docker.com/blog/ai-agent-security-risks/>) — _docker.com_
49. [Anthropic opens Singapore office and signs MOU with the Government of Singapore](<https://www.anthropic.com/news/singapore-office-opening>) — _anthropic news_
50. [Investing in the public benefit](<https://www.anthropic.com/news/public-benefit-fund>) — _anthropic news_
51. [Anthropic's proposed AI safety bill only kicks in if 50 deaths or $1B in damages](<https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropics-proposed-ai-safety-bill-only-kicks-in-if-50-deaths-or-usd1-billion-in-damages-are-on-the-line-proposal-would-effectively-make-the-commerce-department-the-only-agency-capable-of-stopping-an-ai-model>) — _hnrss.org_
52. [Anthropic Says Revenue Jumped 45% to $16.8 Billion in Third Quarter](<https://www.nytimes.com/2026/10/14/technology/anthropic-ipo-revenue-profit.html>) — _nytimes.com_
53. [An update on independent evaluators](<https://www.anthropic.com/news/an-update-on-independent-evaluators>) — _anthropic news_
54. [AI models may be capable of self-replicating without access to a datacenter](<https://www.anthropic.com/research/self-replicating-ai>) — _anthropic red_
55. [Anthropic Warns Self-Replicating AI Could Spread to Your Smart Devices](<https://www.bleepingcomputer.com/news/security/anthropic-warns-self-replicating-ai-could-spread-to-your-smart-devices/>) — _bleepingcomputer.com_
56. [Preparing for the 2026 US midterms](<https://www.anthropic.com/news/2026-us-midterms>) — _anthropic news_
57. [Neural Networks Are Already Clean](<https://already-clean.goodfire.com/>) — _already-clean.goodfire.com_
58. [AI Regulation Must Mimic Industrial Revolution Laws](<https://www.ft.com/content/ba28b7cd-293e-4eee-a073-ad81aaefced3>) — _ft.com_
59. [AI models can provably hide arbitrary capabilities](<https://arxiv.org/abs/2610.13928>) — _hnrss.org_
60. [\[AINews\] Modal’s $1B ARR, $16B Series D makes it NYC’s newest AI Infra Decacorn, 3x usage and 3x valuation in 5 months, 15x in 1 yr](<https://www.latent.space/p/ainews-modals-1b-arr-16b-series-d>) — _latent.space_
61. [Cohere and AISLE sign letter of intent to advance cyber-resilient sovereign AI](<https://cohere.com/blog/cohere-and-aisle-sign-letter-of-intent-to-advance-cyber-resilient-sovereign-ai>) — _cohere_
62. [Redesigning source control at Anthropic](<https://www.anthropic.com/engineering/redesigning-source-control>) — _anthropic.com_
63. [Redesigning source control at Anthropic](<https://simonwillison.net/2026/Oct/13/redesigning-source-control-at-anthropic/>) — _simonwillison.net_
64. [So long, Spokes: GitHub rewrites storage to restore reliability, just in time for agentic hordes](<https://www.theregister.com/devops/2026/10/09/so-long-spokes-github-rewrites-storage-to-restore-reliability-just-in-time-for-agentic-hordes/5302148>) — _theregister.com_
65. [GitHub Actions workflow lockfiles in public preview](<https://github.blog/changelog/2026-10-14-github-actions-workflow-lockfiles-in-public-preview>) — _github.blog_
66. [Staying Evergreen: How we automated secure access and repo hygiene in a shared org](<https://github.blog/engineering/platform-security/staying-evergreen-how-we-automated-secure-access-and-repo-hygiene-in-a-shared-org/>) — _github.blog_
67. [Email notifications for repository push events have been retired](<https://github.blog/changelog/2026-10-15-email-notifications-for-repository-push-events-have-been-retired>) — _github.blog_
68. [Under the hood, off the hot path: How D1 scales to millions of databases](<https://blog.cloudflare.com/d1-control-plane/>) — _blog.cloudflare.com_
69. [Rewinding the exponential: How we keep hardware usage down](<https://blog.cloudflare.com/rewinding-the-exponential/>) — _blog.cloudflare.com_
70. [Inside Hyperdrive: How we solved a rare Hyperdrive MySQL caching bug](<https://blog.cloudflare.com/hyperdrive-mysql/>) — _blog.cloudflare.com_
71. [Announcing AWS Lambda Web Functions](<https://aws.amazon.com/blogs/aws/announcing-aws-lambda-web-functions-for-fast-consistent-web-app-performance-anywhere/>) — _aws.amazon.com_
72. [Amazon S3 is now available on the Vercel Marketplace and v0 by Vercel](<https://aws.amazon.com/blogs/aws/amazon-s3-vercel-marketplace-v0/>) — _aws.amazon.com_
73. [NVIDIA Run:ai Is Now Open Source as Part of NVIDIA DSX AI Factory Platform](<https://developer.nvidia.com/blog/nvidia-runai-is-now-open-source-as-part-of-nvidia-dsx-ai-factory-platform>) — _developer.nvidia.com_
74. [Announcing MCP support in Apigee hybrid: agentic tools that run in your own cluster](<https://developers.googleblog.com/announcing-mcp-support-in-apigee-hybrid-agentic-tools-that-run-in-your-own-cluster/>) — _google ai_
75. [SRE book second edition](<https://cloud.google.com/blog/products/devops-sre/sre-book-second-edition/>) — _cloud.google.com_
76. [On-demand mode for Pinecone BYOC](<https://www.pinecone.io/blog/byoc-on-demand/>) — _pinecone_
77. [How Netflix Keeps Large GPU Jobs Running](<https://netflixtechblog.com/reliable-gpu-compute-for-large-training-inference-jobs-d62b03a96d7a>) — _netflixtechblog.com_
78. [Turning Opportunistic AI Inference Capacity Into Better Ads Recommendations](<https://engineering.fb.com/2026/10/12/ml-applications/turning-opportunistic-ai-inference-capacity-into-better-ads-recommendations/>) — _engineering.fb.com_
79. [Push-Based KV Transfer to Improve TTFT and TPOT for Disaggregated Inference in vLLM](<https://vllm.ai/blog/2026-10-14-nixl-push-connector>) — _vllm.ai_
80. [DigitalOcean MicroVMs: Fast, isolated compute for your AI agent infrastructure](<https://www.digitalocean.com/blog/microvms-public-preview>) — _digitalocean.com_
81. [Building a computer that can pause and resume in milliseconds: Inside the MicroVM architecture behind Managed Agents](<https://www.digitalocean.com/blog/microvm-architecture>) — _digitalocean.com_
82. [AKS Is Growing – Along With Its Kubernetes Utilization Problem](<https://cloudnativenow.com/features/aks-is-growing-along-with-its-kubernetes-utilization-problem/>) — _cloudnativenow.com_
83. [The First Reduction in Their History: 64-Day Let's Encrypt Certificates](<https://scotthelme.co.uk/the-first-reduction-in-their-history-64-day-lets-encrypt-certificates/>) — _scotthelme.co.uk_
84. [Xcode 27 runner image generally available](<https://github.blog/changelog/2026-10-15-xcode-27-runner-image-generally-available>) — _github.blog_
85. [Inside LinkedIn's data context layer: curating trustworthy context for humans and agents](<https://www.linkedin.com/blog/engineering/infrastructure/inside-linkedins-data-context-layer-curating-trustworthy-context-for-humans-and-agents>) — _linkedin.com_
86. [Ontology‐Driven Observability: Building the E2E Knowledge Graph at Netflix Scale (51 minute video)](<https://www.infoq.com/presentations/netflix-observability-aiops-ontology-scale>) — _infoq.com_
87. [Apache Spark Resource Optimization: Lessons From Eight Million Jobs a Day](<https://engineering.salesforce.com/apache-spark-resource-optimization-lessons-from-eight-million-jobs-a-day/>) — _engineering.salesforce.com_
88. [How we're building a context engine to cut agent token use by 71%](<https://www.elastic.co/search-labs/blog/context-engineering-for-agents>) — _elastic.co_
89. [Agent Mode in the DuckDB CLI](<https://duckdb.org/2026/10/09/agent-mode>) — _duckdb.org_
90. [Benchmarking DuckDB v2.0-dev on NVIDIA Vera](<https://duckdb.org/2026/10/16/nvidia-vera-benchmark.html>) — _duckdb.org_
91. [From JSON Strings to Typed Columns](<https://duckdb.org/2026/10/16/json-to-typed-columns.html>) — _duckdb.org_
92. [What Defines The Streamhouse Architecture?](<https://ipolyzos.substack.com/p/what-defines-the-streamhouse-architecture>) — _ipolyzos.substack.com_
93. [Five PostgreSQL queries that did more work than I asked for](<https://explainmeasured.com/posts/queries-doing-extra-work/>) — _explainmeasured.com_
94. [Zero-downtime Postgres upgrades with logical replication](<https://tapoueh.org/blog/2026/10/zero-downtime-postgres-upgrades-with-logical-replication>) — _tapoueh.org_
95. [The reverts will continue until morale improves](<https://peter.eisentraut.org/blog/2026/10/09/the-reverts-will-continue-until-morale-improves>) — _peter.eisentraut.org_
96. [Sequences and Other Volatiles in Neki](<https://planetscale.com/blog/neki-volatile-expressions>) — _planetscale.com_
97. [SQLBuild: safe refactoring for warehouse SQL](<https://github.com/chio-labs/sqlbuild>) — _github.com_
98. [Reducing the noise: How Atlassian built an OCSF security lakehouse on Databricks](<https://www.databricks.com/blog/reducing-noise-how-atlassian-built-ocsf-security-lakehouse-databricks>) — _databricks.com_
99. [The Dirty Pages Surprise: When a Read-Only Query Writes Terabytes](<https://swingbit.github.io/dirty_pages/>) — _swingbit.github.io_
100. [Redis now has compressed bitmaps (Roaring)](<https://lemire.me/blog/2026/10/15/redis-now-has-compressed-bitmaps-roaring/>) — _lemire.me_
101. [Parsing JSON at tens of gigabytes per second… in Python](<https://lemire.me/blog/2026/10/12/parsing-json-at-tens-of-gigabytes-per-second-in-python/>) — _lemire.me_
102. [Ivanti Warns of Connect Secure Zero-Days Exploited in Attacks](<https://www.bleepingcomputer.com/news/security/ivanti-warns-of-connect-secure-zero-day-exploited-in-attacks/>) — _bleepingcomputer.com_
103. [Cisco make-me-root email bug exploited as a 0-day by unknown crims](<https://www.theregister.com/security/2026/10/14/cisco-make-me-root-email-bug-exploited-as-a-0-day-by-unknown-crims/5303168>) — _theregister.com_
104. [Vghost: Beyond the Privilege Boundary](<https://matrix.tencent.com/en/2026/10/12/vghost-cve-2026-74580>) — _matrix.tencent.com_
105. [Anthropic 'SneakPeek' Flaw Is a Silent Zero-Click Threat](<https://www.darkreading.com/threat-intelligence/new-anthropic-sneakpeek-silent-zero-click-threat>) — _darkreading.com_
106. [Chrome, Firefox Updates Patch 114 Flaws as Mozilla Unveils Firefox Enterprise](<https://www.securityweek.com/chrome-firefox-updates-patch-114-flaws-as-mozilla-unveils-firefox-enterprise/>) — _securityweek.com_
107. [Zero to Calc in Six Days: Inside XBOW's Chrome Full Chain](<https://xbow.com/labs/research/zero-to-calc-in-six-days-inside-xbow-chrome-full-chain>) — _xbow.com_
108. [GitLab Patches CVSS 10.0 Flaw That Could Let Unauthenticated Users Run Server Code](<https://thehackernews.com/2026/10/gitlab-patches-cvss-100-flaw-that-could.html>) — _thehackernews.com_
109. [Ghostscript Flaw Lets Hackers Hijack Servers via PDF Uploads](<https://www.bleepingcomputer.com/news/security/ghostscript-flaw-lets-hackers-hijack-servers-via-pdf-uploads/>) — _bleepingcomputer.com_
110. [Drupal Patches Critical Field UI Flaw With Unauthenticated RCE Path via Contributed Modules](<https://thehackernews.com/2026/10/drupal-patches-critical-core-rce-flaw.html>) — _thehackernews.com_
111. [A UAF turned RCE](<https://daniel.haxx.se/blog/2026/10/14/a-uaf-turned-rce/>) — _daniel.haxx.se_
112. [Discourse ImageMagick Vulnerability Enables Arbitrary File Read Through Malicious Image Uploads](<https://gbhackers.com/discourse-imagemagick-vulnerability-enables-arbitrary-file-read-through-malicious-image-uploads>) — _gbhackers.com_
113. [Weaviate security release - Medium severity fix for a cross-collection vector disclosure in nearObject (CVE pending assignment)](<https://weaviate.io/blog/weaviate-security-release-nearobject-2026>) — _weaviate_
114. [Three OAuth account takeovers, one bug: Auto-linking by email](<https://workos.com/blog/oauth-auto-link-email-account-takeover>) — _workos.com_
115. [Jev as a judge: How counterfeit policy steers Jev](<https://securitylabs.datadoghq.com/articles/jev-as-a-judge-how-counterfeit-policy-steers-jev/>) — _securitylabs.datadoghq.com_
116. [Racket Infrastructure Compromise](<https://blog.racket-lang.org/2026/10/infrastructure-compromise.html>) — _blog.racket-lang.org_
117. [Meta Says Hackers Took Code and Personal Data of 1500 People in GitHub Breach](<https://www.securityweek.com/meta-says-hackers-took-code-personal-data-of-1500-in-github-breach/>) — _securityweek.com_
118. [Citizen Lab says governments are abusing online ads to hack people with ‘zero-click' spyware](<https://techcrunch.com/2026/10/15/citizen-lab-says-governments-are-abusing-online-ads-to-hack-people-with-zero-click-spyware/>) — _techcrunch.com_
119. [Refrigeration Controller Hack Spoils Food Across European Supermarkets](<https://www.securityweek.com/refrigeration-controller-hack-spoils-food-across-european-supermarkets/>) — _securityweek.com_
120. [Docker Hub security advisory: personal access tokens transferred during account-to-organization conversions](<https://www.docker.com/blog/docker-hub-security-advisory-cve-2026-105445/>) — _docker.com_
121. [Telegram Desktop One Click Account Takeover](<https://hackingpassion.com/telegram-desktop-one-click-account-takeover/>) — _hackingpassion.com_
122. [GhostAction Phishing Campaign](<https://opensourcemalware.com/blog/ghostaction-phishing-campaign>) — _opensourcemalware.com_
123. [Beyond Valid Credentials: How Exposed AWS Keys are Tested for Bedrock Access](<https://securitylabs.datadoghq.com/articles/beyond-valid-credentials-how-exposed-aws-keys-are-tested-for-amazon-bedrock-access/>) — _securitylabs.datadoghq.com_
124. [Optimizing a 200,000-line Python codebase overnight with Gemini 4 Argon](<https://developers.googleblog.com/optimizing-a-200000-line-python-codebase-overnight-with-gemini-4-argon/>) — _google ai_
125. [Push attribution for commits in limited public preview](<https://github.blog/changelog/2026-10-12-push-attribution-public-preview>) — _github.blog_
126. [Secret scanning blocks Anthropic keys by default, adds Salesforce](<https://github.blog/changelog/2026-10-13-secret-scanning-blocks-anthropic-keys-by-default-adds-salesforce>) — _github.blog_
127. [From 2,500 requests to 24: Rebuilding star history without the stargazers](<https://github.blog/engineering/architecture-optimization/from-2500-requests-to-24-rebuilding-star-history-without-the-stargazers/>) — _github.blog_
128. [Lies, Damn Lies, and GitHub Stars](<https://avdi.codes/lies-damn-lies-and-github-stars/>) — _avdi.codes_
129. [Releasing AI-generated software](<https://blog.ploeh.dk/2026/10/12/releasing-ai-generated-software/>) — _blog.ploeh.dk_
130. [Human PR Review Is Next](<https://scienceisneato.substack.com/p/human-pr-review-is-next>) — _scienceisneato.substack.com_
131. [Claude reveals ECDSA curve origins](<https://www.anthropic.com/research/ecdsa-curve-origins>) — _anthropic red_
132. [Using Artificial Intelligence to reverse engineer hardware](<https://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/>) — _blogs.gnome.org_
133. [New trend of building “internal vibe-coding apps” at tech companies](<https://blog.pragmaticengineer.com/the-pulse-new-trend-of-building-internal-vibe-coding-apps-at-tech-companies/>) — _blog.pragmaticengineer.com_
134. [Show HN: Sphinx – A hook that quizzes you on your AI's code before shipping](<https://sphinx-six-theta.vercel.app/>) — _hnrss.org_
135. [Three layers, one repo: a tour of google/adk-recipes](<https://developers.googleblog.com/three-layers-one-repo-a-tour-of-googleadk-recipes/>) — _google ai_
136. [Announcing Rust 1.99.1](<https://blog.rust-lang.org/2026/10/15/Rust-1.99.1/>) — _blog.rust-lang.org_
137. [Shipping Media Over QUIC at Meta Scale for Instagram Live Ingest](<https://engineering.fb.com/2026/10/12/video-engineering/shipping-media-over-quic-at-meta-scale-for-instagram-live-ingest/>) — _engineering.fb.com_
138. [TanStack Start 1.0 Is Stable](<https://tanstack.com/blog/tanstack-start-1-0>) — _tanstack.com_
139. [Announcing DPoP Support for Google OAuth: Securing Refresh Tokens](<https://developers.googleblog.com/announcing-dpop-support-for-google-oauth-securing-refresh-tokens/>) — _google ai_
140. [Bringing the magic: Google breaks open a bottleneck in quantum computing](<https://blog.google/innovation-and-ai/models-and-research/quantum-computing/magic-state-cultivation-quantum-computing/>) — _blog.google_
141. [How Close Are We To Fully Autonomous Chip Design?](<https://semiengineering.com/how-close-are-we-to-fully-autonomous-chip-design/>) — _semiengineering.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-10-18` | 🗓️ Weekly recap | [Read →](news/en/2026-10-18.md) |
| `2026-10-17` | Saturday | [Read →](news/en/2026-10-17.md) |
| `2026-10-16` | Friday | [Read →](news/en/2026-10-16.md) |
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

<sub>[Browse the full archive (126) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
