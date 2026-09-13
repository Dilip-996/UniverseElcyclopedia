import { CategoryLanding } from "@/components/encyclopedia/CategoryLanding";
import { GalaxyVisual } from "@/components/GalaxyVisual";

export default function GalaxiesPage() {
  return (
    <CategoryLanding
      category="galaxies"
      title="Galaxies"
      subtitle="Cities of stars — spirals, ovals, and messy leftovers after cosmic traffic accidents."
    >
      <section className="page-x pb-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div>
            <GalaxyVisual kind="spiral" />
            <p className="mt-3 font-display text-xl">Spiral</p>
          </div>
          <div>
            <GalaxyVisual kind="elliptical" />
            <p className="mt-3 font-display text-xl">Elliptical</p>
          </div>
          <div>
            <GalaxyVisual kind="irregular" />
            <p className="mt-3 font-display text-xl">Irregular</p>
          </div>
        </div>
      </section>
    </CategoryLanding>
  );
}
