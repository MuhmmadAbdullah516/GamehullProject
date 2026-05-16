import type { ReactNode } from 'react'

type AuthLayoutProps = {
  children: ReactNode
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-[#070d1d] text-white">
      <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-[radial-gradient(circle_at_50%_0%,rgba(35,73,169,0.28),transparent_34%),linear-gradient(180deg,#0d1b44_0%,#080d1d_100%)] px-4 py-10 sm:px-6">
        <div className="flex shrink-0 items-center">
          <a
            className="group flex cursor-pointer items-center gap-[12px] no-underline"
            href="https://gamehull.com/"
          >
            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_4px_12px_rgba(37,99,235,0.22)] transition-transform duration-200 group-hover:scale-105">
              <svg
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
              >
                <rect height="12" rx="6" width="20" x="2" y="6" />
                <line x1="8" x2="10" y1="12" y2="12" />
                <line x1="9" x2="9" y1="11" y2="13" />
                <circle cx="15" cy="11" fill="currentColor" r="1" stroke="none" />
                <circle cx="17" cy="13" fill="currentColor" r="1" stroke="none" />
              </svg>
            </div>
            <span className="text-[19px] font-black leading-none tracking-[-.03em] text-text dark:text-text-dark">
              GameHull
            </span>
          </a>
        </div>

        {children}
      </div>
    </main>
  )
}

export default AuthLayout
