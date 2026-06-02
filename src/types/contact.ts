import type { FormEvent } from "react";

export type ContactBodyProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export type ContactFaqProps = {
  onToggle: (index: number) => void;
  openFaqIndex: number | null;
};

export type ContactFormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export type ContactFormValues = {
  email: string;
  message: string;
  name: string;
  subject: string;
};
