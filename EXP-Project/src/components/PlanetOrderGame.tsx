"use client";

import { useMemo, useState } from "react";
import { planets } from "@/data/planets";
import { PlanetVisual } from "@/components/PlanetVisual";

const startOrder = ["jupiter", "mercury", "neptune", "earth", "saturn", "venus", "mars", "uranus"];

export function PlanetOrderGame() {
  const [order, setOrder] = useState(startOrder);
  const [holding, setHolding] = useState<string | null>(null);
  const correct = useMemo(() => order.every((id, index) => planets[index].id === id), [order]);

  function move(fromId: string, toId: string) {
    if (fromId === toId) return;
    setOrder((current) => {
      const next = [...current];
      const from = next.indexOf(fromId);
      const to = next.indexOf(toId);
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
    setHolding(null);
  }

  function onPlanetClick(id: string) {
    if (correct) return;
    if (!holding) {
      setHolding(id);
      return;
    }
    move(holding, id);
  }

  return (
    <section className="rounded-[36px] border border-white/10 bg-white/5 p-5 sm:p-8">
      <p className="text-xs uppercase tracking-[0.24em] text-aurora">Line them up</p>
      <h3 className="mt-2 font-display text-2xl sm:text-3xl">Closest to the Sun, then farther out</h3>
      <p className="mt-3 max-w-2xl leading-relaxed text-slate-300">
        On a phone, tap one planet, then tap the place it should go. On a computer, you can also
        drag and drop.
      </p>
      <div className="mt-6 flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
        <div className="flex h-[118px] w-[58px] shrink-0 flex-col items-center justify-center rounded-[24px] bg-[radial-gradient(circle_at_30%_30%,#fff3c4,#d4b46a)] text-center text-xs font-extrabold text-space-950 sm:h-[132px] sm:w-[72px] sm:rounded-[28px]">
          Sun
        </div>
        {order.map((id, index) => {
          const planet = planets.find((item) => item.id === id);
          if (!planet) return null;
          const inPlace = planets[index].id === id;
          const selected = holding === id;
          return (
            <button
              key={id}
              type="button"
              draggable={!correct}
              onDragStart={() => setHolding(id)}
              onDragOver={(event) => event.preventDefault()}
              onDrop={() => holding && move(holding, id)}
              onClick={() => onPlanetClick(id)}
              aria-pressed={selected}
              className={`w-[96px] shrink-0 rounded-3xl border p-2.5 text-center transition active:scale-[0.98] sm:w-[110px] sm:p-3 ${
                selected
                  ? "border-aurora bg-aurora/15"
                  : inPlace && correct
                    ? "border-lime/40 bg-lime/10"
                    : "border-white/10 bg-black/25 hover:border-white/25"
              }`}
            >
              <p className="text-xs text-slate-400">{index + 1}</p>
              <div className="mx-auto my-2 grid place-items-center">
                <PlanetVisual id={planet.id} size={42} glow={planet.glow} />
              </div>
              <p className="text-sm font-bold">{planet.name}</p>
            </button>
          );
        })}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <p className={`font-bold ${correct ? "text-lime" : "text-solar"}`} aria-live="polite">
          {correct
            ? "Perfect lineup! The solar system high-fives you."
            : holding
              ? `Holding ${planets.find((item) => item.id === holding)?.name}. Tap where it should go.`
              : "Not quite yet. Tap a planet to pick it up."}
        </p>
        <button type="button" onClick={() => { setOrder(startOrder); setHolding(null); }} className="chip bg-white/10">
          Reset
        </button>
      </div>
    </section>
  );
}
