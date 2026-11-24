# DESIGN.md : thomascarrere.fr

> Référence visuelle du site, à lire avant toute modification d'interface (page, composant, image, animation).
> Les valeurs font foi dans le code : `src/app/globals.css` (tokens `@theme inline`) et `src/app/layout.tsx` (polices). Ce fichier dit à quoi elles servent et comment les combiner. En cas d'écart, le code a raison et ce fichier se corrige.
> Mis à jour le 24/11/2026 : passage du violet au bleu nuit, couleur pour couleur, et retrait des effets lumineux (ex `docs/charte-graphique.md` du 10/04/2026, recalé sur le code le 17/11/2026). La marque de Thomas au-delà du site (portrait, bannières, ton) est décrite dans `~/Documents/Claude/Structure/Marketing perso/Marque_Thomas.md`.

---

## 0. Règles pour un agent

À faire :
- Utiliser les classes issues des tokens (`bg-violet`, `text-heading`, `text-text-muted`, `border-border`, `bg-bg-alt`…) pour les textes, fonds et bordures, jamais une couleur en dur. Seule exception : les ombres, qui reprennent exactement les valeurs de la section 4. Les tokens s'appellent encore `violet` (nom historique) mais portent du bleu : ne pas les renommer au passage.
- Réutiliser les composants existants (`Bouton`, `Section`, `AnimatedSection`, `Accordion`, `CarteTemoignage`, `GrilleLogos`) avant d'en créer un.
- Garder la séparation `page.tsx` (serveur : metadata, JSON-LD, données) et `xxx-client.tsx` (visuel).
- Vérifier chaque changement visuel en navigateur, à 375 px, 768 px et 1280 px.
- Respecter `prefers-reduced-motion` (déjà géré globalement) et un contraste d'au moins 4,5:1 pour le texte.

À ne jamais faire :
- Ajouter une couleur, une police ou une ombre qui n'est pas dans ce fichier : en proposer l'ajout d'abord.
- Remettre un halo, une lueur, une grille de fond ou un texte en dégradé (section 9), ni du violet, ni un accent jaune.
- Utiliser des emoji comme icônes : icônes SVG au trait (section 7).
- Ajouter une librairie d'animation : hooks React natifs et keyframes CSS seulement.
- Mettre un prix sur les visuels de partage, ou un chiffre qui n'est pas sur le site (« +150 » en étiquette, « plus de 150 » dans une phrase).
- Écrire un tiret long (tiret cadratin) dans un texte du site : utiliser « : » ou « ; ».

Textes : vouvoiement, ton direct et sans jargon ; la voix de Thomas est décrite dans le skill `linkedin-thomas`.

---

## 1. Identité visuelle

**Positionnement** : premium, expert, accessible. Le site doit inspirer confiance et compétence sans être froid.

**Direction artistique** : hybride sombre et clair. Le hero et le CTA final sont sur un aplat bleu nuit (`#0b1f3a`), sans décor. Le reste du contenu est sur fond clair (blanc ou `bg-alt`) pour la lisibilité.

**Favicon** : carré bleu (`#2b5ca8`) avec crochets blancs `[ ]` (`src/app/icon.svg`).

---

## 2. Couleurs

Token Tailwind entre parenthèses. Les tokens ont gardé leur nom d'origine (`violet`, `violet-light`…) : seule la valeur a changé le 24/11/2026.

### Principales

| Nom | Hex | Usage |
|---|---|---|
| Bleu (`violet`) | `#2b5ca8` | CTA, liens, accents, icônes, anneau de focus ; 6,56:1 sur blanc |
| Bleu survol (`violet-hover`) | `#1f4480` | Survol des CTA et des liens ; 9,56:1 avec le blanc |
| Nuit (`heading`) | `#0b1f3a` | Titres h1 à h6, fond des sections sombres et du pied de page (`bg-heading`) |

### Secondaires

| Nom | Hex | Usage |
|---|---|---|
| Bleu clair (`violet-light`) | `#8fb3e0` | Surtitres et fin du titre du hero sur fond sombre ; 7,62:1 sur nuit |
| Bleu doux (`violet-lighter`) | `#bcd0ea` | Dégradé des icônes (fin), bordure des encadrés bleu pâle |
| Bleu pâle (`violet-bg`) | `#dce6f2` | Dégradé des icônes (début), badges, encadrés ; le bleu y tient 5,20:1 |
| Lien actif (`active-link`) | `#2b5ca8` | Lien actif dans la navigation (même valeur que le bleu) |

### Neutres

| Nom | Hex | Usage |
|---|---|---|
| Texte (`text`) | `#3e404c` | Corps de texte |
| Texte secondaire (`text-muted`) | `#566580` | Labels, mentions ; 5,88:1 sur blanc, 5,60:1 sur `bg-alt`, 4,66:1 sur `violet-bg` |
| Bordure (`border`) | `#e4e6f1` | Bordures de cartes, séparateurs |
| Fond survol (`bg-hover`) | `#f3f5fb` | Survol des éléments interactifs |
| Fond alterné (`bg-alt`) | `#f9f9fb` | Sections alternées |
| Fond icône (`bg-icon`) | `#f7f9fd` | Ancien style d'icônes |
| Blanc | `#ffffff` | Fond principal |

### Sur fond sombre

| Élément | Valeur |
|---|---|
| Fond | `#0b1f3a` (`bg-heading`), en aplat |
| Texte principal | `white` |
| Texte secondaire | `white/60` (6,67:1) ; jamais en dessous de `white/50` (5,04:1) |
| Texte fort | `white/90` |
| Surtitre | `violet-light` |
| Bouton | `violet` plein, texte blanc |

### Annexe

| Nom | Hex | Usage |
|---|---|---|
| Ambre | `#f59e0b` | Étoiles des témoignages, rien d'autre |

---

## 3. Typographie

### Polices

| Police | Usage | Graisses |
|---|---|---|
| Archivo | Titres h1 à h6, compteurs, prix | 400, 500, 600, **700** |
| Inter | Corps, boutons, labels | 300, 400, 500, **600** |

Chargées par `next/font` (Google Fonts, `display: swap`).

### Échelle

| Élément | Bureau | Tablette (< 992 px) | Mobile (< 768 px) | Interligne | Approche |
|---|---|---|---|---|---|
| h1 | 64 px | 48 px | 42 px | 1.1 | -0.04em |
| h2 | 56 px | 44 px | 44 px | 1.1 | -0.04em |
| h3 | 24 px | 24 px | 24 px | 1.3 | -0.02em |
| p | 16 px | 16 px | 16 px | 1.65 | |
| Intro (`text-lg`) | 18 px | 18 px | 18 px | 2.0 (`leading-8`) | -0.02em |
| Surtitre (`text-sm`) | 14 px | | | | 0.08em (clair), 0.12em (sombre) |
| Label (`text-xs`) | 12 px | | | | 0.08em |

### Règles

- Surtitres : capitales, gras, approche large ; `text-violet` sur fond clair, `text-violet-light` sur fond sombre.
- Titre du hero de l'accueil : la fin de la phrase (« que vous n'avez pas encore ») est en `text-violet-light` uni. Pas de texte en dégradé.
- Titres : Archivo 700, `text-heading` ; `text-white` sur fond sombre.
- Corps : Inter, `text-text` ; `text-white/60` sur fond sombre.
- Mots importants : `<strong>` en `text-heading` (clair) ou `text-white/90` (sombre).
- Le `h1` de l'accueil contient volontairement le surtitre « Directeur marketing externalisé pour TPE et PME » (dans un `span` en `text-sm`) : c'est la requête visée en référencement. Ne pas le sortir du `h1`.

---

## 4. Composants

### Bouton (`src/components/bouton.tsx`)

Trois variantes, toutes `rounded-full`, hauteur minimale 48 px, `px-8 py-3`, `text-sm font-medium`, transition 300 ms.

| Variante | Fond | Texte | Survol | Usage |
|---|---|---|---|---|
| `primaire` | `violet` | blanc | `violet-hover` | CTA principal sur fond clair |
| `secondaire` | blanc, bordure `border` | `heading` | `bg-hover`, bordure transparente | CTA secondaire, liens internes |
| `glow` | `violet` | blanc | `violet-hover` | CTA sur fond sombre. Bouton plein, sans lueur : le nom est historique, le rendu est celui de `primaire` |

Textes : CTA principal « Réserver un échange de 30 minutes → » ; CTA de la navigation « Discutons → ».

### Cartes

- Fond blanc, `rounded-xl` (12 px), `p-8`, bordure `1px solid #e4e6f1`.
- Ombre au repos `0 4px 16px rgba(11, 31, 58, 0.04)` ; au survol `translateY(-2px)` et `0 8px 32px rgba(11, 31, 58, 0.08)` ; transition 200 ms. Les ombres sont toujours la nuit `rgba(11, 31, 58, …)` à faible opacité (navigation 0.06, logos 0.06, bandeau cookies 0.18).
- Icône : conteneur 44 × 44, `rounded-[10px]`, fond `linear-gradient(135deg, #dce6f2, #bcd0ea)` (`from-violet-bg to-violet-lighter`), SVG 24 × 24 au trait `violet` (`stroke="currentColor"` et `text-violet`), épaisseur 2.

### Navigation (`nav-bar.tsx`)

- Collante en haut, `z-50`, hauteur 88 px.
- Accueil en haut de page : fond transparent, texte blanc, logo inversé. Au défilement (> 50 px) ou sur les sous-pages : `white/95`, `backdrop-blur-md`, ombre légère. Transition 300 ms.
- Logo 160 × 40 (`brightness-0 invert` sur fond transparent) ; liens `rounded-full px-6 py-2 text-sm font-medium` ; lien actif `active-link` sur fond clair.
- CTA « Discutons → » : bleu plein sur fond clair, contour blanc sur fond transparent.
- LinkedIn : icône d'origine bleue. Mobile : menu hamburger animé, panneau blanc.

### Accordion (FAQ)

Conteneur unique blanc, `rounded-xl`, bordure, `divide-y divide-border`, items `px-6 py-5` ; icône « + » bleue qui pivote de 45° (300 ms) ; contenu en `max-height` animé (300 ms).

### Témoignages (`carte-temoignage.tsx`)

Carte standard ; 5 étoiles `#f59e0b` ; citation en italique, 15 px ; avatar 48 × 48 rond ou initiales sur `bg-hover` ; nom `font-medium text-sm text-heading` ; entreprise `text-xs text-text-muted`.

### Compteurs

Flex centré, écart 40 à 64 px, séparateur vertical 1 × 48 px `border` ; chiffre `text-4xl` Archivo gras `violet` ; label `text-sm text-text-muted` ; comptage animé de 0 à N au défilement (1 500 ms).

### Logos clients (`grille-logos.tsx`)

Grille 2, 3 puis 4 colonnes ; cellules blanches, bordure `bg-hover`, hauteur minimale 96 px, `p-6` ; texte de repli si pas d'image ; logos `object-contain`, 48 px de haut au plus.

### Section (`section.tsx`)

| Variante | Fond | Usage |
|---|---|---|
| `blanc` | `#ffffff` | Sections standard |
| `alt` | `#f9f9fb` | Sections alternées |
| `dark` | `#0b1f3a` (`bg-heading`) | Hero, CTA final |

`py-18 px-[5%]` ; largeur de contenu 1 140 px (1 280 px en version large).

### Pied de page (`footer.tsx`)

Fond `#0b1f3a` (`bg-heading`) ; logo inversé à gauche, mentions au centre, LinkedIn à droite ; texte `white/50` ; liens Mentions légales et Gérer les cookies.

---

## 5. Animations

| Animation | Déclencheur | Durée | Courbe |
|---|---|---|---|
| Apparition vers le haut | IntersectionObserver (seuil 0.1) | 600 ms | ease-out |
| Décalage entre enfants | 100 ms par enfant | | |
| Comptage | IntersectionObserver (seuil 0.3) | 1 500 ms | ease-out cubique |
| Survol des cartes | | 200 ms | |
| Survol des boutons | | 300 ms | |

Aucune animation continue. Toutes s'arrêtent avec `prefers-reduced-motion` (règle globale dans `globals.css`).

---

## 6. Mise en page

| Nom | Largeur | Changements |
|---|---|---|
| Mobile | < 768 px | h1 42 px, colonnes empilées |
| Tablette | < 992 px | h1 48 px, h2 44 px |
| Bureau | ≥ 992 px | Grilles multi-colonnes, navigation complète |
| Large | > 1 280 px | Contenu limité à 1 280 px |

Structure d'une page : navigation collante, hero sombre, sections alternées blanc et `alt` (contenu centré à 1 140 px), CTA final sombre, pied de page sombre.

| Espacement | Valeur |
|---|---|
| Section, vertical | 72 px (`py-18`) |
| Section, horizontal | 5 % |
| Hero | `py-20 md:py-28` |
| Grilles de cartes | `gap-8` |
| Grille de témoignages | `gap-6` |
| Titre puis contenu | `mb-12` |
| Titre puis sous-titre | `mb-6` |
| Sous-titre puis corps | `mb-4` |

---

## 7. Icônes

SVG en ligne, au trait (jamais en aplat), épaisseur 2, extrémités arrondies ; 24 × 24 dans les cartes, 20 × 20 dans les listes ; couleur `violet` sur fond clair. Coches : cercle bleu plein (`fill-violet`) et trait blanc (14 × 14, épaisseur 3).

---

## 8. Images

- Photos en WebP, logos en PNG ; composant Next.js `<Image>`.
- Photos de Thomas : `aspect-[4/5]`, `rounded-xl`, `object-cover`, voile `bg-gradient-to-t from-heading/10 to-transparent`.
- Images de partage (`public/images/partage/`, `src/lib/seo.ts`) : titre seul, sans prix ni petits textes. Au 24/11/2026 elles sont encore dans l'ancien violet : à refaire en bleu nuit. Pour forcer LinkedIn à recharger une image, changer sa version via `imagePartage(..., version)`.

---

## 9. Effets décoratifs (sections sombres)

Aucun. Les sections sombres sont un aplat bleu nuit (`bg-heading`), sans rien derrière le texte.

Retirés le 24/11/2026, à ne pas remettre :
- les halos (hero haut droite et bas gauche, CTA final) ;
- la grille de fond ;
- la lueur autour du bouton `glow` ;
- le dégradé sur le titre du hero.

Ces effets donnaient au site un air de page générée. Le relief vient du contraste entre la nuit, le blanc et le bleu clair, et de la photo.
