import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/auth/use-auth";
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
  const { isAuthenticated } = useAuth();
  const affiliateLinkTarget = isAuthenticated ? "/profile" : "/register";
  const referralButtonText = isAuthenticated
    ? "View Your Referral Link"
    : "Create Free Account";

  return (
    <main className="m-0 flex-grow bg-white p-0 text-[#0F172A] transition-colors dark:bg-[#080D1C] dark:!text-[#F1F5F9]">
      <section className="relative overflow-hidden bg-white bg-[linear-gradient(180deg,#ffffff_0%,#f0f5ff_100%)] px-6 py-16 text-center transition-colors duration-300 ease-out dark:bg-[#080D1C] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(29,78,216,0.48)_0%,transparent_65%),linear-gradient(#080D1C,#080D1C)]">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-transparent" />
        </div>

        <div className="relative z-[1] mx-auto flex w-full max-w-[45rem] flex-col items-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/[0.07] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1D4ED8] transition-colors duration-200 dark:border-blue-400/25 dark:bg-blue-600/10 dark:!text-[#BFDBFE]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Earn With Us
          </div>

          <h1 className="mb-3 text-3xl md:text-4xl font-black leading-tight tracking-normal text-[#0F172A] transition-colors duration-200 dark:!text-[#FFFFFF]">
            Affiliate Program
          </h1>

          <p className="mx-auto mb-8 max-w-[33.75rem] text-base leading-relaxed text-[#475569] transition-colors duration-200 dark:!text-[#A1A1AA]">
            Refer players and earn a commission on every deposit they make. No
            cap. No expiry. Lifetime earnings.
          </p>

          <Button
            asChild
            className="h-12 rounded-full bg-[#2563EB] px-8 text-base font-extrabold text-white no-underline transition-all duration-150 hover:-translate-y-px hover:bg-[#1D4ED8] hover:shadow-[0_4px_14px_rgba(37,99,235,0.22)] dark:hover:shadow-[0_4px_14px_rgba(59,130,246,0.25)]"
          >
            <Link to={affiliateLinkTarget}>Join as Affiliate</Link>
          </Button>
        </div>
      </section>

      <div className="bg-white py-12 transition-colors duration-200 dark:bg-[#080d1c]">
        <div className="mx-auto max-w-[53.75rem] px-6">
          <section
            aria-label="Affiliate statistics"
            className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {affiliateStats.map((stat) => (
              <article
                className="rounded-2xl border border-border bg-slate-100 p-6 text-center transition-all duration-300 dark:border-blue-400/15 dark:bg-white/[0.06] hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg dark:hover:shadow-black/30"
                key={stat.label}
              >
                <div className="mb-1 text-3xl font-black tracking-normal text-[#2563EB] dark:!text-[#3B82F6]">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] transition-colors duration-200 dark:!text-[#52525B]">
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
                className="rounded-2xl border border-slate-900/10 bg-white p-7 text-center shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg dark:border-blue-400/20 dark:bg-[#0E1629] dark:shadow-[0_4px_24px_rgb(0_0_0_/_0.4)] dark:hover:shadow-black/30"
                key={step.title}
              >
                <div className="mx-auto mb-4 flex size-11 items-center justify-center rounded-xl bg-[#2563EB] text-lg font-black text-white shadow-[0_4px_12px_rgba(37,99,235,0.22)] transition-colors duration-200 dark:shadow-[0_4px_12px_rgba(59,130,246,0.25)]">
                  {index + 1}
                </div>

                <h2 className="mb-2 text-base font-extrabold tracking-normal text-[#0F172A] transition-colors duration-200 dark:!text-[#FFFFFF]">
                  {step.title}
                </h2>

                <p className="text-sm leading-relaxed text-[#475569] transition-colors duration-200 dark:!text-[#A1A1AA]">
                  {step.description}
                </p>
              </article>
            ))}
          </section>

          <section className="rounded-3xl border border-slate-900/10 bg-white p-10 px-8 text-center shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-colors duration-200 dark:border-blue-400/20 dark:bg-[#0E1629] dark:shadow-[0_4px_24px_rgb(0_0_0_/_0.4)]">
            <h2 className="mb-3 text-2xl font-black tracking-normal text-[#0F172A] transition-colors duration-200 dark:!text-[#FFFFFF]">
              Ready to start earning?
            </h2>

            <p className="mb-8 text-base leading-relaxed text-[#475569] transition-colors duration-200 dark:!text-[#A1A1AA]">
              Join thousands of affiliates already earning with GameHull. Share
              your link on social media, YouTube, Discord, or anywhere your
              audience is.
            </p>

            <Button
              asChild
              className="h-12 rounded-full bg-[#2563EB] px-8 text-base font-extrabold text-white no-underline transition-all duration-150 hover:-translate-y-px hover:bg-[#1D4ED8]"
            >
              <Link to={affiliateLinkTarget}>{referralButtonText}</Link>
            </Button>
          </section>
        </div>
      </div>
    </main>
  );
}

export default AffiliatePage;
