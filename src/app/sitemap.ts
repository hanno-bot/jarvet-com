import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jarvet.com",
      lastModified: new Date("2026-02-12"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
