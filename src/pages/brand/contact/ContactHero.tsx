import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white bg-[linear-gradient(180deg,#ffffff_0%,#f0f5ff_100%)] py-12 pb-8 transition-colors duration-300 ease-out dark:bg-[#080d1c] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(29,78,216,0.48)_0%,transparent_65%),linear-gradient(#080d1c,#080d1c)] md:py-20 md:pb-[3.25rem]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        <nav className="mb-4 flex items-center gap-1.5 text-xs text-text-dim dark:text-text-dark-dim" aria-label="Breadcrumb">
          <Link className="font-medium text-primary transition-colors hover:text-primary-hover" to="/">
            Home
          </Link>
          <ChevronRight className="size-2.5" strokeWidth={2.5} />
          <span className="font-medium">Contact</span>
        </nav>

        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-tag-border bg-tag-bg px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary transition-colors duration-200 dark:border-tag-dark-border dark:bg-tag-dark-bg dark:text-tag-dark-text">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Get in Touch
          </div>

          <h1 className="mb-4 text-4xl md:text-6xl font-black leading-tight tracking-tight text-text-heading transition-colors duration-200 dark:text-text-dark-heading">
            Let's <span className="text-primary">talk</span>
          </h1>

          <p className="max-w-[37.5rem] text-base leading-relaxed text-text-body transition-colors duration-200 dark:text-text-dark-body md:text-base">
            Have a question, business inquiry, or need technical support? We're here to help you 24/7. Fill out the
            form and we'll get back to you shortly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
