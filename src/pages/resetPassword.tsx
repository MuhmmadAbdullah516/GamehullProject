import { Check, ChevronLeft } from 'lucide-react'

import AuthLayout from '@/layout/authlayout'

function ResetPasswordPage() {
  return (
    <AuthLayout>
      <section className="w-full max-w-[592px] rounded-[30px] border border-blue-500/25 bg-[linear-gradient(180deg,rgba(3,18,31,0.94)_0%,rgba(15,9,69,0.96)_58%,rgba(31,11,80,0.98)_100%)] px-7 py-12 shadow-[0_24px_80px_rgba(0,0,0,0.42)] sm:px-[58px] sm:py-[64px]">
        <div className="text-center">
          <h1 className="text-[30px] font-extrabold leading-tight tracking-normal text-white">
            Forgot your password?
          </h1>
          <p className="mx-auto mt-5 max-w-[430px] text-xl font-medium leading-8 text-slate-300">
            Enter your email and we&apos;ll send you a link to reset your
            password.
          </p>
        </div>

        <div className="mt-11 rounded-[20px] border border-emerald-500/55 bg-[linear-gradient(180deg,rgba(8,46,56,0.72)_0%,rgba(18,34,69,0.72)_100%)] px-7 py-8 text-center shadow-[inset_0_0_0_1px_rgba(16,185,129,0.02)] sm:px-14">
          <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500/25 text-emerald-400">
            <Check aria-hidden="true" className="size-8" strokeWidth={3} />
          </div>

          <p className="mx-auto mt-7 max-w-[360px] text-xl font-extrabold leading-8 text-[#00e66b]">
            If an account with that email exists, a password reset link has been
            sent.
          </p>

          <a
            className="mt-8 inline-flex text-lg font-extrabold text-[#2d75ff] transition hover:text-[#5b94ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            href="/forgot-password"
          >
            Try another email
          </a>
        </div>

        <div className="mt-9 flex items-center justify-center gap-2 text-xl font-medium text-slate-300">
          <ChevronLeft aria-hidden="true" className="size-6" strokeWidth={2} />
          <span>Remember it?</span>
          <a
            className="font-extrabold text-[#2d75ff] transition hover:text-[#5b94ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            href="/login"
          >
            Back to Sign In
          </a>
        </div>
      </section>
    </AuthLayout>
  )
}

export default ResetPasswordPage
