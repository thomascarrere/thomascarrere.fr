import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thomascarrere.fr";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sprint-fondations`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/direction-marketing-externalise`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/qui-suis-je`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
