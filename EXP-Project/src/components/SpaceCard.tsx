import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  title: string;
  tease: string;
  accent: string;
  emoji: string;
  className?: string;
};

export function SpaceCard({ href, title, tease, accent, emoji, className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 transition duration-200 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10",
        className,
      )}
    >
      <div
        className="absolute -right-8 -top-10 h-32 w-32 rounded-full blur-2xl transition group-hover:scale-125"
        style={{ background: accent, opacity: 0.28 }}
      />
      <span className="text-4xl" aria-hidden>
        {emoji}
      </span>
      <h3 className="mt-5 font-display text-2xl text-white">{title}</h3>
      <p className="mt-2 text-slate-300">{tease}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-aurora">
        Blast off
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
