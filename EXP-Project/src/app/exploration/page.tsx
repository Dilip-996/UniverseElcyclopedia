import { CategoryLanding } from "@/components/encyclopedia/CategoryLanding";
import { MissionCard } from "@/components/MissionCard";
import { missions } from "@/data/missions";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta(
  "Space Exploration",
  "Meet the people and machines that leave Earth so the rest of us can look farther into space.",
);

export default function ExplorationPage() {
  return (
    <CategoryLanding
      category="exploration"
      title="Space Exploration"
      subtitle="The people and machines that leave Earth so the rest of us can look farther."
    >
      <section className="page-x pb-12">
        <div className="mx-auto max-w-5xl space-y-4">
          {missions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} featured={mission.id === "apollo-11"} />
          ))}
        </div>
      </section>
    </CategoryLanding>
  );
}
