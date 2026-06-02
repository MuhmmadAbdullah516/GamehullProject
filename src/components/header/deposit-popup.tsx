import { ChevronLeft, CircleDollarSign, Coins, Shield, X, Zap } from "lucide-react";

import { DialogClose } from "@/components/ui/dialog";
import type { DepositPopupProps } from "@/types/header";

function DepositPopup({ onBack, onSelectMethod }: DepositPopupProps) {
  return (
    <>
      <div className="mb-8 text-center sm:mb-10">
        <div className="flex items-center justify-between mb-2">
          <button
            className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10 sm:size-10"
            onClick={onBack}
            type="button"
          >
            <ChevronLeft className="size-4 sm:size-5" strokeWidth={2.5} />
          </button>
          <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">Deposit</h3>
          <DialogClose asChild>
            <button
              className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 sm:size-10"
              type="button"
            >
              <X className="size-4 sm:size-5" strokeWidth={2.5} />
            </button>
          </DialogClose>
        </div>
        <p className="text-sm text-white/40">Select your preferred payment method</p>
      </div>

      <div className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:gap-4">
        <button className="group relative flex cursor-pointer flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-primary/40 hover:bg-white/[0.08] sm:gap-4 sm:rounded-3xl sm:p-5" onClick={() => onSelectMethod("CashApp")} type="button">
          <div className="absolute -top-2 -left-2 w-7 h-7 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
            <Zap className="size-3.5 text-white" fill="currentColor" strokeWidth={0} />
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#00d632]/10 border border-[#00d632]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <CircleDollarSign className="size-6 text-[#00d632]" strokeWidth={2.2} />
          </div>
          <span className="text-base font-bold text-white">CashApp</span>
        </button>

        <button className="group relative flex cursor-pointer flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-primary/40 hover:bg-white/[0.08] sm:gap-4 sm:rounded-3xl sm:p-5" onClick={() => onSelectMethod("Crypto")} type="button">
          <div className="absolute -top-2 -left-2 w-7 h-7 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
            <Zap className="size-3.5 text-white" fill="currentColor" strokeWidth={0} />
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#f7931a]/10 border border-[#f7931a]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Coins className="size-6 text-[#f7931a]" strokeWidth={2.2} />
          </div>
          <span className="text-base font-bold text-white">Crypto</span>
        </button>

        <button className="group flex cursor-pointer flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-primary/40 hover:bg-white/[0.08] sm:gap-4 sm:rounded-3xl sm:p-5" onClick={() => onSelectMethod("Chime")} type="button">
          <div className="w-12 h-12 rounded-xl bg-[#00d632]/10 border border-[#00d632]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Shield className="size-6 text-[#00d632]" strokeWidth={2.2} />
          </div>
          <span className="text-base font-bold text-white">Chime</span>
        </button>

        <button className="group flex cursor-pointer flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-primary/40 hover:bg-white/[0.08] sm:gap-4 sm:rounded-3xl sm:p-5" onClick={() => onSelectMethod("Meld")} type="button">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Zap className="size-6 text-[#facc15]" fill="currentColor" strokeWidth={0} />
          </div>
          <span className="text-base font-bold text-white">Meld ({"\uD83C\uDF4E\uD83C\uDF10\uD83D\uDC99\uD83D\uDCB3"})</span>
        </button>
      </div>
    </>
  );
}

export default DepositPopup;
