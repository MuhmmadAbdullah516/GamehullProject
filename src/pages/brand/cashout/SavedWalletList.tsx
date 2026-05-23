import { X } from "lucide-react";

import type { SavedWallet } from "./cashout-types";

type SavedWalletListProps = {
  onOpenDeleteModal: (wallet: SavedWallet) => void;
  savedWallets: SavedWallet[];
};

function SavedWalletList({ onOpenDeleteModal, savedWallets }: SavedWalletListProps) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {savedWallets.map((wallet) => (
        <div
          className="rounded-2xl border border-card-border bg-bg-muted/50 p-6 transition-colors dark:border-card-dark-border dark:bg-bg-dark-muted"
          key={wallet.id}
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-center gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.08] text-2xl font-black text-primary dark:bg-primary/[0.12]">
                {wallet.method[0]}
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-xl font-black leading-tight text-text-heading dark:text-text-dark-heading">
                  {wallet.method}
                </h3>
                <p className="truncate text-[13px] font-bold uppercase tracking-wide text-primary">{wallet.label}</p>
              </div>
            </div>

            <button
              aria-label={`Remove ${wallet.method} wallet`}
              className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition-colors hover:bg-red-500/15"
              onClick={() => onOpenDeleteModal(wallet)}
              type="button"
            >
              <X className="size-5" strokeWidth={2.5} />
            </button>
          </div>

          <p className="mb-2 text-[13px] font-black uppercase tracking-wide text-text-muted dark:text-text-dark-muted">
            Wallet Address
          </p>
          <div className="rounded-xl bg-white px-4 py-4 font-mono text-sm text-text dark:bg-white/[0.06] dark:text-text-dark">
            {wallet.address}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SavedWalletList;
