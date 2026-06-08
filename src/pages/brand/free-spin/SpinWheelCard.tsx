import type { CSSProperties } from "react";
import { X } from "lucide-react";

import type { SpinWheelCardProps } from "@/types/free-spin";
import { formatCountdown, formatCurrency, prizes } from "./free-spin-data";

function SpinWheelCard(props: SpinWheelCardProps) {
  const wheelStyle: CSSProperties = { transform: `rotate(${props.rotation}deg)` };
  const spinDisabled = props.spinning || (props.isAuthenticated && props.totalSpinsAvailable <= 0);

  return (
    <section
      aria-labelledby="spin-card-title"
      className="grid min-h-[381px] grid-cols-[minmax(0,1fr)_415px] items-center gap-[54px] rounded-[32px] border border-card-border bg-card-bg bg-[linear-gradient(135deg,rgba(37,99,235,0.04)_0%,transparent_100%)] px-9 py-12 shadow-card transition duration-300 hover:border-tag-border dark:border-card-dark-border dark:bg-card-dark-bg dark:bg-[linear-gradient(135deg,rgba(37,99,235,0.08)_0%,transparent_100%)] dark:shadow-card-dark dark:hover:border-tag-dark-border max-lg:grid-cols-1 max-lg:gap-12 max-lg:p-8 max-sm:rounded-[24px] max-sm:p-6"
    >
      <div>
        <span className="inline-flex h-[27px] items-center rounded-full border border-tag-border bg-tag-bg px-3.5 text-sm font-bold text-tag-text dark:border-tag-dark-border dark:bg-tag-dark-bg dark:text-tag-dark-text">
          Daily Bonus
        </span>
        <h2
          className="mb-4 mt-5 max-w-[580px] text-[clamp(28px,3vw,40px)] font-black leading-[1.2] tracking-normal text-text-heading dark:text-text-dark-heading"
          id="spin-card-title"
        >
          Spin the Wheel &amp; Win
        </h2>
        <p className="max-w-[566px] text-base leading-[1.6] text-text-body dark:text-text-dark-body">
          Every player gets <strong>1 free spin per day</strong>. Deposit $50 or more to unlock additional spins.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-bg-muted px-3 py-1 text-xs font-bold text-text-dim dark:border-card-dark-border dark:bg-bg-dark-muted dark:text-text-dark-dim">
            {props.usedToday ? <X className="size-3" strokeWidth={2.5} /> : null}
            {props.usedToday ? "Free daily spin used" : "Free daily spin"}
          </span>
        </div>
        <div
          aria-label="Daily deposit progress"
          className="mt-8 w-[min(433px,100%)] rounded-2xl border border-card-border bg-bg-muted px-6 py-5 transition duration-300 hover:border-tag-border dark:border-card-dark-border dark:bg-bg-dark-muted dark:hover:border-tag-dark-border"
        >
          <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-text-muted dark:text-text-dark-muted max-sm:flex-col max-sm:items-start max-sm:gap-1.5">
            <span>Deposit Progress</span>
            <span className="font-semibold normal-case tracking-normal">{props.depositSpins} spins available</span>
          </div>
          <div className="mt-4 flex items-center gap-[18px]">
            <strong className="text-2xl font-black text-text-heading dark:text-text-dark-heading">{formatCurrency(props.depositAmount)}</strong>
            <span className="text-text-dim dark:text-text-dark-dim">/ $50 for +1 spin</span>
          </div>
          <div
            aria-valuemax={50}
            aria-valuemin={0}
            aria-valuenow={props.depositAmount}
            className="mt-5 h-2 overflow-hidden rounded-full bg-bg-hover shadow-inner dark:bg-bg-dark-hover"
            role="progressbar"
          >
            <div
              className="h-full rounded-full bg-primary shadow-[0_0_12px_rgba(37,99,235,0.4)] transition-all duration-1000 ease-out"
              style={{ width: `${props.depositProgress}%` }}
            />
          </div>
        </div>
      </div>
      <div aria-label="Prize wheel" className="grid place-items-center max-lg:-order-1">
        <div className="relative grid aspect-square w-80 place-items-center rounded-full border border-black/[0.06] bg-black/[0.02] shadow-card transition-all duration-500 ease-out before:absolute before:left-1/2 before:top-[-8px] before:z-30 before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[12px] before:border-t-[24px] before:border-x-transparent before:border-t-text-dim dark:border-white/[0.06] dark:bg-white/[0.02] dark:before:border-t-text-dark-dim max-sm:w-[min(320px,86vw)]">
          <div className="relative flex h-[286px] w-[286px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#2563eb,#7c3aed)] p-1 opacity-50 shadow-xl">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-white transition-transform duration-[4000ms] dark:bg-[#0f172a]" style={wheelStyle}>
              <div className="absolute inset-0 rotate-[22.5deg]">
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent_0%,rgba(37,99,235,0.2)_50%,transparent_100%)]" />
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rotate-45 bg-[linear-gradient(180deg,transparent_0%,rgba(37,99,235,0.2)_50%,transparent_100%)]" />
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rotate-90 bg-[linear-gradient(180deg,transparent_0%,rgba(37,99,235,0.2)_50%,transparent_100%)]" />
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rotate-[135deg] bg-[linear-gradient(180deg,transparent_0%,rgba(37,99,235,0.2)_50%,transparent_100%)]" />
              </div>
              {prizes.map((prize, index) => (
                <span
                  className="pointer-events-none absolute left-1/2 top-1/2 select-none text-[22px] font-black text-text-muted dark:text-text-dark/80"
                  key={`${prize.label}-${index}`}
                  style={{ transform: `translate(-50%,-50%) rotate(${index * 45}deg) translateY(-100px)` }}
                >
                  {prize.label}
                </span>
              ))}
            </div>
          </div>
          <button
            className="group absolute z-40 grid aspect-square w-[84px] place-items-center rounded-full border-[6px] border-white bg-[linear-gradient(135deg,#2563eb,#7c3aed)] p-1 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 dark:border-[#1e293b]"
            disabled={spinDisabled}
            onClick={props.onSpin}
            type="button"
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-primary text-white">
              {props.spinning ? (
                <span className="size-6 animate-spin rounded-full border-4 border-current border-r-transparent opacity-90" />
              ) : (
                <span className="select-none text-sm font-black leading-none transition-transform group-hover:scale-110">
                  {!props.isAuthenticated || props.totalSpinsAvailable > 0 ? "SPIN" : "NONE"}
                </span>
              )}
            </span>
          </button>
        </div>
        {props.totalSpinsAvailable <= 0 ? (
          <p className="mt-4 max-w-[260px] text-center text-[13px] leading-relaxed text-text-muted dark:text-text-dark-muted">
            Free spin used. Come back in <span className="font-bold text-[#2563EB]">{formatCountdown(props.countdown)}</span>.
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default SpinWheelCard;
