# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-11-18
<sub>mis à jour le 19 novembre 2026 à 00:00</sub>

## Modèles d'IA et outils LLM

- OpenAI a lancé GPT-6.2 Astra et Sol sur ChatGPT et l'API, destinés au travail professionnel, Astra pour les projets les plus exigeants et Sol pour les tâches quotidiennes <sup>[1](<https://latent.space/p/ainews-gpt-6-2-astra-the-2-frontier-model-is-better-and-20-600-cheaper-but-has-mixed-reviews-6-2-sol/>), [2](<https://www.testingcatalog.com/openai-launches-gpt-6-2-astra-and-sol-on-chatgpt-and-apis/>)</sup>. Les deux utilisent moins de tokens de sortie que les versions précédentes <sup>[2](<https://www.testingcatalog.com/openai-launches-gpt-6-2-astra-and-sol-on-chatgpt-and-apis/>)</sup>. Artificial Analysis attribue à Astra un score de 62 sur son Intelligence Index, juste derrière Fable 5.2 à 65, et Sol égale Astra tout en coûtant environ 15 % du prix par tâche <sup>[1](<https://latent.space/p/ainews-gpt-6-2-astra-the-2-frontier-model-is-better-and-20-600-cheaper-but-has-mixed-reviews-6-2-sol/>)</sup>. Les avis sont mitigés, avec certaines critiques concernant des artefacts d'apprentissage par renforcement <sup>[1](<https://latent.space/p/ainews-gpt-6-2-astra-the-2-frontier-model-is-better-and-20-600-cheaper-but-has-mixed-reviews-6-2-sol/>)</sup>.
- Gemini 4 Neon de Google obtient 61 sur l'Artificial Analysis Intelligence Index au niveau de réflexion xhigh, se classe 3e au global, juste derrière des modèles plus grands et plus lents, et 2e sur le Vals Index <sup>[3](<https://deepmind.google/blog/introducing-gemini-4-neon/>)</sup>. Il est disponible en général sur GitHub Copilot, où Google indique une qualité proche de Gemini 4 Carbon pour un coût en tokens par tâche inférieur, des démarrages plus rapides et moins de modifications non demandées sur les tâches de codage <sup>[4](<https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot>)</sup>.
- Microsoft a publié sept nouveaux modèles ; son modèle de codage MAI Code 2, désormais disponible dans GitHub Copilot, atteint 98 % de la qualité de codage de GPT-6.1 Sol pour environ 40 % du prix <sup>[5](<https://microsoft.ai/news/microsoft-ignite-2026/>)</sup>.
- Cloudflare a publié les versions mises à jour du modèle à poids ouverts Clairic et le modèle 9B Clairic-flash pour l'extraction de documents, hébergés sur Workers AI, avec les poids sur Hugging Face <sup>[6](<https://blog.cloudflare.com/open-clairic/>)</sup>.
- Vercel a publié eve 1.0, un framework open source pour les agents IA en production, qui gère la boucle modèle-outils, la mémoire, les validations et la supervision <sup>[7](<https://vercel.com/blog/eve-is-now-generally-available>)</sup>. Replit a lancé Missions pour coordonner des essaims d'agents dans des budgets définis <sup>[8](<https://replit.com/blog/introducing-replit-missions>)</sup>.
- Horizon, un agent construit sur Opus 5.5, a créé de manière autonome 38 modèles en plus de 600 heures de GPU, désormais hébergés dans plus de 100 dépôts et téléchargés plus de 50 000 fois <sup>[9](<https://horizon-labs.ai/>)</sup>.

## Outils d'agents, sécurité et pratiques de codage

- GitHub a rendu huit services supplémentaires accessibles à Copilot via des connecteurs MCP en préversion publique, dont Supabase, Buildkite et Box <sup>[10](<https://github.blog/changelog/2026-11-18-connect-supabase-box-calendly-and-more-to-copilot>)</sup>. Les valeurs par défaut des plugins au niveau des équipes sont disponibles en général pour les équipes d'organisation <sup>[11](<https://github.blog/changelog/2026-11-18-customize-github-copilot-for-your-team>)</sup>.
- Daniel Stenberg indique que des agents ont converti environ 185 000 lignes de C en 340 000 lignes de Rust, tandis que plus de 300 commits de curl ont apporté environ 200 corrections de bugs et quelques correctifs de vulnérabilités <sup>[12](<https://simonwillison.net/2026/Nov/18/daniel-stenberg/>), [13](<https://daniel.haxx.se/blog/2026/11/17/actual-curl-rewrites-in-rust/>)</sup>.
- Calif a divulgué Java4Shell (CVE-2026-114938), une faille de corruption mémoire notée CVSS 9.2 dans le décodeur Base64 d'OpenJDK, pouvant permettre une exécution de code à distance ; les versions Oracle corrigées ont été livrées dans le CPU de novembre 2026, et Cloudflare décrit sa protection WAF <sup>[14](<https://blog.cloudflare.com/java4shell-waf-protection/>), [15](<https://calif.io/java4shell/>)</sup>.
- Une compromission de WPPConnect a livré un module « diagnostics » malveillant via le pipeline de publication de confiance du projet lui-même, exfiltrant les variables d'environnement et les jetons de session WhatsApp ; la charge utile s'exécute à l'import, donc --ignore-scripts ne l'empêche pas <sup>[16](<https://www.stepsecurity.io/blog/wppconnect-compromised-malicious-releases-steal-secrets-and-whatsapp-sessions>)</sup>.
- Un modèle ONNX malveillant a exploité une faille d'analyse dans ONNX Runtime pour exfiltrer des fichiers de l'hôte ; les défenseurs devraient passer à onnxruntime v1.27.0 ou une version ultérieure <sup>[17](<https://phrack.org/issues/73/backdoor-attacks-against-machine-learning-irl>)</sup>.
- Missions de Replit et le Secure AI Framework d'Uber illustrent la gouvernance des agents en pratique : Uber évalue chaque action proposée par un agent au regard de la demande de l'utilisateur, des permissions et du contexte <sup>[8](<https://replit.com/blog/introducing-replit-missions>), [18](<https://www.infoq.com/news/2026/11/uber-secure-ai-framework/>)</sup>.

## DevOps, infrastructure et données

- Kubernetes prévoit de retirer le backend IPVS de kube-proxy en 2026 pour simplifier la base de code <sup>[19](<https://kubernetes.io/blog/2026/11/16/ipvs-removal/>)</sup>.
- Salesforce a combiné l'autoscaling vertical et horizontal sur EKS, avec plus de 5 millions de dollars d'économies cumulées ; VPA dimensionne le CPU et la mémoire tandis que HPA adapte le nombre de réplicas Istio selon le nombre de connexions par proxy <sup>[20](<https://aws.amazon.com/blogs/containers/how-salesforce-efficiently-right-sizes-kubernetes-workloads-at-scale-on-amazon-eks/>)</sup>.
- L'extension Postgres pg_pinecone de Pinecone est environ 15 fois plus petite qu'un index HNSW pgvector sur 1 million de vecteurs, à rappel équivalent, et est désormais déployable sur Railway <sup>[21](<https://www.pinecone.io/blog/pg-pinecone-railway/>)</sup>.
- Un guide OpenTelemetry traite de l'emplacement du memory-limiter, des compromis d'échantillonnage et du routage tenant compte des traces pour le tail sampling lorsque les Collectors évoluent horizontalement <sup>[22](<https://www.cncf.io/blog/2026/11/17/is-your-opentelemetry-pipeline-becoming-a-performance-bottleneck/>)</sup>.
- PostHog filtre les appels LLM coûteux à l'aide de modèles de décision, ce qui permet à 98,7 % des résumés de sessions d'éviter un appel de réécriture, bien que les seuils doivent être calibrés pour chaque tâche <sup>[23](<https://newsletter.posthog.com/p/decision-models>)</sup>.

## Recherche, édition et réponses IA

- Les AI Overviews de Google apparaissent sur plus de la moitié des mots-clés américains suivis par DataForSEO, contre 6 % il y a deux ans <sup>[24](<https://revscope.co/blog/search-seo-geo-2026/>)</sup>.
- Dans une expérience randomisée, un AI Overview a réduit d'environ 40 % les clics vers des sites externes <sup>[24](<https://revscope.co/blog/search-seo-geo-2026/>)</sup>. Les assistants IA n'ont envoyé que 0,3 % de leur trafic aux sites web en mars <sup>[24](<https://revscope.co/blog/search-seo-geo-2026/>)</sup>.
- Un éditeur berlinois de voyages affirme avoir perdu 70 % à 75 % de son trafic au profit des AI Overviews de Google <sup>[25](<https://nicolasbouliane.com/blog/death-by-ai>)</sup>.

## IA appliquée et industrie

- Osmo affirme que son modèle de fondation olfactif, entraîné sur des annotations de nez experts recoupées avec des analyses chimiques, a atteint une « intelligence olfactive de niveau humain » <sup>[26](<https://www.technologyreview.com/2026/11/18/1148816/smell-startup-osmo-ai-nose-good-as-humans/>)</sup>.
- OpenAI et le Groupe Le Figaro se sont associés pour intégrer le journalisme du Figaro dans ChatGPT, sous forme de résumés et d'extraits renvoyant vers les articles d'origine <sup>[27](<https://openai.com/index/le-groupe-figaro-and-openai-announce-partnership>)</sup>.

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


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-11-18` | Mercredi | [Lire →](news/fr/2026-11-18.md) |
| `2026-11-17` | Mardi | [Lire →](news/fr/2026-11-17.md) |
| `2026-11-16` | Lundi | [Lire →](news/fr/2026-11-16.md) |
| `2026-11-15` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-11-15.md) |
| `2026-11-14` | Samedi | [Lire →](news/fr/2026-11-14.md) |
| `2026-11-13` | Vendredi | [Lire →](news/fr/2026-11-13.md) |
| `2026-11-12` | Jeudi | [Lire →](news/fr/2026-11-12.md) |
| `2026-11-11` | Mercredi | [Lire →](news/fr/2026-11-11.md) |
| `2026-11-10` | Mardi | [Lire →](news/fr/2026-11-10.md) |
| `2026-11-09` | Lundi | [Lire →](news/fr/2026-11-09.md) |
| `2026-11-08` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-11-08.md) |
| `2026-11-07` | Samedi | [Lire →](news/fr/2026-11-07.md) |
| `2026-11-06` | Vendredi | [Lire →](news/fr/2026-11-06.md) |
| `2026-11-05` | Jeudi | [Lire →](news/fr/2026-11-05.md) |

<sub>[Parcourir toute l’archive (156) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
