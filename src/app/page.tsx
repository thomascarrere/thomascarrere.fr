import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import { Bouton } from "@/components/bouton";
import { CarteTemoignage } from "@/components/carte-temoignage";
import { Accordion } from "@/components/accordion";
import { GrilleLogos } from "@/components/grille-logos";

export const metadata: Metadata = {
  alternates: { canonical: "https://thomascarrere.fr" },
};

const CALENDRIER = "https://calendar.app.google/xaB44wDhgrkCX8Rj8";

const LOGOS_CLIENTS = [
  { nom: "GEM Formation", image: "/images/logo-gem.webp" },
  { nom: "Gaia", image: "/images/logo-gaia.webp" },
  { nom: "AJ Promotion", image: "/images/logo-ajp.jpg" },
  { nom: "ETAP-Santé", image: "/images/logo-etap-sante.png" },
  { nom: "SAPMER", image: "/images/logo-sapmer.png" },
  { nom: "Isautier", image: "/images/logo-isautier.webp" },
  { nom: "ASDR", image: "/images/logo-asdr.jpeg" },
  { nom: "SEDRE", image: "/images/logo-sedre.jpg" },
];

const FAQ = [
  {
    question: "Je suis en Hexagone, on peut travailler ensemble ?",
    reponse:
      "Absolument. Bien que basé physiquement à La Réunion, je travaille en mode \"Remote-First\" avec des outils collaboratifs (Notion, Visio). L'avantage ? Vous profitez d'une expertise senior avec une TVA locale de 8,5 %.",
  },
  {
    question: "Je fais du B2C, c'est pour moi ?",
    reponse:
      "Oui, si vous vendez des produits ou services à forte valeur ajoutée (immobilier, santé, services premium). Si votre vente demande de la réflexion et de la réassurance, mon système fonctionne.",
  },
  {
    question: "Comment se passent les échanges ?",
    reponse:
      "Je privilégie toujours la clarté : un point hebdomadaire, un espace partagé disponible H24 et une réactivité totale par message.",
  },
];

const TEMOIGNAGES = [
  {
    nom: "Sonia Martinez",
    entreprise: "AJ Promotion",
    avatar: "/images/avatar-sonia.webp",
    texte:
      "Je ne connaissais pas vraiment les techniques de marketing digital mais je me suis laissé guidée par ses connaissances et son professionnalisme. Et nous avons été très agréablement surpris par le résultat. Nous avons eu des retours très positifs, des nouveaux prospects, une image plus \"humaine\". Thomas est professionnel, sait s'adapter à ses clients et donne des conseils pertinents. Je recommande vivement !",
  },
  {
    nom: "Annabelle Smith",
    entreprise: "Groupe La Perrière",
    avatar: "/images/avatar-annabelle.webp",
    texte:
      "Thomas m'a été d'un soutien précieux. Il m'a aidé à prendre du recul sur mon poste et mes stratégies, à structurer mes priorités et à explorer des pistes innovantes pour atteindre mes objectifs. Une des forces de Thomas selon moi, c'est sa capacité à comprendre rapidement les enjeux d'une entreprise et à proposer des solutions concrètes et adaptées, tout en transmettant ses connaissances avec clarté.",
  },
  {
    nom: "Claire Pasquier",
    entreprise: "ETAP-Santé",
    avatar: "/images/avatar-claire.webp",
    texte:
      "J'ai choisi d'être accompagnée par Thomas pour bénéficier de son regard d'expert sur notre communication. Conseils stratégiques, cadrage, outils et astuces du quotidien, Thomas propose toujours une réponse adaptée à nos besoins ! Son recul est un véritable atout pour notre association.",
  },
  {
    nom: "Antoine Devasle",
    entreprise: "Créalise",
    avatar: "/images/avatar-antoine.webp",
    texte:
      "Thomas a toujours relevé nos défis en intervenant devant des publics divers et variés avec beaucoup de pédagogie. Il a su transmettre sa passion et son expertise du marketing digital avec beaucoup de professionnalisme. Ces différentes expériences en font un vrai couteau suisse pour accompagner au mieux les entreprises dans leur croissance.",
  },
  {
    nom: "Nathan Hoarau",
    entreprise: "Universweb",
    avatar: "/images/avatar-nathan.webp",
    texte:
      "Thomas est à l'écoute et propose un accompagnement concret avec des pistes de réflexions et des outils très efficaces pour améliorer la gestion de son agence.",
  },
  {
    nom: "Kevin Ouazzani",
    entreprise: "Augure Data",
    avatar: "/images/avatar-kevin.webp",
    texte:
      "J'ai pu bénéficier de l'expérience et du travail de Thomas, qui m'a accompagné sur les aspects marketing de mon entreprise. Je le recommande pour son niveau de maîtrise du sujet, la personnalisation de l'accompagnement et globalement son professionnalisme.",
  },
  {
    nom: "Émilie Séva",
    entreprise: "DAC La Réunion",
    avatar: "/images/avatar-emilie.webp",
    texte:
      "Thomas a apporté une expertise inestimable à notre équipe de communication. Son approche proactive et sa collaboration transparente ont grandement contribué à renforcer notre visibilité en ligne et à atteindre nos objectifs de communication externe. Si vous cherchez un expert en marketing digital passionné et dédié à l'excellence, je vous recommande vivement de travailler avec Thomas Carrère.",
  },
  {
    nom: "Nathalie Bucci",
    entreprise: "Natucci Estetica",
    avatar: "/images/avatar-nathalie.webp",
    texte:
      "Je tiens à vous recommander Thomas avec qui j'ai eu le privilège de collaborer pendant deux mois de coaching intensif axé sur l'amélioration de ma stratégie sur les réseaux sociaux. Thomas s'est avéré être un formateur exceptionnel, alliant une profonde expertise à une personnalité extrêmement sympathique.",
  },
  {
    nom: "Éloïse Checkouri",
    entreprise: "Woundi",
    avatar: "/images/avatar-eloise.webp",
    texte:
      "J'ai pu bénéficier de plusieurs formations animées par Thomas dans le cadre de mon incubation à La Technopole de La Réunion. Ses formations (Personal Branding, Plateforme de marque) ont été très enrichissantes et m'ont permis de mettre en place des actions correctives rapidement. Très pédagogue, Thomas sait trouver de bons exemples pour illustrer ses propos.",
  },
];

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.reponse,
    },
  })),
};

const jsonLdReviews = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://thomascarrere.fr/#business",
  name: "Thomas Carrère — Consultant Marketing",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: String(TEMOIGNAGES.length),
    bestRating: "5",
    worstRating: "1",
  },
  review: TEMOIGNAGES.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.nom },
    reviewBody: t.texte,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
  })),
};

export default function Accueil() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdReviews) }}
      />

      {/* Hero */}
      <Section>
        <div className="max-w-[840px] mx-auto text-center py-12 md:py-20">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            Consultant marketing pour PME et TPE
          </p>
          <h1 className="mb-6">
            Le marketing de votre entreprise devient enfin clair et organisé
          </h1>
          <p className="text-lg leading-8 text-text mb-8 tracking-[-0.02em]">
            <strong className="text-heading">Consultant marketing</strong>{" "}
            basé à La Réunion, j&apos;aide les dirigeants de PME à simplifier
            leurs messages et à structurer leurs actions de vente.{" "}
            <strong className="text-heading">15 ans d&apos;expérience</strong>{" "}
            et{" "}
            <strong className="text-heading">
              120 entreprises accompagnées
            </strong>{" "}
            pour construire des bases solides, sans complexité inutile.
          </p>
          <Bouton href={CALENDRIER} externe>
            Réserver mon diagnostic offert (30min) →
          </Bouton>
        </div>
      </Section>

      {/* Problématiques */}
      <Section bg="alt">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              titre: "Besoin de clarté",
              texte:
                "Votre offre est excellente, mais elle mérite d'être expliquée plus simplement pour convaincre plus vite.",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              ),
            },
            {
              titre: "Besoin de structure",
              texte:
                "Vos équipes ont besoin de méthodes et d'outils concrets pour ne plus perdre de temps au quotidien.",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                </svg>
              ),
            },
            {
              titre: "Besoin d'accompagnement",
              texte:
                "Vous n'avez pas besoin d'une agence de plus, mais d'un partenaire qui s'implique vraiment à vos côtés.",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.titre}
              className="bg-white rounded-xl p-10 text-center flex flex-col items-center"
            >
              <div className="w-10 h-10 rounded bg-bg-icon flex items-center justify-center mb-4 shadow-[23px_23px_48px_-8px_#1600420a]">
                {item.icone}
              </div>
              <h5 className="mb-3">{item.titre}</h5>
              <p className="text-text">{item.texte}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Offre Sprint Fondations */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
              Le diagnostic Fondations
            </p>
            <h2 className="mb-6">
              15 jours pour tout remettre à plat
            </h2>
            <p className="text-lg leading-8 text-text mb-8 tracking-[-0.02em]">
              Je m&apos;immerge dans votre activité pendant deux semaines pour
              lever les doutes et installer votre nouveau système de travail.
              Pas de théorie, juste du concret.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  titre: "Votre message clarifié",
                  desc: "Pour être compris par vos clients dès les premières secondes",
                },
                {
                  titre: "Vos outils de vente",
                  desc: "Des modèles d'emails et des messages prêts à l'emploi pour vos équipes",
                },
                {
                  titre: "Votre espace de pilotage",
                  desc: "Un outil simple (Notion) pour centraliser vos idées, vos projets et vos résultats",
                },
                {
                  titre: "Votre feuille de route",
                  desc: "Un plan précis sur 90 jours pour savoir exactement où vous allez",
                },
              ].map((item) => (
                <div key={item.titre} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-violet flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-heading">{item.titre}</p>
                    <p className="text-text text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Bouton href="/sprint-fondations" variante="secondaire">
              Découvrir l&apos;offre &quot;Fondations&quot;
            </Bouton>
          </div>
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <Image
              src="/images/thomas-conference.jpg"
              alt="Thomas Carrère en conférence"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* À propos + logos */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto text-center mb-12">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            Qui suis-je
          </p>
          <h2 className="mb-6">
            Un regard extérieur, 15 ans d&apos;expérience
          </h2>
          <p className="text-lg leading-8 text-text tracking-[-0.02em]">
            Ancien dirigeant d&apos;agence, j&apos;ai accompagné plus d&apos;une
            centaine d&apos;entreprises avant de choisir de travailler en direct
            avec les dirigeants. Mon approche est celle du bon sens : on garde ce
            qui marche, on simplifie ce qui est complexe, et on construit sur la
            durée.
          </p>
          <div className="mt-6">
            <Link
              href="/qui-suis-je"
              className="text-violet font-medium text-sm hover:text-violet-hover transition-colors"
            >
              En savoir plus sur mon parcours →
            </Link>
          </div>
        </div>
        <GrilleLogos logos={LOGOS_CLIENTS} />
      </Section>

      {/* Direction Marketing */}
      <Section>
        <div className="max-w-[840px] mx-auto text-center mb-12">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            Direction Marketing externalisée
          </p>
          <h2 className="mb-6">
            Un Directeur Marketing à vos côtés, chaque mois
          </h2>
          <p className="text-lg leading-8 text-text tracking-[-0.02em]">
            Une fois les bases posées, je ne vous laisse pas seul. Je peux
            devenir votre bras droit régulier pour piloter votre stratégie,
            coordonner vos prestataires et veiller à ce que vos objectifs soient
            atteints.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              titre: "Gouvernance",
              desc: "Je cadre, je coache vos équipes et je pilote vos prestataires",
            },
            {
              titre: "Production",
              desc: "Je crée vos contenus stratégiques (cas clients, séquences mails, pubs, etc.)",
            },
            {
              titre: "CMO complet",
              desc: "Je gère l'intégralité de votre marketing comme si c'était ma propre boîte",
            },
          ].map((item) => (
            <div
              key={item.titre}
              className="bg-bg-alt rounded-xl p-8 text-center"
            >
              <h5 className="mb-3">{item.titre}</h5>
              <p className="text-text text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Bouton href="/direction-marketing-externalise" variante="secondaire">
            Découvrir la Direction Marketing Externalisée
          </Bouton>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto">
          <div className="text-center mb-12">
            <h2>Questions fréquentes</h2>
          </div>
          <Accordion items={FAQ} />
        </div>
      </Section>

      {/* Témoignages */}
      <Section>
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            Témoignages
          </p>
          <h2>Ce que disent mes clients</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMOIGNAGES.map((t) => (
            <CarteTemoignage
              key={t.nom}
              nom={t.nom}
              entreprise={t.entreprise}
              texte={t.texte}
              avatar={t.avatar}
            />
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto text-center py-8">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            On y va ?
          </p>
          <h2 className="mb-6">
            Prêt à structurer votre croissance ?
          </h2>
          <p className="text-lg leading-8 text-text mb-8 tracking-[-0.02em]">
            On ne commence jamais une mission sans se parler, évidemment !
            Réservez un créneau de 30 minutes pour diagnostiquer vos blocages
            éventuels. C&apos;est gratuit et sans engagement.
          </p>
          <Bouton href={CALENDRIER} externe>
            Réserver mon diagnostic offert (30min) →
          </Bouton>
        </div>
      </Section>
    </>
  );
}
