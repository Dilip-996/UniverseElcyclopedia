import Link from "next/link";
import { getEntriesByCategory, type EncyclopediaCategory } from "@/data/encyclopedia";
import { EncyclopediaCard } from "@/components/encyclopedia/EncyclopediaCard";

export function CategoryLanding({
  category,
  title,
  subtitle,
  children,
}: {
  category: EncyclopediaCategory;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  const entries = getEntriesByCategory(category);

  return (
    <>
      <section className="page-x pb-8 pt-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-solar">Encyclopedia</p>
          <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">{subtitle}</p>
        </div>
      </section>
      {children}
      <section className="page-x pb-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl text-white">Articles in this section</h2>
          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            {entries.map((entry) => (
              <EncyclopediaCard key={entry.slug} entry={entry} />
            ))}
          </div>
          <Link href={`/encyclopedia?category=${category}`} className="mt-6 inline-flex font-bold text-aurora">
            Browse all related topics →
          </Link>
        </div>
      </section>
    </>
  );
}
