"use client";

import type { Planet } from "@/data/planets";
import { PlanetVisual } from "@/components/PlanetVisual";

type Props = {
  planet: Planet;
  onSelect: (id: string) => void;
  featured?: boolean;
};

export function PlanetCard({ planet, onSelect, featured }: Props) {
  return (
    <button
      type="button"
      onClick={() => onSelect(planet.id)}
      className={`group w-[220px] shrink-0 rounded-[32px] border border-white/10 bg-white/5 p-5 text-left transition duration-200 hover:-translate-y-2 hover:border-white/25 hover:bg-white/10 ${featured ? "w-[260px]" : ""}`}
    >
      <div className="grid place-items-center py-4">
        <PlanetVisual id={planet.id} size={featured ? 120 : 88} glow={planet.glow} />
      </div>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
        Planet {planet.order}
      </p>
      <h3 className="mt-1 font-display text-2xl text-white">{planet.name}</h3>
      <p className="mt-2 text-sm text-slate-300">{planet.nickname}</p>
      <p className="mt-4 text-xs font-bold uppercase tracking-wider text-aurora">Tap to open</p>
    </button>
  );
}
