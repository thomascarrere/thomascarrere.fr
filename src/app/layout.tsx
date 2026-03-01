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
  title: "Thomas Carrere — Consultant Marketing",
  description:
    "Le marketing de votre entreprise devient enfin clair et organise. 15 ans d'experience, 120 entreprises accompagnees.",
  openGraph: {
    title: "Thomas Carrere — Consultant Marketing",
    description:
      "Le marketing de votre entreprise devient enfin clair et organise.",
    url: "https://thomascarrere.fr",
    siteName: "Thomas Carrere",
    locale: "fr_FR",
    type: "website",
  },
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
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
