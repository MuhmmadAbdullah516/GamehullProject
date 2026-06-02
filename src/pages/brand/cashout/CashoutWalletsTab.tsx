import { Plus, Wallet } from "lucide-react";

import CashoutWalletForm from "./CashoutWalletForm";
import type { CashoutWalletsTabProps } from "@/types/cashout";
import EmptyWalletState from "./EmptyWalletState";
import SavedWalletList from "./SavedWalletList";

function CashoutWalletsTab({
  formState,
  onAddFirstWallet,
  onAddressChange,
  onLabelChange,
  onOpenDeleteModal,
  onSaveWallet,
  onSelectWalletMethod,
  onToggleAddWalletForm,
  onToggleMethodList,
  savedWallets,
}: CashoutWalletsTabProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-card-border bg-card-bg p-6 shadow-card dark:border-card-dark-border dark:bg-card-dark-bg dark:shadow-card-dark md:p-8">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.08] dark:bg-primary/[0.12]">
              <Wallet className="size-6 text-primary" strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-text-heading dark:text-text-dark-heading">Cashout Wallets</h2>
              <p className="text-sm text-text-muted dark:text-text-dark-muted">
                {savedWallets.length} of 5 wallets saved - For cashouts
              </p>
            </div>
          </div>
          <button
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover active:scale-95"
            onClick={onToggleAddWalletForm}
            type="button"
          >
            <Plus className="size-4" strokeWidth={2.5} />
            {formState.showAddWalletForm ? "Close" : "Add Wallet"}
          </button>
        </div>

        {formState.showAddWalletForm ? (
          <CashoutWalletForm
            formState={formState}
            onAddressChange={onAddressChange}
            onLabelChange={onLabelChange}
            onSaveWallet={onSaveWallet}
            onSelectWalletMethod={onSelectWalletMethod}
            onToggleMethodList={onToggleMethodList}
          />
        ) : savedWallets.length > 0 ? (
          <SavedWalletList onOpenDeleteModal={onOpenDeleteModal} savedWallets={savedWallets} />
        ) : (
          <EmptyWalletState onAddFirstWallet={onAddFirstWallet} />
        )}
      </div>
    </div>
  );
}

export default CashoutWalletsTab;
