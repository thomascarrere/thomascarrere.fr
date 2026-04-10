"use client";

import Image from "next/image";
import { Section } from "@/components/section";
import { Bouton } from "@/components/bouton";
import { LienTracker } from "@/components/lien-tracker";
import { AnimatedSection } from "@/components/animated-section";

type QuiSuisJeClientProps = {
  calendrier: string;
};

export function QuiSuisJeClient({ calendrier }: QuiSuisJeClientProps) {
  return (
    <>
      {/* Hero */}
      <Section>
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center py-12 md:py-20">
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
              Consultant marketing — La Réunion
            </p>
            <h1 className="mb-6">
              15 ans d&apos;expérience et 120 entreprises accompagnées : je
              simplifie votre marketing pour libérer votre croissance.
            </h1>
            <p className="text-lg leading-8 text-text tracking-[-0.02em]">
              <strong className="text-heading">Thomas Carrère</strong>,{" "}
              <strong className="text-heading">consultant marketing</strong>{" "}
              basé à La Réunion. Le marketing ne devrait pas être une source de
              stress, mais un levier de clarté. Après avoir fondé l&apos;agence
              Du Simple au Double et accompagné plus de{" "}
              <strong className="text-heading">120 entreprises</strong> à La
              Réunion et en Métropole, j&apos;ai fait un constat simple : la
              complexité est l&apos;ennemi de l&apos;efficacité.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Expertise */}
      <Section bg="alt">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <h2>Une expertise forgée sur le terrain</h2>
          </div>
        </AnimatedSection>
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
            ].map((item, index) => (
              <AnimatedSection key={item.titre} delay={index * 100}>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-[10px] bg-gradient-to-br from-violet-bg to-violet-lighter flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2">{item.titre}</h3>
                    <p className="text-text text-[15px]">{item.texte}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={200}>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/images/thomas-portrait.webp"
                alt="Thomas Carrère"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160042]/10 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Mon approche */}
      <Section>
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <h2>Mon approche : la sérénité par la structure</h2>
          </div>
        </AnimatedSection>
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
          ].map((item, index) => (
            <AnimatedSection key={item.titre} delay={index * 100}>
              <div className="bg-white rounded-xl p-8 text-center border border-border hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(22,0,66,0.08)] transition-all duration-200">
                <h3 className="mb-3">{item.titre}</h3>
                <p className="text-text text-[15px]">{item.texte}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Travailler ensemble */}
      <Section bg="alt">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <h2>Comment nous pouvons travailler ensemble ?</h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em] mt-4">
              La plupart des dirigeants de PME et TPE que j&apos;accompagne font
              face aux mêmes obstacles :
            </p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8 max-w-[960px] mx-auto">
          <AnimatedSection delay={0}>
            <div className="bg-white rounded-xl p-8 border border-border shadow-[0_4px_16px_rgba(22,0,66,0.04)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(22,0,66,0.08)] transition-all duration-200">
              <p className="text-xs font-bold tracking-[0.08em] uppercase text-violet mb-3">
                Sprint Fondations
              </p>
              <h3 className="mb-3">Le Pack Fondations</h3>
              <p className="text-text text-[15px] mb-6">
                Une immersion de 15 jours pour remettre votre marketing à plat,
                clarifier vos messages et organiser vos outils de vente.
              </p>
              <LienTracker
                href="/sprint-fondations"
                event="offre"
                label="Sprint Fondations"
                className="text-violet font-medium text-sm hover:text-violet-hover transition-colors"
              >
                Découvrir l&apos;offre &quot;Fondations&quot; →
              </LienTracker>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="bg-white rounded-xl p-8 border border-border shadow-[0_4px_16px_rgba(22,0,66,0.04)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(22,0,66,0.08)] transition-all duration-200">
              <p className="text-xs font-bold tracking-[0.08em] uppercase text-violet mb-3">
                Accompagnement régulier
              </p>
              <h3 className="mb-3">Direction Marketing Externalisée</h3>
              <p className="text-text text-[15px] mb-6">
                Un accompagnement régulier pour piloter votre stratégie sur le
                long terme et garantir que vos objectifs de croissance soient
                atteints.
              </p>
              <LienTracker
                href="/direction-marketing-externalise"
                event="offre"
                label="Direction Marketing Externalisee"
                className="text-violet font-medium text-sm hover:text-violet-hover transition-colors"
              >
                Découvrir la Direction Marketing Externalisée →
              </LienTracker>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* CTA final */}
      <Section bg="dark">
        <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[radial-gradient(ellipse,rgba(68,63,222,0.2)_0%,transparent_70%)] blur-[40px] z-0" />
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center py-8">
            <p className="text-sm font-bold tracking-[0.12em] uppercase text-violet-light mb-4">
              Café ou visio
            </p>
            <h2 className="mb-6 text-white">On en discute ?</h2>
            <p className="text-lg leading-8 text-white/60 mb-8 tracking-[-0.02em]">
              Chaque entreprise est unique, mais les blocages sont souvent
              similaires. Je vous propose un échange de 30 minutes pour faire le
              point sur votre situation actuelle, sans engagement.
            </p>
            <Bouton href={calendrier} externe variante="glow">
              Réserver mon diagnostic offert (30min) →
            </Bouton>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
