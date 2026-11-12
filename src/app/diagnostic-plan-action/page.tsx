import type { Metadata } from "next";
import { IMAGE_OG_DIAGNOSTIC } from "@/lib/seo";
import { DiagnosticClient } from "./diagnostic-client";

export const metadata: Metadata = {
  // absolute : le template "%s : Thomas Carrère" depassait 60 caracteres
  title: {
    absolute: "Diagnostic et plan d'action marketing en 15 jours",
  },
  description:
    "Diagnostic et plan d'action : 15 jours pour clarifier votre offre, outiller vos ventes et tracer votre feuille de route marketing. 2 900 € HT, sans engagement.",
  alternates: { canonical: "https://thomascarrere.fr/diagnostic-plan-action" },
  openGraph: {
    title: "Diagnostic et plan d'action marketing en 15 jours",
    description:
      "Une immersion de 15 jours pour clarifier votre offre, organiser vos outils de vente et tracer votre feuille de route marketing.",
    url: "https://thomascarrere.fr/diagnostic-plan-action",
    images: [IMAGE_OG_DIAGNOSTIC],
  },
  twitter: {
    card: "summary_large_image",
    images: [IMAGE_OG_DIAGNOSTIC.url],
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diagnostic et plan d'action",
  serviceType: "Audit et structuration marketing",
  description:
    "Une immersion de 15 jours pour clarifier votre offre, organiser vos outils de vente et tracer votre feuille de route marketing. Inclut la fiche offre, le kit prospection, l'espace de pilotage sur mesure et la feuille de route à 90 jours.",
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
    url: "https://thomascarrere.fr/diagnostic-plan-action",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "2900",
      priceCurrency: "EUR",
      valueAddedTaxIncluded: false,
    },
  },
  url: "https://thomascarrere.fr/diagnostic-plan-action",
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
      name: "Diagnostic et plan d'action",
      item: "https://thomascarrere.fr/diagnostic-plan-action",
    },
  ],
};

export default function DiagnosticPlanAction() {
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
      <DiagnosticClient />
    </>
  );
}
