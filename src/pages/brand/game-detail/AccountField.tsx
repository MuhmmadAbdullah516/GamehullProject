import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { AccountFieldProps } from "@/types/game-detail";

function AccountField({ id, label, onCopy, onToggle, showValue, value }: AccountFieldProps) {
  const isPassword = Boolean(onToggle);

  return (
    <div className="relative">
      <label className="mb-1.5 ml-1 block text-[11px] font-bold uppercase tracking-widest text-primary" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          className={`h-14 w-full rounded-2xl border border-border bg-slate-100 pl-5 ${isPassword ? "pr-24" : "pr-14"} text-[15px] font-black text-slate-900 outline-none transition-all focus:border-primary dark:border-blue-400/15 dark:bg-white/[0.06] dark:text-white ${isPassword && !showValue ? "tracking-[0.3em]" : ""}`}
          id={id}
          readOnly
          type={isPassword && !showValue ? "password" : "text"}
          value={value}
        />
        <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
          {onToggle ? (
            <Button className="!size-auto rounded-full bg-transparent p-2.5 text-slate-400 shadow-none hover:bg-transparent hover:text-primary" onClick={onToggle} size="icon" type="button" variant="ghost">
              {showValue ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
            </Button>
          ) : null}
          <Button className="!size-auto rounded-full bg-transparent p-2.5 text-slate-400 shadow-none hover:bg-transparent hover:text-primary" onClick={onCopy} size="icon" type="button" variant="ghost">
            Copy
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AccountField;
