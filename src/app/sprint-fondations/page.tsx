import type { Metadata } from "next";
import { IMAGE_OG } from "@/lib/seo";
import { SprintClient } from "./sprint-client";

export const metadata: Metadata = {
  // absolute : le template "%s : Thomas Carrère" depassait 60 caracteres
  title: {
    absolute: "Sprint Fondations : structurer votre marketing en 15 jours",
  },
  description:
    "Sprint Fondations : 15 jours pour clarifier votre offre, outiller vos ventes et tracer votre feuille de route marketing. 2 900 EUR HT, sans engagement.",
  alternates: { canonical: "https://thomascarrere.fr/sprint-fondations" },
  openGraph: {
    title: "Sprint Fondations : structurer votre marketing en 15 jours",
    description:
      "Une immersion de 15 jours pour clarifier votre offre, organiser vos outils de vente et tracer votre feuille de route marketing.",
    url: "https://thomascarrere.fr/sprint-fondations",
    images: [IMAGE_OG],
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sprint Fondations",
  serviceType: "Audit et structuration marketing",
  description:
    "Une immersion de 15 jours pour clarifier votre offre, organiser vos outils de vente et tracer votre feuille de route marketing. Inclut la fiche offre, le kit prospection, le cockpit Notion et la roadmap 90 jours.",
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
    price: "2900",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://thomascarrere.fr/sprint-fondations",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "2900",
      priceCurrency: "EUR",
      valueAddedTaxIncluded: false,
    },
  },
  url: "https://thomascarrere.fr/sprint-fondations",
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
      name: "Sprint Fondations",
      item: "https://thomascarrere.fr/sprint-fondations",
    },
  ],
};

export default function SprintFondations() {
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
      <SprintClient />
    </>
  );
}
