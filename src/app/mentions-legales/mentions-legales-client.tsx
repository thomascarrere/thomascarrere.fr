"use client";

import { Section } from "@/components/section";
import { AnimatedSection } from "@/components/animated-section";

const EMAIL = "thomas@thomascarrere.fr";

const DONNEES = [
  {
    donnee: "Nom, email, message",
    quand: "Formulaire de contact / prise de rendez-vous",
    finalite: "Répondre à la demande, organiser un rendez-vous",
    base: "Mesures précontractuelles / intérêt légitime",
  },
  {
    donnee: "Données de navigation (cookies)",
    quand: "Visite du site",
    finalite: "Mesure d’audience et publicité (voir ci-dessous)",
    base: "Consentement",
  },
  {
    donnee: "Coordonnées client, facturation",
    quand: "Relation contractuelle",
    finalite: "Exécution du contrat, obligations comptables",
    base: "Contrat / obligation légale",
  },
];

export function MentionsLegalesClient() {
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
          <div className="max-w-[840px] mx-auto text-center py-20 md:py-24">
            <p className="text-sm font-bold tracking-[0.12em] uppercase text-violet-light mb-4">
              Informations légales
            </p>
            <h1 className="mb-6 text-white">
              Mentions légales &amp; politique de confidentialité
            </h1>
            <p className="text-lg leading-8 text-white/60 tracking-[-0.02em]">
              Les informations relatives à l’éditeur du site, à son hébergement
              et au traitement de vos données personnelles.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Mentions légales */}
      <Section id="mentions-legales">
        <div className="max-w-[840px] mx-auto">
          <AnimatedSection>
            <h2 className="mb-10">Mentions légales</h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mb-10">
              <h3 className="mb-3">Éditeur du site</h3>
              <p className="text-text text-[15px] leading-7">
                Le site <strong>thomascarrere.fr</strong> est édité par{" "}
                <strong>Thomas Carrère</strong>, entrepreneur individuel (EI),
                Directeur Marketing Externalisé.
              </p>
              <ul className="mt-4 space-y-1.5 text-text text-[15px] leading-7">
                <li>
                  Siège : 24 chemin de la Ravine Sèche, 97427 L’Étang-Salé, La
                  Réunion.
                </li>
                <li>SIRET : 750 795 007 00038.</li>
                <li>N° TVA intracommunautaire : FR25 750 795 007.</li>
                <li>
                  Organisme de formation enregistré sous le n° 04973629897
                  auprès de la Préfecture de La Réunion (cet enregistrement ne
                  vaut pas agrément de l’État).
                </li>
                <li>
                  Email :{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-violet font-medium hover:text-violet-hover transition-colors"
                  >
                    {EMAIL}
                  </a>
                  .
                </li>
              </ul>
              <p className="text-text text-[15px] leading-7 mt-4">
                <strong>Directeur de la publication</strong> : Thomas Carrère.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mb-10">
              <h3 className="mb-3">Hébergeur</h3>
              <p className="text-text text-[15px] leading-7">
                Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet font-medium hover:text-violet-hover transition-colors"
                >
                  vercel.com
                </a>
                .
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mb-10">
              <h3 className="mb-3">Propriété intellectuelle</h3>
              <p className="text-text text-[15px] leading-7">
                L’ensemble des contenus du site (textes, visuels, logo,
                structure) est protégé par le droit de la propriété
                intellectuelle et demeure la propriété de Thomas Carrère, sauf
                mention contraire. Toute reproduction ou réutilisation sans
                autorisation écrite préalable est interdite.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 className="mb-3">Responsabilité</h3>
              <p className="text-text text-[15px] leading-7">
                L’éditeur s’efforce d’assurer l’exactitude des informations
                publiées mais ne saurait être tenu responsable des erreurs,
                omissions ou de l’indisponibilité du site. Les liens externes
                éventuels n’engagent pas la responsabilité de l’éditeur.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Politique de confidentialité */}
      <Section id="confidentialite" bg="alt">
        <div className="max-w-[840px] mx-auto">
          <AnimatedSection>
            <h2 className="mb-2">Politique de confidentialité (RGPD)</h2>
            <p className="text-sm text-text/70 mb-10">
              Dernière mise à jour : 24 juin 2026.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mb-10">
              <h3 className="mb-3">Responsable du traitement</h3>
              <p className="text-text text-[15px] leading-7">
                Thomas Carrère, 24 chemin de la Ravine Sèche, 97427
                L’Étang-Salé, La Réunion. Email :{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-violet font-medium hover:text-violet-hover transition-colors"
                >
                  {EMAIL}
                </a>
                .
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mb-10">
              <h3 className="mb-4">Données collectées et finalités</h3>
              {/* Table desktop */}
              <div className="hidden md:block overflow-hidden rounded-xl border border-border bg-white">
                <table className="w-full text-left text-[14px]">
                  <thead>
                    <tr className="bg-bg-alt">
                      <th className="px-5 py-3 font-semibold text-heading">
                        Donnée
                      </th>
                      <th className="px-5 py-3 font-semibold text-heading">
                        Quand / comment
                      </th>
                      <th className="px-5 py-3 font-semibold text-heading">
                        Finalité
                      </th>
                      <th className="px-5 py-3 font-semibold text-heading">
                        Base légale
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {DONNEES.map((d) => (
                      <tr
                        key={d.donnee}
                        className="border-t border-border align-top"
                      >
                        <td className="px-5 py-3 text-text font-medium">
                          {d.donnee}
                        </td>
                        <td className="px-5 py-3 text-text">{d.quand}</td>
                        <td className="px-5 py-3 text-text">{d.finalite}</td>
                        <td className="px-5 py-3 text-text">{d.base}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Cards mobile */}
              <div className="md:hidden space-y-4">
                {DONNEES.map((d) => (
                  <div
                    key={d.donnee}
                    className="rounded-xl border border-border bg-white p-5"
                  >
                    <p className="font-semibold text-heading text-[15px] mb-2">
                      {d.donnee}
                    </p>
                    <p className="text-text text-[14px] leading-6">
                      <strong>Quand :</strong> {d.quand}
                    </p>
                    <p className="text-text text-[14px] leading-6">
                      <strong>Finalité :</strong> {d.finalite}
                    </p>
                    <p className="text-text text-[14px] leading-6">
                      <strong>Base légale :</strong> {d.base}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mb-10">
              <h3 className="mb-3">Cookies et outils tiers</h3>
              <p className="text-text text-[15px] leading-7 mb-4">
                Le site utilise, sous réserve de votre consentement :
              </p>
              <ul className="space-y-1.5 text-text text-[15px] leading-7">
                <li>
                  <strong>Google Analytics 4</strong> (G-Q2Y0BZEN2C) : mesure
                  d’audience.
                </li>
                <li>
                  <strong>Google Ads</strong> (AW-11120283655) : suivi des
                  conversions et remarketing.
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mb-10">
              <h3 className="mb-3">Destinataires</h3>
              <p className="text-text text-[15px] leading-7">
                Les données ne sont ni vendues ni cédées. Elles peuvent être
                traitées par des sous-traitants techniques (hébergeur, Google,
                outil d’emailing) agissant pour le compte du responsable de
                traitement, dans le respect du RGPD.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mb-10">
              <h3 className="mb-3">Durée de conservation</h3>
              <ul className="space-y-1.5 text-text text-[15px] leading-7">
                <li>
                  Prospects / contacts : 3 ans à compter du dernier contact.
                </li>
                <li>
                  Clients / facturation : durée légale de conservation comptable
                  (10 ans).
                </li>
                <li>Cookies : durée maximale de 13 mois.</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 className="mb-3">Vos droits</h3>
              <p className="text-text text-[15px] leading-7 mb-4">
                Conformément au RGPD et à la loi Informatique et Libertés, vous
                disposez des droits d’<strong>accès</strong>, de{" "}
                <strong>rectification</strong>, d’<strong>effacement</strong>,
                d’<strong>opposition</strong>, de <strong>limitation</strong> et
                de <strong>portabilité</strong> de vos données. Pour les
                exercer :{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-violet font-medium hover:text-violet-hover transition-colors"
                >
                  {EMAIL}
                </a>
                .
              </p>
              <p className="text-text text-[15px] leading-7">
                Vous pouvez également introduire une réclamation auprès de la{" "}
                <strong>CNIL</strong> (
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet font-medium hover:text-violet-hover transition-colors"
                >
                  www.cnil.fr
                </a>
                ).
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
