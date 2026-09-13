import { EncyclopediaBrowse } from "@/components/encyclopedia/EncyclopediaBrowse";
import type { EncyclopediaCategory } from "@/data/encyclopedia/types";

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
