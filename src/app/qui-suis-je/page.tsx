import type { Metadata } from "next";
import { QuiSuisJeClient } from "./qui-suis-je-client";

export const metadata: Metadata = {
  title:
    "Thomas Carrère — Consultant Marketing, 15 ans d'expérience",
  description:
    "Découvrez le parcours de Thomas Carrère, consultant marketing à La Réunion. 15 ans d'expérience, 120 entreprises accompagnées. Un regard externe et pragmatique pour structurer votre croissance.",
  alternates: { canonical: "https://thomascarrere.fr/qui-suis-je" },
};

const CALENDRIER = "https://calendar.app.google/xaB44wDhgrkCX8Rj8";

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thomas Carrère",
  jobTitle: "Consultant Marketing",
  description:
    "Consultant marketing pour PME et TPE basé à La Réunion. 15 ans d'expérience dans le marketing digital, l'entrepreneuriat et le consulting. Fondateur de l'agence Du Simple au Double. Plus de 120 entreprises accompagnées.",
  url: "https://thomascarrere.fr/qui-suis-je",
  sameAs: ["https://www.linkedin.com/in/thomascarrere/"],
  knowsAbout: [
    "Marketing digital",
    "Stratégie marketing PME",
    "Direction marketing externalisée",
    "SEO",
    "Social Media",
    "CRM",
    "Notion",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "L'Étang-Salé",
    addressRegion: "La Réunion",
    addressCountry: "FR",
  },
  image: "https://thomascarrere.fr/images/thomas-portrait.webp",
  worksFor: {
    "@type": "Organization",
    name: "Thomas Carrère — Consultant Marketing",
    url: "https://thomascarrere.fr",
  },
};

export default function QuiSuisJe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
      />
      <QuiSuisJeClient calendrier={CALENDRIER} />
    </>
  );
}
