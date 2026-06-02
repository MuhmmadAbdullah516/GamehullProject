import { AppWindowMac, Download, RefreshCw, Upload, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import type { DepositMethodName, WalletPopupProps, WalletStep } from "@/types/header";
import DepositPaymentPopup from "./deposit-payment-popup";
import DepositPopup from "./deposit-popup";

function WalletPopup({ balance, compact = false }: WalletPopupProps) {
  const [refreshRotation, setRefreshRotation] = useState(0);
  const [selectedDepositMethod, setSelectedDepositMethod] = useState<DepositMethodName>("CashApp");
  const [walletStep, setWalletStep] = useState<WalletStep>("wallet");

  function handleRefreshClick() {
    setRefreshRotation((currentRotation) => currentRotation + 360);
  }

  function handleOpenChange(isOpen: boolean) {
    if (!isOpen) {
      setWalletStep("wallet");
      setSelectedDepositMethod("CashApp");
    }
  }

  function handleDepositMethodSelect(method: DepositMethodName) {
    setSelectedDepositMethod(method);
    setWalletStep("depositPayment");
  }

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {compact ? (
          <button
            aria-label="Open wallet"
            className="flex size-[42px] items-center justify-center rounded-full border-[1.5px] border-slate-900/10 bg-slate-100 p-0 text-[#f59e0b] transition-all hover:bg-slate-200 dark:border-blue-400/15 dark:bg-white/[0.06] dark:hover:bg-white/[0.09] lg:hidden"
            type="button"
          >
            <AppWindowMac className="size-[15px]" strokeWidth={2.2} />
          </button>
        ) : (
          <button
            className="hidden h-[42px] items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-slate-100 px-4 text-[15px] font-bold text-[#f59e0b] transition hover:bg-slate-200 dark:border-blue-400/15 dark:bg-white/[0.06] dark:hover:bg-white/[0.09] lg:inline-flex"
            type="button"
          >
            <AppWindowMac className="size-[15px]" strokeWidth={2.2} />
            <span className="text-sm font-bold leading-[21px]">{balance}</span>
          </button>
        )}
      </DialogTrigger>

      <DialogContent
        className={
          walletStep === "deposit"
            ? "wallet-scrollbar relative w-full max-w-[540px] max-h-[calc(100vh-40px)] overflow-y-auto bg-[#0f172a] border border-white/10 rounded-4xl shadow-2xl p-6 md:p-8"
            : walletStep === "depositPayment"
              ? "wallet-scrollbar relative w-full max-w-[540px] max-h-[calc(100vh-40px)] overflow-y-auto bg-[#0f172a] border border-white/10 rounded-4xl shadow-2xl p-6 md:p-8"
            : "wallet-scrollbar relative w-full max-w-[540px] max-h-[calc(100vh-40px)] overflow-y-auto bg-[#0f172a] border border-white/10 rounded-4xl shadow-2xl p-6 md:p-8 overflow-hidden transition-colors"
        }
      >
        {walletStep === "deposit" ? (
          <DepositPopup onBack={() => setWalletStep("wallet")} onSelectMethod={handleDepositMethodSelect} />
        ) : walletStep === "depositPayment" ? (
          <DepositPaymentPopup method={selectedDepositMethod} onBack={() => setWalletStep("deposit")} />
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <AppWindowMac className="size-6" stroke="#3b82f6" strokeWidth={2} />
                </div>

                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Wallet
                </h2>
              </div>

              <DialogClose asChild>
                <button
                  aria-label="Close wallet"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/60 transition-colors cursor-pointer"
                  type="button"
                >
                  <X className="size-5" strokeWidth={2.5} />
                </button>
              </DialogClose>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group">
                <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-100 transition-opacity">
                  <button
                    aria-label="Refresh balance"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                    onClick={handleRefreshClick}
                    type="button"
                  >
                    <RefreshCw
                      className="transition-transform duration-500"
                      height={14}
                      strokeWidth={2}
                      style={{ transform: `rotate(${refreshRotation}deg)` }}
                      width={14}
                    />
                  </button>
                </div>

                <p className="text-[13px] font-medium text-white/40 mb-2">
                  Available Balance
                </p>
                <p className="text-[28px] font-bold text-white tracking-tight">
                  {balance}
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                <p className="text-[13px] font-medium text-white/40 mb-2">
                  Freeplay Balance
                </p>
                <p className="text-[28px] font-bold text-white tracking-tight">
                  $0.00
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <button
                className="flex items-center justify-center gap-3 h-15 bg-white/5 border border-white/10 hover:bg-primary hover:border-primary text-white text-[17px] font-bold rounded-full transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                onClick={() => setWalletStep("deposit")}
                type="button"
              >
                <Download className="size-5" strokeWidth={2.5} />
                Deposit
              </button>

              <DialogClose asChild>
                <Link
                  className="flex items-center justify-center gap-3 h-15 bg-white/5 border border-white/10 hover:bg-primary hover:border-primary text-white text-[17px] font-bold rounded-full transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 cursor-pointer no-underline"
                  state={{ fromWithdraw: true }}
                  to="/cashout"
                >
                  <Upload className="size-5" strokeWidth={2.5} />
                  Withdraw
                </Link>
              </DialogClose>
            </div>

            <p className="text-center text-[13px] text-white/30 font-medium">
              Visit game pages to check game balances
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default WalletPopup;
