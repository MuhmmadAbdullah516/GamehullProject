import type { AuthUser } from "@/types/auth-fields";

export type ThemePreference = "light" | "dark" | "system";

export interface UserAccountMenuProps {
  className?: string;
  onAction?: () => void;
  user: AuthUser;
}
