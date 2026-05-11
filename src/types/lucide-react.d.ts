declare module 'lucide-react' {
  import type { ComponentType, SVGProps } from 'react'

  export type LucideProps = SVGProps<SVGSVGElement> & {
    absoluteStrokeWidth?: boolean
    size?: number | string
  }

  export const Check: ComponentType<LucideProps>
  export const Eye: ComponentType<LucideProps>
  export const ChevronLeft: ComponentType<LucideProps>
  export const LockKeyhole: ComponentType<LucideProps>
  export const Mail: ComponentType<LucideProps>
  export const User: ComponentType<LucideProps>
  export const Zap: ComponentType<LucideProps>
}
