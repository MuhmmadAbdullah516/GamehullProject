import type { AuthUser } from "@/types/auth-fields";

export type ThemePreference = "light" | "dark" | "system";

export interface UserAccountMenuProps {
  className?: string;
  onAction?: () => void;
  user: AuthUser;
}

export type DepositMethodName = "CashApp" | "Crypto" | "Chime" | "Meld";

export type DepositPopupProps = {
  onBack: () => void;
  onSelectMethod: (method: DepositMethodName) => void;
};

export type DepositPaymentPopupProps = {
  method: DepositMethodName;
  onBack: () => void;
};

export type HeaderActionsProps = {
  isAuthenticated: boolean;
  user?: AuthUser | null;
};

export type MobileMenuProps = {
  isAuthenticated: boolean;
  isOpen: boolean;
  onClose: () => void;
  user?: AuthUser | null;
};

export type WalletPopupProps = {
  balance: string;
  compact?: boolean;
};

export type WalletStep = "wallet" | "deposit" | "depositPayment";
