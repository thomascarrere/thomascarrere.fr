import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Consultant Marketing PME — Thomas Carrère, La Réunion",
    template: "%s — Thomas Carrère",
  },
  description:
    "Consultant marketing pour PME et TPE. J'aide les dirigeants à clarifier leur offre et structurer leurs ventes. 15 ans d'expérience, 120 entreprises accompagnées à La Réunion et en France.",
  metadataBase: new URL("https://thomascarrere.fr"),
  openGraph: {
    title: "Consultant Marketing PME — Thomas Carrère, La Réunion",
    description:
      "J'aide les dirigeants de PME à simplifier leur marketing et structurer leurs ventes. 15 ans d'expérience, 120 entreprises accompagnées.",
    url: "https://thomascarrere.fr",
    siteName: "Thomas Carrère — Consultant Marketing",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/thomas-conference.jpg",
        width: 1200,
        height: 630,
        alt: "Thomas Carrère — Consultant Marketing PME",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultant Marketing PME — Thomas Carrère",
    description:
      "J'aide les dirigeants de PME à simplifier leur marketing et structurer leurs ventes. 15 ans d'expérience, 120 entreprises accompagnées.",
    images: ["/images/thomas-conference.jpg"],
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  alternates: {
    canonical: "https://thomascarrere.fr",
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thomas Carrère",
  jobTitle: "Consultant Marketing",
  description:
    "Consultant marketing pour PME et TPE. 15 ans d'expérience, 120 entreprises accompagnées à La Réunion et en France métropolitaine.",
  url: "https://thomascarrere.fr",
  sameAs: ["https://www.linkedin.com/in/thomascarrere/"],
  knowsAbout: [
    "Marketing digital",
    "Stratégie marketing",
    "Direction marketing externalisée",
    "Marketing PME",
    "Consulting marketing",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "L'Étang-Salé",
    addressRegion: "La Réunion",
    addressCountry: "FR",
  },
  image: "https://thomascarrere.fr/images/thomas-portrait.webp",
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://thomascarrere.fr/#business",
  name: "Thomas Carrère — Consultant Marketing",
  description:
    "Consultant marketing pour PME et TPE. Accompagnement stratégique, direction marketing externalisée et sprints fondations.",
  url: "https://thomascarrere.fr",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    addressLocality: "L'Étang-Salé",
    addressRegion: "La Réunion",
    postalCode: "97427",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -21.2712,
    longitude: 55.3456,
  },
  areaServed: [
    { "@type": "Place", name: "La Réunion" },
    { "@type": "Country", name: "France" },
  ],
  founder: { "@id": "https://thomascarrere.fr/#person" },
  image: "https://thomascarrere.fr/images/thomas-portrait.webp",
  sameAs: ["https://www.linkedin.com/in/thomascarrere/"],
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${archivo.variable} ${inter.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdPerson),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
