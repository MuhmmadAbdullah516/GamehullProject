import { Gamepad2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { AuthLayoutProps } from '@/types/layout'

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-[#070d1d] text-white">
      <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-[radial-gradient(circle_at_50%_0%,rgba(35,73,169,0.28),transparent_34%),linear-gradient(180deg,#0d1b44_0%,#080d1d_100%)] px-4 py-10 sm:px-6">
        <div className="flex shrink-0 items-center">
          <Link
            className="group flex cursor-pointer items-center gap-3 no-underline"
            to="https://gamehull.com/"
          >
            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.22)] transition-transform duration-200 group-hover:scale-105">
              <Gamepad2 className="size-6" strokeWidth={2} />
            </div>
            <span className="text-[19px] font-black leading-none tracking-[-.03em] text-slate-900 dark:text-slate-100">
              GameHull
            </span>
          </Link>
        </div>

        {children}
      </div>
    </main>
  )
}

export default AuthLayout
