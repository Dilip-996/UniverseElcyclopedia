import type { PlanetId } from "@/data/planets";

export const encyclopediaCategories = [
  { id: "solar-system", label: "Solar System", href: "/solar-system" },
  { id: "stars", label: "Stars", href: "/stars" },
  { id: "galaxies", label: "Galaxies", href: "/galaxies" },
  { id: "deep-space", label: "Deep Space", href: "/deep-space" },
  { id: "universe", label: "The Universe", href: "/encyclopedia?category=universe" },
  { id: "exploration", label: "Space Exploration", href: "/exploration" },
] as const;

export type EncyclopediaCategory = (typeof encyclopediaCategories)[number]["id"];

export type TopicVisual =
  | "planet"
  | "sun"
  | "moon"
  | "galaxy"
  | "black-hole"
  | "nebula"
  | "mission"
  | "star"
  | "cosmos";

export type ArticleEmbed = "solar-system" | "star-life" | "black-hole" | "missions" | "galaxy";

export type EncyclopediaEntry = {
  slug: string;
  title: string;
  category: EncyclopediaCategory;
  shortDescription: string;
  intro: string;
  visual: TopicVisual;
  planetId?: PlanetId;
  featured?: boolean;
  popular?: boolean;
  embed?: ArticleEmbed;
  quizLink?: boolean;
  quickFacts: Array<{ label: string; value: string; note?: string }>;
  sections: Array<{ id: string; title: string; paragraphs: string[] }>;
  amazingFacts: string[];
  vocabulary: Array<{ term: string; definition: string }>;
  relatedTopics: string[];
  searchKeywords: string[];
};

export type DirectoryTopic = {
  title: string;
  slug?: string;
  query?: string;
};
