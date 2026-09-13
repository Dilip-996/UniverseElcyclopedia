import { PlanetsExplorer } from "@/components/PlanetsExplorer";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta(
  "Planets",
  "Compare the eight planets, open a snapshot of each world, and see what you would weigh across the solar system.",
);

export default function PlanetsPage() {
  return <PlanetsExplorer />;
}
