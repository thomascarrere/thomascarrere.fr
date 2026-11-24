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
    sitemap.ts              — Sitemap XML auto-genere (6 URLs ; /mentions-legales exclue car noindex)
    icon.svg                — Favicon vectoriel (crochets [ ] blancs sur bleu)
    favicon.ico             — Favicon legacy 32x32 (genere depuis icon.svg)
    apple-icon.png          — Apple touch icon 180x180 (genere depuis icon.svg)
    diagnostic-plan-action/ — offre d'entree « Diagnostic et plan d'action » (ex Pack Fondations ; /sprint-fondations redirige ici)
      page.tsx              — Server component (metadata, JSON-LD Service)
      diagnostic-client.tsx — Client component (sections visuelles)
    direction-marketing-externalise/
      page.tsx              — Server component (metadata, JSON-LD Service + OfferCatalog)
      direction-client.tsx  — Client component (sections visuelles)
    qui-suis-je/
      page.tsx              — Server component (metadata, JSON-LD Person)
      qui-suis-je-client.tsx — Client component (sections visuelles)
    mentions-legales/
      page.tsx              — Server component (metadata, noindex)
      mentions-legales-client.tsx — Client component (mentions legales + politique de confidentialite RGPD)
  components/
    nav-bar.tsx             — Navigation sticky, transparent sur hero / blanche au scroll ("use client")
    footer.tsx              — Pied de page, fond bleu nuit #0b1f3a, liens Mentions legales + Gerer les cookies ("use client")
    bandeau-cookies.tsx     — Bandeau de consentement cookies + Google Consent Mode v2 ("use client")
    bouton.tsx              — CTA : primaire (bleu) / secondaire (blanc) / glow (meme rendu que primaire, sans lueur ; nom historique)
    section.tsx             — Wrapper section : blanc / alt / dark
    animated-section.tsx    — Wrapper fade-in au scroll via IntersectionObserver ("use client")
    carte-temoignage.tsx    — Carte avis client (avatar, etoiles amber, texte italic)
    accordion.tsx           — FAQ toggle, conteneur unique, icone +/x ("use client")
    grille-logos.tsx        — Grille logos clients (Image ou fallback texte)
    lien-tracker.tsx        — Liens avec tracking GA4 ("use client")
  hooks/
    use-scrolled.ts         — Detection scroll pour navbar (threshold configurable)
    use-in-view.ts          — IntersectionObserver pour animations scroll
  lib/
    gtag.ts                 — Fonctions tracking Google Analytics / Ads
    seo.ts                  — IMAGE_OG partagee (public/images/og-thomas-carrere.jpg, 1200x630 ; a repeter dans chaque bloc openGraph de page) et images de partage par page (public/images/partage/, 1200x627), en bleu nuit depuis le 24/11/2026
  types/
    gtag.d.ts               — Types Window.gtag
public/
  images/                   — Photos Thomas, logos clients, avatars temoignages, favicon
  robots.txt                — Autorise Googlebot, Google-Extended, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User
  llms.txt                  — Guide de comprehension IA (format llmstxt.org) : resume + liens vers pages/offres
DESIGN.md                   — Reference visuelle (couleurs, typo, composants, animations, regles pour un agent) : a lire avant toute modification d'interface
```

## Design

Avant toute modification visuelle (page, composant, image, animation), lire `DESIGN.md` a la racine et s'y conformer. Les valeurs font foi dans `src/app/globals.css` ; si le code et `DESIGN.md` divergent, corriger `DESIGN.md` dans la meme PR.

## Architecture des pages

Chaque page est splitee en 2 fichiers :
- **page.tsx** (server component) : metadata, JSON-LD, constantes de donnees
- **xxx-client.tsx** (client component) : tout le JSX visuel, animations, interactions

Les composants "use client" : NavBar, Footer, Bouton, AnimatedSection, Accordion, LienTracker, BandeauCookies.

Exception : `/mentions-legales` n'a pas de JSON-LD (page legale, `robots: noindex`, hors sitemap).

## Commandes

- `npm run dev` — Serveur de dev (port 3000)
- `npm run build` — Build production (toutes les pages sont statiques)
- Deploiement production : automatique par Vercel a chaque fusion dans `main` (constate le 17/11/2026, en ligne environ une minute apres) ; `npx vercel --yes --prod` reste possible a la main

## Deploiement

- Heberge sur **Vercel** (projet `thomascarrere.fr`)
- Domaine : `thomascarrere.fr` (DNS via Hodi, A record → 76.76.21.21)
- Repo GitHub : `thomascarrere/thomascarrere.fr`

## Conformite RGPD / cookies

- Page `/mentions-legales` : mentions legales (editeur, hebergeur Vercel, PI, responsabilite) + politique de confidentialite RGPD. Source du contenu : `~/Documents/Claude/Structure/Juridique-Social/Mentions_legales_et_confidentialite.md`. Editeur : Thomas Carrere, EI, Directeur Marketing Externalise (plus de nom commercial "Bras Droit Marketing").
- **Google Consent Mode v2** dans `layout.tsx` : script `google-consent-default` en `beforeInteractive` qui passe `ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage` a `denied` AVANT le chargement de gtag. GA4 et Ads ne deposent aucun cookie sans consentement.
- `bandeau-cookies.tsx` : bandeau "Tout refuser" / "Tout accepter" (poids egal = exigence CNIL), choix stocke en localStorage (`cookie-consent`, validite 13 mois) et reapplique via `gtag('consent','update', ...)`. Lien "Gerer les cookies" dans le footer qui re-ouvre le bandeau via l'event `ouvrir-parametres-cookies`.

## Design : Hybride Dark/Light

Direction visuelle : hero dark + CTA final dark "bookendent" la page. Sections intermediaires en blanc/alt.

### Couleurs principales

Bleu nuit depuis le 24/11/2026 (remplace le violet, couleur pour couleur). Les tokens gardent le nom `violet`.

- `violet` (#2b5ca8, bleu) : CTAs, liens, accents
- `violet-light` (#8fb3e0, bleu clair) : surtitres sur fond dark, fin du titre du hero
- `heading` (#0b1f3a, nuit) : titres sur fond clair, fond des sections dark
- `text` (#3e404c) : paragraphes
- `bg-alt` (#f9f9fb) : sections alternees

### Sections dark

- Fond : aplat `#0b1f3a` via `Section bg="dark"` (`bg-heading`)
- Aucun decor : ni halo, ni grille, ni degrade de texte (retires le 24/11/2026, ne pas les remettre)
- Texte : blanc, `white/60`, `white/90` pour strong
- CTA : `Bouton variante="glow"` (bouton plein, sans lueur)

### Animations

- Fade-in au scroll : `AnimatedSection` (IntersectionObserver, 600ms ease-out)
- Stagger : delai 100ms entre elements (prop `delay`)
- Pas de compteurs animes : les chiffres sont ecrits en dur dans le HTML (lisibles par Google et les IA)
- Hover lift : cartes `translateY(-2px)` + ombre renforcee (200ms)

### Navbar

- Homepage en haut : transparente, texte blanc, logo inverse
- Au scroll (>50px) ou sous-pages : blanche, backdrop-blur, ombre subtile
- Hero remonte sous la navbar : `-mt-[88px] pt-[88px]`

Charte graphique complete : `DESIGN.md`

## SEO / GEO

- Metadata (title 50-60 chars, description 150-160 chars) sur chaque page
- JSON-LD : Person, LocalBusiness, FAQPage, Service (+ serviceType / Offer / AggregateOffer / OfferCatalog selon la page)
- Pas de Review/AggregateRating sur les temoignages du site (juge "self-serving" par Google, ineligible aux rich results, risque d'action manuelle). A baliser plus tard depuis une source tierce (Google Business Profile)
- Sitemap XML + robots.txt (crawlers IA autorises)
- Canonical URLs sur chaque page, sans slash final (coherent avec sitemap)
- Open Graph + Twitter cards : valeurs par defaut + template de title dans layout.tsx, bloc openGraph propre par page (corrige og:url qui pointait sur l'accueil partout). Next remplace l'objet openGraph du layout sans fusion : chaque page doit reprendre `images: [IMAGE_OG]`
- Redirections 301 des anciennes URL encore indexees (`/coaching-marketing-regulier`, `/conseil-et-coaching-digital` -> `/coaching-hebdo`) dans `next.config.ts`

## Workflow de deploiement

```
npm run build && git add -A && git commit -m "message" && git push && npx vercel --yes --prod
```

## Conventions

- Langue du site : francais
- Tous les CTAs principaux : "Reserver un echange de 30 minutes →" (le mot « diagnostic » est reserve a l'offre payante)
- Lien calendrier : `https://calendar.app.google/xaB44wDhgrkCX8Rj8`
- LinkedIn : `https://www.linkedin.com/in/thomascarrere/`
- Hierarchie headings : h1 > h2 > h3 (pas de h4/h5/h6)
- Pas de tiret cadratin ( — ) dans le contenu, utiliser le deux-points a la place
- Deux-points avec une espace avant ET apres dans le texte affiche : "Titre : sous-titre" (jamais collo au mot suivant)
- Nav links : "Diagnostic", "Coaching Hebdo", "Direction Marketing externalisee", "Qui suis-je ?"
- Bouton navbar : "Discutons →" (seul CTA avec un texte different)
- Favicon : carre bleu #2b5ca8 avec crochets blancs [ ], gere par les conventions de fichiers Next (`src/app/icon.svg` + `favicon.ico` + `apple-icon.png`), pas via metadata.icons. Source vectorielle = `icon.svg` ; les .ico/.png se regenerent depuis le SVG avec sharp.

## Audits realises

- **SEO** (skill `seo-review`) : titles, meta descriptions, keyword placement, maillage interne
- **GEO** (skill `geo-fundamentals`) : JSON-LD, robots.txt AI crawlers, definitions citables — score 34% → 67%
- **UX Content Design** (skill `content-design`) : CTAs, heading hierarchy, jargon, parcours utilisateur
- **Visual Redesign** (avril 2026) : hybride dark/light, animations scroll, navbar transparente, favicon custom
- **Correctifs SEO** (juin 2026) : Open Graph propre par page, title.absolute sur Qui-suis-je (anti-doublon de marque), serviceType + Offer/AggregateOffer sur Sprint/DME, suppression du balisage Review/AggregateRating, normalisation des deux-points, sizes sur l'image conference, compteurs initialises a la valeur cible
- **Conformite RGPD** (juin 2026) : page `/mentions-legales` (mentions legales + politique de confidentialite), bandeau de consentement cookies + Google Consent Mode v2 (consentement refuse par defaut). Voir section "Conformite RGPD / cookies".
- **Passe GEO** (juin 2026, suite audit IA) : ajout `public/llms.txt` ; JSON-LD Organization + WebSite (site-wide dans layout.tsx) + BreadcrumbList sur les 5 sous-pages ; suppression du champ `telephone` vide du LocalBusiness (erreur de validation) + `@id` sur Person pour resoudre les references `founder` ; meta description home raccourcie (185 -> 143 car.) ; security headers dans `next.config.ts` (CSP whitelistant GA4/Ads/Calendar, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy). A faire plus tard : completer Google Business Profile (signal de marque + avis tiers), E-E-A-T (signature auteur, dates), tableau comparatif des offres.
- **Audit SEO/GEO** (oct. 2026) : redirections des anciennes URL en 404, og:image sur toutes les sous-pages, meta descriptions ramenees a 150-160 car., title Sprint en absolute (77 -> 58 car.), mot-cle dans le H1 de l'accueil (surtitre integre au h1), h2 sr-only avant les cartes problematiques, lien vers le guide dans le footer, robots.txt mis a jour (crawlers IA actuels), sameAs LocalBusiness/Organization = LinkedIn + French Tech + fiche Google Business (maps?cid=). Reste cote Thomas : NAP : L'Etang-Sale est la ville de reference (corriger les annuaires qui disent Saint-Pierre), FAQ sur la page DME, Qui suis-je a etoffer, contenus blog.
- **Analyse Search Console** (5 oct. 2026, MCP `gsc`, periode 5 juil. -> 3 oct.) : ~47 clics / 7 800 impressions, 80 % des impressions sur `/direction-marketing-externalise`. Constats : (1) CTR anormalement bas malgre de bonnes positions ("directeur marketing externalise" pos 2,8 / 1 683 impr / 0,7 % ; "direction marketing externalisee" pos 2,1 / 1 024 impr / 0,2 % ; "responsable marketing externalise" pos 5,3 / 587 impr / 0 clic) -> AI Overview ou snippet peu attractif ; (2) cannibalisation : le guide sort sur les memes requetes en pos 24-29 ; (3) requetes pos 5-25 a gagner : marketing externalise (813 impr, pos 9,8), cmo externalise (363, pos 9,8), directeur marketing (et) digital externalise (~300, pos 13-16), cmo externalise freelance (164, pos 25) ; (4) local Reunion quasi nul, l'accueil ne capte que la marque ; (5) www renvoie encore 200 et le sitemap declare dans GSC est l'ancien en www. Corrections : title DME avec prix ("dès 1 600 € HT/mois") + meta avec PME / CMO freelance / marketing digital, vocabulaire "responsable marketing" et "digital" dans l'intro DME ; guide repositionne sur l'intention prix ("Combien coûte...") + lien contextuel vers l'offre des la definition + dateModified ; sitemap avec dates fixes (plus de `new Date()`). Redirection www -> apex faite le 7 oct. 2026 (308 Vercel). Sitemap apex soumis dans GSC et ancien www supprime le 7 oct. 2026. Reste cote Thomas : verifier la SERP des requetes a CTR bas, suivre l'effet du nouveau title a 4-6 semaines.
- **Enseignements strategiques Search Console** (7 oct. 2026) : audience de recherche = metropole (94 % des impressions), SEO = credibilite plutot qu'acquisition, demandes voisines (directeur commercial externalise, CMO externalise SaaS/ESN). Detail et pistes non tranchees dans `~/Documents/Claude/status_thomas-carrere-ei.md` (section SEO / GEO), point de suivi prevu le 15 nov. 2026.
- **Refonte accueil** (30 oct. 2026, brief inspire du site d'Emmanuelle Benoliel Kleinmann, Fractional CMO) : sections ancrees `#parcours` (bio en 3 phrases + photo + logos), `#role` (organigramme HTML Vous > Thomas > equipe/prestataires/outils + "Je fais / Je ne fais pas"), `#pourquoi` (6 preuves), `#offres` (parcours Pack Fondations -> DME ou Coaching Hebdo, prix affiches), `#contact`. Compteurs animes supprimes (chiffres en dur). Meta description accueil orientee "directeur marketing externalise". JSON-LD : LocalBusiness devient ProfessionalService avec hasOfferCatalog (3 offres, prix HT), Person.jobTitle = Directeur Marketing Externalise. llms.txt enrichi (parcours, offres en 2 etapes). Puis harmonisation : "90 jours" pour le plan du Pack Fondations et "150 entreprises" sur tout le site ; FAQ accueil refaite (6 questions : definition, cout, DME vs Coaching Hebdo, distance, par quoi commencer, B2C).

## Reglages d'interface (10 nov. 2026, suite de l'audit)

- **Contenu visible sans script** : `AnimatedSection` ne pose plus `opacity:0` au rendu serveur. `useInView` renvoie un etat `initial` (visible), `cache` (sous la zone visible, apres hydratation) ou `visible` (revele au scroll). Ne pas remettre de style masquant par defaut.
- **En-tete** : hauteur fixe de 88 px (le hero est cale dessus avec `-mt-[88px] pt-[88px]`) ; tout element de l'en-tete fait au plus 40 px de haut. Logo `public/images/logo-horizontal.png` (logo.png recadre sans marges). Bouton « Discutons → » visible aussi sur mobile, a cote du menu.
- **Zones cliquables** : liens d'action isoles et liens du pied de page en `inline-flex min-h-[44px] items-center`.
- **Texte courant** : 16 px (plus de `text-[15px]`). Gris secondaire `--color-text-muted` a #566580 (depuis le 24/11/2026) pour tenir 4,5:1 sur les fonds clairs, bleu pale compris.
- **Focus clavier** : regle globale `:focus-visible` dans `globals.css` (anneau bleu + lisere blanc).
- **Temoignages (accueil)** : sur mobile, 3 affiches puis « Voir les N autres » via une case a cocher + label (sans script). Sur ordinateur, tous affiches.
- **Vocabulaire** : l'offre d'entree s'appelle « Diagnostic et plan d'action » ; le rendez-vous gratuit « echange de 30 minutes » ; l'outil de pilotage est decrit par son principe (« espace de pilotage dedie, sur mesure »), sans nom de logiciel.
- **Passe SEO/GEO** (12 nov. 2026, suite bilan Search Console : DME 2 -> 15 clics/30 j apres le title avec prix) : FAQ de 7 questions + FAQPage sur `/direction-marketing-externalise` (definition, cout, CMO externalise / freelance / digital, agence, premiere etape, engagement, metropole) ; hero DME avec « CMO externalise » ; guide recentre sur l'intention prix (H1 + headline « Combien coute un directeur marketing externalise ? ») pour limiter la cannibalisation avec la page DME ; signature auteur cliquable, bloc auteur avec faits verifiables (Du Simple au Double, +150 entreprises, Master depuis 2013), dateModified 2026-11-12, image Article = image de partage.
