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
3. **`index.html`** - Page d'accueil (si le nouveau contenu doit y apparaitre)
4. **Pages index des categories** (`comparatifs/index.html`, `guides/index.html`, etc.) - Ajouter les nouveaux articles dans leur categorie

---

## Historique des modifications

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
