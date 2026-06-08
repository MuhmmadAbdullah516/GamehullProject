import type { CSSProperties } from "react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { SpinWheelCardProps } from "@/types/free-spin";
import { formatCountdown, formatCurrency, prizes } from "./free-spin-data";

function SpinWheelCard(props: SpinWheelCardProps) {
  const wheelStyle: CSSProperties = { transform: `rotate(${props.rotation}deg)` };
  const spinDisabled = props.spinning || (props.isAuthenticated && props.totalSpinsAvailable <= 0);

  return (
    <section className="grid min-h-96 grid-cols-[minmax(0,1fr)_415px] items-center gap-14 rounded-4xl border border-slate-900/10 bg-white bg-[linear-gradient(135deg,rgba(37,99,235,0.04)_0%,transparent_100%)] px-9 py-12 shadow-card transition duration-300 hover:border-blue-600/20 dark:border-blue-400/20 dark:bg-card-dark-bg dark:bg-[linear-gradient(135deg,rgba(37,99,235,0.08)_0%,transparent_100%)] dark:shadow-card-dark max-lg:grid-cols-1 max-lg:gap-12 max-lg:p-8">
      <div>
        <span className="inline-flex h-7 items-center rounded-full border border-blue-600/20 bg-blue-600/[0.07] px-3.5 text-sm font-bold text-tag-text dark:border-blue-400/25 dark:bg-blue-600/10 dark:!text-tag-dark-text">Daily Bonus</span>
        <h2 className="mb-4 mt-5 max-w-145 text-3xl md:text-4xl font-black leading-tight tracking-normal text-text dark:!text-white">Spin the Wheel &amp; Win</h2>
        <p className="max-w-xl text-base leading-relaxed text-text-body dark:!text-text-dark-body">
          Every player gets <strong>1 free spin per day</strong>. Deposit $50 or more to unlock additional spins.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/10 bg-slate-100 px-3 py-1 text-xs font-bold text-text-subtle dark:border-blue-400/20 dark:bg-white/[0.06] dark:!text-text-dark-dim">
            {props.usedToday ? "Free daily spin used" : "Free daily spin"}
          </span>
        </div>
        <div className="mt-8 w-full max-w-md rounded-2xl border border-slate-900/10 bg-slate-100 px-6 py-5 transition duration-300 hover:border-blue-600/20 dark:border-blue-400/20 dark:bg-white/[0.06]">
          <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-text-muted dark:!text-text-dark-muted">
            <span>Deposit Progress</span><span className="font-semibold normal-case tracking-normal">{props.depositSpins} spins available</span>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <strong className="text-2xl font-black text-text dark:!text-white">{formatCurrency(props.depositAmount)}</strong>
            <span className="text-text-subtle dark:!text-text-dark-dim">/ $50 for +1 spin</span>
          </div>
          <Progress className="mt-5" value={props.depositProgress} />
        </div>
      </div>
      <div className="grid place-items-center max-lg:-order-1">
        <div className="relative grid aspect-square w-80 place-items-center rounded-full border border-black/5 bg-black/[0.02] shadow-card max-sm:w-[min(320px,86vw)]">
          <div className="relative flex size-72 items-center justify-center rounded-full bg-[linear-gradient(135deg,#2563eb,#7c3aed)] p-1 opacity-80 shadow-xl">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-white transition-transform duration-[4000ms] dark:bg-slate-900" style={wheelStyle}>
              {prizes.map((prize, index) => (
                <span className="pointer-events-none absolute left-1/2 top-1/2 select-none text-2xl font-black text-text-muted dark:!text-text-dark-muted" key={`${prize.label}-${index}`} style={{ transform: `translate(-50%,-50%) rotate(${index * 45}deg) translateY(-100px)` }}>
                  {prize.label}
                </span>
              ))}
            </div>
          </div>
          <Button className="absolute z-40 grid aspect-square size-21 place-items-center rounded-full border-4 border-white bg-primary text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50" disabled={spinDisabled} onClick={props.onSpin} type="button">
            {props.spinning ? "..." : !props.isAuthenticated || props.totalSpinsAvailable > 0 ? "SPIN" : "NONE"}
          </Button>
        </div>
        {props.totalSpinsAvailable <= 0 ? (
          <p className="mt-4 max-w-65 text-center text-sm leading-relaxed text-text-muted dark:!text-text-dark-muted">
            Free spin used. Come back in <span className="font-bold text-primary">{formatCountdown(props.countdown)}</span>.
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default SpinWheelCard;
