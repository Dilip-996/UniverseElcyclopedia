"use client";

import { useMemo } from "react";

export function StarField() {
  const layers = useMemo(() => {
    const far = Array.from({ length: 52 }, (_, i) => ({
      id: `f${i}`,
      left: `${(i * 37) % 100}%`,
      top: `${(i * 53) % 100}%`,
      size: 1,
      delay: `${(i % 9) * 0.4}s`,
      dur: `${3.2 + (i % 4) * 0.7}s`,
      layer: "star-far",
    }));
    const mid = Array.from({ length: 28 }, (_, i) => ({
      id: `m${i}`,
      left: `${(i * 61) % 100}%`,
      top: `${(i * 23) % 100}%`,
      size: i % 5 === 0 ? 2 : 1.5,
      delay: `${(i % 7) * 0.3}s`,
      dur: `${2.4 + (i % 5) * 0.5}s`,
      layer: "",
    }));
    const near = Array.from({ length: 10 }, (_, i) => ({
      id: `n${i}`,
      left: `${(i * 17 + 8) % 100}%`,
      top: `${(i * 29 + 11) % 100}%`,
      size: 2.5,
      delay: `${(i % 5) * 0.5}s`,
      dur: `${3.8 + (i % 3) * 0.6}s`,
      layer: "star-near",
    }));
    return [...far, ...mid, ...near];
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="space-bg absolute inset-0" />
      <div className="absolute -left-24 top-[-10%] h-[420px] w-[420px] rounded-full bg-violet-600/15 blur-3xl" />
      <div className="absolute right-[-8%] top-[12%] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
      {layers.map((star) => (
        <span
          key={star.id}
          className={`star ${star.layer}`}
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            ["--dur" as string]: star.dur,
          }}
        />
      ))}
    </div>
  );
}
