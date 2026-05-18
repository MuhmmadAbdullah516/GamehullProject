import { User, Zap } from "lucide-react";
import { Link } from "react-router-dom";

import EmailField from "@/components/auth/email-field";
import PasswordField from "@/components/auth/password-field";
import { Button } from "@/components/ui/button";
import { useRegisterForm } from "@/hooks/auth/authpages-hooks";
import AuthLayout from "@/layout/authlayout";
import { cn } from "@/lib/utils";

function RegisterPage() {
  const {
    acceptedTerms,
    errors,
    handleFullNameChange,
    handleSubmit,
    handleTermsChange,
    handleUsernameChange,
    hasFullName,
    hasUsername,
  } = useRegisterForm();

  return (
    <AuthLayout>
      <section className="w-full max-w-[460px] rounded-[18px] border border-blue-500/25 bg-[linear-gradient(180deg,rgba(3,18,31,0.95)_0%,rgba(12,10,54,0.96)_56%,rgba(28,10,78,0.98)_100%)] p-[clamp(28px,5vw,44px)] shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
        <div className="text-center">
          <h1 className="text-[22px] font-extrabold leading-[33px] text-white">
            Create your account
          </h1>
          <p className="mt-1.5 text-[13px] font-normal leading-5 text-white/55">
            Join thousands of players — it&apos;s free
          </p>
        </div>

        <form className="mt-7 space-y-4" noValidate onSubmit={handleSubmit}>
          <div>
            <label
              className="mb-1.5 block text-[13px] font-semibold leading-5 text-white"
              htmlFor="full-name"
            >
              Full name
            </label>
            <div
              className={cn(
                "group flex h-12 items-center gap-3 rounded-xl border border-blue-300/15 bg-white/8 px-4 transition focus-within:border-blue-500/70 focus-within:ring-2 focus-within:ring-blue-500/25",
                hasFullName &&
                  "border-transparent bg-[#e7effc] focus-within:border-transparent focus-within:ring-0",
              )}
            >
              <User
                aria-hidden="true"
                className={cn(
                  "size-[18px] shrink-0 text-slate-400 transition-colors group-focus-within:text-[#2d75ff]",
                  hasFullName && "group-focus-within:text-slate-400",
                )}
                strokeWidth={2}
              />
              <input
                className={cn(
                  "h-full min-w-0 flex-1 bg-transparent pl-3 text-xs font-normal leading-[21px] text-white outline-none placeholder:text-slate-400",
                  hasFullName && "text-black",
                )}
                id="full-name"
                name="fullName"
                onChange={handleFullNameChange}
                placeholder="Your name"
                type="text"
                aria-invalid={Boolean(errors.fullName)}
              />
            </div>
            {errors.fullName ? (
              <p className="mt-1 text-xs font-normal leading-5 text-red-300">
                {errors.fullName}
              </p>
            ) : null}
          </div>

          <div>
            <label
              className="mb-1.5 block text-[13px] font-semibold leading-5 text-white"
              htmlFor="username"
            >
              Username
            </label>
            <div
              className={cn(
                "group flex h-12 items-center gap-3 rounded-xl border border-blue-300/15 bg-white/8 px-4 transition focus-within:border-blue-500/70 focus-within:ring-2 focus-within:ring-blue-500/25",
                hasUsername &&
                  "border-transparent bg-[#e7effc] focus-within:border-transparent focus-within:ring-0",
              )}
            >
              <User
                aria-hidden="true"
                className={cn(
                  "size-[18px] shrink-0 text-slate-400 transition-colors group-focus-within:text-[#2d75ff]",
                  hasUsername && "group-focus-within:text-slate-400",
                )}
                strokeWidth={2}
              />
              <input
                className={cn(
                  "h-full min-w-0 flex-1 bg-transparent pl-3 text-xs font-normal leading-[21px] text-white outline-none placeholder:text-slate-400",
                  hasUsername && "text-black",
                )}
                id="username"
                name="username"
                onChange={handleUsernameChange}
                placeholder="Your username"
                type="text"
                aria-invalid={Boolean(errors.username)}
              />
            </div>
            {errors.username ? (
              <p className="mt-1 text-xs font-normal leading-5 text-red-300">
                {errors.username}
              </p>
            ) : null}
          </div>

          <EmailField
            aria-invalid={Boolean(errors.email)}
            iconClassName="mr-0 size-5"
            id="email"
            inputClassName="text-xs font-normal leading-[21px] placeholder:text-slate-400"
            label="Email address"
            labelClassName="text-[13px] font-semibold leading-5"
            name="email"
            placeholder="you@example.com"
            wrapperClassName="h-12 gap-3 rounded-xl border border-blue-300/15 px-4 shadow-none focus-within:border-blue-500/70 focus-within:ring-blue-500/25"
          />
          {errors.email ? (
            <p className="-mt-2 text-xs font-normal leading-5 text-red-300">{errors.email}</p>
          ) : null}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <PasswordField
                aria-invalid={Boolean(errors.password)}
                iconClassName="mr-0 size-4"
                id="password"
                inputClassName="text-sm font-normal leading-[21px] tracking-normal placeholder:text-slate-400"
                label="Password"
                labelClassName="text-[13px] font-semibold leading-5"
                name="password"
                placeholder="Min 8 chars"
                toggleClassName="ml-0 size-8 hover:text-slate-200 focus-visible:ring-blue-400 [&_svg]:size-5"
                wrapperClassName="h-12 gap-3 rounded-xl border border-blue-300/15 px-4 shadow-none focus-within:border-blue-500/70 focus-within:ring-blue-500/25"
              />
              {errors.password ? (
                <p className="mt-1 text-xs font-normal leading-5 text-red-300">
                  {errors.password}
                </p>
              ) : null}
            </div>

            <div>
              <PasswordField
                aria-invalid={Boolean(errors.confirmPassword)}
                iconClassName="mr-0 size-4"
                id="confirm-password"
                inputClassName="text-sm font-normal leading-[21px] tracking-normal placeholder:text-slate-400"
                label="Confirm"
                labelClassName="text-[13px] font-semibold leading-5"
                name="confirmPassword"
                placeholder="Repeat pass"
                toggleClassName="ml-0 size-8 hover:text-slate-200 focus-visible:ring-blue-400 [&_svg]:size-5"
                wrapperClassName="h-12 gap-3 rounded-xl border border-blue-300/15 px-4 shadow-none focus-within:border-blue-500/70 focus-within:ring-blue-500/25"
              />
              {errors.confirmPassword ? (
                <p className="mt-1 text-xs font-normal leading-5 text-red-300">
                  {errors.confirmPassword}
                </p>
              ) : null}
            </div>
          </div>

          <label className="flex items-start gap-2.5 pt-1 text-xs font-normal leading-5 text-zinc-400">
            <input
              className="mt-0.5 size-3.5 shrink-0 rounded border-blue-300/30 bg-white accent-[#2d75ff]"
              checked={acceptedTerms}
              name="terms"
              onChange={handleTermsChange}
              type="checkbox"
              aria-invalid={Boolean(errors.terms)}
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
          {errors.terms ? (
            <p className="-mt-2 text-xs font-normal leading-5 text-red-300">{errors.terms}</p>
          ) : null}

          <Button
            className="gap-2 disabled:bg-[#2f6dea]/35 disabled:text-white/35 disabled:shadow-none"
            disabled={!acceptedTerms}
            size="auth"
            type="submit"
            variant="auth"
          >
            <Zap aria-hidden="true" className="size-6" strokeWidth={2} />
            Create Account &amp; Play Now
          </Button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-blue-300/10" />
          <p className="shrink-0 text-[11px] font-bold uppercase leading-[17px] tracking-[0.16em] text-slate-400">
            Already have an account?
          </p>
          <div className="h-px flex-1 bg-blue-300/10" />
        </div>

        <Button asChild size="auth" variant="auth-outline">
          <Link to="/login">Sign In</Link>
        </Button>
      </section>
    </AuthLayout>
  );
}

export default RegisterPage;
