import type { CSSProperties } from "react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { SpinWheelCardProps } from "@/types/free-spin";
import { formatCountdown, formatCurrency, prizes } from "./free-spin-data";

function SpinWheelCard(props: SpinWheelCardProps) {
  const wheelStyle: CSSProperties = { transform: `rotate(${props.rotation}deg)` };
  const spinDisabled = props.spinning || (props.isAuthenticated && props.totalSpinsAvailable <= 0);

  return (
    <section className="grid min-h-[381px] grid-cols-[minmax(0,1fr)_415px] items-center gap-[54px] rounded-4xl border border-slate-900/10 bg-white bg-[linear-gradient(135deg,rgba(37,99,235,0.04)_0%,transparent_100%)] px-9 py-12 shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition duration-300 hover:border-blue-600/20 dark:border-blue-400/20 dark:bg-[#0e1629] dark:bg-[linear-gradient(135deg,rgba(37,99,235,0.08)_0%,transparent_100%)] max-lg:grid-cols-1 max-lg:gap-12 max-lg:p-8">
      <div>
        <span className="inline-flex h-[27px] items-center rounded-full border border-blue-600/20 bg-blue-600/[0.07] px-3.5 text-sm font-bold text-[#1D4ED8] dark:border-blue-400/25 dark:bg-blue-600/10 dark:!text-[#BFDBFE]">Daily Bonus</span>
        <h2 className="mb-4 mt-5 max-w-[580px] text-[clamp(28px,3vw,40px)] font-black leading-[1.2] tracking-normal text-[#0F172A] dark:!text-[#FFFFFF]">Spin the Wheel & Win</h2>
        <p className="max-w-[566px] text-base leading-[1.6] text-[#475569] dark:!text-[#A1A1AA]">
          Every player gets <strong>1 free spin per day</strong>. Deposit $50 or more to unlock additional spins.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/10 bg-slate-100 px-3 py-1 text-xs font-bold text-[#94A3B8] dark:border-blue-400/20 dark:bg-white/[0.06] dark:!text-[#52525B]">
            {props.usedToday ? "Free daily spin used" : "Free daily spin"}
          </span>
        </div>
        <div className="mt-8 w-full max-w-[433px] rounded-2xl border border-slate-900/10 bg-slate-100 px-6 py-5 transition duration-300 hover:border-blue-600/20 dark:border-blue-400/20 dark:bg-white/[0.06]">
          <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-[#64748B] dark:!text-[rgba(255,255,255,0.55)]">
            <span>Deposit Progress</span><span className="font-semibold normal-case tracking-normal">{props.depositSpins} spins available</span>
          </div>
          <div className="mt-4 flex items-center gap-[18px]">
            <strong className="text-2xl font-black text-[#0F172A] dark:!text-[#FFFFFF]">{formatCurrency(props.depositAmount)}</strong>
            <span className="text-[#94A3B8] dark:!text-[#52525B]">/ $50 for +1 spin</span>
          </div>
          <Progress className="mt-5" value={props.depositProgress} />
        </div>
      </div>
      <div className="grid place-items-center max-lg:-order-1">
        <div className="relative grid aspect-square w-80 place-items-center rounded-full border border-black/5 bg-black/[0.02] shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] max-sm:w-[min(320px,86vw)]">
          <div className="relative flex size-[286px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#2563eb,#7c3aed)] p-1 opacity-80 shadow-xl">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-white transition-transform duration-[4000ms] dark:bg-[#0f172a]" style={wheelStyle}>
              {prizes.map((prize, index) => (
                <span className="pointer-events-none absolute left-1/2 top-1/2 select-none text-[22px] font-black text-[#64748B] dark:!text-white/55" key={`${prize.label}-${index}`} style={{ transform: `translate(-50%,-50%) rotate(${index * 45}deg) translateY(-100px)` }}>
                  {prize.label}
                </span>
              ))}
            </div>
          </div>
          <Button className="absolute z-40 grid aspect-square size-[84px] place-items-center rounded-full border-[6px] border-white bg-primary text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50" disabled={spinDisabled} onClick={props.onSpin} type="button">
            {props.spinning ? "..." : !props.isAuthenticated || props.totalSpinsAvailable > 0 ? "SPIN" : "NONE"}
          </Button>
        </div>
        {props.totalSpinsAvailable <= 0 ? (
          <p className="mt-4 max-w-65 text-center text-[13px] leading-relaxed text-[#64748B] dark:!text-white/55">
            Free spin used. Come back in <span className="font-bold text-[#2563EB]">{formatCountdown(props.countdown)}</span>.
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default SpinWheelCard;
