import type { Metadata } from "next";
import { IMAGE_OG_DME } from "@/lib/seo";
import { DirectionClient } from "./direction-client";

export const metadata: Metadata = {
  title: {
    absolute: "Directeur marketing externalisé (CMO) dès 1 600 € HT/mois",
  },
  description:
    "Direction marketing externalisée pour PME : un CMO freelance senior pilote votre marketing digital à temps partiel, sans recruter. Premier échange offert.",
  alternates: { canonical: "/direction-marketing-externalise" },
  openGraph: {
    title: "Directeur marketing externalisé (CMO) dès 1 600 € HT/mois",
    description:
      "La puissance d'un CMO senior, la flexibilité en plus. 3 niveaux d'intensité, sans engagement long terme.",
    url: "/direction-marketing-externalise",
    images: [IMAGE_OG_DME],
  },
  twitter: {
    card: "summary_large_image",
    images: [IMAGE_OG_DME.url],
  },
};

const LOGOS_CLIENTS = [
  { nom: "Pardon Réunion" },
  { nom: "ETAP-Santé", image: "/images/logo-etap-sante.png" },
  { nom: "GEM Formation", image: "/images/logo-gem.webp" },
  { nom: "Gaia", image: "/images/logo-gaia.webp" },
  { nom: "Albior" },
  { nom: "SAPMER", image: "/images/logo-sapmer.png" },
  { nom: "AJ Promotion", image: "/images/logo-ajp.jpg" },
  { nom: "Isautier", image: "/images/logo-isautier.webp" },
  { nom: "IUT Réunion" },
  { nom: "ASDR", image: "/images/logo-asdr.jpeg" },
  { nom: "Créalise" },
  { nom: "Zotcar" },
];

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Direction Marketing Externalisée",
  serviceType: "Direction marketing externalisée (CMO à temps partagé)",
  description:
    "La direction marketing externalisée consiste à confier le pilotage de sa stratégie marketing à un expert externe, à temps partiel. Trois niveaux d'intensité : Gouvernance, Croissance et CMO complet.",
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
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "1600",
    offerCount: "3",
    availability: "https://schema.org/InStock",
    url: "https://thomascarrere.fr/direction-marketing-externalise",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Niveaux d'accompagnement",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Pilotage Gouvernance",
        price: "1600",
        priceCurrency: "EUR",
        description:
          "Stratégie, priorités et pilotage des prestataires. 1 session hebdomadaire.",
      },
      {
        "@type": "Offer",
        name: "Pilotage Croissance",
        price: "2800",
        priceCurrency: "EUR",
        description:
          "Gouvernance + production d'un actif clé par mois.",
      },
      {
        "@type": "Offer",
        name: "CMO complet",
        description:
          "Gestion intégrale du pôle marketing comme une entreprise à part entière.",
      },
    ],
  },
  url: "https://thomascarrere.fr/direction-marketing-externalise",
};

const FAQ = [
  {
    question: "Qu'est-ce qu'une direction marketing externalisée ?",
    reponse:
      "C'est confier le pilotage de votre marketing à un directeur marketing externe, à temps partiel, plutôt que de recruter en interne. Il prend la place du directeur marketing que vous n'avez pas encore : vous gardez la décision, il traduit votre vision en plan, coordonne ceux qui exécutent (votre équipe, vos prestataires, vos outils) et vous rend des comptes chaque mois.",
  },
  {
    question: "Combien coûte un directeur marketing externalisé ?",
    reponse:
      "Avec moi, à partir de 1 600 € HT par mois pour le pilotage « Gouvernance », à partir de 2 800 € HT par mois pour le pilotage « Croissance », qui ajoute la production d'un actif clé chaque mois, et sur devis pour un CMO complet. À comparer aux 60 000 à 90 000 € par an d'un directeur marketing salarié, charges comprises.",
  },
  {
    question:
      "CMO externalisé, CMO freelance, directeur marketing digital externalisé : quelle différence ?",
    reponse:
      "Aucune sur le fond. CMO (Chief Marketing Officer) est le terme anglais pour directeur marketing ; « freelance » ou « à temps partagé » précise qu'il est indépendant. Le directeur marketing digital externalisé désigne le même rôle centré sur le web, les réseaux sociaux et la publicité en ligne. Je pilote le marketing digital comme le marketing commercial : les deux doivent servir le même chiffre d'affaires.",
  },
  {
    question: "Quelle différence avec une agence marketing ?",
    reponse:
      "Une agence exécute des actions. Un directeur marketing externalisé fixe la stratégie et pilote l'ensemble, y compris vos agences : il les choisit, les briefe et contrôle leurs résultats. Je ne touche aucune commission sur les outils ou les prestataires que je recommande.",
  },
  {
    question: "Par quoi commence une mission ?",
    reponse:
      "Par le Diagnostic et plan d'action : 15 jours pour valider votre message, vos outils et votre feuille de route à 90 jours, pour 2 900 € HT. Je ne pilote pas sur du flou : cette étape rend le pilotage mensuel utile dès le premier mois. Elle vous reste, même si on s'arrête là.",
  },
  {
    question: "Faut-il s'engager sur une longue durée ?",
    reponse:
      "Non. La collaboration est sans engagement long terme et se renouvelle sur la base de la confiance et des résultats. Chaque mois, un bilan des chiffres permet d'ajuster le plan, ou le niveau d'intensité.",
  },
  {
    question: "Travaillez-vous avec des entreprises en métropole ?",
    reponse:
      "Oui. Je suis basé à La Réunion et j'accompagne des PME à La Réunion comme en métropole. Le pilotage se fait en visio, avec un point hebdomadaire, un bilan mensuel et un espace de pilotage dédié où vous suivez l'avancement en temps réel.",
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
      name: "Direction marketing externalisée",
      item: "https://thomascarrere.fr/direction-marketing-externalise",
    },
  ],
};

export default function DirectionMarketing() {
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
      <DirectionClient logoClients={LOGOS_CLIENTS} faq={FAQ} />
    </>
  );
}
