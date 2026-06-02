import { ChevronDown } from "lucide-react";

import type { ContactFaqProps } from "@/types/contact";
import { faqItems } from "./contact-data";

function ContactFaq({ onToggle, openFaqIndex }: ContactFaqProps) {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-20 pt-12 md:pb-32 md:pt-20">
      <p className="mb-7 text-xs font-black uppercase tracking-widest text-primary">FAQ</p>
      <h2 className="mb-12 max-w-3xl text-[clamp(28px,4vw,40px)] font-black leading-tight tracking-[-.03em] text-text-heading dark:text-text-dark-heading">
        Frequently asked questions
      </h2>

      <div className="max-w-4xl space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openFaqIndex === index;
          return (
            <div
              className="overflow-hidden rounded-3xl border border-card-border bg-white transition-all duration-200 dark:border-card-dark-border dark:bg-card-dark-bg"
              key={item.question}
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[15px] font-bold text-text-heading transition-colors hover:text-primary dark:text-text-dark-heading"
                onClick={() => onToggle(index)}
                type="button"
              >
                {item.question}
                <ChevronDown
                  className={`size-[18px] shrink-0 text-text-dim transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-primary" : ""
                  }`}
                  strokeWidth={2.4}
                />
              </button>
              <div className={`grid transition-[grid-template-rows,opacity] duration-200 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-text-body dark:text-text-dark-body">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ContactFaq;
