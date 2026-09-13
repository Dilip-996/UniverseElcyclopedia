"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { spaceFacts } from "@/data/facts";

export function FactRotator() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused || reduce) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % spaceFacts.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, [paused, reduce]);

  return (
    <section className="relative page-x py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(178,154,214,0.08),transparent_55%)]" />
      <div
        className="relative mx-auto max-w-3xl text-center"
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
      >
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-solar">Did you know?</p>
        <div className="relative mx-auto mt-5 min-h-[6.5rem] sm:min-h-[8.5rem]">
          <AnimatePresence mode="wait">
            <motion.p
              key={spaceFacts[index]}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              className="font-display text-[1.45rem] leading-snug text-white sm:text-4xl sm:leading-tight"
            >
              {spaceFacts[index]}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {spaceFacts.map((fact, i) => (
            <button
              key={fact}
              type="button"
              aria-label={`Show fact ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition ${i === index ? "w-7 bg-white" : "w-2.5 bg-white/30 active:bg-white/55"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
