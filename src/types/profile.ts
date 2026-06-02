import type { ChangeEvent } from "react";

import type { AuthUser } from "@/types/auth-fields";

export type PasswordFields = {
  confirm: string;
  current_password: string;
  new_password: string;
};

export type PasswordChangeSectionProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  values: PasswordFields;
};

export type ProfileInfoSectionProps = {
  onSignOut: () => void;
  user: AuthUser | null;
};

export type ProfileTab = "profile" | "devices";
