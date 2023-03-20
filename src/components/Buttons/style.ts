import styled from 'styled-components'
import { ButtonProps } from '.'
import { ERROR_COLOR, PRIMARY_COLOR } from '../../constants/style/colors'

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 2px 15px;
  border: 1px solid ${PRIMARY_COLOR};
  color: ${PRIMARY_COLOR};
  background-color: white;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
`

export const PrimaryButtonContainer = styled(ButtonContainer)`
  background-color: ${PRIMARY_COLOR};
  color: white;
`

export const DangerButtonContainer = styled(ButtonContainer)`
  background-color: ${ERROR_COLOR};
  color: white;
  border: 1px solid ${ERROR_COLOR};

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
    border: none;
  }
`

export const DangerOutlinedButtonContainer = styled(ButtonContainer)`
  background-color: white;
  color: ${ERROR_COLOR};
  border: 1px solid ${ERROR_COLOR};
`

export const NoOutlineButtonContainer = styled(ButtonContainer)`
  border: none;
`
