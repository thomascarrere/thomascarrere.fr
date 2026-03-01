# thomascarrere.fr

Site vitrine de Thomas Carrere, consultant marketing pour PME/TPE a La Reunion.

## Stack

- Next.js 16 (App Router, `src/` directory)
- Tailwind CSS v4 (design tokens via `@theme inline` dans `globals.css`)
- TypeScript
- Google Fonts : Archivo (titres) + Inter (corps)

## Structure

```
src/
  app/
    layout.tsx              — Layout global, fonts, metadata, JSON-LD Person + LocalBusiness
    page.tsx                — Accueil (hero, problematiques, offres, FAQ, temoignages, CTA)
    globals.css             — Tailwind + design tokens + typographie responsive
    sitemap.ts              — Sitemap XML auto-genere (4 URLs)
    sprint-fondations/      — Page offre Sprint (JSON-LD Service)
    direction-marketing-externalise/  — Page offre Direction Marketing (JSON-LD Service + OfferCatalog)
    qui-suis-je/            — Page a propos (JSON-LD Person detaille)
  components/
    nav-bar.tsx             — Navigation sticky, menu mobile ("use client")
    footer.tsx              — Pied de page
    bouton.tsx              — CTA primaire (violet) / secondaire (blanc)
    section.tsx             — Wrapper section (padding, container, bg)
    carte-temoignage.tsx    — Carte avis client (avatar, etoiles, texte)
    accordion.tsx           — FAQ toggle ("use client")
    grille-logos.tsx         — Grille logos clients (Image ou fallback texte)
public/
  images/                   — Photos Thomas, logos clients, avatars temoignages, favicon
  robots.txt                — Autorise GPTBot, PerplexityBot, Claude-Web, Googlebot
```

## Commandes

- `npm run dev` — Serveur de dev (port 3000)
- `npm run build` — Build production (toutes les pages sont statiques)
- `npx vercel --yes --prod` — Deploiement production sur Vercel

## Deploiement

- Heberge sur **Vercel** (projet `thomascarrere.fr`)
- Domaine : `thomascarrere.fr` (DNS via Hodi, A record → 76.76.21.21)
- Repo GitHub : `thomascarrere/thomascarrere.fr`

## Design tokens

Couleurs principales definies dans `globals.css` :
- `violet` (#443fde) — boutons CTA, liens
- `heading` (#160042) — titres
- `text` (#3e404c) — paragraphes
- `bg-alt` (#f9f9fb) — sections alternees

## SEO / GEO

- Metadata (title 50-60 chars, description 150-160 chars) sur chaque page
- JSON-LD : Person, LocalBusiness, FAQPage, Service, Review/AggregateRating
- Sitemap XML + robots.txt (crawlers IA autorises)
- Canonical URLs sur chaque page
- Open Graph + Twitter cards configures

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
- Composants client ("use client") : NavBar, Accordion uniquement
- Nav links : "Sprint Fondations", "Direction Marketing externalisee", "Qui suis-je ?"
- Bouton navbar : "Discutons →" (seul CTA avec un texte different)

## Audits realises

- **SEO** (skill `seo-review`) : titles, meta descriptions, keyword placement, maillage interne
- **GEO** (skill `geo-fundamentals`) : JSON-LD, robots.txt AI crawlers, definitions citables — score 34% → 67%
- **UX Content Design** (skill `content-design`) : CTAs, heading hierarchy, jargon, parcours utilisateur
