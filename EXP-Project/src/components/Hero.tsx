"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PlanetVisual } from "@/components/PlanetVisual";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[84vh] overflow-hidden page-x pb-16 pt-10 sm:pt-16 lg:min-h-[90vh]">
      <div className="hero-atmosphere pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05040d] to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:min-h-[68vh] lg:gap-16">
        <div className="relative z-10">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-aurora"
          >
            A kids&apos; voyage through space
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-4 max-w-[13ch] font-display text-[2rem] leading-[1.08] text-white sm:text-6xl lg:text-7xl"
          >
            Ready to Explore the Universe?
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-xl"
          >
            Blast off on an adventure through planets, stars, galaxies, black holes, and everything
            beyond Earth.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/explore" className="btn btn-primary">
              Start Exploring
            </Link>
            <Link href="/quiz" className="btn btn-ghost">
              Take a Space Quiz
            </Link>
          </motion.div>
        </div>

        <div className="relative mx-auto h-[260px] w-full max-w-sm sm:h-[380px] sm:max-w-md lg:h-[520px] lg:max-w-lg">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_62%)]" />
          <motion.div
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 hidden rounded-full border border-white/10 sm:block"
          />
          <motion.div
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 56, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[22%] sm:inset-[20%]"
          >
            <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff,#d6d3d1_55%,#78716c)] shadow-[0_0_10px_rgba(255,255,255,0.28)] sm:h-6 sm:w-6" />
            <span className="absolute left-[64%] top-1 hidden rounded-full bg-black/35 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/70 lg:block">
              Moon
            </span>
          </motion.div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="floaty lg:hidden">
              <PlanetVisual id="earth" size={132} glow="rgba(56,189,248,0.35)" spinning />
            </div>
            <div className="floaty hidden lg:block">
              <PlanetVisual id="earth" size={220} glow="rgba(56,189,248,0.42)" spinning />
            </div>
          </div>
          <div className="drift absolute right-1 top-6 text-3xl sm:right-6 sm:top-8 sm:text-5xl" aria-hidden>
            🚀
          </div>
          <div className="floaty absolute bottom-4 left-1 text-3xl sm:bottom-8 sm:left-6 sm:text-5xl" aria-hidden>
            🧑‍🚀
          </div>
        </div>
      </div>
    </section>
  );
}
