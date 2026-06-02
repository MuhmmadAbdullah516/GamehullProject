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
            "size-[42px] shrink-0 cursor-pointer rounded-full border-[1.5px] border-slate-900/10 bg-slate-100 p-0 text-slate-500 hover:bg-slate-200 aria-expanded:bg-slate-200 data-[state=open]:bg-slate-200 dark:border-blue-400/15 dark:bg-white/[0.06] dark:text-white/55 dark:hover:bg-white/[0.09] dark:aria-expanded:bg-white/[0.09] dark:data-[state=open]:bg-white/[0.09]",
            isThemeMenuOpen && "bg-slate-200 dark:bg-white/[0.09]",
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
        className="mt-2 w-45 rounded-lg p-1 duration-300"
        sideOffset={0}
      >
        <DropdownMenuItem
          className={`gap-5 rounded-lg px-3 py-2 text-left text-sm font-medium leading-[21px] transition ${
            themePreference === "light"
              ? "bg-blue-600/[0.07] text-blue-600 dark:bg-blue-600/10 dark:text-blue-600"
              : "text-slate-500 dark:text-white/55"
          }`}
          onSelect={() => {
            handleThemeSelect("light");
          }}
        >
          <Sun className="size-5" strokeWidth={2} />
          <span className="flex-1">
            Light
          </span>
          {themePreference === "light" ? (
            <Check className="size-lg" strokeWidth={2} />
          ) : null}
        </DropdownMenuItem>

        <DropdownMenuItem
          className={`gap-5 rounded-lg px-3 py-2 text-left text-sm font-medium leading-[21px] transition ${
            themePreference === "dark"
              ? "bg-blue-600/[0.07] text-blue-600 dark:bg-blue-600/10 dark:text-blue-600"
              : "text-slate-500 dark:text-white/55"
          }`}
          onSelect={() => {
            handleThemeSelect("dark");
          }}
        >
          <Moon className="size-5" strokeWidth={2} />
          <span className="flex-1">
            Dark
          </span>
          {themePreference === "dark" ? (
            <Check className="size-[18px]" strokeWidth={2} />
          ) : null}
        </DropdownMenuItem>

        <DropdownMenuSeparator className="mx-0 w-full" />

        <DropdownMenuItem
          className={`gap-5 rounded-lg px-3 py-2 text-left text-sm font-medium leading-[21px] transition ${
            themePreference === "system"
              ? "bg-blue-600/[0.07] text-blue-600 dark:bg-blue-600/10 dark:text-blue-600"
              : "text-slate-500 dark:text-white/55"
          }`}
          onSelect={() => {
            handleThemeSelect("system");
          }}
        >
          <Monitor className="size-5" strokeWidth={2} />
          <span className="flex-1">
            System
          </span>
          {themePreference === "system" ? (
            <Check className="size-[18px]" strokeWidth={2} />
          ) : null}
        </DropdownMenuItem>

        <DropdownMenuSeparator className="mx-0 w-full" />

        <div className="px-5 py-3">
          <p className="text-xs font-normal leading-[18px] text-slate-400 dark:text-zinc-600">
            Follows your device preference
          </p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeSelector;
