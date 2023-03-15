import { StatusPillContainer } from './style'

export type StatusPillProps = {
  children?: React.ReactNode
  type?: 'success' | 'error' | 'warning' | 'normal'
}

export const StatusPill = ({ children, type = 'normal' }: StatusPillProps) => (
  <StatusPillContainer type={type}>{children}</StatusPillContainer>
)
