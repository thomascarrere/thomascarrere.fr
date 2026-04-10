"use client";

import Image from "next/image";
import { Section } from "@/components/section";
import { Bouton } from "@/components/bouton";
import { CarteTemoignage } from "@/components/carte-temoignage";
import { Accordion } from "@/components/accordion";
import { GrilleLogos } from "@/components/grille-logos";
import { LienTracker } from "@/components/lien-tracker";
import { Compteurs } from "@/components/compteurs";
import { AnimatedSection } from "@/components/animated-section";

const CALENDRIER = "https://calendar.app.google/xaB44wDhgrkCX8Rj8";

type AccueilClientProps = {
  logoClients: { nom: string; image?: string }[];
  faq: { question: string; reponse: string }[];
  temoignages: {
    nom: string;
    entreprise: string;
    texte: string;
    avatar?: string;
  }[];
};

export function AccueilClient({ logoClients, faq, temoignages }: AccueilClientProps) {
  return (
    <>
      {/* Hero */}
      <Section bg="dark" className="!py-0 -mt-[88px] pt-[88px]">
        {/* Glow top-right */}
        <div className="absolute top-[-60px] right-[-40px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(68,63,222,0.25)_0%,transparent_70%)] blur-[40px] z-0 pointer-events-none" />
        {/* Glow bottom-left */}
        <div className="absolute bottom-[-40px] left-[-20px] w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(157,154,234,0.15)_0%,transparent_70%)] blur-[50px] z-0 pointer-events-none" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[840px] mx-auto text-center py-20 md:py-28">
          <p className="text-sm font-bold tracking-[0.12em] uppercase text-violet-light mb-4">
            Consultant marketing pour PME et TPE
          </p>
          <h1 className="mb-6 text-white">
            Le marketing de votre entreprise devient enfin{" "}
            <span className="bg-gradient-to-r from-violet-light to-violet bg-clip-text text-transparent">
              clair et organisé
            </span>
          </h1>
          <p className="text-lg leading-8 text-white/60 mb-8 tracking-[-0.02em]">
            <strong className="text-white/90">Consultant marketing</strong>{" "}
            basé à La Réunion, j&apos;aide les dirigeants de PME à simplifier
            leurs messages et à structurer leurs actions de vente.{" "}
            <strong className="text-white/90">15 ans d&apos;expérience</strong>{" "}
            et{" "}
            <strong className="text-white/90">
              120 entreprises accompagnées
            </strong>{" "}
            pour construire des bases solides, sans complexité inutile.
          </p>
          <Bouton href={CALENDRIER} externe variante="glow">
            Réserver mon diagnostic offert (30min) →
          </Bouton>
        </div>
      </Section>

      {/* Problématiques */}
      <Section bg="alt">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              titre: "Besoin de clarté",
              texte:
                "Votre offre est excellente, mais elle mérite d'être expliquée plus simplement pour convaincre plus vite.",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              ),
            },
            {
              titre: "Besoin de structure",
              texte:
                "Vos équipes ont besoin de méthodes et d'outils concrets pour ne plus perdre de temps au quotidien.",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                </svg>
              ),
            },
            {
              titre: "Besoin d'accompagnement",
              texte:
                "Vous n'avez pas besoin d'une agence de plus, mais d'un partenaire qui s'implique vraiment à vos côtés.",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <AnimatedSection key={item.titre} delay={i * 100}>
              <div className="bg-white rounded-xl p-10 text-center flex flex-col items-center border border-border hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(22,0,66,0.08)] transition-all duration-200">
                <div className="w-11 h-11 rounded-[10px] bg-gradient-to-br from-violet-bg to-violet-lighter flex items-center justify-center mb-4">
                  {item.icone}
                </div>
                <h3 className="mb-3">{item.titre}</h3>
                <p className="text-text">{item.texte}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Offre Sprint Fondations */}
      <Section>
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold tracking-[0.08em] uppercase text-violet mb-4">
                Le diagnostic Fondations
              </p>
              <h2 className="mb-6">
                15 jours pour tout remettre à plat
              </h2>
              <p className="text-lg leading-8 text-text mb-8 tracking-[-0.02em]">
                Je m&apos;immerge dans votre activité pendant deux semaines pour
                lever les doutes et installer votre nouveau système de travail.
                Pas de théorie, juste du concret.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    titre: "Votre message clarifié",
                    desc: "Pour être compris par vos clients dès les premières secondes",
                  },
                  {
                    titre: "Vos outils de vente",
                    desc: "Des modèles d'emails et des messages prêts à l'emploi pour vos équipes",
                  },
                  {
                    titre: "Votre espace de pilotage",
                    desc: "Un outil simple (Notion) pour centraliser vos idées, vos projets et vos résultats",
                  },
                  {
                    titre: "Votre feuille de route",
                    desc: "Un plan précis sur 90 jours pour savoir exactement où vous allez",
                  },
                ].map((item) => (
                  <div key={item.titre} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-violet flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-heading">{item.titre}</p>
                      <p className="text-text text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Bouton href="/sprint-fondations" variante="secondaire">
                Découvrir l&apos;offre &quot;Fondations&quot;
              </Bouton>
            </div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/images/thomas-conference.jpg"
                alt="Thomas Carrère en conférence"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160042]/10 to-transparent" />
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* À propos + logos */}
      <Section bg="alt">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
              Qui suis-je
            </p>
            <h2 className="mb-6">
              Un regard extérieur, 15 ans d&apos;expérience
            </h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em]">
              Ancien dirigeant d&apos;agence, j&apos;ai accompagné plus d&apos;une
              centaine d&apos;entreprises avant de choisir de travailler en direct
              avec les dirigeants. Mon approche est celle du bon sens : on garde ce
              qui marche, on simplifie ce qui est complexe, et on construit sur la
              durée.
            </p>
            <div className="mt-6">
              <LienTracker
                href="/qui-suis-je"
                event="parcours"
                label="accueil"
                className="text-violet font-medium text-sm hover:text-violet-hover transition-colors"
              >
                En savoir plus sur mon parcours →
              </LienTracker>
            </div>
          </div>
          <div className="mb-12">
            <Compteurs
              items={[
                { valeur: 120, suffixe: "+", label: "entreprises accompagnées" },
                { valeur: 15, label: "ans d'expérience" },
              ]}
            />
          </div>
          <GrilleLogos logos={logoClients} />
        </AnimatedSection>
      </Section>

      {/* Direction Marketing */}
      <Section>
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
              Direction Marketing externalisée
            </p>
            <h2 className="mb-6">
              Un Directeur Marketing à vos côtés, chaque mois
            </h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em]">
              Une fois les bases posées, je ne vous laisse pas seul. Je peux
              devenir votre bras droit régulier pour piloter votre stratégie,
              coordonner vos prestataires et veiller à ce que vos objectifs soient
              atteints.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              titre: "Gouvernance",
              desc: "Je cadre, je coache vos équipes et je pilote vos prestataires",
            },
            {
              titre: "Production",
              desc: "Je crée vos contenus stratégiques (cas clients, séquences mails, pubs, etc.)",
            },
            {
              titre: "CMO complet",
              desc: "Je gère l'intégralité de votre marketing comme si c'était ma propre boîte",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.titre} delay={i * 100}>
              <div className="bg-white rounded-xl p-8 text-center border border-border hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(22,0,66,0.08)] transition-all duration-200">
                <h3 className="mb-3">{item.titre}</h3>
                <p className="text-text text-sm">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-8">
          <Bouton href="/direction-marketing-externalise" variante="secondaire">
            Découvrir la Direction Marketing Externalisée
          </Bouton>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="alt">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto">
            <div className="text-center mb-12">
              <h2>Questions fréquentes</h2>
            </div>
            <Accordion items={faq} />
          </div>
        </AnimatedSection>
      </Section>

      {/* Témoignages */}
      <Section>
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
              Témoignages
            </p>
            <h2>Ce qu&apos;ils disent</h2>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {temoignages.map((t, i) => (
            <AnimatedSection key={t.nom} delay={i * 100}>
              <CarteTemoignage
                nom={t.nom}
                entreprise={t.entreprise}
                texte={t.texte}
                avatar={t.avatar}
              />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <Section bg="dark">
        <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[radial-gradient(ellipse,rgba(68,63,222,0.2)_0%,transparent_70%)] blur-[40px] z-0 pointer-events-none" />
        <div className="max-w-[840px] mx-auto text-center py-8">
          <p className="text-sm font-bold tracking-[0.12em] uppercase text-violet-light mb-4">
            On y va ?
          </p>
          <h2 className="mb-6 text-white">
            Prêt à structurer votre marketing ?
          </h2>
          <p className="text-lg leading-8 text-white/60 mb-8 tracking-[-0.02em]">
            30 minutes pour faire le point sur vos blocages. C&apos;est gratuit et sans engagement.
          </p>
          <Bouton href={CALENDRIER} externe variante="glow">
            Réserver mon diagnostic offert (30min) →
          </Bouton>
        </div>
      </Section>
    </>
  );
}
