import { AppWindowMac, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { RecentActivityProps } from "@/types/games";

function RecentActivity({ gameName }: RecentActivityProps) {
  return (
    <section className="w-full border-t border-card-border bg-bg-muted/30 py-16 transition-colors dark:border-card-dark-border dark:bg-bg-dark-muted/5">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Live Updates
            </div>

            <h2 className="text-[clamp(24px,4vw,32px)] font-black leading-none tracking-normal text-text-heading transition-colors dark:text-text-dark-heading">
              Recent Activity
            </h2>

            <p className="mt-2 text-[14px] text-text-muted transition-colors dark:text-text-dark-muted">
              Track your latest sessions and transactions for {gameName}.
            </p>
          </div>

          <Link
            className="group inline-flex items-center gap-2 text-[14px] font-bold text-primary transition-all hover:text-primary-hover"
            to="/games"
          >
            View Detailed History
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </Link>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-card-border bg-card-bg shadow-card transition-all dark:border-card-dark-border dark:bg-card-dark-bg dark:shadow-card-dark">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border-DEFAULT bg-bg-muted/50 dark:border-border-dark dark:bg-bg-dark-muted/40">
                  {["Type", "Details", "Amount", "Date", "Status"].map((heading) => (
                    <th
                      className="px-8 py-5 text-left text-[11px] font-bold uppercase tracking-widest text-text-muted transition-colors dark:text-text-dark-muted"
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
                      <div className="flex size-12 items-center justify-center rounded-full bg-bg-muted text-text-dim dark:bg-bg-dark-muted">
                        <AppWindowMac className="size-6" />
                      </div>
                      <p className="text-[14px] font-medium text-text-muted dark:text-text-dark-muted">
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
