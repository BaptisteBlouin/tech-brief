# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-11-18
<sub>updated 19 November 2026 at 00:00</sub>

## AI models and LLM tooling

- OpenAI launched GPT-6.2 Astra and Sol on ChatGPT and the API, aimed at professional work, with Astra for the hardest projects and Sol for everyday tasks <sup>[1](<https://latent.space/p/ainews-gpt-6-2-astra-the-2-frontier-model-is-better-and-20-600-cheaper-but-has-mixed-reviews-6-2-sol/>), [2](<https://www.testingcatalog.com/openai-launches-gpt-6-2-astra-and-sol-on-chatgpt-and-apis/>)</sup>. Both use fewer output tokens than previous releases <sup>[2](<https://www.testingcatalog.com/openai-launches-gpt-6-2-astra-and-sol-on-chatgpt-and-apis/>)</sup>. Artificial Analysis scores Astra at 62 on its Intelligence Index, just behind Fable 5.2 at 65, and Sol ties Astra at about 15% of the cost per task <sup>[1](<https://latent.space/p/ainews-gpt-6-2-astra-the-2-frontier-model-is-better-and-20-600-cheaper-but-has-mixed-reviews-6-2-sol/>)</sup>. Reviews are mixed, with some criticism of RL artefacts <sup>[1](<https://latent.space/p/ainews-gpt-6-2-astra-the-2-frontier-model-is-better-and-20-600-cheaper-but-has-mixed-reviews-6-2-sol/>)</sup>.
- Google's Gemini 4 Neon scores 61 on the Artificial Analysis Intelligence Index at its xhigh thinking level, ranking #3 overall and just behind larger, slower models, and #2 on the Vals Index <sup>[3](<https://deepmind.google/blog/introducing-gemini-4-neon/>)</sup>. It is generally available in GitHub Copilot, where Google reports quality close to Gemini 4 Carbon at a lower token cost per task, faster starts and fewer unrequested changes on coding tasks <sup>[4](<https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot>)</sup>.
- Microsoft released seven new models; its MAI Code 2 coding model, now in GitHub Copilot, reaches 98% of GPT-6.1 Sol's coding quality at about 40% of the price <sup>[5](<https://microsoft.ai/news/microsoft-ignite-2026/>)</sup>.
- Cloudflare released updated open-weight Clairic and the 9B Clairic-flash for document extraction, hosted on Workers AI with weights on Hugging Face <sup>[6](<https://blog.cloudflare.com/open-clairic/>)</sup>.
- Vercel released eve 1.0, an open-source framework for production AI agents that manages the model and tool loop, memory, approvals and monitoring <sup>[7](<https://vercel.com/blog/eve-is-now-generally-available>)</sup>. Replit launched Missions to coordinate agent swarms within budgets <sup>[8](<https://replit.com/blog/introducing-replit-missions>)</sup>.
- Horizon, an agent built on Opus 5.5, autonomously created 38 models over more than 600 GPU hours, now housed in over 100 repositories and downloaded more than 50,000 times <sup>[9](<https://horizon-labs.ai/>)</sup>.

## Agent tooling, security and coding practice

- GitHub made eight more services available to Copilot through MCP connectors in public preview, including Supabase, Buildkite and Box <sup>[10](<https://github.blog/changelog/2026-11-18-connect-supabase-box-calendly-and-more-to-copilot>)</sup>. Team-level plugin defaults are generally available for organization teams <sup>[11](<https://github.blog/changelog/2026-11-18-customize-github-copilot-for-your-team>)</sup>.
- Daniel Stenberg reports that agents converted about 185,000 lines of C into 340,000 lines of Rust while over 300 curl commits added about 200 bugfixes and a few vulnerability fixes <sup>[12](<https://simonwillison.net/2026/Nov/18/daniel-stenberg/>), [13](<https://daniel.haxx.se/blog/2026/11/17/actual-curl-rewrites-in-rust/>)</sup>.
- Calif disclosed Java4Shell (CVE-2026-114938), a CVSS 9.2 memory-corruption flaw in OpenJDK's Base64 decoder that can enable remote code execution; patched Oracle builds shipped in the November 2026 CPU, and Cloudflare describes its WAF protection <sup>[14](<https://blog.cloudflare.com/java4shell-waf-protection/>), [15](<https://calif.io/java4shell/>)</sup>.
- A WPPConnect compromise shipped a malicious "diagnostics" module through the project's own trusted-publishing pipeline, leaking environment variables and WhatsApp session tokens; the payload runs on import, so --ignore-scripts does not stop it <sup>[16](<https://www.stepsecurity.io/blog/wppconnect-compromised-malicious-releases-steal-secrets-and-whatsapp-sessions>)</sup>.
- A malicious ONNX model abused a parser flaw in ONNX Runtime to leak host files; defenders should upgrade to onnxruntime v1.27.0 or later <sup>[17](<https://phrack.org/issues/73/backdoor-attacks-against-machine-learning-irl>)</sup>.
- Replit's Missions and Uber's Secure AI Framework show agent governance in practice, with Uber judging each proposed agent action against user request, permissions and context <sup>[8](<https://replit.com/blog/introducing-replit-missions>), [18](<https://www.infoq.com/news/2026/11/uber-secure-ai-framework/>)</sup>.

## DevOps, infrastructure and data

- Kubernetes plans to remove the kube-proxy IPVS backend in 2026 to simplify the codebase <sup>[19](<https://kubernetes.io/blog/2026/11/16/ipvs-removal/>)</sup>.
- Salesforce combined vertical and horizontal autoscaling on EKS, reporting over $5 million in cumulative savings; VPA sizes CPU and memory while HPA scales Istio replicas by proxy connection count <sup>[20](<https://aws.amazon.com/blogs/containers/how-salesforce-efficiently-right-sizes-kubernetes-workloads-at-scale-on-amazon-eks/>)</sup>.
- Pinecone's pg_pinecone Postgres extension is about 15 times smaller than a pgvector HNSW index on 1 million vectors at the same recall, and is now deployable on Railway <sup>[21](<https://www.pinecone.io/blog/pg-pinecone-railway/>)</sup>.
- An OpenTelemetry guide covers memory-limiter placement, sampling trade-offs and trace-aware routing for tail sampling when Collectors scale horizontally <sup>[22](<https://www.cncf.io/blog/2026/11/17/is-your-opentelemetry-pipeline-becoming-a-performance-bottleneck/>)</sup>.
- PostHog gates expensive LLM calls with decision models, letting 98.7% of session summaries skip a rewriting call, though thresholds need per-task calibration <sup>[23](<https://newsletter.posthog.com/p/decision-models>)</sup>.

## Search, publishing and AI answers

- Google's AI Overviews appear on more than half the US keywords tracked by DataForSEO, up from 6% two years ago <sup>[24](<https://revscope.co/blog/search-seo-geo-2026/>)</sup>.
- In a randomized experiment, an AI Overview cut clicks to outside websites by about 40% <sup>[24](<https://revscope.co/blog/search-seo-geo-2026/>)</sup>. AI assistants sent websites just 0.3% of their traffic in March <sup>[24](<https://revscope.co/blog/search-seo-geo-2026/>)</sup>.
- A Berlin travel publisher reports losing 70% to 75% of its traffic to Google AI Overviews <sup>[25](<https://nicolasbouliane.com/blog/death-by-ai>)</sup>.

## Applied AI and industry

- Osmo says its smell foundation model, trained on expert sniffer annotations cross-referenced with chemical analysis, has reached "human-level olfactory intelligence" <sup>[26](<https://www.technologyreview.com/2026/11/18/1148816/smell-startup-osmo-ai-nose-good-as-humans/>)</sup>.
- OpenAI and Le Groupe Figaro partnered to bring Le Figaro journalism into ChatGPT through summaries and excerpts linking to original stories <sup>[27](<https://openai.com/index/le-groupe-figaro-and-openai-announce-partnership>)</sup>.

## Sources

1. [\[AINews\] GPT-6.2 Astra, the #2 Frontier Model is better and 20%-600% cheaper, but has mixed reviews; 6.2 Sol likely main workhorse](<https://latent.space/p/ainews-gpt-6-2-astra-the-2-frontier-model-is-better-and-20-600-cheaper-but-has-mixed-reviews-6-2-sol/>) — _latent.space_
2. [OpenAI launches GPT-6.2 Astra and Sol on ChatGPT and APIs](<https://www.testingcatalog.com/openai-launches-gpt-6-2-astra-and-sol-on-chatgpt-and-apis/>) — _testingcatalog.com_
3. [Introducing Gemini 4 Neon](<https://deepmind.google/blog/introducing-gemini-4-neon/>) — _deepmind.google_
4. [Gemini 4 Neon in GitHub Copilot](<https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot>) — _github.blog_
5. [Microsoft's Seven New Models](<https://microsoft.ai/news/microsoft-ignite-2026/>) — _microsoft.ai_
6. [An updated Clairic and Clairic-flash are now open-weight, from the new Workers AI Superintelligence team](<https://blog.cloudflare.com/open-clairic/>) — _blog.cloudflare.com_
7. [Vercel's eve 1.0](<https://vercel.com/blog/eve-is-now-generally-available>) — _vercel.com_
8. [Introducing Replit Missions](<https://replit.com/blog/introducing-replit-missions>) — _replit.com_
9. [Horizon Labs](<https://horizon-labs.ai/>) — _horizon-labs.ai_
10. [Connect Supabase, Box, Calendly, and more to Copilot](<https://github.blog/changelog/2026-11-18-connect-supabase-box-calendly-and-more-to-copilot>) — _github.blog_
11. [Customize GitHub Copilot for your team](<https://github.blog/changelog/2026-11-18-customize-github-copilot-for-your-team>) — _github.blog_
12. [Quoting Daniel Stenberg](<https://simonwillison.net/2026/Nov/18/daniel-stenberg/>) — _simonwillison.net_
13. [Actual curl rewrites in rust](<https://daniel.haxx.se/blog/2026/11/17/actual-curl-rewrites-in-rust/>) — _daniel.haxx.se_
14. [How Cloudflare WAF helps protect against Java4Shell (CVE-2026-114938)](<https://blog.cloudflare.com/java4shell-waf-protection/>) — _blog.cloudflare.com_
15. [Java4Shell](<https://calif.io/java4shell/>) — _calif.io_
16. [WPPConnect Compromised: Malicious Releases Steal Secrets and WhatsApp Sessions Through the Project's Own Pipeline](<https://www.stepsecurity.io/blog/wppconnect-compromised-malicious-releases-steal-secrets-and-whatsapp-sessions>) — _stepsecurity.io_
17. [Backdoor Attacks Against Machine Learning IRL](<https://phrack.org/issues/73/backdoor-attacks-against-machine-learning-irl>) — _phrack.org_
18. [Uber's Secure AI Framework Governs Autonomous AI Agents across Their Lifecycle](<https://www.infoq.com/news/2026/11/uber-secure-ai-framework/>) — _infoq.com_
19. [Scheduling the removal of the kube-proxy IPVS backend](<https://kubernetes.io/blog/2026/11/16/ipvs-removal/>) — _kubernetes.io_
20. [How Salesforce efficiently right-sizes Kubernetes workloads at scale on Amazon EKS](<https://aws.amazon.com/blogs/containers/how-salesforce-efficiently-right-sizes-kubernetes-workloads-at-scale-on-amazon-eks/>) — _aws.amazon.com_
21. [pg_pinecone now deploys on Railway in one click](<https://www.pinecone.io/blog/pg-pinecone-railway/>) — _pinecone_
22. [Is your OpenTelemetry pipeline becoming a performance bottleneck?](<https://www.cncf.io/blog/2026/11/17/is-your-opentelemetry-pipeline-becoming-a-performance-bottleneck/>) — _cncf.io_
23. [Not Everything Needs an LLM](<https://newsletter.posthog.com/p/decision-models>) — _newsletter.posthog.com_
24. [Google's AI answers reducing search traffic by 40%](<https://revscope.co/blog/search-seo-geo-2026/>) — _hnrss.org_
25. [AI is killing All About Berlin](<https://nicolasbouliane.com/blog/death-by-ai>) — _hnrss.org_
26. [This smell startup says its AI nose is as good as a human’s](<https://www.technologyreview.com/2026/11/18/1148816/smell-startup-osmo-ai-nose-good-as-humans/>) — _technologyreview.com_
27. [Le Groupe Figaro and OpenAI partner to bring Le Figaro journalism to ChatGPT](<https://openai.com/index/le-groupe-figaro-and-openai-announce-partnership>) — _openai.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-11-18` | Wednesday | [Read →](news/en/2026-11-18.md) |
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

<sub>[Browse the full archive (156) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
