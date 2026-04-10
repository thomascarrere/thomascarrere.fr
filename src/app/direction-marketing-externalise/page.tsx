import type { Metadata } from "next";
import { DirectionClient } from "./direction-client";

export const metadata: Metadata = {
  title:
    "Direction Marketing Externalisée — CMO senior, flexibilité en plus",
  description:
    "Directeur Marketing externalisé à temps partiel pour PME. Pilotage stratégique, production de contenus et coordination de vos équipes. La puissance d'un CMO senior, la flexibilité en plus.",
  alternates: {
    canonical: "https://thomascarrere.fr/direction-marketing-externalise",
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

export default function DirectionMarketing() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <DirectionClient logoClients={LOGOS_CLIENTS} />
    </>
  );
}
