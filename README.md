# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-07-01
<sub>updated 2 July 2026 at 01:01</sub>

## AI Models & Releases
- Anthropic releases **Claude Sonnet 5** as the new default mid-tier model, emphasizing agentic capabilities like planning and tool use (browser/terminal), with immediate availability across Claude, Claude Code, API, and partners <sup>[1](<https://www.latent.space/p/ainews-sonnet-5-today-and-fable-5>)</sup><sup>[2](<https://venturebeat.com/technology/anthropic-launches-claude-sonnet-5-at-a-steep-discount-to-its-top-model-as-the-company-races-toward-a-blockbuster-ipo>)</sup><sup>[3](<https://www.anthropic.com/news/claude-sonnet-5>)</sup>.
- Anthropic confirms US Department of Commerce **lifts export controls on Claude Fable 5 and Mythos 5**, with access restoration beginning the next day <sup>[4](<https://simonwillison.net/2026/Jun/30/anthropic/#atom-everything>)</sup><sup>[5](<https://x.com/AnthropicAI/status/2072106151890809341>)</sup><sup>[6](<https://www.wsj.com/tech/ai/anthropic-nears-deal-with-trump-administration-to-restore-access-to-fable-ai-model-6f4177f3?st=uiTjeV&reflink=desktopwebshare_permalink>)</sup><sup>[7](<https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-to-restore-claude-fable-access-on-wednesday/>)</sup>.
- Google launches **Gemini 3.1 Flash Lite Image** (aka Nano Banana 2 Lite), billed as the fastest and cheapest Gemini image model for high-velocity, large-scale generation <sup>[8](<https://simonwillison.net/2026/Jun/30/nano-banana-2-lite/#atom-everything>)</sup><sup>[9](<https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/>)</sup><sup>[10](<https://simonwillison.net/2026/Jun/30/nano-banana-2-lite/>)</sup>.
- Anthropic announces **Claude Science**, an AI workbench app for scientists, integrating fragmented scientific tools into a single environment, natively rendering 3D protein structures, genome browser tracks, and chemical structures <sup>[11](<https://www.anthropic.com/news/claude-science-ai-workbench>)</sup><sup>[12](<https://www.cnbc.com/2026/06/30/anthropic-launches-ai-drug-discovery-program-claude-science.html>)</sup>.
- Hugging Face and Cerebras bring **Gemma 4 to real-time voice AI**, enabling voice chat over WebSocket <sup>[13](<https://huggingface.co/blog/cerebras-gemma4-voice-ai>)</sup>.
- Meituan launches **LongCat-2.0**, a 1.6T parameter Mixture-of-Experts model tailored for agentic coding, multi-step workflows, and long-context processing <sup>[14](<https://www.testingcatalog.com/meituan-launches-longcat-2-0-1-6t-parameter-model-on-apis/>)</sup>.

## Agents, RAG & Tooling
- At AI Engineer World’s Fair, **agent loops and automation** dominate discussions; swyx frames the evolution as chat → tools → goals → automations/cron jobs, with "Loopcraft" (stacking loops) as a core theme for AI engineering <sup>[15](<https://www.latent.space/p/aiewf-daily-dispatch-loops>)</sup>.
- **Software Factories** and persistent agent workers (e.g., "Ralph loops") are highlighted as a pattern for turning AI coding agents into reliable, restartable workers against fixed specs <sup>[15](<https://www.latent.space/p/aiewf-daily-dispatch-loops>)</sup><sup>[16](<https://www.latent.space/p/software-factories>)</sup>.
- Sierra’s and Cursor’s **Forward Deployed Engineers (FDEs)** are described as a role blending systems integration, agent development, and deep customer accountability, reflecting a shift in AI engineering org structures <sup>[17](<https://www.latent.space/p/forward-deployed-engineers-aiewf>)</sup><sup>[18](<https://www.latent.space/p/cursor-forward-deployed-engineers>)</sup><sup>[19](<https://www.cnbc.com/2026/06/30/aws-amazon-ai-forward-deployed-engineers.html>)</sup>.
- Google’s **Genkit** introduces the Agents API, a full-stack tool simplifying conversational AI plumbing with message history, tool loops, and streaming in a single interface, supporting flexible state persistence and multi-agent coordination <sup>[20](<https://developers.googleblog.com/build-agentic-full-stack-apps-with-genkit/>)</sup><sup>[21](<https://developers.googleblog.com/why-we-built-adk-20/>)</sup>.
- Pinecone **Nexus** enters public preview, compiling distributed enterprise knowledge into a reliable source for agents, addressing business context gaps that neither frontier models nor vector search alone can solve <sup>[22](<https://www.pinecone.io/blog/pinecone-nexus-public-preview/>)</sup>.
- Postman argues production-grade AI agents fail mostly from **interface problems** (underspecified APIs, ambiguous data, missing guardrails), urging teams to treat agents as distributed systems built on data, API, and execution quality <sup>[23](<https://blog.postman.com/how-we-really-build-production-grade-ai-agents-beyond-models-toward-data-and-api-quality/>)</sup>.
- Microsoft warns that **AI agent tool metadata can be poisoned**, enabling data theft via MCP-connected tools, and recommends treating MCP servers/descriptions as part of the supply chain with DLP, Sentinel, and Guardrails <sup>[24](<https://www.microsoft.com/en-us/security/blog/2026/06/30/securing-ai-agents-ai-tools-move-from-reading-acting/>)</sup>.
- **GitHub Copilot** adds browser tools (real browser automation), vision (image/PDF reasoning), auto model selection, AI credit session limits, and a C++ language server plugin <sup>[25](<https://github.blog/changelog/2026-07-01-browser-tools-for-github-copilot-in-vs-code-are-generally-available>)</sup><sup>[26](<https://github.blog/changelog/2026-07-01-copilot-vision-is-generally-available>)</sup><sup>[27](<https://github.blog/changelog/2026-07-01-copilot-cli-auto-model-selection-routes-based-on-task>)</sup><sup>[28](<https://github.blog/changelog/2026-07-01-set-ai-credit-session-limits-in-copilot-cli-and-sdk>)</sup><sup>[29](<https://github.blog/changelog/2026-07-01-new-c-language-server-config-skill-for-copilot-cli>)</sup>.
- **OmniRoute** launches as an open-source AI gateway aggregating 236 providers into one endpoint with automatic fallback and token compression <sup>[30](<https://github.com/diegosouzapw/OmniRoute>)</sup>.
- **Herdr** launches as a terminal multiplexer for managing multiple AI coding agents with real-time status <sup>[31](<https://github.com/ogulcancelik/herdr>)</sup>.

## Open Source & Local AI
- **Godot engine bans AI-authored code contributions**, citing maintainability concerns <sup>[32](<https://www.pcgamer.com/gaming-industry/open-source-game-engine-godot-will-no-longer-accept-ai-authored-code-contributions-we-cant-trust-heavy-users-of-ai-to-understand-their-code-enough-to-fix-it/>)</sup>.
- Advocates argue **open-source LLMs are closing the gap** with closed frontier models, strengthening the case for local AI deployments <sup>[33](<https://www.latent.space/p/ahmad-osman-local-ai>)</sup>.
- Shopify joins the **PyTorch Foundation as a Platinum Member**, underscoring its commitment to open AI for commerce <sup>[34](<https://pytorch.org/blog/shopify-joins-the-pytorch-foundation-as-a-platinum-member/>)</sup>.
- **GLM 5.2** outperforms Claude in Semgrep’s cybersecurity coding benchmarks at lower cost, highlighting harness design’s role in real-world effectiveness <sup>[35](<https://semgrep.dev/blog/2026/we-have-mythos-at-home-glm-52-beats-claude-in-our-cyber-benchmarks/>)</sup>.
- **Miles** is released as a PyTorch-native stack for large-scale LLM RL post-training, improving composability and scalability <sup>[36](<https://pytorch.org/blog/miles-a-pytorch-native-stack-for-large-scale-llm-rl-post-training/>)</sup>.

## Engineering & Dev Practices
- **GitHub Models** will be fully retired on July 30, 2026, with brownouts scheduled for July 16 and 23 <sup>[37](<https://github.blog/changelog/2026-07-01-github-models-is-being-fully-retired-on-july-30-2026>)</sup>.
- **GitHub** adds secret scanning validators for Asana, IBM, and MessageBird, and introduces public monitoring for enterprises to detect leaked secrets across GitHub’s public surface <sup>[38](<https://github.blog/changelog/2026-07-01-secret-scanning-adds-validators-for-asana-ibm-and-messagebird>)</sup><sup>[39](<https://github.blog/changelog/2026-07-01-secret-scanning-public-monitoring-for-enterprises>)</sup>.
- **Vercel** now supports deploying any Dockerfile, enabling backends and services that don’t fit its framework detection model <sup>[40](<https://vercel.com/blog/dockerfile-on-vercel>)</sup>.
- **Argo CD 3.5** introduces a first-class ApplicationSet UI for easier management without relying on kubectl or App-of-Apps workarounds <sup>[41](<https://blog.argoproj.io/exposing-applicationsets-beyond-yaml-argo-cds-applicationset-ui-a7a45f3054d2>)</sup>.
- **Dragonfly v2.5.0** adds direct download support for AI model repositories from Hugging Face and ModelScope, plus Kubernetes webhook injection for P2P capabilities <sup>[42](<https://www.cncf.io/blog/2026/06/30/dragonfly-v2-5-0-is-released/>)</sup>.
- **AWS Certificate Manager** now supports ACME for automated TLS certificate issuance, addressing shorter certificate validity periods <sup>[43](<https://aws.amazon.com/blogs/aws/automate-public-tls-certificate-issuance-with-acme-support-in-aws-certificate-manager/>)</sup>.
- **Amazon CloudWatch** launches OTel Container Insights for EKS and managed syslog ingestion <sup>[44](<https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-otel-amazon-eks/>)</sup><sup>[45](<https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-syslog-ingestion/>)</sup>.
- **Grafana Cloud k6** can generate real-world load tests using production telemetry <sup>[46](<https://grafana.com/blog/how-to-generate-real-world-load-tests-using-grafana-cloud-k6-and-production-telemetry/>)</sup>.
- **Expo SDK 57** upgrades to React Native 0.86 with a non-breaking update cadence <sup>[47](<https://expo.dev/changelog/sdk-57>)</sup>.

## Security & Infrastructure
- An anonymous researcher drops **Exploitarium**, a repo with zero-day exploits for libssh2 (CVE-2026-55200) and Gitea Docker (CVE-2026-20896), both currently unpatched <sup>[48](<https://www.theregister.com/security/2026/06/29/anonymous-researcher-drops-0-day-exploitarium-repo/5263961>)</sup>.
- **CVE-2026-6307 (Longinus)** in Chrome’s V8 JIT enables sandbox escape and RCE via a single flaw; patch to 106.0.5249.119+ <sup>[49](<https://lobste.rs/s/uaoe9y>)</sup>.
- **CVE-2026-8037** in Progress Kemp LoadMaster allows pre-auth RCE via uninitialized heap; patch to 7.2.63.2 <sup>[50](<https://labs.watchtowr.com/enterprise-tech-in-shell-out-progress-kemp-loadmaster-uninitialized-heap-to-pre-auth-rce-cve-2026-8037/>)</sup>.
- **Reddit’s anti-spam internals** are exposed, revealing use of algorithms like Spamurai and Perspective API for moderation <sup>[51](<https://lyra.horse/blog/2026/06/reddit-spam-internals/>)</sup>.
- **Apple fixes WebKit flaws** in iOS/macOS with AI-assisted discovery, expediting patches due to AI’s exploit-generation pace <sup>[52](<https://securityaffairs.com/194476/security/apple-fixes-webkit-flaws-in-ios-and-macos-with-help-from-ai-tools.html>)</sup>.
- **AI-powered browsers** can be tricked into accepting false logic (e.g., 2+2=5), enabling data theft via merged browsing/automation features <sup>[53](<https://arstechnica.com/security/2026/06/ai-browsers-can-be-lulled-into-a-dream-world-where-guardrails-no-longer-apply/>)</sup>.
- **Claude Code** is reported to fingerprint China-linked API routers via punctuation in model context, raising transparency concerns <sup>[54](<https://www.vincentschmalbach.com/claude-code-china-router-fingerprint/>)</sup>.

## Sources

1. [\[AINews\] Sonnet 5 today, and Fable 5 tomorrow](<https://www.latent.space/p/ainews-sonnet-5-today-and-fable-5>) — _latent.space_
2. [Anthropic launches Claude Sonnet 5 at a steep discount to its top model as the company races toward a blockbuster IPO](<https://venturebeat.com/technology/anthropic-launches-claude-sonnet-5-at-a-steep-discount-to-its-top-model-as-the-company-races-toward-a-blockbuster-ipo>) — _venturebeat.com_
3. [Claude Sonnet 5](<https://www.anthropic.com/news/claude-sonnet-5>) — _anthropic.com_
4. [Quoting Anthropic](<https://simonwillison.net/2026/Jun/30/anthropic/#atom-everything>) — _simonwillison.net_
5. [The Department of Commerce has lifted export controls on Claude Fable 5 and Mythos 5](<https://x.com/AnthropicAI/status/2072106151890809341>) — _x.com_
6. [Anthropic Reaches Deal With Trump Administration to Restore Access to Fable AI Model](<https://www.wsj.com/tech/ai/anthropic-nears-deal-with-trump-administration-to-restore-access-to-fable-ai-model-6f4177f3?st=uiTjeV&reflink=desktopwebshare_permalink>) — _wsj.com_
7. [Anthropic to restore Claude Fable access on Wednesday](<https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-to-restore-claude-fable-access-on-wednesday/>) — _bleepingcomputer.com_
8. [Nano Banana 2 Lite](<https://simonwillison.net/2026/Jun/30/nano-banana-2-lite/#atom-everything>) — _simonwillison.net_
9. [Nano Banana 2 Lite](<https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/>) — _blog.google_
10. [Nano Banana 2 Lite](<https://simonwillison.net/2026/Jun/30/nano-banana-2-lite/>) — _simonwillison.net_
11. [Claude Science, an AI Workbench for Scientists](<https://www.anthropic.com/news/claude-science-ai-workbench>) — _anthropic.com_
12. [Anthropic launches AI drug discovery program, joining tech giants in betting on healthcare](<https://www.cnbc.com/2026/06/30/anthropic-launches-ai-drug-discovery-program-claude-science.html>) — _cnbc.com_
13. [Hugging Face and Cerebras bring Gemma 4 to real-time voice AI](<https://huggingface.co/blog/cerebras-gemma4-voice-ai>) — _huggingface.co_
14. [Meituan launches LongCat-2.0 1.6T parameter model on APIs](<https://www.testingcatalog.com/meituan-launches-longcat-2-0-1-6t-parameter-model-on-apis/>) — _testingcatalog.com_
15. [AIEWF Daily Dispatch: Loops, Software Factories & Forward Deployed Engineers](<https://www.latent.space/p/aiewf-daily-dispatch-loops>) — _latent.space_
16. [Warp CEO Zach Lloyd on why software factories are the next phase of coding](<https://www.latent.space/p/software-factories>) — _latent.space_
17. [Forward Deployed Engineers and the future of software engineering](<https://www.latent.space/p/forward-deployed-engineers-aiewf>) — _latent.space_
18. [How Cursor deploys AI inside the enterprise](<https://www.latent.space/p/cursor-forward-deployed-engineers>) — _latent.space_
19. [AWS puts $1 billion into new AI unit to embed engineers with customers, joining growing wave](<https://www.cnbc.com/2026/06/30/aws-amazon-ai-forward-deployed-engineers.html>) — _cnbc.com_
20. [Build agentic full-stack apps with Genkit](<https://developers.googleblog.com/build-agentic-full-stack-apps-with-genkit/>) — _google ai_
21. [Why we built ADK 2.0](<https://developers.googleblog.com/why-we-built-adk-20/>) — _google ai_
22. [Pinecone Nexus Is Now in Public Preview](<https://www.pinecone.io/blog/pinecone-nexus-public-preview/>) — _pinecone_
23. [How we really build production-grade AI agents: beyond models, toward data and API quality](<https://blog.postman.com/how-we-really-build-production-grade-ai-agents-beyond-models-toward-data-and-api-quality/>) — _blog.postman.com_
24. [Securing AI agents: When AI tools move from reading to acting](<https://www.microsoft.com/en-us/security/blog/2026/06/30/securing-ai-agents-ai-tools-move-from-reading-acting/>) — _microsoft.com_
25. [Browser tools for GitHub Copilot in VS Code are generally available](<https://github.blog/changelog/2026-07-01-browser-tools-for-github-copilot-in-vs-code-are-generally-available>) — _github.blog_
26. [Copilot vision is generally available](<https://github.blog/changelog/2026-07-01-copilot-vision-is-generally-available>) — _github.blog_
27. [Copilot CLI auto model selection routes based on task](<https://github.blog/changelog/2026-07-01-copilot-cli-auto-model-selection-routes-based-on-task>) — _github.blog_
28. [Set AI credit session limits in Copilot CLI and SDK](<https://github.blog/changelog/2026-07-01-set-ai-credit-session-limits-in-copilot-cli-and-sdk>) — _github.blog_
29. [New C++ language server config skill for Copilot CLI](<https://github.blog/changelog/2026-07-01-new-c-language-server-config-skill-for-copilot-cli>) — _github.blog_
30. [Omniroute](<https://github.com/diegosouzapw/OmniRoute>) — _github.com_
31. [Herdr](<https://github.com/ogulcancelik/herdr>) — _github.com_
32. [Godot will no longer accept AI-authored code contributions](<https://www.pcgamer.com/gaming-industry/open-source-game-engine-godot-will-no-longer-accept-ai-authored-code-contributions-we-cant-trust-heavy-users-of-ai-to-understand-their-code-enough-to-fix-it/>) — _hnrss.org_
33. [Ahmad Osman on why local AI is catching up](<https://www.latent.space/p/ahmad-osman-local-ai>) — _latent.space_
34. [Shopify Joins the PyTorch Foundation as a Platinum Member](<https://pytorch.org/blog/shopify-joins-the-pytorch-foundation-as-a-platinum-member/>) — _pytorch.org_
35. [Semgrep: GLM 5.2 Beats Claude in Cybersecurity Coding Benchmarks](<https://semgrep.dev/blog/2026/we-have-mythos-at-home-glm-52-beats-claude-in-our-cyber-benchmarks/>) — _semgrep.dev_
36. [Miles: A PyTorch-Native Stack for Large-Scale LLM RL Post-Training](<https://pytorch.org/blog/miles-a-pytorch-native-stack-for-large-scale-llm-rl-post-training/>) — _pytorch.org_
37. [GitHub Models is being fully retired on July 30, 2026](<https://github.blog/changelog/2026-07-01-github-models-is-being-fully-retired-on-july-30-2026>) — _github.blog_
38. [Secret scanning adds validators for Asana, IBM, and MessageBird](<https://github.blog/changelog/2026-07-01-secret-scanning-adds-validators-for-asana-ibm-and-messagebird>) — _github.blog_
39. [Secret scanning public monitoring for enterprises](<https://github.blog/changelog/2026-07-01-secret-scanning-public-monitoring-for-enterprises>) — _github.blog_
40. [Run any Dockerfile on Vercel](<https://vercel.com/blog/dockerfile-on-vercel>) — _vercel.com_
41. [Exposing ApplicationSets Beyond YAML: Argo CD's ApplicationSet UI](<https://blog.argoproj.io/exposing-applicationsets-beyond-yaml-argo-cds-applicationset-ui-a7a45f3054d2>) — _blog.argoproj.io_
42. [Dragonfly v2.5.0 is released](<https://www.cncf.io/blog/2026/06/30/dragonfly-v2-5-0-is-released/>) — _cncf.io_
43. [Automate public TLS certificate issuance with ACME support in AWS Certificate Manager](<https://aws.amazon.com/blogs/aws/automate-public-tls-certificate-issuance-with-acme-support-in-aws-certificate-manager/>) — _aws.amazon.com_
44. [Amazon CloudWatch launches OTel Container Insights for Amazon EKS](<https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-otel-amazon-eks/>) — _aws.amazon.com_
45. [Amazon CloudWatch Logs supports managed syslog ingestion](<https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-syslog-ingestion/>) — _aws.amazon.com_
46. [How to generate real-world load tests using Grafana Cloud k6 and production telemetry](<https://grafana.com/blog/how-to-generate-real-world-load-tests-using-grafana-cloud-k6-and-production-telemetry/>) — _grafana.com_
47. [Expo 57](<https://expo.dev/changelog/sdk-57>) — _expo.dev_
48. [Anonymous Researcher Drops 0-day 'Exploitarium' Repo](<https://www.theregister.com/security/2026/06/29/anonymous-researcher-drops-0-day-exploitarium-repo/5263961>) — _theregister.com_
49. [Longinus: 2 Boundaries in One Bug, Piercing Chrome's Renderer and V8 Sandbox with a Single Vulnerability, CVE-2026-6307](<https://lobste.rs/s/uaoe9y>) — _lobste.rs_
50. [Enterprise Tech In, Shell Out (Progress Kemp LoadMaster Uninitialized Heap to Pre-Auth RCE CVE-2026-8037)](<https://labs.watchtowr.com/enterprise-tech-in-shell-out-progress-kemp-loadmaster-uninitialized-heap-to-pre-auth-rce-cve-2026-8037/>) — _labs.watchtowr.com_
51. [A peek into Reddit's anti-spam internals](<https://lyra.horse/blog/2026/06/reddit-spam-internals/>) — _lyra.horse_
52. [Apple Fixes WebKit Flaws in iOS and macOS, With Help From AI Tools](<https://securityaffairs.com/194476/security/apple-fixes-webkit-flaws-in-ios-and-macos-with-help-from-ai-tools.html>) — _securityaffairs.com_
53. [New attack provides one more reason why AI browsers are a bad idea](<https://arstechnica.com/security/2026/06/ai-browsers-can-be-lulled-into-a-dream-world-where-guardrails-no-longer-apply/>) — _arstechnica.com_
54. [Claude Code Is Quietly Fingerprinting China-Linked API Routers](<https://www.vincentschmalbach.com/claude-code-china-router-fingerprint/>) — _vincentschmalbach.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-07-01` | Wednesday | [Read →](news/en/2026-07-01.md) |
| `2026-06-30` | Tuesday | [Read →](news/en/2026-06-30.md) |
| `2026-06-29` | Monday | [Read →](news/en/2026-06-29.md) |
| `2026-06-28` | 🗓️ Weekly recap | [Read →](news/en/2026-06-28.md) |
| `2026-06-27` | Saturday | [Read →](news/en/2026-06-27.md) |
| `2026-06-26` | Friday | [Read →](news/en/2026-06-26.md) |
| `2026-06-25` | Thursday | [Read →](news/en/2026-06-25.md) |
| `2026-06-24` | Wednesday | [Read →](news/en/2026-06-24.md) |
| `2026-06-23` | Tuesday | [Read →](news/en/2026-06-23.md) |
| `2026-06-22` | Monday | [Read →](news/en/2026-06-22.md) |
| `2026-06-21` | 🗓️ Weekly recap | [Read →](news/en/2026-06-21.md) |
| `2026-06-20` | Saturday | [Read →](news/en/2026-06-20.md) |
| `2026-06-19` | Friday | [Read →](news/en/2026-06-19.md) |
| `2026-06-18` | Thursday | [Read →](news/en/2026-06-18.md) |

<sub>[Browse the full archive (17) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
