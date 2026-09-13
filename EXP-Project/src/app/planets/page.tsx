"use client";

import { useState } from "react";
import Link from "next/link";
import { planets } from "@/data/planets";
import { ComparePlanets } from "@/components/ComparePlanets";
import { PageHero } from "@/components/PageHero";
import { PlanetModal } from "@/components/PlanetModal";
import { PlanetVisual } from "@/components/PlanetVisual";
import { WeightCalculator } from "@/components/WeightCalculator";

export default function PlanetsPage() {
  const [selected, setSelected] = useState<string>("earth");
  const [open, setOpen] = useState(false);
  const planet = planets.find((item) => item.id === selected) ?? planets[2];

  return (
    <>
      <PageHero
        eyebrow="Planets"
        title="A guided tour of eight wild worlds"
        subtitle="A comparison observatory that sits beside the encyclopedia. Tap a planet, then open its full article."
      />

      <section className="page-x pb-14">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-black/25 p-6 sm:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group justify-self-center rounded-full p-4 transition hover:bg-white/5"
            >
              <div className="relative">
                <div
                  className="absolute inset-[-18%] rounded-full opacity-70 blur-2xl"
                  style={{ background: planet.glow }}
                />
                <PlanetVisual id={planet.id} size={240} glow={planet.glow} spinning />
              </div>
              <span className="mt-4 block text-sm font-bold text-aurora group-hover:underline">
                Tap the planet for the full story
              </span>
            </button>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-aurora">{planet.nickname}</p>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl">{planet.name}</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">{planet.description}</p>
              <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ["Distance from Sun", planet.distanceFromSun],
                  ["Day", planet.dayLength],
                  ["Year", planet.yearLength],
                  ["Moons", String(planet.moons)],
                  ["Temperature", planet.temperature],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-white/5 px-4 py-3">
                    <dt className="text-xs uppercase tracking-wider text-slate-400">{label}</dt>
                    <dd className="font-display text-xl">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-solar">{planet.funFact}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="button" onClick={() => setOpen(true)} className="btn btn-light">
                  Open snapshot
                </button>
                <Link href={`/encyclopedia/${planet.id}`} className="btn btn-ghost">
                  Read encyclopedia article
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Choose a world
            </p>
            <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
              {planets.map((item) => {
                const active = selected === item.id;
                const size = Math.max(28, Math.min(52, item.diameterKm / 2800));
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelected(item.id)}
                    aria-pressed={active}
                    className={`flex min-w-[88px] flex-col items-center gap-2 rounded-3xl px-3 py-3 transition ${
                      active ? "bg-white text-space-950" : "bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <PlanetVisual id={item.id} size={size} glow={item.glow} />
                    <span className="text-xs font-bold">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="page-x pb-14">
        <div className="mx-auto max-w-7xl">
          <ComparePlanets />
        </div>
      </section>

      <section className="page-x pb-20">
        <div className="mx-auto max-w-7xl">
          <WeightCalculator />
        </div>
      </section>

      {open ? <PlanetModal planet={planet} onClose={() => setOpen(false)} /> : null}
    </>
  );
}
