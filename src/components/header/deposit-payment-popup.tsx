import { ChevronLeft, X, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

import { DialogClose } from "@/components/ui/dialog";
import type { DepositPaymentPopupProps } from "@/types/header";

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
      <div className="mb-5 text-center sm:mb-6">
        <div className="flex items-center justify-between mb-2">
          <button
            className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10 sm:size-10"
            onClick={onBack}
            type="button"
          >
            <ChevronLeft className="size-4 sm:size-5" strokeWidth={2.5} />
          </button>

          <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{method}</h3>

          <DialogClose asChild>
            <button
              className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 sm:size-10"
              type="button"
            >
              <X className="size-4 sm:size-5" strokeWidth={2.5} />
            </button>
          </DialogClose>
        </div>

        <p className="text-sm text-white/40">Enter amount to deposit</p>
      </div>

      <div className="mb-6 flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/10 p-4 sm:mb-8 sm:gap-4 sm:rounded-[1.25rem] sm:p-5">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
          <Zap className="size-5 text-[#3b82f6]" fill="currentColor" strokeWidth={0} />
        </div>
        <p className="text-sm leading-relaxed text-primary font-medium">
          Instant deposit. You'll be redirected to complete payment securely.
        </p>
      </div>

      <div className="mb-6 space-y-5 sm:mb-8">
        <div>
          <label className="block text-sm font-semibold text-white/40 mb-3 ml-1" htmlFor="deposit-amount">
            Deposit Amount ($15 - $500)
          </label>
          <div className="relative">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg font-bold text-white/30">$</span>
            <input
              className="h-14 w-full rounded-xl border border-blue-300/15 bg-transparent pl-10 pr-6 text-lg font-bold text-white outline-none transition placeholder:text-slate-400 focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/25 sm:h-[4.25rem] sm:text-xl"
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

        <div className="grid grid-cols-2 gap-2 min-[380px]:grid-cols-4">
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
        className="mb-5 h-14 w-full cursor-pointer rounded-full bg-primary text-base font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 hover:bg-primary-hover sm:mb-6 sm:h-[4.25rem] sm:text-lg"
        onClick={handlePayNow}
        type="button"
      >
        Pay Now
      </button>

      <p className="text-center text-sm text-white/30 font-medium tracking-wide">
        Secure payment. Instant credit to wallet.
      </p>
    </>
  );
}

export default DepositPaymentPopup;
