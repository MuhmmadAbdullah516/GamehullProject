import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

type TermsSection = {
  body?: string;
  items?: string[];
  note?: {
    body: string;
    title: string;
  };
  title: string;
};

const termsSections: TermsSection[] = [
  {
    title: "Acceptance of Terms",
    body: "By accessing and using this website, you agree to be bound by these Terms of Service. GameHull provides online gaming services including slots, fish games, and reward programs. If you do not agree with any part of these terms, please do not use the website.",
  },
  {
    title: "Use of Website & Gaming Rules",
    body: "You agree to use this website only for lawful purposes and in a manner that does not:",
    items: [
      "Violate any applicable local or international laws regarding online gaming.",
      "Transmit any harmful, threatening, or offensive material to other players or staff.",
      "Attempt to gain unauthorized access to any part of the website or game servers.",
      "Use automated scripts or bots to manipulate gameplay or win rates.",
    ],
  },
  {
    title: "Intellectual Property",
    body: "All content on this website, including text, graphics, logos, game interfaces, and other materials, is the property of GameHull or its respective licensors. You may not reproduce, distribute, or create derivative works without prior written permission.",
  },
  {
    title: "User Accounts & Security",
    body: "When you create an account on our website:",
    items: [
      "You are responsible for maintaining the confidentiality of your login credentials.",
      "You agree to notify us immediately of any unauthorized use of your account.",
      "We reserve the right to suspend accounts found to be in violation of these terms.",
    ],
  },
  {
    title: "Financial Transactions",
    body: "All deposits and cashout requests are subject to verification. We aim to process all transactions quickly, but processing times may vary based on the payment method and verification status.",
    note: {
      title: "Important Note:",
      body: '"GameHull is not responsible for losses incurred during normal gameplay. Players are encouraged to play responsibly."',
    },
  },
  {
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by law, GameHull shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the website or gaming services.",
  },
];

function TermsPage() {
  return (
    <main className="flex-grow bg-white text-slate-900 transition-colors dark:bg-[#080d1c] dark:text-slate-100">
      <section className="relative overflow-hidden py-12 pb-8 md:py-20 md:pb-13">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.05)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
          <nav className="mb-4.5 flex items-center gap-1.5 text-xs text-text-dim dark:text-text-dark-dim" aria-label="Breadcrumb">
            <Link className="font-medium text-primary transition-colors hover:text-primary-hover" to="/">
              Home
            </Link>
            <ChevronRight className="size-2.5" strokeWidth={2.5} />
            <span className="font-medium">Terms of Service</span>
          </nav>

          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-tag-border bg-tag-bg px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary transition-colors duration-200 dark:border-tag-dark-border dark:bg-tag-dark-bg dark:text-tag-dark-text">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Usage Guidelines
            </div>

            <h1 className="mb-4 text-[clamp(32px,5vw,56px)] font-black leading-[1.1] tracking-[-.04em] text-text-heading transition-colors duration-200 dark:text-text-dark-heading">
              Terms of <span className="text-primary">Service</span>
            </h1>

            <p className="max-w-150 text-[15px] leading-relaxed text-text-body transition-colors duration-200 dark:text-text-dark-body md:text-base">
              Please read these terms carefully before using our platform. By playing on GameHull, you agree to follow
              our rules and community guidelines.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-5xl px-6 pb-20 md:pb-32">
        <div className="rounded-[32px] border border-card-border bg-white p-8 shadow-card transition-all duration-200 dark:border-card-dark-border dark:bg-card-dark-bg dark:shadow-card-dark md:p-12">
          <div className="mb-12">
            <p className="text-[13px] font-bold uppercase tracking-widest text-text-dim transition-colors dark:text-text-dark-dim">
              Last updated: May 23, 2026
            </p>
          </div>

          <div className="space-y-12 transition-colors duration-200">
            {termsSections.map((section, index) => (
              <section key={section.title}>
                <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-text-heading dark:text-text-dark-heading">
                  <span className="text-primary">{index + 1}.</span>
                  {section.title}
                </h2>

                <div className="space-y-4 text-[15px] leading-relaxed text-text-body dark:text-text-dark-body">
                  {section.body ? <p>{section.body}</p> : null}

                  {section.items ? (
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li className="flex items-start gap-3" key={`${section.title}-${item}`}>
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.note ? (
                    <div className="rounded-2xl border border-primary/10 bg-primary/5 p-6">
                      <p className="mb-2 text-sm font-bold text-primary">{section.note.title}</p>
                      <p className="text-sm italic leading-relaxed text-text-body dark:text-text-dark-body">{section.note.body}</p>
                    </div>
                  ) : null}
                </div>
              </section>
            ))}

            <section className="border-t border-border-DEFAULT pt-8 dark:border-border-dark">
              <h2 className="mb-4 text-xl font-bold text-text-heading dark:text-text-dark-heading">Need Clarification?</h2>
              <p className="mb-6 text-[15px] leading-relaxed text-text-body dark:text-text-dark-body">
                If you have any questions about these Terms of Service, please reach out to our support team for more
                information.
              </p>

              <Button
                asChild
                className="inline-flex h-auto items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover active:scale-95"
              >
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="size-4.5" strokeWidth={2.5} />
                </Link>
              </Button>
            </section>
          </div>
        </div>
      </main>
    </main>
  );
}

export default TermsPage;
