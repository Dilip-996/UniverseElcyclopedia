import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, align = "left", className }: Props) {
  return (
    <div className={cn(align === "center" && "text-center mx-auto max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-aurora">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300/90">{subtitle}</p> : null}
    </div>
  );
}
