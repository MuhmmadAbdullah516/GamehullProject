import { reviewColumns } from "./home-data";
import { sectionRevealClass, smoothCardClass } from "./home-styles";

const scrollClasses = [
  "animate-[reviewScroll_28s_linear_infinite] motion-reduce:animate-none",
  "animate-[reviewScroll_34s_linear_infinite] motion-reduce:animate-none",
  "animate-[reviewScroll_31s_linear_infinite] motion-reduce:animate-none",
];

function ReviewsSection() {
  return (
    <section className={`${sectionRevealClass} relative overflow-hidden border-t border-slate-900/10 bg-[#f4f7ff] py-14 md:py-24 transition-colors duration-300 ease-out dark:border-blue-400/15 dark:bg-[linear-gradient(180deg,#080d1c_0%,#140530_100%)]`}>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-blue-600/20 bg-blue-600/[0.07] px-3.5 py-1 transition-colors dark:border-blue-400/25 dark:bg-blue-600/10">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200">Player Reviews</span>
          </div>
          <h2 className="m-0 text-3xl md:text-4xl font-black leading-tight text-slate-900 transition-colors dark:text-white">
            What Our Players Say
          </h2>
          <p className="mt-3 text-sm text-slate-600 transition-colors dark:text-zinc-400">Join thousands of satisfied players who trust GameHull.</p>
        </div>

        <div className="grid max-h-[30rem] grid-cols-1 gap-4 overflow-hidden md:grid-cols-3">
          {reviewColumns.map((column, columnIndex) => (
            <div className={columnIndex === 0 ? "overflow-hidden" : "hidden overflow-hidden md:block"} key={`review-column-${columnIndex}`}>
              <div className={`flex flex-col gap-3.5 hover:[animation-play-state:paused] ${scrollClasses[columnIndex]}`}>
                {column.map((review, reviewIndex) => (
                  <article className={`${smoothCardClass} rounded-2xl border border-slate-900/10 bg-white p-4 shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] dark:border-blue-400/20 dark:bg-[linear-gradient(135deg,#021020_0%,#140540_100%)]`} key={`${review.author}-${reviewIndex}`}>
                    <div className="mb-2.5 flex gap-0.5 text-[#f59e0b]">
                      {Array.from({ length: 5 }).map((_, starIndex) => <span key={starIndex}>★</span>)}
                    </div>
                    <p className="mb-3.5 text-sm leading-relaxed text-slate-600 transition-colors dark:text-zinc-400">"{review.quote}"</p>
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#6d28d9] text-sm font-bold text-white">{review.initial}</div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 transition-colors dark:text-white">{review.author}</p>
                        <p className="text-xs text-slate-400 transition-colors dark:text-zinc-600">Player</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
