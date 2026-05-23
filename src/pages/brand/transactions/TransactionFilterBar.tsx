import { Calendar, ChevronDown, CircleCheck, Gamepad2, Menu, RefreshCw } from "lucide-react";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { FilterSelectProps } from "./transaction-types";
import {
  gameOptions,
  statusOptions,
  transactionTypeOptions,
} from "./transaction-types";

type TransactionFilterBarProps = {
  filterGame: string;
  filterStatus: string;
  filterType: string;
  isFiltered: boolean;
  onGameChange: (value: string) => void;
  onReset: () => void;
  onStatusChange: (value: string) => void;
  onTypeChange: (value: string) => void;
};

function FilterSelect({ icon: Icon, label, onChange, options, value }: FilterSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu onOpenChange={setIsOpen} open={isOpen}>
      <DropdownMenuTrigger asChild>
        <button
          aria-label={label}
          className="flex h-10.5 w-full cursor-pointer items-center justify-between gap-2.5 rounded-full border border-slate-900/10 bg-slate-100 px-4 text-[13px] font-semibold text-slate-600 transition hover:border-blue-600/20 hover:bg-blue-600/5 hover:text-blue-600 dark:border-blue-400/15 dark:bg-white/[0.06] dark:text-zinc-400 md:w-auto md:justify-start"
          type="button"
        >
          <Icon className="size-3.75" strokeWidth={2} />
          <span>{value}</span>
          <ChevronDown
            aria-hidden="true"
            className={`size-3.5 transition-transform duration-200 ${isOpen ? "rotate-180 text-blue-600" : ""}`}
            strokeWidth={2.5}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[var(--radix-dropdown-menu-trigger-width)] rounded-xl border-slate-900/10 bg-white bg-[linear-gradient(135deg,rgba(37,99,235,0.05)_0%,transparent_100%)] py-1 shadow-2xl backdrop-blur-xl dark:border-blue-600/20 dark:bg-[#0e1629] md:w-44"
        side="bottom"
        sideOffset={8}
      >
        {options.map((option) => (
          <DropdownMenuItem
            className="cursor-pointer rounded-none px-4 py-2.5 text-[13px] text-slate-600 transition-colors hover:bg-blue-600/10 hover:text-blue-600 focus:bg-blue-600/10 focus:text-blue-600 dark:text-zinc-400"
            key={option.value}
            onSelect={() => {
              onChange(option.value);
            }}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function TransactionFilterBar({
  filterGame,
  filterStatus,
  filterType,
  isFiltered,
  onGameChange,
  onReset,
  onStatusChange,
  onTypeChange,
}: TransactionFilterBarProps) {
  return (
    <section className="mb-8 rounded-2xl border border-slate-900/10 bg-white bg-[linear-gradient(135deg,rgba(37,99,235,0.04)_0%,transparent_100%)] p-5 shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-all dark:border-blue-400/20 dark:bg-[#0e1629] dark:bg-[linear-gradient(135deg,rgba(37,99,235,0.08)_0%,transparent_100%)] dark:shadow-[0_4px_24px_rgb(0_0_0_/_0.4)]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-3">
        <div className="flex items-center gap-2 text-slate-500 transition-colors dark:text-white/55 md:mr-2">
          <Menu className="size-4 text-blue-600" strokeWidth={2.5} />
          <span className="text-[13px] font-bold uppercase tracking-wider">
            Filter by:
          </span>
        </div>
        <div className="flex flex-1 flex-col items-stretch gap-3 md:flex-row md:items-center">
          <FilterSelect icon={Calendar} label="All Types" onChange={onTypeChange} options={transactionTypeOptions} value={filterType} />
          <FilterSelect icon={Gamepad2} label="All Games" onChange={onGameChange} options={gameOptions} value={filterGame} />
          <FilterSelect icon={CircleCheck} label="All Status" onChange={onStatusChange} options={statusOptions} value={filterStatus} />
        </div>
        {isFiltered ? (
          <button
            className="flex h-10.5 w-full shrink-0 cursor-pointer items-center justify-center rounded-full border border-slate-900/10 bg-slate-100 text-slate-500 transition hover:border-blue-600/20 hover:text-blue-600 dark:border-blue-400/15 dark:bg-white/[0.06] md:ml-auto md:w-10.5"
            onClick={onReset}
            type="button"
          >
            <RefreshCw className="size-5" strokeWidth={2} />
          </button>
        ) : null}
      </div>
    </section>
  );
}

export default TransactionFilterBar;
