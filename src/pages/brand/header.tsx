import { Menu, X } from "lucide-react";

import BrandLogo from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/auth/use-auth";
import { useHeaderMenu } from "@/hooks/header/header-hooks";
import DesktopNav from "./header/DesktopNav";
import HeaderActions from "./header/HeaderActions";
import MobileMenu from "./header/MobileMenu";

function Header() {
  const { handleMenuClose, handleMenuToggle, isMenuOpen } = useHeaderMenu();
  const { isAuthenticated, user } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900/10 bg-white text-slate-900 shadow-[0_1px_3px_rgb(0_0_0_/_0.07),0_1px_0_rgb(0_0_0_/_0.04)] transition-[background-color,border-color,color,box-shadow] duration-300 dark:border-blue-400/15 dark:bg-[#080d1c] dark:text-slate-100 dark:shadow-[0_1px_0_rgb(255_255_255_/_0.04)]">
      <div className="mx-auto flex h-18 max-w-285 items-center justify-between px-5">
        <div className="flex shrink-0 items-center">
          <BrandLogo />
        </div>
        <DesktopNav />
        <div className="flex shrink-0 items-center gap-2 md:gap-2.5">
          <HeaderActions isAuthenticated={isAuthenticated} user={user} />
          <Button
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border-2 border-slate-900/10 bg-slate-100 text-slate-500 transition-all active:scale-95 dark:border-blue-400/15 dark:bg-white/[0.06] dark:text-white/55 lg:hidden"
            onClick={handleMenuToggle}
            size="icon"
            type="button"
            variant="outline"
          >
            {isMenuOpen ? <X className="size-5" strokeWidth={2.5} /> : <Menu className="size-5" strokeWidth={2.5} />}
          </Button>
        </div>
      </div>
      <MobileMenu isAuthenticated={isAuthenticated} isOpen={isMenuOpen} onClose={handleMenuClose} user={user} />
    </header>
  );
}

export default Header;
