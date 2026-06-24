import type { Metadata } from "next";
import { QuiSuisJeClient } from "./qui-suis-je-client";

export const metadata: Metadata = {
  // absolute : on ignore le template "%s : Thomas Carrère" pour éviter le doublon de marque
  title: {
    absolute: "Qui suis-je : Thomas Carrère, consultant marketing à La Réunion",
  },
  description:
    "Découvrez le parcours de Thomas Carrère, consultant marketing à La Réunion. 15 ans d'expérience, 120 entreprises accompagnées. Un regard externe et pragmatique pour structurer votre croissance.",
  alternates: { canonical: "https://thomascarrere.fr/qui-suis-je" },
  openGraph: {
    title: "Qui suis-je : Thomas Carrère, consultant marketing à La Réunion",
    description:
      "Le parcours de Thomas Carrère : ancien dirigeant d'agence, 15 ans d'expérience, 120 entreprises accompagnées à La Réunion et en métropole.",
    url: "https://thomascarrere.fr/qui-suis-je",
  },
};

const CALENDRIER = "https://calendar.app.google/xaB44wDhgrkCX8Rj8";

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
      name: "Qui suis-je",
      item: "https://thomascarrere.fr/qui-suis-je",
    },
  ],
};

// Le schema Person est injecte globalement par app/layout.tsx : pas de doublon ici.
export default function QuiSuisJe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <QuiSuisJeClient calendrier={CALENDRIER} />
    </>
  );
}
