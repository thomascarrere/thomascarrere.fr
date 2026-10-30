"use client";

import Image from "next/image";
import { Section } from "@/components/section";
import { Bouton } from "@/components/bouton";
import { CarteTemoignage } from "@/components/carte-temoignage";
import { Accordion } from "@/components/accordion";
import { GrilleLogos } from "@/components/grille-logos";
import { LienTracker } from "@/components/lien-tracker";
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
          <h1 className="mb-6 text-white">
            <span className="block text-sm font-bold leading-normal tracking-[0.12em] uppercase text-violet-light mb-4 font-[family-name:var(--font-inter)]">
              Consultant marketing pour PME et TPE à La Réunion
            </span>
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
              près de 150 entreprises accompagnées
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
        <h2 className="sr-only">Vos besoins</h2>
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
              <div className="h-full bg-white rounded-xl p-10 text-center flex flex-col items-center border border-border hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(22,0,66,0.08)] transition-all duration-200">
                <div className="w-11 h-11 rounded-[10px] bg-gradient-to-br from-violet-bg to-violet-lighter flex items-center justify-center mb-4">
                  {item.icone}
                </div>
                <h3 className="mb-3 flex min-h-[62px] items-center justify-center text-center">{item.titre}</h3>
                <p className="text-text">{item.texte}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Parcours */}
      <Section id="parcours">
        <AnimatedSection>
          <div className="grid md:grid-cols-[minmax(0,1fr)_380px] gap-12 items-center">
            <div>
              <p className="text-sm font-bold tracking-[0.08em] uppercase text-violet mb-4">
                Qui suis-je
              </p>
              <h2 className="mb-6">Mon parcours en 3 phrases</h2>
              <p className="text-lg md:text-xl leading-8 md:leading-9 text-text tracking-[-0.02em] max-w-[62ch]">
                J&apos;ai été chef d&apos;entreprise avant d&apos;être consultant :
                dans le digital depuis 2011, j&apos;ai dirigé pendant 7 ans Du
                Simple au Double, une agence de 10 à 15 personnes à La Réunion,
                avec la trésorerie, les recrutements et les nuits courtes qui vont
                avec. En accompagnant environ 150 entreprises, plus de 120 avec
                l&apos;agence puis une trentaine en direct, j&apos;ai vu ce qui
                fait perdre de l&apos;argent en marketing : des actions isolées,
                des prestataires sans cap, des chiffres que personne ne regarde.
                Mon métier aujourd&apos;hui : poser le système qui manque, puis le
                piloter avec vous.
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
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/images/thomas-conference.jpg"
                alt="Thomas Carrère en conférence"
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160042]/10 to-transparent" />
            </div>
          </div>
          <div className="mt-16">
            <GrilleLogos logos={logoClients} />
          </div>
        </AnimatedSection>
      </Section>

      {/* Mon rôle */}
      <Section bg="alt" id="role">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
              Mon rôle
            </p>
            <h2 className="mb-6">
              Je prends la place du directeur marketing que vous n&apos;avez pas
              encore.
            </h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em]">
              Vous gardez la décision. Je traduis votre vision en plan, je
              coordonne ceux qui exécutent et je vous rends des comptes chaque
              mois.
            </p>
          </div>
        </AnimatedSection>

        {/* Organigramme en HTML (lisible par les moteurs) */}
        <AnimatedSection>
          <div className="flex flex-col items-center max-w-[840px] mx-auto">
            <CaseOrganigramme titre="Vous" desc="Dirigeant : vision, arbitrages" />
            <div className="w-0.5 h-6 bg-border" />
            <CaseOrganigramme
              titre="Thomas"
              desc="Direction marketing : stratégie, plan, contrôle"
              accent
            />
            <div className="w-0.5 h-6 bg-border" />
            <div className="hidden md:block h-0.5 bg-border w-2/3" />
            <div className="grid md:grid-cols-3 gap-3 md:gap-4 w-full">
              {[
                { titre: "Votre équipe", desc: "Chargé·e de com, commerciaux" },
                { titre: "Vos prestataires", desc: "Agence, CM, photographe" },
                { titre: "Vos outils", desc: "Site, CRM, publicité" },
              ].map((item) => (
                <div key={item.titre} className="flex flex-col items-center">
                  <div className="hidden md:block w-0.5 h-6 bg-border" />
                  <CaseOrganigramme titre={item.titre} desc={item.desc} />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-[840px] mx-auto mt-16">
            <h3 className="text-center mb-8">
              Ce que je fais. Ce que je ne fais pas.
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-8 border border-border">
                <p className="text-xs font-bold tracking-[0.08em] uppercase text-emerald-700 mb-4">
                  Je fais
                </p>
                <ul className="space-y-3">
                  {[
                    "Fixer les priorités avec vous et les tenir",
                    "Choisir, briefer et contrôler vos prestataires",
                    "Faire monter en compétence votre équipe",
                    "Lire les chiffres chaque mois et ajuster",
                    "Documenter pour que tout tienne sans moi",
                  ].map((texte) => (
                    <li key={texte} className="flex gap-3 text-text">
                      <span aria-hidden="true" className="font-bold text-emerald-700 w-3 shrink-0">+</span>
                      <span>{texte}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 border border-border">
                <p className="text-xs font-bold tracking-[0.08em] uppercase text-amber-700 mb-4">
                  Je ne fais pas
                </p>
                <ul className="space-y-3">
                  {[
                    "Publier vos posts à la place de votre équipe",
                    "Toucher des commissions sur les outils",
                    "Vous vendre des actions qui ne servent pas le chiffre d'affaires",
                    "Décider à votre place",
                    "Vous noyer dans le jargon",
                  ].map((texte) => (
                    <li key={texte} className="flex gap-3 text-text">
                      <span aria-hidden="true" className="font-bold text-amber-700 w-3 shrink-0">−</span>
                      <span>{texte}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Pourquoi moi */}
      <Section id="pourquoi">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <h2>Pourquoi me confier votre marketing</h2>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              titre: "Un ancien dirigeant",
              phrase: "Je parle votre langue.",
              preuve: "7 ans à la tête d'une agence de 10 à 15 personnes",
            },
            {
              titre: "De l'expérience terrain",
              phrase: "J'ai vu beaucoup de cas avant le vôtre.",
              preuve: "Environ 150 entreprises accompagnées depuis 2011",
            },
            {
              titre: "Un pédagogue",
              phrase: "Votre équipe comprend et progresse.",
              preuve: "Enseignant en Master depuis 2013",
            },
            {
              titre: "Indépendant des outils",
              phrase: "Je recommande ce qui vous sert.",
              preuve: "Aucune commission, jamais",
            },
            {
              titre: "Opérationnel vite",
              phrase: "Diagnostic et plan dès le premier mois.",
              preuve: "Pack Fondations : 15 jours",
            },
            {
              titre: "Une passation propre",
              phrase: "Ça tient après moi.",
              preuve: "Procédures documentées en fin de mission",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.titre} delay={(i % 3) * 100}>
              <div className="h-full bg-white rounded-xl p-8 border border-border hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(22,0,66,0.08)] transition-all duration-200">
                <h3 className="mb-2">{item.titre}</h3>
                <p className="text-text">{item.phrase}</p>
                <p className="text-sm font-medium text-violet mt-3">{item.preuve}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Offres */}
      <Section bg="alt" id="offres">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
              Offres
            </p>
            <h2>On commence par les fondations. Ensuite, vous choisissez.</h2>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] items-center">
            <div>
            <CarteOffre
              etape="Étape 1"
              nom="Pack Fondations"
              prix="2 900 €"
              unite="HT, 15 jours"
              texte="Positionnement clarifié, diagnostic complet et plan d'action sur 90 jours. Il vous reste, même si on s'arrête là."
              href="/sprint-fondations"
              offre="Sprint Fondations"
            />
            </div>
            <div aria-hidden="true" className="flex justify-center py-3 md:py-0 text-violet">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 md:rotate-0">
                <line x1="4" y1="12" x2="20" y2="12" /><polyline points="14 6 20 12 14 18" />
              </svg>
            </div>
            <div className="flex flex-col gap-4">
              <CarteOffre
                etape="Étape 2, option A"
                nom="Je prends les commandes"
                prix="1 600 à 4 500 €"
                unite="HT / mois"
                texte="Direction Marketing Externalisée, 2 à 5 jours par mois."
                href="/direction-marketing-externalise"
                offre="Direction Marketing Externalisee"
                accent
              />
              <CarteOffre
                etape="Étape 2, option B"
                nom="Votre équipe garde les commandes"
                prix="800 €"
                unite="HT / mois"
                texte="Coaching Hebdo : 1 h par semaine pour cadencer votre responsable marketing."
                href="/coaching-hebdo"
                offre="Coaching Hebdo"
              />
            </div>
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

      {/* Contact final */}
      <Section bg="dark" id="contact">
        <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[radial-gradient(ellipse,rgba(68,63,222,0.2)_0%,transparent_70%)] blur-[40px] z-0 pointer-events-none" />
        <div className="max-w-[840px] mx-auto text-center py-8">
          <h2 className="mb-6 text-white">
            Parlons de votre marketing pendant 30 minutes.
          </h2>
          <p className="text-lg leading-8 text-white/60 mb-8 tracking-[-0.02em]">
            Dites-moi où vous en êtes et ce qui coince. Je vous dis franchement
            si je peux vous aider, et comment.
          </p>
          <Bouton href={CALENDRIER} externe variante="glow">
            Réserver 30 minutes →
          </Bouton>
        </div>
      </Section>
    </>
  );
}

function CaseOrganigramme({
  titre,
  desc,
  accent = false,
}: {
  titre: string;
  desc: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`w-full max-w-[320px] mx-auto rounded-xl px-5 py-4 text-center ${
        accent
          ? "bg-violet-bg border-2 border-violet"
          : "bg-white border border-border"
      }`}
    >
      <p className="font-archivo font-bold text-heading">{titre}</p>
      <p className="text-sm text-text-muted">{desc}</p>
    </div>
  );
}

function CarteOffre({
  etape,
  nom,
  prix,
  unite,
  texte,
  href,
  offre,
  accent = false,
}: {
  etape: string;
  nom: string;
  prix: string;
  unite: string;
  texte: string;
  href: string;
  offre: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`h-full bg-white rounded-xl p-8 flex flex-col gap-3 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(22,0,66,0.08)] transition-all duration-200 ${
        accent ? "border-2 border-violet" : "border border-border"
      }`}
    >
      <p className="text-xs font-bold tracking-[0.08em] uppercase text-violet">
        {etape}
      </p>
      <h3>{nom}</h3>
      <p className="font-archivo font-bold text-heading text-2xl tracking-tight tabular-nums">
        {prix} <span className="font-[family-name:var(--font-inter)] font-medium text-sm text-text-muted">{unite}</span>
      </p>
      <p className="text-text">{texte}</p>
      <LienTracker
        href={href}
        event="offre"
        label={offre}
        className="mt-auto text-violet font-medium text-sm hover:text-violet-hover transition-colors"
      >
        Voir le détail →
      </LienTracker>
    </div>
  );
}
