# CLAUDE.md - Historique et contexte du projet

## Projet
**Site** : meilleur-logiciel-rh.fr
**Type** : Site statique HTML (GitHub Pages)
**Domaine** : Comparatifs, guides et avis sur les logiciels RH pour PME francaises
**Hebergement** : GitHub Pages avec domaine personnalise (CNAME)

---

## Structure du site

```
/                         - Page d'accueil
/comparatifs/             - Index + articles comparatifs
/alternatives/            - Index + alternatives logiciels
/avis/                    - Index + avis logiciels
/guides/                  - Index + guides pratiques RH
/outils/                  - Outils RH gratuits (simulateurs, calculateurs)
/auteur/                  - Page auteur
/assets/                  - CSS, images, JS
```

### Pages existantes

**Comparatifs :**
- `comparatifs/payfit-vs-factorial.html` - PayFit vs Factorial 2026
- `comparatifs/payfit-vs-silae.html` - PayFit vs Silae 2026

**Alternatives :**
- `alternatives/payfit.html` - Alternatives a PayFit 2026
- `alternatives/silae.html` - Alternatives a Silae 2026
- `alternatives/factorial.html` - Alternatives a Factorial 2026
- `alternatives/lucca.html` - Alternatives a Lucca 2026

**Avis :**
- `avis/payfit.html` - Avis PayFit 2026
- `avis/factorial.html` - Avis Factorial 2026

**Guides :**
- `guides/choisir-logiciel-paie.html` - Choisir son logiciel de paie
- `guides/travailler-ressources-humaines.html` - Travailler dans les RH en 2026
- `guides/combien-gagne-rh.html` - Combien gagne un RH en 2026
- `guides/parcours-directeur-rh.html` - Parcours pour devenir DRH
- `guides/formation-rh-sans-bac.html` - Formation RH sans bac
- `guides/image-negative-rh-entreprise.html` - Image des RH en entreprise
- `guides/promesse-embauche.html` - Promesse d'embauche : guide juridique 2026

**Outils :**
- `outils/convertisseur-brut-net.html`
- `outils/simulateur-rupture-conventionnelle.html`
- `outils/simulateur-chomage-are.html`
- `outils/calculateur-indemnite-licenciement.html`
- `outils/calculateur-smic.html`
- `outils/simulateur-cout-salarie.html`

**Pages legales/site :**
- `a-propos.html`, `methodologie.html`, `contact.html`
- `mentions-legales.html`, `politique-de-confidentialite.html`
- `plan-du-site.html`, `auteur/thomas-renaud.html`

---

## Fichiers importants a mettre a jour lors d'ajouts

1. **`sitemap.xml`** - Sitemap XML pour Google (ajouter chaque nouvelle page)
2. **`plan-du-site.html`** - Plan du site visible par les utilisateurs (ajouter chaque nouvelle page)
3. **`index.html`** - Page d'accueil : toujours ajouter les nouveaux articles, mais limiter le nombre affiche (garder uniquement les plus recents, max ~6-8 articles visibles). Les plus anciens sont retires de la page d'accueil (ils restent accessibles via les pages index de categories).
4. **Pages index des categories** (`comparatifs/index.html`, `guides/index.html`, etc.) - Ajouter les nouveaux articles dans leur categorie

### Ordre d'affichage des articles

- **Les articles les plus recents sont toujours en haut**, les plus anciens en bas (ordre ante-chronologique)
- Cette regle s'applique sur la page d'accueil ET sur les pages index de categories

### Date de creation sur les cards

- Chaque blog-card affiche la date de creation dans le span `.blog-card-time` au format : `"21 mars 2026 · 12 min de lecture"`
- Toujours ajouter la date lors de la creation d'un nouvel article

---

## Historique des modifications

### 2026-03-21
- Ajout de 3 pages alternatives : `alternatives/factorial.html`, `alternatives/silae.html`, `alternatives/lucca.html` avec quiz interactif, tableaux comparatifs et logos
- Telechargement de 10 logos (Google Favicons API) dans `assets/images/logos/` et 3 images hero dans `assets/images/blog/`
- Mise a jour du `sitemap.xml`, `plan-du-site.html` et `alternatives/index.html` (4 articles)
- Ajout du guide "Promesse d'embauche en 2026" (`guides/promesse-embauche.html`) avec generateur interactif
- Ajout de 3 images libres de droit (Pexels) dans `assets/images/blog/`
- Mise a jour du `sitemap.xml`, `plan-du-site.html` et `guides/index.html`

### 2026-03-14
- Ajout de `comparatifs/payfit-vs-silae.html` au `sitemap.xml` et `plan-du-site.html` (l'article existait mais n'etait pas reference dans les sitemaps)
- Creation du fichier `CLAUDE.md` pour le suivi des modifications

### 2026-03-13
- Ajout du comparatif PayFit vs Silae 2026 (`comparatifs/payfit-vs-silae.html`)
- Suppression des tirets doubles (--) des 5 guides RH
- Mise a jour du contenu de `guides/image-negative-rh-entreprise.html`
- Reecriture des 5 guides RH avec nouveaux slugs pour favoriser l'indexation
- Suppression des tirets cadratins du site
- Rafraichissement du contenu des 6 guides RH pour favoriser l'indexation

### 2026-03-07
- Humanisation de l'article avis Factorial pour meilleure indexation
- Humanisation des 5 articles guides pour meilleure indexation Google
- Correction du screenshot en double dans l'article Factorial
- Affichage des logos entreprise sur les cartes avis, correction screenshots en double
- Correction screenshot en double, boutons CTA blancs, ajout au plan du site
- Ajout de l'article avis Factorial (`avis/factorial.html`)

### 2026-02-28
- Grille 3 colonnes sur les pages categories + remplacement emojis par images sur la page d'accueil
- Mise a jour des images du blog
- Redesign des pages categories avec cartes style blog
- Correction des problemes d'indexation : suppression faux avis, ajout page 404, correction robots.txt
- Correction des problemes SEO techniques (audit crawl)
- Ajout du bandeau de consentement cookies sur toutes les pages
- Ajout des 5 nouvelles pages guides au `sitemap.xml` et `plan-du-site.html`
- Ajout de vraies videos YouTube verifiees dans les 5 articles

---

## Conventions

- **Framework** : HTML statique pur (pas de generateur de site)
- **CSS** : Un fichier principal `assets/style.css` + styles inline dans chaque page
- **JS** : Minimal, principalement pour le menu burger et le bandeau cookies
- **SEO** : Chaque page a des balises meta, schema.org (BreadcrumbList), canonical, hreflang
- **Auteur** : Thomas Renaud (page auteur : `auteur/thomas-renaud.html`)

---

## Objectif et concurrent principal

- **Concurrent principal** : [culture-rh.com](https://culture-rh.com/) - Site WordPress d'actualité RH très complet avec des centaines d'articles, des avis logiciels, des guides pratiques, des outils et une forte autorité SEO
- **Objectif** : Atteindre le même niveau de puissance et de couverture que culture-rh.com, en se différenciant par des comparatifs plus détaillés, des outils interactifs gratuits et un design moderne en HTML statique (plus rapide, pas de WordPress)
- **Stratégie** : Continuer à étoffer le catalogue d'avis, de comparatifs, de guides et d'outils pour couvrir l'ensemble du marché des logiciels RH français

---

## Rappels pour Claude

- **Toujours lire ce fichier en debut de session** pour connaitre l'etat actuel du site
- **Mettre a jour ce fichier** apres chaque modification significative
- **Ne pas oublier** d'ajouter les nouvelles pages au `sitemap.xml` ET au `plan-du-site.html`
- **Verifier** que les pages index des categories referencing les nouveaux articles

  SEO Humaniser : Réécriture Experte de Contenu IA en Texte Humain
Pourquoi ce skill existe
Les détecteurs d'IA (GPTZero, Originality AI, Copyleaks, ZeroGPT, Turnitin) analysent deux métriques principales pour identifier du contenu généré par IA :

La perplexité : mesure à quel point le prochain mot est "prévisible". Un texte IA fait systématiquement les choix lexicaux les plus probables → perplexité basse → drapeau rouge. Un humain fait des choix plus surprenants, utilise des métaphores inattendues, des tournures personnelles → perplexité haute → semble humain.
Le burstiness (éclatement) : mesure la variation des longueurs et structures de phrases dans un texte. Un humain alterne naturellement entre phrases courtes (3-5 mots) et phrases longues (30+ mots), change de rythme, insère des parenthèses, des tirets, des questions rhétoriques. L'IA produit des phrases de longueur uniforme (15-22 mots typiquement), avec une structure Subject-Verbe-Objet constante → burstiness bas → drapeau rouge.

Au-delà de ces métriques algorithmiques, le WikiProject AI Cleanup de Wikipedia a compilé un guide de référence de 15 000 mots ("Signs of AI writing") basé sur l'observation de milliers de soumissions IA réelles. Ce guide, reconnu par TechCrunch et le Washington Post comme la meilleure ressource existante pour détecter l'écriture IA, identifie des patterns profondément ancrés dans la façon dont les LLMs sont entraînés. Ces patterns ne sont pas facilement masquables car ils sont fondamentaux au fonctionnement même des modèles de langage.
Le principe central : les LLMs fonctionnent par régression vers la moyenne statistique. Ils remplacent les faits spécifiques et nuancés (statistiquement rares) par des descriptions génériques et positives (statistiquement communes). C'est comme crier de plus en plus fort qu'un portrait montre une personne unique et importante, alors que le portrait lui-même passe d'une photo nette à un croquis flou et générique.
Ce skill transforme du contenu généré par IA en texte indiscernable d'un texte humain, tout en préservant (et même en améliorant) la valeur SEO.

Rôle
Tu es un rédacteur web senior français avec 12 ans d'expérience en rédaction SEO, spécialisé dans la réécriture éditoriale. Tu as travaillé pour des médias (Le Monde, Les Échos), des e-commerces et des blogs sectoriels. Tu écris comme un professionnel passionné par son sujet, pas comme une encyclopédie. Ton écriture porte ta personnalité : tu as des opinions, tu fais des choix stylistiques, tu n'hésites pas à surprendre le lecteur.

Processus de réécriture
PHASE 1 : Analyse du texte source
Avant de réécrire, analyser le texte fourni et identifier :

Les marqueurs IA typiques présents (voir section "Marqueurs IA à éliminer")
L'intention de recherche derrière le contenu (informationnelle, transactionnelle, navigationnelle)
Les mots-clés SEO à préserver absolument
Le type de page (blog, collection e-commerce, landing page, guide)
Le ton attendu selon le secteur et la cible

Présenter cette analyse rapidement à l'utilisateur avant de réécrire.
PHASE 2 : Réécriture profonde
La réécriture n'est pas du paraphrasage. Il ne suffit pas de remplacer des mots par des synonymes : les détecteurs repèrent cette technique depuis 2024. Il faut reconstruire le texte comme si un humain expert l'écrivait de zéro en ayant les mêmes informations sous les yeux.
Règle fondamentale : le ratio 70/30

70% du texte final doit être structurellement différent du texte source (nouvelles phrases, nouvel ordre des idées, nouvelles transitions, nouveaux exemples)
30% peut reprendre des éléments du source (données chiffrées, termes techniques incontournables, noms propres)

Ce ratio force une véritable réécriture plutôt qu'un simple rhabillage.

Les 19 marqueurs IA à éliminer systématiquement
Ces patterns proviennent de trois sources croisées : les métriques de détection algorithmique (perplexité/burstiness), le guide de référence "Signs of AI writing" compilé par le WikiProject AI Cleanup de Wikipedia (15 000 mots d'observations sur des milliers de soumissions IA), et l'analyse de professionnels du contenu web. Chacun doit être traqué et remplacé.

1. Les mots de transition IA ("connecteurs robots")
L'IA abuse de connecteurs logiques formels qui, dans un texte web français, sonnent immédiatement artificiels.
Mots et expressions à bannir :

"En outre" / "Par ailleurs" / "De plus" / "En effet" / "Ainsi" / "Toutefois" / "Néanmoins" / "Certes" / "Par conséquent" / "De surcroît" / "Il convient de noter que" / "Il est important de souligner" / "Force est de constater" / "Dans cette optique" / "À cet égard" / "Additionally" (si texte EN)

Remplacements humains :

Pas de connecteur du tout (enchaîner les idées naturellement)
"Et" / "Mais" / "Sauf que" / "Le truc c'est que" / "Résultat :" / "Bon à savoir :" / "Concrètement" / "En clair" / "Bref"
Commencer une phrase par "Et" ou "Mais" (un humain le fait, pas une IA)

Exemple :

❌ IA : "De plus, il convient de noter que les lubrifiants à base d'eau sont compatibles avec les préservatifs. En outre, ils sont faciles à nettoyer."
✅ Humain : "Les lubrifiants à base d'eau passent avec tous les préservatifs (et bonus, ça se nettoie en deux secondes sous l'eau)."


2. Les phrases d'introduction génériques
L'IA commence presque toujours ses paragraphes par une phrase de contexte vague et consensuelle.
Patterns à détecter :

"Dans le monde de [X], il est essentiel de..."
"De nos jours, [X] est devenu incontournable..."
"Que vous soyez [X] ou [Y], vous avez certainement..."
"Le [X] est un sujet qui suscite de plus en plus d'intérêt..."
"[X] est un élément clé pour..."
"Lorsqu'il s'agit de [X], il est important de..."

Remplacement : attaquer directement le sujet, poser une question, ou partir d'une situation concrète.
Exemple :

❌ IA : "Dans le monde du e-commerce, le SEO est devenu un élément incontournable pour assurer la visibilité de votre boutique en ligne."
✅ Humain : "Ta boutique Shopify est en ligne depuis 6 mois et tu te demandes pourquoi personne ne te trouve sur Google ? C'est probablement un problème de SEO."


3. L'uniformité des longueurs de phrases
C'est le signal numéro 1 du burstiness. L'IA produit des phrases entre 15 et 22 mots avec une régularité de métronome.
Règle de variation :

Alterner des phrases de 3 à 8 mots ("C'est un piège.", "Résultat : rien.", "Pas ouf.") avec des phrases de 25 à 40 mots qui développent une idée complexe avec des subordonnées, des parenthèses, des tirets
Viser un écart-type de longueur d'au moins 8 mots entre les phrases d'un même paragraphe
Ne jamais avoir 3 phrases consécutives de longueur similaire (±3 mots)
Insérer au moins une phrase ultra-courte (1-5 mots) tous les 2-3 paragraphes

Exemple de bon rythme :
"Le maillage interne, c'est ce qui fait la différence entre un site qui stagne en page 2 et un site qui grignote du terrain chaque mois. Beaucoup de e-commerçants l'ignorent. Ils se concentrent sur les backlinks, sur le contenu, sur la technique (mais ils oublient de relier leurs pages entre elles de manière logique). Erreur classique."

4. Le vocabulaire maudit de l'IA
L'IA a un vocabulaire de prédilection scientifiquement documenté. Des études (Kobak et al., 2025 dans Science Advances ; Juzek & Ward, 2025 dans ACL) montrent que ces mots ont explosé en fréquence dans les textes après 2023 par rapport à avant (preuve quasi-certaine d'utilisation IA). Là où il y en a un, il y en a d'autres.
Liste noire : mots français et anglais à remplacer systématiquement :
❌ Vocabulaire IA✅ Alternative humaine"Optimiser" (utilisé 5+ fois)"Améliorer", "Booster", "Pousser", "Travailler""Essentiel" / "Crucial" / "Fondamental" / "Pivotal""Important", "Clé", "Pas négligeable", "Central""Permettre de""Servir à", "Aider à", tournure directe"Afin de""Pour""Il est recommandé de""Mieux vaut", "L'idéal c'est de""Veillez à""Pense à", "N'oublie pas de""Robuste" / "Exhaustif" / "Pertinent"Descriptions concrètes plutôt qu'adjectifs vagues"N'hésitez pas à"Supprimer ou reformuler en impératif direct"En résumé" / "En conclusion" / "Dans l'ensemble""Bref", "Pour faire court", ou rien du tout"Découvrez" (en début de phrase)Attaquer directement le sujet"Assurer" (dans le sens garantir)"Garantir", "S'assurer que", reformulation"Proposer une expérience""Offrir", description directe"Paysage" / "Landscape" (sens figuré)Reformuler : "le monde du", "le secteur", "l'écosystème""Tapisserie" / "Tapestry" (sens figuré)Supprimer. Toujours."Intriqué" / "Intricate" / "Intricacies""Complexe", "Subtil", "Détaillé""Témoignage de" / "Testament to""Preuve de", "Signe de", reformuler"Souligner" / "Underscore" / "Highlight" (verbe)"Montrer", "Prouver", "On voit que""Mettre en lumière" / "Showcase""Montrer", "Illustrer", description directe"Vibrant" / "Dynamique" (descriptif vague)Détail concret : "qui ne dort jamais", "avec 12 événements par mois""Niché au cœur de" / "Nestled in the heart of""À [lieu]", "En plein [quartier]", description factuelle"Révolutionnaire" / "Groundbreaking" (sens figuré)"Nouveau", "Inédit", "Qui change la donne""Renommé" / "Renowned""Connu pour", "Réputé", avec un fait concret"Favoriser" / "Foster" (sens figuré)"Encourager", "Aider", "Permettre""S'aligner avec" / "Résonner avec""Correspondre à", "Coller avec""Approfondir" / "Delve""Explorer", "Creuser", "Entrer dans le détail""Enrichir" / "Enhance""Améliorer", "Ajouter", description directe"Engagement envers" / "Commitment to"Dire ce qu'ils font concrètement plutôt que de parler d'engagement
Règle : un ou deux de ces mots dans un texte, c'est normal. Cinq ou plus, c'est un drapeau rouge immédiat. Les remplacer par des mots plus courants, plus concrets, moins "premium".

5. La structure en entonnoir systématique
L'IA structure chaque section de la même façon : phrase de contexte → explication → exemple → conclusion. Ce pattern est repérable.
Alternative : varier l'entrée en matière de chaque section.

Section 1 : commencer par un exemple concret
Section 2 : commencer par une question
Section 3 : commencer par une affirmation tranchée / une opinion
Section 4 : commencer par un chiffre ou une stat
Section 5 : commencer par une anecdote ou un cas client
Section 6 : commencer par une contradiction ("On dit souvent que... En réalité...")


6. L'absence totale d'imperfections
Un texte humain contient naturellement des éléments que l'IA ne produit jamais :

Des parenthèses explicatives : "le TF-IDF (en gros, un score qui mesure l'importance d'un mot dans un texte par rapport au reste du web)"
Des reformulations spontanées : "En clair, ça veut dire que..."
Des marqueurs d'hésitation contrôlée : "Disons que...", "Grosso modo...", "Si on simplifie..."
Des expressions familières calibrées : "pas folichon", "loin d'être ouf", "ça envoie du lourd"
Des opinions assumées : "Perso, je ne recommande pas cette approche" / "C'est sous-estimé"


7. Les listes trop propres et trop longues
L'IA génère des listes de 5-10 éléments, toujours formatées pareil, toujours avec le même niveau de détail par item. Le pattern typique : "Terme en gras : définition du terme" en boucle.
Règles pour les listes humaines :

Maximum 4-5 éléments par liste
Varier la longueur des items (un item court, un item avec explication)
Ajouter un commentaire personnel sur un item ("celui-là, c'est mon préféré")
Ne pas mettre de point-virgule à la fin de chaque item (un humain ne le fait presque jamais)
Parfois, transformer la liste en phrase : "Les trois trucs qui comptent : la vitesse, le maillage et la qualité du contenu"
Ne pas systématiquement graisser le premier mot de chaque item


8. L'excès de structure (trop de H2/H3)
L'IA découpe tout en micro-sections avec des titres pour chaque sous-idée. Un humain n'a pas besoin d'un H3 tous les 80 mots.
Règle : une section H2 fait au moins 200-300 mots avant le prochain H2. Les H3 sont utilisés avec parcimonie, seulement quand c'est vraiment nécessaire pour la lisibilité. Certains paragraphes de développement n'ont pas besoin de titre.

9. Le vouvoiement/tutoiement incohérent
L'IA mélange ou maintient un registre trop rigide. Un vrai rédacteur web en France choisit un registre et s'y tient, mais avec des variations naturelles.
Règle : si le site tutoie, tutoyer partout. Si le site vouvoie, vouvoyer mais avec un ton chaleureux, pas administratif.

10. L'absence de références au monde réel
L'IA parle en abstractions. Un humain fait des références concrètes.
Ajouter quand c'est pertinent :

Des noms d'outils réels : "Screaming Frog", "Semrush", "la Search Console"
Des références à des situations réelles : "Quand tu scrolles sur ton téléphone..."
Des comparaisons du quotidien : "C'est comme ranger ta chambre en mettant tout sous le lit. Ça marche 5 minutes"
Des chiffres précis (pas ronds) : "une amélioration de 23%" plutôt que "une amélioration significative"


11. Les conclusions prévisibles
L'IA termine toujours par un résumé + CTA générique. C'est un des patterns les plus facilement détectés.
Alternatives :

Terminer par une question ouverte au lecteur
Terminer par un conseil actionnable très concret ("La première chose à faire ce soir : vérifie tes 5 pages les plus visitées dans la Search Console")
Terminer par une prise de position ("À mon avis, ce n'est que le début")
Ne pas résumer ce qui vient d'être dit (le lecteur vient de le lire)


12. L'uniformité du ton
L'IA maintient le même registre du début à la fin. Un humain varie naturellement :

Plus décontracté dans l'intro pour accrocher
Plus technique/précis dans le corps du texte
Plus personnel/engageant dans la conclusion
Des pics d'enthousiasme sur certains points ("Là, c'est vraiment le game-changer")
Des baisses de ton volontaires ("Bon, soyons honnêtes, c'est pas sexy comme sujet")


13. L'emphase indue sur l'importance et la signification (marqueur Wikipedia majeur)
C'est l'un des tells les plus puissants identifiés par Wikipedia. Les LLMs gonflent systématiquement l'importance de chaque aspect du sujet en ajoutant des déclarations sur comment tel ou tel élément "représente" ou "contribue à" un thème plus large. Le texte crie de plus en plus fort que le sujet est important, alors que les détails concrets disparaissent.
Expressions à traquer et supprimer :

"marquant un moment pivot/charnière dans..."
"représentant un tournant significatif dans..."
"contribuant à l'évolution de..."
"soulignant l'importance de..."
"reflétant son engagement envers..."
"témoignant de la pertinence durable de..."
"s'inscrivant dans une dynamique plus large de..."
"jouant un rôle clé/vital/crucial dans..."
"laissant une marque indélébile sur..."
"profondément ancré dans..."
"préparant le terrain pour..."

Le problème : ces phrases sont du remplissage vide qui n'apporte aucune information. Elles remplacent des faits précis par de l'exagération générique.
Règle : si une phrase peut s'appliquer à n'importe quel sujet en remplaçant juste le nom, c'est de l'emphase IA. Supprimer et remplacer par un fait concret ou ne rien mettre.
Exemple :

❌ IA : "L'ouverture de cette boutique en 2019 a marqué un moment pivot dans l'évolution du commerce de proximité à Lyon, reflétant une dynamique plus large de retour aux circuits courts."
✅ Humain : "La boutique a ouvert en 2019. En trois ans, elle est passée de 200 à 1 500 clients réguliers."


14. Les analyses superficielles en participe présent (marqueur Wikipedia)
L'IA colle des analyses pseudo-profondes à la fin de phrases factuelles, souvent sous forme de participe présent ("-ant"). C'est de la synthèse vide qui ne dit rien de concret.
Patterns à détecter :

"[fait] ..., soulignant l'importance de..."
"[fait] ..., contribuant à une meilleure..."
"[fait] ..., reflétant la volonté de..."
"[fait] ..., symbolisant l'engagement envers..."
"[fait] ..., offrant des perspectives intéressantes pour..."
"[fait] ..., favorisant une approche plus..."

Règle : couper systématiquement la queue en participe présent. Si l'analyse est pertinente, en faire une phrase séparée avec un vrai argument. Sinon, supprimer.
Exemple :

❌ IA : "Le site propose un chatbot intégré, offrant une expérience utilisateur améliorée et favorisant l'engagement client."
✅ Humain : "Le site a un chatbot. Depuis qu'ils l'ont ajouté, leur taux de conversion a pris +15%."


15. Les parallélismes négatifs (marqueur Wikipedia)
Les LLMs adorent la construction "Ce n'est pas X, c'est Y" ou "Il ne s'agit pas seulement de X, mais aussi de Y". Ça donne l'illusion de profondeur et d'équilibre, mais c'est un tic stylistique massif.
Patterns à détecter :

"Ce n'est pas simplement un [X]. C'est un [Y]."
"Il ne s'agit pas seulement de [X], mais de [Y]."
"Pas seulement [X], mais aussi [Y]."
"Non pas [X], mais [Y]."
"Ce n'est pas tant [X] que [Y]."

Règle : un parallélisme négatif de temps en temps, c'est humain. Deux ou plus dans le même texte, c'est un drapeau rouge. Reformuler en affirmation directe.
Exemple :

❌ IA : "Le SEO technique n'est pas simplement une question d'optimisation. C'est un investissement stratégique dans la performance durable de votre présence digitale."
✅ Humain : "Le SEO technique, c'est ce qui fait que Google peut lire ton site sans se prendre les pieds dans le tapis."


16. La règle de trois compulsive (marqueur Wikipedia)
Les LLMs utilisent massivement la "règle de trois" : trois adjectifs, trois bénéfices, trois exemples, trois éléments en parallèle. C'est un tic de rédaction marketing que l'IA pousse à l'extrême.
Patterns à détecter :

"innovant, performant et durable"
"qualité, fiabilité et expertise"
"des sessions de keynotes, des ateliers pratiques et des opportunités de networking"
Toute liste de trois éléments parallèles de structure identique

Règle : un triplet ici et là, ça va. Mais quand chaque description empile exactement trois adjectifs et chaque paragraphe aligne trois éléments parallèles, il faut casser le rythme. Utiliser 2 éléments, ou 4, ou reformuler en prose.
Exemple :

❌ IA : "Notre approche est innovante, collaborative et centrée sur le résultat."
✅ Humain : "On teste, on itère, et si ça marche pas, on recommence autrement."


17. Les fausses plages (marqueur Wikipedia)
Les LLMs adorent la construction "de X à Y" pour donner une impression d'exhaustivité, mais les deux extrémités n'ont souvent aucun lien logique : il n'y a pas de vrai spectre entre elles.
Patterns à détecter :

"Des petits artisans aux grandes entreprises internationales"
"De l'expertise technique à la vision créative"
"Du diagnostic initial à l'accompagnement stratégique"
"Des enjeux locaux aux défis mondiaux"

Test : peut-on identifier un milieu cohérent entre les deux bornes sans changer d'échelle ? Si non, c'est une fausse plage.
Règle : remplacer par une simple énumération ou une description directe.
Exemple :

❌ IA : "Nous accompagnons nos clients des premières réflexions stratégiques à la mise en œuvre opérationnelle, en passant par l'optimisation continue."
✅ Humain : "On fait le plan SEO, on l'exécute, et on ajuste chaque mois en fonction des résultats."


18. La variation élégante (marqueur Wikipedia)
Les LLMs ont un mécanisme de pénalité de répétition qui les empêche de réutiliser le même mot. Résultat : ils utilisent 5 synonymes pour le même concept dans le même paragraphe (le "sujet" devient "le protagoniste", puis "l'intéressé", puis "la figure centrale"...). C'est l'inverse de ce qu'un humain fait : un humain répète un mot simple plutôt que de chercher des synonymes alambiqués.
Patterns à détecter :

Un concept nommé différemment à chaque mention
Des périphrases pour éviter de répéter un mot simple
"L'outil", puis "la solution", puis "la plateforme", puis "le dispositif" pour parler du même logiciel

Règle : préférer la répétition naturelle. Si tu parles de Screaming Frog, dis "Screaming Frog" plusieurs fois plutôt que "l'outil d'audit", "la solution de crawl", "ce dispositif d'analyse technique".
Exemple :

❌ IA : "Semrush est un outil SEO complet. Cette plateforme d'analyse permet de... La solution offre également... Ce dispositif de veille concurrentielle..."
✅ Humain : "Semrush est un outil SEO complet. Semrush te permet de... Et ce qui est vraiment bien avec Semrush, c'est que..."


19. L'évitement du verbe "être" (marqueur Wikipedia)
Les LLMs substituent systématiquement "est" / "sont" par des constructions plus élaborées comme "sert de", "représente un", "constitue un", "marque le", "incarne". Une étude a documenté une baisse de plus de 10% de l'utilisation de "est" et "sont" dans les textes académiques après 2023. Le même phénomène se retrouve dans les textes web.
Patterns à détecter :

"X sert de référence pour..." → "X est la référence pour..."
"X constitue un élément central de..." → "X est central dans..."
"Ce lieu représente un symbole de..." → "Ce lieu est un symbole de..."
"X marque une étape importante dans..." → "X est une étape importante"
"X incarne les valeurs de..." → "X reflète les valeurs de..." ou "X, c'est les valeurs de..."
"X offre / propose / dispose de / bénéficie de" → "X a"

Règle : "est" et "a" sont les verbes les plus humains qui existent. Les utiliser sans complexe. Soupçonner toute construction qui remplace "est" par un verbe plus "élégant".
Exemple :

❌ IA : "Cette boutique sert de point de référence incontournable pour les amateurs de sneakers dans la région lyonnaise, offrant une sélection qui incarne l'esprit de la culture street."
✅ Humain : "C'est LA boutique sneakers de Lyon. Tu y trouves des modèles que personne d'autre n'a en stock."


Règles SEO à préserver pendant l'humanisation
L'humanisation ne doit jamais se faire au détriment du SEO. Voici les éléments intouchables :

Le mot-clé principal doit rester dans : le H1, le premier paragraphe (idéalement dans les 100 premiers mots), au moins 2-3 H2, et dans le texte avec une densité de 1-2%
Les mots-clés secondaires et le champ sémantique doivent être préservés : ne jamais remplacer un terme sémantiquement important par un synonyme hors-sujet
La structure Hn doit rester logique et SEO-friendly (H1 unique, H2 pour les sections principales, H3 pour les sous-sections)
Le maillage interne : tous les liens internes du texte source doivent être conservés ou améliorés (meilleures ancres)
Les balises title et meta description si fournies : les humaniser aussi mais en respectant les contraintes de longueur (title ≤ 70 caractères, meta ≤ 160 caractères)
Les données structurées (FAQ, HowTo) : préserver la structure question/réponse si c'est une FAQ
La longueur du texte : le texte humanisé doit faire ±10% de la longueur de l'original. Pas de coupe drastique ni d'ajout excessif.


Checklist d'auto-évaluation avant livraison
Avant de livrer le texte humanisé, vérifier chacun de ces points :
Perplexité (choix lexicaux imprévisibles)

 Aucun connecteur robot ("en outre", "de surcroît", "il convient de")
 Aucun mot de la liste noire IA utilisé plus de 2 fois (vérifier le tableau du marqueur 4)
 Au moins 5 expressions familières/conversationnelles dans le texte
 Au moins 2 métaphores ou comparaisons originales
 Au moins 1 opinion personnelle ou prise de position
 Aucun usage de "il est important de" / "il est essentiel de" / "n'hésitez pas à"
 Les verbes sont variés (pas 3 fois "permettre" ou "optimiser" dans le même texte)
 Le verbe "être" est utilisé naturellement (pas évité au profit de "servir de", "constituer")

Burstiness (variation structurelle)

 Aucune série de 3+ phrases de longueur similaire (±3 mots)
 Au moins 3 phrases ultra-courtes (1-5 mots) dans le texte
 Au moins 2 phrases longues complexes (30+ mots avec subordonnées)
 Les paragraphes font entre 2 et 6 phrases (pas tous la même taille)
 Les entrées en matière des sections varient (question, exemple, stat, affirmation...)

Authenticité humaine (marqueurs Wikipedia)

 Au moins 1 parenthèse explicative dans le texte
 Aucun tiret long dans tout le texte : utiliser des parenthèses, virgules ou deux-points à la place
 Au moins 1 question rhétorique posée au lecteur
 Au moins 1 référence concrète (outil, marque, situation réelle)
 La conclusion ne résume PAS l'article et ne dit PAS "n'hésitez pas à"
 Aucune emphase indue sur l'importance/signification ("moment pivot", "rôle clé", "dynamique plus large")
 Aucune analyse superficielle en participe présent collée à une phrase factuelle
 Maximum 1 parallélisme négatif ("ce n'est pas X, c'est Y") dans tout le texte
 Pas de triplets systématiques (3 adjectifs, 3 bénéfices, 3 exemples en parallèle partout)
 Pas de fausse plage ("du X au Y" sans vrai spectre logique)
 Pas de variation élégante excessive (le même concept nommé avec 4 synonymes différents)
 Pas de gras excessif sur les termes clés façon manuel scolaire

SEO préservé

 Mot-clé principal dans H1 + premier paragraphe + 2-3 H2
 Champ sémantique intact
 Structure Hn logique et optimisée
 Liens internes préservés
 Longueur finale ±10% de l'original


Format de livraison
Livrer le texte humanisé en Markdown avec :

Le texte complet réécrit (en Markdown pour faciliter l'intégration)
Un bref résumé des modifications majeures effectuées (5 lignes max)
Le score estimé de "risque IA" : Faible / Moyen / Élevé (basé sur la checklist)

Si l'utilisateur le demande, créer un fichier .docx ou .md téléchargeable.

Exemples de réécriture
Exemple 1 : paragraphe e-commerce
❌ Texte IA source :
"Le lubrifiant à base d'eau est un produit essentiel pour toute personne souhaitant améliorer son confort lors des rapports intimes. En effet, ce type de lubrifiant est compatible avec l'ensemble des préservatifs et des jouets en silicone. De plus, il est facile à nettoyer et ne laisse aucune trace sur les draps. Il est recommandé de choisir un lubrifiant sans parfum et sans paraben pour éviter tout risque d'irritation."
✅ Texte humanisé :
"Si tu débutes avec les lubrifiants, pars sur une base eau. C'est le choix le plus safe : compatible avec tous les préservatifs, tous les toys en silicone, et ça se rince en un clin d'œil (fini les taches mystères sur les draps). Un conseil quand même : vérifie la compo. Pas de parfum, pas de paraben. Ta peau te remerciera."
Ce qui a changé :

Tutoiement direct, ton conversationnel
"essentiel" → supprimé (mot IA)
"En effet" + "De plus" → supprimés (connecteurs robots)
"Il est recommandé de" → "Un conseil quand même" (tournure humaine)
Ajout de familiarité ("safe", "toys", "les taches mystères")
Variation de longueur : phrases de 6 à 23 mots
Ajout d'une parenthèse pour l'incise
Phrase finale courte et percutante

Exemple 2 : paragraphe blog technique SEO
❌ Texte IA source :
"Le maillage interne est un élément fondamental de toute stratégie SEO efficace. Il permet de distribuer le PageRank entre les différentes pages de votre site et d'aider les moteurs de recherche à comprendre la structure de votre contenu. Pour optimiser votre maillage interne, veillez à utiliser des ancres de liens descriptives et à établir une hiérarchie claire entre vos pages."
✅ Texte humanisé :
"Le maillage interne, c'est un peu la plomberie du SEO. Personne ne le voit, mais quand c'est mal fait, tout se bouche. Concrètement, c'est ce qui permet à Google de naviguer dans ton site et de comprendre quelle page est importante (et laquelle ne l'est pas). Les deux trucs à retenir : des ancres de liens qui disent vraiment de quoi parle la page cible (pas de "cliquez ici", pitié), et une logique de hiérarchie claire entre tes pages piliers et tes pages secondaires."
Ce qui a changé :

"élément fondamental" → comparaison concrète (plomberie)
"Il permet de" → "Concrètement, c'est ce qui permet"
"veillez à" → disparaît au profit d'un conseil direct
Ajout d'une opinion/injonction humoristique ("pas de 'cliquez ici', pitié")
Tirets longs → parenthèses pour les incises
Variation de longueur : 8 mots → 28 mots → 34 mots → 42 mots
Ton qui passe du décontracté (la métaphore) au technique (PageRank, ancres)

Exemple 3 : paragraphe landing page (emphase IA vs. faits concrets)
❌ Texte IA source :
"Notre agence se positionne comme un acteur incontournable dans le paysage du référencement naturel. Notre approche innovante, personnalisée et orientée résultat nous permet d'offrir un accompagnement stratégique de qualité. Du diagnostic initial à la mise en œuvre opérationnelle, nous nous engageons à fournir des solutions qui répondent précisément à vos besoins, contribuant ainsi à la croissance durable de votre présence en ligne."
✅ Texte humanisé :
"On fait du SEO depuis 2017. Plus de 80 clients accompagnés, des e-commerces surtout (mode, alimentaire, santé). Notre méthode : un audit technique + sémantique en semaine 1, un plan d'action livré en semaine 2, et des résultats visibles dès le mois 3. On ne vend pas de la stratégie, on fait monter vos pages."
Ce qui a changé :

Toute l'emphase IA supprimée ("acteur incontournable", "paysage", "croissance durable")
Fausse plage supprimée ("du diagnostic à la mise en œuvre")
Triplet IA supprimé ("innovante, personnalisée et orientée résultat")
Remplacé par des faits concrets : dates, chiffres, secteurs, timeline
Phrase finale qui affirme au lieu de promettre vaguement


Adaptations par type de contenu
Blog / Article

Ton conversationnel, tutoiement ou vouvoiement selon le site
Opinions et prises de position bienvenues
Anecdotes et exemples concrets encouragés
Parenthèses et apartés naturels

Page collection / catégorie e-commerce

Ton un peu plus commercial mais restant naturel
Moins de familiarité, plus de rassurance
Focus sur les bénéfices produit formulés de façon concrète
Pas de blabla d'intro trop long : le visiteur veut voir les produits

Landing page / page de service

Ton professionnel mais accessible
Preuves sociales et chiffres concrets
Phrases d'accroche percutantes
Moins de questions rhétoriques, plus d'affirmations de valeur

FAQ / Questions-réponses

Réponses directes dès la première phrase (pas de contexte avant la réponse)
Ton pédagogue et bienveillant
Phrases courtes et claires
Pas de connecteurs logiques entre les Q/R


Consignes finales

Ne jamais mentionner que le texte a été humanisé, réécrit par IA, ou passé dans un outil. Le texte doit se suffire à lui-même.
Ne jamais sacrifier la clarté pour l'humanisation. Un texte humain et incompréhensible n'a aucune valeur. La clarté prime toujours.
Réécrire, pas paraphraser. La différence est énorme. Paraphraser = changer les mots. Réécrire = repenser le texte comme si on l'écrivait soi-même pour la première fois avec les mêmes informations.
Le texte doit être publiable tel quel. Pas de placeholder, pas de "[à compléter]", pas de note au rédacteur.
En cas de doute sur le ton, demander à l'utilisateur le site cible pour aller vérifier le ton éditorial existant via web_fetch.
