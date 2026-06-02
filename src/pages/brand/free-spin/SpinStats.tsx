import type { SpinStatsProps } from "@/types/free-spin";

function SpinStats({ stats }: SpinStatsProps) {
  return (
    <section className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {stats.map((stat) => (
        <article
          className="rounded-2xl border border-slate-900/10 bg-white p-5 text-center shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 dark:border-blue-400/20 dark:bg-[#0e1629]"
          key={stat.label}
        >
          <strong className="mb-1 block text-[22px] font-black text-[#2563EB] dark:!text-[#3B82F6]">
            {stat.value}
          </strong>
          <span className="text-[13px] font-bold uppercase tracking-wider text-[#64748B] dark:!text-white/55">
            {stat.label}
          </span>
        </article>
      ))}
    </section>
  );
}

export default SpinStats;
