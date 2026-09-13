import { cn } from "@/lib/utils";

type Kind = "spiral" | "elliptical" | "irregular" | "milky";

export function GalaxyVisual({ kind, className }: { kind: Kind; className?: string }) {
  if (kind === "elliptical") {
    return (
      <div className={cn("relative h-40 overflow-hidden rounded-[28px] bg-black/40", className)}>
        <div className="absolute left-1/2 top-1/2 h-24 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#fde68a,#f97316_40%,transparent_70%)] blur-[1px]" />
      </div>
    );
  }

  if (kind === "irregular") {
    return (
      <div className={cn("relative h-40 overflow-hidden rounded-[28px] bg-black/40", className)}>
        <div className="absolute left-8 top-8 h-16 w-16 rounded-full bg-fuchsia-400/50 blur-md" />
        <div className="absolute right-10 top-12 h-20 w-12 rounded-full bg-cyan-300/40 blur-md" />
        <div className="absolute bottom-8 left-1/3 h-10 w-20 rounded-full bg-amber-200/40 blur-md" />
      </div>
    );
  }

  return (
    <div className={cn("relative h-40 overflow-hidden rounded-[28px] bg-black/40", className)}>
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-200/40" />
      <div className="absolute left-1/2 top-1/2 h-20 w-36 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full border border-cyan-200/50" />
      <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200 shadow-[0_0_20px_#fde68a]" />
    </div>
  );
}
