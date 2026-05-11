import { ChevronLeft } from "lucide-react";

import EmailField from "@/components/auth/email-field";
import AuthLayout from "@/layout/authlayout";

function ForgetPasswordPage() {
  return (
    <AuthLayout>
      <section className="w-full max-w-[660px] rounded-[34px] border border-blue-500/25 bg-[linear-gradient(180deg,rgba(3,18,31,0.94)_0%,rgba(15,9,69,0.96)_58%,rgba(31,11,80,0.98)_100%)] px-7 py-12 shadow-[0_24px_80px_rgba(0,0,0,0.42)] sm:px-[66px] sm:py-[72px]">
        <div className="mx-auto max-w-[526px]">
          <div className="text-center">
            <h1 className="text-[32px] font-extrabold leading-tight tracking-normal text-white">
              Forgot your password?
            </h1>
            <p className="mx-auto mt-5 max-w-[470px] text-[22px] font-medium leading-8 text-slate-300">
              Enter your email and we&apos;ll send you a link to reset your
              password.
            </p>
          </div>

          <form action="/reset-password" className="mt-12">
            <EmailField
              iconClassName="mr-5 size-8"
              id="reset-email"
              inputClassName="text-[22px] text-white placeholder:text-slate-400"
              label="Email address"
              labelClassName="mb-3 text-xl font-extrabold"
              name="email"
              placeholder="you@example.com"
              wrapperClassName="h-[72px] rounded-[16px] border border-blue-300/18 bg-white/8 px-6 text-slate-100 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] focus-within:border-blue-500/70 focus-within:ring-blue-500/25"
            />

            <button
              className="mt-9 h-[72px] w-full rounded-[34px] bg-[#2f6dea] text-[24px] font-extrabold text-white shadow-[0_14px_24px_rgba(16,74,204,0.24)] transition hover:bg-[#3978ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#100948] active:translate-y-px"
              type="submit"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-9 flex items-center justify-center gap-2 text-xl font-medium text-slate-300">
            <ChevronLeft
              aria-hidden="true"
              className="size-6"
              strokeWidth={2}
            />
            <span>Remember it?</span>
            <a
              className="font-extrabold text-[#2d75ff] transition hover:text-[#5b94ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              href="/login"
            >
              Back to Sign In
            </a>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
}

export default ForgetPasswordPage;
