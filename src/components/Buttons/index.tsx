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
  disabled?: boolean
}

export const Button = ({ children, onClick, style, disabled = false }: ButtonProps) => (
  <ButtonContainer onClick={onClick} style={style} disabled={disabled}>
    {children}
  </ButtonContainer>
)

export const PrimaryButton = ({ children, onClick, style, disabled = false }: ButtonProps) => (
  <PrimaryButtonContainer onClick={onClick} style={style} disabled={disabled}>
    {children}
  </PrimaryButtonContainer>
)

export const DangerButton = ({ children, onClick, style, disabled = false }: ButtonProps) => (
  <DangerButtonContainer onClick={onClick} style={style} disabled={disabled}>
    {children}
  </DangerButtonContainer>
)
export const DangerOutlinedButton = ({
  children,
  onClick,
  style,
  disabled = false,
}: ButtonProps) => (
  <DangerOutlinedButtonContainer onClick={onClick} style={style} disabled={disabled}>
    {children}
  </DangerOutlinedButtonContainer>
)
