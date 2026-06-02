import { ChevronLeft, Coins, Download, Wallet, X } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { DialogClose, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { CashinDialogProps } from "@/types/game-detail";

const cashinPresetAmounts = [5, 10, 20, 50, 100];
const walletBalance = 9;

function CashinDialog({ gameName, onComplete }: CashinDialogProps) {
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState<"source" | "amount">("source");

  function handleCashinSubmit() {
    const numericAmount = Number(amount);

    if (!amount.trim()) {
      toast.error("Please enter a cashin amount.");
      return;
    }

    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      toast.error("Enter a valid cashin amount.");
      return;
    }

    if (numericAmount > walletBalance) {
      toast.error("Cashin amount exceeds wallet balance.");
      return;
    }

    onComplete(amount);
  }

  return (
    <DialogContent className="wallet-scrollbar max-h-[calc(100vh-40px)] max-w-110 overflow-y-auto rounded-3xl border border-white/10 bg-[#0f172a] p-6 text-center text-white shadow-2xl dark:bg-[#020617] md:p-8">
      {step === "amount" ? (
        <button className="absolute left-6 top-6 flex cursor-pointer items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white" onClick={() => setStep("source")} type="button">
          <ChevronLeft className="size-4" strokeWidth={2.5} />
          Back
        </button>
      ) : null}

      <DialogClose asChild>
        <button aria-label="Close cashin popup" className="absolute right-6 top-6 flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white" type="button">
          <X className="size-5" strokeWidth={2.5} />
        </button>
      </DialogClose>

      <div className="flex flex-col items-center text-center">
        <div className="mb-6 flex size-16 items-center justify-center rounded-5 border border-primary/20 bg-primary/10 text-primary">
          <Download className="size-8" strokeWidth={2} />
        </div>
        <h2 className="mb-1 text-2xl font-bold leading-tight text-white">Cashin</h2>
        <p className="text-sm text-white/60">to {gameName}</p>
      </div>

      {step === "source" ? (
        <div className="mt-8">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-wider text-white/40">
            Choose source for cashin:
          </p>
          <div className="space-y-3">
            <button className="group flex w-full cursor-pointer items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition-all hover:border-white/20 hover:bg-white/10" onClick={() => setStep("amount")} type="button">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-transform group-hover:scale-110">
                <Wallet className="size-6" strokeWidth={2} />
              </span>
              <span className="flex-grow">
                <span className="block text-base font-bold leading-tight text-white">GameHull Wallet</span>
                <span className="mt-1 block text-sm leading-tight text-white/50">
                  Available: ${walletBalance.toFixed(2)}
                </span>
              </span>
            </button>

            <button className="flex w-full cursor-not-allowed items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 text-left opacity-50" disabled type="button">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-amber-500">
                <Coins className="size-6" strokeWidth={2} />
              </span>
              <span className="flex-grow">
                <span className="block text-base font-bold leading-tight text-white">Freeplay Bonus</span>
                <span className="mt-1 block text-sm leading-tight text-white/50">Available: $0.00</span>
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-8 space-y-4 text-left">
          <div className="mb-8 rounded-5 border border-white/10 bg-white/5 p-6 text-center">
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-white/40">Wallet Balance</p>
            <p className="text-4xl font-black leading-none text-white">${walletBalance.toFixed(2)}</p>
          </div>

          <div>
            <label className="mb-2 ml-1 block text-sm font-bold text-white/60" htmlFor="cashin-amount">
              Amount to Cashin
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-white/40">$</span>
              <input className="h-14 w-full appearance-none rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-xl font-bold text-white outline-none transition-colors placeholder:text-white/40 focus:border-primary" id="cashin-amount" inputMode="numeric" min={1} onChange={(event) => setAmount(event.target.value)} placeholder="0" type="number" value={amount} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
            {cashinPresetAmounts.map((presetAmount) => (
              <button className={cn("h-10 cursor-pointer rounded-lg border border-white/10 bg-white/5 text-sm font-bold text-white/60 transition-all hover:bg-white/10 hover:text-white", Number(amount) === presetAmount && "border-primary/40 bg-primary/20 text-white")} key={presetAmount} onClick={() => setAmount(String(presetAmount))} type="button">
                ${presetAmount}
              </button>
            ))}
          </div>

          <Button className="mt-4 !h-14 w-full gap-2 rounded-xl bg-primary text-base font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-hover disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0" onClick={handleCashinSubmit} type="button">
            <Download className="size-5" strokeWidth={2.5} />
            Cashin
          </Button>

          <p className="mx-auto mt-6 max-w-70 text-center text-sm leading-relaxed text-white/40">
            Funds will be deducted from your wallet and added to your {gameName} account.
          </p>
        </div>
      )}
    </DialogContent>
  );
}

export default CashinDialog;
