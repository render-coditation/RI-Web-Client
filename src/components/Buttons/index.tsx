import { ButtonContainer } from './style'

export type ButtonProps = {
  btnType?: 'primary' | 'secondary' | 'danger' | 'danger-secondary'
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  style?: React.CSSProperties
}

export const Button = ({ children, btnType = 'secondary', onClick, style }: ButtonProps) => (
  <ButtonContainer btnType={btnType} onClick={onClick} style={style}>
    {children}
  </ButtonContainer>
)
