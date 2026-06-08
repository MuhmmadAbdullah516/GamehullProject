import { ChevronDown } from "lucide-react";

import { walletMethods } from "./cashout-data";
import type { CashoutWalletFormProps } from "@/types/cashout";

const fieldClassName =
  "w-full rounded-xl border border-blue-300/15 bg-transparent px-4 py-3 text-sm text-text-heading outline-none transition placeholder:text-text-muted focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/25 dark:text-white dark:placeholder:text-slate-400";

function CashoutWalletForm({
  formState,
  onAddressChange,
  onLabelChange,
  onSaveWallet,
  onSelectWalletMethod,
  onToggleMethodList,
}: CashoutWalletFormProps) {
  return (
    <div className="mb-8 rounded-2xl border border-primary/10 bg-primary/[0.02] p-8 dark:bg-primary/[0.05]">
      <form className="space-y-6" onSubmit={onSaveWallet}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <label className="ml-1 block text-sm font-bold text-text-heading dark:text-text-dark-heading">Payment Method</label>
            <div className="group relative">
              <button
                className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-blue-300/15 bg-transparent py-2.5 pl-4 pr-10 text-left text-sm text-text-heading outline-none transition focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/25 dark:text-white"
                onClick={onToggleMethodList}
                type="button"
              >
                <span className={formState.walletMethod ? "text-text-heading dark:text-white" : "text-text-muted"}>
                  {formState.walletMethodLabel}
                </span>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ChevronDown className={`size-4 text-text-muted transition-transform duration-200 ${formState.showMethodList ? "rotate-180" : ""}`} strokeWidth={2.5} />
                </div>
              </button>

              {formState.showMethodList ? (
                <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-lg border border-border bg-white p-1.5 shadow-xl dark:border-border-dark dark:bg-bg-dark">
                  {walletMethods.map((method) => (
                    <button
                      className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                        formState.walletMethod === method.value
                          ? "bg-primary/10 font-bold text-primary"
                          : "text-text hover:bg-bg-muted dark:text-text-dark dark:hover:bg-bg-dark-muted"
                      }`}
                      key={method.value}
                      onClick={() => onSelectWalletMethod(method)}
                      type="button"
                    >
                      <div className="flex size-6 items-center justify-center rounded-lg bg-primary/[0.08] text-xs font-black">
                        {method.label[0]}
                      </div>
                      {method.label}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="space-y-2">
            <label className="ml-1 block text-sm font-bold text-text-heading dark:text-text-dark-heading">Wallet Address / Tag</label>
            <input
              className={fieldClassName}
              onChange={(event) => onAddressChange(event.target.value)}
              placeholder="$CashTag, phone, or address"
              type="text"
              value={formState.walletAddress}
            />
          </div>

          <div className="space-y-2">
            <label className="ml-1 block text-sm font-bold text-text-heading dark:text-text-dark-heading">
              Label <span className="text-xs font-normal opacity-50">(e.g., My CashApp)</span>
            </label>
            <input
              className={fieldClassName}
              onChange={(event) => onLabelChange(event.target.value)}
              placeholder="Personal label (optional)"
              type="text"
              value={formState.walletLabel}
            />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button className="w-full cursor-pointer rounded-full bg-primary px-10 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover active:scale-95 md:w-auto" type="submit">
            Save Secure Wallet
          </button>
        </div>
      </form>
    </div>
  );
}

export default CashoutWalletForm;
