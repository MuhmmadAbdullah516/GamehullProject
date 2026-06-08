import { Link } from "react-router-dom";
import {useAuth} from "@/hooks/auth/use-auth"
import { Button } from "@/components/ui/button";
import type { AffiliateStat, AffiliateStep } from "@/types/brand-pages";

const affiliateStats: AffiliateStat[] = [
  { label: "Commission Rate", value: "20%" },
  { label: "Minimum Payout", value: "$0" },
  { label: "Earning Potential", value: "\u221E" },
];

const affiliateSteps: AffiliateStep[] = [
  {
    description:
      "Create your GameHull account in under 60 seconds. No approval needed.",
    title: "Sign Up Free",
  },
  {
    description:
      "Receive a unique referral link from your profile dashboard to share anywhere.",
    title: "Get Your Link",
  },
  {
    description:
      "Earn 20% of every deposit made by players you refer, for their lifetime on the platform.",
    title: "Earn Commission",
  },
];

function AffiliatePage() {

    const {isAuthenticated} = useAuth()
    const affiliateLinkTarget = isAuthenticated ? "/games":"/register";
    const referralButtonText = isAuthenticated ? "View Your Referral Link" : "Create Free Account"
  
  return (
    <main className="m-0 flex-grow bg-white p-0 text-text transition-colors dark:bg-bg-dark dark:!text-text-dark">
      <section className="relative overflow-hidden bg-white bg-[linear-gradient(180deg,#ffffff_0%,#f0f5ff_100%)] px-6 py-16 text-center transition-colors duration-300 ease-out dark:bg-bg-dark dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(29,78,216,0.48)_0%,transparent_65%),linear-gradient(#080d1c,#080d1c)]">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-transparent" />
        </div>

        <div className="relative z-[1] mx-auto flex w-full max-w-180 flex-col items-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/[0.07] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-tag-text transition-colors duration-200 dark:border-blue-400/25 dark:bg-blue-600/10 dark:!text-tag-dark-text">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Earn With Us
          </div>

          <h1 className="mb-3 text-3xl md:text-4xl font-black leading-tight tracking-normal text-text transition-colors duration-200 dark:!text-white">
            Affiliate Program
          </h1>

          <p className="mx-auto mb-8 max-w-135 text-base leading-relaxed text-text-body transition-colors duration-200 dark:!text-text-dark-body">
            Refer players and earn a commission on every deposit they make. No
            cap. No expiry. Lifetime earnings.
          </p>

          <Button
            asChild
            className="h-12 rounded-full bg-primary px-8 text-base font-extrabold text-white no-underline transition-all duration-150 hover:-translate-y-px hover:bg-primary-hover hover:shadow-[0_4px_14px_rgba(37,99,235,0.22)] dark:hover:shadow-[0_4px_14px_rgba(59,130,246,0.25)]"
          >
            <Link to={affiliateLinkTarget}>
              Join as Affiliate
            </Link>
          </Button>
        </div>
      </section>

      <div className="bg-white py-12 transition-colors duration-200 dark:bg-bg-dark">
        <div className="mx-auto max-w-215 px-6">
          <section
            aria-label="Affiliate statistics"
            className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {affiliateStats.map((stat) => (
              <article
                className="rounded-2xl border border-border bg-slate-100 p-6 text-center transition-colors duration-200 dark:border-blue-400/15 dark:bg-white/[0.06]"
                key={stat.label}
              >
                <div className="mb-1 text-3xl font-black tracking-normal text-primary dark:!text-blue-500">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-text-subtle transition-colors duration-200 dark:!text-text-dark-dim">
                  {stat.label}
                </div>
              </article>
            ))}
          </section>

          <section
            aria-label="How affiliate program works"
            className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3"
          >
            {affiliateSteps.map((step, index) => (
              <article
                className="rounded-2xl border border-slate-900/10 bg-white p-7 text-center shadow-card transition-colors duration-200 dark:border-blue-400/20 dark:bg-card-dark-bg dark:shadow-card-dark"
                key={step.title}
              >
                <div className="mx-auto mb-4 flex size-11 items-center justify-center rounded-xl bg-primary text-lg font-black text-white shadow-[0_4px_12px_rgba(37,99,235,0.22)] transition-colors duration-200 dark:shadow-[0_4px_12px_rgba(59,130,246,0.25)]">
                  {index + 1}
                </div>

                <h2 className="mb-2 text-base font-extrabold tracking-normal text-text transition-colors duration-200 dark:!text-white">
                  {step.title}
                </h2>

                <p className="text-sm leading-relaxed text-text-body transition-colors duration-200 dark:!text-text-dark-body">
                  {step.description}
                </p>
              </article>
            ))}
          </section>

          <section className="rounded-3xl border border-slate-900/10 bg-white p-10 px-8 text-center shadow-card transition-colors duration-200 dark:border-blue-400/20 dark:bg-card-dark-bg dark:shadow-card-dark">
            <h2 className="mb-3 text-2xl font-black tracking-normal text-text transition-colors duration-200 dark:!text-white">
              Ready to start earning?
            </h2>

            <p className="mb-8 text-base leading-relaxed text-text-body transition-colors duration-200 dark:!text-text-dark-body">
              Join thousands of affiliates already earning with GameHull. Share
              your link on social media, YouTube, Discord, or anywhere your
              audience is.
            </p>

            <Button
              asChild
              className="h-12 rounded-full bg-primary px-8 text-base font-extrabold text-white no-underline transition-all duration-150 hover:-translate-y-px hover:bg-primary-hover"
            >
              <Link to={affiliateLinkTarget}>
                {referralButtonText}
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </main>
  );
}

export default AffiliatePage;
