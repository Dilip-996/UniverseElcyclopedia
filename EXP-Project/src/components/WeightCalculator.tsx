"use client";

import { useState } from "react";
import { planets } from "@/data/planets";
import { formatWeight } from "@/lib/utils";
import { PlanetVisual } from "@/components/PlanetVisual";

export function WeightCalculator() {
  const [weight, setWeight] = useState(30);

  return (
    <section className="rounded-[36px] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-cyan-400/5 p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.24em] text-comet">Try this</p>
      <h3 className="mt-2 font-display text-3xl text-white">What would you weigh?</h3>
      <p className="mt-3 max-w-xl leading-relaxed text-slate-300">
        Gravity is stronger on some planets and weaker on others. Type your Earth weight and see the
        cosmic remix.
      </p>
      <label className="mt-6 block font-bold" htmlFor="earth-weight">
        Your weight on Earth (kg)
      </label>
      <input
        id="earth-weight"
        type="number"
        min={1}
        max={200}
        value={weight}
        onChange={(event) => setWeight(Number(event.target.value) || 0)}
        className="mt-2 w-40 rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-lg outline-none focus:border-aurora"
      />
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {planets.map((planet) => (
          <div key={planet.id} className="rounded-3xl bg-black/25 p-4">
            <div className="flex items-center gap-3">
              <PlanetVisual id={planet.id} size={36} glow={planet.glow} />
              <p className="font-bold">{planet.name}</p>
            </div>
            <p className="mt-3 font-display text-2xl text-solar">{formatWeight(weight, planet.gravity)} kg</p>
            <p className="text-xs text-slate-400">{planet.gravity}× Earth gravity</p>
          </div>
        ))}
      </div>
    </section>
  );
}
