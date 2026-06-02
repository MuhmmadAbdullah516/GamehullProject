import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import type { PolicySection } from "@/types/brand-pages";

const policySections: PolicySection[] = [
  {
    title: "Information We Collect",
    body: "We may collect the following types of information when you visit our website or use our services:",
    items: [
      {
        label: "Personal Information:",
        text: "Name, email address, and any information you provide through contact forms or account registration.",
      },
      {
        label: "Usage Data:",
        text: "Pages visited, time spent on pages, browser type, device information, and referring URLs.",
      },
      {
        label: "Cookies:",
        text: "We use cookies and similar tracking technologies to enhance your browsing experience.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    body: "We use the information we collect to:",
    items: [
      { text: "Provide, maintain, and improve our website and services." },
      { text: "Securely process your deposits and cashout requests." },
      { text: "Respond to your support inquiries and technical requests." },
      { text: "Protect against unauthorized access and ensure platform security." },
    ],
  },
  {
    title: "Data Sharing & Third Parties",
    body: "We do not sell, trade, or rent your personal information to third parties. We may share data only with:",
    items: [
      {
        label: "Analytics providers",
        text: "to understand website traffic.",
      },
      {
        label: "Payment Processors",
        text: "to safely handle transactions.",
      },
      {
        label: "Legal authorities",
        text: "if required by law or to protect our platform rights.",
      },
    ],
  },
  {
    title: "Cookies",
    body: "Our website uses cookies to personalize your experience and analyze traffic. You can control cookie settings through your browser. Disabling cookies may affect certain features of the platform, such as persistent logins and game preferences.",
  },
  {
    title: "Your Rights",
    body: "You have the following rights regarding your data:",
    items: [
      { text: "Access, update, or delete your personal account information." },
      { text: "Request a copy of the data we hold about your gaming activity." },
      { text: "Opt out of any promotional or marketing communications." },
    ],
  },
];

function PrivacyPage() {
  return (
    <main className="flex-grow bg-white text-slate-900 transition-colors dark:bg-[#080d1c] dark:text-slate-100">
      <section className="relative overflow-hidden bg-white bg-[linear-gradient(180deg,#ffffff_0%,#f0f5ff_100%)] py-12 pb-8 transition-colors duration-300 ease-out dark:bg-[#080d1c] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(29,78,216,0.48)_0%,transparent_65%),linear-gradient(#080d1c,#080d1c)] md:py-20 md:pb-13">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
          <nav className="mb-[18px] flex items-center gap-1.5 text-xs text-text-dim dark:text-text-dark-dim" aria-label="Breadcrumb">
            <Link className="font-medium text-primary transition-colors hover:text-primary-hover" to="/">
              Home
            </Link>
            <ChevronRight className="size-2.5" strokeWidth={2.5} />
            <span className="font-medium">Privacy Policy</span>
          </nav>

          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-tag-border bg-tag-bg px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary transition-colors duration-200 dark:border-tag-dark-border dark:bg-tag-dark-bg dark:text-tag-dark-text">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Legal Information
            </div>

            <h1 className="mb-4 text-[clamp(32px,5vw,56px)] font-black leading-[1.1] tracking-[-.04em] text-text-heading transition-colors duration-200 dark:text-text-dark-heading">
              Privacy <span className="text-primary">Policy</span>
            </h1>

            <p className="max-w-[600px] text-[15px] leading-relaxed text-text-body transition-colors duration-200 dark:text-text-dark-body md:text-base">
              Your privacy is our priority. This policy outlines how we collect, use, and protect your information when you
              use the GameHull platform.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-5xl px-6 pb-20 md:pb-32">
        <div className="rounded-4xl border border-card-border bg-white p-8 shadow-card transition-all duration-200 dark:border-card-dark-border dark:bg-card-dark-bg dark:shadow-card-dark md:p-12">
          <div className="mb-12">
            <p className="text-[13px] font-bold uppercase tracking-widest text-text-dim dark:text-text-dark-dim">
              Last updated: May 23, 2026
            </p>
          </div>

          <div className="space-y-12 transition-colors duration-200">
            {policySections.map((section, index) => (
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
                        <li className="flex items-start gap-3" key={`${section.title}-${item.label ?? item.text}`}>
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>
                            {item.label ? <strong className="text-text-heading dark:text-text-dark-heading">{item.label} </strong> : null}
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}

            <section className="border-t border-border-DEFAULT pt-8 dark:border-border-dark">
              <h2 className="mb-4 text-xl font-bold text-text-heading dark:text-text-dark-heading">Questions?</h2>
              <p className="mb-6 text-[15px] leading-relaxed text-text-body dark:text-text-dark-body">
                If you have any questions about this Privacy Policy or how we handle your data, please reach out to our
                support team.
              </p>

              <Button
                asChild
                className="inline-flex h-auto items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover active:scale-95"
              >
                <Link to="/contact">
                  Contact Support
                  <ArrowRight className="size-[18px]" strokeWidth={2.5} />
                </Link>
              </Button>
            </section>
          </div>
        </div>
      </main>
    </main>
  );
}

export default PrivacyPage;
