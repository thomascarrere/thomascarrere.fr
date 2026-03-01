import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { Bouton } from "@/components/bouton";
import { GrilleLogos } from "@/components/grille-logos";

export const metadata: Metadata = {
  title: "Direction Marketing Externalisee — Thomas Carrere",
  description:
    "Directeur Marketing externalise a temps partiel. La puissance d'un CMO senior, la flexibilite en plus.",
};

const CALENDRIER = "https://calendar.app.google/xaB44wDhgrkCX8Rj8";

const LOGOS_CLIENTS = [
  { nom: "Pardon Reunion", initiales: "PR" },
  { nom: "ETAP-Sante", initiales: "ES" },
  { nom: "GEM Formation", initiales: "GEM" },
  { nom: "Gaia", initiales: "GA" },
  { nom: "Albior", initiales: "AL" },
  { nom: "SAPMER", initiales: "SA" },
  { nom: "AJ Promotion", initiales: "AJ" },
  { nom: "Isautier", initiales: "IS" },
  { nom: "IUT Reunion", initiales: "IUT" },
  { nom: "ASDR", initiales: "AS" },
  { nom: "Crealise", initiales: "CR" },
  { nom: "Zotcar", initiales: "ZC" },
];

export default function DirectionMarketing() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="max-w-[840px] mx-auto text-center py-12 md:py-20">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            Direction Marketing externalisee
          </p>
          <h1 className="mb-6">
            Directeur Marketing externalise a temps partiel
          </h1>
          <p className="text-lg leading-8 text-text mb-8 tracking-[-0.02em]">
            Vous avez passe l&apos;etape des fondations et vous voulez
            maintenant passer a la vitesse superieure. Je deviens votre bras
            droit strategique pour piloter votre marketing, animer vos equipes
            et garantir l&apos;execution de votre feuille de route. La puissance
            d&apos;un CMO senior, la flexibilite en plus.
          </p>
          <Bouton href={CALENDRIER} externe>
            Reserver un appel de decouverte de 30min →
          </Bouton>
        </div>
      </Section>

      {/* C'est pour qui */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto text-center mb-12">
          <h2>Pourquoi choisir une Direction Marketing Externalisee ?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              titre: "Expertise immediate",
              texte:
                "15 ans d'experience en direction d'agence et en consulting",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ),
            },
            {
              titre: "Economie reelle",
              texte:
                "Le prix d'un profil junior pour le cerveau d'un profil senior",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              ),
            },
            {
              titre: "Focus Resultats",
              texte:
                "Je ne suis pas la pour \"occuper un poste\", mais pour faire avancer les chantiers",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                </svg>
              ),
            },
            {
              titre: "Zero engagement long terme",
              texte:
                "Une collaboration basee sur la confiance et renouvelable",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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
        <div className="text-center mt-8">
          <Bouton href={CALENDRIER} externe>
            Voyons comment je peux vous aider →
          </Bouton>
        </div>
      </Section>

      {/* 3 niveaux */}
      <Section>
        <div className="max-w-[840px] mx-auto text-center mb-12">
          <h2 className="mb-4">
            Une collaboration en 3 niveaux d&apos;intensite
          </h2>
          <p className="text-lg leading-8 text-text tracking-[-0.02em]">
            Chaque entreprise a des besoins differents. J&apos;ai structure mes
            interventions selon l&apos;implication dont vous avez besoin.
          </p>
        </div>
        <div className="space-y-6">
          {[
            {
              niveau: "Niveau 1",
              titre: "Pilotage \"Gouvernance\"",
              ideal:
                "Vous avez deja une equipe interne ou des prestataires, mais ils manquent de direction.",
              role: "Je suis l'architecte. Je definis la strategie, je fixe les priorites et je m'assure que tout le monde avance dans la meme direction.",
              livrables:
                "1 session de travail hebdomadaire (1h), pilotage de vos prestataires, reporting mensuel de performance, mise a jour du cockpit Notion.",
              tarif: "A partir de 1 600 EUR HT / mois",
            },
            {
              niveau: "Niveau 2",
              titre: "Pilotage \"Croissance\"",
              ideal:
                "Vous voulez que la strategie avance, mais vous manquez de ressources pour produire.",
              role: "Je suis l'architecte ET le batisseur. En plus du pilotage, je prends en charge la creation de vos actifs majeurs.",
              livrables:
                "Tout le Niveau 1 + La production d'un actif cle par mois (ex: redaction d'un cas client, creation d'une sequence email complexe, optimisation de vos campagnes Ads).",
              tarif: "A partir de 2 800 EUR HT / mois",
            },
            {
              niveau: "Niveau 3",
              titre: "Pilotage \"CMO complet\"",
              ideal:
                "Vous voulez deleguer l'integralite du pole marketing pour vous concentrer sur votre metier de dirigeant.",
              role: "Je gere votre marketing comme une Business Unit autonome.",
              livrables:
                "Tout le Niveau 2 + Presence renforcee, recrutement et formation de vos futurs collaborateurs internes, gestion globale du budget marketing et ROI consolide.",
              tarif: "Sur devis (selon complexite)",
            },
          ].map((item) => (
            <div
              key={item.niveau}
              className="bg-bg-alt rounded-xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold tracking-[0.08em] uppercase text-violet bg-violet-bg px-3 py-1 rounded-full">
                  {item.niveau}
                </span>
                <h5>{item.titre}</h5>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-heading mb-1">
                      Ideal si :
                    </p>
                    <p className="text-text text-[15px]">{item.ideal}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-heading mb-1">
                      Mon role :
                    </p>
                    <p className="text-text text-[15px]">{item.role}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-heading mb-1">
                      Livrables recurrents :
                    </p>
                    <p className="text-text text-[15px]">{item.livrables}</p>
                  </div>
                  <p className="text-lg font-bold text-heading font-[family-name:var(--font-archivo)]">
                    {item.tarif}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Ma methode */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto text-center mb-12">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            Transparence totale
          </p>
          <h2 className="mb-4">Ma methode</h2>
          <p className="text-lg leading-8 text-text tracking-[-0.02em]">
            Pas d&apos;effet &quot;boite noire&quot;. Tout est accessible en
            temps reel :
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              titre: "Cockpit Notion",
              texte:
                "Vous voyez l'avancement de chaque tache, les ressources creees, les decisions prises, les CR de reunions...",
            },
            {
              titre: "Rythme hebdomadaire",
              texte:
                "Un point fixe pour debloquer les sujets, rester alignes et garder un rythme soutenu.",
            },
            {
              titre: "Bilan mensuel",
              texte:
                "On analyse les chiffres, on apprend de ce qui n'a pas fonctionne et on ajuste le plan pour la suite.",
            },
          ].map((item) => (
            <div
              key={item.titre}
              className="bg-white rounded-xl p-8 text-center"
            >
              <h5 className="mb-3">{item.titre}</h5>
              <p className="text-text text-[15px]">{item.texte}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pre-requis */}
      <Section>
        <div className="max-w-[840px] mx-auto">
          <div className="bg-violet-bg rounded-xl p-8 md:p-10 border border-violet-lighter">
            <h5 className="mb-4">
              Pre-requis : commencer sur des bases saines
            </h5>
            <p className="text-text leading-relaxed mb-4">
              Pour que mon pilotage soit efficace, je ne prends pas de mission
              de Direction Marketing sans etre passe par le Sprint Fondations
              (ou un audit approfondi equivalent).
            </p>
            <p className="text-text leading-relaxed mb-6">
              Pourquoi ? Parce que je refuse de piloter sur du flou. Nous devons
              d&apos;abord valider votre message, vos outils et votre roadmap de
              90 jours pour que mon intervention mensuelle soit immediatement
              rentable.
            </p>
            <Link
              href="/sprint-fondations"
              className="text-violet font-medium text-sm hover:text-violet-hover transition-colors"
            >
              Decouvrir le Sprint Fondations →
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA final */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto text-center py-8">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            On y va ?
          </p>
          <h2 className="mb-6">
            Pret a deleguer votre marketing a un expert ?
          </h2>
          <p className="text-lg leading-8 text-text mb-8 tracking-[-0.02em]">
            Si vous sentez que votre marketing freine votre croissance,
            discutons-en. Nous evaluerons ensemble le niveau d&apos;intensite
            dont votre entreprise a besoin.
          </p>
          <Bouton href={CALENDRIER} externe>
            Reserver mon diagnostic offert (30min) →
          </Bouton>
        </div>
      </Section>

      {/* Logos clients */}
      <Section>
        <div className="max-w-[840px] mx-auto text-center mb-8">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted">
            Plus de 120 entreprises deja accompagnees, dont :
          </p>
        </div>
        <GrilleLogos logos={LOGOS_CLIENTS} />
      </Section>
    </>
  );
}
