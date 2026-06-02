import { CreditCard } from "lucide-react";

import type { TransactionEmptyStateProps } from "@/types/transactions";

function TransactionEmptyState({ isFiltered }: TransactionEmptyStateProps) {
  return (
    <section className="rounded-2xl border border-slate-900/10 bg-white bg-[linear-gradient(135deg,rgba(37,99,235,0.04)_0%,transparent_100%)] p-10 text-center shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-all dark:border-blue-400/20 dark:bg-[#0e1629] dark:bg-[linear-gradient(135deg,rgba(37,99,235,0.08)_0%,transparent_100%)] dark:shadow-[0_4px_24px_rgb(0_0_0_/_0.4)] md:p-16">
      <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full border border-blue-600/10 bg-blue-600/5 text-blue-600 shadow-inner transition-colors dark:border-blue-600/20 dark:bg-blue-600/10">
        <CreditCard className="size-10 opacity-50" strokeWidth={1.5} />
      </div>
      <h2 className="mb-2 text-lg font-bold text-slate-900 transition-colors dark:text-white">
        No transactions found
      </h2>
      <p className="mx-auto max-w-[340px] text-[14.5px] leading-relaxed text-slate-500 transition-colors dark:text-zinc-500">
        {isFiltered
          ? "No transactions match your current filter criteria. Try resetting the filters."
          : "Your deposits and withdrawals will appear here once you start playing or make a deposit."}
      </p>
    </section>
  );
}

export default TransactionEmptyState;
