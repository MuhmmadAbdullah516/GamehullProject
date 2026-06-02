import { Link } from "react-router-dom";

import ThemeSelector from "@/components/header/theme-selector";
import UserAccountMenu from "@/components/header/user-account-menu";
import WalletPopup from "@/components/header/wallet-popup";
import type { HeaderActionsProps } from "@/types/header";

function HeaderActions({ isAuthenticated, user }: HeaderActionsProps) {
  const walletBalance = user
    ? new Intl.NumberFormat("en-US", { currency: "USD", style: "currency" }).format(user.balance)
    : "$0.00";

  return (
    <>
      {isAuthenticated ? (
        <WalletPopup balance={walletBalance} compact />
      ) : null}
      <ThemeSelector />
      {isAuthenticated ? (
        <>
          <WalletPopup balance={walletBalance} />
          {user ? <UserAccountMenu className="hidden lg:inline-flex" user={user} /> : null}
        </>
      ) : (
        <>
          <Link className="hidden h-10 items-center justify-center rounded-full border border-slate-900/10 px-5 text-base font-semibold text-slate-500 no-underline transition hover:bg-slate-100 dark:border-blue-400/15 dark:text-white/55 dark:hover:bg-white/[0.06] lg:inline-flex" to="/login">
            Log In
          </Link>
          <Link className="hidden h-10 items-center justify-center rounded-full bg-blue-600 px-6 text-base font-bold text-white no-underline shadow-lg transition hover:bg-blue-700 lg:inline-flex" to="/register">
            Play Now
          </Link>
        </>
      )}
    </>
  );
}

export default HeaderActions;
