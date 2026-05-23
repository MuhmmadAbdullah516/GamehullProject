import type { FormEvent } from "react";

import ContactForm from "./ContactForm";
import ContactSidebar from "./ContactSidebar";

type ContactBodyProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

function ContactBody({ onSubmit }: ContactBodyProps) {
  return (
    <section className="pb-20 md:pb-32">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm onSubmit={onSubmit} />
          </div>
          <ContactSidebar />
        </div>
      </div>
    </section>
  );
}

export default ContactBody;
