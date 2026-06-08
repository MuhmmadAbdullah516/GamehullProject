import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

import EmailField from "@/components/auth/email-field";
import { Button } from "@/components/ui/button";
import { useRegisterForm } from "@/hooks/auth/authpages-hooks";
import AuthLayout from "@/layout/authlayout";
import RegisterCaptchaField from "./register/RegisterCaptchaField";
import RegisterPasswordFields from "./register/RegisterPasswordFields";
import RegisterTerms from "./register/RegisterTerms";
import RegisterTextField from "./register/RegisterTextField";

function RegisterPage() {
  const form = useRegisterForm();

  return (
    <AuthLayout>
      <section className="w-full max-w-[28.75rem] rounded-2xl border border-blue-500/25 bg-[linear-gradient(180deg,rgba(3,18,31,0.95)_0%,rgba(12,10,54,0.96)_56%,rgba(28,10,78,0.98)_100%)] p-7 md:p-11 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold leading-8 text-white">Create your account</h1>
          <p className="mt-1.5 text-sm font-normal leading-5 text-white/55">Join thousands of players - it&apos;s free</p>
        </div>

        <form autoComplete="off" className="mt-7 space-y-4" noValidate onSubmit={form.handleSubmit}>
          <RegisterTextField
            error={form.errors.fullName}
            filled={form.hasFullName}
            id="full-name"
            label="Full name"
            name="fullName"
            onChange={form.handleFullNameChange}
            placeholder="Your name"
          />
          <RegisterTextField
            error={form.errors.username}
            filled={form.hasUsername}
            id="username"
            label="Username"
            name="username"
            onChange={form.handleUsernameChange}
            placeholder="Your username"
          />
          <EmailField
            aria-invalid={Boolean(form.errors.email)}
            autoComplete="off"
            iconClassName="mr-0 size-5"
            id="email"
            inputClassName="text-xs font-normal leading-5 placeholder:text-slate-400"
            label="Email address"
            labelClassName="text-sm font-semibold leading-5"
            name="email"
            placeholder="you@example.com"
            wrapperClassName="h-12 gap-3 rounded-xl border border-blue-300/15 shadow-none focus-within:border-blue-500/70 focus-within:ring-blue-500/25"
          />
          {form.errors.email ? <p className="-mt-2 text-xs font-normal leading-5 text-red-300">{form.errors.email}</p> : null}
          <RegisterPasswordFields errors={form.errors} />
          <RegisterCaptchaField
            answer={form.captchaAnswer}
            error={form.errors.captcha}
            onChange={form.handleCaptchaChange}
            onRefresh={form.refreshCaptcha}
            question={form.captchaQuestion}
          />
          <RegisterTerms accepted={form.acceptedTerms} error={form.errors.terms} onChange={form.handleTermsChange} />
          <Button className="gap-2 disabled:bg-[#2f6dea]/35 disabled:text-white/35 disabled:shadow-none" disabled={!form.acceptedTerms || form.isSubmitting} size="auth" type="submit" variant="auth">
            <Zap aria-hidden="true" className="size-6" strokeWidth={2} />
            {form.isSubmitting ? "Creating account..." : "Create Account & Play Now"}
          </Button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-blue-300/10" />
          <p className="shrink-0 text-xs font-bold uppercase leading-4 tracking-widest text-slate-400">
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
