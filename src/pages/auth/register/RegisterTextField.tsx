import { User } from "lucide-react";
import type { ChangeEvent } from "react";

import { cn } from "@/lib/utils";

type RegisterTextFieldProps = {
  error?: string;
  filled: boolean;
  id: string;
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

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
          "group flex h-12 items-center gap-3 rounded-xl border border-blue-300/15 bg-white/8 px-4 transition focus-within:border-blue-500/70 focus-within:ring-2 focus-within:ring-blue-500/25",
          filled && "border-transparent bg-[#e7effc] focus-within:border-transparent focus-within:ring-0",
        )}
      >
        <User
          aria-hidden="true"
          className={cn(
            "size-4.5 shrink-0 text-slate-400 transition-colors group-focus-within:text-[#2d75ff]",
            filled && "group-focus-within:text-slate-400",
          )}
          strokeWidth={2}
        />
        <input
          aria-invalid={Boolean(error)}
          className={cn(
            "h-full min-w-0 flex-1 bg-transparent pl-3 text-xs font-normal leading-[21px] text-white outline-none placeholder:text-slate-400",
            filled && "text-black",
          )}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type="text"
        />
      </div>
      {error ? <p className="mt-1 text-xs font-normal leading-5 text-red-300">{error}</p> : null}
    </div>
  );
}

export default RegisterTextField;
