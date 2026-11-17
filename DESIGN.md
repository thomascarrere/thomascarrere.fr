# DESIGN.md : thomascarrere.fr

> Référence visuelle du site, à lire avant toute modification d'interface (page, composant, image, animation).
> Les valeurs font foi dans le code : `src/app/globals.css` (tokens `@theme inline`) et `src/app/layout.tsx` (polices). Ce fichier dit à quoi elles servent et comment les combiner. En cas d'écart, le code a raison et ce fichier se corrige.
> Mis à jour le 17/11/2026 (ex `docs/charte-graphique.md` du 10/04/2026, recalé sur le code). La marque de Thomas au-delà du site (portrait, bannières, ton) est décrite dans `~/Documents/Claude/Structure/Marketing perso/Marque_Thomas.md`.

---

## 0. Règles pour un agent

À faire :
- Utiliser les classes issues des tokens (`bg-violet`, `text-heading`, `text-text-muted`, `border-border`, `bg-bg-alt`…) pour les textes, fonds et bordures, jamais une couleur en dur. Seules exceptions : les ombres, halos et voiles, qui reprennent exactement les valeurs des sections 4, 8 et 9.
- Réutiliser les composants existants (`Bouton`, `Section`, `AnimatedSection`, `Accordion`, `CarteTemoignage`, `GrilleLogos`) avant d'en créer un.
- Garder la séparation `page.tsx` (serveur : metadata, JSON-LD, données) et `xxx-client.tsx` (visuel).
- Vérifier chaque changement visuel en navigateur, à 375 px, 768 px et 1280 px.
- Respecter `prefers-reduced-motion` (déjà géré globalement) et un contraste d'au moins 4,5:1 pour le texte.

À ne jamais faire :
- Ajouter une couleur, une police ou une ombre qui n'est pas dans ce fichier : en proposer l'ajout d'abord.
- Utiliser des emoji comme icônes : icônes SVG au trait (section 7).
- Ajouter une librairie d'animation : hooks React natifs et keyframes CSS seulement.
- Mettre un prix sur les visuels de partage, ou un chiffre qui n'est pas sur le site (« +150 » en étiquette, « plus de 150 » dans une phrase).
- Écrire un tiret long (tiret cadratin) dans un texte du site : utiliser « : » ou « ; ».

Textes : vouvoiement, ton direct et sans jargon ; la voix de Thomas est décrite dans le skill `linkedin-thomas`.

---

## 1. Identité visuelle

**Positionnement** : premium, expert, accessible. Le site doit inspirer confiance et compétence sans être froid.

**Direction artistique** : hybride sombre et clair. Le hero et le CTA final sont sur fond sombre (`#160042`) avec des halos violets. Le reste du contenu est sur fond clair (blanc ou `bg-alt`) pour la lisibilité.

**Favicon** : carré violet (`#443fde`) avec crochets blancs `[ ]` (`src/app/icon.svg`).

---

## 2. Couleurs

Token Tailwind entre parenthèses.

### Principales

| Nom | Hex | Usage |
|---|---|---|
| Violet (`violet`) | `#443fde` | CTA, liens, accents, icônes |
| Violet survol (`violet-hover`) | `#282556` | Survol des CTA |
| Nuit (`heading`) | `#160042` | Titres h1 à h6, fond des sections sombres |

### Secondaires

| Nom | Hex | Usage |
|---|---|---|
| Violet clair (`violet-light`) | `#9d9aea` | Surtitres sur fond sombre |
| Violet très clair (`violet-lighter`) | `#d3d2f4` | Dégradé des icônes (fin) |
| Violet pâle (`violet-bg`) | `#f3f3fc` | Dégradé des icônes (début), badges |
| Lien actif (`active-link`) | `#642eff` | Lien actif dans la navigation |

### Neutres

| Nom | Hex | Usage |
|---|---|---|
| Texte (`text`) | `#3e404c` | Corps de texte |
| Texte secondaire (`text-muted`) | `#666b90` | Labels, mentions ; 5,16:1 sur blanc, 4,68:1 sur `violet-bg` |
| Bordure (`border`) | `#e4e6f1` | Bordures de cartes, séparateurs |
| Fond survol (`bg-hover`) | `#f3f5fb` | Survol des éléments interactifs |
| Fond alterné (`bg-alt`) | `#f9f9fb` | Sections alternées |
| Fond icône (`bg-icon`) | `#f7f9fd` | Ancien style d'icônes |
| Blanc | `#ffffff` | Fond principal |

### Sur fond sombre

| Élément | Valeur |
|---|---|
| Fond | `#160042` |
| Texte principal | `white` |
| Texte secondaire | `white/60` |
| Texte fort | `white/90` |
| Surtitre | `violet-light` |
| Halo principal | `rgba(68, 63, 222, 0.25)` |
| Halo secondaire | `rgba(157, 154, 234, 0.15)` |
| Grille de fond | lignes `rgba(255, 255, 255, 0.02)`, 1 px, tous les 60 px |

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
- Titres : Archivo 700, `text-heading` ; `text-white` sur fond sombre.
- Corps : Inter, `text-text` ; `text-white/60` sur fond sombre.
- Mots importants : `<strong>` en `text-heading` (clair) ou `text-white/90` (sombre).

---

## 4. Composants

### Bouton (`src/components/bouton.tsx`)

Trois variantes, toutes `rounded-full`, hauteur minimale 48 px, `px-8 py-3`, `text-sm font-medium`, transition 300 ms.

| Variante | Fond | Texte | Survol | Usage |
|---|---|---|---|---|
| `primaire` | `violet` | blanc | `violet-hover` | CTA principal sur fond clair |
| `secondaire` | blanc, bordure `border` | `heading` | `bg-hover`, bordure transparente | CTA secondaire, liens internes |
| `glow` | `violet` | blanc | `violet-hover` | CTA sur fond sombre : halo `0 0 24px rgba(68,63,222,0.35)`, renforcé au survol à `0 0 40px rgba(68,63,222,0.55)` |

Textes : CTA principal « Réserver un échange de 30 minutes → » ; CTA de la navigation « Discutons → ».

### Cartes

- Fond blanc, `rounded-xl` (12 px), `p-8`, bordure `1px solid #e4e6f1`.
- Ombre au repos `0 4px 16px rgba(22, 0, 66, 0.04)` ; au survol `translateY(-2px)` et `0 8px 32px rgba(22, 0, 66, 0.08)` ; transition 200 ms.
- Icône : conteneur 44 × 44, `rounded-[10px]`, fond `linear-gradient(135deg, #f3f3fc, #d3d2f4)`, SVG 24 × 24 au trait `violet`, épaisseur 2.

### Navigation (`nav-bar.tsx`)

- Collante en haut, `z-50`, hauteur 88 px.
- Accueil en haut de page : fond transparent, texte blanc, logo inversé. Au défilement (> 50 px) ou sur les sous-pages : `white/95`, `backdrop-blur-md`, ombre légère. Transition 300 ms.
- Logo 160 × 40 (`brightness-0 invert` sur fond transparent) ; liens `rounded-full px-6 py-2 text-sm font-medium` ; lien actif `active-link` sur fond clair.
- CTA « Discutons → » : violet plein sur fond clair, contour blanc sur fond transparent.
- LinkedIn : icône d'origine bleue. Mobile : menu hamburger animé, panneau blanc.

### Accordion (FAQ)

Conteneur unique blanc, `rounded-xl`, bordure, `divide-y divide-border`, items `px-6 py-5` ; icône « + » violette qui pivote de 45° (300 ms) ; contenu en `max-height` animé (300 ms).

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
| `dark` | `#160042` | Hero, CTA final |

`py-18 px-[5%]` ; largeur de contenu 1 140 px (1 280 px en version large).

### Pied de page (`footer.tsx`)

Fond `#160042` ; logo inversé à gauche, mentions au centre, LinkedIn à droite ; texte `white/50` ; liens Mentions légales et Gérer les cookies.

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

SVG en ligne, au trait (jamais en aplat), épaisseur 2, extrémités arrondies ; 24 × 24 dans les cartes, 20 × 20 dans les listes ; couleur `violet` sur fond clair. Coches : cercle violet plein et trait blanc (14 × 14, épaisseur 3).

---

## 8. Images

- Photos en WebP, logos en PNG ; composant Next.js `<Image>`.
- Photos de Thomas : `aspect-[4/5]`, `rounded-xl`, `object-cover`, voile `bg-gradient-to-t from-[#160042]/10 to-transparent`.
- Images de partage (`public/images/partage/`, `src/lib/seo.ts`) : titre seul, sans prix ni petits textes. Pour forcer LinkedIn à recharger une image, changer sa version via `imagePartage(..., version)`.

---

## 9. Effets décoratifs (sections sombres)

- Halo principal (haut droite) : cercle `rgba(68,63,222,0.25)`, 300 × 300, flou 40 px.
- Halo secondaire (bas gauche) : cercle `rgba(157,154,234,0.15)`, 250 × 250, flou 50 px.
- Halo du CTA final : ellipse centrée `rgba(68,63,222,0.2)`, 400 × 200, flou 40 px.
- Grille de fond : lignes `rgba(255,255,255,0.02)`, 1 px, tous les 60 px.
- Tous : `absolute`, `z-0`, `pointer-events-none`.
