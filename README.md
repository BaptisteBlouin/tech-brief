# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-10-15
<sub>updated 16 October 2026 at 01:00</sub>

## AI Models, Industry and Business

- Anthropic told investors its third-quarter revenue rose about 45% from the prior quarter to $16.8 billion, ahead of a possible IPO that could value it at $2 trillion <sup>[1](<https://www.nytimes.com/2026/10/14/technology/anthropic-ipo-revenue-profit.html>)</sup>. Its distillation clampdown accounted for 5% to 7% of revenue-related usage, and it reported 11% adjusted operating margins <sup>[2](<https://simonwillison.net/2026/Oct/15/anthropic-tells-investors/>)</sup>.
- Anthropic gave METR employee-like access to evaluate its models and will publish the results of its risk assessments, while also working with SecureBio, Accenture and early talks with Hugging Face <sup>[3](<https://www.anthropic.com/news/an-update-on-independent-evaluators>)</sup>.
- Modal says it has crossed $1B in annualized run rate and raised a $16B Series D, with usage and valuation tripling in five months <sup>[4](<https://www.latent.space/p/ainews-modals-1b-arr-16b-series-d>)</sup>.
- Cohere announced a proposed agreement to acquire AISLE, an autonomous vulnerability-finding company, to strengthen its sovereign AI platform and European presence <sup>[5](<https://cohere.com/blog/cohere-and-aisle-sign-letter-of-intent-to-advance-cyber-resilient-sovereign-ai>)</sup>.
- Meta released the weights of Muse Spark Open, an 816B total / 42B active parameter MoE model under the Muse Model License, optimized for SGLang and vLLM on NVIDIA, AMD and Intel, with a 1M-token context window <sup>[6](<https://pytorch.org/blog/muse-spark-open/>)</sup>. It is available in limited preview on GroqCloud, where Meta reports 350+ tokens per second per user <sup>[7](<https://groq.com/blog/meta-s-muse-spark-open-release-is-now-in-limited-preview-on-groqcloud>)</sup>.
- Mistral released Timestral, a family of time-series foundation models in four sizes (5M to 209M parameters); the largest ranks first on GIFT-Eval, TIME and fev-bench with two-thirds of the prior state-of-the-art parameter count <sup>[8](<https://mistral.ai/news/timestral>)</sup>.
- Google's Harness² lets agents iteratively improve prompts, tools, memory and orchestration without changing model weights, carrying evidence-backed lessons forward to future tasks <sup>[9](<https://github.com/google-research/harness2>)</sup>.
- A Substack analysis says more than half of businesses now pay for AI and growth will increasingly come from deeper adoption rather than new customers <sup>[10](<https://econlab.substack.com/p/ai-index-oct-2026>)</sup>.

## LLM Tooling, RAG and Agents

- Jev's team reports it picked the right page first 88% of the time across 168 test questions, versus 70% for embedding search, and cut irrelevant results from 33% to 3% by answering "none" when no page fit <sup>[11](<https://sayora.ai/many-hands/jev-vs-embeddings/>)</sup>.
- Phoenix is an open-source, self-hosted observability platform that captures OpenTelemetry traces and offers retrieval and response evaluations, datasets, experiments and prompt replay for LLM applications <sup>[12](<https://github.com/Arize-ai/phoenix>)</sup>.
- LangChain's agent eval guide recommends starting with 10 to 20 examples drawn from traces, combining code evaluators with LLM judges and human review, and using offline and online evals at different stages <sup>[13](<https://www.langchain.com/blog/common-questions-about-agent-evals>)</sup>.
- Google's Evaluating AI agents guide argues that agents can loop or burn tokens while still looking fine, and builds an eval pipeline for a LangGraph agent <sup>[14](<https://developers.googleblog.com/evaluating-ai-agents-moving-past-the-vibe-check/>)</sup>.
- XERJ is an Apache-2.0, Elasticsearch-compatible local search engine that auto-indexes code, logs, PDFs and CSVs for agent retrieval and RAG, with optional reranking that can send text to an external provider <sup>[15](<https://github.com/xerj-org/xerj>)</sup>.
- A proof of concept shows row-level security for Claude Dashboards via MCP, with an MCP server authenticating users and querying DuckDB so access rules apply before data reaches Claude <sup>[16](<https://thedatavist.substack.com/p/need-to-know-implementing-row-level>)</sup>.
- Docker's guide describes agent risks such as prompt injection, tool misuse and excessive autonomy, and argues for containing what an agent can reach and overseeing its actions <sup>[17](<https://www.docker.com/blog/ai-agent-security-risks/>)</sup>.
- Addy Osmani recommends agentic verification: end-to-end tests as ground truth, property-based testing to hunt for forbidden states, and fast deterministic tests so agents can retry reliably <sup>[18](<https://addyo.substack.com/p/agentic-verification>)</sup>.
- Google's adk-recipes repo organizes ADK resources into core/, plugins/ and contrib/ layers, with installable vertical skills for coding assistants and deployment patterns on Google Cloud <sup>[19](<https://developers.googleblog.com/three-layers-one-repo-a-tour-of-googleadk-recipes/>)</sup>.
- Anthropic's Code Review is now generally available for Team and Enterprise; most reviews now finish about 3x faster (about 20 minutes down to 6 to 10 minutes), with admins able to tune reviews per repository <sup>[20](<https://claude.com/resources/articles/code-review-is-now-generally-available>)</sup>.
- GitHub's agentic autofix for code scanning alerts is generally available: Copilot explores the codebase, proposes a fix, reruns CodeQL to validate it and opens a draft PR <sup>[21](<https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability>)</sup>. AI Scan for pull requests is also generally available, covering languages CodeQL does not yet support, as advisory findings <sup>[22](<https://github.blog/changelog/2026-10-15-ai-scan-for-pull-requests-generally-available>)</sup>.

## Model Serving and Inference Infrastructure

- Meta describes using opportunistic idle inference capacity to rank more ads or route requests to stronger models, scaling back quickly when that capacity disappears while protecting normal latency and reliability <sup>[23](<https://engineering.fb.com/2026/10/12/ml-applications/turning-opportunistic-ai-inference-capacity-into-better-ads-recommendations/>)</sup>.
- vLLM introduces a push-based NIXL connector that moves post-prefill KV transfer coordination off the critical path for disaggregated inference, improving TTFT and TPOT at high request rates <sup>[24](<https://vllm.ai/blog/2026-10-14-nixl-push-connector>)</sup>.
- Netflix described how it detects faulty GPUs and network hardware, automatically remediates unhealthy machines, and keeps distributed training jobs alive through hardware failures <sup>[25](<https://netflixtechblog.com/reliable-gpu-compute-for-large-training-inference-jobs-d62b03a96d7a>)</sup>.
- ExecuTorch now runs PyTorch models directly on Arm Cortex-M CPUs with CMSIS-NN acceleration; four MLPerf Tiny models run in 21.5 ms or less under 90 KiB of RAM on a Cortex-M55, with a core runtime under 20 KiB of flash <sup>[26](<https://pytorch.org/blog/bringing-executorch-to-arm-cortex-m-cpus/>)</sup>.
- Pinecone BYOC added on-demand capacity mode, where indexes share a capacity pool with dynamic sharding instead of up-front shard sizing <sup>[27](<https://www.pinecone.io/blog/byoc-on-demand/>)</sup>.

## Data, Databases and DevOps

- A logical-replication walkthrough reports a PostgreSQL major upgrade with 181 ms of write interruption and 179 ms during rollback, with no data loss, using parallel old and new clusters <sup>[28](<https://tapoueh.org/blog/2026/10/zero-downtime-postgres-upgrades-with-logical-replication>)</sup>.
- SQLBuild is an open-source SQL and Python framework that checks contracts and lineage before execution and supports safe renames and production diffs across Snowflake, Postgres, BigQuery and Databricks <sup>[29](<https://github.com/chio-labs/sqlbuild>)</sup>.
- pg_vectorsearch is a PostgreSQL extension for approximate nearest neighbor search <sup>[30](<https://github.com/timescale/pg_vectorsearch>)</sup>.
- Benchmarks on 1,000 IDs found IN, ANY and VALUES joins performed similarly in PostgreSQL, so teams should verify with EXPLAIN on their own data <sup>[31](<https://explainmeasured.com/posts/arguments-that-came-out-even>)</sup>.
- GitHub's Evergreen app automates quarterly outside-collaborator access reviews and repo archival in a shared org, a pattern teams can adapt <sup>[32](<https://github.blog/engineering/platform-security/staying-evergreen-how-we-automated-secure-access-and-repo-hygiene-in-a-shared-org/>)</sup>.
- GitHub retired email notifications for repository push events on October 15, 2026; teams that need them can use a GitHub Actions workflow with their own SMTP provider <sup>[33](<https://github.blog/changelog/2026-10-15-email-notifications-for-repository-push-events-have-been-retired>)</sup>.

## Security

- Ivanti warned of actively exploited Connect Secure zero-days, an authentication bypass chained with two others to run commands as root on vulnerable devices <sup>[34](<https://www.bleepingcomputer.com/news/security/ivanti-warns-of-connect-secure-zero-day-exploited-in-attacks/>)</sup>.
- Weaviate fixed a medium-severity authorization flaw in nearObject search (v1.39.3 and later) that let callers learn distances to protected vectors in other collections; a CVE is pending <sup>[35](<https://weaviate.io/blog/weaviate-security-release-nearobject-2026>)</sup>.
- Discourse resolved CVE-2026-55420, an ImageMagick-based upload flaw allowing arbitrary file read and write, by making a default-deny policy for ImageMagick delegates <sup>[36](<https://gbhackers.com/discourse-imagemagick-vulnerability-enables-arbitrary-file-read-through-malicious-image-uploads>)</sup>.
- Chrome 155 fixed 37 flaws, including seven critical memory bugs, with at least 15 reported by Anthropic with Claude's help <sup>[37](<https://www.securityweek.com/chrome-firefox-updates-patch-114-flaws-as-mozilla-unveils-firefox-enterprise/>)</sup>. XBOW's agents built a Chrome full chain in six days for about $40,000 in API costs; defenders should update to builds with the V8 and Chromium fixes <sup>[38](<https://xbow.com/labs/research/zero-to-calc-in-six-days-inside-xbow-chrome-full-chain>)</sup>.
- Meta says hackers took code and personal data of about 1,500 people in a GitHub breach, 99% of the stolen data being source code; it is rotating exposed secrets <sup>[39](<https://www.securityweek.com/meta-says-hackers-took-code-personal-data-of-1500-in-github-breach/>)</sup>.

## Developer Practices and Tooling

- Google's DPoP support for OAuth sender-constrains refresh tokens, mitigating infostealer malware and adversary-in-the-middle attacks, and Google Cloud STS can handle token delegation across agent chains <sup>[40](<https://developers.googleblog.com/announcing-dpop-support-for-google-oauth-securing-refresh-tokens/>)</sup>.
- A benchmark processed 7.6 GB of JSON in about 0.12 seconds using fastsimdjson on free-threaded Python across 64 cores, roughly 66 GB/s, by parallelizing and building Python objects only for needed fields <sup>[41](<https://lemire.me/blog/2026/10/12/parsing-json-at-tens-of-gigabytes-per-second-in-python/>)</sup>.
- Jared Palmer argues that recognizing clean code remains useful, but knowing the right program shape before writing it is something AI cannot yet do <sup>[42](<https://jaredpalmer.com/blog/code-you-didnt-write>)</sup>.
- Rust 1.99.1 fixes regressions including a missing wcslen symbol that broke some targets, notably UEFI projects using std <sup>[43](<https://blog.rust-lang.org/2026/10/15/Rust-1.99.1/>)</sup>.

## Sources

1. [Anthropic Says Revenue Jumped 45% to $16.8 Billion in Third Quarter](<https://www.nytimes.com/2026/10/14/technology/anthropic-ipo-revenue-profit.html>) — _nytimes.com_
2. [Anthropic tells investors quarterly revenue up nearly 50% to $16.8bn ahead of IPO](<https://simonwillison.net/2026/Oct/15/anthropic-tells-investors/>) — _simonwillison.net_
3. [An update on independent evaluators](<https://www.anthropic.com/news/an-update-on-independent-evaluators>) — _anthropic news_
4. [\[AINews\] Modal’s $1B ARR, $16B Series D makes it NYC’s newest AI Infra Decacorn, 3x usage and 3x valuation in 5 months, 15x in 1 yr](<https://www.latent.space/p/ainews-modals-1b-arr-16b-series-d>) — _latent.space_
5. [Cohere and AISLE sign letter of intent to advance cyber-resilient sovereign AI](<https://cohere.com/blog/cohere-and-aisle-sign-letter-of-intent-to-advance-cyber-resilient-sovereign-ai>) — _cohere_
6. [Muse Spark Is Now an Open-Weights Model](<https://pytorch.org/blog/muse-spark-open/>) — _pytorch.org_
7. [Meta's Muse Spark open-weight release Is Now in Limited Preview on GroqCloud](<https://groq.com/blog/meta-s-muse-spark-open-release-is-now-in-limited-preview-on-groqcloud>) — _groq_
8. [Introducing Timestral](<https://mistral.ai/news/timestral>) — _mistral_
9. [Google Harness² for Recursive Self Improvement](<https://github.com/google-research/harness2>) — _github.com_
10. [Cracks in the AI Thesis Part 3](<https://econlab.substack.com/p/ai-index-oct-2026>) — _econlab.substack.com_
11. [Jev handed our LLM the wrong page a tenth as often as our embeddings](<https://sayora.ai/many-hands/jev-vs-embeddings/>) — _sayora.ai_
12. [Phoenix](<https://github.com/Arize-ai/phoenix>) — _github.com_
13. [The Most Common Questions About Agent Evals, Answered](<https://www.langchain.com/blog/common-questions-about-agent-evals>) — _langchain.com_
14. [Evaluating AI agents: moving past the vibe check](<https://developers.googleblog.com/evaluating-ai-agents-moving-past-the-vibe-check/>) — _google ai_
15. [XERJ](<https://github.com/xerj-org/xerj>) — _github.com_
16. [Need to Know: Implementing row-level security for Claude Dashboards via Model Context Protocol](<https://thedatavist.substack.com/p/need-to-know-implementing-row-level>) — _thedatavist.substack.com_
17. [AI Agent Security Risks: What Can Go Wrong When Agents Act on Their Own](<https://www.docker.com/blog/ai-agent-security-risks/>) — _docker.com_
18. [Agentic Verification](<https://addyo.substack.com/p/agentic-verification>) — _addyo.substack.com_
19. [Three layers, one repo: a tour of google/adk-recipes](<https://developers.googleblog.com/three-layers-one-repo-a-tour-of-googleadk-recipes/>) — _google ai_
20. [Code Review is now generally available](<https://claude.com/resources/articles/code-review-is-now-generally-available>) — _claude_
21. [Agentic autofix for code scanning alerts general availability](<https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability>) — _github.blog_
22. [AI Scan for pull requests generally available](<https://github.blog/changelog/2026-10-15-ai-scan-for-pull-requests-generally-available>) — _github.blog_
23. [Turning Opportunistic AI Inference Capacity Into Better Ads Recommendations](<https://engineering.fb.com/2026/10/12/ml-applications/turning-opportunistic-ai-inference-capacity-into-better-ads-recommendations/>) — _engineering.fb.com_
24. [Push-Based KV Transfer to Improve TTFT and TPOT for Disaggregated Inference in vLLM](<https://vllm.ai/blog/2026-10-14-nixl-push-connector>) — _vllm.ai_
25. [How Netflix Keeps Large GPU Jobs Running](<https://netflixtechblog.com/reliable-gpu-compute-for-large-training-inference-jobs-d62b03a96d7a>) — _netflixtechblog.com_
26. [Bringing ExecuTorch to Arm Cortex-M CPUs](<https://pytorch.org/blog/bringing-executorch-to-arm-cortex-m-cpus/>) — _pytorch.org_
27. [On-demand mode for Pinecone BYOC](<https://www.pinecone.io/blog/byoc-on-demand/>) — _pinecone_
28. [Zero-downtime Postgres upgrades with logical replication](<https://tapoueh.org/blog/2026/10/zero-downtime-postgres-upgrades-with-logical-replication>) — _tapoueh.org_
29. [SQLBuild: safe refactoring for warehouse SQL](<https://github.com/chio-labs/sqlbuild>) — _github.com_
30. [pg_vectorsearch](<https://github.com/timescale/pg_vectorsearch>) — _github.com_
31. [Four PostgreSQL arguments that came out even](<https://explainmeasured.com/posts/arguments-that-came-out-even>) — _explainmeasured.com_
32. [Staying Evergreen: How we automated secure access and repo hygiene in a shared org](<https://github.blog/engineering/platform-security/staying-evergreen-how-we-automated-secure-access-and-repo-hygiene-in-a-shared-org/>) — _github.blog_
33. [Email notifications for repository push events have been retired](<https://github.blog/changelog/2026-10-15-email-notifications-for-repository-push-events-have-been-retired>) — _github.blog_
34. [Ivanti Warns of Connect Secure Zero-Days Exploited in Attacks](<https://www.bleepingcomputer.com/news/security/ivanti-warns-of-connect-secure-zero-day-exploited-in-attacks/>) — _bleepingcomputer.com_
35. [Weaviate security release - Medium severity fix for a cross-collection vector disclosure in nearObject (CVE pending assignment)](<https://weaviate.io/blog/weaviate-security-release-nearobject-2026>) — _weaviate_
36. [Discourse ImageMagick Vulnerability Enables Arbitrary File Read Through Malicious Image Uploads](<https://gbhackers.com/discourse-imagemagick-vulnerability-enables-arbitrary-file-read-through-malicious-image-uploads>) — _gbhackers.com_
37. [Chrome, Firefox Updates Patch 114 Flaws as Mozilla Unveils Firefox Enterprise](<https://www.securityweek.com/chrome-firefox-updates-patch-114-flaws-as-mozilla-unveils-firefox-enterprise/>) — _securityweek.com_
38. [Zero to Calc in Six Days: Inside XBOW's Chrome Full Chain](<https://xbow.com/labs/research/zero-to-calc-in-six-days-inside-xbow-chrome-full-chain>) — _xbow.com_
39. [Meta Says Hackers Took Code and Personal Data of 1500 People in GitHub Breach](<https://www.securityweek.com/meta-says-hackers-took-code-personal-data-of-1500-in-github-breach/>) — _securityweek.com_
40. [Announcing DPoP Support for Google OAuth: Securing Refresh Tokens](<https://developers.googleblog.com/announcing-dpop-support-for-google-oauth-securing-refresh-tokens/>) — _google ai_
41. [Parsing JSON at tens of gigabytes per second… in Python](<https://lemire.me/blog/2026/10/12/parsing-json-at-tens-of-gigabytes-per-second-in-python/>) — _lemire.me_
42. [Code you didn't write](<https://jaredpalmer.com/blog/code-you-didnt-write>) — _jaredpalmer.com_
43. [Announcing Rust 1.99.1](<https://blog.rust-lang.org/2026/10/15/Rust-1.99.1/>) — _blog.rust-lang.org_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
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
| `2026-10-02` | Friday | [Read →](news/en/2026-10-02.md) |

<sub>[Browse the full archive (123) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
