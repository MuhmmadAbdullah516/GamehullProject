import { TriangleAlert } from "lucide-react";

import type { DeleteWalletModalProps } from "@/types/cashout";

function DeleteWalletModal({ onCancel, onConfirm, wallet }: DeleteWalletModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-[25rem] overflow-hidden rounded-[1.625rem] border border-card-border bg-white shadow-2xl dark:border-card-dark-border dark:bg-card-dark-bg">
        <div className="p-8 text-center">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl border border-red-100 bg-red-50 dark:border-red-500/20 dark:bg-red-500/10">
            <TriangleAlert className="size-8 text-red-500" strokeWidth={2.5} />
          </div>
          <h3 className="mb-3 text-xl font-black tracking-tight text-text-heading dark:text-text-dark-heading">Remove Wallet?</h3>
          <p className="mb-8 text-sm leading-relaxed text-text-muted dark:text-text-dark-muted">
            Are you sure you want to remove your{" "}
            <strong className="text-text-heading dark:text-text-dark-heading">{wallet?.method}</strong> wallet? This
            will stop future cashouts to this address.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              className="h-12 cursor-pointer rounded-xl bg-bg-muted text-sm font-bold text-text-heading transition-all hover:bg-gray-200 dark:bg-bg-dark-muted dark:text-text-dark-heading dark:hover:bg-gray-700"
              onClick={onCancel}
              type="button"
            >
              Cancel
            </button>
            <button
              className="h-12 w-full cursor-pointer rounded-xl bg-red-600 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition-all hover:bg-red-700 active:scale-95"
              onClick={onConfirm}
              type="button"
            >
              Yes, Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteWalletModal;
