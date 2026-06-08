import { ArrowRight, ChevronDown, ChevronRight, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import type { SupportFaq, SupportQuickLink } from "@/types/brand-pages";

const supportFaqs: SupportFaq[] = [
  {
    question: "How do I create an account?",
    answer:
      'Click "Sign Up" at the top of the page. Fill in your name, email, and password. Your account is ready instantly - no waiting, no approvals.',
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Cash App, Venmo, Zelle, PayPal, and cryptocurrency. All payment methods are processed automatically with no manual steps.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "Most withdrawals are processed within 10-20 minutes. We have one of the fastest payout systems in the industry - no waiting days for your money.",
  },
  {
    question: "What games are available?",
    answer:
      "We offer Fire Kirin, Juwa, Ultra Panda, Vegas Sweeps, Orion Stars, Vblink, Game Vault, Golden Treasure and many more. New games are added regularly.",
  },
  {
    question: "Is my money safe?",
    answer:
      "Yes. Your funds are held securely and all transactions are fully encrypted. We use industry-standard security protocols to protect your account at all times.",
  },
  {
    question: "How does the referral program work?",
    answer:
      "Share your unique affiliate link. When someone signs up and plays using your link, you earn 5% commission on their activity - instantly and automatically, with no caps.",
  },
];

const quickLinks: SupportQuickLink[] = [
  { label: "Terms of Service", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Responsible Gaming", to: "/responsible" },
];

function SupportPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  function handleFaqToggle(index: number) {
    setOpenFaqIndex((currentIndex) => (currentIndex === index ? null : index));
  }

  return (
    <main className="flex-grow bg-white text-slate-900 transition-colors dark:bg-[#080d1c] dark:text-slate-100">
      <section className="relative overflow-hidden bg-white bg-[linear-gradient(180deg,#ffffff_0%,#f0f5ff_100%)] pt-12 pb-8 transition-colors duration-300 ease-out dark:bg-[#080d1c] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(29,78,216,0.48)_0%,transparent_65%),linear-gradient(#080d1c,#080d1c)] md:pt-20 md:pb-12">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center gap-1.5 text-xs text-text-dim dark:text-text-dark-dim"
          >
            <Link className="font-medium text-primary transition-colors hover:text-primary-hover" to="/">
              Home
            </Link>
            <ChevronRight className="size-2.5" strokeWidth={2.5} />
            <span className="font-medium">Support</span>
          </nav>

          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-tag-border bg-tag-bg px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary transition-colors duration-200 dark:border-tag-dark-border dark:bg-tag-dark-bg dark:text-tag-dark-text">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Help Center
            </div>

            <h1 className="mb-4 text-4xl font-black leading-tight tracking-tighter text-text-heading transition-colors duration-200 dark:text-text-dark-heading md:text-5xl lg:text-6xl">
              How can we <span className="text-primary">help?</span>
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-text-body transition-colors duration-200 dark:text-text-dark-body md:text-base">
              Find answers to common questions about deposits, withdrawals, and gaming accounts. Our support team is available
              24/7.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-5xl px-6 pb-20 md:pb-32">
        <div className="grid items-start gap-8 lg:grid-cols-12">
          <section className="space-y-6 lg:col-span-8">
          <h2 className="mb-8 ml-2 text-sm font-black uppercase tracking-widest text-text-muted transition-colors dark:text-text-dark-muted">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {supportFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <article
                  className="overflow-hidden rounded-3xl border border-card-border bg-white transition-all duration-200 hover:shadow-lg dark:border-card-dark-border dark:bg-card-dark-bg dark:hover:shadow-primary/5"
                  key={faq.question}
                >
                  <button
                    className="group flex w-full cursor-pointer items-center justify-between px-7 py-6 text-left transition-colors hover:text-primary"
                    onClick={() => handleFaqToggle(index)}
                    type="button"
                  >
                    <span className="pr-6 text-base font-bold leading-tight text-text-heading transition-colors group-hover:text-primary dark:text-text-dark-heading">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`size-4 shrink-0 text-text-dim transition-all duration-300 dark:text-text-dark-dim ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                      strokeWidth={2.5}
                    />
                  </button>

                  {isOpen ? (
                    <div className="px-7 pb-7">
                      <p className="text-sm leading-relaxed text-text-body transition-colors dark:text-text-dark-body">
                        {faq.answer}
                      </p>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>

        <aside className="space-y-6 lg:col-span-4">
          <section className="rounded-[1.625rem] border border-primary/10 bg-primary/[0.03] p-8 text-center transition-all duration-200 dark:border-primary/20 dark:bg-primary/[0.08]">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Mail className="size-7" strokeWidth={2} />
            </div>

            <h2 className="mb-3 text-xl font-black text-text-heading dark:text-text-dark-heading">
              Still need help?
            </h2>

            <p className="mb-8 text-sm leading-relaxed text-text-muted dark:text-text-dark-muted">
              Our support team is available 24/7. Send us a message and we'll get back to you within a few minutes.
            </p>

            <Button
              asChild
              className="inline-flex h-auto w-full items-center justify-center gap-2.5 rounded-full bg-primary py-4 text-base font-black text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-hover active:scale-95"
            >
              <Link to="/contact">
                Contact Support
                <ArrowRight className="size-5" strokeWidth={2.5} />
              </Link>
            </Button>
          </section>

          <section className="rounded-[1.625rem] border border-card-border bg-white p-8 shadow-card transition-all duration-200 dark:border-card-dark-border dark:bg-card-dark-bg dark:shadow-card-dark">
            <h2 className="mb-6 text-base font-bold text-text-heading dark:text-text-dark-heading">Quick Links</h2>

            <nav className="space-y-4">
              {quickLinks.map((link) => (
                <Link
                  className="group flex cursor-pointer items-center justify-between text-sm text-text-body no-underline transition-colors dark:text-text-dark-body"
                  key={link.to}
                  to={link.to}
                >
                  <span className="transition-colors group-hover:text-primary">{link.label}</span>
                  <ChevronRight className="size-3.5 text-text-dim transition-all group-hover:translate-x-1 group-hover:text-primary" strokeWidth={2.5} />
                </Link>
              ))}
            </nav>
          </section>
        </aside>
        </div>
      </main>
    </main>
  );
}

export default SupportPage;
