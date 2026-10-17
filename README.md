# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-10-16
<sub>updated 17 October 2026 at 01:01</sub>

## Models and Open Weights

- Meta released Muse Spark Open, an 816-billion-parameter multimodal open-weight model with 42 billion active parameters and a 1-million-token context window, designed for coding and long-horizon agentic tasks; it can run locally across two Apple M5 Ultra Mac Studios using MLX <sup>[1](<https://venturebeat.com/technology/meta-unveils-muse-spark-open-the-new-top-u-s-open-weights-model-and-it-runs-on-two-paired-mac-desktops>)</sup> <sup>[2](<https://research.meta.ai/blog/muse-spark-open>)</sup>.
- A version of Muse Spark Open shipped today, but it is weaker than Meta's earlier Spark 1.3 model <sup>[3](<https://www.latent.space/p/ainews-agents-disprove-polysemanticity>)</sup>.
- Reflection released Beam-1.0-501B-A23B, a 501-billion-parameter open model <sup>[4](<https://huggingface.co/blog/reflection-beam>)</sup>. Nvidia released Nemotron 3.5 Super VL, a multimodal reasoning model scoring 26.5 on Artificial Analysis' Intelligence Index with fewer output tokens than its predecessor, plus the smaller Nemotron 3.5 Bolt 74B-A9B and near-lossless NVFP4 weights <sup>[5](<https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/>)</sup>.
- Black Forest Labs released FLUX 3 Image Klein, a 5.6-billion-parameter open-weight model for text-to-image, editing, native 4K output and up to 10 reference images <sup>[6](<https://bfl.ai/blog/flux-3-image-klein>)</sup>.
- Microsoft detailed MAI-Base-2, a 2.8-trillion-parameter mixture-of-experts model with 80 billion active parameters, which it said surpassed every open-weight model in its held-out pre-training evaluations <sup>[7](<https://microsoft.ai/news/frontier-pre-training-at-microsoft-ai/>)</sup>.
- Open-weight models now process more than seven in ten tokens on Vercel's AI Gateway and account for nearly a quarter of spend, with their share of spend more than quadrupling since June <sup>[8](<https://vercel.com/blog/ai-gateway-production-index-october-2026>)</sup>.

## Interpretability and Alignment

- Goodfire's essay "Neural Networks Are Already Clean" argues that the superposition explanation for polysemanticity was overstated: much of the apparent arbitrary packing was recursive generalization, so networks can be studied directly, and the outlook for mechanistic interpretability may be better than expected <sup>[3](<https://www.latent.space/p/ainews-agents-disprove-polysemanticity>)</sup> <sup>[9](<https://already-clean.goodfire.com/>)</sup>.
- Anthropic's Frontier Red Team used Claude to settle the decades-old question of where the NIST ECDSA curve seeds came from, concluding they were timestamps, with no action required for users <sup>[10](<https://www.anthropic.com/research/ecdsa-curve-origins>)</sup>.

## Agents and Developer Tooling

- Claude Code's team describes how it reviews code at agent-generated volume, optimizing for the least human review time that does not raise reverts or incidents; merged pull requests more than doubled from June to September while the revert share fell by over 40 percent <sup>[11](<https://claude.dev/blog/solving-code-review-at-anthropic/>)</sup>.
- Docker's 2026 Stack Overflow survey write-up argues that trust is moving from containers to sandboxes for autonomous agents <sup>[12](<https://www.docker.com/blog/stack-overflow-survey-2026-ai-agent-trust/>)</sup>.
- GitHub Copilot in Slack and Microsoft Teams now works across multiple repositories in one conversation, for tasks such as tracking pull requests and investigating issues spanning frontend and backend repos <sup>[13](<https://github.blog/changelog/2026-10-15-copilot-in-slack-and-teams-adds-model-and-repository-updates>)</sup>.
- Perplexity open-sourced SPACE, the sandbox platform behind its Computer product, as a foundation for safer agent systems <sup>[14](<https://www.perplexity.ai/hub/blog/open-sourcing-space>)</sup>.
- Tech companies are building internal "vibe-coding" apps for non-engineers, which the Pragmatic Engineer reports gets higher adoption than vendor products and keeps internal data exposure safer <sup>[15](<https://blog.pragmaticengineer.com/the-pulse-new-trend-of-building-internal-vibe-coding-apps-at-tech-companies/>)</sup>.
- Developers are using Claude to reverse engineer hardware: it can read long USB captures, spot a repeating sequence where one byte changes, propose what that byte means, and write tests to confirm, while humans still decide what to build and verify on real hardware <sup>[16](<https://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/>)</sup>.
- Google's Agent Development Kit now covers Python, Go, TypeScript, Java and Kotlin, all with MCP and A2A support <sup>[17](<https://cloud.google.com/blog/topics/developers-practitioners/one-agent-development-kit-five-languages/>)</sup>.
- Devin Oncall is generally available for investigating and remediating production issues using company-specific skills and memory, with an asynchronous review agent that challenges unsupported diagnoses <sup>[18](<https://devin.ai/blog/introducing-devin-oncall>)</sup>.
- Pulumi ESC can now mint OIDC tokens for any service that accepts them, with tokens expiring within one hour, removing the need to store long-lived API keys <sup>[19](<https://www.pulumi.com/blog/esc-oidc-tokens-for-any-service/>)</sup>.
- Spacelift integrates with Cursor Origin so agent-driven infrastructure changes pass through the same OPA policies and approvals <sup>[20](<https://spacelift.io/blog/spacelift-cursor-origin-integration>)</sup>.
- DigitalOcean's Managed Agents use Firecracker microVMs with checkpointed state, reporting under 200 milliseconds at p50 to resume on the warm-template path <sup>[21](<https://www.digitalocean.com/blog/microvm-architecture>)</sup>.
- Measuring agent work by the human effort and agent spend needed to reach an accepted result, including failed attempts and rescues, is proposed as a more honest productivity metric <sup>[22](<https://cutler.sg/blog/2026-10-measure-agent-review-time>)</sup>.
- Atlassian built an OCSF security lakehouse on Databricks, normalizing 44 billion daily security events and moving from one-to-one alerts to clustered, risk-based signals across 500+ detections <sup>[23](<https://www.databricks.com/blog/reducing-noise-how-atlassian-built-ocsf-security-lakehouse-databricks>)</sup>.

## Enterprise AI in Practice

- Unzer reports integrating AI into three core processes with 60 to 90 percent efficiency gains, including cutting merchant onboarding from 47 to 8 days and adverse media screening from 15 minutes to under 3 <sup>[24](<https://ai-first.ai/podcast/wie-unzer-ki-in-3-kernprozesse-mit-60-90-effizienzgewinn-integriert-hat>)</sup>.
- IBM's Lisa Precht says IBM saved $4.5 billion with AI, emphasizing that running agents in production is harder than prototyping, that governance must live in the system, and that small specialized models suit some tasks better <sup>[25](<https://ai-first.ai/podcast/wie-ibm-mit-ki-4-5-milliarden-dollar-einsparte>)</sup>.
- An Anthropic Japan business development representative describes running a fleet of Claude Managed Agents to prepare lead qualification, bilingual emails and CRM updates before his day starts <sup>[26](<https://claude.com/resources/articles/how-an-anthropic-japan-business-development-representative-runs-his-day>)</sup>.

## Security

- A flaw in Claude Code Desktop's preview pane let malicious HTML in a public repository run when a developer asked Claude to review it, chaining weaknesses to steal cloud, Git and OAuth credentials; Anthropic patched it after a bypass of the first fix <sup>[27](<https://www.darkreading.com/threat-intelligence/new-anthropic-sneakpeek-silent-zero-click-threat>)</sup>.
- curl 8.23.0 patched CVE-2026-92392, an HTTP/2 use-after-free that could lead to remote code execution, rated below CRITICAL by maintainers because exploitation needs a roughly 135 KB upload and allocation-dependent conditions <sup>[28](<https://daniel.haxx.se/blog/2026/10/14/a-uaf-turned-rce/>)</sup>.
- Datadog researchers showed a "counterfeit policy" injected into a user-editable profile field could cut Jev's prompt-injection recall from 82.90% to 3.88%, so user-controlled fields reaching a classifier should be treated as attack surface, with hard authorization checks kept outside the model <sup>[29](<https://securitylabs.datadoghq.com/articles/jev-as-a-judge-how-counterfeit-policy-steers-jev/>)</sup>.
- Citizen Lab reports that spyware vendors Candiru and Bindecy used Discover-Tech's Controlium ad platform to target people through online ads, infecting at least 45 Al Jazeera Windows computers in 2024–2025 <sup>[30](<https://techcrunch.com/2026/10/15/citizen-lab-says-governments-are-abusing-online-ads-to-hack-people-with-zero-click-spyware/>)</sup>.
- Cisco's Secure Email Gateway has an actively exploited zero-day, CVE-2026-76519, rated CVSS 9.8 <sup>[31](<https://www.theregister.com/security/2026/10/14/cisco-make-me-root-email-bug-exploited-as-a-0-day-by-unknown-crims/5303168>)</sup>.
- Drupal fixed CVE-2026-108097, a critical Field UI flaw that can lead to unauthenticated remote code execution through contributed modules <sup>[32](<https://thehackernews.com/2026/10/drupal-patches-critical-core-rce-flaw.html>)</sup>.

## Data, Infrastructure and Cloud

- DuckDB benchmarked a v2.0 development build on NVIDIA's Vera chip (88 Olympus cores, up to 1.2 TB/s memory bandwidth) against an Intel Xeon 6 baseline, running the full TPC-H benchmark at scale factor 1,000 on two Ubuntu 26.04 machines with 768 GB RAM <sup>[33](<https://duckdb.org/2026/10/16/nvidia-vera-benchmark.html>)</sup>.
- DuckDB's read_json can now turn a JSON text column directly into typed columns in SQL, avoiding a round trip through a file <sup>[34](<https://duckdb.org/2026/10/16/json-to-typed-columns.html>)</sup>.
- Redis now includes compressed Roaring bitmaps, which store sparse integer sets in little space <sup>[35](<https://lemire.me/blog/2026/10/15/redis-now-has-compressed-bitmaps-roaring/>)</sup>.
- CoreWeave has taken on more than $51 billion of debt and obligations for its AI infrastructure, and its five-year credit default swap spreads have soared, signaling investor concern about AI debt <sup>[36](<https://www.cnbc.com/2026/10/15/coreweave-credit-default-swaps-hit-distress-levels-as-investors-sour-on-ai-debt.html>)</sup>.
- Amazon S3, including S3 Tables and S3 Vectors, can be provisioned directly from the Vercel Marketplace and v0 at standard S3 pricing <sup>[37](<https://aws.amazon.com/blogs/aws/amazon-s3-vercel-marketplace-v0/>)</sup>.
- GitHub's Xcode 27 runner image is generally available for building and testing Apple apps on Apple Silicon runners <sup>[38](<https://github.blog/changelog/2026-10-15-xcode-27-runner-image-generally-available>)</sup>.
- GitHub open source license compliance is generally available for GitHub Enterprise Cloud, enforcing an enterprise-wide license policy through a ruleset condition on pull requests <sup>[39](<https://github.blog/changelog/2026-10-16-open-source-license-compliance-generally-available>)</sup>.
- Neki coordinates sequence allocation across shards in its router, preserving how often volatile expressions run so distributed PostgreSQL queries do not produce duplicate IDs <sup>[40](<https://planetscale.com/blog/neki-volatile-expressions>)</sup>.

## Robotics and Hardware Research

- Google Quantum AI demonstrated magic state cultivation on its Willow processor, reporting a 40-fold reduction in errors for error-corrected magic states <sup>[41](<https://blog.google/innovation-and-ai/models-and-research/quantum-computing/magic-state-cultivation-quantum-computing/>)</sup>.
- Construction Physics examines how robot training data is expensive to collect, and how researchers are trying to gather enough of it to see the scaling gains seen in large language models <sup>[42](<https://www.construction-physics.com/p/how-to-train-your-robot>)</sup>.
- Synopsys describes using orchestrated task agents to turn specifications into verified RTL, while human engineers still define architectures and approve manufacturing <sup>[43](<https://semiengineering.com/how-close-are-we-to-fully-autonomous-chip-design/>)</sup>.

## Engineering Culture and Careers

- Weli.dev argues that job seekers face a cost pressure because every job expects AI use, but using AI costs money <sup>[44](<https://weli.dev/blog/the-cost-of-getting-a-job-today/>)</sup>.
- A post on GitHub stars warns that influencers can make repositories look widely used when they are not, undermining the signal stars once provided <sup>[45](<https://avdi.codes/lies-damn-lies-and-github-stars/>)</sup>.
- An essay argues that cheaper code generation could push software agencies from selling development hours toward domain expertise, product judgment and accountability for outcomes <sup>[46](<https://efp.asia/blog/2026/10/15/code-is-a-commodity-now/>)</sup>.

## Sources

1. [Meta unveils Muse Spark Open, the new top US open weights model — and it runs on two paired Mac desktops](<https://venturebeat.com/technology/meta-unveils-muse-spark-open-the-new-top-u-s-open-weights-model-and-it-runs-on-two-paired-mac-desktops>) — _venturebeat.com_
2. [Muse Spark Open](<https://research.meta.ai/blog/muse-spark-open>) — _research.meta.ai_
3. [\[AINews\] Agents disprove Polysemanticity; greatly improve Interpretability & Alignment](<https://www.latent.space/p/ainews-agents-disprove-polysemanticity>) — _latent.space_
4. [Welcome Beam: a 501B open model you can own, customize, and scale](<https://huggingface.co/blog/reflection-beam>) — _huggingface.co_
5. [Nvidia released Nemotron 3.5 Super VL](<https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/>) — _developer.nvidia.com_
6. [FLUX 3 Image Klein](<https://bfl.ai/blog/flux-3-image-klein>) — _bfl.ai_
7. [Inside Microsoft's Frontier Pre-Training Stack](<https://microsoft.ai/news/frontier-pre-training-at-microsoft-ai/>) — _microsoft.ai_
8. [Open weight takes 71.5% of tokens and 23% of spend](<https://vercel.com/blog/ai-gateway-production-index-october-2026>) — _vercel.com_
9. [Neural Networks Are Already Clean](<https://already-clean.goodfire.com/>) — _already-clean.goodfire.com_
10. [Claude reveals ECDSA curve origins](<https://www.anthropic.com/research/ecdsa-curve-origins>) — _anthropic red_
11. [How the Claude Code team does code review](<https://claude.dev/blog/solving-code-review-at-anthropic/>) — _claude_
12. [From Containers to Sandboxes: Developer Trust in the Agentic Era](<https://www.docker.com/blog/stack-overflow-survey-2026-ai-agent-trust/>) — _docker.com_
13. [Multi-repo support and other improvements for GitHub Copilot in Slack and Microsoft Teams](<https://github.blog/changelog/2026-10-15-copilot-in-slack-and-teams-adds-model-and-repository-updates>) — _github.blog_
14. [Open-sourcing SPACE, the sandbox platform behind Computer](<https://www.perplexity.ai/hub/blog/open-sourcing-space>) — _perplexity.ai_
15. [New trend of building “internal vibe-coding apps” at tech companies](<https://blog.pragmaticengineer.com/the-pulse-new-trend-of-building-internal-vibe-coding-apps-at-tech-companies/>) — _blog.pragmaticengineer.com_
16. [Using Artificial Intelligence to reverse engineer hardware](<https://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/>) — _blogs.gnome.org_
17. [One Agent Development Kit, Five Languages](<https://cloud.google.com/blog/topics/developers-practitioners/one-agent-development-kit-five-languages/>) — _cloud.google.com_
18. [Introducing Devin Oncall](<https://devin.ai/blog/introducing-devin-oncall>) — _devin.ai_
19. [Pulumi ESC now issues OIDC tokens for any service](<https://www.pulumi.com/blog/esc-oidc-tokens-for-any-service/>) — _pulumi.com_
20. [Spacelift Integrates with Cursor Origin](<https://spacelift.io/blog/spacelift-cursor-origin-integration>) — _spacelift.io_
21. [Building a computer that can pause and resume in milliseconds: Inside the MicroVM architecture behind Managed Agents](<https://www.digitalocean.com/blog/microvm-architecture>) — _digitalocean.com_
22. [How to Measure the Human Cost of Agent Work](<https://cutler.sg/blog/2026-10-measure-agent-review-time>) — _cutler.sg_
23. [Reducing the noise: How Atlassian built an OCSF security lakehouse on Databricks](<https://www.databricks.com/blog/reducing-noise-how-atlassian-built-ocsf-security-lakehouse-databricks>) — _databricks.com_
24. [Wie Unzer KI in 3 Kernprozesse mit 60-90% Effizienzgewinn integriert hat](<https://ai-first.ai/podcast/wie-unzer-ki-in-3-kernprozesse-mit-60-90-effizienzgewinn-integriert-hat>) — _ai first podcast_
25. [Wie IBM mit KI 4,5 Milliarden Dollar einsparte](<https://ai-first.ai/podcast/wie-ibm-mit-ki-4-5-milliarden-dollar-einsparte>) — _ai first podcast_
26. [How an Anthropic Japan BDR runs his day with a fleet of Claude agents](<https://claude.com/resources/articles/how-an-anthropic-japan-business-development-representative-runs-his-day>) — _claude_
27. [Anthropic 'SneakPeek' Flaw Is a Silent Zero-Click Threat](<https://www.darkreading.com/threat-intelligence/new-anthropic-sneakpeek-silent-zero-click-threat>) — _darkreading.com_
28. [A UAF turned RCE](<https://daniel.haxx.se/blog/2026/10/14/a-uaf-turned-rce/>) — _daniel.haxx.se_
29. [Jev as a judge: How counterfeit policy steers Jev](<https://securitylabs.datadoghq.com/articles/jev-as-a-judge-how-counterfeit-policy-steers-jev/>) — _securitylabs.datadoghq.com_
30. [Citizen Lab says governments are abusing online ads to hack people with ‘zero-click' spyware](<https://techcrunch.com/2026/10/15/citizen-lab-says-governments-are-abusing-online-ads-to-hack-people-with-zero-click-spyware/>) — _techcrunch.com_
31. [Cisco make-me-root email bug exploited as a 0-day by unknown crims](<https://www.theregister.com/security/2026/10/14/cisco-make-me-root-email-bug-exploited-as-a-0-day-by-unknown-crims/5303168>) — _theregister.com_
32. [Drupal Patches Critical Field UI Flaw With Unauthenticated RCE Path via Contributed Modules](<https://thehackernews.com/2026/10/drupal-patches-critical-core-rce-flaw.html>) — _thehackernews.com_
33. [Benchmarking DuckDB v2.0-dev on NVIDIA Vera](<https://duckdb.org/2026/10/16/nvidia-vera-benchmark.html>) — _duckdb.org_
34. [From JSON Strings to Typed Columns](<https://duckdb.org/2026/10/16/json-to-typed-columns.html>) — _duckdb.org_
35. [Redis now has compressed bitmaps (Roaring)](<https://lemire.me/blog/2026/10/15/redis-now-has-compressed-bitmaps-roaring/>) — _lemire.me_
36. [CoreWeave credit default swaps hit distress levels as investors sour on AI debt](<https://www.cnbc.com/2026/10/15/coreweave-credit-default-swaps-hit-distress-levels-as-investors-sour-on-ai-debt.html>) — _cnbc.com_
37. [Amazon S3 is now available on the Vercel Marketplace and v0 by Vercel](<https://aws.amazon.com/blogs/aws/amazon-s3-vercel-marketplace-v0/>) — _aws.amazon.com_
38. [Xcode 27 runner image generally available](<https://github.blog/changelog/2026-10-15-xcode-27-runner-image-generally-available>) — _github.blog_
39. [Open source license compliance generally available](<https://github.blog/changelog/2026-10-16-open-source-license-compliance-generally-available>) — _github.blog_
40. [Sequences and Other Volatiles in Neki](<https://planetscale.com/blog/neki-volatile-expressions>) — _planetscale.com_
41. [Bringing the magic: Google breaks open a bottleneck in quantum computing](<https://blog.google/innovation-and-ai/models-and-research/quantum-computing/magic-state-cultivation-quantum-computing/>) — _blog.google_
42. [How to Train Your Robot](<https://www.construction-physics.com/p/how-to-train-your-robot>) — _construction-physics.com_
43. [How Close Are We To Fully Autonomous Chip Design?](<https://semiengineering.com/how-close-are-we-to-fully-autonomous-chip-design/>) — _semiengineering.com_
44. [The Cost of Getting a Job Today](<https://weli.dev/blog/the-cost-of-getting-a-job-today/>) — _weli.dev_
45. [Lies, Damn Lies, and GitHub Stars](<https://avdi.codes/lies-damn-lies-and-github-stars/>) — _avdi.codes_
46. [Code Is a Commodity Now](<https://efp.asia/blog/2026/10/15/code-is-a-commodity-now/>) — _efp.asia_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
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
| `2026-10-04` | 🗓️ Weekly recap | [Read →](news/en/2026-10-04.md) |
| `2026-10-03` | Saturday | [Read →](news/en/2026-10-03.md) |

<sub>[Browse the full archive (124) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
