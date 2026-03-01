import Image from "next/image";
import { Section } from "@/components/section";
import { Bouton } from "@/components/bouton";
import { CarteTemoignage } from "@/components/carte-temoignage";
import { Accordion } from "@/components/accordion";
import { GrilleLogos } from "@/components/grille-logos";

const CALENDRIER = "https://calendar.app.google/xaB44wDhgrkCX8Rj8";

const LOGOS_CLIENTS = [
  { nom: "GEM Formation", initiales: "GEM" },
  { nom: "Gaia", initiales: "GA" },
  { nom: "AJ Promotion", initiales: "AJ" },
  { nom: "ETAP-Sante", initiales: "ES" },
  { nom: "SAPMER", initiales: "SA" },
  { nom: "Isautier", initiales: "IS" },
  { nom: "ASDR", initiales: "AS" },
  { nom: "SEDRE", initiales: "SE" },
];

const FAQ = [
  {
    question: "Je suis en Hexagone, on peut travailler ensemble ?",
    reponse:
      "Absolument. Bien que base physiquement a La Reunion, je travaille en mode \"Remote-First\" avec des outils collaboratifs (Notion, Visio). L'avantage ? Vous profitez d'une expertise senior avec une TVA locale de 8,5 %.",
  },
  {
    question: "Je fais du B2C, c'est pour moi ?",
    reponse:
      "Oui, si vous vendez des produits ou services a forte valeur ajoutee (immobilier, sante, services premium). Si votre vente demande de la reflexion et de la reassurance, mon systeme fonctionne.",
  },
  {
    question: "Comment se passent les echanges ?",
    reponse:
      "Je privilegie toujours la clarte : un point hebdomadaire, un espace partage disponible H24 et une reactivite totale par message.",
  },
];

const TEMOIGNAGES = [
  {
    nom: "Sonia Martinez",
    entreprise: "AJ Promotion",
    avatar: "/images/avatar-sonia.webp",
    texte:
      "Je ne connaissais pas vraiment les techniques de marketing digital mais je me suis laisse guidee par ses connaissances et son professionnalisme. Et nous avons ete tres agreablement surpris par le resultat. Nous avons eu des retours tres positifs, des nouveaux prospects, une image plus \"humaine\". Thomas est professionnel, sait s'adapter a ses clients et donne des conseils pertinents. Je recommande vivement !",
  },
  {
    nom: "Annabelle Smith",
    entreprise: "Groupe La Perriere",
    avatar: "/images/avatar-annabelle.webp",
    texte:
      "Thomas m'a ete d'un soutien precieux. Il m'a aide a prendre du recul sur mon poste et mes strategies, a structurer mes priorites et a explorer des pistes innovantes pour atteindre mes objectifs. Une des forces de Thomas selon moi, c'est sa capacite a comprendre rapidement les enjeux d'une entreprise et a proposer des solutions concretes et adaptees, tout en transmettant ses connaissances avec clarte.",
  },
  {
    nom: "Claire Pasquier",
    entreprise: "ETAP-Sante",
    avatar: "/images/avatar-claire.webp",
    texte:
      "J'ai choisi d'etre accompagnee par Thomas pour beneficier de son regard d'expert sur notre communication. Conseils strategiques, cadrage, outils et astuces du quotidien, Thomas propose toujours une reponse adaptee a nos besoins ! Son recul est un veritable atout pour notre association.",
  },
  {
    nom: "Antoine Devasle",
    entreprise: "Crealise",
    avatar: "/images/avatar-antoine.webp",
    texte:
      "Thomas a toujours releve nos defis en intervenant devant des publics divers et varies avec beaucoup de pedagogie. Il a su transmettre sa passion et son expertise du marketing digital avec beaucoup de professionnalisme. Ces differentes experiences en font un vrai couteau suisse pour accompagner au mieux les entreprises dans leur croissance.",
  },
  {
    nom: "Nathan Hoarau",
    entreprise: "Universweb",
    avatar: "/images/avatar-nathan.webp",
    texte:
      "Thomas est a l'ecoute et propose un accompagnement concret avec des pistes de reflexions et des outils tres efficaces pour ameliorer la gestion de son agence.",
  },
  {
    nom: "Kevin Ouazzani",
    entreprise: "Augure Data",
    avatar: "/images/avatar-kevin.webp",
    texte:
      "J'ai pu beneficier de l'experience et du travail de Thomas, qui m'a accompagne sur les aspects marketing de mon entreprise. Je le recommande pour son niveau de maitrise du sujet, la personnalisation de l'accompagnement et globalement son professionnalisme.",
  },
  {
    nom: "Emilie Seva",
    entreprise: "DAC La Reunion",
    avatar: "/images/avatar-emilie.webp",
    texte:
      "Thomas a apporte une expertise inestimable a notre equipe de communication. Son approche proactive et sa collaboration transparente ont grandement contribue a renforcer notre visibilite en ligne et a atteindre nos objectifs de communication externe. Si vous cherchez un expert en marketing digital passionne et dedie a l'excellence, je vous recommande vivement de travailler avec Thomas Carrere.",
  },
  {
    nom: "Nathalie Bucci",
    entreprise: "Natucci Estetica",
    avatar: "/images/avatar-nathalie.webp",
    texte:
      "Je tiens a vous recommander Thomas avec qui j'ai eu le privilege de collaborer pendant deux mois de coaching intensif axe sur l'amelioration de ma strategie sur les reseaux sociaux. Thomas s'est avere etre un formateur exceptionnel, alliant une profonde expertise a une personnalite extremement sympathique.",
  },
  {
    nom: "Eloise Checkouri",
    entreprise: "Woundi",
    avatar: "/images/avatar-eloise.webp",
    texte:
      "J'ai pu beneficier de plusieurs formations animees par Thomas dans le cadre de mon incubation a La Technopole de La Reunion. Ses formations (Personal Branding, Plateforme de marque) ont ete tres enrichissantes et m'ont permis de mettre en place des actions correctives rapidement. Tres pedagogue, Thomas sait trouver de bons exemples pour illustrer ses propos.",
  },
];

export default function Accueil() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="max-w-[840px] mx-auto text-center py-12 md:py-20">
          <h1 className="mb-6">
            Le marketing de votre entreprise devient enfin clair et organise
          </h1>
          <p className="text-lg leading-8 text-text mb-8 tracking-[-0.02em]">
            J&apos;aide les dirigeants de PME a simplifier leurs messages et a
            structurer leurs actions de vente. 15 ans d&apos;experience a vos
            cotes pour construire des bases solides, sans complexite inutile.
          </p>
          <Bouton href={CALENDRIER} externe>
            Reserver mon diagnostic offert (30min) →
          </Bouton>
        </div>
      </Section>

      {/* Problematiques */}
      <Section bg="alt">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              titre: "Besoin de clarte",
              texte:
                "Votre offre est excellente, mais elle merite d'etre expliquee plus simplement pour convaincre plus vite.",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              ),
            },
            {
              titre: "Besoin de structure",
              texte:
                "Vos equipes ont besoin de methodes et d'outils concrets pour ne plus perdre de temps au quotidien.",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                </svg>
              ),
            },
            {
              titre: "Besoin d'accompagnement",
              texte:
                "Vous n'avez pas besoin d'une agence de plus, mais d'un partenaire qui s'implique vraiment a vos cotes.",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.titre}
              className="bg-white rounded-xl p-10 text-center flex flex-col items-center"
            >
              <div className="w-10 h-10 rounded bg-bg-icon flex items-center justify-center mb-4 shadow-[23px_23px_48px_-8px_#1600420a]">
                {item.icone}
              </div>
              <h5 className="mb-3">{item.titre}</h5>
              <p className="text-text">{item.texte}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Offre Sprint Fondations */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
              Le diagnostic Fondations
            </p>
            <h2 className="mb-6">
              15 jours pour tout remettre a plat
            </h2>
            <p className="text-lg leading-8 text-text mb-8 tracking-[-0.02em]">
              Je m&apos;immerge dans votre activite pendant deux semaines pour
              lever les doutes et installer votre nouveau systeme de travail.
              Pas de theorie, juste du concret.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  titre: "Votre message clarifie",
                  desc: "Pour etre compris par vos clients des les premieres secondes",
                },
                {
                  titre: "Vos outils de vente",
                  desc: "Des modeles d'emails et des messages prets a l'emploi pour vos equipes",
                },
                {
                  titre: "Votre espace de pilotage",
                  desc: "Un outil simple (Notion) pour centraliser vos idees, vos projets et vos resultats",
                },
                {
                  titre: "Votre feuille de route",
                  desc: "Un plan precis sur 90 jours pour savoir exactement ou vous allez",
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
              Decouvrir l&apos;offre &quot;Fondations&quot;
            </Bouton>
          </div>
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <Image
              src="/images/thomas-conference.jpg"
              alt="Thomas Carrere en conference"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* A propos + logos */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto text-center mb-12">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            Qui suis-je
          </p>
          <h2 className="mb-6">
            Un regard exterieur, 15 ans d&apos;experience
          </h2>
          <p className="text-lg leading-8 text-text tracking-[-0.02em]">
            Ancien dirigeant d&apos;agence, j&apos;ai accompagne plus d&apos;une
            centaine d&apos;entreprises avant de choisir de travailler en direct
            avec les dirigeants. Mon approche est celle du bon sens : on garde ce
            qui marche, on simplifie ce qui est complexe, et on construit sur la
            duree.
          </p>
        </div>
        <GrilleLogos logos={LOGOS_CLIENTS} />
      </Section>

      {/* Direction Marketing */}
      <Section>
        <div className="max-w-[840px] mx-auto text-center mb-12">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            Direction Marketing externalisee
          </p>
          <h2 className="mb-6">
            Un Directeur Marketing a vos cotes, chaque mois
          </h2>
          <p className="text-lg leading-8 text-text tracking-[-0.02em]">
            Une fois les bases posees, je ne vous laisse pas seul. Je peux
            devenir votre bras droit regulier pour piloter votre strategie,
            coordonner vos prestataires et veiller a ce que vos objectifs soient
            atteints.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              titre: "Gouvernance",
              desc: "Je cadre, je coache vos equipes et je pilote vos prestataires",
            },
            {
              titre: "Production",
              desc: "Je cree vos contenus strategiques (cas clients, sequences mails, pubs, etc.)",
            },
            {
              titre: "CMO complet",
              desc: "Je gere l'integralite de votre marketing comme si c'etait ma propre boite",
            },
          ].map((item) => (
            <div
              key={item.titre}
              className="bg-bg-alt rounded-xl p-8 text-center"
            >
              <h5 className="mb-3">{item.titre}</h5>
              <p className="text-text text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Bouton href="/direction-marketing-externalise" variante="secondaire">
            Decouvrir la Direction Marketing Externalisee
          </Bouton>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto">
          <div className="text-center mb-12">
            <h2>Questions frequentes</h2>
          </div>
          <Accordion items={FAQ} />
        </div>
      </Section>

      {/* Temoignages */}
      <Section>
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            Temoignages
          </p>
          <h2>Ce que disent mes clients</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMOIGNAGES.map((t) => (
            <CarteTemoignage
              key={t.nom}
              nom={t.nom}
              entreprise={t.entreprise}
              texte={t.texte}
              avatar={t.avatar}
            />
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <Section bg="alt">
        <div className="max-w-[840px] mx-auto text-center py-8">
          <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
            On y va ?
          </p>
          <h2 className="mb-6">
            Pret a structurer votre croissance ?
          </h2>
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
