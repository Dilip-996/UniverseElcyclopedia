import { CategoryLanding } from "@/components/encyclopedia/CategoryLanding";
import { BlackHoleVisual } from "@/components/BlackHoleVisual";

export default function DeepSpacePage() {
  return (
    <CategoryLanding
      category="deep-space"
      title="Deep Space"
      subtitle="Nebulae, black holes, and other distant wonders beyond our solar system."
    >
      <section className="page-x pb-12">
        <div className="mx-auto max-w-7xl">
          <BlackHoleVisual />
        </div>
      </section>
    </CategoryLanding>
  );
}
