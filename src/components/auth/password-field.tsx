import { Eye, EyeOff, LockKeyhole } from 'lucide-react'
import { useRef, useState, type ChangeEvent } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { PasswordFieldProps } from '@/types/auth-fields'

function PasswordField({
  className,
  filledInputClassName,
  filledWrapperClassName,
  iconClassName,
  inputClassName,
  label,
  labelAction,
  labelClassName,
  toggleClassName,
  wrapperClassName,
  defaultValue,
  onChange,
  value,
  ...props
}: PasswordFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const isControlled = value != null
  const [inputValue, setInputValue] = useState(() =>
    defaultValue != null ? String(defaultValue) : '',
  )
  const currentValue = isControlled ? value : inputValue
  const [hasValue, setHasValue] = useState(() => {
    if (value != null) {
      return String(value).length > 0
    }

    return defaultValue != null && String(defaultValue).length > 0
  })
  const isFilled = value != null ? String(value).length > 0 : hasValue

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const nextValue = event.currentTarget.value

    if (!isControlled) {
      setInputValue(nextValue)
    }

    setHasValue(nextValue.length > 0)
    onChange?.(event)
  }

  function handleTogglePasswordVisibility() {
    setIsPasswordVisible((currentValue) => {
      const nextValue = !currentValue

      if (inputRef.current) {
        inputRef.current.type = nextValue ? 'text' : 'password'
      }

      return nextValue
    })
  }

  return (
    <div className={className}>
      <div className="mb-1.5 flex items-center justify-between gap-4">
        <label
          className={cn('block text-sm font-semibold leading-5 text-white', labelClassName)}
          htmlFor={props.id}
        >
          {label}
        </label>
        {labelAction}
      </div>
      <div
        className={cn(
          'group relative flex h-12 items-center overflow-hidden rounded-xl border border-blue-300/15 bg-white/8 text-white transition focus-within:border-blue-500/70 focus-within:ring-2 focus-within:ring-blue-500/25',
          isFilled && 'border-transparent bg-[#e7effc] text-black focus-within:border-transparent focus-within:ring-0',
          wrapperClassName,
          isFilled && filledWrapperClassName,
        )}
      >
        <LockKeyhole
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute left-4 top-1/2 z-10 size-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-500',
            isFilled && 'group-focus-within:text-slate-400',
            iconClassName,
          )}
          strokeWidth={2}
        />
        <input
          className={cn(
            'h-full min-w-0 flex-1 rounded-xl bg-transparent px-4 pl-12 pr-12 text-sm font-normal leading-5 text-white outline-none transition placeholder:text-slate-400',
            isFilled && 'text-black placeholder:text-slate-500',
            inputClassName,
            isFilled && filledInputClassName,
          )}
          key={`${props.id ?? props.name ?? 'password'}-${isPasswordVisible ? 'visible' : 'hidden'}`}
          {...props}
          onChange={handleChange}
          ref={inputRef}
          type={isPasswordVisible ? 'text' : 'password'}
          value={currentValue}
        />
        <Button
          aria-label={`${isPasswordVisible ? 'Hide' : 'Show'} ${label.toLowerCase()}`}
          aria-pressed={isPasswordVisible}
          className={cn(
            'absolute right-2 top-2 z-10 grid size-8 place-items-center rounded-full text-slate-400 transition hover:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:!translate-y-0',
            toggleClassName,
          )}
          onClick={handleTogglePasswordVisibility}
          size="icon"
          type="button"
          variant="ghost"
        >
          {isPasswordVisible ? (
            <EyeOff aria-hidden="true" className="size-5" strokeWidth={1.9} />
          ) : (
            <Eye aria-hidden="true" className="size-5" strokeWidth={1.9} />
          )}
        </Button>
      </div>
    </div>
  )
}

export default PasswordField
