# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-11-27
<sub>mis à jour le 28 novembre 2026 à 00:00</sub>

## Agents IA et outillage go-to-market

- L'usage de Clay se répartit presque à 50/50 entre son propre agent et des harnais externes, et l'entreprise vise des résultats similaires quel que soit l'agent utilisé <sup>[1](<https://latent.space/p/how-clay-builds-gtm-agents-jeff-barg-head-of-ai/>)</sup>.
- Le responsable IA de Clay indique que les modèles réussissent ses évaluations de qualification de leads depuis environ un an, et estime qu'un classifieur chargé de passer ses 40 millions d'entreprises au crible d'un profil client idéal coûterait environ 1 500 $ <sup>[1](<https://latent.space/p/how-clay-builds-gtm-agents-jeff-barg-head-of-ai/>)</sup>.
- Le codage multiagent devrait avoir un impact majeur sur le développement logiciel et le travail intellectuel, bien que les laboratoires n'aient pas encore livré de bons produits de codage multiagent, et que des essaims d'agents autonomes interagissant avec l'infrastructure présentent de réels dangers <sup>[2](<https://www.kalzumeus.com/2026/11/25/multiagent-coding-is-the-future/>)</sup>.
- Une session principale de Claude Code planifie le travail et délègue l'implémentation à des agents dans des worktrees Git séparés, le développeur approuvant les plans et un responsable vérifiant les commits, les tests et les builds Release ; cette méthode a produit 37 builds TestFlight en cinq jours, contre neuf lors des cinq jours précédents <sup>[3](<https://jurajb.dev/main-session-manager/>)</sup>.
- Une architecture d'agent de production en six couches (déclencheurs d'événements, état du workflow, outils, contexte de confiance, évaluation et contrôles d'exécution) recommande de sauvegarder les exécutions dans Postgres, de placer la logique déterministe derrière des outils typés, d'exiger une approbation humaine pour les actions à fort impact, et d'utiliser une passerelle de modèles partagée pour les plafonds de dépenses et les traces <sup>[4](<https://threadreaderapp.com/thread/2125913331915784509.html>)</sup>.
- CLI Agent Orchestrator, d'AWS Labs, exécute Claude Code, Kiro et Codex dans des sessions tmux distinctes, un agent superviseur leur déléguant le travail en parallèle ou en séquence <sup>[5](<https://github.com/awslabs/cli-agent-orchestrator>)</sup>.
- L'approche d'identité déléguée de Teleport fait démarrer les agents sans accès, leur permet de ne demander que ce dont une tâche a besoin, et laisse une piste d'audit liée à la personne ayant confié le travail <sup>[6](<https://thenewstack.io/teleport-agent-delegated-identity/>)</sup>.

## Adoption et stratégie de l'IA

- Un invité d'un podcast allemand soutient que l'IA rend les individus plus productifs, mais que les organisations doivent reconstruire leurs processus autour des résultats ; il prévient que l'écart entre les utilisateurs actifs de l'IA et ceux qui attendent va se creuser d'ici deux ans <sup>[7](<https://ai-first.ai/podcast/zehn-harte-ki-wahrheiten-was-unternehmen-und-gesellschaft-erwartet-mit-tristan-post>)</sup>.
- Une enquête de CloudBees menée auprès de 450 responsables informatiques européens révèle que 69 % s'attendent à ce que les conseils d'administration exigent d'ici 2027 la preuve du retour sur investissement de l'IA, mais que seuls 43 % pourraient le démontrer dans le mois <sup>[8](<https://www.cloudbees.com/blog/european-it-leaders-ai-coding-roi>)</sup>.
- OpenRouter indique que le paradoxe de Jevons a jusqu'ici défini l'inférence : la croissance de l'usage fait grimper la dépense totale alors que les prix des tokens baissent, mais la progression des dépenses a nettement ralenti ces derniers mois <sup>[9](<https://openrouter.ai/blog/insights/is-jevons-paradox-holding/>)</sup>.

## Modèles d'IA et recherche

- Les mises à jour Astra 6.2 et Sol 6.2 d'OpenAI ont été critiquées pour une performance réduite, les deux montrant des baisses importantes des tokens de raisonnement et de sortie, ce qui suggère un virage vers l'efficacité des coûts <sup>[10](<https://micjm.com/blog/openai-is-in-cost-control-mode/>)</sup>.
- LayerStream, de Nebius, entraîne des modèles MoE en diffusant l'état de chaque couche dans le GPU uniquement lorsque cette couche s'exécute ; sur 16 GPU H200, il a ramené un passage de 25,8 millions de tokens de 22,4 à 7,1 minutes, avec un débit 3,15 fois supérieur à un entraîneur Megatron-LM optimisé et un coût par token GPU inférieur de 68 % <sup>[11](<https://nebius.com/blog/posts/layerstream-moe-fine-tuning>)</sup>.
- Des expériences de compression montrent que les couches profondes peuvent être compressées plus fortement que les premières, ce qui suggère que les modèles n'exploitent pas leurs architectures aussi pleinement qu'espéré ; les transformeurs en boucle ajoutent de la profondeur de calcul sans dupliquer les paramètres du tronc <sup>[12](<https://shiweiliuiiiiiii.github.io/blog/2026/from-model-compression-to-looped-transformers/>)</sup>.
- Des travaux sur l'hypothèse de représentation platonicienne montrent que des LLM peuvent utiliser mutuellement leurs représentations grâce à une rotation et une mise à l'échelle globale unique, ajustées en forme close, sans descente de gradient <sup>[13](<https://hazyresearch.stanford.edu/blog/2026-11-25-platos-key>)</sup>.
- Trainium3 est utilisé pour générer des vidéos avec LTX-2.5, un modèle texte-vers-vidéo de 19 milliards de paramètres <sup>[14](<https://huggingface.co/blog/video-trainium3>)</sup>.

## Sécurité et chaîne d'approvisionnement

- Un incident de sécurité sur hex.pm a permis à un attaquant d'exécuter des commandes sur six serveurs web via une chaîne de gadgets de désérialisation de termes Erlang (CVE-2026-129514) ; Hex n'a trouvé aucun paquet altéré mais ne peut exclure la lecture de données utilisateur, donc les utilisateurs doivent changer leurs mots de passe et réinitialiser leur 2FA, et les équipes Elixir doivent passer Ash à la version 3.38.0 <sup>[15](<https://hex.pm/blog/security-incident-on-hexpm>)</sup>.
- PolinRider, lié à la Corée du Nord, a poussé de force des chargeurs malveillants dans au moins 7 609 dépôts GitHub à l'aide de jetons volés, dissimulant le code dans des configurations de build, conftest.py et des tâches VS Code à exécution automatique ; les développeurs doivent bloquer deux IP de C2 listées, vérifier ces fichiers et renouveler leurs jetons <sup>[16](<https://thehackernews.com/2026/11/north-korea-linked-polinrider-poisons.html>)</sup>.
- Des failles de Samsung Knox DualDAR permettent à une application sans permission d'obtenir les droits root sur les Galaxy S23 et sur les S26 à chargeur verrouillé (CVE-2026-21102), corrigées dans les mises à jour d'août et de septembre 2026 ; les administrateurs de flottes doivent exiger au minimum le niveau de correctif de septembre <sup>[17](<https://calif.io/research/oempocalypse-part-2>)</sup>.
- Intruder a revendiqué la prise de contrôle de 28 adresses Elastic IP AWS orphelines, dont cinq sous-domaines du Trésor américain, pour environ 3 $ par prise de contrôle, et AWS a déclaré qu'il ne prévoit pas de modifier son approche <sup>[18](<https://www.intruder.io/research/taking-over-us-treasury-subdomains-for-3-each>)</sup>.
- Un agent de codage IA a trouvé une clé d'accès piégée d'une société financière en moins de six minutes, en suivant un document d'API leurre vers un faux environnement, montrant que des listes de blocage manqueraient ce type d'activité <sup>[19](<https://www.theregister.com/security/2026/11/24/an-ai-coding-agent-a-browser-and-a-mac-tool-found-a-financial-firms-access-key-in-under-6-minutes/5311922>)</sup>.
- L'infostealer Remus utilise une fausse extension Chrome Google Sheets pour extraire les messages Gmail, sans exploiter de faille zero-day comme l'affirmait son développeur <sup>[20](<https://www.bleepingcomputer.com/news/security/remus-malware-steals-gmail-messages-via-fake-google-sheets-extension/>)</sup>.
- Chainguard a déplacé des milliers de builds quotidiens de GitHub Actions vers sa propre infrastructure de microVM, et ses agents de remédiation des CVE affichent un taux de réussite hebdomadaire de 97 à 98 % <sup>[21](<https://www.chainguard.dev/unchained/dogfooding-checks-and-workspaces-hard-lessons-from-3-000-repos>)</sup>.

## Outillage développeur et pratiques d'ingénierie

- Octopus Deploy a repensé son interface avec une recherche à l'échelle de l'instance et une référence de l'API REST consultable d'environ 1 800 endpoints, déployée sur Octopus Cloud dès maintenant et sur les serveurs auto-hébergés en 2027.0 le 2 décembre <sup>[22](<https://octopus.com/blog/the-best-octopus-yet>)</sup>.
- Terraform a rendu généralement disponible la politique basée sur HCL pour Stacks, avec orchestration de groupes de déploiement multiples, des commandes CLI prêtes pour les agents avec sortie JSON, et le provisionnement SCIM 2.0 pour HCP Terraform Standard et Premium <sup>[23](<https://www.hashicorp.com/blog/terraform-introduces-tfpolicy-support-for-stacks-scim-support-and-more>)</sup>.
- Vite 8.4 ajoute un serveur de développement à liste d'autorisation optionnelle, limitant le service des fichiers aux points d'entrée du projet, détecte les serveurs de développement en double et prend en charge les imports de sous-chemins de paquets dans les URL CSS <sup>[24](<https://vite.dev/blog/announcing-vite8-4>)</sup>.
- Rust 1.100.1 corrige une régression où certains types dotés d'implémentations Iterator valides n'étaient pas reconnus comme implémentant Iterator <sup>[25](<https://blog.rust-lang.org/2026/11/27/Rust-1.100.1/>)</sup>.
- Harness montre que des échecs CI identiques avec un statut de sortie 1 peuvent avoir des causes différentes (disque plein, arrêt pour manque de mémoire, attente de base de données expirée), donc les équipes doivent lire les journaux des étapes plutôt que les bannières <sup>[26](<https://www.harness.io/blog/your-ci-pipeline-just-failed-with-system-failure>)</sup>.
- Honeycomb a migré son traitement des requêtes des Fonctions AWS Lambda vers Lambda Managed Instances pour répondre aux limites de mise à l'échelle et à la hausse des coûts <sup>[27](<https://www.honeycomb.io/blog/outgrowing-lambda-functions-not-lambda>)</sup>.
- SemSec est un ensemble de règles Semgrep open source de 262 règles, dont 35 ciblent les erreurs courantes des applications en « vibe coding », comme un RLS Supabase désactivé ou des webhooks Stripe non vérifiés <sup>[28](<https://github.com/RobustaStudio/semsec>)</sup>.
- Docker Compose Linter vérifie les fichiers Compose pour détecter les erreurs de configuration et les violations de style, avec corrections automatiques et intégration CI <sup>[29](<https://github.com/zavoloklom/docker-compose-linter>)</sup>.
- Des clusters Kubernetes dédiés par charge de travail se justifient par le rayon d'impact, la portée réseau et les frontières réglementaires, bien que les composants dupliqués et les mises à niveau ajoutent des coûts <sup>[30](<https://cloudnativenow.com/contributed-content/dedicated-clusters-per-workload-when-shared-stops-paying/>)</sup>.

## Sources

1. [How Clay Builds GTM Agents — Jeff Barg, Head of AI](<https://latent.space/p/how-clay-builds-gtm-agents-jeff-barg-head-of-ai/>) — _latent.space_
2. [Multiagent coding is the future](<https://www.kalzumeus.com/2026/11/25/multiagent-coding-is-the-future/>) — _kalzumeus.com_
3. [My main Claude Code session writes almost no code](<https://jurajb.dev/main-session-manager/>) — _jurajb.dev_
4. [There are six layers to a working agentic system](<https://threadreaderapp.com/thread/2125913331915784509.html>) — _threadreaderapp.com_
5. [CLI Agent Orchestrator](<https://github.com/awslabs/cli-agent-orchestrator>) — _github.com_
6. [Please don't give the robot my SSH keys: How to keep AI out of trouble](<https://thenewstack.io/teleport-agent-delegated-identity/>) — _thenewstack.io_
7. [Zehn harte KI-Wahrheiten: Was Unternehmen und Gesellschaft erwartet – mit Tristan Post](<https://ai-first.ai/podcast/zehn-harte-ki-wahrheiten-was-unternehmen-und-gesellschaft-erwartet-mit-tristan-post>) — _ai first podcast_
8. [Can European IT Leaders Prove AI ROI to the Board?](<https://www.cloudbees.com/blog/european-it-leaders-ai-coding-roi>) — _cloudbees.com_
9. [Is Jevons Paradox holding?](<https://openrouter.ai/blog/insights/is-jevons-paradox-holding/>) — _openrouter.ai_
10. [OpenAI may be in cost control mode](<https://micjm.com/blog/openai-is-in-cost-control-mode/>) — _micjm.com_
11. [LayerStream: faster MoE fine-tuning on fewer or cheaper GPUs](<https://nebius.com/blog/posts/layerstream-moe-fine-tuning>) — _nebius.com_
12. [From Model Compression to Looped Transformers](<https://shiweiliuiiiiiii.github.io/blog/2026/from-model-compression-to-looped-transformers/>) — _shiweiliuiiiiiii.github.io_
13. [Plato's Key](<https://hazyresearch.stanford.edu/blog/2026-11-25-platos-key>) — _hazyresearch.stanford.edu_
14. [Taking Trainium3 to the Track: Generating Videos with LTX-2.5](<https://huggingface.co/blog/video-trainium3>) — _huggingface.co_
15. [Security incident on hex.pm](<https://hex.pm/blog/security-incident-on-hexpm>) — _hex.pm_
16. [North Korea-Linked PolinRider Poisons Over 7,600 GitHub Repositories to Spread Malware](<https://thehackernews.com/2026/11/north-korea-linked-polinrider-poisons.html>) — _thehackernews.com_
17. [OEMpocalypse Part 2: Rooting Samsung Flagships via Knox DualDAR](<https://calif.io/research/oempocalypse-part-2>) — _calif.io_
18. [Taking over US Treasury subdomains for $3 each](<https://www.intruder.io/research/taking-over-us-treasury-subdomains-for-3-each>) — _intruder.io_
19. [An AI coding agent, a browser, and a Mac tool found a financial firm's access key in under 6 minutes](<https://www.theregister.com/security/2026/11/24/an-ai-coding-agent-a-browser-and-a-mac-tool-found-a-financial-firms-access-key-in-under-6-minutes/5311922>) — _theregister.com_
20. [Remus Malware Steals Gmail Messages via Fake Google Sheets Extension](<https://www.bleepingcomputer.com/news/security/remus-malware-steals-gmail-messages-via-fake-google-sheets-extension/>) — _bleepingcomputer.com_
21. [Dogfooding Checks and Workspaces: Hard lessons from 3,000 repos](<https://www.chainguard.dev/unchained/dogfooding-checks-and-workspaces-hard-lessons-from-3-000-repos>) — _chainguard.dev_
22. [The best Octopus yet](<https://octopus.com/blog/the-best-octopus-yet>) — _octopus.com_
23. [Terraform introduces tfpolicy support for Stacks, SCIM support, and more](<https://www.hashicorp.com/blog/terraform-introduces-tfpolicy-support-for-stacks-scim-support-and-more>) — _hashicorp.com_
24. [Vite 8.4 is out!](<https://vite.dev/blog/announcing-vite8-4>) — _vite.dev_
25. [Announcing Rust 1.100.1](<https://blog.rust-lang.org/2026/11/27/Rust-1.100.1/>) — _blog.rust-lang.org_
26. [Why Your CI Pipeline Failed: Decoding Exit Status 1 & OOM](<https://www.harness.io/blog/your-ci-pipeline-just-failed-with-system-failure>) — _harness.io_
27. [Outgrowing Lambda Functions, Not Lambda](<https://www.honeycomb.io/blog/outgrowing-lambda-functions-not-lambda>) — _honeycomb.io_
28. [SemSec](<https://github.com/RobustaStudio/semsec>) — _github.com_
29. [Docker Compose Linter](<https://github.com/zavoloklom/docker-compose-linter>) — _github.com_
30. [Dedicated Clusters per Workload: When Shared Stops Paying](<https://cloudnativenow.com/contributed-content/dedicated-clusters-per-workload-when-shared-stops-paying/>) — _cloudnativenow.com_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-11-27` | Vendredi | [Lire →](news/fr/2026-11-27.md) |
| `2026-11-26` | Jeudi | [Lire →](news/fr/2026-11-26.md) |
| `2026-11-25` | Mercredi | [Lire →](news/fr/2026-11-25.md) |
| `2026-11-24` | Mardi | [Lire →](news/fr/2026-11-24.md) |
| `2026-11-23` | Lundi | [Lire →](news/fr/2026-11-23.md) |
| `2026-11-22` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-11-22.md) |
| `2026-11-21` | Samedi | [Lire →](news/fr/2026-11-21.md) |
| `2026-11-20` | Vendredi | [Lire →](news/fr/2026-11-20.md) |
| `2026-11-19` | Jeudi | [Lire →](news/fr/2026-11-19.md) |
| `2026-11-18` | Mercredi | [Lire →](news/fr/2026-11-18.md) |
| `2026-11-17` | Mardi | [Lire →](news/fr/2026-11-17.md) |
| `2026-11-16` | Lundi | [Lire →](news/fr/2026-11-16.md) |
| `2026-11-15` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-11-15.md) |
| `2026-11-14` | Samedi | [Lire →](news/fr/2026-11-14.md) |

<sub>[Parcourir toute l’archive (165) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
