# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-11-19
<sub>mis à jour le 20 novembre 2026 à 00:00</sub>

## Modèles d'IA et outils LLM

- Google DeepMind a publié Gemini 4 Neon, un modèle rapide de niveau frontière pour le code, le travail de connaissance et la science, qui obtient 61 à l'Artificial Analysis Intelligence Index <sup>[1](<https://latent.space/p/ainews-gemini-4-neon-gdm-s-opus-sol-contender/>), [2](<https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/>)</sup>. Il coûte 3 $ par million de tokens en entrée et 15 $ par million de tokens en sortie, avec une entrée en cache à 0,15 $ et une fenêtre de contexte de 1 million de tokens <sup>[1](<https://latent.space/p/ainews-gemini-4-neon-gdm-s-opus-sol-contender/>)</sup>. Son prédécesseur Argon est retiré, et la gamme comprend désormais Carbon, Neon et Hydrogen, du plus cher au moins cher, Carbon étant proposé à moitié prix jusqu'au 1er décembre <sup>[1](<https://latent.space/p/ainews-gemini-4-neon-gdm-s-opus-sol-contender/>)</sup>.
- La position de Neon est difficile à évaluer : une projection Agent Duel le place près d'Opus 5.5, mais il s'agit d'une estimation fondée sur la vitesse avec un large intervalle d'incertitude, et non d'un résultat mesuré dans un classement <sup>[3](<https://micjm.com/blog/gemini-4-neon-looks-like-a-top-model/>)</sup>. Dans un benchmark privé, Carbon a effectué environ sept fois plus d'étapes que GPT-6 Astra pour corriger des bogues, dont la moitié étaient inutiles <sup>[4](<https://kernel.dev/blog/why-is-gemini-4-carbon-taking-so-long/>)</sup>.
- Gemini 4 Genie 4, le modèle de monde interactif, est ouvert aux abonnés éligibles de Google AI Ultra dans Project Genie, où les utilisateurs modifient un monde en saisissant des requêtes <sup>[5](<https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/>)</sup>.
- Un lecteur de la communauté note que la tarification de Gemini 4 est plus difficile à suivre, car la remise sur Hydrogen et la promotion temporaire de Carbon modifient l'ordre des prix <sup>[6](<https://simonwillison.net/2026/Nov/18/llm-gemini/>)</sup>.
- Google Tunix et Gemma 4 montrent un apprentissage par renforcement agentique multi-tours avec utilisation d'outils sur un Cloud TPU v6e-8, en entraînant Gemma 4 E2B sur le jeu Plane Strike <sup>[7](<https://developers.googleblog.com/multi-turn-agentic-reinforcement-learning-with-tunix-and-gemma-4-on-google-tpus/>)</sup>.
- Le Model Factory de Prime Intellect unifie apprentissage par renforcement, fine-tuning supervisé, pré-entraînement et inférence dans un même plan de contrôle, avec contrôles de santé et reprise depuis le dernier checkpoint pour les longs entraînements <sup>[8](<https://www.primeintellect.ai/blog/introducing-model-factory>)</sup>.
- Le chercheur en sécurité Paolo Galeone a implanté une porte dérobée dans Qwen3-8B à l'aide d'un adaptateur QLoRA qui ne se déclenche qu'à l'intérieur du harnais d'agent pi ; les différences de poids permettent de la détecter pour les modèles ouverts, mais pas pour les API hébergées. Les agents doivent donc être isolés en bac à sable, et les appels shell et réseau soumis à approbation <sup>[9](<https://pgaleone.eu/ai/2026/11/14/backdooring-llms-and-trust/>)</sup>.
- Les dépenses de calcul d'Anthropic croissent d'environ 4 fois par an, plus vite que celles d'OpenAI (3 fois par an), pour atteindre près de 10 milliards de dollars au troisième trimestre 2026 <sup>[10](<https://epoch.ai/data-insights/anthropic-openai-compute-spend-growth>)</sup>.

## Outillage développeur et DevOps

- La version 2.105.0 de GitHub CLI ajoute `gh event listen`, qui attend des événements de pull request, comme une revue soumise, des conflits de fusion ou des suites de vérifications terminées, remplaçant les boucles d'interrogation dans les scripts et les agents <sup>[11](<https://github.blog/changelog/2026-11-18-wait-for-pull-request-events-with-github-cli>)</sup>.
- Les agents utilisant `gh pr create`, `gh pr view`, `gh run watch` ou `gh api` sont désormais orientés vers `gh event listen` plutôt que vers l'interrogation <sup>[11](<https://github.blog/changelog/2026-11-18-wait-for-pull-request-events-with-github-cli>)</sup>.
- Les migrations en direct d'entreprise d'Azure DevOps vers GitHub Enterprise Cloud avec résidence des données sont désormais en disponibilité générale : elles synchronisent en continu l'historique Git, les branches, les tags et les pull requests jusqu'à une brève bascule finale, et les politiques de branche sont migrées sous forme de rulesets <sup>[12](<https://github.blog/changelog/2026-11-19-enterprise-live-migrations-from-azure-devops-generally-available>)</sup>.
- Les images Red Hat Enterprise Linux 9 et 10 pour les runners plus grands hébergés par GitHub sont désormais en disponibilité générale <sup>[13](<https://github.blog/changelog/2026-11-19-red-hat-enterprise-linux-runner-images-now-generally-available>)</sup>.
- La version candidate 1.0 de la CLI Cloudflare stabilise ses formats de configuration et de build, et ajoute des flux de logs JSON en direct, des aperçus de déploiement et des comptes temporaires réclamables <sup>[14](<https://developers.cloudflare.com/changelog/post/2026-11-17-release-candidate>)</sup>.

## Cloud, sécurité et infrastructure

- GitHub Enterprise Cloud avec résidence des données (GHE.com) diffuse désormais les journaux d'audit d'entreprise vers Amazon S3 via OpenID Connect, ce qui évite de stocker des identifiants AWS de longue durée sur GitHub <sup>[15](<https://github.blog/changelog/2026-11-19-s3-audit-log-streaming-with-openid-connect-expands-to-ghe-com>)</sup>.
- Les versions 1.26.1 et 1.26.2 du paquet PyPI agent-framework de Microsoft ont été publiées depuis le compte éditeur officiel et contiennent un voleur d'identifiants exécuté à chaque démarrage de Python ; considérez toute installation comme une compromission complète des identifiants, et renouvelez les secrets et les identités cloud <sup>[16](<https://opensourcemalware.com/blog/agent-framework-pypi-compromised>)</sup>.
- Java4Shell (CVE-2026-114938), une corruption de mémoire dans le runtime Java, et deux failles HTTP/2 de NGINX sont corrigées dans les Docker Hardened Images, qui sont reconstruites dès que les correctifs amont sont disponibles <sup>[17](<https://www.docker.com/blog/docker-patches-java4shell-and-the-nginx-http-2-with-docker-hardened-images/>)</sup>. Wiz indique que les failles NGINX peuvent permettre une exécution de code sans authentification <sup>[18](<https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities>)</sup>.
- Une faille critique de désérialisation dans Puppet (CVE-2026-115731, CVSS 9,4) est exploitée ; la CISA l'a ajoutée à son catalogue des vulnérabilités exploitées connues, et Perforce a corrigé les versions concernées le 3 novembre <sup>[19](<https://thehackernews.com/2026/11/hackers-exploiting-critical-puppet-rce.html>)</sup>.
- Un contournement du périmètre de jetons « public uniquement » dans Gitea permettait à des jetons restreints d'agir comme administrateurs complets via l'API d'administration ; il est désormais suivi sous le nom CVE-2026-117635 <sup>[20](<https://escape.tech/blog/escape-research-found-a-scope-bypass-that-made-gitea-s-restricted-tokens-full-admins-it-s-now-cve-2026-117635/>)</sup>.
- AWS Security Hub couvre désormais Google Cloud et surveille les VM GCP, les images Artifact Registry, les fonctions Cloud Run et les identités, en complément des résultats AWS et Azure <sup>[21](<https://aws.amazon.com/about-aws/whats-new/2026/11/security-hub-gcp/>)</sup>.
- AWS a publié ExtendDB 1.0, un adaptateur open source sous licence Apache 2.0 compatible DynamoDB qui fonctionne sur PostgreSQL, SQLite, Cassandra et MongoDB <sup>[22](<https://aws.amazon.com/about-aws/whats-new/2026/11/aws-extenddb-1-0/>)</sup>.
- Le projet Osmos de Microsoft Fabric construit, exécute et valide des pipelines Spark à partir d'une spécification, mais des vérifications indépendantes ont détecté un bogue lié à l'heure d'été que les propres tests de l'agent avaient manqué <sup>[23](<https://data-mozart.com/agentic-data-engineering-is-here-project-osmos-what-why-and-how/>)</sup>.

## Données, agents et pratique d'ingénierie

- Pinecone exporte ses données de coûts et d'usage au format FOCUS v1.4 via l'API Cost and Usage Export, disponible dans l'offre Enterprise <sup>[24](<https://www.pinecone.io/blog/cost-usage-export/>)</sup>.
- MongoDB a acquis Firebolt et fera fonctionner son moteur d'analyse aux côtés de la base de données, avec une synchronisation automatique <sup>[25](<https://www.mongodb.com/company/blog/news/mongodb-acquires-firebolt>)</sup>.
- PostgreSQL 19 ajoute une cohérence « lecture de ses propres écritures » sur les standbys grâce à la nouvelle commande WAIT FOR LSN <sup>[26](<https://simonwillison.net/2026/Nov/19/postgresql-19/>)</sup>.
- Les contrats de données appliquent la conception d'API aux jeux de données : les règles de qualité deviennent des assertions que l'outillage peut valider ou rejeter <sup>[27](<https://martinfowler.com/articles/data-contracts.html>)</sup>.
- Airbnb a intégré le projet open source Presidio comme étape de pipeline en processus, en ajoutant des recognizers spécifiques au domaine et une évaluation multilingue pour dépersonnaliser les textes avant l'entraînement de modèles d'IA <sup>[28](<https://medium.com/airbnb-engineering/de-identifying-text-at-scale-how-airbnb-protects-personal-data-in-ai-training-32f3ff8ff7d0>)</sup>.
- Weaviate a constaté que certains agents lisaient des pages de documentation tronquées, ce qui les conduisait à des conclusions erronées, et a corrigé ces pages <sup>[29](<https://weaviate.io/blog/developer-experience-agentic-age>)</sup>.
- LinkedIn a reconstruit sa plateforme de lignage de données pour capturer les dépendances à partir des jobs en cours d'exécution, couvrant environ 6 millions de jeux de données <sup>[30](<https://www.linkedin.com/blog/engineering/infrastructure/rebuilding-data-lineage-at-linkedin-from-storage-to-compute>)</sup>.

## Sources

1. [\[AINews\] Gemini 4 Neon: GDM's Opus/Sol Contender](<https://latent.space/p/ainews-gemini-4-neon-gdm-s-opus-sol-contender/>) — _latent.space_
2. [Gemini 4 Neon](<https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/>) — _blog.google_
3. [Gemini 4 Neon Looks Like an Opus 5.5 Competitor](<https://micjm.com/blog/gemini-4-neon-looks-like-a-top-model/>) — _micjm.com_
4. [Why is Gemini 4 Carbon taking so long?](<https://kernel.dev/blog/why-is-gemini-4-carbon-taking-so-long/>) — _kernel.dev_
5. [Genie 4](<https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/>) — _blog.google_
6. [llm-gemini 0.38](<https://simonwillison.net/2026/Nov/18/llm-gemini/>) — _simonwillison.net_
7. [Multi-Turn Agentic Reinforcement Learning with Tunix and Gemma 4 on Google TPUs](<https://developers.googleblog.com/multi-turn-agentic-reinforcement-learning-with-tunix-and-gemma-4-on-google-tpus/>) — _google ai_
8. [Introducing Model Factory](<https://www.primeintellect.ai/blog/introducing-model-factory>) — _primeintellect.ai_
9. [Backdooring LLMs - Do You Trust Your AI Provider?](<https://pgaleone.eu/ai/2026/11/14/backdooring-llms-and-trust/>) — _pgaleone.eu_
10. [Anthropic's compute spending is increasing by 4x per year, outpacing OpenAI's 3x](<https://epoch.ai/data-insights/anthropic-openai-compute-spend-growth>) — _epoch.ai_
11. [Wait for pull request events with GitHub CLI](<https://github.blog/changelog/2026-11-18-wait-for-pull-request-events-with-github-cli>) — _github.blog_
12. [Enterprise Live Migrations from Azure DevOps generally available](<https://github.blog/changelog/2026-11-19-enterprise-live-migrations-from-azure-devops-generally-available>) — _github.blog_
13. [Red Hat Enterprise Linux runner images now generally available](<https://github.blog/changelog/2026-11-19-red-hat-enterprise-linux-runner-images-now-generally-available>) — _github.blog_
14. [Cloudflare CLI 1.0 Release Candidate](<https://developers.cloudflare.com/changelog/post/2026-11-17-release-candidate>) — _developers.cloudflare.com_
15. [S3 audit log streaming with OpenID Connect expands to GHE.com](<https://github.blog/changelog/2026-11-19-s3-audit-log-streaming-with-openid-connect-expands-to-ghe-com>) — _github.blog_
16. [Official Microsoft agent-framework PyPI Package Compromised](<https://opensourcemalware.com/blog/agent-framework-pypi-compromised>) — _opensourcemalware.com_
17. [Docker patches Java4Shell and the NGINX HTTP/2 with Docker Hardened Images](<https://www.docker.com/blog/docker-patches-java4shell-and-the-nginx-http-2-with-docker-hardened-images/>) — _docker.com_
18. [Unauthenticated Remote Code Execution in NGINX](<https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities>) — _wiz.io_
19. [Hackers Exploiting Critical Puppet RCE Flaw Affecting Enterprise Management Servers](<https://thehackernews.com/2026/11/hackers-exploiting-critical-puppet-rce.html>) — _thehackernews.com_
20. [Escape Research Found a Scope Bypass that Made Gitea's Restricted Tokens Full Admins](<https://escape.tech/blog/escape-research-found-a-scope-bypass-that-made-gitea-s-restricted-tokens-full-admins-it-s-now-cve-2026-117635/>) — _escape.tech_
21. [AWS Security Hub Extends Unified Security Management to Google Cloud Platform](<https://aws.amazon.com/about-aws/whats-new/2026/11/security-hub-gcp/>) — _aws.amazon.com_
22. [AWS announces ExtendDB 1.0](<https://aws.amazon.com/about-aws/whats-new/2026/11/aws-extenddb-1-0/>) — _aws.amazon.com_
23. [Agentic data engineering is here! Project Osmos: What, Why, and How?](<https://data-mozart.com/agentic-data-engineering-is-here-project-osmos-what-why-and-how/>) — _data-mozart.com_
24. [Pinecone now exports cost and usage data in FOCUS format](<https://www.pinecone.io/blog/cost-usage-export/>) — _pinecone_
25. [MongoDB Acquires Firebolt](<https://www.mongodb.com/company/blog/news/mongodb-acquires-firebolt>) — _mongodb.com_
26. [PostgreSQL 19 Released](<https://simonwillison.net/2026/Nov/19/postgresql-19/>) — _simonwillison.net_
27. [Data Contracts](<https://martinfowler.com/articles/data-contracts.html>) — _martinfowler.com_
28. [De-identifying text at scale: How Airbnb protects personal data in AI training](<https://medium.com/airbnb-engineering/de-identifying-text-at-scale-how-airbnb-protects-personal-data-in-ai-training-32f3ff8ff7d0>) — _medium.com_
29. [Improving Developer Experience in the Age of Agents](<https://weaviate.io/blog/developer-experience-agentic-age>) — _weaviate_
30. [Rebuilding Data Lineage at LinkedIn: From Storage to Compute](<https://www.linkedin.com/blog/engineering/infrastructure/rebuilding-data-lineage-at-linkedin-from-storage-to-compute>) — _linkedin.com_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-11-19` | Jeudi | [Lire →](news/fr/2026-11-19.md) |
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

<sub>[Parcourir toute l’archive (157) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
