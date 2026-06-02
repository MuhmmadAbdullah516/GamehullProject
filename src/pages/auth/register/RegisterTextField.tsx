import { User } from "lucide-react";

import { cn } from "@/lib/utils";
import type { RegisterTextFieldProps } from "@/types/auth-register";

function RegisterTextField({
  error,
  filled,
  id,
  label,
  name,
  onChange,
  placeholder,
}: RegisterTextFieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-semibold leading-5 text-white" htmlFor={id}>
        {label}
      </label>
      <div
        className={cn(
          "group relative flex h-12 items-center overflow-hidden rounded-xl border border-blue-300/15 bg-white/8 transition focus-within:border-blue-500/70 focus-within:ring-2 focus-within:ring-blue-500/25",
          filled && "border-transparent bg-[#e7effc] focus-within:border-transparent focus-within:ring-0",
        )}
      >
        <User
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute left-4 top-1/2 z-10 size-[18px] -translate-y-1/2 shrink-0 text-slate-400 transition-colors group-focus-within:text-[#2d75ff]",
            filled && "group-focus-within:text-slate-400",
          )}
          strokeWidth={2}
        />
        <input
          aria-invalid={Boolean(error)}
          className={cn(
            "h-full min-w-0 flex-1 rounded-[inherit] bg-transparent px-4 pl-12 text-xs font-normal leading-[21px] text-white outline-none placeholder:text-slate-400",
            filled && "text-black",
          )}
          id={id}
          name={name}
          onChange={onChange}
          autoComplete="off"
          placeholder={placeholder}
          type="text"
        />
      </div>
      {error ? <p className="mt-1 text-xs font-normal leading-5 text-red-300">{error}</p> : null}
    </div>
  );
}

export default RegisterTextField;
