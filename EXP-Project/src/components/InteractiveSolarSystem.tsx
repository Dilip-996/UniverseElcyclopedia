"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { planets, type PlanetId } from "@/data/planets";
import { PlanetVisual } from "@/components/PlanetVisual";

const orbits: Array<{ id: PlanetId; radius: number; duration: string; size: number }> = [
  { id: "mercury", radius: 52, duration: "10s", size: 12 },
  { id: "venus", radius: 86, duration: "14s", size: 16 },
  { id: "earth", radius: 122, duration: "18s", size: 18 },
  { id: "mars", radius: 160, duration: "24s", size: 15 },
  { id: "jupiter", radius: 210, duration: "38s", size: 26 },
  { id: "saturn", radius: 268, duration: "50s", size: 24 },
  { id: "uranus", radius: 322, duration: "64s", size: 20 },
  { id: "neptune", radius: 376, duration: "78s", size: 20 },
];

export function InteractiveSolarSystem() {
  const [selected, setSelected] = useState<PlanetId>("earth");
  const [paused, setPaused] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [fit, setFit] = useState(1);
  const stageRef = useRef<HTMLDivElement>(null);
  const planet = planets.find((item) => item.id === selected) ?? planets[2];

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setFit(Math.min(1, entry.contentRect.width / 780));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black/30">
        <div className="absolute left-3 top-3 z-20 flex flex-wrap gap-2 sm:left-4 sm:top-4">
          <button type="button" onClick={() => setPaused((value) => !value)} className="chip bg-white/10">
            {paused ? "Play orbits" : "Pause orbits"}
          </button>
          <button
            type="button"
            onClick={() => setZoom((value) => Math.min(1.35, Number((value + 0.15).toFixed(2))))}
            className="chip bg-white/10"
          >
            Zoom in
          </button>
          <button
            type="button"
            onClick={() => setZoom((value) => Math.max(0.7, Number((value - 0.15).toFixed(2))))}
            className="chip bg-white/10"
          >
            Zoom out
          </button>
        </div>

        <div ref={stageRef} className="grid min-h-[380px] place-items-center overflow-hidden p-4 sm:min-h-[540px] sm:p-6">
          <div
            className="relative aspect-square w-[min(92vw,720px)] origin-center transition-transform duration-300"
            style={{ transform: `scale(${zoom * fit})` }}
          >
            <div className="absolute left-1/2 top-1/2 z-20 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff3c4,#d4b46a_50%,#8a6a2a)] shadow-[0_0_28px_rgba(212,180,106,0.35)]" />
            <span className="absolute left-1/2 top-[calc(50%+34px)] z-20 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider text-solar">
              Sun
            </span>
            {orbits.map((orbit) => {
              const body = planets.find((item) => item.id === orbit.id);
              if (!body) return null;
              const active = selected === body.id;
              return (
                <div key={orbit.id} className="absolute inset-0 grid place-items-center">
                  <div
                    className={`absolute rounded-full border ${active ? "border-white/30" : "border-white/10"}`}
                    style={{ width: orbit.radius * 2, height: orbit.radius * 2 }}
                  />
                  <span
                    className={`pointer-events-none absolute hidden text-[10px] font-bold tracking-wide xl:block ${
                      active ? "text-white" : "text-white/55"
                    }`}
                    style={{
                      left: `calc(50% + ${orbit.radius}px)`,
                      top: "50%",
                      transform: "translate(10px, -50%)",
                    }}
                  >
                    {body.name}
                  </span>
                  <div
                    className="absolute"
                    style={{
                      width: orbit.radius * 2,
                      height: orbit.radius * 2,
                      animation: `spin-slow ${orbit.duration} linear infinite`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelected(body.id)}
                      aria-label={`Learn about ${body.name}`}
                      aria-pressed={active}
                      className={`absolute left-1/2 top-0 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full active:scale-95 ${
                        active ? "ring-2 ring-white" : ""
                      }`}
                    >
                      <PlanetVisual id={body.id} size={orbit.size} glow={body.glow} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="px-4 pb-1 text-center text-sm font-bold xl:hidden" aria-live="polite">
          {planet.name}
        </p>
        <div className="flex gap-2 overflow-x-auto border-t border-white/10 px-4 py-3 no-scrollbar">
          {planets.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item.id)}
              aria-pressed={selected === item.id}
              className={`chip shrink-0 ${selected === item.id ? "bg-white text-space-950" : "bg-white/10 active:bg-white/20"}`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <aside className="rounded-[32px] border border-white/10 bg-white/5 p-6 xl:sticky xl:top-24">
        <PlanetVisual id={planet.id} size={110} glow={planet.glow} className="mx-auto" />
        <p className="mt-4 text-xs uppercase tracking-[0.24em] text-solar">{planet.nickname}</p>
        <h3 className="mt-2 font-display text-3xl">{planet.name}</h3>
        <p className="mt-3 leading-relaxed text-slate-300">{planet.funFact}</p>
        <Link href="/planets" className="btn btn-primary mt-6">
          Learn more
        </Link>
      </aside>
    </div>
  );
}
