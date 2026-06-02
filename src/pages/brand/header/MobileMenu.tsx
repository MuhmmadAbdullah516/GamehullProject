import { useNavigate, Link } from "react-router-dom";

import { useAuth } from "@/hooks/auth/use-auth";
import type { MobileMenuProps } from "@/types/header";
import { navigationItems } from "./header-data";

function MobileMenu({ isAuthenticated, isOpen, onClose }: MobileMenuProps) {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
    onClose();
    navigate("/");
  }

  return (
    <div
      aria-hidden={!isOpen}
      className={`overflow-hidden border-t border-slate-900/10 bg-white transition-[max-height,opacity,transform] duration-300 ease-out dark:border-blue-400/15 dark:bg-[#080d1c] lg:hidden ${isOpen ? "max-h-140 translate-y-0 opacity-100" : "max-h-0 -translate-y-2 opacity-0"}`}
      id="mobile-menu"
    >
      <div className="px-6 py-4">
        <p className="text-xs font-extrabold uppercase leading-5 tracking-widest text-slate-400 dark:text-white/30">Menu</p>
        <nav className="mt-4 flex flex-col gap-4">
          {navigationItems.map((item) => (
            <Link className="text-sm font-semibold leading-6 text-slate-500 transition hover:text-slate-900 dark:text-white/55 dark:hover:text-slate-100" key={item.to} onClick={onClose} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
        {isAuthenticated ? (
          <div className="mt-4 flex flex-col gap-4 border-t border-slate-900/10 pt-4 dark:border-blue-400/15">
            <Link className="text-sm font-semibold leading-6 text-slate-500 transition hover:text-slate-900 dark:text-white/55 dark:hover:text-slate-100" onClick={onClose} to="/profile">
              Profile
            </Link>
            <Link className="text-sm font-semibold leading-6 text-slate-500 transition hover:text-slate-900 dark:text-white/55 dark:hover:text-slate-100" onClick={onClose} to="/transactions">
              Transactions
            </Link>
            <button className="h-8 rounded-full bg-red-500/10 text-sm font-semibold text-red-500 transition hover:bg-red-500/15" onClick={handleSignOut} type="button">
              Sign Out
            </button>
          </div>
        ) : (
          <div className="mt-9 grid grid-cols-2 gap-3">
            <Link className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-slate-900/10 bg-slate-100 text-base font-bold text-slate-500 no-underline transition hover:bg-slate-200 dark:border-blue-400/15 dark:bg-white/[0.06] dark:text-white/55" onClick={onClose} to="/login">Log In</Link>
            <Link className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 text-base font-bold text-white no-underline shadow-lg transition hover:bg-blue-700" onClick={onClose} to="/register">Play Now</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileMenu;
