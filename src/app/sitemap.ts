import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thomascarrere.fr";
  // Dates de derniere modification reelle du contenu : a mettre a jour a la main
  // quand une page change (une date dynamique ferait croire a Google que tout
  // change a chaque deploiement).
  const dates = {
    accueil: "2026-11-10",
    sprint: "2026-11-10",
    direction: "2026-11-10",
    coaching: "2026-11-10",
    quiSuisJe: "2026-11-10",
    guide: "2026-11-10",
  };

  return [
    {
      url: baseUrl,
      lastModified: dates.accueil,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/diagnostic-plan-action`,
      lastModified: dates.sprint,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/direction-marketing-externalise`,
      lastModified: dates.direction,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/coaching-hebdo`,
      lastModified: dates.coaching,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/qui-suis-je`,
      lastModified: dates.quiSuisJe,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide/directeur-marketing-externalise`,
      lastModified: dates.guide,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
