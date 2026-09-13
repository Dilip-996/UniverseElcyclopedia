import { starLife } from "@/data/stars";

export function StarLifeTimeline() {
  return (
    <div className="overflow-x-auto no-scrollbar">
      <ol className="flex min-w-[880px] items-stretch gap-0 pb-4">
        {starLife.map((stage, index) => (
          <li key={stage.id} className="relative w-64 shrink-0 px-2">
            <div className="mb-5 flex items-center">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white font-display text-space-950">
                {index + 1}
              </span>
              {index < starLife.length - 1 ? <span className="h-px flex-1 timeline-line" /> : null}
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-solar">{stage.age}</p>
              <h3 className="mt-2 font-display text-2xl">{stage.title}</h3>
              <p className="mt-3 text-slate-300">{stage.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
