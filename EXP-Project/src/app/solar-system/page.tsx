import { CategoryLanding } from "@/components/encyclopedia/CategoryLanding";
import { InteractiveSolarSystem } from "@/components/InteractiveSolarSystem";
import { pageMeta } from "@/lib/metadata";
import Link from "next/link";

export const metadata = pageMeta(
  "Solar System",
  "Spin a map of the solar system, tap a planet, and read encyclopedia articles about our home star and its worlds.",
);

export default function SolarSystemPage() {
  return (
    <CategoryLanding
      category="solar-system"
      title="Solar System"
      subtitle="One star, eight planets, and the smaller worlds that share their orbits. Read the articles, then spin the map."
    >
      <section className="page-x pb-12">
        <div className="mx-auto max-w-7xl">
          <InteractiveSolarSystem />
          <p className="mt-4 text-sm text-slate-400">
            Compare worlds in the{" "}
            <Link href="/planets" className="font-bold text-aurora">
              planet observatory
            </Link>
            .
          </p>
        </div>
      </section>
    </CategoryLanding>
  );
}
