"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  encyclopediaCategories,
  encyclopediaEntries,
  getEntriesByCategory,
  getFeaturedEntries,
  getLetters,
  getPopularEntries,
  searchEncyclopedia,
  type EncyclopediaCategory,
} from "@/data/encyclopedia";
import { EncyclopediaCard } from "@/components/encyclopedia/EncyclopediaCard";

const allCategories = [{ id: "all" as const, label: "All topics" }, ...encyclopediaCategories];

export function EncyclopediaBrowse({
  initialQuery = "",
  initialCategory = "all",
  heading = "Encyclopedia",
  subtitle = "Search, filter, or browse A–Z.",
}: {
  initialQuery?: string;
  initialCategory?: EncyclopediaCategory | "all";
  heading?: string;
  subtitle?: string;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<EncyclopediaCategory | "all">(initialCategory);
  const [letter, setLetter] = useState<string | null>(null);

  const suggestions = useMemo(() => (query.trim().length < 2 ? [] : searchEncyclopedia(query).slice(0, 6)), [query]);

  const results = useMemo(() => {
    const searched = query.trim() ? searchEncyclopedia(query) : getEntriesByCategory(category);
    const filtered = query.trim() && category !== "all" ? searched.filter((entry) => entry.category === category) : searched;
    if (!letter) return filtered;
    return filtered.filter((entry) => entry.title.toUpperCase().startsWith(letter));
  }, [query, category, letter]);

  return (
    <div>
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl text-white sm:text-5xl">{heading}</h1>
        <p className="mt-3 text-slate-300">{subtitle}</p>
        <div className="relative mt-6">
          <label htmlFor="encyclopedia-search" className="sr-only">
            Search the encyclopedia
          </label>
          <input
            id="encyclopedia-search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setLetter(null);
            }}
            placeholder="Search: black hole, Mars, biggest planet..."
            className="w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-lg outline-none focus:border-aurora"
          />
          {suggestions.length ? (
            <ul className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c0a22] shadow-xl">
              {suggestions.map((entry) => (
                <li key={entry.slug}>
                  <button
                    type="button"
                    className="block w-full px-4 py-3 text-left hover:bg-white/10"
                    onClick={() => router.push(`/encyclopedia/${entry.slug}`)}
                  >
                    <span className="font-bold">{entry.title}</span>
                    <span className="ml-2 text-sm text-slate-400">{entry.shortDescription}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {allCategories.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setCategory(item.id);
              setLetter(null);
            }}
            className={`chip ${category === item.id ? "bg-white text-space-950" : "bg-white/10"}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        <button type="button" onClick={() => setLetter(null)} className={`chip ${letter === null ? "bg-white/20" : "bg-white/5"}`}>
          A–Z
        </button>
        {getLetters().map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setLetter(item)}
            className={`chip min-w-9 ${letter === item ? "bg-white text-space-950" : "bg-white/5"}`}
          >
            {item}
          </button>
        ))}
      </div>

      {!query && !letter && category === "all" ? (
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl">Featured topics</h2>
            <div className="mt-4 grid gap-3">
              {getFeaturedEntries().map((entry) => (
                <EncyclopediaCard key={entry.slug} entry={entry} />
              ))}
            </div>
          </section>
          <section>
            <h2 className="font-display text-2xl">Popular topics</h2>
            <div className="mt-4 grid gap-3">
              {getPopularEntries().map((entry) => (
                <EncyclopediaCard key={entry.slug} entry={entry} />
              ))}
            </div>
          </section>
        </div>
      ) : null}

      <section className="mt-12">
        <h2 className="font-display text-2xl">{results.length} {results.length === 1 ? "topic" : "topics"}</h2>
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {results.map((entry) => (
            <EncyclopediaCard key={entry.slug} entry={entry} />
          ))}
        </div>
        {!results.length ? (
          <p className="mt-6 text-slate-300">No matching topics yet. Try “star explosion,” “Mars,” or “black hole.”</p>
        ) : null}
      </section>

      <p className="mt-8 text-sm text-slate-500">{encyclopediaEntries.length} articles in this first collection.</p>
    </div>
  );
}
