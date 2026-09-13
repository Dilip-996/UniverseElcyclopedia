import { EncyclopediaBrowse } from "@/components/encyclopedia/EncyclopediaBrowse";
import type { EncyclopediaCategory } from "@/data/encyclopedia/types";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta(
  "Encyclopedia",
  "Search and browse illustrated articles about planets, stars, galaxies, black holes, and space exploration.",
);

const categories: EncyclopediaCategory[] = [
  "solar-system",
  "stars",
  "galaxies",
  "deep-space",
  "universe",
  "exploration",
];

export default async function EncyclopediaPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const params = await searchParams;
  const category = categories.includes(params.category as EncyclopediaCategory)
    ? (params.category as EncyclopediaCategory)
    : "all";

  return (
    <section className="page-x pb-20 pt-10">
      <div className="mx-auto max-w-7xl">
        <EncyclopediaBrowse initialQuery={params.q ?? ""} initialCategory={category} />
      </div>
    </section>
  );
}
