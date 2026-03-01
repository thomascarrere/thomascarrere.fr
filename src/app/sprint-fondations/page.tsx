import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Bouton } from "@/components/bouton";

export const metadata: Metadata = {
  title: "Sprint Fondations — Thomas Carrere",
  description:
    "15 jours pour retrouver de la clarte et poser les bases de votre marketing. 2 900 EUR HT.",
};

const CALENDRIER = "https://calendar.app.google/xaB44wDhgrkCX8Rj8";

export default function SprintFondations() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="max-w-[840px] mx-auto text-center py-12 md:py-20">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            Sprint Fondations
          </p>
          <h1 className="mb-6">
            Le sprint &quot;Fondations&quot; — 15 jours pour retrouver de la
            clarte et poser les bases de votre marketing.
          </h1>
          <p className="text-lg leading-8 text-text mb-8 tracking-[-0.02em]">
            Une immersion de deux semaines pour simplifier votre offre,
            organiser vos outils et tracer une route claire pour les mois a
            venir. Sans jargon, sans detours.
          </p>
          <Bouton href={CALENDRIER} externe>
            Je reserve un creneau →
          </Bouton>
        </div>
      </Section>

      {/* Le constat */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto text-center mb-12">
          <h2 className="mb-4">
            Pourquoi votre marketing semble &quot;pedaler dans la semoule&quot; ?
          </h2>
          <p className="text-lg leading-8 text-text tracking-[-0.02em]">
            La plupart des dirigeants de PME et TPE que j&apos;accompagne font
            face aux memes obstacles :
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              titre: "Message dilue",
              texte:
                "On ne comprend pas immediatement en quoi vous etes l'unique solution aux problemes de vos clients",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              ),
            },
            {
              titre: "Opportunites qui dorment",
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
                "Vos equipes commerciales perdent du temps a reinventer leurs arguments a chaque appel",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                </svg>
              ),
            },
            {
              titre: "Pilotage au \"doigt mouille\"",
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
            Je ne vous livre pas un rapport theorique. Je construis des actifs
            utilisables des le lendemain.
          </p>
        </div>
        <div className="space-y-8">
          {[
            {
              num: "01",
              titre: "Fiche \"Offre\"",
              texte:
                "Je retravaille votre positionnement et vos messages cles.",
              livrable:
                "Un document de reference qui synthetise qui vous aidez, quel probleme vous reglez, et pourquoi on doit vous choisir vous (et pas un autre). C'est la base de toute votre communication future.",
            },
            {
              num: "02",
              titre: "Le Kit \"RDV et prospection\"",
              texte:
                "Je retravaille ou cree vos scripts de vente et vos modeles d'emails.",
              livrable:
                "Un systeme de relance pret a l'envoi pour vos prospects \"froids\" et vos anciens clients. Objectif : generer vos premiers rendez-vous et rentabiliser le Sprint avant meme la fin de ma mission.",
            },
            {
              num: "03",
              titre: "Le cockpit \"Notion\"",
              texte:
                "Je centralise votre marketing dans un outil simple, visuel et collaboratif.",
              livrable:
                "Votre espace Notion sur mesure incluant votre CRM simplifie (ou optimise), votre bibliotheque d'assets (textes, logos, preuves sociales) et votre tableau de bord de performance.",
            },
            {
              num: "04",
              titre: "La Roadmap sur 90 jours",
              texte: "Pour en finir avec le \"il faudrait faire ca...\".",
              livrable:
                "Votre plan d'action priorise et dimensionne pour les 3 prochains mois. Vous savez exactement quoi faire, chaque semaine, pour maintenir la dynamique.",
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
            Pour obtenir ce niveau de resultat, une PME a normalement deux
            choix : recruter un Directeur Marketing interne (cout minimum :
            60 000 EUR/an) ou mandater une agence sur plusieurs mois.{" "}
            <strong className="text-heading">
              Le Sprint est la troisieme voie
            </strong>{" "}
            : l&apos;impact immediat d&apos;un expert senior de 15 ans
            d&apos;experience, sans engagement long terme, pour le prix
            d&apos;un investissement ponctuel maitrise.
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
              TVA 8,5 % pour les entreprises locales — Pas de frais caches
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
                  desc: "Je redige, je configure, je structure.",
                },
                {
                  titre: "Session de Restitution",
                  desc: "1h pour prendre en main vos outils et lancer les premieres actions.",
                },
                {
                  titre: "Suivi",
                  desc: "Un acces direct a moi par messagerie pendant toute la duree du Sprint.",
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

      {/* Eligibilite */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="mb-4">Ce Sprint est-il fait pour vous ?</h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em]">
              Pour garantir ces resultats en 15 jours, je ne selectionne que des
              projets ou je peux avoir un impact immediat. Ce format est ideal
              si :
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Vous realisez au moins 500 k EUR de CA annuel.",
              "Vous avez une base de donnees (clients/prospects) meme si elle est inexploitee.",
              "Vous etes pret a consacrer 2 a 3 heures de votre temps sur 15 jours pour valider les etapes cles.",
              "Vous vendez des produits ou services a forte valeur ajoutee (B2B ou B2C Premium).",
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

      {/* CTA final */}
      <Section>
        <div className="max-w-[840px] mx-auto text-center py-8">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            On y va ?
          </p>
          <h2 className="mb-6">Pret a sortir du flou ?</h2>
          <p className="text-lg leading-8 text-text mb-8 tracking-[-0.02em]">
            On ne commence jamais une mission sans se parler, evidemment !
            Reservez un creneau de 30 minutes pour diagnostiquer vos blocages
            eventuels. C&apos;est gratuit et sans engagement.
          </p>
          <Bouton href={CALENDRIER} externe>
            Reserver mon diagnostic offert (30min) →
          </Bouton>
        </div>
      </Section>
    </>
  );
}
