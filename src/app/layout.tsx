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
  title: "Thomas Carrère — Consultant Marketing",
  description:
    "Le marketing de votre entreprise devient enfin clair et organisé. 15 ans d'expérience, 120 entreprises accompagnées.",
  openGraph: {
    title: "Thomas Carrère — Consultant Marketing",
    description:
      "Le marketing de votre entreprise devient enfin clair et organisé.",
    url: "https://thomascarrere.fr",
    siteName: "Thomas Carrère",
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
