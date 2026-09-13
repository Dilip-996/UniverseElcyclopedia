import { CategoryLanding } from "@/components/encyclopedia/CategoryLanding";
import { StarLifeTimeline } from "@/components/StarLifeTimeline";

export default function StarsPage() {
  return (
    <CategoryLanding
      category="stars"
      title="Stars"
      subtitle="How suns are born, why they shine in different colors, and what remains when they die."
    >
      <section className="page-x pb-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl text-white">Life of a star</h2>
          <div className="mt-6">
            <StarLifeTimeline />
          </div>
        </div>
      </section>
    </CategoryLanding>
  );
}
