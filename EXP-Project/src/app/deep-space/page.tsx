import { CategoryLanding } from "@/components/encyclopedia/CategoryLanding";
import { BlackHoleVisual } from "@/components/BlackHoleVisual";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta(
  "Deep Space",
  "Read about nebulae, black holes, and other distant wonders beyond our solar system.",
);

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
