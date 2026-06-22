"use client";

import { Section } from "@/components/section";
import { Bouton } from "@/components/bouton";
import { LienTracker } from "@/components/lien-tracker";
import { AnimatedSection } from "@/components/animated-section";
import { Accordion } from "@/components/accordion";

const CALENDRIER = "https://calendar.app.google/xaB44wDhgrkCX8Rj8";

type CoachingClientProps = {
  faq: { question: string; reponse: string }[];
};

export function CoachingClient({ faq }: CoachingClientProps) {
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
              Coaching marketing à distance
            </p>
            <h1 className="mb-6 text-white">
              Un directeur marketing pour votre équipe, 1 heure par semaine
            </h1>
            <p className="text-lg leading-8 text-white/60 mb-8 tracking-[-0.02em]">
              Vous avez confié votre marketing à quelqu&apos;un en interne :
              souvent une personne seule, parfois junior, sans profil senior pour
              la guider. Résultat : ça part dans tous les sens, au doigt mouillé,
              et la semaine passe sans cap clair.{" "}
              <strong className="text-white/90">Le Coaching Hebdo</strong>, c&apos;est
              le rendez-vous qui change ça : chaque semaine, je drive la personne
              aux commandes de votre marketing. On regarde les chiffres, on
              décide, et elle repart avec un cap clair pour les 7 jours qui
              suivent.{" "}
              <strong className="text-white/90">
                La séniorité d&apos;un directeur marketing, sans le coût d&apos;un
                recrutement.
              </strong>
            </p>
            <Bouton href={CALENDRIER} externe variante="glow">
              Réserver mon diagnostic offert (30min) →
            </Bouton>
          </div>
        </AnimatedSection>
      </Section>

      {/* Le principe du coach sportif */}
      <Section bg="alt">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center">
            <h2 className="mb-6">
              Le principe du coach sportif, appliqué à votre marketing
            </h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em] mb-6">
              Personne ne progresse en courant un marathon une fois par an. On
              progresse avec un entraîneur, une cadence, et quelqu&apos;un qui
              regarde vos chiffres sans complaisance. C&apos;est exactement ça.
            </p>
            <p className="text-lg leading-8 text-text tracking-[-0.02em]">
              Une visio d&apos;1h, chaque semaine. Pas de théorie, pas de rapport
              de 40 pages. On regarde où en est votre marketing, on tranche les
              décisions en attente, et on cale les 2 ou 3 actions qui comptent
              vraiment pour la semaine. La semaine suivante, on vérifie. Et on
              recommence. On coache celui qui s&apos;entraîne dans la semaine : la
              personne qui a le temps d&apos;exécuter, pas le dirigeant débordé
              entre deux réunions.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Concrètement chaque semaine */}
      <Section>
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <h2>Concrètement, il se passe quoi chaque semaine ?</h2>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              num: "01",
              titre: "On regarde les chiffres",
              texte:
                "Vos vrais indicateurs, pas une usine à gaz. Ce qui a bougé, ce qui coince.",
            },
            {
              num: "02",
              titre: "On décide",
              texte:
                "Les arbitrages que vous repoussez depuis trois semaines, on les tranche ensemble, à voix haute.",
            },
            {
              num: "03",
              titre: "On cale la semaine",
              texte:
                "Vous repartez avec 2-3 actions priorisées et un cap net. Pas une to-do de 30 lignes.",
            },
            {
              num: "04",
              titre: "On garde le rythme",
              texte:
                "Le rendez-vous est fixe. C'est ce qui crée la régularité que vous n'arrivez pas à tenir seul.",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.num} delay={i * 80}>
              <div className="bg-bg-alt rounded-xl p-8 flex gap-5 h-full">
                <span className="text-violet font-bold text-2xl font-[family-name:var(--font-archivo)] shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="mb-2">{item.titre}</h3>
                  <p className="text-text text-[15px]">{item.texte}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Ce que ça vous apporte */}
      <Section bg="alt">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center">
            <h2 className="mb-6">Ce que ça vous apporte</h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em]">
              Une cadence que vous ne tiendriez pas tout seul. Un oeil senior et
              extérieur sur vos décisions. Et surtout, la fin du marketing qui
              dort : chaque semaine, quelque chose avance.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Pour qui */}
      <Section>
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto">
            <div className="text-center mb-10">
              <h2>Pour qui (et pour qui ce n&apos;est pas)</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-bg-alt rounded-xl p-8 md:p-10">
                <p className="text-text leading-relaxed">
                  <strong className="text-heading">
                    La cible idéale : votre équipe marketing en place (même
                    d&apos;une seule personne).
                  </strong>{" "}
                  Un profil qui exécute le marketing au quotidien, souvent seul,
                  parfois junior, et qui a besoin d&apos;un oeil senior chaque
                  semaine pour prioriser, décider et progresser. Pour vous,
                  dirigeant, c&apos;est la séniorité d&apos;un directeur marketing
                  pour faire grandir votre recrue, sans le coût d&apos;un
                  recrutement. Et comme c&apos;est elle qui exécute entre les
                  séances, le rythme hebdomadaire produit vraiment des résultats.
                </p>
              </div>
              <div className="bg-bg-alt rounded-xl p-8 md:p-10">
                <p className="text-text leading-relaxed mb-4">
                  <strong className="text-heading">
                    Ça marche aussi pour le dirigeant hands-on
                  </strong>
                  , à une condition : avoir réellement le temps de mettre en
                  oeuvre les actions entre deux rendez-vous. Si votre agenda est
                  déjà saturé, le coaching tournera à vide : dans ce cas,
                  c&apos;est plutôt la{" "}
                  <LienTracker
                    href="/direction-marketing-externalise"
                    event="offre"
                    label="Direction Marketing Externalisee"
                    className="text-violet font-medium hover:text-violet-hover transition-colors"
                  >
                    Direction Marketing Externalisée
                  </LienTracker>{" "}
                  qu&apos;il vous faut (je pilote et je fais faire).
                </p>
                <p className="text-text leading-relaxed">
                  Ce n&apos;est pas pour vous si vous cherchez quelqu&apos;un qui
                  fait à votre place : là encore, c&apos;est la Direction
                  Marketing Externalisée.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Où ça se place dans mes offres */}
      <Section bg="alt">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Où ça se place dans mes offres</h2>
              <p className="text-lg leading-8 text-text tracking-[-0.02em]">
                Trois niveaux d&apos;engagement, un seul fil conducteur : sortir
                du flou.
              </p>
              <p className="text-text mt-4">
                Pour comprendre le métier de directeur marketing externalisé,
                consultez le{" "}
                <LienTracker
                  href="/guide/directeur-marketing-externalise"
                  event="offre"
                  label="guide-coaching"
                  className="text-violet font-medium hover:text-violet-hover transition-colors"
                >
                  guide complet
                </LienTracker>
                .
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  titre: "Sprint Fondations",
                  texte: "On pose les rails (une fois).",
                  href: "/sprint-fondations",
                  lien: "Découvrir le Sprint Fondations →",
                  label: "Sprint Fondations",
                },
                {
                  titre: "Le Coaching Hebdo",
                  texte: "Je vous drive chaque semaine, vous exécutez.",
                  href: null,
                  lien: null,
                  label: null,
                },
                {
                  titre: "Direction Marketing Externalisée",
                  texte: "Je pilote et je fais faire.",
                  href: "/direction-marketing-externalise",
                  lien: "Découvrir la Direction Marketing Externalisée →",
                  label: "Direction Marketing Externalisee",
                },
              ].map((item) => (
                <div
                  key={item.titre}
                  className={`rounded-xl p-6 md:p-8 border ${
                    item.href === null
                      ? "bg-violet-bg border-violet-lighter"
                      : "bg-white border-border"
                  }`}
                >
                  <h3 className="mb-2">{item.titre}</h3>
                  <p className="text-text text-[15px] mb-3">{item.texte}</p>
                  {item.href && item.lien && item.label && (
                    <LienTracker
                      href={item.href}
                      event="offre"
                      label={item.label}
                      className="text-violet font-medium text-sm hover:text-violet-hover transition-colors"
                    >
                      {item.lien}
                    </LienTracker>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* L'investissement */}
      <Section>
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center">
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-violet mb-4">
              L&apos;investissement
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-5xl md:text-6xl font-bold text-heading font-[family-name:var(--font-archivo)] tracking-[-0.04em]">
                800 EUR
              </span>
              <span className="text-text-muted text-lg">HT / mois</span>
            </div>
            <p className="text-lg leading-8 text-text tracking-[-0.02em] max-w-[620px] mx-auto">
              Une visio d&apos;1h par semaine, 100 % à distance. Sans engagement
              de durée bloquant : on avance par trimestre, le temps de voir des
              résultats concrets.
            </p>
            <div className="mt-8">
              <Bouton href={CALENDRIER} externe variante="glow">
                Réserver mon diagnostic offert (30min) →
              </Bouton>
            </div>
          </div>
        </AnimatedSection>
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

      {/* CTA final */}
      <Section bg="dark">
        <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[radial-gradient(ellipse,rgba(68,63,222,0.2)_0%,transparent_70%)] blur-[40px] z-0 pointer-events-none" />
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center py-8">
            <p className="text-sm font-bold tracking-[0.12em] uppercase text-violet-light mb-4">
              On y va ?
            </p>
            <h2 className="mb-6 text-white">
              Donnez une cadence à votre marketing
            </h2>
            <p className="text-lg leading-8 text-white/60 mb-8 tracking-[-0.02em]">
              30 minutes pour faire le point sur la personne qui pilote votre
              marketing et voir si le Coaching Hebdo est la bonne marche.
              C&apos;est gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Bouton href={CALENDRIER} externe variante="glow">
                Réserver mon diagnostic offert (30min) →
              </Bouton>
              <LienTracker
                href="/qui-suis-je"
                event="parcours"
                label="coaching-hebdo"
                className="text-violet-light font-medium text-sm hover:text-white transition-colors"
              >
                En savoir plus sur mon parcours →
              </LienTracker>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
