import { Mail } from 'lucide-react'

import { cn } from '@/lib/utils'
import type { EmailFieldProps } from '@/types/auth-fields'

function EmailField({
  className,
  iconClassName,
  inputClassName,
  label,
  labelClassName,
  wrapperClassName,
  ...props
}: EmailFieldProps) {
  return (
    <div className={className}>
      <label
        className={cn('mb-2 block text-base font-bold leading-none text-white', labelClassName)}
        htmlFor={props.id}
      >
        {label}
      </label>
      <div
        className={cn(
          'group flex h-[58px] items-center rounded-[13px] bg-[#e7effc] px-5 text-slate-950 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.24)] transition focus-within:ring-2 focus-within:ring-blue-500/80',
          wrapperClassName,
        )}
      >
        <Mail
          aria-hidden="true"
          className={cn(
            'mr-4 size-5 shrink-0 text-slate-400 transition-colors group-focus-within:text-[#2d75ff]',
            iconClassName,
          )}
          strokeWidth={1.9}
        />
        <input
          className={cn(
            'h-full min-w-0 flex-1 bg-transparent text-[17px] font-medium text-black outline-none placeholder:text-slate-500',
            inputClassName,
          )}
          type="email"
          {...props}
        />
      </div>
    </div>
  )
}

export default EmailField
