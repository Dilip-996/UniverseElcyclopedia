import Link from "next/link";
import type { ArticleEmbed } from "@/data/encyclopedia/types";
import { BlackHoleVisual } from "@/components/BlackHoleVisual";
import { GalaxyVisual } from "@/components/GalaxyVisual";
import { InteractiveSolarSystem } from "@/components/InteractiveSolarSystem";
import { MissionCard } from "@/components/MissionCard";
import { StarLifeTimeline } from "@/components/StarLifeTimeline";
import { missions } from "@/data/missions";

export function ArticleEmbeds({ type }: { type?: ArticleEmbed }) {
  if (!type) return null;

  if (type === "solar-system") {
    return (
      <section className="mt-12">
        <h2 className="font-display text-3xl text-white">See it in motion</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          Tap a planet in the solar system map, or open the full interactive page.
        </p>
        <div className="mt-6">
          <InteractiveSolarSystem />
        </div>
        <Link href="/solar-system" className="mt-4 inline-flex text-sm font-bold text-aurora">
          Open the Solar System observatory →
        </Link>
      </section>
    );
  }

  if (type === "star-life") {
    return (
      <section className="mt-12">
        <h2 className="font-display text-3xl text-white">Life of a star</h2>
        <p className="mt-2 text-slate-300">Slide sideways through a star’s lifetime.</p>
        <div className="mt-6">
          <StarLifeTimeline />
        </div>
      </section>
    );
  }

  if (type === "black-hole") {
    return (
      <section className="mt-12">
        <h2 className="font-display text-3xl text-white">Gravity playground</h2>
        <div className="mt-6">
          <BlackHoleVisual />
        </div>
      </section>
    );
  }

  if (type === "galaxy") {
    return (
      <section className="mt-12">
        <h2 className="font-display text-3xl text-white">A spiral from the inside</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <GalaxyVisual kind="spiral" />
          <GalaxyVisual kind="elliptical" />
          <GalaxyVisual kind="irregular" />
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12">
      <h2 className="font-display text-3xl text-white">Mission timeline</h2>
      <div className="mt-6 space-y-4">
        {missions.slice(0, 3).map((mission) => (
          <MissionCard key={mission.id} mission={mission} />
        ))}
      </div>
      <Link href="/exploration" className="mt-4 inline-flex text-sm font-bold text-aurora">
        See all missions →
      </Link>
    </section>
  );
}
