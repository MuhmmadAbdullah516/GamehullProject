import { Check, Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useThemeSelector } from "@/hooks/header/theme-hooks";
import { cn } from "@/lib/utils";

function ThemeSelector() {
  const {
    effectiveTheme,
    handleThemeMenuOpenChange,
    handleThemeSelect,
    isThemeMenuOpen,
    themePreference,
  } = useThemeSelector();

  return (
    <DropdownMenu open={isThemeMenuOpen} onOpenChange={handleThemeMenuOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Choose theme"
          className={cn(
            "size-[42px] shrink-0 cursor-pointer rounded-full border-[1.5px] border-border-DEFAULT bg-bg-muted p-0 text-text-muted hover:bg-bg-hover aria-expanded:bg-bg-hover data-[state=open]:bg-bg-hover dark:border-border-dark dark:bg-bg-dark-muted dark:text-text-dark-muted dark:hover:bg-bg-dark-hover dark:aria-expanded:bg-bg-dark-hover dark:data-[state=open]:bg-bg-dark-hover",
            isThemeMenuOpen && "bg-bg-hover dark:bg-bg-dark-hover",
          )}
          title="Choose theme"
          type="button"
          variant="outline"
        >
          {effectiveTheme === "dark" ? (
            <Moon aria-hidden="true" className="size-[18px]" strokeWidth={2} />
          ) : (
            <Sun aria-hidden="true" className="size-[18px]" strokeWidth={2} />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="mt-2 w-[180px] rounded-lg p-1 duration-300"
        sideOffset={0}
      >
        <DropdownMenuItem
          className={`gap-5 rounded-lg px-3 py-2 text-left text-[14px] font-medium leading-[21px] transition ${
            themePreference === "light"
              ? "bg-tag-bg text-primary dark:bg-tag-dark-bg dark:text-primary"
              : "text-text-muted dark:text-text-dark-muted"
          }`}
          onSelect={() => {
            handleThemeSelect("light");
          }}
        >
          <Sun className="size-[20px]" strokeWidth={2} />
          <span className="flex-1">
            Light
          </span>
          {themePreference === "light" ? (
            <Check className="size-[18px]" strokeWidth={2} />
          ) : null}
        </DropdownMenuItem>

        <DropdownMenuItem
          className={`gap-5 rounded-lg px-3 py-2 text-left text-[14px] font-medium leading-[21px] transition ${
            themePreference === "dark"
              ? "bg-tag-bg text-primary dark:bg-tag-dark-bg dark:text-primary"
              : "text-text-muted dark:text-text-dark-muted"
          }`}
          onSelect={() => {
            handleThemeSelect("dark");
          }}
        >
          <Moon className="size-[20px]" strokeWidth={2} />
          <span className="flex-1">
            Dark
          </span>
          {themePreference === "dark" ? (
            <Check className="size-[18px]" strokeWidth={2} />
          ) : null}
        </DropdownMenuItem>

        <DropdownMenuSeparator className="mx-0 w-full" />

        <DropdownMenuItem
          className={`gap-5 rounded-lg px-3 py-2 text-left text-[14px] font-medium leading-[21px] transition ${
            themePreference === "system"
              ? "bg-tag-bg text-primary dark:bg-tag-dark-bg dark:text-primary"
              : "text-text-muted dark:text-text-dark-muted"
          }`}
          onSelect={() => {
            handleThemeSelect("system");
          }}
        >
          <Monitor className="size-[20px]" strokeWidth={2} />
          <span className="flex-1">
            System
          </span>
          {themePreference === "system" ? (
            <Check className="size-[18px]" strokeWidth={2} />
          ) : null}
        </DropdownMenuItem>

        <DropdownMenuSeparator className="mx-0 w-full" />

        <div className="px-5 py-3">
          <p className="text-[12px] font-normal leading-[18px] text-text-dim dark:text-text-dark-dim">
            Follows your device preference
          </p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeSelector;
