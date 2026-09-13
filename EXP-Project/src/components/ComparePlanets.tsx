"use client";

import { useMemo, useState } from "react";
import { compareMetrics, planets, type Planet } from "@/data/planets";
import { PlanetVisual } from "@/components/PlanetVisual";

const metricGetters: Record<string, (planet: Planet) => number> = {
  diameterKm: (planet) => planet.diameterKm,
  distanceAu: (planet) => planet.distanceAu,
  moons: (planet) => planet.moons,
  gravity: (planet) => planet.gravity,
};

function formatValue(metric: string, value: number) {
  if (metric === "diameterKm") return `${value.toLocaleString()} km`;
  if (metric === "distanceAu") return `${value} AU`;
  if (metric === "moons") return `${value} moons`;
  return `${value}× Earth`;
}

function rankLabel(rank: number) {
  if (rank === 1) return "1st";
  if (rank === 2) return "2nd";
  if (rank === 3) return "3rd";
  return `${rank}th`;
}

export function ComparePlanets() {
  const [metric, setMetric] = useState<(typeof compareMetrics)[number]["key"]>("diameterKm");
  const ranks = useMemo(() => {
    const sorted = [...planets].sort((a, b) => metricGetters[metric](b) - metricGetters[metric](a));
    return new Map(sorted.map((planet, index) => [planet.id, index + 1]));
  }, [metric]);
  const max = Math.max(...planets.map((planet) => metricGetters[metric](planet)));
  const current = compareMetrics.find((item) => item.key === metric);

  return (
    <section className="rounded-[36px] border border-white/10 bg-white/5 p-5 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-aurora">Compare</p>
          <h3 className="mt-2 font-display text-3xl text-white">Planet showdown</h3>
          <p className="mt-2 text-slate-300">
            {current?.label}. Planets stay in solar system order — bars and badges show the ranking.
          </p>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Comparison metric">
          {compareMetrics.map((item) => (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={metric === item.key}
              onClick={() => setMetric(item.key)}
              className={`chip ${metric === item.key ? "bg-white text-space-950" : "bg-white/10 text-white active:bg-white/20"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 space-y-3">
        {planets.map((planet) => {
          const value = metricGetters[metric](planet);
          const width = Math.max(10, (value / max) * 100);
          const rank = ranks.get(planet.id) ?? 8;
          const leader = rank === 1;
          return (
            <div
              key={`${planet.id}-${metric}`}
              className={`grid items-center gap-3 rounded-2xl px-2 py-1 sm:grid-cols-[168px_1fr_auto] ${
                leader ? "bg-aurora/10" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`min-w-9 rounded-full px-2 py-0.5 text-center text-[11px] font-extrabold ${
                    leader ? "bg-aurora text-space-950" : "bg-white/10 text-slate-300"
                  }`}
                >
                  {rankLabel(rank)}
                </span>
                <PlanetVisual id={planet.id} size={28} glow={planet.glow} />
                <span className="font-bold">{planet.name}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10 sm:h-4">
                <div
                  className="compare-bar h-full rounded-full"
                  style={{ width: `${width}%`, background: planet.color }}
                />
              </div>
              <span className="text-sm font-semibold text-slate-300">{formatValue(metric, value)}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
