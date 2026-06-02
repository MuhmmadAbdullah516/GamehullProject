import type { ChangeEvent } from "react";

import type { RegisterErrors } from "@/types/validation";

export type RegisterPasswordFieldsProps = {
  errors: RegisterErrors;
};

export type RegisterTermsProps = {
  accepted: boolean;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type RegisterTextFieldProps = {
  error?: string;
  filled: boolean;
  id: string;
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  value?: string;
};

export type RegisterCaptchaProps = {
  answer: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onRefresh: () => void;
  question: string;
};
