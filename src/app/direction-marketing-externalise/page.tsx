import type { Metadata } from "next";
import { DirectionClient } from "./direction-client";

export const metadata: Metadata = {
  title: {
    absolute: "Direction marketing externalisée : un CMO senior sans recruter",
  },
  description:
    "Pilotez votre marketing avec un directeur externalisé : la puissance d'un CMO senior (15 ans d'expérience), sans recruter ni vous engager. Diagnostic offert (30 min).",
  alternates: { canonical: "/direction-marketing-externalise" },
  openGraph: {
    title: "Direction marketing externalisée : un CMO senior sans recruter",
    description:
      "La puissance d'un CMO senior, la flexibilité en plus. 3 niveaux d'intensité, sans engagement long terme.",
    url: "/direction-marketing-externalise",
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
      <DirectionClient logoClients={LOGOS_CLIENTS} />
    </>
  );
}
