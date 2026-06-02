import { Mail } from 'lucide-react'
import { useState, type ChangeEvent } from 'react'

import { cn } from '@/lib/utils'
import type { EmailFieldProps } from '@/types/auth-fields'

function EmailField({
   
  className,
  filledInputClassName,
  filledWrapperClassName,
  iconClassName,
  inputClassName,
  label,
  labelClassName,
  showIcon = true,
  wrapperClassName,
  ...props
}: EmailFieldProps) {
  const [hasValue, setHasValue] = useState(() => {
    if (props.value != null) {
      return String(props.value).length > 0
    }

    return props.defaultValue != null && String(props.defaultValue).length > 0
  })
  const isFilled = props.value != null ? String(props.value).length > 0 : hasValue

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setHasValue(event.currentTarget.value.length > 0)
    props.onChange?.(event)
  }

  return (
    <div className={className}>
      <label
        className={cn('mb-1.5 block text-[13px] font-semibold leading-5 text-white', labelClassName)}
        htmlFor={props.id}
      >
        {label}
      </label>
      <div
        className={cn(
          'group relative flex h-12 items-center overflow-hidden rounded-xl border border-slate-700/70 bg-[#171a3d] text-slate-200 transition focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600',
          isFilled &&
            'border-transparent bg-[#e7effc] text-slate-950 shadow-none focus-within:border-transparent focus-within:ring-0',
          wrapperClassName,
          isFilled && filledWrapperClassName,
        )}
      >
        {showIcon ? (
          <Mail
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute left-4 top-1/2 z-10 size-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-500',
              isFilled && 'group-focus-within:text-slate-400',
              iconClassName,
            )}
            strokeWidth={1.9}
          />
        ) : null}
        <input
          className={cn(
            'h-full min-w-0 flex-1 rounded-[inherit] bg-transparent px-4 text-sm font-normal leading-[21px] text-slate-200 outline-none placeholder:text-slate-300',
            showIcon && 'pl-12',
            isFilled && 'text-black placeholder:text-slate-500',
            inputClassName,
            isFilled && filledInputClassName,
          )}
          type="email"
          {...props}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default EmailField
