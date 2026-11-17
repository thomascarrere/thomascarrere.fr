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
        {/* Portrait : grand, à droite, à partir de 1280 px ; en dessous, une
            signature sous le bouton pour garder le bouton visible sur mobile. */}
        <div className="py-20 md:py-28 xl:grid xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-12 xl:items-center">
          {/* Aligné à gauche sur mobile (plus lisible sur un écran étroit),
              centré sur tablette, à gauche avec le portrait à partir de 1280 px. */}
          <div className="max-w-[840px] mx-auto text-left md:text-center xl:mx-0 xl:text-left">
          <h1 className="mb-6 text-white">
            <span className="block text-sm font-bold leading-normal tracking-[0.12em] uppercase text-violet-light mb-4 font-[family-name:var(--font-inter)]">
              Directeur marketing externalisé pour TPE et PME
            </span>
            Le directeur marketing{" "}
            <span className="bg-gradient-to-r from-violet-light to-violet bg-clip-text text-transparent">
              que vous n&apos;avez pas encore
            </span>
          </h1>
          <p className="text-lg leading-8 text-white/60 mb-4 tracking-[-0.02em]">
            Vous gardez la décision. Je traduis votre vision en plan, je
            coordonne ceux qui exécutent et je vous rends des comptes chaque
            mois.
          </p>
          <p className="text-lg leading-8 text-white/60 mb-8 tracking-[-0.02em]">
            <strong className="text-white/90">Ancien dirigeant d&apos;agence</strong>
            , j&apos;ai accompagné{" "}
            <strong className="text-white/90">
              plus de 150 entreprises
            </strong>{" "}
            depuis 2011. Basé à La Réunion, je travaille à distance avec des
            entreprises réunionnaises et de métropole.
          </p>
          <Bouton href={CALENDRIER} externe variante="glow">
            Réserver un échange de 30 minutes →
          </Bouton>
          <div className="mt-8 flex items-center justify-start md:justify-center gap-3 xl:hidden">
            {/* alt vide : le nom est écrit juste à côté */}
            <Image
              src="/images/thomas-portrait.webp"
              alt=""
              width={104}
              height={104}
              loading="eager"
              className="w-[52px] h-[52px] rounded-full object-cover object-top ring-2 ring-white/25 shrink-0"
            />
            <p className="text-sm leading-snug text-white/70 text-left">
              <span className="block font-medium text-white">Thomas Carrère</span>
              Enseignant en Master depuis 2013
            </p>
          </div>
          </div>
          <div className="hidden xl:block relative aspect-[4/5] rounded-xl overflow-hidden ring-1 ring-white/15">
            <Image
              src="/images/thomas-portrait.webp"
              alt="Thomas Carrère"
              fill
              sizes="340px"
              loading="eager"
              className="object-cover object-top"
            />
          </div>
        </div>
      </Section>

      {/* Mon rôle */}
      <Section bg="alt" id="role">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
              Mon rôle
            </p>
            <h2>Qui fait quoi</h2>
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
                { titre: "Vos prestataires", desc: "Agence, community manager, photographe" },
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

      {/* Problématiques : ce que les dirigeants disent, sans cartes */}
      <Section>
        <AnimatedSection>
          <h2 className="text-sm font-bold tracking-[0.08em] uppercase text-violet mb-10 font-[family-name:var(--font-inter)] text-left md:text-center">
            Ce que j&apos;entends souvent
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {[
            {
              phrase: "Mon offre est bonne, mais je l'explique mal.",
              reponse:
                "On la rend simple à comprendre, pour qu'elle convainque plus vite.",
            },
            {
              phrase: "Mon équipe perd du temps tous les jours.",
              reponse:
                "Je pose des méthodes et des outils concrets, que vos équipes utilisent vraiment.",
            },
            {
              phrase: "Je ne veux pas d'une agence de plus.",
              reponse:
                "Il vous faut un partenaire qui s'implique à vos côtés : c'est mon rôle.",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.phrase} delay={i * 100}>
              <figure className="h-full border-l-2 border-violet pl-6">
                <blockquote className="font-[family-name:var(--font-archivo)] text-2xl leading-[1.3] tracking-[-0.02em] font-bold text-heading mb-4">
                  « {item.phrase} »
                </blockquote>
                <figcaption className="text-text">{item.reponse}</figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Parcours */}
      <Section bg="alt" id="parcours">
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
                avec. En accompagnant plus de 150 entreprises, dont plus de 120 avec
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
                  className="inline-flex min-h-[44px] items-center text-violet font-medium text-sm hover:text-violet-hover transition-colors"
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

      {/* Pourquoi moi */}
      <Section id="pourquoi">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <h2>Pourquoi me confier votre marketing</h2>
          </div>
        </AnimatedSection>
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 text-left md:text-center">
          {[
            {
              chiffre: "7 ans",
              preuve: "à la tête d'une agence de 10 à 15 personnes",
              phrase: "Un ancien dirigeant : je parle votre langue.",
            },
            {
              chiffre: "+150",
              preuve: "entreprises accompagnées depuis 2011",
              phrase: "J'ai vu beaucoup de cas avant le vôtre.",
            },
            {
              chiffre: "Depuis 2013",
              preuve: "enseignant en Master",
              phrase: "Un pédagogue : votre équipe comprend et progresse.",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.chiffre} delay={i * 100}>
              <div>
                <p className="font-[family-name:var(--font-archivo)] text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-violet leading-none mb-3 whitespace-nowrap">
                  {item.chiffre}
                </p>
                <p className="text-sm font-medium text-heading mb-2">{item.preuve}</p>
                <p className="text-text">{item.phrase}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <ul className="mt-14 pt-10 border-t border-border grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              ["Indépendant des outils", "aucune commission, jamais."],
              ["Opérationnel vite", "diagnostic et plan d'action en 15 jours."],
              ["Une passation propre", "procédures documentées en fin de mission."],
            ].map(([titre, texte]) => (
              <li key={titre} className="flex items-start gap-3 text-text">
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" className="mt-[6px] shrink-0">
                  <circle cx="12" cy="12" r="12" fill="#443fde" />
                  <polyline points="7 12.5 10.5 16 17 9" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>
                  <strong className="text-heading">{titre}</strong> : {texte}
                </span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </Section>

      {/* Offres */}
      <Section bg="alt" id="offres">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
              Offres
            </p>
            <h2>On commence par le diagnostic. Ensuite, vous choisissez.</h2>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] items-center">
            <div>
            <CarteOffre
              etape="Étape 1"
              nom="Diagnostic et plan d'action"
              prix="2 900 €"
              unite="HT, 15 jours"
              texte="Positionnement clarifié, diagnostic complet et plan d'action sur 90 jours. Il vous reste, même si on s'arrête là."
              href="/diagnostic-plan-action"
              offre="Diagnostic et plan d'action"
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
        {/* Bouton de réservation au milieu de la page, juste après les prix */}
        <AnimatedSection>
          <div className="mt-10 text-center">
            <Bouton href={CALENDRIER} externe>
              Réserver un échange de 30 minutes →
            </Bouton>
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
          {/* À toutes les largeurs : 3 témoignages affichés, les autres au
              clic. Case à cocher + label : fonctionne sans script. */}
          <input
            type="checkbox"
            id="tous-les-temoignages"
            className="peer sr-only"
          />
          {temoignages.map((t, i) => (
            <AnimatedSection
              key={t.nom}
              delay={(i % 3) * 100}
              className={i >= 3 ? "hidden peer-checked:block" : ""}
            >
              <CarteTemoignage
                nom={t.nom}
                entreprise={t.entreprise}
                texte={t.texte}
                avatar={t.avatar}
              />
            </AnimatedSection>
          ))}
          {temoignages.length > 3 && (
            <label
              htmlFor="tous-les-temoignages"
              className="col-span-full peer-checked:hidden justify-self-center inline-flex items-center justify-center rounded-full min-h-[48px] px-8 py-3 text-sm font-medium text-heading bg-white border border-border cursor-pointer peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-violet"
            >
              Voir les {temoignages.length - 3} autres témoignages
            </label>
          )}
        </div>
        {/* Bouton de réservation juste après la preuve sociale : c'est le
            moment où le visiteur est le plus convaincu. */}
        <AnimatedSection>
          <div className="mt-12 text-center">
            <Bouton href={CALENDRIER} externe>
              Réserver un échange de 30 minutes →
            </Bouton>
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
            Réserver un échange de 30 minutes →
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
        className="mt-auto -mb-3 self-start inline-flex min-h-[44px] items-center text-violet font-medium text-sm hover:text-violet-hover transition-colors"
      >
        Voir le détail →
      </LienTracker>
    </div>
  );
}
