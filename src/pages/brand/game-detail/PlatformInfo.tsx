import { Layers } from "lucide-react";

import type { PlatformInfoProps } from "@/types/game-detail";

function PlatformInfo({ details }: PlatformInfoProps) {
  return (
    <div className="space-y-6">
      <article className="rounded-4xl border border-slate-900/10 bg-white p-8 transition-all duration-200 dark:border-blue-400/20 dark:bg-card-dark-bg md:p-10">
        <h2 className="mb-6 text-lg font-black tracking-normal text-slate-900 transition-colors dark:text-white">
          Platform Details
        </h2>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
          {[
            ["Type", details.type, "text-slate-900 dark:text-white"],
            ["Payout", details.payout, "text-primary"],
            ["Difficulty", details.difficulty, "text-slate-900 dark:text-white"],
            ["Jackpot", details.jackpot, "text-amber-500"],
          ].map(([label, value, tone]) => (
            <div key={label}>
              <dt className="mb-1.5 text-xs font-bold uppercase tracking-widest text-slate-400 transition-colors dark:text-zinc-600">
                {label}
              </dt>
              <dd className={`text-base font-black transition-colors ${tone}`}>
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </article>
      <article className="relative overflow-hidden rounded-4xl border border-white/5 bg-primary p-8 text-white shadow-2xl shadow-primary/20 transition-all duration-200 dark:bg-[linear-gradient(160deg,#021020_0%,#140540_100%)]">
        <Layers
          className="absolute right-0 top-0 size-50 -translate-y-1/4 translate-x-1/4 text-white opacity-10"
          fill="currentColor"
          strokeWidth={0}
        />
        <h4 className="relative z-10 mb-2 text-lg font-black">Safe Gaming</h4>
        <p className="relative z-10 text-sm leading-relaxed text-white/70">
          Always remember to set your limits. GameHull is committed to providing a secure and responsible gaming
          environment for everyone.
        </p>
      </article>
    </div>
  );
}

export default PlatformInfo;
