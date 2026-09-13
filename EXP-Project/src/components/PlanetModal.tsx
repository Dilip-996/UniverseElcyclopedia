"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Planet } from "@/data/planets";
import { PlanetVisual } from "@/components/PlanetVisual";

type Props = {
  planet: Planet;
  onClose: () => void;
};

export function PlanetModal({ planet, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const stats = [
    ["Distance from Sun", planet.distanceFromSun],
    ["Length of a day", planet.dayLength],
    ["Length of a year", planet.yearLength],
    ["Moons", String(planet.moons)],
    ["Temperature", planet.temperature],
  ];

  return (
    <div className="fixed inset-0 z-[60] grid place-items-end bg-black/75 p-3 sm:place-items-center sm:p-4" role="dialog" aria-modal aria-labelledby="planet-title">
      <button className="absolute inset-0 cursor-default" aria-label="Close planet details" onClick={onClose} />
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative max-h-[88dvh] w-full max-w-3xl overflow-auto rounded-[28px] border border-white/10 bg-[#0c0a22] p-5 sm:rounded-[36px] sm:p-8"
      >
        <div className="sticky top-0 z-10 mb-4 flex justify-end bg-[#0c0a22]/90 pb-2 backdrop-blur-sm">
          <button ref={closeRef} type="button" onClick={onClose} className="chip bg-white/10">
            Close
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-[200px_1fr] md:gap-8">
          <div className="grid place-items-center">
            <PlanetVisual id={planet.id} size={140} glow={planet.glow} spinning />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-aurora">{planet.nickname}</p>
            <h2 id="planet-title" className="mt-2 font-display text-3xl text-white sm:text-4xl">
              {planet.name}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">{planet.description}</p>
            <p className="mt-4 rounded-2xl bg-solar/15 px-4 py-3 text-solar">{planet.funFact}</p>
          </div>
        </div>
        <dl className="mt-8 grid gap-3 sm:grid-cols-2">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-white/5 px-4 py-3">
              <dt className="text-xs uppercase tracking-wider text-slate-400">{label}</dt>
              <dd className="mt-1 font-display text-xl text-white">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-slate-300">{planet.sizeVsEarth}</p>
      </motion.div>
    </div>
  );
}
