import type { PlatformInfoProps } from "@/types/game-detail";

function PlatformInfo({ details }: PlatformInfoProps) {
  return (
    <div className="space-y-6">
      <article className="rounded-4xl border border-slate-900/10 bg-white p-8 transition-all duration-200 dark:border-blue-400/20 dark:bg-[#0e1629] md:p-10">
        <h2 className="mb-6 text-[17px] font-black tracking-normal text-slate-900 transition-colors dark:text-white">
          Platform Details
        </h2>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
          {[
            ["Type", details.type, "text-slate-900 dark:text-white"],
            ["Payout", details.payout, "text-primary"],
            ["Difficulty", details.difficulty, "text-slate-900 dark:text-white"],
            ["Jackpot", details.jackpot, "text-[#f59e0b]"],
          ].map(([label, value, tone]) => (
            <div key={label}>
              <dt className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400 transition-colors dark:text-zinc-600">
                {label}
              </dt>
              <dd className={`text-[15px] font-black transition-colors ${tone}`}>
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </article>
      <article className="relative overflow-hidden rounded-4xl border border-slate-900/10 bg-primary p-8 text-white shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-all duration-200 dark:border-blue-400/20 dark:bg-[linear-gradient(160deg,#021020_0%,#140540_100%)]">
        <h4 className="relative z-10 mb-2 text-[17px] font-black">Safe Gaming</h4>
        <p className="relative z-10 text-sm leading-relaxed text-white/70">
          Always remember to set your limits. GameHull is committed to responsible gaming.
        </p>
      </article>
    </div>
  );
}

export default PlatformInfo;
