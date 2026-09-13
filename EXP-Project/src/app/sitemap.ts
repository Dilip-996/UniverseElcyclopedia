import type { MetadataRoute } from "next";
import { encyclopediaEntries } from "@/data/encyclopedia";
import { getSiteUrl } from "@/lib/site";

const staticPaths = [
  "/",
  "/encyclopedia",
  "/solar-system",
  "/planets",
  "/stars",
  "/galaxies",
  "/deep-space",
  "/exploration",
  "/quiz",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  return [
    ...staticPaths.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: path === "/" || path === "/encyclopedia" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.7,
    })),
    ...encyclopediaEntries.map((entry) => ({
      url: `${siteUrl}/encyclopedia/${entry.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
