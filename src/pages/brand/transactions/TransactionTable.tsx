import { CreditCard, LockKeyhole, Zap } from "lucide-react";

import type { Transaction, TransactionTableProps } from "@/types/transactions";

function statusClass(status: Transaction["status"]) {
  if (status === "Completed") return "border-green-500/20 bg-green-500/10 text-green-500";
  if (status === "Pending" || status === "Processing") return "border-blue-600/20 bg-blue-600/10 text-blue-600";
  return "border-red-500/20 bg-red-500/10 text-red-500";
}

function TransactionIcon({ type }: { type: Transaction["type"] }) {
  const Icon = type === "Deposit" ? LockKeyhole : type === "Cash In" ? Zap : CreditCard;
  return (
    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-blue-600/20 bg-blue-600/10 text-blue-600">
      <Icon className="size-4" strokeWidth={2.5} />
    </div>
  );
}

function TransactionTable({
  currentPage,
  onPageChange,
  perPage,
  totalCount,
  totalPages,
  transactions,
}: TransactionTableProps) {
  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(totalCount, currentPage * perPage);

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-900/10 bg-white bg-[linear-gradient(135deg,rgba(37,99,235,0.04)_0%,transparent_100%)] shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-all dark:border-blue-400/20 dark:bg-[#0e1629] dark:bg-[linear-gradient(135deg,rgba(37,99,235,0.08)_0%,transparent_100%)] dark:shadow-[0_4px_24px_rgb(0_0_0_/_0.4)]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-900/10 bg-slate-100 dark:border-blue-400/15 dark:bg-white/[0.04]">
              {["Type & ID", "Details", "Date", "Amount", "Status"].map((heading) => (
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400" key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900/10 dark:divide-blue-400/15">
            {transactions.map((tx) => (
              <tr className="transition-colors hover:bg-slate-100/40 dark:hover:bg-white/[0.04]" key={tx.id}>
                <td className="px-6 py-4"><div className="flex items-center gap-3"><TransactionIcon type={tx.type} /><div><div className="text-sm font-bold text-slate-900 dark:text-white">{tx.type}</div><div className="font-mono text-xs text-slate-400 dark:text-zinc-600">{tx.id}</div></div></div></td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-zinc-400">{tx.details}</td>
                <td className="px-6 py-4"><div className="text-sm text-slate-500 dark:text-zinc-400">{tx.date}</div><div className="mt-0.5 text-xs text-slate-400 dark:text-zinc-600">{tx.time}</div></td>
                <td className="px-6 py-4 text-sm font-black text-slate-900 dark:text-white">{tx.amount}</td>
                <td className="px-6 py-4"><span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${statusClass(tx.status)}`}>{tx.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-slate-900/10 bg-slate-100/40 px-6 py-4 text-sm text-slate-500 dark:border-blue-400/15 dark:bg-white/[0.03] dark:text-zinc-400">
        <span>Showing {start} to {end} of {totalCount} transactions</span>
        {totalPages > 1 ? (
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button className={`flex size-8 cursor-pointer items-center justify-center rounded-lg text-sm font-bold transition ${currentPage === page ? "bg-blue-600 text-white shadow-md" : "border border-slate-900/10 text-slate-500 hover:bg-slate-100 dark:border-blue-400/15 dark:text-zinc-400 dark:hover:bg-white/[0.06]"}`} key={page} onClick={() => onPageChange(page)} type="button">{page}</button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default TransactionTable;
