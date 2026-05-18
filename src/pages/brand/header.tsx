import { AppWindowMac, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import ThemeSelector from "@/components/header/theme-selector";
import UserAccountMenu from "@/components/header/user-account-menu";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/auth/use-auth";
import { useHeaderMenu } from "@/hooks/header/header-hooks";

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "Games", to: "/games" },
  { label: "Free Spin", to: "/free-spin" },
  { label: "Affiliate", to: "/affiliate" },
];

function Header() {
  const { handleMenuClose, handleMenuToggle, isMenuOpen } = useHeaderMenu();
  const { isAuthenticated, user } = useAuth();
  const walletBalance = user
    ? new Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency",
      }).format(user.balance)
    : "$0.00";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-DEFAULT bg-bg-header text-text shadow-header transition-[background-color,border-color,color,box-shadow] duration-300 dark:border-border-dark dark:bg-bg-dark-header dark:text-text-dark dark:shadow-header-dark">
      <div className="mx-auto flex h-[72px] max-w-[1140px] items-center justify-between px-[20px]">
        <div className="flex shrink-0 items-center">
          <Link
            className="group flex cursor-pointer items-center gap-[12px] no-underline"
            to="/"
          >
            <div className="flex size-[42px] shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-[0_4px_12px_rgba(37,99,235,0.22)] transition-transform duration-200 group-hover:scale-105">
              <svg
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
              >
                <rect height="12" rx="6" width="20" x="2" y="6" />
                <line x1="8" x2="10" y1="12" y2="12" />
                <line x1="9" x2="9" y1="11" y2="13" />
                <circle
                  cx="15"
                  cy="11"
                  fill="currentColor"
                  r="1"
                  stroke="none"
                />
                <circle
                  cx="17"
                  cy="13"
                  fill="currentColor"
                  r="1"
                  stroke="none"
                />
              </svg>
            </div>
            <span className="text-[19px] font-black leading-none tracking-[-.03em] text-text dark:text-text-dark">
              GameHull
            </span>
          </Link>
        </div>

        <nav className="mx-4 hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `inline-flex cursor-pointer items-center rounded-full px-4 py-2 text-[15px] font-semibold no-underline transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-text-muted hover:bg-bg-muted hover:text-text dark:text-text-dark-muted dark:hover:bg-bg-dark-muted dark:hover:text-text-dark"
                }`
              }
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-[8px] md:gap-[10px]">
          {isAuthenticated ? (
            <Button
              asChild
              className="flex size-[42px] cursor-pointer rounded-full border-[1.5px] border-border-DEFAULT bg-bg-muted p-0 text-[#f59e0b] transition-all hover:bg-bg-hover dark:border-border-dark dark:bg-bg-dark-muted dark:hover:bg-bg-dark-hover md:hidden"
              size="icon"
              variant="outline"
            >
              <Link aria-label="Wallet balance" to="/">
                <AppWindowMac
                  aria-hidden="true"
                  className="size-[15px]"
                  fill="none"
                  height="15"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  width="15"
                />
              </Link>
            </Button>
          ) : null}

          <ThemeSelector />

          {isAuthenticated ? (
            <>
              <Link
                className="hidden h-[42px] items-center justify-center gap-2 rounded-xl border border-border-DEFAULT bg-bg-muted px-4 text-[15px] font-bold text-[#f59e0b] no-underline transition hover:bg-bg-hover dark:border-border-dark dark:bg-bg-dark-muted dark:hover:bg-bg-dark-hover md:inline-flex"
                to="/"
              >
                <AppWindowMac
                  aria-hidden="true"
                  className="size-[15px]"
                  fill="none"
                  height="15"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  width="15"
                />
                <span className="text-[14px] font-bold leading-[21px] text-[#f59e0b]">
                  {walletBalance}
                </span>
              </Link>

              {user ? (
                <UserAccountMenu className="hidden md:inline-flex" user={user} />
              ) : null}
            </>
          ) : (
            <>
              <Link
                className="hidden h-[42px] items-center justify-center rounded-full border border-border-DEFAULT px-5 text-[15px] font-semibold text-text-muted no-underline transition hover:bg-bg-muted dark:border-border-dark dark:text-text-dark-muted dark:hover:bg-bg-dark-muted md:inline-flex"
                to="/login"
              >
                Log In
              </Link>

              <Link
                className="hidden h-[42px] items-center justify-center rounded-full bg-primary px-6 text-[15px] font-bold text-white no-underline shadow-lg transition hover:bg-primary-hover md:inline-flex"
                to="/register"
              >
                Play Now
              </Link>
            </>
          )}

          <Button
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="flex size-[42px] cursor-pointer items-center justify-center rounded-full border-[1.5px] border-border-DEFAULT bg-bg-muted text-text-muted transition-all active:scale-95 dark:border-border-dark dark:bg-bg-dark-muted dark:text-text-dark-muted md:hidden"
            onClick={handleMenuToggle}
            size="icon"
            type="button"
            variant="outline"
          >
            {isMenuOpen ? (
              <X className="size-[22px]" strokeWidth={2.5} />
            ) : (
              <Menu className="size-[22px]" strokeWidth={2.5} />
            )}
          </Button>
        </div>
      </div>

      <div
        aria-hidden={!isMenuOpen}
        className={`overflow-hidden border-t border-border-DEFAULT bg-bg-header transition-[max-height,opacity,transform] duration-300 ease-out dark:border-border-dark dark:bg-bg-dark-header md:hidden ${
          isMenuOpen
            ? "max-h-[430px] translate-y-0 opacity-100"
            : "max-h-0 -translate-y-2 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-6 py-7">
          <p className="text-[12px] font-extrabold uppercase leading-5 tracking-[0.18em] text-text-subtle dark:text-text-dark-subtle">
            Menu
          </p>

          <nav className="mt-7 flex flex-col gap-7">
            {navigationItems.map((item) => (
              <Link
                className="text-[18px] font-semibold leading-7 text-text-muted transition hover:text-text dark:text-text-dark-muted dark:hover:text-text-dark"
                key={item.to}
                onClick={handleMenuClose}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {isAuthenticated ? (
            <div className="mt-9 grid gap-3">
              {user ? (
                <UserAccountMenu
                  className="inline-flex h-12 w-full"
                  onAction={handleMenuClose}
                  user={user}
                />
              ) : null}
            </div>
          ) : (
            <div className="mt-9 grid grid-cols-2 gap-3">
              <Link
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-border-DEFAULT bg-bg-muted text-[15px] font-bold text-text-muted no-underline transition hover:bg-bg-hover dark:border-border-dark dark:bg-bg-dark-muted dark:text-text-dark-muted dark:hover:bg-bg-dark-hover"
                onClick={handleMenuClose}
                to="/login"
              >
                Log In
              </Link>

              <Link
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary text-[15px] font-bold text-white no-underline shadow-lg transition hover:bg-primary-hover"
                onClick={handleMenuClose}
                to="/register"
              >
                Play Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
