"use client";

import { Section } from "@/components/section";
import { Bouton } from "@/components/bouton";
import { GrilleLogos } from "@/components/grille-logos";
import { LienTracker } from "@/components/lien-tracker";
import { AnimatedSection } from "@/components/animated-section";

const CALENDRIER = "https://calendar.app.google/xaB44wDhgrkCX8Rj8";

type DirectionClientProps = {
  logoClients: { nom: string; image?: string }[];
};

export function DirectionClient({ logoClients }: DirectionClientProps) {
  return (
    <>
      {/* Hero */}
      <Section bg="dark" className="!py-0 -mt-[88px] pt-[88px]">
        {/* Glow effects */}
        <div className="absolute top-[-60px] right-[-40px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(68,63,222,0.25)_0%,transparent_70%)] blur-[40px] z-0 pointer-events-none" />
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
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center py-20 md:py-28">
            <p className="text-sm font-bold tracking-[0.12em] uppercase text-violet-light mb-4">
              Direction Marketing externalisée
            </p>
            <h1 className="mb-6 text-white">
              Directeur Marketing externalisé à temps partiel
            </h1>
            <p className="text-lg leading-8 text-white/60 mb-8 tracking-[-0.02em]">
              La{" "}
              <strong className="text-white/90">
                direction marketing externalisée
              </strong>{" "}
              consiste à confier le pilotage de sa stratégie marketing à un
              expert externe, à temps partiel, plutôt que de recruter un
              directeur marketing en interne. Je deviens votre bras droit
              stratégique pour piloter votre marketing, animer vos équipes et
              garantir l&apos;exécution de votre feuille de route. La puissance
              d&apos;un{" "}
              <strong className="text-white/90">
                CMO senior (Chief Marketing Officer)
              </strong>
              , la flexibilité en plus.
            </p>
            <Bouton href={CALENDRIER} externe variante="glow">
              Réserver mon diagnostic offert (30min) →
            </Bouton>
          </div>
        </AnimatedSection>
      </Section>

      {/* C'est pour qui */}
      <Section bg="alt">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <h2>Pourquoi choisir une Direction Marketing Externalisée ?</h2>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              titre: "Expertise immédiate",
              texte:
                "15 ans d'expérience en direction d'agence et en consulting",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ),
            },
            {
              titre: "Économie réelle",
              texte:
                "Le prix d'un profil junior pour le cerveau d'un profil senior",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              ),
            },
            {
              titre: "Focus Résultats",
              texte:
                "Je ne suis pas là pour \"occuper un poste\", mais pour faire avancer les chantiers",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                </svg>
              ),
            },
            {
              titre: "Zéro engagement long terme",
              texte:
                "Une collaboration basée sur la confiance et renouvelable",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <AnimatedSection key={item.titre} delay={i * 80}>
              <div className="bg-white rounded-xl p-8 flex gap-4 border border-border hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(22,0,66,0.08)] transition-all duration-200">
                <div className="w-11 h-11 rounded-[10px] bg-gradient-to-br from-violet-bg to-violet-lighter flex items-center justify-center shrink-0">
                  {item.icone}
                </div>
                <div>
                  <h3 className="mb-2">{item.titre}</h3>
                  <p className="text-text text-[15px]">{item.texte}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-8">
          <Bouton href={CALENDRIER} externe>
            Réserver mon diagnostic offert (30min) →
          </Bouton>
        </div>
      </Section>

      {/* 3 niveaux */}
      <Section>
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <h2 className="mb-4">
              Une collaboration en 3 niveaux d&apos;intensité
            </h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em]">
              Chaque entreprise a des besoins différents. J&apos;ai structuré mes
              interventions selon l&apos;implication dont vous avez besoin.
            </p>
          </div>
        </AnimatedSection>
        <div className="space-y-6">
          {[
            {
              niveau: "Niveau 1",
              titre: "Pilotage \"Gouvernance\"",
              ideal:
                "Vous avez déjà une équipe interne ou des prestataires, mais ils manquent de direction.",
              role: "Je suis l'architecte. Je définis la stratégie, je fixe les priorités et je m'assure que tout le monde avance dans la même direction.",
              livrables:
                "1 session de travail hebdomadaire (1h), pilotage de vos prestataires, reporting mensuel de performance, mise à jour du cockpit Notion.",
              tarif: "À partir de 1 600 EUR HT / mois",
            },
            {
              niveau: "Niveau 2",
              titre: "Pilotage \"Croissance\"",
              ideal:
                "Vous voulez que la stratégie avance, mais vous manquez de ressources pour produire.",
              role: "Je suis l'architecte ET le bâtisseur. En plus du pilotage, je prends en charge la création de vos actifs majeurs.",
              livrables:
                "Tout le Niveau 1 + La production d'un actif clé par mois (ex: rédaction d'un cas client, création d'une séquence email complexe, optimisation de vos campagnes Ads).",
              tarif: "À partir de 2 800 EUR HT / mois",
            },
            {
              niveau: "Niveau 3",
              titre: "Pilotage \"CMO complet\"",
              ideal:
                "Vous voulez déléguer l'intégralité du pôle marketing pour vous concentrer sur votre métier de dirigeant.",
              role: "Je gère votre marketing comme une entreprise à part entière.",
              livrables:
                "Tout le Niveau 2 + Présence renforcée, recrutement et formation de vos futurs collaborateurs internes, gestion globale du budget marketing et ROI consolidé.",
              tarif: "Sur devis (selon complexité)",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.niveau} delay={i * 80}>
              <div className="bg-bg-alt rounded-xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold tracking-[0.08em] uppercase text-violet bg-violet-bg px-3 py-1 rounded-full">
                    {item.niveau}
                  </span>
                  <h3>{item.titre}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-heading mb-1">
                        Idéal si :
                      </p>
                      <p className="text-text text-[15px]">{item.ideal}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-heading mb-1">
                        Mon rôle :
                      </p>
                      <p className="text-text text-[15px]">{item.role}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-heading mb-1">
                        Livrables récurrents :
                      </p>
                      <p className="text-text text-[15px]">{item.livrables}</p>
                    </div>
                    <p className="text-lg font-bold text-heading font-[family-name:var(--font-archivo)]">
                      {item.tarif}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Ma méthode */}
      <Section bg="alt">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-violet mb-4">
              Transparence totale
            </p>
            <h2 className="mb-4">Ma méthode</h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em]">
              Pas d&apos;effet &quot;boîte noire&quot;. Tout est accessible en
              temps réel :
            </p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              titre: "Cockpit Notion",
              texte:
                "Vous voyez l'avancement de chaque tâche, les ressources créées, les décisions prises, les CR de réunions...",
            },
            {
              titre: "Rythme hebdomadaire",
              texte:
                "Un point fixe pour débloquer les sujets, rester alignés et garder un rythme soutenu.",
            },
            {
              titre: "Bilan mensuel",
              texte:
                "On analyse les chiffres, on apprend de ce qui n'a pas fonctionné et on ajuste le plan pour la suite.",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.titre} delay={i * 80}>
              <div className="bg-white rounded-xl p-8 text-center border border-border hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(22,0,66,0.08)] transition-all duration-200">
                <h3 className="mb-3">{item.titre}</h3>
                <p className="text-text text-[15px]">{item.texte}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Pré-requis */}
      <Section>
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto">
            <div className="bg-violet-bg rounded-xl p-8 md:p-10 border border-violet-lighter">
              <h3 className="mb-4">
                Pré-requis : commencer sur des bases saines
              </h3>
              <p className="text-text leading-relaxed mb-4">
                Pour que mon pilotage soit efficace, je ne prends pas de mission
                de Direction Marketing sans être passé par le Sprint Fondations
                (ou un audit approfondi équivalent).
              </p>
              <p className="text-text leading-relaxed mb-6">
                Pourquoi ? Parce que je refuse de piloter sur du flou. Nous devons
                d&apos;abord valider votre message, vos outils et votre roadmap de
                90 jours pour que mon intervention mensuelle soit immédiatement
                rentable.
              </p>
              <LienTracker
                href="/sprint-fondations"
                event="offre"
                label="Sprint Fondations"
                className="text-violet font-medium text-sm hover:text-violet-hover transition-colors"
              >
                Découvrir le Sprint Fondations →
              </LienTracker>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA final */}
      <Section bg="dark">
        <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[radial-gradient(ellipse,rgba(68,63,222,0.2)_0%,transparent_70%)] blur-[40px] z-0 pointer-events-none" />
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center py-8">
            <p className="text-sm font-bold tracking-[0.12em] uppercase text-violet-light mb-4">
              On y va ?
            </p>
            <h2 className="mb-6 text-white">
              Déléguez votre marketing à un expert
            </h2>
            <p className="text-lg leading-8 text-white/60 mb-8 tracking-[-0.02em]">
              Si vous sentez que votre marketing freine votre croissance,
              discutons-en. Nous évaluerons ensemble le niveau d&apos;intensité
              dont votre entreprise a besoin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Bouton href={CALENDRIER} externe variante="glow">
                Réserver mon diagnostic offert (30min) →
              </Bouton>
              <LienTracker
                href="/qui-suis-je"
                event="parcours"
                label="direction-marketing-externalise"
                className="text-violet-light font-medium text-sm hover:text-white transition-colors"
              >
                En savoir plus sur mon parcours →
              </LienTracker>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Logos clients */}
      <Section>
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-8">
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted">
              Plus de 120 entreprises déjà accompagnées, dont :
            </p>
          </div>
          <GrilleLogos logos={logoClients} />
        </AnimatedSection>
      </Section>
    </>
  );
}
