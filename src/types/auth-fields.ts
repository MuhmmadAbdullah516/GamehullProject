import type { InputHTMLAttributes, ReactNode } from 'react'

export type EmailFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  iconClassName?: string
  inputClassName?: string
  label: string
  labelClassName?: string
  wrapperClassName?: string
}

export type PasswordFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  iconClassName?: string
  inputClassName?: string
  label: string
  labelAction?: ReactNode
  labelClassName?: string
  toggleClassName?: string
  wrapperClassName?: string
}
