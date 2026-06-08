import { ArrowRight, Check, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { affiliateStats } from "./home-data";
import { sectionRevealClass, smoothCardClass, smoothIconClass } from "./home-styles";

const perks = ["Instant commission payouts", "Lifetime referral tracking", "No limit on earnings"];

function AffiliatePreviewSection() {
  return (
    <section className={`${sectionRevealClass} relative overflow-hidden border-t border-slate-900/10 bg-[#f8fbff] py-14 md:py-24 transition-colors duration-300 ease-out dark:border-blue-400/15 dark:bg-[#06101f]`}>
      <div className="pointer-events-none absolute -right-[6.25rem] top-1/2 hidden size-[30rem] -translate-y-1/2 rounded-full border border-slate-900/10 dark:block dark:border-blue-400/15" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 md:gap-[4.5rem] px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <div className="mb-4 inline-flex w-fit self-start whitespace-nowrap items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <Wallet className="size-3" strokeWidth={2.5} /> Affiliate Program
          </div>
          <h2 className="max-w-md text-3xl md:text-4xl font-black leading-tight tracking-normal text-slate-900 transition-colors dark:text-white">
            <span className="block">Earn <span className="text-emerald-400">5% Commission</span></span>
            <span className="block">on Every Referral</span>
          </h2>
          <p className="max-w-[26.25rem] text-sm leading-relaxed text-slate-600 transition-colors dark:text-zinc-400">
            Join our affiliate program and earn unlimited commissions with instant payouts.
          </p>
          <ul className="space-y-3">
            {perks.map((item) => (
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-zinc-400" key={item}>
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400">
                  <Check className="size-3" strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8 !h-auto w-fit self-start rounded-full bg-gradient-to-br from-[#16a34a] to-[#22c55e] px-7 py-3.5 text-sm font-extrabold text-[#14532d] no-underline shadow-[0_0_28px_rgba(34,197,94,.3)] transition-all duration-150 hover:-translate-y-0.5">
            <Link to="/affiliate">Become an Affiliate<ArrowRight className="size-4" strokeWidth={2.5} /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-3.5 min-[400px]:grid-cols-2">
          {affiliateStats.map((item) => {
            const Icon = item.icon;
            return (
              <article className={`${smoothCardClass} group flex flex-col gap-3.5 rounded-2xl border border-slate-900/10 bg-white py-6 px-5 shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] hover:-translate-y-1 hover:shadow-[0_24px_55px_rgb(15_23_42_/_0.18)] dark:border-blue-400/20 dark:bg-[linear-gradient(135deg,#021020_0%,#140540_100%)]`} key={item.label}>
                <div className={`${smoothIconClass} flex size-10 items-center justify-center rounded-full border border-blue-600/20 bg-blue-600/[0.07] group-hover:scale-105 dark:border-blue-400/25 dark:bg-blue-600/10`}>
                  <Icon className={`size-4 ${item.tone}`} strokeWidth={1.8} />
                </div>
                <p className="text-2xl md:text-3xl font-black leading-tight text-slate-900 transition-colors dark:text-white">{item.value}</p>
                <p className="text-xs font-medium text-slate-400 transition-colors dark:text-zinc-600">{item.label}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AffiliatePreviewSection;
