import { AppWindowMac, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { RecentActivityProps } from "@/types/games";

function RecentActivity({ gameName }: RecentActivityProps) {
  return (
    <section className="w-full border-t border-slate-900/10 bg-slate-100/30 py-16 transition-colors dark:border-blue-400/20 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-600">
              <span className="size-1.5 rounded-full bg-blue-600 animate-pulse" />
              Live Updates
            </div>

            <h2 className="text-[clamp(24px,4vw,32px)] font-black leading-none tracking-normal text-slate-900 transition-colors dark:text-white">
              Recent Activity
            </h2>

            <p className="mt-2 text-sm text-slate-500 transition-colors dark:text-white/55">
              Track your latest sessions and transactions for {gameName}.
            </p>
          </div>

          <Link
            className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-all hover:text-blue-700"
            to="/games"
          >
            View Detailed History
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </Link>
        </div>

        <div className="overflow-hidden rounded-4xl border border-slate-900/10 bg-white shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-all dark:border-blue-400/20 dark:bg-[#0e1629] dark:shadow-[0_4px_24px_rgb(0_0_0_/_0.4)]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-900/10 bg-slate-100/50 dark:border-blue-400/15 dark:bg-white/[0.06]">
                  {["Type", "Details", "Amount", "Date", "Status"].map((heading) => (
                    <th
                      className="px-8 py-5 text-left text-[11px] font-bold uppercase tracking-widest text-slate-500 transition-colors dark:text-white/55"
                      key={heading}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border-DEFAULT dark:divide-border-dark">
                <tr>
                  <td className="px-8 py-12 text-center" colSpan={5}>
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex size-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-white/[0.06]">
                        <AppWindowMac className="size-6" />
                      </div>
                      <p className="text-sm font-medium text-slate-500 dark:text-white/55">
                        No activity found for this game yet.
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentActivity;
