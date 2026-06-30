"use client";

import { Section } from "@/components/section";
import { Bouton } from "@/components/bouton";
import { LienTracker } from "@/components/lien-tracker";
import { AnimatedSection } from "@/components/animated-section";
import { Accordion } from "@/components/accordion";

const CALENDRIER = "https://calendar.app.google/xaB44wDhgrkCX8Rj8";

const TABLEAU = [
  {
    critere: "Coût",
    externalise: "Maîtrisé, selon le besoin",
    interne: "Élevé et fixe (salaire + charges)",
    agence: "Variable, souvent à l'action",
  },
  {
    critere: "Séniorité",
    externalise: "Senior immédiatement",
    interne: "Selon le profil recruté",
    agence: "Variable selon l'interlocuteur",
  },
  {
    critere: "Délai de mise en route",
    externalise: "Quelques jours",
    interne: "Plusieurs mois",
    agence: "Quelques semaines",
  },
  {
    critere: "Vision stratégique",
    externalise: "Oui, c'est le coeur du rôle",
    interne: "Oui, si profil senior",
    agence: "Souvent orientée exécution",
  },
  {
    critere: "Neutralité sur les outils",
    externalise: "Totale (aucune commission)",
    interne: "Oui",
    agence: "Parfois liée à ses prestations",
  },
  {
    critere: "Flexibilité",
    externalise: "Forte (sans engagement long)",
    interne: "Faible",
    agence: "Moyenne",
  },
];

type GuideClientProps = {
  faq: { question: string; reponse: string }[];
};

export function GuideClient({ faq }: GuideClientProps) {
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
          <div className="max-w-[840px] mx-auto text-center py-20 md:py-28">
            <p className="text-sm font-bold tracking-[0.12em] uppercase text-violet-light mb-4">
              Guide
            </p>
            <h1 className="mb-6 text-white">
              Directeur marketing externalisé : rôle, missions et prix
            </h1>
            <p className="text-sm text-white/50 mb-6">
              Par{" "}
              <span className="font-medium text-white/80">Thomas Carrère</span>{" "}
              &middot; Publié le 22 juin 2026 &middot; Mis à jour le 25 juin 2026
              &middot; 6 min de lecture
            </p>
            <p className="text-lg leading-8 text-white/60 mb-8 tracking-[-0.02em]">
              Recruter un directeur marketing coûte cher, prend des mois, et
              reste un pari quand on est une PME. D&apos;où une troisième voie de
              plus en plus choisie par les dirigeants :{" "}
              <strong className="text-white/90">
                le directeur marketing externalisé
              </strong>
              . Concrètement, c&apos;est un cadre marketing senior qui pilote
              votre marketing à temps partagé, sans que vous ayez à
              l&apos;embaucher. Voici ce qu&apos;il fait vraiment, pour qui
              c&apos;est pertinent, et combien ça coûte. Sans jargon.
            </p>
            <Bouton href={CALENDRIER} externe variante="glow">
              Réserver mon diagnostic offert (30min) →
            </Bouton>
          </div>
      </Section>

      {/* Définition */}
      <Section bg="alt">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto">
            <h2 className="mb-6">Qu&apos;est-ce qu&apos;un directeur marketing externalisé ?</h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em] mb-6">
              Un directeur marketing externalisé est un expert qui prend en
              charge la direction de votre marketing de façon ponctuelle ou
              récurrente, depuis l&apos;extérieur de l&apos;entreprise, plutôt
              qu&apos;en tant que salarié. Il définit la stratégie, fixe les
              priorités, pilote les personnes qui exécutent (équipe interne ou
              prestataires) et s&apos;assure que les actions servent vraiment le
              chiffre d&apos;affaires.
            </p>
            <p className="text-lg leading-8 text-text tracking-[-0.02em]">
              En clair : vous avez la tête stratégique d&apos;un directeur
              marketing, sans le salaire ni l&apos;engagement d&apos;un
              recrutement à temps plein. Il intervient quelques jours par mois,
              ou via un accompagnement cadencé, selon vos besoins.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Vocabulaire */}
      <Section>
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto">
            <h2 className="mb-6">
              Directeur, direction, CMO, responsable marketing externalisé : on
              parle de quoi ?
            </h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em] mb-6">
              Ces termes désignent à peu près la même réalité, avec des nuances :
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  terme: "Directeur marketing externalisé",
                  def: "ou direction marketing externalisée : le pilotage stratégique confié à un expert externe.",
                },
                {
                  terme: "CMO externalisé (Chief Marketing Officer)",
                  def: "exactement la même chose, avec le vocabulaire anglo-saxon. On parle parfois de CMO à temps partagé ou de CMO freelance.",
                },
                {
                  terme: "Responsable ou manager marketing externalisé",
                  def: "souvent un niveau d'intervention plus opérationnel, plus proche de l'exécution.",
                },
                {
                  terme: "Équipe marketing externalisée",
                  def: "quand c'est un dispositif complet (pilotage plus production) qui est délégué.",
                },
              ].map((item) => (
                <div key={item.terme} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet shrink-0 mt-2.5" />
                  <p className="text-text leading-relaxed">
                    <span className="font-semibold text-heading">
                      {item.terme}
                    </span>{" "}
                    : {item.def}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-lg leading-8 text-text tracking-[-0.02em]">
              Le point commun : une compétence senior qui vient de
              l&apos;extérieur, sans poste salarié à la clé.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Rôle et missions */}
      <Section bg="alt">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <h2 className="mb-4">Le rôle et les missions concrètes</h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em]">
              Un bon directeur marketing externalisé ne se contente pas de donner
              des avis. Il structure et il fait avancer. Ses missions typiques :
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                titre: "Définir la stratégie et le cap",
                texte:
                  "Clarifier votre positionnement, votre message et vos priorités. Répondre à la seule question qui compte : sur quoi met-on l'énergie et l'argent ce trimestre, et pourquoi.",
              },
              {
                titre: "Piloter les personnes qui exécutent",
                texte:
                  "Cadrer et coordonner votre équipe interne, vos freelances et vos agences. C'est souvent là que tout se joue : sans direction, les prestataires avancent en ordre dispersé et le budget part en fumée.",
              },
              {
                titre: "Installer des rituels et un pilotage",
                texte:
                  "Mettre en place un point régulier, un tableau de bord clair, un suivi des indicateurs qui comptent. On arrête de naviguer au doigt mouillé.",
              },
              {
                titre: "Garantir l'exécution",
                texte:
                  "S'assurer que ce qui est décidé est réellement fait, dans les temps, et que ça produit des résultats mesurables.",
              },
            ].map((item) => (
              <div
                key={item.titre}
                className="bg-white rounded-xl p-8 border border-border h-full"
              >
                <h3 className="mb-2">{item.titre}</h3>
                <p className="text-text text-[15px] leading-relaxed">
                  {item.texte}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Pour quelles entreprises */}
      <Section>
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto">
            <h2 className="mb-6">Pour quelles entreprises ? Et quand y recourir ?</h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em] mb-6">
              Le directeur marketing externalisé s&apos;adresse surtout aux TPE
              et PME qui ont dépassé un certain seuil de maturité (en général à
              partir de 500 000 EUR de chiffre d&apos;affaires) mais pour qui un
              recrutement de directeur marketing senior n&apos;a pas encore de
              sens.
            </p>
            <p className="text-base font-semibold text-heading mb-4">
              Les signaux qui montrent qu&apos;il est temps :
            </p>
            <div className="space-y-3">
              {[
                "Votre marketing part dans tous les sens et personne ne tient le cap.",
                "Vous avez des prestataires ou une personne en interne, mais sans direction senior pour les guider.",
                "Vous, dirigeant, passez trop de temps sur le marketing au détriment de votre vrai métier.",
                "Vous lancez des actions sans savoir ce qui marche vraiment.",
              ].map((signal) => (
                <div key={signal} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-violet flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-text">{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Prix */}
      <Section bg="alt">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto">
            <h2 className="mb-6">Combien coûte un directeur marketing externalisé ?</h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em] mb-6">
              Les prix varient selon l&apos;intensité de l&apos;intervention.
              Quelques repères de marché :
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  titre: "Accompagnement ponctuel ou coaching",
                  texte: "à partir de quelques centaines d'euros par mois.",
                },
                {
                  titre: "Pilotage récurrent (quelques jours par mois)",
                  texte:
                    "souvent entre 1 500 et 5 000 EUR HT par mois selon le périmètre.",
                },
                {
                  titre: "À comparer au coût d'un directeur marketing salarié",
                  texte:
                    "entre 60 000 et 90 000 EUR par an, charges comprises, sans compter le délai et le risque de recrutement.",
                },
              ].map((item) => (
                <div key={item.titre} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet shrink-0 mt-2.5" />
                  <p className="text-text leading-relaxed">
                    <span className="font-semibold text-heading">
                      {item.titre}
                    </span>{" "}
                    : {item.texte}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-lg leading-8 text-text tracking-[-0.02em] mb-8">
              L&apos;intérêt de l&apos;externalisé est là : vous payez la
              séniorité dont vous avez besoin, quand vous en avez besoin, sans
              engager un poste fixe.
            </p>
            <div className="bg-white rounded-xl p-8 md:p-10 border border-border">
              <p className="text-text leading-relaxed">
                Côté pratique, je propose trois formats selon votre besoin : un
                audit de cadrage ponctuel (
                <LienTracker
                  href="/sprint-fondations"
                  event="offre"
                  label="guide-sprint"
                  className="text-violet font-medium hover:text-violet-hover transition-colors"
                >
                  Sprint Fondations
                </LienTracker>
                ), un coaching hebdomadaire pour faire monter votre équipe (
                <LienTracker
                  href="/coaching-hebdo"
                  event="offre"
                  label="guide-coaching"
                  className="text-violet font-medium hover:text-violet-hover transition-colors"
                >
                  Le Coaching Hebdo
                </LienTracker>
                ), et une{" "}
                <LienTracker
                  href="/direction-marketing-externalise"
                  event="offre"
                  label="guide-dme"
                  className="text-violet font-medium hover:text-violet-hover transition-colors"
                >
                  direction marketing externalisée
                </LienTracker>{" "}
                récurrente.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Tableau comparatif */}
      <Section>
        <AnimatedSection>
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-8">
              Directeur externalisé, recrutement interne ou agence : que choisir ?
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-[15px] border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-bg-alt">
                    <th className="p-4 font-semibold text-heading">Critère</th>
                    <th className="p-4 font-semibold text-violet bg-violet-bg">
                      Directeur externalisé
                    </th>
                    <th className="p-4 font-semibold text-heading">
                      Recrutement interne
                    </th>
                    <th className="p-4 font-semibold text-heading">Agence</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLEAU.map((ligne) => (
                    <tr key={ligne.critere} className="border-t border-border">
                      <td className="p-4 font-medium text-heading">
                        {ligne.critere}
                      </td>
                      <td className="p-4 text-text bg-violet-bg/40">
                        {ligne.externalise}
                      </td>
                      <td className="p-4 text-text">{ligne.interne}</td>
                      <td className="p-4 text-text">{ligne.agence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-lg leading-8 text-text tracking-[-0.02em] mt-8">
              Aucune option n&apos;est meilleure dans l&apos;absolu : tout dépend
              de votre maturité et de votre budget. L&apos;externalisé est
              souvent la bonne marche intermédiaire avant de structurer une
              équipe interne.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Déroulé d'une mission */}
      <Section bg="alt">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto">
            <h2 className="mb-8">Comment se passe une mission, concrètement ?</h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em] mb-8">
              La logique que j&apos;applique tient en trois temps :
            </p>
            <div className="space-y-6">
              {[
                {
                  num: "01",
                  titre: "On pose les bases.",
                  texte:
                    "Avant de piloter, on clarifie le message, les outils et la feuille de route. C'est l'objet d'un audit de cadrage initial.",
                },
                {
                  num: "02",
                  titre: "On installe la cadence.",
                  texte:
                    "Rituels, tableau de bord, priorités du mois. Le marketing arrête de dépendre de l'inspiration du moment.",
                },
                {
                  num: "03",
                  titre: "On pilote dans la durée.",
                  texte:
                    "Ajustements mensuels, coordination des prestataires, mesure des résultats. On garde le cap et on corrige ce qui ne marche pas.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="bg-white rounded-xl p-8 flex gap-6 border border-border"
                >
                  <span className="text-violet font-bold text-2xl font-[family-name:var(--font-archivo)] shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="mb-2">{item.titre}</h3>
                    <p className="text-text text-[15px] leading-relaxed">
                      {item.texte}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* FAQ */}
      <Section>
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto">
            <div className="text-center mb-12">
              <h2>Questions fréquentes</h2>
            </div>
            <Accordion items={faq} />
          </div>
        </AnimatedSection>
      </Section>

      {/* Auteur (E-E-A-T) */}
      <Section bg="alt">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto">
            <div className="bg-white rounded-xl p-8 border border-border">
              <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-3">
                Écrit par
              </p>
              <p className="text-text leading-relaxed">
                <span className="font-semibold text-heading">
                  Thomas Carrère
                </span>
                , consultant marketing, 15 ans d&apos;expérience et ancien
                dirigeant d&apos;agence. J&apos;accompagne les PME et TPE en
                direction marketing externalisée depuis La Réunion et en
                métropole.{" "}
                <LienTracker
                  href="/qui-suis-je"
                  event="parcours"
                  label="guide-dme"
                  className="text-violet font-medium hover:text-violet-hover transition-colors"
                >
                  En savoir plus sur mon parcours →
                </LienTracker>
              </p>
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
              Vous vous demandez si c&apos;est la bonne solution pour vous ?
            </h2>
            <p className="text-lg leading-8 text-white/60 mb-8 tracking-[-0.02em]">
              Réservons 30 minutes pour faire le point sur votre situation, sans
              engagement.
            </p>
            <Bouton href={CALENDRIER} externe variante="glow">
              Réserver mon diagnostic offert (30min) →
            </Bouton>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
