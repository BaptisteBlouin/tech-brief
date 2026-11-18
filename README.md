# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-11-17
<sub>updated 18 November 2026 at 00:00</sub>

## AI models and industry

- OpenAI released GPT-6.2 Astra and GPT-6.2 Sol, with better professional outputs, coding, computer use and efficiency at lower cost across ChatGPT Work, Codex and the API <sup>[1](<https://openai.com/index/introducing-gpt-6-2-astra-sol>)</sup>. GitHub Copilot made both generally available, billed at provider list pricing under usage-based billing <sup>[2](<https://github.blog/changelog/2026-11-17-openais-gpt-6-2-astra-and-gpt-6-2-sol-now-available>)</sup>. Simon Willison reports Astra at $8/MTok input and $40/MTok output, 80% of the price of GPT-6 Astra, and Sol at $2/$10 <sup>[3](<https://simonwillison.net/2026/Nov/17/gpt62-astra-and-sol/>)</sup>.
- Perplexity has reached a $1B annual revenue run rate, CEO Aravind Srinivas said, with recent growth attributed partly to its Computer product <sup>[4](<https://latent.space/p/ainews-perplexity-hits-a-1b-revenue-run-rate-up-4x-in-2026/>)</sup>. The same report says the company now has a dedicated research lab with access to 10,000+ GPUs <sup>[4](<https://latent.space/p/ainews-perplexity-hits-a-1b-revenue-run-rate-up-4x-in-2026/>)</sup>. Perplexity Frontier Research, an open initiative to build algorithms, models and evaluations toward an automated scientist, is backed by those 10,000 GPUs and will ship papers, model weights and repositories, with applications open until December 5 <sup>[5](<https://research.perplexity.ai/>)</sup>.
- Tencent released Hy4 flash, a fast, low-cost model whose blind-test satisfaction scores came close to Claude Haiku 5.5 <sup>[6](<https://www.tencent.com/tencent-launches-hy4-flash-to-power-high-speed-cost-efficient-ai-deployment-for-everyday-workflows/>)</sup>.
- Google's Gemini 4 Hydrogen is a fast, efficient model for robotics with spatial and embodied reasoning <sup>[7](<https://developers.googleblog.com/gemini-hydrogen-for-robotics/>)</sup>.
- Liquid AI's d1.2 and d1.2-ultra are decision models with audio input; d1.2-ultra ranks first among decision models on the Artificial Analysis Decision Index v2.1, priced at $0.02 and $0.042 per million input tokens <sup>[8](<https://www.liquid.ai/blog/d1-2>)</sup>.

## AI security and cyber defense

- OpenAI is working with NATO and allied cyber agencies to help trusted defenders find vulnerabilities, test fixes and protect essential systems <sup>[9](<https://openai.com/index/strengthening-nato-allied-cyber-defences-ai>)</sup>.
- Elastic analyzed five agentic offensive frameworks (ARTEX, CyberStrikeAI, Cairn, PentAGI, HexStrike) that let an LLM drive scanners and shells; none enforce authorization in code, and four have been seen in real intrusions <sup>[10](<https://www.elastic.co/security-labs/threat-command/agentic-offensive-frameworks-detection-artex>)</sup>.
- The California attorney general sued OpenAI over rogue agent incidents, centred on a Hugging Face incident <sup>[11](<https://techcrunch.com/2026/11/16/california-state-ag-sues-openai-over-rogue-agent-incidents/>)</sup>.
- The US Commerce Department is closing a loophole that let foreign rivals rent access to advanced AI chips in data centers abroad; the rule takes effect 90 days after Federal Register publication <sup>[12](<https://arstechnica.com/tech-policy/2026/11/us-moves-to-cut-chinas-remote-access-to-ai-chips/>)</sup>.

## Data and AI pipelines

- A DuckDB workshop built a pipeline over 2.1 million Amazon appliance reviews: DuckDB filters the data, an LLM summarizes the complaints, and the result is deployed as a Hugging Face Space callable as an API <sup>[13](<https://duckdb.org/2026/11/17/duckdb-user-group-workshop-ai-powered-review-analysis.html>)</sup>.
- Attendees prototyped on a 22 MB sample locally, then ran the same two Parquet-based files against the full dataset on Hugging Face <sup>[13](<https://duckdb.org/2026/11/17/duckdb-user-group-workshop-ai-powered-review-analysis.html>)</sup>.
- Pinecone added vector-to-document index conversion: a new document index is built from an existing vector index without re-embedding; in an internal test, 100 million records converted in under 20 minutes <sup>[14](<https://www.pinecone.io/blog/index-conversion/>)</sup>.
- Turso Sync keeps writes local and replicates logical row changes through separate push and pull calls <sup>[15](<https://turso.tech/blog/turso-sync-local-first-sqlite-with-push-and-pull>)</sup>.

## LLM tooling

- The llm 0.37.3 bug-fix release addresses a breakage caused by SQLite 3.54.1, which changed json_object behaviour for subqueries returning json_array results <sup>[16](<https://simonwillison.net/2026/Nov/16/llm/>)</sup>.
- The SQLite fix is intended: a subquery using json_array returns SQL text, so the workaround is wrapping it in json() <sup>[16](<https://simonwillison.net/2026/Nov/16/llm/>)</sup>.
- Simon Willison shipped llm 0.38 with support for the GPT-6.2 models <sup>[3](<https://simonwillison.net/2026/Nov/17/gpt62-astra-and-sol/>)</sup>.

## Agents and coding tools

- GitHub's Agent Host Protocol (AHP) is an open standard for agent sessions that continue across devices, built first in VS Code and adopted across GitHub <sup>[17](<https://github.blog/engineering/engineering-principles/building-the-agent-host-protocol-for-sessions-that-continue-across-devices/>)</sup>.
- GitHub Copilot Fusion now appears on the Terminal-Bench 4.1 public leaderboards, where Fusion Max reached a 71.2% resolution rate, 5.4 points ahead of leading frontier models, at lower cost <sup>[18](<https://github.blog/changelog/2026-11-17-github-copilot-fusion-updates-more-availability-benchmarks-and-models>)</sup>.
- GitHub Copilot Evals entered public preview: repeatable tests for skills, agents and MCP tools, rerunnable to catch regressions after changes <sup>[19](<https://github.blog/changelog/2026-11-17-github-copilot-evals-is-now-in-public-preview>)</sup>.
- Copilot code review adds adaptive effort, which picks Lite, Balanced or Max review depth per pull request, plus cross-repository context and secret detection, in public preview <sup>[20](<https://github.blog/changelog/2026-11-17-copilot-code-review-adaptive-effort-secret-detection-and-more>)</sup>.
- GitHub Copilot CLI adds Microsoft Entra sign-in in public preview, for silent SSO to Enterprise Managed User accounts and Microsoft 365 Copilot licenses <sup>[21](<https://github.blog/changelog/2026-11-17-github-copilot-cli-adds-microsoft-entra-sign-in-as-a-preview>)</sup>.
- Bashkit is a Rust sandbox that runs bash in-process for LLM agents, with no fork/exec or network access unless enabled, and an analyze() API that lists commands and file writes before execution <sup>[22](<https://github.com/everruns/bashkit>)</sup>.
- The external sandbox pattern runs agent-generated code in a dedicated sandbox while the agent lives outside it; Simon Willison released three sandbox server implementations <sup>[23](<https://simonwillison.net/2026/Nov/17/external-sandboxes-for-coding-agents/>)</sup>.
- Pragmatic Engineer covers inference engineering for moving from frontier APIs to open models, citing Uber's 50% and Pinterest's 90% per-token cost cuts <sup>[24](<https://newsletter.pragmaticengineer.com/p/inference-engineering-for-software-engineers>)</sup>.

## DevOps and developer tooling

- Dependabot delegated alert dismissal requests now stay open for one year instead of one week, giving reviewers more time before resubmission; the change ships on github.com and in GitHub Enterprise Server 3.24 <sup>[25](<https://github.blog/changelog/2026-11-16-dependabot-alert-dismissal-requests-now-last-one-year>)</sup>.
- dbt v2, the next-generation engine, is generally available, with local unit tests and batch testing in alpha, and a free plan for dbt State <sup>[26](<https://www.getdbt.com/blog/whats-new-in-dbt-november-2026>)</sup>.
- Google AI Studio can now build and ship full-stack Kotlin Android apps with Firebase backend provisioning and Gemini API calls, publishable to the Play Store <sup>[27](<https://developers.googleblog.com/build-full-stack-android-apps-with-gemini-in-google-ai-studio/>)</sup>.
- Google's Another Build File Service (ABFS) uses content addressing across a Linux kernel filesystem module and server infrastructure to lazy-load Android-scale source trees for faster setup and builds <sup>[28](<https://developers.googleblog.com/accelerating-development-for-massive-git-repositories/>)</sup>.
- Monitor GitHub Copilot activity through Microsoft Agent 365: enterprise audit streams cover prompts, responses and tool calls across Copilot clients, for GitHub Enterprise Cloud customers with Enterprise Managed Users <sup>[29](<https://github.blog/changelog/2026-11-17-monitor-github-copilot-activity-through-microsoft-agent-365>)</sup>.

## Security advisories and infrastructure

- httpx 1.9.0 (CVE-2026-129784, CVSS 8.5) parsed JSON with Oj in object mode when multi_json was missing, allowing remote code execution; upgrade to httpx 1.9.1, or pass mode: :strict to response.json <sup>[30](<https://research.jfrog.com/vulnerabilities/httpx-is-vulnerable-to-remote-code-execution-via-oj-object-mode-deserialization-cve-2026-129784/>)</sup>.
- A Linux kernel TCP NULL pointer dereference, present for 11 years, lets unauthenticated attackers crash Nginx, Apache and SSH servers in default configurations <sup>[31](<https://www.bleepingcomputer.com/news/linux/new-noisytcp-linux-kernel-flaw-lets-attackers-crash-servers/>)</sup>.
- Microsoft Defender for macOS had local privilege escalation bugs (CVE-2026-50657, CVE-2026-50658) that allowed root code execution, fixed in July 2026 Patch Tuesday <sup>[32](<https://spaceraccoon.dev/race-against-the-machine-defender-macos-lpe/>)</sup>.
- Valkey 9.2 replaces the skiplist index of large sorted sets with a B+ tree, cutting per-member index overhead by 36% to 43% in a five-million-member test; the release is still in candidate testing <sup>[33](<https://valkey.io/blog/from-skiplist-to-b+tree/>)</sup>.

## Software engineering practice

- Go Proverbs advise that "a little copying is better than a little dependency," a quote Simon Willison highlighted <sup>[34](<https://simonwillison.net/2026/Nov/17/go-proverbs/>)</sup>.
- Anthropic published linked billing for the Claude Platform in beta, letting platforms bill end customers without sharing API keys <sup>[35](<https://claude.com/resources/articles/linked-billing-on-claude-platform>)</sup>.

## Sources

1. [Introducing GPT-6.2 Astra and Sol](<https://openai.com/index/introducing-gpt-6-2-astra-sol>) — _openai.com_
2. [OpenAI’s GPT-6.2 Astra and GPT-6.2 Sol now available](<https://github.blog/changelog/2026-11-17-openais-gpt-6-2-astra-and-gpt-6-2-sol-now-available>) — _github.blog_
3. [GPT‐6.2 Astra and GPT‐6.2 Sol](<https://simonwillison.net/2026/Nov/17/gpt62-astra-and-sol/>) — _simonwillison.net_
4. [\[AINews\] Perplexity hits a $1B revenue run rate, up 4x in 2026](<https://latent.space/p/ainews-perplexity-hits-a-1b-revenue-run-rate-up-4x-in-2026/>) — _latent.space_
5. [The frontier is still open](<https://research.perplexity.ai/>) — _research.perplexity.ai_
6. [Tencent Launches Hy4 flash](<https://www.tencent.com/tencent-launches-hy4-flash-to-power-high-speed-cost-efficient-ai-deployment-for-everyday-workflows/>) — _tencent.com_
7. [Gemini 4 Hydrogen: a faster model for general purpose robotics](<https://developers.googleblog.com/gemini-hydrogen-for-robotics/>) — _google ai_
8. [d1.2: State-of-the-Art Omnimodal Decision Models](<https://www.liquid.ai/blog/d1-2>) — _liquid.ai_
9. [Strengthening NATO and allied cyber defenses with AI](<https://openai.com/index/strengthening-nato-allied-cyber-defences-ai>) — _openai.com_
10. [Inside the Loop: Five AI Attack Frameworks that Never Ask Permission](<https://www.elastic.co/security-labs/threat-command/agentic-offensive-frameworks-detection-artex>) — _elastic.co_
11. [California state AG sues OpenAI over rogue agent incidents](<https://techcrunch.com/2026/11/16/california-state-ag-sues-openai-over-rogue-agent-incidents/>) — _techcrunch.com_
12. [US moves to cut China's remote access to AI chips](<https://arstechnica.com/tech-policy/2026/11/us-moves-to-cut-chinas-remote-access-to-ai-chips/>) — _arstechnica.com_
13. [DuckDB User Group Workshop on AI-Powered Review Analysis with Hugging Face](<https://duckdb.org/2026/11/17/duckdb-user-group-workshop-ai-powered-review-analysis.html>) — _duckdb.org_
14. [Vector-to-document index conversion is now available](<https://www.pinecone.io/blog/index-conversion/>) — _pinecone_
15. [Turso Sync: Local-First SQLite with Push and Pull](<https://turso.tech/blog/turso-sync-local-first-sqlite-with-push-and-pull>) — _turso.tech_
16. [llm 0.37.3](<https://simonwillison.net/2026/Nov/16/llm/>) — _simonwillison.net_
17. [Building the Agent Host Protocol for sessions that continue across devices](<https://github.blog/engineering/engineering-principles/building-the-agent-host-protocol-for-sessions-that-continue-across-devices/>) — _github.blog_
18. [GitHub Copilot Fusion updates: more availability, benchmarks, and models](<https://github.blog/changelog/2026-11-17-github-copilot-fusion-updates-more-availability-benchmarks-and-models>) — _github.blog_
19. [GitHub Copilot Evals is now in public preview](<https://github.blog/changelog/2026-11-17-github-copilot-evals-is-now-in-public-preview>) — _github.blog_
20. [Copilot code review: Adaptive effort, secret detection, and more](<https://github.blog/changelog/2026-11-17-copilot-code-review-adaptive-effort-secret-detection-and-more>) — _github.blog_
21. [GitHub Copilot CLI adds Microsoft Entra sign-in as a preview](<https://github.blog/changelog/2026-11-17-github-copilot-cli-adds-microsoft-entra-sign-in-as-a-preview>) — _github.blog_
22. [Bashkit](<https://github.com/everruns/bashkit>) — _github.com_
23. [External sandboxes for coding agents](<https://simonwillison.net/2026/Nov/17/external-sandboxes-for-coding-agents/>) — _simonwillison.net_
24. [Inference engineering for software engineers](<https://newsletter.pragmaticengineer.com/p/inference-engineering-for-software-engineers>) — _newsletter.pragmaticengineer.com_
25. [Dependabot alert dismissal requests now last one year](<https://github.blog/changelog/2026-11-16-dependabot-alert-dismissal-requests-now-last-one-year>) — _github.blog_
26. [What's new in dbt: November 2026](<https://www.getdbt.com/blog/whats-new-in-dbt-november-2026>) — _dbt.com_
27. [Build full-stack Android apps with Gemini in Google AI Studio](<https://developers.googleblog.com/build-full-stack-android-apps-with-gemini-in-google-ai-studio/>) — _google ai_
28. [Accelerating development for massive Git repositories](<https://developers.googleblog.com/accelerating-development-for-massive-git-repositories/>) — _google ai_
29. [Monitor GitHub Copilot activity through Microsoft Agent 365](<https://github.blog/changelog/2026-11-17-monitor-github-copilot-activity-through-microsoft-agent-365>) — _github.blog_
30. [httpx is Vulnerable to Remote Code Execution via Oj Object-Mode JSON Deserialization](<https://research.jfrog.com/vulnerabilities/httpx-is-vulnerable-to-remote-code-execution-via-oj-object-mode-deserialization-cve-2026-129784/>) — _research.jfrog.com_
31. [New NoisyTCP Vulnerabilities Lets Attackers Crash Linux Servers](<https://www.bleepingcomputer.com/news/linux/new-noisytcp-linux-kernel-flaw-lets-attackers-crash-servers/>) — _bleepingcomputer.com_
32. [Race Against the (Mac)hine: Local Privilege Escalation in Microsoft Defender for macOS](<https://spaceraccoon.dev/race-against-the-machine-defender-macos-lpe/>) — _spaceraccoon.dev_
33. [From Skiplists to B+ Trees: Making Valkey Sorted Sets More Memory Efficient](<https://valkey.io/blog/from-skiplist-to-b+tree/>) — _valkey.io_
34. [Quoting Go Proverbs](<https://simonwillison.net/2026/Nov/17/go-proverbs/>) — _simonwillison.net_
35. [Linked billing on the Claude Platform](<https://claude.com/resources/articles/linked-billing-on-claude-platform>) — _claude_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
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
| `2026-11-04` | Wednesday | [Read →](news/en/2026-11-04.md) |

<sub>[Browse the full archive (155) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
