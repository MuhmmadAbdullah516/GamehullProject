import { type FormEvent, useState } from "react";
import { toast } from "react-toastify";

import ContactBody from "./contact/ContactBody";
import ContactFaq from "./contact/ContactFaq";
import ContactHero from "./contact/ContactHero";
import type { ContactFormValues } from "./contact/contact-types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getFormValue(formData: FormData, key: keyof ContactFormValues) {
  return String(formData.get(key) ?? "").trim();
}

function focusField(form: HTMLFormElement, name: keyof ContactFormValues) {
  const field = form.elements.namedItem(name);

  if (field instanceof HTMLElement) {
    field.focus();
  }
}

function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  function handleFaqToggle(index: number) {
    setOpenFaqIndex((currentIndex) => (currentIndex === index ? null : index));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values: ContactFormValues = {
      email: getFormValue(formData, "email"),
      message: getFormValue(formData, "message"),
      name: getFormValue(formData, "name"),
      subject: getFormValue(formData, "subject"),
    };

    if (!values.name) {
      toast.error("Please enter your name.");
      focusField(form, "name");
      return;
    }

    if (!values.email) {
      toast.error("Please enter your email address.");
      focusField(form, "email");
      return;
    }

    if (!emailPattern.test(values.email)) {
      toast.error("Please enter a valid email address.");
      focusField(form, "email");
      return;
    }

    if (!values.message) {
      toast.error("Please enter your message.");
      focusField(form, "message");
      return;
    }

    toast.success("Your message has been received. Support will contact you shortly.");
    form.reset();
  }

  return (
    <main className="flex-grow bg-white text-slate-900 transition-colors dark:bg-[#080d1c] dark:text-slate-100">
      <ContactHero />
      <ContactBody onSubmit={handleSubmit} />
      <ContactFaq onToggle={handleFaqToggle} openFaqIndex={openFaqIndex} />
    </main>
  );
}

export default ContactPage;
