import type { Mission } from "@/data/missions";

export function MissionCard({ mission, featured = false }: { mission: Mission; featured?: boolean }) {
  return (
    <article
      className={`rounded-[32px] border border-white/10 bg-white/5 p-6 ${featured ? "md:grid md:grid-cols-[180px_1fr] md:items-center md:gap-8" : ""}`}
    >
      <div
        className="mb-5 grid h-24 place-items-center rounded-[24px] font-display text-4xl text-space-950 md:mb-0"
        style={{ background: mission.color }}
      >
        {mission.year}
      </div>
      <div>
        <h3 className="font-display text-3xl text-white">{mission.name}</h3>
        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-aurora">{mission.destination}</p>
        <p className="mt-4 leading-relaxed text-slate-300">{mission.achievement}</p>
        <p className="mt-4 rounded-2xl bg-white/5 px-4 py-3 text-solar">{mission.funFact}</p>
      </div>
    </article>
  );
}
