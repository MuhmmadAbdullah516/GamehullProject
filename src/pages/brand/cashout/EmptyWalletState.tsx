import { Plus, Wallet } from "lucide-react";

type EmptyWalletStateProps = {
  onAddFirstWallet: () => void;
};

function EmptyWalletState({ onAddFirstWallet }: EmptyWalletStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-primary/10 bg-primary/[0.02] py-16 text-center">
      <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full border border-primary/10 bg-primary/[0.05] shadow-inner dark:bg-primary/[0.1]">
        <Wallet className="size-10 text-primary opacity-40" strokeWidth={1.5} />
      </div>
      <h3 className="mb-2 text-lg font-bold text-text-heading dark:text-text-dark-heading">No Wallets Saved</h3>
      <p className="mx-auto mb-8 max-w-100 text-[14.5px] text-text-muted dark:text-text-dark-muted">
        Add your CashApp, Chime, or crypto wallet to start receiving cashout payments instantly.
      </p>
      <button
        className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover active:scale-95"
        onClick={onAddFirstWallet}
        type="button"
      >
        <Plus className="size-5" strokeWidth={2.5} />
        Add Your First Wallet
      </button>
    </div>
  );
}

export default EmptyWalletState;
