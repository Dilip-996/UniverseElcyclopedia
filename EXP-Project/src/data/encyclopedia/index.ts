import { cosmosEntries } from "@/data/encyclopedia/cosmos";
import { encyclopediaDirectory } from "@/data/encyclopedia/directory";
import { explorationEntries } from "@/data/encyclopedia/exploration";
import { solarEntries } from "@/data/encyclopedia/solar";
import { encyclopediaCategories, type EncyclopediaCategory, type EncyclopediaEntry } from "@/data/encyclopedia/types";
import { worldEntries } from "@/data/encyclopedia/worlds";

export const encyclopediaEntries: EncyclopediaEntry[] = [
  ...solarEntries,
  ...worldEntries,
  ...cosmosEntries,
  ...explorationEntries,
];

export { encyclopediaCategories, encyclopediaDirectory };
export type { EncyclopediaCategory, EncyclopediaEntry } from "@/data/encyclopedia/types";

export function getEntry(slug: string) {
  return encyclopediaEntries.find((entry) => entry.slug === slug);
}

export function getCategoryLabel(category: EncyclopediaCategory) {
  return encyclopediaCategories.find((item) => item.id === category)?.label ?? category;
}

export function getRelatedEntries(entry: EncyclopediaEntry) {
  return entry.relatedTopics
    .map((slug) => getEntry(slug))
    .filter((item): item is EncyclopediaEntry => Boolean(item));
}

export function getEntriesByCategory(category?: EncyclopediaCategory | "all") {
  if (!category || category === "all") return encyclopediaEntries;
  return encyclopediaEntries.filter((entry) => entry.category === category);
}

export function getFeaturedEntries() {
  return encyclopediaEntries.filter((entry) => entry.featured);
}

export function getPopularEntries() {
  return encyclopediaEntries.filter((entry) => entry.popular);
}

export function searchEncyclopedia(query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return encyclopediaEntries;
  const words = needle.split(/\s+/);

  return encyclopediaEntries
    .map((entry) => {
      const haystack = [
        entry.title,
        entry.category,
        getCategoryLabel(entry.category),
        entry.shortDescription,
        entry.intro,
        ...entry.searchKeywords,
        ...entry.quickFacts.map((fact) => `${fact.label} ${fact.value}`),
      ]
        .join(" ")
        .toLowerCase();

      const score = words.reduce((total, word) => {
        if (entry.title.toLowerCase() === word) return total + 8;
        if (entry.title.toLowerCase().includes(word)) return total + 5;
        if (entry.searchKeywords.some((keyword) => keyword.includes(word) || word.includes(keyword))) return total + 4;
        if (haystack.includes(word)) return total + 1;
        return total;
      }, 0);

      return { entry, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.entry);
}

export function getRandomSlug(except?: string) {
  const pool = encyclopediaEntries.filter((entry) => entry.slug !== except);
  return pool[Math.floor(Math.random() * pool.length)]?.slug ?? "earth";
}

export function getLetters() {
  return [...new Set(encyclopediaEntries.map((entry) => entry.title[0].toUpperCase()))].sort();
}
