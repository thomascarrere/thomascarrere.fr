# thomascarrere.fr

Site vitrine de Thomas Carrere, consultant marketing pour PME/TPE a La Reunion.

## Stack

- Next.js 16 (App Router, `src/` directory)
- Tailwind CSS v4 (design tokens via `@theme inline` dans `globals.css`, styles base dans `@layer base`)
- TypeScript
- Google Fonts : Archivo (titres) + Inter (corps)
- Zero dependances d'animation (hooks React natifs + CSS keyframes)

## Structure

```
src/
  app/
    layout.tsx              — Layout global, fonts, metadata, JSON-LD Person + LocalBusiness
    page.tsx                — Accueil (server component : metadata, JSON-LD, donnees)
    accueil-client.tsx      — Accueil (client component : toutes les sections visuelles)
    globals.css             — Tailwind + design tokens + typographie responsive + keyframes
    sitemap.ts              — Sitemap XML auto-genere (4 URLs)
    icon.svg                — Favicon vectoriel (crochets [ ] blancs sur violet)
    favicon.ico             — Favicon legacy 32x32 (genere depuis icon.svg)
    apple-icon.png          — Apple touch icon 180x180 (genere depuis icon.svg)
    sprint-fondations/
      page.tsx              — Server component (metadata, JSON-LD Service)
      sprint-client.tsx     — Client component (sections visuelles)
    direction-marketing-externalise/
      page.tsx              — Server component (metadata, JSON-LD Service + OfferCatalog)
      direction-client.tsx  — Client component (sections visuelles)
    qui-suis-je/
      page.tsx              — Server component (metadata, JSON-LD Person)
      qui-suis-je-client.tsx — Client component (sections visuelles)
  components/
    nav-bar.tsx             — Navigation sticky, transparent sur hero / blanche au scroll ("use client")
    footer.tsx              — Pied de page, fond dark #160042 ("use client")
    bouton.tsx              — CTA : primaire (violet) / secondaire (blanc) / glow (violet + pulse)
    section.tsx             — Wrapper section : blanc / alt / dark
    animated-section.tsx    — Wrapper fade-in au scroll via IntersectionObserver ("use client")
    compteurs.tsx           — Compteurs animes (count-up au scroll) ("use client")
    carte-temoignage.tsx    — Carte avis client (avatar, etoiles amber, texte italic)
    accordion.tsx           — FAQ toggle, conteneur unique, icone +/x ("use client")
    grille-logos.tsx        — Grille logos clients (Image ou fallback texte)
    lien-tracker.tsx        — Liens avec tracking GA4 ("use client")
  hooks/
    use-scrolled.ts         — Detection scroll pour navbar (threshold configurable)
    use-in-view.ts          — IntersectionObserver pour animations scroll
    use-count-up.ts         — Animation count-up avec requestAnimationFrame
  lib/
    gtag.ts                 — Fonctions tracking Google Analytics / Ads
  types/
    gtag.d.ts               — Types Window.gtag
public/
  images/                   — Photos Thomas, logos clients, avatars temoignages, favicon
  robots.txt                — Autorise GPTBot, PerplexityBot, Claude-Web, Googlebot
docs/
  charte-graphique.md       — Charte graphique complete (couleurs, typo, composants, animations)
```

## Architecture des pages

Chaque page est splitee en 2 fichiers :
- **page.tsx** (server component) : metadata, JSON-LD, constantes de donnees
- **xxx-client.tsx** (client component) : tout le JSX visuel, animations, interactions

Les composants "use client" : NavBar, Footer, Bouton, AnimatedSection, Compteurs, Accordion, LienTracker.

## Commandes

- `npm run dev` — Serveur de dev (port 3000)
- `npm run build` — Build production (toutes les pages sont statiques)
- `npx vercel --yes --prod` — Deploiement production sur Vercel

## Deploiement

- Heberge sur **Vercel** (projet `thomascarrere.fr`)
- Domaine : `thomascarrere.fr` (DNS via Hodi, A record → 76.76.21.21)
- Repo GitHub : `thomascarrere/thomascarrere.fr`

## Design : Hybride Dark/Light

Direction visuelle : hero dark + CTA final dark "bookendent" la page. Sections intermediaires en blanc/alt.

### Couleurs principales

- `violet` (#443fde) : CTAs, liens, accents
- `violet-light` (#9d9aea) : surtitres sur fond dark, degrade texte
- `heading` (#160042) : titres sur fond clair, fond des sections dark
- `text` (#3e404c) : paragraphes
- `bg-alt` (#f9f9fb) : sections alternees

### Sections dark

- Fond : `#160042` via `Section bg="dark"`
- Glows decoratifs : radial-gradient violet, blur, `pointer-events-none`
- Grille de fond : lignes blanches 2% opacite, 60px
- Texte : blanc, `white/60`, `white/90` pour strong
- CTA : `Bouton variante="glow"` (pulse box-shadow)

### Animations

- Fade-in au scroll : `AnimatedSection` (IntersectionObserver, 600ms ease-out)
- Stagger : delai 100ms entre elements (prop `delay`)
- Count-up : compteurs de 0 a N (1500ms, requestAnimationFrame)
- Hover lift : cartes `translateY(-2px)` + ombre renforcee (200ms)
- Glow pulse : CTA dark, box-shadow 2s infinite

### Navbar

- Homepage en haut : transparente, texte blanc, logo inverse
- Au scroll (>50px) ou sous-pages : blanche, backdrop-blur, ombre subtile
- Hero remonte sous la navbar : `-mt-[88px] pt-[88px]`

Charte graphique complete : `docs/charte-graphique.md`

## SEO / GEO

- Metadata (title 50-60 chars, description 150-160 chars) sur chaque page
- JSON-LD : Person, LocalBusiness, FAQPage, Service (+ serviceType / Offer / AggregateOffer / OfferCatalog selon la page)
- Pas de Review/AggregateRating sur les temoignages du site (juge "self-serving" par Google, ineligible aux rich results, risque d'action manuelle). A baliser plus tard depuis une source tierce (Google Business Profile)
- Sitemap XML + robots.txt (crawlers IA autorises)
- Canonical URLs sur chaque page, sans slash final (coherent avec sitemap)
- Open Graph + Twitter cards : valeurs par defaut + template de title dans layout.tsx, bloc openGraph propre par page (corrige og:url qui pointait sur l'accueil partout)

## Workflow de deploiement

```
npm run build && git add -A && git commit -m "message" && git push && npx vercel --yes --prod
```

## Conventions

- Langue du site : francais
- Tous les CTAs principaux : "Reserver mon diagnostic offert (30min) →"
- Lien calendrier : `https://calendar.app.google/xaB44wDhgrkCX8Rj8`
- LinkedIn : `https://www.linkedin.com/in/thomascarrere/`
- Hierarchie headings : h1 > h2 > h3 (pas de h4/h5/h6)
- Pas de tiret cadratin ( — ) dans le contenu, utiliser le deux-points a la place
- Deux-points avec une espace avant ET apres dans le texte affiche : "Titre : sous-titre" (jamais collo au mot suivant)
- Nav links : "Sprint Fondations", "Coaching Hebdo", "Direction Marketing externalisee", "Qui suis-je ?"
- Bouton navbar : "Discutons →" (seul CTA avec un texte different)
- Favicon : carre violet #443fde avec crochets blancs [ ], gere par les conventions de fichiers Next (`src/app/icon.svg` + `favicon.ico` + `apple-icon.png`), pas via metadata.icons. Source vectorielle = `icon.svg` ; les .ico/.png se regenerent depuis le SVG avec sharp.

## Audits realises

- **SEO** (skill `seo-review`) : titles, meta descriptions, keyword placement, maillage interne
- **GEO** (skill `geo-fundamentals`) : JSON-LD, robots.txt AI crawlers, definitions citables — score 34% → 67%
- **UX Content Design** (skill `content-design`) : CTAs, heading hierarchy, jargon, parcours utilisateur
- **Visual Redesign** (avril 2026) : hybride dark/light, animations scroll, navbar transparente, favicon custom
- **Correctifs SEO** (juin 2026) : Open Graph propre par page, title.absolute sur Qui-suis-je (anti-doublon de marque), serviceType + Offer/AggregateOffer sur Sprint/DME, suppression du balisage Review/AggregateRating, normalisation des deux-points, sizes sur l'image conference, compteurs initialises a la valeur cible
