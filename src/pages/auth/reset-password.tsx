import { Check, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

import PasswordField from "@/components/auth/password-field";
import { Button } from "@/components/ui/button";
import { useResetPasswordForm } from "@/hooks/auth/authpages-hooks";
import AuthLayout from "@/layout/authlayout";

function ResetPasswordPage() {
  const { errors, handleSubmit, isSubmitting } = useResetPasswordForm();

  return (
    <AuthLayout>
      <section className="w-full max-w-[27.5rem] rounded-3xl border border-blue-500/25 bg-[linear-gradient(180deg,rgba(3,18,31,0.94)_0%,rgba(15,9,69,0.96)_58%,rgba(31,11,80,0.98)_100%)] p-7 md:p-11 shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
        <div className="text-center">
          <div className="mx-auto mb-5 grid size-12 place-items-center rounded-full bg-blue-500/18 text-[#2d75ff] ring-1 ring-blue-300/20">
            <Check aria-hidden="true" className="size-6" strokeWidth={2.4} />
          </div>

          <h1 className="text-2xl font-extrabold leading-8 tracking-normal text-white">
            Reset password
          </h1>
          <p className="mt-1.5 text-sm font-normal leading-5 text-white/55">
            Choose a new password for your GameHull account.
          </p>
        </div>

        <form className="mt-7 space-y-4" noValidate onSubmit={handleSubmit}>
          <PasswordField
            aria-invalid={Boolean(errors.password)}
            autoComplete="new-password"
            id="new-password"
            label="New password"
            name="password"
            placeholder="Enter new password"
          />
          {errors.password ? (
            <p className="-mt-2 text-xs font-normal leading-5 text-red-300">
              {errors.password}
            </p>
          ) : null}

          <PasswordField
            aria-invalid={Boolean(errors.confirmPassword)}
            autoComplete="new-password"
            id="confirm-new-password"
            label="Confirm password"
            name="confirmPassword"
            placeholder="Confirm new password"
          />
          {errors.confirmPassword ? (
            <p className="-mt-2 text-xs font-normal leading-5 text-red-300">
              {errors.confirmPassword}
            </p>
          ) : null}

          <Button className="mt-7" disabled={isSubmitting} size="auth" type="submit" variant="auth">
            {isSubmitting ? "Updating..." : "Update Password"}
          </Button>
        </form>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm font-normal leading-5 text-white/55">
          <ChevronLeft aria-hidden="true" className="size-6" strokeWidth={2} />
          <span>Remember it?</span>
          <Link
            className="font-bold text-[#2d75ff] transition hover:text-[#5b94ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            to="/login"
          >
            Back to Sign In
          </Link>
        </div>
      </section>
    </AuthLayout>
  );
}

export default ResetPasswordPage;
