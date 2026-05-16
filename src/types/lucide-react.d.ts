declare module 'lucide-react' {
  import type { ComponentType, SVGProps } from 'react'

  export type LucideProps = SVGProps<SVGSVGElement> & {
    absoluteStrokeWidth?: boolean
    size?: number | string
  }

  export const AppWindowMac: ComponentType<LucideProps>
  export const ArrowRight: ComponentType<LucideProps>
  export const Check: ComponentType<LucideProps>
  export const CreditCard: ComponentType<LucideProps>
  export const Eye: ComponentType<LucideProps>
  export const EyeOff: ComponentType<LucideProps>
  export const ChevronLeft: ComponentType<LucideProps>
  export const LockKeyhole: ComponentType<LucideProps>
  export const LogOut: ComponentType<LucideProps>
  export const Mail: ComponentType<LucideProps>
  export const Menu: ComponentType<LucideProps>
  export const Monitor: ComponentType<LucideProps>
  export const Moon: ComponentType<LucideProps>
  export const Sun: ComponentType<LucideProps>
  export const X: ComponentType<LucideProps>
  export const User: ComponentType<LucideProps>
  export const Wallet: ComponentType<LucideProps>
  export const Zap: ComponentType<LucideProps>
}
