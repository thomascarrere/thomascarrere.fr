import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import { Bouton } from "@/components/bouton";

export const metadata: Metadata = {
  title: "Qui suis-je — Thomas Carrère",
  description:
    "15 ans d'expérience et 120 entreprises accompagnées. Je simplifie votre marketing pour libérer votre croissance.",
};

const CALENDRIER = "https://calendar.app.google/xaB44wDhgrkCX8Rj8";

export default function QuiSuisJe() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="max-w-[840px] mx-auto text-center py-12 md:py-20">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            Qui suis-je
          </p>
          <h1 className="mb-6">
            15 ans d&apos;expérience et 120 entreprises accompagnées : je
            simplifie votre marketing pour libérer votre croissance.
          </h1>
          <p className="text-lg leading-8 text-text tracking-[-0.02em]">
            Le marketing ne devrait pas être une source de stress, mais un
            levier de clarté. Après avoir fondé l&apos;agence Du Simple au
            Double et accompagné plus de 120 entreprises à La Réunion et en
            Métropole, j&apos;ai fait un constat simple : la complexité est
            l&apos;ennemi de l&apos;efficacité.
          </p>
        </div>
      </Section>

      {/* Expertise */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto text-center mb-12">
          <h2>Une expertise forgée sur le terrain</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {[
              {
                titre: "15 ans de pratique",
                texte:
                  "Après 5 ans dans l'édition et les médias, j'ai cumulé plus de 15 ans d'expérience dans le Digital, le marketing et l'entrepreneuriat.",
              },
              {
                titre: "7 ans à la tête d'une agence",
                texte:
                  "CEO d'une agence de marketing digital pour maîtriser l'ensemble de la chaîne de valeur (SEO, Social Media, Contenus, Stratégie).",
              },
              {
                titre: "+120 clients accompagnés",
                texte:
                  "De la startup en croissance à la PME historique (Isautier, SAPMER, ETAP-Santé, L'École 42 Le Havre, etc.).",
              },
            ].map((item) => (
              <div key={item.titre} className="flex gap-4">
                <div className="w-10 h-10 rounded bg-bg-icon flex items-center justify-center shrink-0 shadow-[23px_23px_48px_-8px_#1600420a]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h5 className="mb-2">{item.titre}</h5>
                  <p className="text-text text-[15px]">{item.texte}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <Image
              src="/images/thomas-portrait.webp"
              alt="Thomas Carrère"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Mon approche */}
      <Section>
        <div className="max-w-[840px] mx-auto text-center mb-12">
          <h2>Mon approche : la sérénité par la structure</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              titre: "Un regard externe et pragmatique",
              texte:
                "Je vous aide à prendre du recul sur vos stratégies pour identifier les priorités réelles et arrêter de perdre du temps sur ce qui ne fonctionne pas.",
            },
            {
              titre: "Des solutions immédiatement actionnables",
              texte:
                "Pas de rapports théoriques. Je construis avec vous des systèmes (Notion, CRM, scripts) que vous pouvez piloter dès le lendemain.",
            },
            {
              titre: "Un partenaire de confiance à La Réunion",
              texte:
                "Basé à l'Étang-Salé, j'allie la connaissance fine du tissu économique local à une exigence de niveau national.",
            },
          ].map((item) => (
            <div
              key={item.titre}
              className="bg-bg-alt rounded-xl p-8 text-center"
            >
              <h5 className="mb-3">{item.titre}</h5>
              <p className="text-text text-[15px]">{item.texte}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Travailler ensemble */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto text-center mb-12">
          <h2>Comment nous pouvons travailler ensemble ?</h2>
          <p className="text-lg leading-8 text-text tracking-[-0.02em] mt-4">
            La plupart des dirigeants de PME et TPE que j&apos;accompagne font
            face aux mêmes obstacles :
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-[960px] mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-[34px_34px_140px_-48px_#393b6a14]">
            <p className="text-xs font-bold tracking-[0.08em] uppercase text-violet mb-3">
              Sprint Fondations
            </p>
            <h5 className="mb-3">Le Pack Fondations</h5>
            <p className="text-text text-[15px] mb-6">
              Une immersion de 15 jours pour remettre votre marketing à plat,
              clarifier vos messages et organiser vos outils de vente.
            </p>
            <Link
              href="/sprint-fondations"
              className="text-violet font-medium text-sm hover:text-violet-hover transition-colors"
            >
              Découvrir l&apos;offre &quot;Fondations&quot; →
            </Link>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-[34px_34px_140px_-48px_#393b6a14]">
            <p className="text-xs font-bold tracking-[0.08em] uppercase text-violet mb-3">
              Accompagnement régulier
            </p>
            <h5 className="mb-3">Direction Marketing Externalisée</h5>
            <p className="text-text text-[15px] mb-6">
              Un accompagnement régulier pour piloter votre stratégie sur le
              long terme et garantir que vos objectifs de croissance soient
              atteints.
            </p>
            <Link
              href="/direction-marketing-externalise"
              className="text-violet font-medium text-sm hover:text-violet-hover transition-colors"
            >
              Découvrir la Direction Marketing Externalisée →
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA final */}
      <Section>
        <div className="max-w-[840px] mx-auto text-center py-8">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            Café ou visio
          </p>
          <h2 className="mb-6">On en discute ?</h2>
          <p className="text-lg leading-8 text-text mb-8 tracking-[-0.02em]">
            Chaque entreprise est unique, mais les blocages sont souvent
            similaires. Je vous propose un échange de 30 minutes pour faire le
            point sur votre situation actuelle, sans engagement.
          </p>
          <Bouton href={CALENDRIER} externe>
            Réserver mon diagnostic offert (30min) →
          </Bouton>
        </div>
      </Section>
    </>
  );
}
