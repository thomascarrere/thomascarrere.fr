# Refonte visuelle thomascarrere.fr

## Objectifs

1. **Positionnement premium** — le site doit respirer la credibilite et l'expertise haut de gamme
2. **Se demarquer visuellement** — sortir du look "template clean" pour avoir plus de personnalite
3. **Conversions** — polish sur les CTAs et le parcours, pas de refonte structurelle

## Direction validee

**Hybride Dark/Light (Approche 1)** : hero dark + CTA final dark, le reste en clair. Navbar transparente sur le hero, blanche au scroll.

**Niveau d'animation** : entre subtil et modere. Fade-in au scroll, transitions hover, compteurs animes sur les chiffres cles. Pas de parallaxe ni d'effets expressifs.

## Design par section

### 1. Navbar

- **Sur le hero** : fond transparent, logo et liens en blanc, CTA "Discutons" en outline blanc
- **Au scroll** : fond blanc avec `backdrop-blur`, shadow subtile, logo et liens en couleurs normales, CTA en violet plein
- **Transition** : smooth via CSS transition sur background, color, box-shadow
- **Mobile** : inchange (hamburger), juste la meme logique transparent/blanc

### 2. Hero

- **Fond** : `linear-gradient(160deg, #0c0024, #160042, #1e1060, #160042)`
- **Effets de fond** : 2 glows radiaux violet (opacity 0.15-0.25, blur 40-50px) + grille subtile (lignes blanches 2% opacity, 60px spacing)
- **Surtitre** : uppercase, tracking large, couleur `#9d9aea`
- **Titre** : blanc, "clair et organise" en degrade `#9d9aea -> #443fde` via `background-clip: text`
- **Sous-titre** : blanc 60% opacity, chiffres cles en blanc 90% + font-weight 600
- **CTA** : fond `#443fde`, `box-shadow: 0 0 30px rgba(68,63,222,0.4)`, leger pulse anime
- **Padding** : `py-20 md:py-28` pour donner de l'ampleur

### 3. Problematiques (3 cartes)

- **Fond section** : `bg-alt` (#f9f9fb)
- **Cartes** : fond blanc, `border-radius: 12px`, border 1px `#e4e6f1`
- **Icones** : fond degrade `linear-gradient(135deg, #f3f3fc, #e8e7fa)`, border-radius 10px
- **Animation** : fade-in stagger au scroll (carte 1, puis 2, puis 3 avec 100ms de delai)
- **Hover** : translateY(-2px) + shadow plus prononcee

### 4. Sprint Fondations

- **Layout** : 2 colonnes (texte | image), inchange structurellement
- **Surtitre** : couleur `#443fde` (au lieu de text-muted)
- **Image** : overlay violet subtil via un radial-gradient en position absolute
- **Checkmarks** : fond `#f3f3fc`, cercle, stroke violet
- **Animation** : fade-in au scroll

### 5. Social Proof (logos + compteurs)

- **Fond** : `bg-alt`
- **Nouveau bloc compteurs** : "120+" et "15 ans" en gros (32px, bold, couleur `#443fde`), separes par un divider vertical
- **Compteurs animes** : count-up au scroll (0 -> 120, 0 -> 15) avec Intersection Observer
- **Grille logos** : 4 colonnes, cartes blanches bordees, hover shadow
- **Animation** : fade-in

### 6. Direction Marketing (3 cartes pricing)

- **Fond section** : blanc
- **Cartes** : `border-top: 3px solid` — violet lighter pour Starter/Scale, violet plein pour Growth
- **Carte Growth** : mise en avant avec border violet plein, shadow plus forte, `translateY(-4px)`, badge "Populaire" en pill
- **Animation** : fade-in stagger

### 7. FAQ

- **Fond** : `bg-alt`
- **Conteneur** : max-width 640px centre, fond blanc, border 1px, border-radius 12px
- **Items** : separes par `border-bottom`, padding 18px 24px
- **Icone** : "+" en violet, rotation 45deg vers "x" a l'ouverture
- **Animation** : fade-in

### 8. Temoignages

- **Fond** : blanc
- **Titre section** : "Ce qu'ils disent"
- **Cartes** : border 1px, border-radius 12px, shadow subtile
- **Etoiles** : couleur `#f59e0b` (amber)
- **Citation** : font-style italic
- **Avatar** : 36px, cercle
- **Hover** : lift 2px + shadow
- **Animation** : fade-in stagger

### 9. CTA Final

- **Fond** : `linear-gradient(160deg, #160042, #1e1060, #160042)` — meme palette que le hero
- **Glow** : radial-gradient violet centre en haut, blur 40px
- **Titre** : blanc, "Pret a structurer votre marketing ?"
- **Sous-titre** : blanc 60% opacity
- **CTA** : identique au hero (violet + glow shadow)

### 10. Footer

- **Fond** : `#160042`
- **Layout** : flex, logo/description a gauche, liens a droite
- **Texte** : blanc pour le nom, blanc 50% opacity pour le reste
- **Liens** : LinkedIn, Mentions legales

## Animations

| Animation | Declencheur | Duree | Sections |
|-----------|-------------|-------|----------|
| Fade-in (opacity 0->1, translateY 20px->0) | Intersection Observer, threshold 0.1 | 600ms ease-out | Toutes |
| Stagger (delai 100ms entre enfants) | Idem | 600ms + delai | Problematiques, Offres, Temoignages |
| Count-up (0 -> N) | Intersection Observer | 1500ms ease-out | Social Proof compteurs |
| Hover lift (translateY -2px) | :hover | 200ms ease | Cartes |
| Navbar transition | scroll > 50px | 300ms ease | Navbar |
| CTA glow pulse | Continu | 2s ease-in-out infinite | Bouton hero |

## Tokens CSS a ajouter

Aucun nouveau token. On utilise les tokens existants (`violet`, `violet-hover`, `violet-light`, `violet-lighter`, `violet-bg`, `heading`, `text`, `text-muted`, `border`, `bg-alt`). Les couleurs dark sont derivees de `heading` (#160042).

## Implementation technique

- **Animations scroll** : hook React `useInView` avec Intersection Observer (pas de librairie externe)
- **Count-up** : hook custom `useCountUp` avec requestAnimationFrame
- **Navbar scroll** : hook `useScrolled` avec event listener scroll + state boolean
- **Navbar transparence** : la navbar recoit une prop `transparent` quand elle est sur le hero, geree par le layout ou la page d'accueil
- **CTA pulse** : keyframes CSS dans globals.css
- **Pas de dependance ajoutee** — tout en CSS + hooks React natifs

## Pages impactees

- `src/app/page.tsx` — toutes les sections
- `src/app/globals.css` — keyframes pulse, classes d'animation
- `src/components/nav-bar.tsx` — logique transparent/scroll
- `src/components/section.tsx` — variante dark
- `src/components/bouton.tsx` — variante glow
- `src/components/carte-temoignage.tsx` — style mis a jour
- `src/components/accordion.tsx` — style conteneur mis a jour
- `src/components/grille-logos.tsx` — style mis a jour
- Nouveaux hooks : `src/hooks/use-in-view.ts`, `src/hooks/use-count-up.ts`, `src/hooks/use-scrolled.ts`

## Hors scope

- Sous-pages (sprint-fondations, direction-marketing-externalise, qui-suis-je) — refonte separee si besoin
- Dark mode toggle — pas prevu
- Contenu textuel — on garde le copy existant
- SEO/JSON-LD — aucun changement
