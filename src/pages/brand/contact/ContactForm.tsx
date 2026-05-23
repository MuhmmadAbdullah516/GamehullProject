import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

import EmailField from "@/components/auth/email-field";

type ContactFormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

function ContactForm({ onSubmit }: ContactFormProps) {
  return (
    <form className="space-y-6" noValidate onSubmit={onSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2.5 ml-1 block text-[13px] font-bold uppercase tracking-wider text-text-muted dark:text-text-dark-muted">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-2xl border border-border-DEFAULT bg-white px-5 py-4 text-sm text-text-heading transition-all placeholder:text-text-dim focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-card-dark-border dark:bg-card-dark-bg dark:text-text-dark-heading"
            name="name"
            placeholder="Your full name"
            required
            type="text"
          />
        </div>

        <EmailField
          className="space-y-0"
          filledInputClassName="text-text-heading dark:text-text-dark-heading"
          filledWrapperClassName="border-border-DEFAULT bg-[#e7effc] focus-within:border-border-DEFAULT focus-within:ring-0 dark:border-card-dark-border dark:bg-[#e7effc]"
          inputClassName="h-auto min-w-0 flex-1 bg-transparent p-0 text-sm font-normal leading-normal text-text-heading outline-none placeholder:text-text-dim dark:text-text-dark-heading"
          label={
            <>
              Email <span className="text-red-500">*</span>
            </>
          }
          labelClassName="mb-2.5 ml-1 block text-[13px] font-bold uppercase tracking-wider text-text-muted dark:text-text-dark-muted"
          name="email"
          placeholder="you@email.com"
          required
          showIcon={false}
          wrapperClassName="w-full rounded-2xl border border-border-DEFAULT bg-white px-5 py-4 text-text-heading transition-all focus-within:border-primary/40 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary/20 dark:border-card-dark-border dark:bg-card-dark-bg dark:text-text-dark-heading [&:has(input:-webkit-autofill)]:border-border-DEFAULT [&:has(input:-webkit-autofill)]:bg-[#e7effc] [&:has(input:-webkit-autofill)]:ring-0 dark:[&:has(input:-webkit-autofill)]:bg-[#e7effc]"
        />
      </div>

      <div>
        <label className="mb-2.5 ml-1 block text-[13px] font-bold uppercase tracking-wider text-text-muted dark:text-text-dark-muted">
          Subject
        </label>
        <input
          className="w-full rounded-2xl border border-border-DEFAULT bg-white px-5 py-4 text-sm text-text-heading transition-all placeholder:text-text-dim focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-card-dark-border dark:bg-card-dark-bg dark:text-text-dark-heading"
          name="subject"
          placeholder="What's this about?"
          type="text"
        />
      </div>

      <div>
        <label className="mb-2.5 ml-1 block text-[13px] font-bold uppercase tracking-wider text-text-muted dark:text-text-dark-muted">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          className="w-full resize-none rounded-2xl border border-border-DEFAULT bg-white px-5 py-4 text-sm text-text-heading transition-all placeholder:text-text-dim focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-card-dark-border dark:bg-card-dark-bg dark:text-text-dark-heading"
          name="message"
          placeholder="How can we help you?"
          required
          rows={6}
        />
      </div>

      <button
        className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-primary px-10 py-4 text-base font-black text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-hover active:scale-95"
        type="submit"
      >
        Send Message
        <ArrowRight className="size-4.5" strokeWidth={3} />
      </button>
    </form>
  );
}

export default ContactForm;
