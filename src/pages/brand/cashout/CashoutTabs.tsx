import { ArrowRight, Wallet } from "lucide-react";

import type { CashoutTab } from "./cashout-types";

type CashoutTabsProps = {
  activeTab: CashoutTab;
  onTabChange: (tab: CashoutTab) => void;
};

function CashoutTabs({ activeTab, onTabChange }: CashoutTabsProps) {
  return (
    <div className="mb-8 flex flex-col gap-2 rounded-2xl border border-card-border bg-card-bg bg-[linear-gradient(135deg,rgba(37,99,235,0.04)_0%,transparent_100%)] p-2 shadow-card transition-all duration-200 dark:border-card-dark-border dark:bg-card-dark-bg dark:bg-[linear-gradient(135deg,rgba(37,99,235,0.08)_0%,transparent_100%)] dark:shadow-card-dark sm:flex-row">
      <button
        className={`flex flex-1 cursor-pointer items-center justify-center gap-2.5 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200 active:scale-[0.98] ${
          activeTab === "request"
            ? "bg-primary text-white shadow-lg shadow-primary/25"
            : "text-text-muted hover:bg-primary/5 hover:text-primary dark:text-text-dark-muted"
        }`}
        onClick={() => onTabChange("request")}
        type="button"
      >
        <ArrowRight className="size-5" strokeWidth={2.5} />
        Request Cashout
      </button>
      <button
        className={`flex flex-1 cursor-pointer items-center justify-center gap-2.5 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200 active:scale-[0.98] ${
          activeTab === "wallets"
            ? "bg-primary text-white shadow-lg shadow-primary/25"
            : "text-text-muted hover:bg-primary/5 hover:text-primary dark:text-text-dark-muted"
        }`}
        onClick={() => onTabChange("wallets")}
        type="button"
      >
        <Wallet className="size-5" strokeWidth={2.5} />
        Wallets & Methods
      </button>
    </div>
  );
}

export default CashoutTabs;
