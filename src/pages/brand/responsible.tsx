import {
  ArrowRight,
  Calendar,
  ChevronRight,
  CircleDollarSign,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import type { ResponsibleSafetyCard } from "@/types/brand-pages";

const safetyCards: ResponsibleSafetyCard[] = [
  {
    title: "Set Time Limits",
    description: "Decide how much time you want to spend playing before you start and stick to it.",
    icon: Calendar,
  },
  {
    title: "Budget Your Play",
    description: "Only play with money you can afford to lose. Never chase losses with bigger bets.",
    icon: CircleDollarSign,
  },
  {
    title: "Self-Exclusion",
    description: "If you need a break, contact our support team to temporarily or permanently close your account.",
    icon: Shield,
  },
];

const warningSigns = [
  "Spending more than you planned or can afford.",
  "Feeling anxious, irritable, or restless when not playing.",
  "Chasing losses by continuing to play after losing.",
  "Neglecting work, family, or other responsibilities to play.",
  "Borrowing money or selling belongings to fund gaming.",
];

const commitments = [
  "GameHull strictly does not allow players under 18 years of age.",
  "We do not send promotional messages to players who have self-excluded.",
  "Our team is trained to identify and assist players showing signs of problem gaming.",
  "We provide self-exclusion tools on request - contact us at any time.",
];

function ResponsiblePage() {
  return (
    <main className="flex-grow bg-white text-slate-900 transition-colors dark:bg-[#080d1c] dark:text-slate-100">
      <section className="relative overflow-hidden bg-white bg-[linear-gradient(180deg,#ffffff_0%,#f0f5ff_100%)] pt-12 pb-8 transition-colors duration-300 ease-out dark:bg-[#080d1c] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(29,78,216,0.48)_0%,transparent_65%),linear-gradient(#080d1c,#080d1c)] md:pt-20 md:pb-12">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
          <nav
            className="mb-5 flex items-center gap-1.5 text-xs text-text-dim dark:text-text-dark-dim"
            aria-label="Breadcrumb"
          >
            <Link className="font-medium text-primary transition-colors hover:text-primary-hover" to="/">
              Home
            </Link>
            <ChevronRight className="size-2.5" strokeWidth={2.5} />
            <span className="font-medium">Responsible Gaming</span>
          </nav>

          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-tag-border bg-tag-bg px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary transition-colors duration-200 dark:border-tag-dark-border dark:bg-tag-dark-bg dark:text-tag-dark-text">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Play Safe
            </div>

            <h1 className="mb-4 text-4xl font-black leading-tight tracking-tighter text-text-heading transition-colors duration-200 dark:text-text-dark-heading md:text-5xl lg:text-6xl">
              Responsible <span className="text-primary">Gaming</span>
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-text-body transition-colors duration-200 dark:text-text-dark-body md:text-base">
              GameHull is committed to providing a safe and fair gaming environment. We provide tools and resources to
              help you stay in control.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-5xl px-6 pb-20 md:pb-32">
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {safetyCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                className="rounded-[1.625rem] border border-card-border bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-1 dark:border-card-dark-border dark:bg-card-dark-bg dark:shadow-card-dark"
                key={card.title}
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20">
                  <Icon className="size-6 text-white" strokeWidth={2.5} />
                </div>

                <h3 className="mb-3 text-lg font-bold text-text-heading transition-colors dark:text-text-dark-heading">
                  {card.title}
                </h3>

                <p className="text-sm leading-relaxed text-text-body transition-colors dark:text-text-dark-body">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="rounded-[1.625rem] border border-card-border bg-white p-8 shadow-card transition-all duration-200 dark:border-card-dark-border dark:bg-card-dark-bg dark:shadow-card-dark md:p-12">
          <div className="max-w-3xl space-y-12">
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-heading transition-colors dark:text-text-dark-heading">
                Play for Fun, Not to Win Back Losses
              </h2>

              <p className="text-sm leading-relaxed text-text-body transition-colors dark:text-text-dark-body md:text-base">
                Gaming should be entertaining - never a way to make money or recover from financial difficulties. Set a
                budget before you play and treat any winnings as a bonus, not income. If you feel that your gaming is
                becoming a burden, we encourage you to step away.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-text-heading transition-colors dark:text-text-dark-heading">
                Warning Signs to Watch For
              </h2>

              <div className="space-y-4 text-sm leading-relaxed text-text-body dark:text-text-dark-body md:text-base">
                <p>Gaming may be becoming a problem if you notice any of the following signs:</p>

                <ul className="space-y-3">
                  {warningSigns.map((item) => (
                    <li className="flex items-start gap-3" key={item}>
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-text-heading transition-colors dark:text-text-dark-heading">
                Our Commitments
              </h2>

              <ul className="space-y-3 text-sm leading-relaxed text-text-body dark:text-text-dark-body md:text-base">
                {commitments.map((item) => (
                  <li className="flex items-start gap-3" key={item}>
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border-t border-border-DEFAULT pt-8 text-center transition-colors dark:border-border-dark md:text-left">
              <h2 className="mb-4 text-xl font-bold text-text-heading dark:text-text-dark-heading">Need Help?</h2>

              <p className="mb-8 text-sm leading-relaxed text-text-body dark:text-text-dark-body md:text-base">
                If gaming is affecting your life, please reach out to our support team or contact a free helpline in
                your country. You're not alone.
              </p>

              <Button
                asChild
                className="inline-flex h-auto items-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-black text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-hover active:scale-95"
              >
                <Link to="/contact">
                  Contact Support
                  <ArrowRight className="size-5" strokeWidth={2.5} />
                </Link>
              </Button>
            </section>
          </div>
        </div>
      </main>
    </main>
  );
}

export default ResponsiblePage;
