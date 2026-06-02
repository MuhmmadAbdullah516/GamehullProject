import { ChevronLeft, CircleDollarSign, Coins, Shield, X, Zap } from "lucide-react";

import { DialogClose } from "@/components/ui/dialog";
import type { DepositPopupProps } from "@/types/header";

function DepositPopup({ onBack, onSelectMethod }: DepositPopupProps) {
  return (
    <>
      <div className="text-center mb-10">
        <div className="flex items-center justify-between mb-2">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
            onClick={onBack}
            type="button"
          >
            <ChevronLeft className="size-5" strokeWidth={2.5} />
          </button>
          <h3 className="text-2xl font-bold text-white tracking-tight">Deposit</h3>
          <DialogClose asChild>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/60 transition-colors cursor-pointer"
              type="button"
            >
              <X className="size-5" strokeWidth={2.5} />
            </button>
          </DialogClose>
        </div>
        <p className="text-sm text-white/40">Select your preferred payment method</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="group relative flex flex-col items-start gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-primary/40 transition-all text-left cursor-pointer" onClick={() => onSelectMethod("CashApp")} type="button">
          <div className="absolute -top-2 -left-2 w-7 h-7 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
            <Zap className="size-3.5 text-white" fill="currentColor" strokeWidth={0} />
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#00d632]/10 border border-[#00d632]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <CircleDollarSign className="size-6 text-[#00d632]" strokeWidth={2.2} />
          </div>
          <span className="text-base font-bold text-white">CashApp</span>
        </button>

        <button className="group relative flex flex-col items-start gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-primary/40 transition-all text-left cursor-pointer" onClick={() => onSelectMethod("Crypto")} type="button">
          <div className="absolute -top-2 -left-2 w-7 h-7 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
            <Zap className="size-3.5 text-white" fill="currentColor" strokeWidth={0} />
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#f7931a]/10 border border-[#f7931a]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Coins className="size-6 text-[#f7931a]" strokeWidth={2.2} />
          </div>
          <span className="text-base font-bold text-white">Crypto</span>
        </button>

        <button className="group flex flex-col items-start gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-primary/40 transition-all text-left cursor-pointer" onClick={() => onSelectMethod("Chime")} type="button">
          <div className="w-12 h-12 rounded-xl bg-[#00d632]/10 border border-[#00d632]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Shield className="size-6 text-[#00d632]" strokeWidth={2.2} />
          </div>
          <span className="text-base font-bold text-white">Chime</span>
        </button>

        <button className="group flex flex-col items-start gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-primary/40 transition-all text-left cursor-pointer" onClick={() => onSelectMethod("Meld")} type="button">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Zap className="size-6 text-[#facc15]" fill="currentColor" strokeWidth={0} />
          </div>
          <span className="text-[15px] font-bold text-white">Meld ({"\uD83C\uDF4E\uD83C\uDF10\uD83D\uDC99\uD83D\uDCB3"})</span>
        </button>
      </div>
    </>
  );
}

export default DepositPopup;
