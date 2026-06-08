import type { SpinStatsProps } from "@/types/free-spin";

function SpinStats({ stats }: SpinStatsProps) {
  return (
    <section className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {stats.map((stat) => (
        <article
          className="rounded-2xl border border-slate-900/10 bg-white p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 dark:border-blue-400/20 dark:bg-card-dark-bg"
          key={stat.label}
        >
          <strong className="mb-1 block text-2xl font-black text-primary dark:!text-blue-500">
            {stat.value}
          </strong>
          <span className="text-sm font-bold uppercase tracking-wider text-text-muted dark:!text-text-dark-muted">
            {stat.label}
          </span>
        </article>
      ))}
    </section>
  );
}

export default SpinStats;
