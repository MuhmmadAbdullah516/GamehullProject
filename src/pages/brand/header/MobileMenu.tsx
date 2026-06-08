import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "@/hooks/auth/use-auth";
import { cn } from "@/lib/utils";
import type { MobileMenuProps } from "@/types/header";
import { navigationItems } from "./header-data";

function MobileMenu({ isAuthenticated, isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const pathname = location.pathname;

  function isActivePath(path: string) {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  }

  const mobileLinkClassName =
    "flex items-center gap-3 rounded-full p-3 text-text-muted no-underline transition hover:bg-primary/5 hover:text-primary dark:text-text-dark-muted dark:hover:bg-primary/10";
  const activeLinkClassName = "bg-primary/10 font-bold text-primary dark:text-primary";

  function handleSignOut() {
    signOut();
    onClose();
    navigate("/");
  }

  return (
    <div
      aria-hidden={!isOpen}
      className={`absolute left-0 top-[72px] z-[205] flex w-full flex-col gap-1 overflow-hidden border-t border-border-DEFAULT bg-bg-header bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,transparent_100%)] p-5 shadow-2xl backdrop-blur-xl transition-[max-height,opacity,transform] duration-300 ease-out dark:border-primary/20 dark:bg-[#0f172a] lg:hidden ${isOpen ? "max-h-[35rem] translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-2 opacity-0"}`}
      id="mobile-menu"
    >
      <p className="px-3 pb-2 text-[11px] font-bold uppercase tracking-widest text-text-dim dark:text-text-dark-dim">Menu</p>
      <nav className="flex flex-col gap-1">
        {navigationItems.map((item) => (
          <Link
            aria-current={isActivePath(item.to) ? "page" : undefined}
            className={cn(mobileLinkClassName, isActivePath(item.to) && activeLinkClassName)}
            key={item.to}
            onClick={onClose}
            to={item.to}
          >
            <span className="text-[15px]">{item.label}</span>
          </Link>
        ))}
      </nav>
      {isAuthenticated ? (
        <div className="mt-2 flex flex-col gap-1 border-t border-border-DEFAULT pt-4 dark:border-border-dark">
          <Link
            aria-current={isActivePath("/profile") ? "page" : undefined}
            className={cn(mobileLinkClassName, isActivePath("/profile") && activeLinkClassName)}
            onClick={onClose}
            to="/profile"
          >
            <span className="text-[15px]">Profile</span>
          </Link>
          <Link
            aria-current={isActivePath("/transactions") ? "page" : undefined}
            className={cn(mobileLinkClassName, isActivePath("/transactions") && activeLinkClassName)}
            onClick={onClose}
            to="/transactions"
          >
            <span className="text-[15px]">Transactions</span>
          </Link>
          <button
            className="mt-2 flex h-[50px] w-full items-center justify-center rounded-full border border-[#ef4444]/10 bg-[#ef4444]/10 font-medium text-[#ef4444] no-underline transition-all hover:bg-[#ef4444]/15 active:scale-[0.98]"
            onClick={handleSignOut}
            type="button"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="mt-4 flex gap-2">
          <Link
            className="flex h-[50px] flex-1 items-center justify-center rounded-full bg-bg-muted font-bold text-text-muted no-underline transition hover:bg-bg-hover dark:bg-bg-dark-muted dark:text-text-dark-muted dark:hover:bg-bg-dark-hover"
            onClick={onClose}
            to="/login"
          >
            Log In
          </Link>
          <Link
            className="flex h-[50px] flex-1 items-center justify-center rounded-full bg-primary font-bold text-white no-underline transition hover:bg-primary-hover"
            onClick={onClose}
            to="/register"
          >
            Play Now
          </Link>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
