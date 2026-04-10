# Charte graphique : thomascarrere.fr

> Derniere mise a jour : 10 avril 2026

---

## 1. Identite visuelle

**Positionnement** : Premium, expert, accessible. Le site doit inspirer confiance et competence sans etre froid.

**Direction artistique** : Hybride Dark/Light. Le hero et le CTA final sont sur fond sombre (#160042) avec des accents lumineux (glows violet). Le reste du contenu est sur fond clair (blanc / bg-alt) pour la lisibilite.

**Favicon** : Carre violet (#443fde) avec crochets blancs `[ ]`. Rappelle les crochets du logo original.

---

## 2. Palette de couleurs

### Couleurs principales

| Nom | Hex | Usage |
|-----|-----|-------|
| **Violet** | `#443fde` | CTAs, liens, accents, icones |
| **Violet Hover** | `#282556` | Etats hover sur les CTAs |
| **Heading** | `#160042` | Titres h1-h6, fond des sections dark |

### Couleurs secondaires

| Nom | Hex | Usage |
|-----|-----|-------|
| **Violet Light** | `#9d9aea` | Surtitres sur fond dark, degrade texte |
| **Violet Lighter** | `#d3d2f4` | Fond degrade icones (to) |
| **Violet BG** | `#f3f3fc` | Fond degrade icones (from), badges |
| **Active Link** | `#642eff` | Lien actif dans la navigation |

### Couleurs neutres

| Nom | Hex | Usage |
|-----|-----|-------|
| **Text** | `#3e404c` | Corps de texte (paragraphes) |
| **Text Muted** | `#6b7094` | Texte secondaire, labels |
| **Border** | `#e4e6f1` | Bordures de cartes, separateurs |
| **BG Hover** | `#f3f5fb` | Fond hover des elements interactifs |
| **BG Alt** | `#f9f9fb` | Fond des sections alternees |
| **BG Icon** | `#f7f9fd` | Fond des icones (ancien style) |
| **Blanc** | `#ffffff` | Fond principal |

### Couleurs sur sections dark

| Element | Valeur |
|---------|--------|
| Fond section | `#160042` |
| Texte principal | `white` |
| Texte secondaire | `white/60` (60% opacite) |
| Texte fort (strong) | `white/90` |
| Surtitre | `#9d9aea` (violet-light) |
| Glow principal | `rgba(68, 63, 222, 0.25)` |
| Glow secondaire | `rgba(157, 154, 234, 0.15)` |
| Grille fond | `rgba(255, 255, 255, 0.02)` lignes 1px, espacement 60px |

### Couleur annexe

| Nom | Hex | Usage |
|-----|-----|-------|
| **Amber** | `#f59e0b` | Etoiles des temoignages |

---

## 3. Typographie

### Polices

| Police | Usage | Poids |
|--------|-------|-------|
| **Archivo** | Titres (h1-h6), compteurs, prix | 400, 500, 600, **700** |
| **Inter** | Corps de texte, boutons, labels | 300, 400, 500, **600** |

Source : Google Fonts, chargees via `next/font` avec `display: swap`.

### Echelle typographique

| Element | Taille desktop | Taille tablette | Taille mobile | Line-height | Letter-spacing |
|---------|---------------|-----------------|---------------|-------------|----------------|
| **h1** | 64px | 48px | 42px | 1.1 | -0.04em |
| **h2** | 56px | 44px | 44px | 1.1 | -0.04em |
| **h3** | 24px | 24px | 24px | 1.3 | -0.02em |
| **p** (body) | 16px | 16px | 16px | 1.8 | — |
| **p** (intro) | 18px (text-lg) | 18px | 18px | 2.0 (leading-8) | -0.02em |
| **Surtitre** | 14px (text-sm) | 14px | 14px | — | 0.08em (light) / 0.12em (dark) |
| **Label** | 12px (text-xs) | 12px | 12px | — | 0.08em |

### Regles typographiques

- Surtitres : uppercase, font-bold, tracking large
- Surtitres sur fond clair : `text-violet`
- Surtitres sur fond dark : `text-violet-light` + tracking 0.12em
- Titres (h1-h6) : Archivo, font-weight 700, couleur `heading` (#160042)
- Titres sur fond dark : `text-white`
- Corps : Inter, couleur `text` (#3e404c)
- Corps sur fond dark : `text-white/60`
- Mots importants dans le corps : `<strong>` avec `text-heading` (clair) ou `text-white/90` (dark)

---

## 4. Composants

### Boutons (Bouton)

3 variantes, toutes en `rounded-full`, min-height 48px, padding `px-8 py-3`.

| Variante | Fond | Texte | Hover | Usage |
|----------|------|-------|-------|-------|
| **Primaire** | `#443fde` | Blanc | `#282556` | CTA principal sur fond clair |
| **Secondaire** | Blanc | `#160042` | `#f3f5fb` | CTA secondaire, liens internes |
| **Glow** | `#443fde` | Blanc | `#282556` | CTA sur fond dark, avec animation pulse |

Animation glow : `box-shadow` pulse entre `0 0 30px` et `0 0 40px` en rgba violet, 2s infinite.

Texte CTA principal : "Reserver mon diagnostic offert (30min) →"
Texte CTA navbar : "Discutons →"

### Cartes

**Style standard (fond clair)** :
- Fond blanc, `rounded-xl` (12px), padding 32px (p-8)
- Bordure : `1px solid #e4e6f1`
- Ombre : `0 4px 16px rgba(22, 0, 66, 0.04)`
- Hover : `translateY(-2px)` + ombre `0 8px 32px rgba(22, 0, 66, 0.08)`
- Transition : `all 200ms ease`

**Icones dans les cartes** :
- Conteneur : 44x44px, `rounded-[10px]`
- Fond degrade : `linear-gradient(135deg, #f3f3fc, #d3d2f4)`
- Icone SVG : 24x24, stroke `#443fde`, strokeWidth 2

### Navigation (NavBar)

**Comportement** :
- Sticky `top-0`, z-index 50, hauteur 88px
- Sur la homepage en haut : fond transparent, texte blanc, logo inverse
- Au scroll (> 50px) ou sur sous-pages : fond `white/95` + `backdrop-blur-md` + ombre subtile
- Transition : 300ms ease

**Elements** :
- Logo : 160x40, filtre `brightness-0 invert` quand transparent
- Liens desktop : `rounded-full px-6 py-2`, text-sm, font-medium
- Liens actifs : `text-active-link` (#642eff) sur fond clair, `text-white` sur transparent
- CTA desktop : "Discutons →", violet plein sur fond clair, outline blanc sur transparent
- LinkedIn : icone originale (bleue), pas de filtre
- Mobile : hamburger anime, menu deroulant avec fond blanc

### Accordion (FAQ)

- Conteneur unique : fond blanc, `rounded-xl`, bordure, `overflow-hidden`
- Items separes par `divide-y divide-border`
- Padding items : `px-6 py-5`
- Icone : "+" en violet, rotation 45deg vers "x" a l'ouverture (300ms)
- Contenu : `max-height` anime de 0 a 96 (300ms)

### Temoignages (CarteTemoignage)

- Style carte standard avec hover lift
- Etoiles : 5 etoiles SVG remplies en amber `#f59e0b`
- Citation : `italic`, text-[15px], couleur text
- Avatar : 48x48 rounded-full, ou initiales sur fond `bg-hover`
- Nom : font-medium, text-sm, couleur heading
- Entreprise : text-xs, couleur text-muted

### Compteurs (Compteurs)

- Disposition : flex horizontal, centree, gap 40-64px
- Separateur : ligne verticale 1px, hauteur 48px, couleur border
- Chiffre : text-4xl (36px), font-bold, Archivo, couleur violet
- Label : text-sm, couleur text-muted
- Animation : count-up de 0 a N au scroll (1500ms, ease-out cubique)

### Logos clients (GrilleLogos)

- Grille : 2 colonnes (mobile), 3 (sm), 4 (md)
- Cellules : fond blanc, bordure `bg-hover`, min-height 96px, padding 24px
- Hover : ombre `23px 23px 64px -16px #393b6a0f`
- Fallback texte si pas d'image

### Section

3 variantes de fond :

| Variante | Fond | Usage |
|----------|------|-------|
| **blanc** | `#ffffff` | Sections standard |
| **alt** | `#f9f9fb` | Sections alternees |
| **dark** | `#160042` | Hero, CTA final |

Padding : `py-18 px-[5%]` (72px vertical, 5% horizontal).
Largeur max contenu : 1140px (defaut) ou 1280px (large).

### Footer

- Fond : `#160042` (dark, coherent avec les sections dark)
- Disposition : flex, logo a gauche, copyright centre, LinkedIn a droite
- Logo : inverse en blanc via `brightness-0 invert`
- Texte : `white/50`
- LinkedIn : icone originale (bleue) sur fond `white/10`, hover `white/20`

---

## 5. Animations et interactions

### Scroll animations

| Animation | Declencheur | Duree | Easing |
|-----------|-------------|-------|--------|
| **Fade-in up** | Intersection Observer (threshold 0.1) | 600ms | ease-out |
| **Stagger** | Delai entre enfants : 100ms | 600ms + delai | ease-out |
| **Count-up** | Intersection Observer (threshold 0.3) | 1500ms | ease-out cubique |

Implementation : hooks React natifs (`useInView`, `useCountUp`), pas de librairie externe.

### Hover interactions

| Element | Effet | Duree |
|---------|-------|-------|
| **Cartes** | `translateY(-2px)` + ombre renforcee | 200ms |
| **Boutons** | Changement couleur fond | 300ms |
| **Liens navbar** | Changement couleur texte | 150ms (defaut) |

### Animations continues

| Animation | Effet | Duree |
|-----------|-------|-------|
| **CTA glow** | Pulse box-shadow violet | 2s, infinite |

### Transitions navbar

| Propriete | Duree |
|-----------|-------|
| Background, color, box-shadow | 300ms ease |
| Logo brightness/invert | 300ms ease |

---

## 6. Mise en page

### Breakpoints

| Nom | Largeur | Changements |
|-----|---------|-------------|
| **Mobile** | < 767px | h1: 42px, colonnes empilees |
| **Tablette** | < 991px | h1: 48px, h2: 44px |
| **Desktop** | > 991px | Grilles multi-colonnes, navbar desktop |
| **Large** | > 1280px | Contenu max-width 1280px |

### Structure des pages

```
[NavBar sticky — transparent/blanc]
[Hero — dark, pleine largeur]
[Sections alternees blanc/alt]
  [Contenu max-width 1140px centre]
[CTA Final — dark, pleine largeur]
[Footer — dark]
```

### Espacements

| Element | Valeur |
|---------|--------|
| Padding section vertical | 72px (py-18) |
| Padding section horizontal | 5% |
| Hero padding (dark) | 80px/112px (py-20 md:py-28) |
| Gap grilles cartes | 32px (gap-8) |
| Gap grille temoignages | 24px (gap-6) |
| Espace entre titre et contenu | 48px (mb-12) |
| Espace titre/sous-titre | 24px (mb-6) |
| Espace sous-titre/corps | 16px (mb-4) |

---

## 7. Iconographie

- Style : SVG inline, stroke (pas fill), strokeWidth 2, strokeLinecap/strokeLinejoin round
- Taille : 24x24 dans les cartes, 20x20 dans les listes, 14x14 pour les checkmarks
- Couleur : `#443fde` (violet) sur fond clair
- Checkmarks : cercle violet plein + stroke blanc (14x14, strokeWidth 3)

---

## 8. Images

- Format : WebP pour les photos, PNG pour les logos
- Photos de Thomas : `aspect-[4/5]`, `rounded-xl`, `object-cover`
- Overlay sur les photos : `bg-gradient-to-t from-[#160042]/10 to-transparent`
- Optimisation : Next.js `<Image>` avec `fill` ou dimensions explicites
- Logos clients : `object-contain`, max-height 48px

---

## 9. Effets decoratifs (sections dark)

### Glows

- Glow principal (haut-droite) : cercle radial `rgba(68,63,222,0.25)`, 300x300px, blur 40px
- Glow secondaire (bas-gauche) : cercle radial `rgba(157,154,234,0.15)`, 250x250px, blur 50px
- Glow CTA final : ellipse centree `rgba(68,63,222,0.2)`, 400x200px, blur 40px
- Tous les glows : `position absolute`, `z-0`, `pointer-events-none`

### Grille de fond

- Lignes horizontales et verticales : `rgba(255,255,255,0.02)`, 1px, espacement 60px
- `position absolute inset-0`, `z-0`, `pointer-events-none`

### Ligne de transition

Non implementee (optionnelle pour une future iteration).
