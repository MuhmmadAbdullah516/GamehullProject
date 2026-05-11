import { Eye, LockKeyhole } from 'lucide-react'

import { cn } from '@/lib/utils'
import type { PasswordFieldProps } from '@/types/auth-fields'

function PasswordField({
  className,
  iconClassName,
  inputClassName,
  label,
  labelAction,
  labelClassName,
  toggleClassName,
  wrapperClassName,
  ...props
}: PasswordFieldProps) {
  return (
    <div className={className}>
      <div className="mb-2 flex items-center justify-between gap-4">
        <label
          className={cn('block text-base font-bold leading-none text-white', labelClassName)}
          htmlFor={props.id}
        >
          {label}
        </label>
        {labelAction}
      </div>
      <div
        className={cn(
          'group flex h-[58px] items-center rounded-[13px] bg-[#e7effc] px-5 text-slate-950 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.24)] transition focus-within:ring-2 focus-within:ring-blue-500/80',
          wrapperClassName,
        )}
      >
        <LockKeyhole
          aria-hidden="true"
          className={cn(
            'mr-4 size-4 shrink-0 text-slate-400 transition-colors group-focus-within:text-[#2d75ff]',
            iconClassName,
          )}
          strokeWidth={2}
        />
        <input
          className={cn(
            'h-full min-w-0 flex-1 bg-transparent text-[18px] font-semibold tracking-[0.18em] text-black outline-none placeholder:text-slate-500',
            inputClassName,
          )}
          type="password"
          {...props}
        />
        <button
          aria-label={`Show ${label.toLowerCase()}`}
          className={cn(
            'ml-4 grid size-8 shrink-0 place-items-center rounded-full text-slate-400 transition hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
            toggleClassName,
          )}
          type="button"
        >
          <Eye aria-hidden="true" className="size-full" strokeWidth={1.9} />
        </button>
      </div>
    </div>
  )
}

export default PasswordField
