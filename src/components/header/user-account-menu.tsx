import { CreditCard, LogOut, Menu, User } from "lucide-react";
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
  const navigate = useNavigate();
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
    onAction?.();
    navigate("/");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "h-[42px] items-center gap-[10px] rounded-xl border border-border-DEFAULT bg-bg-muted px-4 text-[15px] font-bold text-text-muted transition hover:bg-bg-hover aria-expanded:bg-bg-hover data-[state=open]:bg-bg-hover dark:border-border-dark dark:bg-bg-dark-muted dark:text-text-dark-muted dark:hover:bg-bg-dark-hover dark:aria-expanded:bg-bg-dark-hover dark:data-[state=open]:bg-bg-dark-hover",
            className,
          )}
          type="button"
          variant="outline"
        >
          <span className="truncate text-[14px] font-bold leading-[21px] text-text-muted dark:text-text-dark-muted">
            {user.name}
          </span>
          <Menu className="size-[18px] shrink-0" strokeWidth={2} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="mt-2 w-[280px] max-w-[calc(100vw-28px)] rounded-[22px] border-border-DEFAULT bg-card-bg p-0 shadow-2xl dark:border-border-dark dark:bg-card-dark-bg"
        sideOffset={0}
      >
        <div className="p-5">
          <p className="text-[17px] font-bold leading-[26px] text-text-heading dark:text-text-dark-heading">
            {user.name}
          </p>
          <p className="mt-0.5 truncate text-[12px] font-normal leading-[18px] text-text-dim dark:text-text-dark-dim">
            {user.email}
          </p>
        </div>

        <DropdownMenuSeparator className="mx-0 my-0 w-full" />

        <div className="space-y-0.5 p-2.5">
          <DropdownMenuItem
            className="gap-3 rounded-xl p-3 text-[15px] font-medium leading-[23px] text-text-muted hover:text-primary focus:bg-bg-muted focus:text-primary dark:text-text-dark-muted dark:hover:text-primary dark:focus:bg-bg-dark-muted dark:focus:text-primary"
            onSelect={() => {
              onAction?.();
              navigate("/");
            }}
          >
            <User className="size-[24px]" strokeWidth={2} />
            <span>Profile</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="gap-3 rounded-xl p-3 text-[15px] font-medium leading-[23px] text-text-muted hover:text-primary focus:bg-bg-muted focus:text-primary dark:text-text-dark-muted dark:hover:text-primary dark:focus:bg-bg-dark-muted dark:focus:text-primary"
            onSelect={() => {
              onAction?.();
              navigate("/");
            }}
          >
            <CreditCard className="size-[24px]" strokeWidth={2} />
            <span>Transactions</span>
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator className="mx-0 my-0 w-full" />

        <div className="p-2.5">
          <DropdownMenuItem
            className="h-12 justify-center gap-4 rounded-xl border border-destructive/20 bg-destructive/10 px-5 py-0 text-[15px] font-medium leading-[23px] text-destructive hover:bg-[#3D2134] hover:text-destructive focus:bg-[#3D2134] focus:text-destructive"
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
