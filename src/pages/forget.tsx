import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

import EmailField from "@/components/auth/email-field";
import { Button } from "@/components/ui/button";
import { useForgetPasswordForm } from "@/hooks/auth/authpages-hooks";
import AuthLayout from "@/layout/authlayout";

function ForgetPasswordPage() {
  const { errors, handleSubmit } = useForgetPasswordForm();

  return (
    <AuthLayout>
      <section className="w-full max-w-[440px] rounded-[24px] border border-blue-500/25 bg-[linear-gradient(180deg,rgba(3,18,31,0.94)_0%,rgba(15,9,69,0.96)_58%,rgba(31,11,80,0.98)_100%)] p-[clamp(28px,5vw,44px)] shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
        <div>
          <div className="text-center">
            <h1 className="text-[22px] font-extrabold leading-[33px] tracking-normal text-white">
              Forgot your password?
            </h1>
            <p className="mt-1.5 text-[13px] font-normal leading-5 text-white/55">
              Enter your email and we&apos;ll send you a one-time code to verify
              your account.
            </p>
          </div>

          <form className="mt-7 space-y-4" noValidate onSubmit={handleSubmit}>
            <EmailField
              aria-invalid={Boolean(errors.email)}
              id="reset-email"
              inputClassName="placeholder:text-slate-400"
              label="Email address"
              name="email"
              placeholder="you@example.com"
            />
            {errors.email ? (
              <p className="-mt-2 text-xs font-normal leading-5 text-red-300">
                {errors.email}
              </p>
            ) : null}

            <Button size="auth" type="submit" variant="auth">
              Send OTP
            </Button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-2 text-[13px] font-normal leading-5 text-white/55">
            <ChevronLeft
              aria-hidden="true"
              className="size-6"
              strokeWidth={2}
            />
            <span>Remember it?</span>
            <Link
              className="font-bold text-[#2d75ff] transition hover:text-[#5b94ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              to="/login"
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
}

export default ForgetPasswordPage;
