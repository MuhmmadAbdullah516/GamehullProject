import { Copy, Eye, EyeOff } from "lucide-react";

import type { AccountFieldProps } from "@/types/game-detail";

function AccountField({ id, label, onCopy, onToggle, showValue, value }: AccountFieldProps) {
  const isPassword = Boolean(onToggle);

  return (
    <div className="relative">
      <label className="mb-1.5 ml-1 block text-xs font-bold uppercase tracking-widest text-primary" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          className={`h-14 w-full rounded-2xl border border-border bg-bg-muted pl-5 ${isPassword ? "pr-24" : "pr-14"} text-[15px] font-black text-text-heading outline-none transition-all focus:border-primary dark:border-border-dark dark:bg-bg-dark-muted dark:text-text-dark-heading ${isPassword && !showValue ? "tracking-[0.3em]" : "tracking-normal"}`}
          id={id}
          readOnly
          type={isPassword && !showValue ? "password" : "text"}
          value={value}
        />
        <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
          {onToggle ? (
            <button className="cursor-pointer rounded-full bg-transparent p-2.5 text-text-dim transition-colors hover:text-primary dark:text-text-dark-dim" onClick={onToggle} type="button">
              {showValue ? <EyeOff className="size-5" strokeWidth={2} /> : <Eye className="size-5" strokeWidth={2} />}
            </button>
          ) : null}
          <button className="cursor-pointer rounded-full bg-transparent p-2.5 text-text-dim transition-colors hover:text-primary dark:text-text-dark-dim" onClick={onCopy} type="button">
            <Copy className="size-5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountField;
