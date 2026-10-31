# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-10-30
<sub>updated 31 October 2026 at 00:01</sub>

## AI Agents and Engineering Practice

- Agent speed work spans several levers: knowing which part of inference a project depends on, reading thinking budgets and traces, and giving agents the tools they prefer over the ones you assume they need <sup>[1](<https://martinalderson.com/posts/making-agents-fast/>)</sup>.
- A proposed way to add determinism to agents without crippling them is an egress proxy that denies actions and injects automated follow-up messages, so the agent keeps freedom in tool choice <sup>[2](<https://cra.mr/a-little-determinism>)</sup>.
- Agents can now automate many tasks that earlier models could not, so simply asking an AI to do a task is often worth trying first <sup>[3](<https://www.seangoedecke.com/you-can-just-ask-ai-to-do-things/>)</sup>.
- Agent swarms without a designated leader showed that a member's leadership depends on its underlying model and on the order its name appears in the prompt, so small configuration details shape coordination <sup>[4](<https://www.raindrop.ai/blog/agent-swarm-leadership/>)</sup>.
- Supabase Compute, in private alpha, runs agents, background jobs and APIs next to user data in us-west-2; one team reported median query latency falling from 65 ms to 2.9 ms after moving a data agent there <sup>[5](<https://supabase.com/blog/supabase-compute-private-alpha>)</sup>.
- Factory's Droid 1.0 is an agent harness that runs hundreds of tool calls in a single model request, and its authors tuned it across several models so gains would not just fit one model's quirks <sup>[6](<https://factory.com/news/frontier-harness>)</sup>.
- Spawn reports 77,000 substantial changes in 30 days with a ten-person team and $3.1 million in token spending, using permanent agents with hard-coded gates on irreversible actions <sup>[7](<https://x.com/jsnnsa/status/2115623382721126826>)</sup>.
- An LLM-powered Just-in-Time Testing system at Meta moved from research prototype to production, and the write-up covers reducing false positives and testing overhead <sup>[8](<https://engineering.fb.com/2026/10/29/security/catching-bugs-before-they-land-jittestings-human-on-the-loop-approach-at-full-scale/>)</sup>.
- Vulnerator AI runs a pentest as an OODA loop, with the Hermes agent choosing tools run in a Kali container over MCP <sup>[9](<https://github.com/irraz/vulnerator-ai>)</sup>.
- Project Quarry is a Python framework for writing rules over agent messages, tool calls, results and event order, with optional model-based checks <sup>[10](<https://github.com/cisco-ai-defense/project-quarry>)</sup>.
- OpenAI will honor a shared robots.txt signal so website operators can express AI training preferences to participating providers <sup>[11](<https://openai.com/index/helping-websites-express-ai-training-preferences>)</sup>.
- OpenAI says it will stop training its models on the live internet and will train on a cached, indexed version of the public web instead, after models accidentally attacked unauthorized sites during tests <sup>[12](<https://techcrunch.com/2026/10/23/openai-says-it-will-no-longer-train-its-ai-models-on-the-live-internet-citing-significant-risks/>)</sup>.

## Scientific and Research Outlook

- One essay argues that progress in science has accelerated over the last two years and that AI could enable forms of discovery no human network could reach <sup>[13](<https://www.noahpinion.blog/p/a-golden-age-of-science-is-coming>)</sup>.
- DeepMind's essay on the economics of intelligence argues that models are improving fast at individual competence while lagging at coordination, and that wages and job roles will be the earliest signals of economic change <sup>[14](<https://institute.deepmind.com/essays/the-economics-of-intelligence/>)</sup>.

## Industry and Platforms

- Reddit plans to test a logged-in-only experience in select non-US markets in Q4, citing new-user retention, ad targeting signals and control over AI scraping <sup>[15](<https://arstechnica.com/gadgets/2026/10/reddit-will-require-you-to-log-in-eventually-ceo-confirms/>)</sup>.
- DoorDash will acquire Instacart for $17 billion at $65 per share, with closing expected late next year or in 2028 <sup>[16](<https://www.nytimes.com/2026/10/29/technology/doordash-instacart-acquisition-delivery.html?amp%3Bsmid=url-share&amp%3Butm_source=tldrnewsletter>)</sup>.
- Binance suspended transactions after a hack it said totaled around $6.3 billion, which appears to be the work of a North Korean group, and Tether and Circle froze some of the stolen assets <sup>[17](<https://www.wsj.com/finance/currencies/binance-founder-says-exchange-may-be-victim-of-biggest-ever-crypto-heist-24a82e5f?amp%3Breflink=desktopwebshare_permalink&amp%3Butm_source=tldrnewsletter>)</sup>.
- Anthropic has dropped its DSA-style coding interview, because its team got no useful signal from it <sup>[18](<https://newsletter.pragmaticengineer.com/p/the-pulse-anthropic-kills-the-coding>)</sup>.
- Cohere plans more than 1,500 jobs and over C$4 billion in R&D and AI infrastructure investment in Canada through 2031 <sup>[19](<https://cohere.com/blog/cohere-canada-commitment>)</sup>.
- Polymarket lost about $2.65 million after a third-party provider was compromised, then resumed trading and pledged to reimburse affected traders <sup>[20](<https://www.theblock.co/news/defi/2026-10-29-polymarket-exploit-2-5-million-cancel-only-mode-432158>)</sup>.

## Security

- eMudhra's eight weak CA keys (4, 56, 66, 115, 155, 156, 230, 237) were disclosed, and Cloudflare published a follow-up on observed exploitation and patch progress <sup>[21](<https://blog.cloudflare.com/emudhra-patching/>)</sup>.
- Research shows AI can turn published but unshipped Firefox security fixes into working exploits, and widely available open-weight models can now do much or all of this work <sup>[22](<https://epoch.ai/publications/open-weight-models-patch-gap>)</sup>.
- A Linux kernel TCP race-condition use-after-free carries a 9.8 CVSS score; Red Hat and other distributions rate it lower because it is complex to exploit <sup>[23](<https://thehackernews.com/2026/10/linux-kernel-tcp-flaw-with-98-cvss.html>)</sup>.
- Hacktron chained a Savane forge flaw into shell code execution, which led to the discovery of 26 flaws that the FSF has fixed; the write-up recommends passing process arguments as arrays rather than shell strings <sup>[24](<https://www.hacktron.ai/blog/hacking-gnu-savannah>)</sup>.
- GitHub's package firewall is in public preview for Enterprise Cloud, with cooldown periods, advisory checks and attestation-downgrade blocking <sup>[25](<https://github.blog/changelog/2026-10-20-github-package-firewall-in-public-preview/>)</sup>.
- Pinning GitHub Actions to SHAs older than the July 2026 checkout backport bypasses the new pull_request_target protections, and the default policy does not cover private repositories or workflow_run events <sup>[26](<https://www.wiz.io/blog/github-actions-security-pwn-request-reckoning>)</sup>.
- A scanner impersonating 32 AI bots probes about 90 paths for passwords, API keys and SSH keys, with 48% of Cequence-protected organizations seeing the traffic on one October day <sup>[27](<https://www.darkreading.com/cyber-risk/attacker-impersonates-ai-bots-scans-credentials>)</sup>.
- Scanning 7.25 million public Gitee repositories turned up 26,400 working cloud and AI credentials <sup>[28](<https://thehackernews.com/2026/10/26400-valid-cloud-and-ai-credentials.html>)</sup>.

## Developer Tooling and Infrastructure

- Cloudflare services for private origins is now generally available, letting proxied DNS records reach private IPs over an existing Cloudflare One connection <sup>[29](<https://blog.cloudflare.com/private-origins-public-to-private/>)</sup>.
- Argo CD managed 34 clusters across 22 AWS accounts and one Oracle tenancy from 174 Helm charts, and onboarding reportedly fell from 4 days to 1.7 hours <sup>[30](<https://cloudnativenow.com/contributed-content/one-hub-34-clusters-lessons-from-a-gitops-control-plane-at-scale/>)</sup>.
- Terraform can be connected to Backstage through the software catalog, templates that open pull requests and the Spacelift plugin, with version control remaining the source of truth <sup>[31](<https://spacelift.io/blog/terraform-backstage>)</sup>.
- DBOS reached one million durable workflows per second on Postgres across 50 shards by using advisory locks to limit concurrent dequeuers <sup>[32](<https://www.dbos.dev/blog/one-million-workflows>)</sup>.
- AWS Fargate for EKS gives each pod its own node-like environment through an admission webhook and dedicated scheduler, attaching it to the customer VPC through a dedicated network interface <sup>[33](<https://thenewstack.io/serverless-kubernetes-aws-fargate/>)</sup>.
- Node.js 26 LTS is now Vercel's default for new projects, and existing projects whose engines.node range allows it upgrade on their next deployment <sup>[34](<https://vercel.com/changelog/node-js-26-lts-is-now-generally-available-on-vercel>)</sup>.
- Deno's planned end of runtime development leaves Node.js, Bun and Cloudflare's workerd as the main server-side JavaScript choices, which the author argues is a monoculture risk <sup>[35](<https://redmonk.com/kholterhoff/2026/10/27/js-runtime-monoculture/>)</sup>.
- OpenTelemetry's conventions for AI conversations and messages let teams compare models and measure cost per outcome rather than token counts <sup>[36](<https://thenewstack.io/ai-observability-through-interoperability/>)</sup>.
- Datadog's Infrastructure Basic tier collects core host metrics for lower-priority workloads and can run alongside Pro or Enterprise in one organization <sup>[37](<https://www.datadoghq.com/blog/infrastructure-monitoring-basic/>)</sup>.
- Sentry's JavaScript SDK v11 measures LCP, CLS and INP for client-side navigations, requiring Chromium 151 or later, and these scores should be filtered separately from page loads <sup>[38](<https://blog.sentry.io/measuring-soft-navigation-web-vitals/>)</sup>.
- A TanStack Start site raised its mobile Lighthouse score from 73 to 100 and cut LCP from 5.2 s to 1.7 s, mainly by removing unneeded JavaScript, images and font data <sup>[39](<https://sarthakmishra.com/blog/optimizing-tanstack-start>)</sup>.
- Owner moved infrastructure serving over 10,000 restaurant sites to Astro with selective React and edge caching, cutting menu-page p75 LCP from 5.4 s to 0.7 s <sup>[40](<https://building.owner.com/project-speed>)</sup>.
- Pico CSS has been archived, with 2.1.1 as its final release; the MIT license allows community forks <sup>[41](<https://github.com/picocss/pico/discussions/754>)</sup>.
- Radix renders 3D Gaussian splats through three.js with typed-array tables, running on WebGPU with a WebGL2 fallback <sup>[42](<https://sparkjs.dev/radix/>)</sup>.
- wterm renders a terminal into the DOM, which gives it native text selection, browser find and screen reader support <sup>[43](<https://wterm.dev/>)</sup>.

## Sources

1. [Making agents fast - what I've learnt over the last 12 months](<https://martinalderson.com/posts/making-agents-fast/>) — _martinalderson.com_
2. [A Little Determinism](<https://cra.mr/a-little-determinism>) — _cra.mr_
3. [You can just ask AI to do things](<https://www.seangoedecke.com/you-can-just-ask-ai-to-do-things/>) — _seangoedecke.com_
4. [The surprising leadership dynamics in agent swarms](<https://www.raindrop.ai/blog/agent-swarm-leadership/>) — _raindrop.ai_
5. [Supabase Compute: run your agents inside your project](<https://supabase.com/blog/supabase-compute-private-alpha>) — _supabase.com_
6. [Droid 1.0: Building a Frontier Harness](<https://factory.com/news/frontier-harness>) — _factory.com_
7. [How I Built the Most AI-Pilled Company in the World](<https://x.com/jsnnsa/status/2115623382721126826>) — _x.com_
8. [How Meta Catches Bugs Before Code Ships](<https://engineering.fb.com/2026/10/29/security/catching-bugs-before-they-land-jittestings-human-on-the-loop-approach-at-full-scale/>) — _engineering.fb.com_
9. [Vulnerator AI](<https://github.com/irraz/vulnerator-ai>) — _github.com_
10. [Project Quarry](<https://github.com/cisco-ai-defense/project-quarry>) — _github.com_
11. [Making it easier for websites to express AI training preferences](<https://openai.com/index/helping-websites-express-ai-training-preferences>) — _openai.com_
12. [OpenAI Says It Will No Longer Train Its AI Models on the Live Internet, Citing ‘Significant Risks'](<https://techcrunch.com/2026/10/23/openai-says-it-will-no-longer-train-its-ai-models-on-the-live-internet-citing-significant-risks/>) — _techcrunch.com_
13. [A golden age of science is coming](<https://www.noahpinion.blog/p/a-golden-age-of-science-is-coming>) — _noahpinion.blog_
14. [The Economics of Intelligence: How and when does AGI lead to economic transformation?](<https://institute.deepmind.com/essays/the-economics-of-intelligence/>) — _institute.deepmind.com_
15. [Reddit is moving to “a logged-in-only experience,” CEO says](<https://arstechnica.com/gadgets/2026/10/reddit-will-require-you-to-log-in-eventually-ceo-confirms/>) — _arstechnica.com_
16. [DoorDash to Buy Instacart for $17 Billion, Uniting 2 Delivery Giants](<https://www.nytimes.com/2026/10/29/technology/doordash-instacart-acquisition-delivery.html?amp%3Bsmid=url-share&amp%3Butm_source=tldrnewsletter>) — _nytimes.com_
17. [Binance Suspends Transactions After It Is Targeted in Biggest-Ever Cyber Heist](<https://www.wsj.com/finance/currencies/binance-founder-says-exchange-may-be-victim-of-biggest-ever-crypto-heist-24a82e5f?amp%3Breflink=desktopwebshare_permalink&amp%3Butm_source=tldrnewsletter>) — _wsj.com_
18. [The Pulse: Anthropic kills the coding interview](<https://newsletter.pragmaticengineer.com/p/the-pulse-anthropic-kills-the-coding>) — _newsletter.pragmaticengineer.com_
19. [Cohere advances C$4 billion commitment to strengthen Canada’s AI leadership and significantly expand its national workforce](<https://cohere.com/blog/cohere-canada-commitment>) — _cohere_
20. [Polymarket resumes trading after $2.65 million exploit, says third-party provider was compromised](<https://www.theblock.co/news/defi/2026-10-29-polymarket-exploit-2-5-million-cancel-only-mode-432158>) — _theblock.co_
21. [4 real? Tracking exploitation and patching of eMudhra’s weak keys](<https://blog.cloudflare.com/emudhra-patching/>) — _blog.cloudflare.com_
22. [AI can turn security fixes into working exploits before users receive an update](<https://epoch.ai/publications/open-weight-models-patch-gap>) — _epoch.ai_
23. [Linux Kernel TCP Flaw With 9.8 CVSS Score Affects Ubuntu, Red Hat, and Other Distributions](<https://thehackernews.com/2026/10/linux-kernel-tcp-flaw-with-98-cvss.html>) — _thehackernews.com_
24. [Securing Internet-Critical Software: How We Could Have Backdoored Bash](<https://www.hacktron.ai/blog/hacking-gnu-savannah>) — _hacktron.ai_
25. [GitHub package firewall in public preview](<https://github.blog/changelog/2026-10-20-github-package-firewall-in-public-preview/>) — _github.blog_
26. [The Pwn Request Reckoning: What Still Works Against GitHub Actions](<https://www.wiz.io/blog/github-actions-security-pwn-request-reckoning>) — _wiz.io_
27. [Attacker Impersonates AI Bots to Scan Orgs for Keys, Credentials](<https://www.darkreading.com/cyber-risk/attacker-impersonates-ai-bots-scans-credentials>) — _darkreading.com_
28. [26,400 Valid Cloud and AI Credentials Found Exposed in Public Gitee Repositories](<https://thehackernews.com/2026/10/26400-valid-cloud-and-ai-credentials.html>) — _thehackernews.com_
29. [Cloudflare services for private origins is now generally available](<https://blog.cloudflare.com/private-origins-public-to-private/>) — _blog.cloudflare.com_
30. [One Hub, 34 Clusters: Lessons From a GitOps Control Plane at Scale](<https://cloudnativenow.com/contributed-content/one-hub-34-clusters-lessons-from-a-gitops-control-plane-at-scale/>) — _cloudnativenow.com_
31. [How to Integrate Terraform with Backstage for Self-Service](<https://spacelift.io/blog/terraform-backstage>) — _spacelift.io_
32. [1M Durable Workflows per Second on Postgres](<https://www.dbos.dev/blog/one-million-workflows>) — _dbos.dev_
33. [One pod, one node: The architecture behind serverless Kubernetes on AWS](<https://thenewstack.io/serverless-kubernetes-aws-fargate/>) — _thenewstack.io_
34. [Node.js 26 LTS Is Generally Available on Vercel](<https://vercel.com/changelog/node-js-26-lts-is-now-generally-available-on-vercel>) — _vercel.com_
35. [The Web Can't Afford a JavaScript Runtime Monoculture](<https://redmonk.com/kholterhoff/2026/10/27/js-runtime-monoculture/>) — _redmonk.com_
36. [The AI observability race will be won on interoperability](<https://thenewstack.io/ai-observability-through-interoperability/>) — _thenewstack.io_
37. [Match monitoring depth to workload needs with Infrastructure Basic](<https://www.datadoghq.com/blog/infrastructure-monitoring-basic/>) — _datadoghq.com_
38. [Measuring Soft Navigation Web Vitals](<https://blog.sentry.io/measuring-soft-navigation-web-vitals/>) — _blog.sentry.io_
39. [Optimizing the sh*t out of TanStack Start](<https://sarthakmishra.com/blog/optimizing-tanstack-start>) — _sarthakmishra.com_
40. [Project Speed](<https://building.owner.com/project-speed>) — _building.owner.com_
41. [Pico CSS Is No Longer Maintained](<https://github.com/picocss/pico/discussions/754>) — _github.com_
42. [Radix: 3D Gaussian Splats for the Web (Website)](<https://sparkjs.dev/radix/>) — _sparkjs.dev_
43. [wterm (Website)](<https://wterm.dev/>) — _wterm.dev_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-10-30` | Friday | [Read →](news/en/2026-10-30.md) |
| `2026-10-29` | Thursday | [Read →](news/en/2026-10-29.md) |
| `2026-10-28` | Wednesday | [Read →](news/en/2026-10-28.md) |
| `2026-10-27` | Tuesday | [Read →](news/en/2026-10-27.md) |
| `2026-10-26` | Monday | [Read →](news/en/2026-10-26.md) |
| `2026-10-24` | Saturday | [Read →](news/en/2026-10-24.md) |
| `2026-10-23` | Friday | [Read →](news/en/2026-10-23.md) |
| `2026-10-22` | Thursday | [Read →](news/en/2026-10-22.md) |
| `2026-10-21` | Wednesday | [Read →](news/en/2026-10-21.md) |
| `2026-10-20` | Tuesday | [Read →](news/en/2026-10-20.md) |
| `2026-10-19` | Monday | [Read →](news/en/2026-10-19.md) |
| `2026-10-18` | 🗓️ Weekly recap | [Read →](news/en/2026-10-18.md) |
| `2026-10-17` | Saturday | [Read →](news/en/2026-10-17.md) |
| `2026-10-16` | Friday | [Read →](news/en/2026-10-16.md) |

<sub>[Browse the full archive (137) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
