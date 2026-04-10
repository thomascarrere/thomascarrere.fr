import type { Metadata } from "next";
import { AccueilClient } from "./accueil-client";

export const metadata: Metadata = {
  alternates: { canonical: "https://thomascarrere.fr" },
};

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
  name: "Thomas Carrère :Consultant Marketing",
  url: "https://thomascarrere.fr",
  address: {
    "@type": "PostalAddress",
    addressLocality: "L'Étang-Salé",
    addressRegion: "La Réunion",
    postalCode: "97427",
    addressCountry: "FR",
  },
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
      <AccueilClient
        logoClients={LOGOS_CLIENTS}
        faq={FAQ}
        temoignages={TEMOIGNAGES}
      />
    </>
  );
}
