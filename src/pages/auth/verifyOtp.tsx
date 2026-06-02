import { Check, ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { useOtpVerification } from '@/hooks/auth/authpages-hooks'
import AuthLayout from '@/layout/authlayout'

function VerifyOtpPage() {
  const { errors, handleChange, handleKeyDown, handlePaste, handleSubmit, inputRefs, otp } =
    useOtpVerification()

  return (
    <AuthLayout>
      <section className="w-full max-w-110 rounded-3xl border border-blue-500/25 bg-[linear-gradient(180deg,rgba(3,18,31,0.94)_0%,rgba(15,9,69,0.96)_58%,rgba(31,11,80,0.98)_100%)] p-7 md:p-11 shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
        <div className="text-center">
          <div className="mx-auto mb-5 grid size-12 place-items-center rounded-full bg-blue-500/18 text-[#2d75ff] ring-1 ring-blue-300/20">
            <Check aria-hidden="true" className="size-6" strokeWidth={2.4} />
          </div>

          <h1 className="text-2xl font-extrabold leading-8 tracking-normal text-white">
            Verify OTP
          </h1>
          <p className="mt-1.5 text-sm font-normal leading-5 text-white/55">
            Enter the 4-digit code we sent to your email address.
          </p>
        </div>

        <form className="mt-7" onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 gap-2">
            {otp.map((digit, index) => (
              <input
                aria-label={`OTP digit ${index + 1}`}
                aria-invalid={Boolean(errors.otp)}
                autoComplete={index === 0 ? 'one-time-code' : 'off'}
                className="h-12 min-w-0 rounded-xl border border-blue-300/15 bg-white/8 text-center text-sm font-bold leading-5 text-white outline-none transition placeholder:text-slate-400 focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/25"
                inputMode="numeric"
                key={index}
                maxLength={1}
                name={`otp-${index + 1}`}
                onChange={(event) => handleChange(index, event)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                onPaste={handlePaste}
                pattern="[0-9]*"
                ref={(element) => {
                  inputRefs.current[index] = element
                }}
                type="text"
                value={digit}
              />
            ))}
          </div>
          {errors.otp ? (
            <p className="mt-2 text-xs font-normal leading-5 text-red-300">{errors.otp}</p>
          ) : null}

          <Button className="mt-7" size="auth" type="submit" variant="auth">
            Verify Code
          </Button>
        </form>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm font-normal leading-5 text-white/55">
          <span>Didn&apos;t receive code?</span>
          <Link
            className="inline-flex items-center gap-2 font-bold text-[#2d75ff] transition hover:text-[#5b94ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            to="/forgot-password"
          >
            Resend
          </Link>
        </div>

        <div className="mt-7 flex items-center justify-center gap-2 text-sm font-normal leading-5 text-white/55">
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
  )
}

export default VerifyOtpPage
