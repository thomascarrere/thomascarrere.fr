import type { Metadata } from "next";
import { GuideClient } from "./guide-client";

export const metadata: Metadata = {
  title: {
    absolute: "Directeur marketing externalisé : rôle, missions et prix (2026)",
  },
  description:
    "Qu'est-ce qu'un directeur marketing externalisé ? Rôle, missions, coût, différence avec un CMO interne ou une agence. Le guide clair par un consultant qui le fait depuis 15 ans.",
  alternates: { canonical: "/guide/directeur-marketing-externalise" },
  openGraph: {
    title: "Directeur marketing externalisé : rôle, missions et prix",
    description:
      "Le guide clair : définition, missions, prix, et différence avec un recrutement ou une agence. Par un consultant qui le fait depuis 15 ans.",
    url: "/guide/directeur-marketing-externalise",
  },
};

const GUIDE_FAQ = [
  {
    question:
      "C'est quoi la différence entre un directeur marketing externalisé et un consultant ?",
    reponse:
      "Un consultant vous conseille puis repart. Un directeur marketing externalisé s'engage dans la durée : il pilote, il coordonne, et il est redevable des résultats. C'est un rôle de direction, pas seulement un avis extérieur.",
  },
  {
    question: "Combien coûte un directeur marketing externalisé ?",
    reponse:
      "Selon l'intensité, de quelques centaines d'euros par mois pour un coaching à 1 500-5 000 EUR HT par mois pour un pilotage récurrent. À comparer aux 60 000 à 90 000 EUR annuels d'un directeur marketing salarié.",
  },
  {
    question:
      "Un directeur marketing externalisé, c'est rentable pour une PME ?",
    reponse:
      "Oui, dès lors que votre marketing a un enjeu de croissance et que vous n'avez pas les moyens (ou le besoin) d'un poste senior à temps plein. Vous payez la compétence utile, pas un poste fixe.",
  },
  {
    question:
      "Peut-on travailler à distance avec un directeur marketing externalisé ?",
    reponse:
      "Oui. Le métier se prête très bien au format remote : pilotage par visio, tableau de bord partagé, suivi régulier. La proximité physique n'est pas un prérequis.",
  },
  {
    question: "Directeur marketing externalisé ou agence : que choisir ?",
    reponse:
      "Une agence exécute des actions. Un directeur marketing externalisé définit la stratégie et pilote l'ensemble, y compris vos agences. Les deux sont souvent complémentaires : la tête d'un côté, les bras de l'autre.",
  },
];

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GUIDE_FAQ.map((item) => ({
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
      name: "Directeur marketing externalisé : le guide",
      item: "https://thomascarrere.fr/guide/directeur-marketing-externalise",
    },
  ],
};

export default function GuideDirecteurMarketing() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <GuideClient faq={GUIDE_FAQ} />
    </>
  );
}
