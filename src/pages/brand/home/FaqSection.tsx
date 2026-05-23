import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { faqItems } from "./home-data";
import { faqAnswerClass, sectionRevealClass, smoothIconClass } from "./home-styles";

type FaqSectionProps = {
  onToggle: (index: number) => void;
  openIndex: number | null;
};

function FaqSection({ onToggle, openIndex }: FaqSectionProps) {
  return (
    <section className={`${sectionRevealClass} relative overflow-hidden border-t border-slate-900/10 bg-[#f4f7ff] py-14 md:py-24 transition-colors duration-300 ease-out dark:border-blue-400/15 dark:bg-[linear-gradient(180deg,#10032a_0%,#080d1c_100%)]`}>
      <div className="relative z-10 mx-auto w-full max-w-180 px-6">
        <div className="mb-12 text-center">
          <h2 className="text-[clamp(24px,3.5vw,38px)] font-black leading-[1.15] text-slate-900 transition-colors dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-slate-600 transition-colors dark:text-zinc-400">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="divide-y divide-border-DEFAULT border-b border-border-DEFAULT dark:divide-border-dark dark:border-border-dark">
          {faqItems.map((item, index) => (
            <div key={item.question}>
              <Button
                className="!h-auto w-full justify-between rounded-none bg-transparent px-0 py-5 text-left text-[15px] font-semibold text-slate-900 shadow-none hover:bg-transparent dark:text-white dark:hover:bg-transparent"
                onClick={() => onToggle(index)}
                type="button"
                variant="ghost"
              >
                <span>{item.question}</span>
                <span className={`${smoothIconClass} flex size-7 shrink-0 items-center justify-center rounded-full border border-blue-600/20 bg-blue-600/[0.07] text-blue-600 group-hover:scale-105 dark:border-blue-400/25 dark:bg-blue-600/10`}>
                  <Plus className={`size-3.5 transition-transform duration-200 ${openIndex === index ? "rotate-45" : "rotate-0"}`} strokeWidth={2.5} />
                </span>
              </Button>
              <div className={faqAnswerClass} data-open={openIndex === index ? "true" : "false"}>
                <div className="overflow-hidden">
                  <p className="pb-5 pr-12 text-sm leading-7 text-slate-600 transition-colors duration-200 ease-out dark:text-zinc-400">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
