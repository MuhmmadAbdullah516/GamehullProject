import { ArrowRight } from "lucide-react";

import EmailField from "@/components/auth/email-field";
import { cn } from "@/lib/utils";
import type { ContactFormProps } from "@/types/contact";

const contactFieldClassName =
  "w-full rounded-xl border border-blue-300/15 bg-transparent px-5 py-4 text-sm text-text-heading outline-none transition placeholder:text-text-muted focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/25 dark:text-white dark:placeholder:text-slate-400";

function ContactForm({ onSubmit }: ContactFormProps) {
  return (
    <form className="space-y-6" noValidate onSubmit={onSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2.5 ml-1 block text-sm font-bold uppercase tracking-wider text-text-muted dark:text-text-dark-muted">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className={contactFieldClassName}
            name="name"
            placeholder="Your full name"
            required
            type="text"
          />
        </div>

        <EmailField
          className="space-y-0"
          filledInputClassName="text-text-heading placeholder:text-text-muted dark:text-white dark:placeholder:text-slate-400"
          filledWrapperClassName="border-blue-300/15 bg-transparent text-text-heading focus-within:border-blue-500/70 focus-within:ring-2 focus-within:ring-blue-500/25 dark:bg-transparent dark:text-white"
          inputClassName="h-auto min-w-0 flex-1 bg-transparent p-0 text-sm font-normal leading-normal text-text-heading outline-none placeholder:text-text-muted dark:text-white dark:placeholder:text-slate-400"
          label={
            <>
              Email <span className="text-red-500">*</span>
            </>
          }
          labelClassName="mb-2.5 ml-1 block text-sm font-bold uppercase tracking-wider text-text-muted dark:text-text-dark-muted"
          name="email"
          placeholder="you@email.com"
          required
          showIcon={false}
          wrapperClassName="w-full rounded-xl bg-transparent px-5 py-4 text-text-heading dark:text-white"
        />
      </div>

      <div>
        <label className="mb-2.5 ml-1 block text-sm font-bold uppercase tracking-wider text-text-muted dark:text-text-dark-muted">
          Subject
        </label>
        <input
          className={contactFieldClassName}
          name="subject"
          placeholder="What's this about?"
          type="text"
        />
      </div>

      <div>
        <label className="mb-2.5 ml-1 block text-sm font-bold uppercase tracking-wider text-text-muted dark:text-text-dark-muted">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          className={cn(contactFieldClassName, "resize-none")}
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
        <ArrowRight className="size-4" strokeWidth={3} />
      </button>
    </form>
  );
}

export default ContactForm;
