import { Link } from "react-router-dom";

import EmailField from "@/components/auth/email-field";
import PasswordField from "@/components/auth/password-field";
import { Button } from "@/components/ui/button";
import { useLoginForm } from "@/hooks/auth/authpages-hooks";
import AuthLayout from "@/layout/authlayout";

function LoginPage() {
  const { errors, handleSubmit } = useLoginForm();

  return (
    <AuthLayout>
      <section className="w-full max-w-[440px] rounded-3xl border border-blue-500/25 bg-[linear-gradient(180deg,rgba(3,18,31,0.94)_0%,rgba(15,9,69,0.96)_58%,rgba(31,11,80,0.98)_100%)] p-7 md:p-11 shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
        <div className="text-center">
          <h1 className="font-sans text-[22px] font-extrabold leading-[33px] tracking-normal text-white">
            Welcome back
          </h1>
          <p className="mt-1.5 text-[13px] font-normal leading-5 text-white/55">
            Sign in to your GameHull account
          </p>
        </div>

        <form className="mt-7 space-y-4" noValidate onSubmit={handleSubmit}>
          <EmailField
            aria-invalid={Boolean(errors.email)}
            id="email"
            label="Email address"
            name="email"
            placeholder="you@example.com"
          />
          {errors.email ? (
            <p className="-mt-2 text-xs font-normal leading-5 text-red-300">{errors.email}</p>
          ) : null}

          <PasswordField
            aria-invalid={Boolean(errors.password)}
            id="password"
            label="Password"
            labelAction={
              <Link
                className="text-xs font-bold text-[#2d75ff] transition hover:text-[#5b94ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                to="/forgot-password"
              >
                Forgot password?
              </Link>
            }
            name="password"
            placeholder="Enter your password"
          />
          {errors.password ? (
            <p className="-mt-2 text-xs font-normal leading-5 text-red-300">
              {errors.password}
            </p>
          ) : null}

          <Button className="mt-7" size="auth" type="submit" variant="auth">
            Sign In
          </Button>
        </form>

        <div className="my-8 flex items-center gap-5">
          <div className="h-px flex-1 bg-blue-300/10" />
          <p className="shrink-0 text-[11px] font-bold uppercase leading-[17px] tracking-[0.16em] text-slate-400">
            Don&apos;t have an account?
          </p>
          <div className="h-px flex-1 bg-blue-300/10" />
        </div>

        <Button asChild size="auth" variant="auth-outline">
          <Link to="/register">Create an account</Link>
        </Button>
      </section>
    </AuthLayout>
  );
}

export default LoginPage;
