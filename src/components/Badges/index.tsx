import { BadgeContainer } from './style'

export type BadgeProps = {
  children?: React.ReactNode
  type?: 'success' | 'error' | 'warning' | 'normal'
}

export const Badge = ({ children, type = 'normal' }: BadgeProps) => (
  <BadgeContainer type={type}>{children}</BadgeContainer>
)
