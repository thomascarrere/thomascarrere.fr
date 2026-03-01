import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { Bouton } from "@/components/bouton";

export const metadata: Metadata = {
  title: "Sprint Fondations : 15 jours pour structurer votre marketing",
  description:
    "Sprint Fondations : une immersion de 15 jours pour clarifier votre offre, organiser vos outils de vente et tracer votre feuille de route marketing. 2 900 EUR HT, sans engagement long terme.",
  alternates: { canonical: "https://thomascarrere.fr/sprint-fondations" },
};

const CALENDRIER = "https://calendar.app.google/xaB44wDhgrkCX8Rj8";

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sprint Fondations",
  description:
    "Une immersion de 15 jours pour clarifier votre offre, organiser vos outils de vente et tracer votre feuille de route marketing. Inclut la fiche offre, le kit prospection, le cockpit Notion et la roadmap 90 jours.",
  provider: {
    "@type": "Person",
    name: "Thomas Carrère",
    url: "https://thomascarrere.fr",
  },
  areaServed: [
    { "@type": "Place", name: "La Réunion" },
    { "@type": "Country", name: "France" },
  ],
  offers: {
    "@type": "Offer",
    price: "2900",
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "2900",
      priceCurrency: "EUR",
      valueAddedTaxIncluded: false,
    },
  },
  url: "https://thomascarrere.fr/sprint-fondations",
};

export default function SprintFondations() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />

      {/* Hero */}
      <Section>
        <div className="max-w-[840px] mx-auto text-center py-12 md:py-20">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            Sprint Fondations
          </p>
          <h1 className="mb-6">
            Le sprint &quot;Fondations&quot; — 15 jours pour retrouver de la
            clarté et poser les bases de votre marketing.
          </h1>
          <p className="text-lg leading-8 text-text mb-8 tracking-[-0.02em]">
            Le <strong className="text-heading">Sprint Fondations</strong> est
            une immersion marketing de 15 jours conçue pour les{" "}
            <strong className="text-heading">dirigeants de PME</strong> qui
            veulent clarifier leur offre, structurer leurs outils de vente et
            tracer une feuille de route concrète pour les 90 prochains jours.
            Sans jargon, sans détours.
          </p>
          <Bouton href={CALENDRIER} externe>
            Je réserve un créneau →
          </Bouton>
        </div>
      </Section>

      {/* Le constat */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto text-center mb-12">
          <h2 className="mb-4">
            Pourquoi votre marketing semble &quot;pédaler dans la semoule&quot; ?
          </h2>
          <p className="text-lg leading-8 text-text tracking-[-0.02em]">
            La plupart des dirigeants de PME et TPE que j&apos;accompagne font
            face aux mêmes obstacles :
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              titre: "Message dilué",
              texte:
                "On ne comprend pas immédiatement en quoi vous êtes l'unique solution aux problèmes de vos clients",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              ),
            },
            {
              titre: "Opportunités qui dorment",
              texte:
                "Des anciens prospects ou des clients inactifs que personne ne prend le temps de relancer",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              ),
            },
            {
              titre: "Syndrome de la page blanche",
              texte:
                "Vos équipes commerciales perdent du temps à réinventer leurs arguments à chaque appel",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                </svg>
              ),
            },
            {
              titre: "Pilotage au \"doigt mouillé\"",
              texte:
                "Vous manquez d'un endroit unique pour voir vos KPIs et votre feuille de route",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.titre}
              className="bg-white rounded-xl p-8 flex gap-4"
            >
              <div className="w-10 h-10 rounded bg-bg-icon flex items-center justify-center shrink-0 shadow-[23px_23px_48px_-8px_#1600420a]">
                {item.icone}
              </div>
              <div>
                <h5 className="mb-2">{item.titre}</h5>
                <p className="text-text text-[15px]">{item.texte}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Les 4 piliers */}
      <Section>
        <div className="max-w-[840px] mx-auto text-center mb-12">
          <h2 className="mb-4">
            Les 4 piliers de votre nouvelle machine marketing
          </h2>
          <p className="text-lg leading-8 text-text tracking-[-0.02em]">
            Je ne vous livre pas un rapport théorique. Je construis des actifs
            utilisables dès le lendemain.
          </p>
        </div>
        <div className="space-y-8">
          {[
            {
              num: "01",
              titre: "Fiche \"Offre\"",
              texte:
                "Je retravaille votre positionnement et vos messages clés.",
              livrable:
                "Un document de référence qui synthétise qui vous aidez, quel problème vous réglez, et pourquoi on doit vous choisir vous (et pas un autre). C'est la base de toute votre communication future.",
            },
            {
              num: "02",
              titre: "Le Kit \"RDV et prospection\"",
              texte:
                "Je retravaille ou crée vos scripts de vente et vos modèles d'emails.",
              livrable:
                "Un système de relance prêt à l'envoi pour vos prospects \"froids\" et vos anciens clients. Objectif : générer vos premiers rendez-vous et rentabiliser le Sprint avant même la fin de ma mission.",
            },
            {
              num: "03",
              titre: "Le cockpit \"Notion\"",
              texte:
                "Je centralise votre marketing dans un outil simple, visuel et collaboratif.",
              livrable:
                "Votre espace Notion sur mesure incluant votre CRM simplifié (ou optimisé), votre bibliothèque d'assets (textes, logos, preuves sociales) et votre tableau de bord de performance.",
            },
            {
              num: "04",
              titre: "La Roadmap sur 90 jours",
              texte: "Pour en finir avec le \"il faudrait faire ça...\".",
              livrable:
                "Votre plan d'action priorisé et dimensionné pour les 3 prochains mois. Vous savez exactement quoi faire, chaque semaine, pour maintenir la dynamique.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-bg-alt rounded-xl p-8 md:p-10 flex gap-6"
            >
              <span className="text-violet font-bold text-2xl font-[family-name:var(--font-archivo)] shrink-0">
                {item.num}
              </span>
              <div>
                <h5 className="mb-2">{item.titre}</h5>
                <p className="text-text mb-3">{item.texte}</p>
                <p className="text-text text-[15px]">
                  <span className="font-semibold text-heading">
                    Le livrable :{" "}
                  </span>
                  {item.livrable}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Justification du format */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto text-center">
          <h2 className="mb-6">
            Pourquoi choisir le format &quot;Sprint&quot; ?
          </h2>
          <p className="text-lg leading-8 text-text tracking-[-0.02em]">
            Pour obtenir ce niveau de résultat, une PME a normalement deux
            choix : recruter un Directeur Marketing interne (coût minimum :
            60 000 EUR/an) ou mandater une agence sur plusieurs mois.{" "}
            <strong className="text-heading">
              Le Sprint est la troisième voie
            </strong>{" "}
            : l&apos;impact immédiat d&apos;un expert senior de 15 ans
            d&apos;expérience, sans engagement long terme, pour le prix
            d&apos;un investissement ponctuel maîtrisé.
          </p>
        </div>
      </Section>

      {/* Investissement */}
      <Section>
        <div className="max-w-[840px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
              L&apos;investissement
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-5xl md:text-6xl font-bold text-heading font-[family-name:var(--font-archivo)] tracking-[-0.04em]">
                2 900 EUR
              </span>
              <span className="text-text-muted text-lg">HT</span>
            </div>
            <p className="text-text-muted text-sm italic">
              TVA 8,5 % pour les entreprises locales — Pas de frais cachés
            </p>
          </div>
          <div className="bg-bg-alt rounded-xl p-8 md:p-10">
            <h5 className="mb-6 text-center">Ce qui est inclus :</h5>
            <div className="space-y-4">
              {[
                {
                  titre: "Diagnostic & Immersion",
                  desc: "2h de workshop intensif avec moi.",
                },
                {
                  titre: "Phase de Production",
                  desc: "Je rédige, je configure, je structure.",
                },
                {
                  titre: "Session de Restitution",
                  desc: "1h pour prendre en main vos outils et lancer les premières actions.",
                },
                {
                  titre: "Suivi",
                  desc: "Un accès direct à moi par messagerie pendant toute la durée du Sprint.",
                },
              ].map((item) => (
                <div key={item.titre} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-violet flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-text">
                    <span className="font-semibold text-heading">
                      {item.titre} :{" "}
                    </span>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Éligibilité */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="mb-4">Ce Sprint est-il fait pour vous ?</h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em]">
              Pour garantir ces résultats en 15 jours, je ne sélectionne que des
              projets où je peux avoir un impact immédiat. Ce format est idéal
              si :
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Vous réalisez au moins 500 k EUR de CA annuel.",
              "Vous avez une base de données (clients/prospects) même si elle est inexploitée.",
              "Vous êtes prêt à consacrer 2 à 3 heures de votre temps sur 15 jours pour valider les étapes clés.",
              "Vous vendez des produits ou services à forte valeur ajoutée (B2B ou B2C Premium).",
            ].map((critere) => (
              <div
                key={critere}
                className="bg-white rounded-xl p-6 flex gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-violet flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-text">{critere}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Et après ? */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto text-center">
          <h2 className="mb-4">Et après le Sprint ?</h2>
          <p className="text-lg leading-8 text-text tracking-[-0.02em] mb-6">
            Le Sprint Fondations pose les bases. Pour maintenir la dynamique
            sur le long terme, je propose un accompagnement régulier en{" "}
            <Link
              href="/direction-marketing-externalise"
              className="text-violet font-medium hover:text-violet-hover transition-colors"
            >
              Direction Marketing Externalisée
            </Link>
            .
          </p>
          <Link
            href="/qui-suis-je"
            className="text-violet font-medium text-sm hover:text-violet-hover transition-colors"
          >
            En savoir plus sur mon parcours →
          </Link>
        </div>
      </Section>

      {/* CTA final */}
      <Section>
        <div className="max-w-[840px] mx-auto text-center py-8">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            On y va ?
          </p>
          <h2 className="mb-6">Prêt à sortir du flou ?</h2>
          <p className="text-lg leading-8 text-text mb-8 tracking-[-0.02em]">
            On ne commence jamais une mission sans se parler, évidemment !
            Réservez un créneau de 30 minutes pour diagnostiquer vos blocages
            éventuels. C&apos;est gratuit et sans engagement.
          </p>
          <Bouton href={CALENDRIER} externe>
            Réserver mon diagnostic offert (30min) →
          </Bouton>
        </div>
      </Section>
    </>
  );
}
