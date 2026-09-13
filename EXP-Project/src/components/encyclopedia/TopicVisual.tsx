import type { EncyclopediaEntry } from "@/data/encyclopedia/types";
import { GalaxyVisual } from "@/components/GalaxyVisual";
import { PlanetVisual } from "@/components/PlanetVisual";
import { cn } from "@/lib/utils";

export function TopicVisual({
  entry,
  size = 160,
  className,
}: {
  entry: EncyclopediaEntry;
  size?: number;
  className?: string;
}) {
  if (entry.visual === "planet" && entry.planetId) {
    return (
      <div className={cn("grid place-items-center", className)}>
        <PlanetVisual id={entry.planetId} size={size} spinning={size > 80} />
      </div>
    );
  }

  if (entry.visual === "sun") {
    return (
      <div className={cn("grid place-items-center", className)} aria-hidden>
        <div
          className="rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff6c8,#e0b84e_46%,#8a5a12)] shadow-[0_0_40px_rgba(212,180,106,0.35)]"
          style={{ width: size, height: size }}
        />
      </div>
    );
  }

  if (entry.visual === "moon") {
    return (
      <div className={cn("grid place-items-center", className)} aria-hidden>
        <div
          className="rounded-full bg-[radial-gradient(circle_at_28%_28%,#fff,#c4c0b8_42%,#6b665e)]"
          style={{ width: size, height: size }}
        />
      </div>
    );
  }

  if (entry.visual === "galaxy") {
    return <GalaxyVisual kind="milky" className={cn("w-full", className)} />;
  }

  if (entry.visual === "black-hole") {
    return (
      <div className={cn("relative grid h-40 place-items-center overflow-hidden rounded-[28px] bg-black/40", className)}>
        <div className="h-24 w-24 rounded-full bg-[conic-gradient(from_180deg,#d4b46a,#d49aa4,transparent,#5ec8d8,transparent)] opacity-70" />
        <div className="absolute h-10 w-10 rounded-full bg-black" />
      </div>
    );
  }

  if (entry.visual === "nebula") {
    return (
      <div className={cn("relative h-40 overflow-hidden rounded-[28px] bg-black/40", className)}>
        <div className="absolute left-6 top-6 h-20 w-20 rounded-full bg-rose-300/30 blur-xl" />
        <div className="absolute right-8 top-10 h-24 w-24 rounded-full bg-cyan-300/25 blur-xl" />
        <div className="absolute bottom-6 left-1/3 h-16 w-28 rounded-full bg-amber-200/20 blur-lg" />
      </div>
    );
  }

  if (entry.visual === "star") {
    return (
      <div className={cn("grid place-items-center", className)} aria-hidden>
        <div
          className="rounded-full bg-[radial-gradient(circle,#fff7d6,#f5d76e_40%,transparent_70%)]"
          style={{ width: size, height: size }}
        />
      </div>
    );
  }

  return (
    <div className={cn("relative h-40 overflow-hidden rounded-[28px] bg-black/40", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(94,200,216,0.25),transparent_42%),radial-gradient(circle_at_70%_70%,rgba(178,154,214,0.2),transparent_40%)]" />
    </div>
  );
}
