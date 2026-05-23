import { ChevronLeft, X, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

import { DialogClose } from "@/components/ui/dialog";
import type { DepositMethodName } from "./deposit-popup";

type DepositPaymentPopupProps = {
  method: DepositMethodName;
  onBack: () => void;
};

const depositAmounts = [15, 20, 25, 30, 50, 100, 250, 500];

function DepositPaymentPopup({ method, onBack }: DepositPaymentPopupProps) {
  const [amount, setAmount] = useState("");

  function handlePayNow() {
    const numericAmount = Number(amount);

    if (!amount.trim()) {
      toast.error("Please enter a deposit amount.");
      return;
    }

    if (!Number.isFinite(numericAmount) || numericAmount < 15 || numericAmount > 500) {
      toast.error("Deposit amount must be between $15 and $500.");
      return;
    }

    toast.success(`${method} deposit request started.`);
  }

  return (
    <>
      <div className="text-center mb-6">
        <div className="flex items-center justify-between mb-2">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
            onClick={onBack}
            type="button"
          >
            <ChevronLeft className="size-5" strokeWidth={2.5} />
          </button>

          <h3 className="text-2xl font-bold text-white tracking-tight">{method}</h3>

          <DialogClose asChild>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/60 transition-colors cursor-pointer"
              type="button"
            >
              <X className="size-5" strokeWidth={2.5} />
            </button>
          </DialogClose>
        </div>

        <p className="text-sm text-white/40">Enter amount to deposit</p>
      </div>

      <div className="flex items-start gap-4 p-5 rounded-[20px] bg-primary/10 border border-primary/20 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
          <Zap className="size-5 text-[#3b82f6]" fill="currentColor" strokeWidth={0} />
        </div>
        <p className="text-sm leading-relaxed text-primary font-medium">
          Instant deposit. You'll be redirected to complete payment securely.
        </p>
      </div>

      <div className="space-y-5 mb-8">
        <div>
          <label className="block text-[13px] font-semibold text-white/40 mb-3 ml-1" htmlFor="deposit-amount">
            Deposit Amount ($15 - $500)
          </label>
          <div className="relative">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg font-bold text-white/30">$</span>
            <input
              className="w-full h-17 pl-10 pr-6 bg-white/5 border border-white/10 rounded-[22px] text-xl font-bold text-white outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-white/10"
              id="deposit-amount"
              inputMode="numeric"
              max={500}
              min={15}
              onChange={(event) => setAmount(event.target.value)}
              placeholder="0.00"
              type="number"
              value={amount}
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {depositAmounts.map((depositAmount) => (
            <button
              className={`h-12 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-sm font-bold text-white transition-all cursor-pointer ${
                amount === String(depositAmount) ? "bg-primary/20 border-primary/40 text-primary" : ""
              }`}
              key={depositAmount}
              onClick={() => setAmount(String(depositAmount))}
              type="button"
            >
              ${depositAmount}
            </button>
          ))}
        </div>
      </div>

      <button
        className="w-full h-17 bg-primary hover:bg-primary-hover text-white text-lg font-bold rounded-full transition-all hover:-translate-y-1 shadow-lg shadow-primary/20 mb-6 cursor-pointer"
        onClick={handlePayNow}
        type="button"
      >
        Pay Now
      </button>

      <p className="text-center text-[13px] text-white/30 font-medium tracking-wide">
        Secure payment. Instant credit to wallet.
      </p>
    </>
  );
}

export default DepositPaymentPopup;
