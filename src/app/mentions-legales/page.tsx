import type { Metadata } from "next";
import { MentionsLegalesClient } from "./mentions-legales-client";

export const metadata: Metadata = {
  // absolute : on ignore le template "%s : Thomas Carrère" pour éviter le doublon de marque
  title: {
    absolute: "Mentions légales & confidentialité : Thomas Carrère",
  },
  description:
    "Mentions légales et politique de confidentialité du site thomascarrere.fr, édité par Thomas Carrère, consultant marketing à La Réunion.",
  alternates: { canonical: "https://thomascarrere.fr/mentions-legales" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Mentions légales & confidentialité : Thomas Carrère",
    description:
      "Mentions légales et politique de confidentialité du site thomascarrere.fr.",
    url: "https://thomascarrere.fr/mentions-legales",
  },
};

export default function MentionsLegales() {
  return <MentionsLegalesClient />;
}
