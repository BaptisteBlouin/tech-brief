# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-10-13
<sub>updated 14 October 2026 at 01:00</sub>

## Models

- OpenAI's Higgsfield announcement says creators can now get videos over 10 minutes long, up from 1 minute, using GPT-6 Astra, with precise visuals from GPT-Image-2.5 and a path to voice filmmaking with GPT-Live <sup>[1](<https://openai.com/index/higgsfield-longer-videos-voice>)</sup>.
- Meta launched Muse Wonder and Wonder Full, its first frontier-class models, with stronger coding, benchmark gains, and Active Memory for retaining user-provided information <sup>[2](<https://research.meta.ai/blog/muse-wonder>), [3](<https://www.latent.space/p/ainews-meta-muse-wonder-and-wonder>)</sup>.
- Muse Wonder is available through the Meta Model API and Muse Code, while Wonder Full is limited to Muse Code subscribers <sup>[4](<https://www.testingcatalog.com/meta-launches-muse-wonder-and-wonder-full-for-ai-agents/>)</sup>.
- Google's Gemini 4 Argon is generally available in GitHub Copilot for Pro+, Max, Business, and Enterprise users, billed at provider list pricing under usage-based billing <sup>[5](<https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot>)</sup>.
- Gemini 4 Argon scores 87% on the Embodied Reasoning (ERQA) benchmark, which Google says outperforms every other frontier model, and Google positions it as a general-purpose physical reasoning model for robotics <sup>[6](<https://deepmind.google/blog/gemini-4-argon-for-robotics/>), [7](<https://developers.googleblog.com/gemini-4-argon-for-robotics/>)</sup>.
- Anthropic says new limits on access to Claude's reasoning cut data harvested by distillation attacks by 90% to 99%, and names Z.ai as one company that tried to copy Claude while building GLM-5.3 <sup>[8](<https://www.reuters.com/world/china/anthropic-says-new-safeguards-sharply-reduce-ai-distillation-attacks-2026-10-13/>)</sup>.
- Microsoft unveiled the Maia 300 inference accelerator, claiming 40% better performance per megawatt than leading GPU-based systems, with large-scale deployment planned from 2027 <sup>[9](<https://news.microsoft.com/maia-2026/>), [10](<https://www.bloomberg.com/news/articles/2026-10-12/microsoft-prepares-to-put-gigawatts-of-its-chips-in-data-centers>)</sup>.
- LiquidAI's LFM2.5-24B-A2B is presented for fast, private on-device agents <sup>[11](<https://huggingface.co/blog/LiquidAI/lfm25-24b-a2b>)</sup>.

## Agents, RAG and LLM engineering

- A Hugging Face post reports that offloading step-completion checks and bounded decisions to a decision model cut Qwen agent LLM calls by 29.6%, estimated API costs by 26.6%, and latency by 19.7% <sup>[12](<https://discuss.huggingface.co/t/offloading-bounded-decisions-cut-agent-llm-calls-by-29-6-on-360-sop-bench-cases/190420>)</sup>.
- Perplexity describes a lightweight Git forge backed by S3 for shared workspaces where people and agents build on durable files; fewer than 2% of submissions are rejected as stale, with median submit latency below 1.7 seconds <sup>[13](<https://www.perplexity.ai/hub/blog/building-shared-workspaces-for-people-and-agents>)</sup>.
- Simon Willison notes Meta's new Muse Wonder models at six reasoning levels and says Meta is shipping a new model roughly monthly <sup>[14](<https://simonwillison.net/2026/Oct/12/llm-meta-ai/>)</sup>.
- A Geoffrey Huntley quote describes a pre-commit hook that fails commits bypassing an internal diagnostics library and injects a prompt steering the agent to use it <sup>[15](<https://simonwillison.net/2026/Oct/13/geoffrey-huntley/>)</sup>.
- Google reports that Gemini 4 Argon, run unattended overnight on the 205,000-line google/adk-python repository, cut ADK's in-memory session prep time by about 40% in an 11-hour run <sup>[16](<https://developers.googleblog.com/optimizing-a-200000-line-python-codebase-overnight-with-gemini-4-argon/>)</sup>.
- A post on securing the agentic SDLC argues that prompts are not permissions: a planted instruction in an issue or config file can steer a coding agent into leaking secrets, so limits belong in isolated workspaces, task-scoped identities, short-lived credentials, and network policy <sup>[17](<https://vinny.dev/blog/2026-10-12-the-prompt-is-not-the-permission-securing-the-agentic-sdlc/>)</sup>.
- A security writeup reports that CyberXero used Claude Code with 51 agents and PentAGI in campaigns that stole over 628,000 Ukrainian records, with one run scanning 4,708 targets and deploying 32 web shells in 61 seconds <sup>[18](<https://thehackernews.com/2026/10/cyberxero-uses-claude-code-in-campaign.html>)</sup>.
- Breachcache recovered 75 transcripts from servers running autonomous AI agent intrusions, in which agents gained command execution on 23 hosts <sup>[19](<https://breachcache.com/cases/hands-off-the-keyboard/>)</sup>.
- An arXiv paper shows AI models can provably hide capabilities via encrypted networks embedded in weights, resisting fine-tuning, weight noising, and gradient-based trigger search, which limits elicitation-based capability audits <sup>[20](<https://arxiv.org/abs/2610.13928>)</sup>.

## DevOps, infrastructure and cloud

- Cloudflare describes how D1, its SQLite-based serverless database, scales its control plane to millions of databases, with hundreds of thousands active at once, without routing every query through centralized bottlenecks <sup>[21](<https://blog.cloudflare.com/d1-control-plane/>)</sup>.
- Cloudflare reports its data pipeline delivers roughly two billion events per second and describes how it keeps hardware usage down as traffic grows exponentially against linear hardware growth <sup>[22](<https://blog.cloudflare.com/rewinding-the-exponential/>)</sup>.
- GitHub's enterprise managed settings can now force Copilot clients to refresh server-managed policy at startup, failing closed when current policy cannot be confirmed <sup>[23](<https://github.blog/changelog/2026-10-13-enterprise-managed-settings-enforcement-updates>)</sup>.
- GitHub's client telemetry can attribute Copilot activity to users via OpenTelemetry attributes, with identity capture off by default and separate controls for prompts, responses, and tool arguments <sup>[24](<https://github.blog/changelog/2026-10-12-client-telemetry-user-attribution-and-configurable-capture>)</sup>.
- PyTorch describes IBM's Spyre accelerator moving its torch.compile backend onto Inductor, reporting a compiler roughly 7x smaller than the stack it replaced <sup>[25](<https://pytorch.org/blog/extending-inductor-for-the-ibm-spyre-accelerator/>)</sup>.
- GitHub's secret scanning now blocks Anthropic API keys by default in push protection and adds a Salesforce partner token type <sup>[26](<https://github.blog/changelog/2026-10-13-secret-scanning-blocks-anthropic-keys-by-default-adds-salesforce>)</sup>.

## Security and supply chain

- A Linux vhost bug, CVE-2026-74580 (CVSS 8.8), lets any user with access to /dev/vhost-net or /dev/vhost-vsock escalate to root on kernels 4.11 through 7.2; admins should patch to commit de845981da67 or remove world access from both device nodes <sup>[27](<https://matrix.tencent.com/en/2026/10/12/vghost-cve-2026-74580>)</sup>.
- Three OAuth account takeovers in Pingvin Share X, Better Auth, and AshAuthentication stemmed from auto-linking OAuth sign-ins to existing accounts by email; the advice is to match on issuer and subject ID and require verified emails on both sides <sup>[28](<https://workos.com/blog/oauth-auto-link-email-account-takeover>)</sup>.
- A writeup describes a $90,000 bounty for a Google DevSite RCE, where an OAuth secret stored in a Flask session cookie doubled as the signing key, enabling forged sessions that reached unsafe pickle deserialization <sup>[29](<https://simonkoeck.com/writeups/google-devsite-flask-session-pickle-rce>)</sup>.
- Rust's borrow checker has an 11-year-old soundness issue where a struct's lifetime requirements can be bypassed via covariant field assignment <sup>[30](<https://github.com/rust-lang/rust/issues/164250>)</sup>.
- GitHub's Dependabot now sends a withdrawn action on the dependabot_alert webhook, and the REST API returns 410 Gone for withdrawn alerts instead of 404 <sup>[31](<https://github.blog/changelog/2026-10-13-improved-detection-for-withdrawn-dependabot-alerts>)</sup>.
- GitHub code scanning adds AI Scan metrics to security overview, covering findings, remediation rate, and autofix usage, in public preview <sup>[32](<https://github.blog/changelog/2026-10-13-code-scanning-ai-scan-metrics-in-security-overview>)</sup>.

## Developer tools and software engineering

- Uber's CISO describes using Claude to gather threat-modeling context from code, design docs, and ticket history, and argues AI agents need an insider threat program <sup>[33](<https://claude.com/resources/articles/uber-s-ciso-on-building-an-insider-threat-program-for-ai>)</sup>.
- Robert C. Martin suggests not reading AI-written code and relying instead on constraints such as unit tests and QA procedures, raising liability questions <sup>[34](<https://blog.ploeh.dk/2026/10/12/releasing-ai-generated-software/>)</sup>.
- An essay proposes that AI code review will increasingly replace reading every diff, shifting human work toward requirements, acceptance testing, and release ownership <sup>[35](<https://scienceisneato.substack.com/p/human-pr-review-is-next>)</sup>.
- A game-development post proposes making a game legible to AI agents and speeding agentic iteration, with the game itself acting as a harness <sup>[36](<https://kylekukshtel.com/ai-harness-engineering-game-development-claude-code>)</sup>.
- Epic Games is reportedly shifting to an AI-first development model for its Disney collaboration, with humans guiding AI-generated code and art assets <sup>[37](<https://arstechnica.com/gaming/2026/10/report-epic-games-goes-all-in-on-ai-for-disney-collaboration/>)</sup>.
- GitHub's audit log now records manual dismissals and reopenings of Code Quality findings <sup>[38](<https://github.blog/changelog/2026-10-13-audit-github-code-quality-finding-dismissals-and-reopenings>)</sup>.

## Sources

1. [Higgsfield takes AI video from 1 minute to over 10](<https://openai.com/index/higgsfield-longer-videos-voice>) — _openai.com_
2. [Muse Wonder](<https://research.meta.ai/blog/muse-wonder>) — _research.meta.ai_
3. [\[AINews\] Meta Muse Wonder & Wonder Full: MSL’s Claude 5.5-tier Frontier Model](<https://www.latent.space/p/ainews-meta-muse-wonder-and-wonder>) — _latent.space_
4. [Meta launches Muse Wonder and Wonder Full for AI agents](<https://www.testingcatalog.com/meta-launches-muse-wonder-and-wonder-full-for-ai-agents/>) — _testingcatalog.com_
5. [Gemini 4 Argon in GitHub Copilot](<https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot>) — _github.blog_
6. [Gemini 4 Argon for Robotics](<https://deepmind.google/blog/gemini-4-argon-for-robotics/>) — _deepmind.google_
7. [Gemini 4 Argon for Robotics](<https://developers.googleblog.com/gemini-4-argon-for-robotics/>) — _google ai_
8. [Anthropic says new safeguards sharply reduce AI distillation attacks](<https://www.reuters.com/world/china/anthropic-says-new-safeguards-sharply-reduce-ai-distillation-attacks-2026-10-13/>) — _reuters.com_
9. [Microsoft Introduced the Maia 300 AI Chip](<https://news.microsoft.com/maia-2026/>) — _news.microsoft.com_
10. [Microsoft Prepares to Put Gigawatts of Its Chips in Data Centers](<https://www.bloomberg.com/news/articles/2026-10-12/microsoft-prepares-to-put-gigawatts-of-its-chips-in-data-centers>) — _bloomberg.com_
11. [Run fast, private agents on-device with LFM2.5-24B-A2B](<https://huggingface.co/blog/LiquidAI/lfm25-24b-a2b>) — _huggingface.co_
12. [Decision Models Cut Agent LLM Calls by 29.6%](<https://discuss.huggingface.co/t/offloading-bounded-decisions-cut-agent-llm-calls-by-29-6-on-360-sop-bench-cases/190420>) — _discuss.huggingface.co_
13. [Building Shared Workspaces for People and Agents](<https://www.perplexity.ai/hub/blog/building-shared-workspaces-for-people-and-agents>) — _perplexity.ai_
14. [llm-meta-ai 0.2](<https://simonwillison.net/2026/Oct/12/llm-meta-ai/>) — _simonwillison.net_
15. [Quoting Geoffrey Huntley](<https://simonwillison.net/2026/Oct/13/geoffrey-huntley/>) — _simonwillison.net_
16. [Optimizing a 200,000-line Python codebase overnight with Gemini 4 Argon](<https://developers.googleblog.com/optimizing-a-200000-line-python-codebase-overnight-with-gemini-4-argon/>) — _google ai_
17. [The Prompt Is Not the Permission: Securing the Agentic SDLC](<https://vinny.dev/blog/2026-10-12-the-prompt-is-not-the-permission-securing-the-agentic-sdlc/>) — _vinny.dev_
18. [CyberXero Uses Claude Code in Campaign That Stole Over 628,000 Ukrainian Records](<https://thehackernews.com/2026/10/cyberxero-uses-claude-code-in-campaign.html>) — _thehackernews.com_
19. [Hands Off the Keyboard: How AI Agents Run Real Intrusions](<https://breachcache.com/cases/hands-off-the-keyboard/>) — _breachcache.com_
20. [AI models can provably hide arbitrary capabilities](<https://arxiv.org/abs/2610.13928>) — _hnrss.org_
21. [Under the hood, off the hot path: How D1 scales to millions of databases](<https://blog.cloudflare.com/d1-control-plane/>) — _blog.cloudflare.com_
22. [Rewinding the exponential: How we keep hardware usage down](<https://blog.cloudflare.com/rewinding-the-exponential/>) — _blog.cloudflare.com_
23. [Enterprise managed settings enforcement updates](<https://github.blog/changelog/2026-10-13-enterprise-managed-settings-enforcement-updates>) — _github.blog_
24. [Client telemetry user attribution and configurable capture](<https://github.blog/changelog/2026-10-12-client-telemetry-user-attribution-and-configurable-capture>) — _github.blog_
25. [Extending Inductor for the IBM Spyre Accelerator](<https://pytorch.org/blog/extending-inductor-for-the-ibm-spyre-accelerator/>) — _pytorch.org_
26. [Secret scanning blocks Anthropic keys by default, adds Salesforce](<https://github.blog/changelog/2026-10-13-secret-scanning-blocks-anthropic-keys-by-default-adds-salesforce>) — _github.blog_
27. [Vghost: Beyond the Privilege Boundary](<https://matrix.tencent.com/en/2026/10/12/vghost-cve-2026-74580>) — _matrix.tencent.com_
28. [Three OAuth account takeovers, one bug: Auto-linking by email](<https://workos.com/blog/oauth-auto-link-email-account-takeover>) — _workos.com_
29. [How I Found a $90,000 Remote Code Execution Vulnerability in Google](<https://simonkoeck.com/writeups/google-devsite-flask-session-pickle-rce>) — _simonkoeck.com_
30. [11 year old unsoundness bugs found in Rust borrow checker](<https://github.com/rust-lang/rust/issues/164250>) — _hnrss.org_
31. [Improved detection for withdrawn Dependabot alerts](<https://github.blog/changelog/2026-10-13-improved-detection-for-withdrawn-dependabot-alerts>) — _github.blog_
32. [Code scanning AI Scan metrics in security overview](<https://github.blog/changelog/2026-10-13-code-scanning-ai-scan-metrics-in-security-overview>) — _github.blog_
33. [Uber's CISO on building an insider threat program for AI](<https://claude.com/resources/articles/uber-s-ciso-on-building-an-insider-threat-program-for-ai>) — _claude_
34. [Releasing AI-generated software](<https://blog.ploeh.dk/2026/10/12/releasing-ai-generated-software/>) — _blog.ploeh.dk_
35. [Human PR Review Is Next](<https://scienceisneato.substack.com/p/human-pr-review-is-next>) — _scienceisneato.substack.com_
36. [How to engineer an AI harness for game development](<https://kylekukshtel.com/ai-harness-engineering-game-development-claude-code>) — _hnrss.org_
37. [Epic Games reportedly pivoting to “AI first” game development model](<https://arstechnica.com/gaming/2026/10/report-epic-games-goes-all-in-on-ai-for-disney-collaboration/>) — _arstechnica.com_
38. [Audit GitHub Code Quality finding dismissals and reopenings](<https://github.blog/changelog/2026-10-13-audit-github-code-quality-finding-dismissals-and-reopenings>) — _github.blog_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
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
| `2026-10-01` | Thursday | [Read →](news/en/2026-10-01.md) |
| `2026-09-30` | Wednesday | [Read →](news/en/2026-09-30.md) |

<sub>[Browse the full archive (121) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
