import { homeJourney } from "@/data/facts";

export function CosmicPath() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-[8%] right-[8%] top-[58px] hidden h-px bg-gradient-to-r from-aurora via-nebula to-solar lg:block" />
      <ol className="flex gap-4 overflow-x-auto pb-4 no-scrollbar lg:grid lg:grid-cols-5 lg:overflow-visible">
        {homeJourney.map((stop, index) => (
          <li key={stop.id} className="w-[220px] shrink-0 lg:w-auto">
            <div className="flex flex-col items-center text-center">
              <div
                className="relative z-10 grid h-[72px] w-[72px] place-items-center rounded-full font-display text-xl text-space-950 shadow-[0_0_24px_rgba(255,255,255,0.12)]"
                style={{ background: stop.color }}
              >
                {index + 1}
              </div>
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
                {stop.subtitle}
              </p>
              <h3 className="mt-2 font-display text-2xl text-white">{stop.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{stop.fact}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
