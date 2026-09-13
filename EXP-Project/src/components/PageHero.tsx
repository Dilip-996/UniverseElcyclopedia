import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  className?: string;
};

export function PageHero({ eyebrow, title, subtitle, children, className }: Props) {
  return (
    <section className={cn("relative overflow-hidden page-x pb-10 pt-10 sm:pb-14 sm:pt-16", className)}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(94,200,216,0.1),transparent_36%)]" />
      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-solar">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-[1.85rem] leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:mt-5 sm:text-lg">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}
