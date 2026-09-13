"use client";

import { useState } from "react";

const objects = [
  { id: 1, label: "Comet", delay: "0s" },
  { id: 2, label: "Star dust", delay: "1.2s" },
  { id: 3, label: "Light beam", delay: "2.1s" },
];

export function BlackHoleVisual() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="overflow-hidden rounded-[40px] border border-white/10 bg-black/40 p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="font-display text-2xl">Gravity playground</p>
        <button type="button" onClick={() => setPlaying((value) => !value)} className="chip bg-white/10">
          {playing ? "Pause" : "Play"}
        </button>
      </div>
      <div className="relative mx-auto mt-6 grid h-[320px] place-items-center sm:h-[360px]">
        <div
          className="bh-disk absolute h-52 w-52 rounded-full opacity-80 sm:h-64 sm:w-64"
          style={{ animationPlayState: playing ? "running" : "paused" }}
        />
        <div className="relative z-10 h-20 w-20 rounded-full bg-black shadow-[0_0_40px_#000] sm:h-24 sm:w-24" />
        {objects.map((item, index) => (
          <span
            key={item.id}
            className="absolute left-1/2 top-1/2 text-xs font-bold sm:text-sm"
            style={{
              animation: `spin-slow ${10 + index * 4}s linear infinite`,
              animationPlayState: playing ? "running" : "paused",
              animationDelay: item.delay,
              transformOrigin: `${90 + index * 24}px center`,
              marginLeft: -(90 + index * 24),
            }}
          >
            {item.label}
          </span>
        ))}
      </div>
      <p className="mt-4 text-center text-slate-300">
        Things can swirl around a black hole for a long time. The dark middle is the event horizon —
        the point of no return.
      </p>
    </div>
  );
}
