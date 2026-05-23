import { Button } from "@/components/ui/button";
import { formatCurrency, type PrizeHistoryItem } from "./free-spin-data";

type PrizeHistoryProps = {
  history: PrizeHistoryItem[];
  show: boolean;
};

function PrizeHistory({ history, show }: PrizeHistoryProps) {
  if (!show) return null;

  return (
    <section className="mt-12 rounded-[32px] border border-slate-900/10 bg-white p-8 shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition duration-300 hover:border-blue-600/20 dark:border-blue-400/20 dark:bg-[#0e1629] dark:shadow-[0_4px_24px_rgb(0_0_0_/_0.4)] max-sm:rounded-[24px] max-sm:p-6">
      <div className="mb-8 flex items-center justify-between gap-5">
        <h2 className="text-[22px] font-black tracking-normal text-[#0F172A] dark:!text-[#FFFFFF]">
          Prize History
        </h2>
        <Button className="h-9 rounded-xl border border-primary/10 bg-primary/5 px-4 text-[13px] font-bold text-[#2563EB] hover:bg-primary/10" type="button" variant="outline">
          View All
        </Button>
      </div>

      {history.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-900/10 dark:border-blue-400/20">
                {["Prize", "Type", "Amount", "Time"].map((label) => (
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-[#64748B] dark:!text-white/55" key={label}>
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr className="border-b border-slate-900/10 transition hover:bg-slate-100 dark:border-blue-400/20 dark:hover:bg-white/[0.06]" key={item.id}>
                  <td className="px-4 py-3 font-semibold text-[#475569] dark:!text-[#A1A1AA]">{item.prize.label}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/50 dark:!text-emerald-400">
                      {item.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-bold text-emerald-600 dark:!text-emerald-400">+{formatCurrency(item.prize.value)}</td>
                  <td className="px-4 py-3 text-xs tabular-nums text-[#64748B] dark:!text-white/55">{item.createdAt.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex min-h-55 flex-col items-center justify-center rounded-2xl text-center text-sm text-[#64748B] dark:!text-white/55">
          <p>No prize history yet. Spin the wheel to win!</p>
        </div>
      )}
    </section>
  );
}

export default PrizeHistory;
