import Link from "next/link";
import type { EncyclopediaEntry } from "@/data/encyclopedia/types";
import { getCategoryLabel } from "@/data/encyclopedia";
import { TopicVisual } from "@/components/encyclopedia/TopicVisual";

export function EncyclopediaCard({ entry }: { entry: EncyclopediaEntry }) {
  return (
    <Link
      href={`/encyclopedia/${entry.slug}`}
      className="group grid grid-cols-[72px_1fr] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition hover:border-white/20 hover:bg-white/[0.07] active:bg-white/10"
    >
      <TopicVisual entry={entry} size={56} className="h-16 w-16 overflow-hidden rounded-xl" />
      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-aurora">{getCategoryLabel(entry.category)}</p>
        <h3 className="mt-1 truncate font-display text-lg text-white">{entry.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-slate-300">{entry.shortDescription}</p>
        {entry.quickFacts[0] ? (
          <p className="mt-2 truncate text-xs text-solar">
            {entry.quickFacts[0].label}: {entry.quickFacts[0].value}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
