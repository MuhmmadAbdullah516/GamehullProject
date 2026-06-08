import type { SpinNoticeProps } from "@/types/free-spin";
import { formatCountdown } from "./free-spin-data";

function SpinNotice({ countdown, show }: SpinNoticeProps) {
  if (!show) return null;

  return (
    <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-5 dark:border-amber-800 dark:bg-amber-950/40 sm:flex-row sm:items-center">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900">
        <span className="text-xl font-black text-[#D97706] dark:!text-[#F59E0B]">!</span>
      </div>
      <div className="flex-1">
        <p className="text-base font-bold text-[#92400E] dark:!text-[#FACC15]">Free spin already used today</p>
        <p className="mt-0.5 text-sm leading-relaxed text-[#92400E] dark:!text-[#F59E0B]">
          Come back in <span className="font-bold text-[#B45309] dark:!text-[#FACC15]">{formatCountdown(countdown)}</span> for your next free spin.
        </p>
      </div>
      <div className="min-w-[7.5rem] shrink-0 text-center">
        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#92400E] dark:!text-[#FACC15]">Next free spin</p>
        <p className="text-2xl font-black tabular-nums text-[#B45309] dark:!text-[#FACC15]">{formatCountdown(countdown)}</p>
      </div>
    </div>
  );
}

export default SpinNotice;
