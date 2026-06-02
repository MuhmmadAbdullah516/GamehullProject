import { CreditCard, LogOut, Menu, User } from "lucide-react";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/auth/use-auth";
import { cn } from "@/lib/utils";
import type { UserAccountMenuProps } from "@/types/header";

function UserAccountMenu({ className, onAction, user }: UserAccountMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { signOut } = useAuth();

  function handleMenuAction(path: string) {
    setIsOpen(false);
    onAction?.();
    navigate(path);
  }

  function handleSignOut() {
    setIsOpen(false);
    signOut();
    onAction?.();
    toast.success("Signed out successfully.");
    navigate("/");
  }

  return (
    <DropdownMenu onOpenChange={setIsOpen} open={isOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "h-[42px] items-center gap-2.5 rounded-full border border-slate-900/10 bg-slate-100 px-4 text-[15px] font-bold text-slate-500 transition hover:bg-slate-200 aria-expanded:bg-slate-200 data-[state=open]:bg-slate-200 dark:border-blue-400/15 dark:bg-white/[0.06] dark:text-white/55 dark:hover:bg-white/[0.09] dark:aria-expanded:bg-white/[0.09] dark:data-[state=open]:bg-white/[0.09]",
            className,
          )}
          type="button"
          variant="outline"
        >
          <span className="truncate text-sm font-bold leading-[21px] text-slate-500 dark:text-white/55">
            {user.name}
          </span>
          <Menu className="size-[18px] shrink-0" strokeWidth={2} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="mt-2 w-70 max-w-[calc(100vw-28px)] rounded-3xl border-slate-900/10 bg-white p-0 shadow-2xl dark:border-blue-400/15 dark:bg-[#0e1629]"
        sideOffset={0}
      >
        <div className="p-5">
          <p className="text-[17px] font-bold leading-[26px] text-slate-900 dark:text-white">
            {user.name}
          </p>
          <p className="mt-0.5 truncate text-xs font-normal leading-[18px] text-slate-400 dark:text-zinc-600">
            {user.email}
          </p>
        </div>

        <DropdownMenuSeparator className="mx-0 my-0 w-full" />

        <div className="space-y-0.5 p-2.5">
          <DropdownMenuItem
            className="gap-3 rounded-xl p-3 text-[15px] font-medium leading-[23px] text-slate-500 hover:text-blue-600 focus:bg-slate-100 focus:text-blue-600 dark:text-white/55 dark:hover:text-blue-600 dark:focus:bg-white/[0.06] dark:focus:text-blue-600"
            onSelect={() => {
              handleMenuAction("/profile");
            }}
          >
            <User className="size-6" strokeWidth={2} />
            <span>Profile</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="gap-3 rounded-xl p-3 text-[15px] font-medium leading-[23px] text-slate-500 hover:text-blue-600 focus:bg-slate-100 focus:text-blue-600 dark:text-white/55 dark:hover:text-blue-600 dark:focus:bg-white/[0.06] dark:focus:text-blue-600"
            onSelect={() => {
              handleMenuAction("/transactions");
            }}
          >
            <CreditCard className="size-6" strokeWidth={2} />
            <span>Transactions</span>
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator className="mx-0 my-0 w-full" />

        <div className="p-2.5">
          <DropdownMenuItem
            className="h-12 justify-center gap-4 rounded-full border border-destructive/20 bg-destructive/10 px-5 py-0 text-[15px] font-medium leading-[23px] text-destructive hover:!bg-[#ef4444]/20 focus:!bg-[#ef4444]/20 focus:!text-destructive data-[highlighted]:!bg-[#ef4444]/20 data-[highlighted]:!text-destructive"
            onSelect={handleSignOut}
          >
            <LogOut className="size-[22px]" strokeWidth={2} />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserAccountMenu;
