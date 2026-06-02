import { RefreshCw, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { RegisterCaptchaProps } from "@/types/auth-register";

function RegisterCaptchaField({
  answer,
  error,
  onChange,
  onRefresh,
  question,
}: RegisterCaptchaProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold leading-5 text-white" htmlFor="captcha">
        Captcha
      </label>

      <div className="grid grid-cols-[1fr_auto] gap-3">
        <div className="group relative flex h-12 items-center overflow-hidden rounded-xl border border-blue-300/15 bg-white/8 transition focus-within:border-blue-500/70 focus-within:ring-2 focus-within:ring-blue-500/25">
          <Shield
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 z-10 size-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#2d75ff]"
            strokeWidth={2}
          />

          <input
            autoComplete="off"
            className="h-full min-w-0 flex-1 rounded-xl bg-transparent px-4 pl-12 text-xs font-normal leading-5 text-white outline-none placeholder:text-slate-400"
            id="captcha"
            inputMode="numeric"
            name="captcha"
            onChange={onChange}
            placeholder={`What is ${question}?`}
            value={answer}
          />
        </div>

        <Button
          aria-label="Refresh captcha"
          className="h-12 w-12 rounded-xl border border-blue-300/15 bg-white/8 text-slate-400 hover:bg-white/10 hover:text-white"
          onClick={onRefresh}
          type="button"
          variant="ghost"
        >
          <RefreshCw className="size-5" strokeWidth={2} />
        </Button>
      </div>

      {error ? <p className="mt-1 text-xs font-normal leading-5 text-red-300">{error}</p> : null}
    </div>
  );
}

export default RegisterCaptchaField;
