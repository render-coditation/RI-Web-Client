import {
  ButtonContainer,
  DangerButtonContainer,
  DangerOutlinedButtonContainer,
  PrimaryButtonContainer,
} from './style'

export type ButtonProps = {
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  style?: React.CSSProperties
}

export const Button = ({ children, onClick, style }: ButtonProps) => (
  <ButtonContainer onClick={onClick} style={style}>
    {children}
  </ButtonContainer>
)

export const PrimaryButton = ({ children, onClick, style }: ButtonProps) => (
  <PrimaryButtonContainer onClick={onClick} style={style}>
    {children}
  </PrimaryButtonContainer>
)

export const DangerButton = ({ children, onClick, style }: ButtonProps) => (
  <DangerButtonContainer onClick={onClick} style={style}>
    {children}
  </DangerButtonContainer>
)
export const DangerOutlinedButton = ({ children, onClick, style }: ButtonProps) => (
  <DangerOutlinedButtonContainer onClick={onClick} style={style}>
    {children}
  </DangerOutlinedButtonContainer>
)
