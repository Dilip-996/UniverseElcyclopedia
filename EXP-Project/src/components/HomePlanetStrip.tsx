"use client";

import { useState } from "react";
import type { Planet } from "@/data/planets";
import { PlanetCard } from "@/components/PlanetCard";
import { PlanetModal } from "@/components/PlanetModal";

export function HomePlanetStrip({ planets }: { planets: Planet[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  const planet = planets.find((item) => item.id === selected);

  return (
    <>
      <div className="mt-8 flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {planets.map((item) => (
          <PlanetCard
            key={item.id}
            planet={item}
            featured={item.id === "earth" || item.id === "jupiter"}
            onSelect={setSelected}
          />
        ))}
      </div>
      {planet ? <PlanetModal planet={planet} onClose={() => setSelected(null)} /> : null}
    </>
  );
}
