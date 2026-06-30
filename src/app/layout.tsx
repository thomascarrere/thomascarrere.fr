import type { Metadata } from "next";
import Script from "next/script";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { BandeauCookies } from "@/components/bandeau-cookies";

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
      "Consultant Marketing PME : Thomas Carrère, La Réunion",
    template: "%s : Thomas Carrère",
  },
  description:
    "Consultant marketing PME/TPE à La Réunion. Je clarifie votre offre et structure vos ventes. 15 ans d'expérience, 120 entreprises accompagnées.",
  metadataBase: new URL("https://thomascarrere.fr"),
  openGraph: {
    title: "Consultant Marketing PME : Thomas Carrère, La Réunion",
    description:
      "J'aide les dirigeants de PME à simplifier leur marketing et structurer leurs ventes. 15 ans d'expérience, 120 entreprises accompagnées.",
    url: "https://thomascarrere.fr",
    siteName: "Thomas Carrère : Consultant Marketing",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/thomas-conference.jpg",
        width: 1200,
        height: 630,
        alt: "Thomas Carrère : Consultant Marketing PME",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultant Marketing PME : Thomas Carrère",
    description:
      "J'aide les dirigeants de PME à simplifier leur marketing et structurer leurs ventes. 15 ans d'expérience, 120 entreprises accompagnées.",
    images: ["/images/thomas-conference.jpg"],
  },
  alternates: {
    canonical: "https://thomascarrere.fr",
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://thomascarrere.fr/#person",
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
  name: "Thomas Carrère : Consultant Marketing",
  description:
    "Consultant marketing pour PME et TPE. Accompagnement stratégique, direction marketing externalisée et sprints fondations.",
  url: "https://thomascarrere.fr",
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

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://thomascarrere.fr/#organization",
  name: "Thomas Carrère : Consultant Marketing",
  url: "https://thomascarrere.fr",
  logo: "https://thomascarrere.fr/images/logo.png",
  description:
    "Cabinet de conseil marketing pour PME et TPE : direction marketing externalisée, sprints fondations et coaching. La Réunion et France.",
  founder: { "@id": "https://thomascarrere.fr/#person" },
  areaServed: [
    { "@type": "Place", name: "La Réunion" },
    { "@type": "Country", name: "France" },
  ],
  sameAs: ["https://www.linkedin.com/in/thomascarrere/"],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://thomascarrere.fr/#website",
  name: "Thomas Carrère : Consultant Marketing",
  url: "https://thomascarrere.fr",
  inLanguage: "fr-FR",
  publisher: { "@id": "https://thomascarrere.fr/#organization" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Consent Mode v2 : tout refusé par défaut, avant le chargement de gtag (conformité CNIL) */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
            gtag('js', new Date());
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q2Y0BZEN2C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            gtag('config', 'G-Q2Y0BZEN2C');
            gtag('config', 'AW-11120283655');
          `}
        </Script>
      </head>
      <body
        className={`${archivo.variable} ${inter.variable} antialiased`}
      >
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-violet focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Aller au contenu
        </a>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite),
          }}
        />
        <NavBar />
        <main id="contenu">{children}</main>
        <Footer />
        <BandeauCookies />
      </body>
    </html>
  );
}
