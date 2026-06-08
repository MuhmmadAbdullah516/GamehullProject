import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { heroStats } from "./home-data";
import { sectionRevealClass, smoothCardClass } from "./home-styles";

function HomeHero() {
  return (
    <section className={`${sectionRevealClass} relative overflow-hidden bg-gradient-to-b from-white to-[#f0f5ff] px-6 pb-0 pt-20 transition-colors duration-300 ease-out dark:bg-[#080d1c] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(29,78,216,0.48)_0%,transparent_65%),linear-gradient(#080d1c,#080d1c)]`}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(37,99,235,0.16)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(37,99,235,0.36)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[45rem] flex-col items-center text-center">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/[0.07] px-4 py-2 text-sm font-semibold text-blue-700 shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-colors dark:border-blue-400/25 dark:bg-blue-600/10 dark:text-blue-200">
          <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,.7)]" />
          50,000+ players online worldwide
        </div>

        <h1 className="mb-5 max-w-[47.5rem] text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-normal text-slate-900 transition-colors dark:text-white">
          Play. Win.
          <span className="block bg-gradient-to-r from-[#1d4ed8] to-[#6d28d9] bg-clip-text text-transparent dark:from-[#60a5fa] dark:to-[#a78bfa]">
            Cash Out Instantly.
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-[31.25rem] text-lg leading-relaxed text-slate-500 transition-colors dark:text-white/55">
          The fastest-paying online casino. 60+ games, real jackpots, and instant withdrawals.
        </p>

        <div className="mb-16 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild className={`${smoothCardClass} !h-12 rounded-full bg-blue-600 px-7 text-base font-bold text-white shadow-[0_14px_30px_rgba(37,99,235,0.28)] hover:-translate-y-0.5 hover:bg-blue-700`}>
            <Link to="/games"><Zap className="size-4 fill-white" />Play Now</Link>
          </Button>
          <Button asChild className={`${smoothCardClass} !h-12 rounded-full border border-slate-900/10 bg-transparent px-7 text-base font-bold text-slate-900 hover:-translate-y-0.5 hover:bg-slate-100 dark:border-blue-400/15 dark:text-white dark:hover:bg-white/[0.06]`} variant="outline">
            <Link to="/games">Browse Games<ArrowRight className="size-4" strokeWidth={2.5} /></Link>
          </Button>
        </div>
      </div>

      <div className="relative z-10 -mx-6 border-t border-slate-900/10 bg-white transition-colors dark:border-blue-400/15 dark:bg-[#0e1629]">
        <div className="mx-auto grid w-full max-w-[56.25rem] grid-cols-2 transition-colors md:grid-cols-4">
          {heroStats.map((stat) => (
            <div className="border-slate-900/10 py-6 px-4 text-center transition-colors dark:border-blue-400/15 md:border-r md:last:border-r-0" key={stat.label}>
              <p className={`text-2xl font-black leading-none ${stat.featured ? "text-[#f59e0b]" : "text-slate-900 dark:text-white"}`}>{stat.value}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-white/55">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
