import EmailField from "@/components/auth/email-field";
import PasswordField from "@/components/auth/password-field";
import AuthLayout from "@/layout/authlayout";

function LoginPage() {
  return (
    <AuthLayout>
      <section className="w-full max-w-[528px] rounded-[28px] border border-blue-500/25 bg-[linear-gradient(180deg,rgba(3,18,31,0.94)_0%,rgba(15,9,69,0.96)_58%,rgba(31,11,80,0.98)_100%)] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.42)] sm:px-[52px] sm:py-[56px]">
        <div className="text-center">
          <h1 className="text-[28px] font-extrabold leading-tight tracking-normal text-white">
            Welcome back
          </h1>
          <p className="mt-3 text-base font-medium text-slate-300">
            Sign in to your GameHull account
          </p>
        </div>

        <form className="mt-10 space-y-6">
          <EmailField
            defaultValue="Abdullah"
            id="email"
            label="Email address"
            name="email"
          />

          <PasswordField
            defaultValue="gamehullpass"
            id="password"
            label="Password"
            labelAction={
              <a
                className="text-sm font-bold text-[#2d75ff] transition hover:text-[#5b94ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                href="/forgot-password"
              >
                Forgot password?
              </a>
            }
            name="password"
          />

          <button
            className="mt-7 h-[58px] w-full rounded-[28px] bg-[#2f6dea] text-lg font-extrabold text-white shadow-[0_14px_24px_rgba(16,74,204,0.24)] transition hover:bg-[#3978ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#100948] active:translate-y-px"
            type="submit"
          >
            Sign In
          </button>
        </form>

        <div className="my-8 flex items-center gap-5">
          <div className="h-px flex-1 bg-blue-300/10" />
          <p className="shrink-0 text-sm font-extrabold uppercase tracking-[0.16em] text-slate-300">
            Don&apos;t have an account?
          </p>
          <div className="h-px flex-1 bg-blue-300/10" />
        </div>

        <a
          className="flex h-[58px] w-full items-center justify-center rounded-[28px] border border-[#2d75ff] text-lg font-extrabold text-[#2d75ff] transition hover:bg-blue-500/10 hover:text-[#5b94ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          href="/register"
        >
          Create an account
        </a>
      </section>
    </AuthLayout>
  );
}

export default LoginPage;
