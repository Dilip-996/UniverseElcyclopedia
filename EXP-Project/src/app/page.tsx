import Link from "next/link";
import { encyclopediaDirectory, encyclopediaEntries, getEntry, getFeaturedEntries } from "@/data/encyclopedia";
import { EncyclopediaCard } from "@/components/encyclopedia/EncyclopediaCard";
import { TopicVisual } from "@/components/encyclopedia/TopicVisual";

export default function HomePage() {
  const featured = getFeaturedEntries().slice(0, 4);
  const earth = getEntry("earth");

  return (
    <>
      <section className="relative overflow-hidden page-x pb-16 pt-12 sm:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(94,200,216,0.12),transparent_36%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-aurora">Universe Encyclopedia</p>
            <h1 className="mt-4 max-w-[12ch] font-display text-[2.1rem] leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              Explore the Universe
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              Discover planets, stars, galaxies, black holes, space missions, and the mysteries of the cosmos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/encyclopedia" className="btn btn-primary">
                Explore the Encyclopedia
              </Link>
              <Link href="/encyclopedia/random" className="btn btn-ghost">
                Surprise Me
              </Link>
            </div>
          </div>
          {earth ? (
            <div className="hidden justify-center sm:flex">
              <TopicVisual entry={earth} size={220} />
            </div>
          ) : null}
        </div>
      </section>

      <section className="page-x pb-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-solar">Directory</p>
          <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">Browse the encyclopedia</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            {encyclopediaEntries.length} illustrated articles so far. More topics are listed so you can see how the
            library will grow.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {encyclopediaDirectory.map((group) => (
              <section key={group.id} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-display text-2xl text-white">{group.label}</h3>
                <p className="mt-2 text-sm text-slate-400">{group.intro}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.topics.map((topic) => {
                    const href = topic.slug
                      ? `/encyclopedia/${topic.slug}`
                      : `/encyclopedia?q=${encodeURIComponent(topic.query ?? topic.title)}`;
                    return (
                      <li key={topic.title}>
                        <Link
                          href={href}
                          className="inline-flex rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-200 hover:bg-white/10"
                        >
                          {topic.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="page-x pb-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl text-white">Start reading</h2>
          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            {featured.map((entry) => (
              <EncyclopediaCard key={entry.slug} entry={entry} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
