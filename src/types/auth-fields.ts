import type {InputHTMLAttributes, ReactNode } from 'react'

export interface EmailFieldProps  extends Omit<InputHTMLAttributes<HTMLInputElement>,"type">  {
  id?:string
  className?: string
  filledInputClassName?: string
  filledWrapperClassName?: string
  iconClassName?: string
  inputClassName?: string
  label: ReactNode
  labelClassName?: string
  showIcon?: boolean
  wrapperClassName?: string
}

export interface PasswordFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>,'type'> {
  className?:string
  iconClassName?: string
  inputClassName?: string
  label: string
  labelAction?: ReactNode
  labelClassName?: string
  toggleClassName?: string
  wrapperClassName?: string
}

export interface AuthUser {
  balance: number
  email: string
  name: string
}

export interface SignInPayload {
  token: string
  user: AuthUser
}

export interface AuthContextValue {
  isAuthenticated: boolean
  token: string | null
  signIn: (payload: SignInPayload) => void
  signOut: () => void
  user: AuthUser | null
}

export interface AuthProviderProps {
  children: ReactNode
}
