import { User, Zap } from "lucide-react";

import EmailField from "@/components/auth/email-field";
import PasswordField from "@/components/auth/password-field";
import AuthLayout from "@/layout/authlayout";

function RegisterPage() {
  return (
    <AuthLayout>
      <section className="w-full max-w-[346px] rounded-[18px] border border-blue-500/25 bg-[linear-gradient(180deg,rgba(3,18,31,0.95)_0%,rgba(12,10,54,0.96)_56%,rgba(28,10,78,0.98)_100%)] px-8 py-9 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
        <div className="text-center">
          <h1 className="text-[19px] font-extrabold leading-tight text-white">
            Create your account
          </h1>
          <p className="mt-2 text-xs font-medium text-slate-300">
            Join thousands of players — it&apos;s free
          </p>
        </div>

        <form className="mt-7 space-y-4">
          <div>
            <label
              className="mb-2 block text-xs font-extrabold text-white"
              htmlFor="full-name"
            >
              Full name
            </label>
            <div className="group flex h-9 items-center gap-3 rounded-[8px] border border-blue-300/15 bg-white/8 px-3.5 transition focus-within:border-blue-500/70 focus-within:ring-2 focus-within:ring-blue-500/25">
              <User
                aria-hidden="true"
                className="size-4 shrink-0 text-slate-400 transition-colors group-focus-within:text-[#2d75ff]"
                strokeWidth={2}
              />
              <input
                className="h-full min-w-0 flex-1 bg-transparent text-xs font-medium text-white outline-none placeholder:text-slate-400"
                id="full-name"
                name="fullName"
                placeholder="Your name"
                type="text"
              />
            </div>
          </div>

          <div>
            <label
              className="mb-2 block text-xs font-extrabold text-white"
              htmlFor="username"
            >
              Username
            </label>
            <div className="group flex h-9 items-center gap-3 rounded-[8px] border border-blue-300/15 bg-white/8 px-3.5 transition focus-within:border-blue-500/70 focus-within:ring-2 focus-within:ring-blue-500/25">
              <User
                aria-hidden="true"
                className="size-4 shrink-0 text-slate-400 transition-colors group-focus-within:text-[#2d75ff]"
                strokeWidth={2}
              />
              <input
                className="h-full min-w-0 flex-1 bg-transparent text-xs font-medium text-white outline-none placeholder:text-slate-400"
                id="username"
                name="username"
                placeholder="Your username"
                type="text"
              />
            </div>
          </div>

          <EmailField
            iconClassName="mr-0 size-4"
            id="email"
            inputClassName="text-xs text-white placeholder:text-slate-400"
            label="Email address"
            labelClassName="text-xs font-extrabold"
            name="email"
            placeholder="you@example.com"
            wrapperClassName="h-9 gap-3 rounded-[8px] border border-blue-300/15 bg-white/8 px-3.5 shadow-none focus-within:border-blue-500/70 focus-within:ring-blue-500/25"
          />

          <div className="grid grid-cols-2 gap-3">
            <PasswordField
              iconClassName="mr-0 size-4"
              id="password"
              inputClassName="text-xs font-medium tracking-normal text-white placeholder:text-slate-400"
              label="Password"
              labelClassName="text-xs font-extrabold"
              name="password"
              placeholder="Min 8 chars"
              toggleClassName="ml-0 size-5 hover:text-slate-200 focus-visible:ring-blue-400 [&_svg]:size-4"
              wrapperClassName="h-9 gap-3 rounded-[8px] border border-blue-300/15 bg-white/8 px-3 shadow-none focus-within:border-blue-500/70 focus-within:ring-blue-500/25"
            />

            <PasswordField
              iconClassName="mr-0 size-4"
              id="confirm-password"
              inputClassName="text-xs font-medium tracking-normal text-white placeholder:text-slate-400"
              label="Confirm"
              labelClassName="text-xs font-extrabold"
              name="confirmPassword"
              placeholder="Repeat pass"
              toggleClassName="ml-0 size-5 hover:text-slate-200 focus-visible:ring-blue-400 [&_svg]:size-4"
              wrapperClassName="h-9 gap-3 rounded-[8px] border border-blue-300/15 bg-white/8 px-3 shadow-none focus-within:border-blue-500/70 focus-within:ring-blue-500/25"
            />
          </div>

          <label className="flex items-start gap-2.5 pt-1 text-[10px] font-medium leading-4 text-slate-300">
            <input
              className="mt-0.5 size-3.5 shrink-0 rounded border-blue-300/30 bg-white accent-[#2d75ff]"
              name="terms"
              type="checkbox"
            />
            <span>
              I agree to the{" "}
              <a
                className="font-bold text-[#2d75ff] hover:text-[#5b94ff]"
                href="#terms"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="font-bold text-[#2d75ff] hover:text-[#5b94ff]"
                href="#privacy"
              >
                Privacy Policy
              </a>
              . I confirm I am 18+ and play responsibly.
            </span>
          </label>

          <button
            className="flex h-9 w-full items-center justify-center gap-2 rounded-full bg-[#2f6dea]/65 text-xs font-extrabold text-white/45 shadow-[0_14px_24px_rgba(16,74,204,0.16)] transition hover:bg-[#3978ff] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#100948] active:translate-y-px"
            type="submit"
          >
            <Zap aria-hidden="true" className="size-4" strokeWidth={2} />
            Create Account &amp; Play Now
          </button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-blue-300/10" />
          <p className="shrink-0 text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-300">
            Already have an account?
          </p>
          <div className="h-px flex-1 bg-blue-300/10" />
        </div>

        <a
          className="flex h-9 w-full items-center justify-center rounded-full border border-[#2d75ff] text-xs font-extrabold text-[#2d75ff] transition hover:bg-blue-500/10 hover:text-[#5b94ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          href="/login"
        >
          Sign In
        </a>
      </section>
    </AuthLayout>
  );
}

export default RegisterPage;
