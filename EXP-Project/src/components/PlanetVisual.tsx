import { cn } from "@/lib/utils";
import type { PlanetId } from "@/data/planets";

const classById: Record<PlanetId, string> = {
  mercury: "planet-mercury",
  venus: "planet-venus",
  earth: "planet-earth",
  mars: "planet-mars",
  jupiter: "planet-jupiter",
  saturn: "planet-saturn",
  uranus: "planet-uranus",
  neptune: "planet-neptune",
};

type Props = {
  id: PlanetId;
  size?: number;
  glow?: string;
  className?: string;
  spinning?: boolean;
};

export function PlanetVisual({ id, size = 96, glow, className, spinning }: Props) {
  return (
    <div
      className={cn("relative grid place-items-center", className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {id === "saturn" && size >= 28 ? <span className="saturn-ring" /> : null}
      <div
        className={cn("planet-sphere", classById[id], spinning && "orbit-spin")}
        style={{
          width: size,
          height: size,
          ["--glow" as string]: glow,
          ["--orbit" as string]: "28s",
        }}
      />
    </div>
  );
}
