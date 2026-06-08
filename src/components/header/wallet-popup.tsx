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
  const walletDialogClass =
    "wallet-scrollbar relative !max-h-[calc(100dvh-20px)] !w-[calc(100vw-20px)] max-w-[33.75rem] overflow-y-scroll !rounded-2xl border border-white/10 bg-[#0f172a] !p-4 shadow-2xl sm:!max-h-[calc(100vh-40px)] sm:!w-full sm:!rounded-[1.625rem] sm:!p-6 md:!p-8";

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
            className="flex size-10 items-center justify-center rounded-full border-2 border-slate-900/10 bg-slate-100 p-0 text-[#f59e0b] transition-all hover:bg-slate-200 dark:border-blue-400/15 dark:bg-white/[0.06] dark:hover:bg-white/[0.09] lg:hidden"
            type="button"
          >
            <AppWindowMac className="size-4" strokeWidth={2.2} />
          </button>
        ) : (
          <button
            className="hidden h-10 items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-slate-100 px-4 text-base font-bold text-[#f59e0b] transition hover:bg-slate-200 dark:border-blue-400/15 dark:bg-white/[0.06] dark:hover:bg-white/[0.09] lg:inline-flex"
            type="button"
          >
            <AppWindowMac className="size-4" strokeWidth={2.2} />
            <span className="text-sm font-bold leading-5">{balance}</span>
          </button>
        )}
      </DialogTrigger>

      <DialogContent
        className={
          walletStep === "deposit"
            ? walletDialogClass
            : walletStep === "depositPayment"
              ? walletDialogClass
            : `${walletDialogClass} transition-colors`
        }
      >
        {walletStep === "deposit" ? (
          <DepositPopup onBack={() => setWalletStep("wallet")} onSelectMethod={handleDepositMethodSelect} />
        ) : walletStep === "depositPayment" ? (
          <DepositPaymentPopup method={selectedDepositMethod} onBack={() => setWalletStep("deposit")} />
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between sm:mb-8">
              <div className="flex items-center gap-4">
                <div className="flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 sm:size-12">
                  <AppWindowMac className="size-5 sm:size-6" stroke="#3b82f6" strokeWidth={2} />
                </div>

                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  Wallet
                </h2>
              </div>

              <DialogClose asChild>
                <button
                  aria-label="Close wallet"
                  className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 sm:size-10"
                  type="button"
                >
                  <X className="size-4 sm:size-5" strokeWidth={2.5} />
                </button>
              </DialogClose>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-3 sm:mb-8 sm:grid-cols-2 sm:gap-4">
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 sm:rounded-3xl sm:p-6">
                <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-100 transition-opacity">
                  <button
                    aria-label="Refresh balance"
                    className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
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

                <p className="mb-2 text-sm font-medium text-white/40">
                  Available Balance
                </p>
                <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {balance}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:rounded-3xl sm:p-6">
                <p className="mb-2 text-sm font-medium text-white/40">
                  Freeplay Balance
                </p>
                <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  $0.00
                </p>
              </div>
            </div>

            <div className="mb-5 grid grid-cols-1 gap-3 sm:mb-6 sm:grid-cols-2 sm:gap-4">
              <button
                className="flex h-[3.25rem] cursor-pointer items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 text-base font-bold text-white transition-all hover:-translate-y-1 hover:border-primary hover:bg-primary hover:shadow-lg hover:shadow-primary/20 sm:h-[3.75rem] sm:text-lg"
                onClick={() => setWalletStep("deposit")}
                type="button"
              >
                <Download className="size-5" strokeWidth={2.5} />
                Deposit
              </button>

              <DialogClose asChild>
                <Link
                  className="flex h-[3.25rem] cursor-pointer items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 text-base font-bold text-white no-underline transition-all hover:-translate-y-1 hover:border-primary hover:bg-primary hover:shadow-lg hover:shadow-primary/20 sm:h-[3.75rem] sm:text-lg"
                  state={{ fromWithdraw: true }}
                  to="/cashout"
                >
                  <Upload className="size-5" strokeWidth={2.5} />
                  Withdraw
                </Link>
              </DialogClose>
            </div>

            <p className="text-center text-sm text-white/30 font-medium">
              Visit game pages to check game balances
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default WalletPopup;
