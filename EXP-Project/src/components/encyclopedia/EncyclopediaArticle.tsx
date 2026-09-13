import Link from "next/link";
import type { EncyclopediaEntry } from "@/data/encyclopedia/types";
import { getCategoryLabel, getRelatedEntries } from "@/data/encyclopedia";
import { ArticleEmbeds } from "@/components/encyclopedia/ArticleEmbeds";
import { ArticleToc } from "@/components/encyclopedia/ArticleToc";
import { EncyclopediaCard } from "@/components/encyclopedia/EncyclopediaCard";
import { TopicVisual } from "@/components/encyclopedia/TopicVisual";

export function EncyclopediaArticle({ entry }: { entry: EncyclopediaEntry }) {
  const related = getRelatedEntries(entry);
  const toc = [
    { id: "overview", title: "Overview" },
    { id: "quick-facts", title: "Quick Facts" },
    ...entry.sections.filter((section) => section.id !== "overview").map((section) => ({ id: section.id, title: section.title })),
    ...(entry.embed ? [{ id: "visuals", title: "Visuals" }] : []),
    { id: "amazing-facts", title: "Amazing Facts" },
    { id: "vocabulary", title: "Vocabulary" },
  ];

  return (
    <article className="page-x pb-20 pt-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-solar">{getCategoryLabel(entry.category)}</p>
        <div className="mt-4 grid items-center gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl">{entry.title}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{entry.intro}</p>
          </div>
          <TopicVisual entry={entry} size={180} />
        </div>

        <div className="mt-12 grid gap-10 xl:grid-cols-[200px_1fr_260px]">
          <div className="hidden xl:block">
            <div className="sticky top-24">
              <ArticleToc items={toc} />
            </div>
          </div>

          <div className="article-prose mx-auto max-w-2xl xl:max-w-none">
            {entry.sections
              .filter((section) => section.id === "overview")
              .map((section) => (
                <section key={section.id} id={section.id}>
                  <h2 className="font-display text-3xl text-white">{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}

            <section id="quick-facts" className="mt-10 xl:hidden">
              <h2 className="font-display text-3xl text-white">Quick Facts</h2>
              <dl className="mt-4 grid gap-2 sm:grid-cols-2">
                {entry.quickFacts.map((fact) => (
                  <div key={fact.label} className="rounded-2xl bg-white/5 px-4 py-3">
                    <dt className="text-xs uppercase tracking-wider text-slate-400">{fact.label}</dt>
                    <dd className="mt-1 font-display text-lg text-white">{fact.value}</dd>
                    {fact.note ? <p className="mt-1 text-sm text-slate-400">{fact.note}</p> : null}
                  </div>
                ))}
              </dl>
            </section>

            {entry.sections
              .filter((section) => section.id !== "overview")
              .map((section) => (
                <section key={section.id} id={section.id} className="mt-10">
                  <h2 className="font-display text-3xl text-white">{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}

            <div id="visuals">
              <ArticleEmbeds type={entry.embed} />
            </div>

            <section id="amazing-facts" className="mt-12 rounded-[28px] border border-solar/20 bg-solar/5 p-6">
              <h2 className="font-display text-3xl text-white">Amazing Facts</h2>
              <ul className="mt-4 space-y-3 text-slate-200">
                {entry.amazingFacts.map((fact) => (
                  <li key={fact} className="leading-relaxed">
                    ✦ {fact}
                  </li>
                ))}
              </ul>
            </section>

            <section id="vocabulary" className="mt-12">
              <h2 className="font-display text-3xl text-white">Vocabulary</h2>
              <dl className="mt-4 space-y-4">
                {entry.vocabulary.map((item) => (
                  <div key={item.term} className="border-l-2 border-aurora/50 pl-4">
                    <dt className="font-display text-xl text-white">{item.term}</dt>
                    <dd className="mt-1 text-slate-300">{item.definition}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {entry.quizLink ? (
              <p className="mt-10 text-slate-300">
                Test what you learned in the{" "}
                <Link href="/quiz" className="font-bold text-aurora underline-offset-2 hover:underline">
                  space quiz
                </Link>
                .
              </p>
            ) : null}
          </div>

          <aside className="hidden xl:block">
            <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Quick Facts</p>
              <dl className="mt-4 space-y-3">
                {entry.quickFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs uppercase tracking-wider text-slate-400">{fact.label}</dt>
                    <dd className="font-display text-lg text-white">{fact.value}</dd>
                    {fact.note ? <p className="text-xs text-slate-400">{fact.note}</p> : null}
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>

        {related.length ? (
          <section className="mt-16">
            <h2 className="font-display text-3xl text-white">Related Topics</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {related.map((item) => (
                <EncyclopediaCard key={item.slug} entry={item} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
