import type { Metadata } from "next";
import { CoachingClient } from "./coaching-client";

export const metadata: Metadata = {
  title: {
    absolute: "Coaching marketing hebdomadaire pour votre équipe marketing",
  },
  description:
    "La séniorité d'un directeur marketing pour la personne qui pilote votre marketing, 1h par semaine. On regarde les chiffres, on décide, on cale les actions. À distance, 800 EUR HT/mois. Diagnostic offert.",
  alternates: { canonical: "https://thomascarrere.fr/coaching-hebdo" },
  openGraph: {
    title: "Coaching marketing hebdomadaire pour votre équipe marketing",
    description:
      "Un coach senior qui drive la personne aux commandes de votre marketing, 1h par semaine. À distance, 800 EUR HT/mois.",
    url: "https://thomascarrere.fr/coaching-hebdo",
  },
};

const COACHING_FAQ = [
  {
    question:
      "En quoi c'est différent d'une mission de Direction Marketing Externalisée ?",
    reponse:
      "En DME, je pilote votre marketing et je fais avancer les chantiers (moi ou vos prestataires). En Coaching Hebdo, c'est votre équipe qui exécute : je lui donne le cap, la méthode et la cadence. C'est plus léger, et c'est parfait quand vous voulez faire monter en compétence la personne en place.",
  },
  {
    question: "Ça marche vraiment à distance ?",
    reponse:
      "Oui, c'est même pensé pour. Une visio par semaine, un cap clair, et un suivi entre les séances. Le décalage horaire n'est pas un souci : on cale un créneau fixe qui vous arrange.",
  },
  {
    question: "Qui participe aux séances : moi ou mon équipe ?",
    reponse:
      "Idéalement la personne qui exécute votre marketing au quotidien, car c'est elle qui met en oeuvre entre les séances. Je peux aussi driver le dirigeant directement, à condition qu'il ait le temps d'agir entre deux rendez-vous.",
  },
  {
    question: "Je dois m'engager combien de temps ?",
    reponse:
      "Pas de durée bloquante. Je recommande de raisonner par trimestre, parce qu'on ne transforme pas une organisation en trois séances. Mais vous restez libre.",
  },
  {
    question: "Et si j'ai besoin de plus à un moment ?",
    reponse:
      "On bascule en Direction Marketing Externalisée quand vous voulez. Le coaching est souvent la première marche.",
  },
];

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Le Coaching Hebdo",
  serviceType: "Coaching marketing hebdomadaire à distance",
  description:
    "Coaching marketing hebdomadaire pour l'équipe ou le responsable marketing en place : 1 visio d'1h par semaine pour cadencer, décider et faire progresser, comme un coach sportif. La séniorité d'un directeur marketing, sans recrutement.",
  provider: {
    "@type": "Person",
    name: "Thomas Carrère",
    url: "https://thomascarrere.fr",
  },
  areaServed: [
    { "@type": "Place", name: "La Réunion" },
    { "@type": "Country", name: "France" },
  ],
  offers: {
    "@type": "Offer",
    price: "800",
    priceCurrency: "EUR",
    url: "https://thomascarrere.fr/coaching-hebdo",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "800",
      priceCurrency: "EUR",
      unitText: "MONTH",
      valueAddedTaxIncluded: false,
    },
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: COACHING_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.reponse,
    },
  })),
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://thomascarrere.fr",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Coaching Hebdo",
      item: "https://thomascarrere.fr/coaching-hebdo",
    },
  ],
};

export default function CoachingHebdo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <CoachingClient faq={COACHING_FAQ} />
    </>
  );
}
