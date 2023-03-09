import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px 15px;
  border: 1px solid #3c82f5;
  color: #3c82f5;
  background-color: white;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;

  ${(props) =>
    props.btnType === 'primary' &&
    css`
      background-color: #3c82f5;
      color: white;
    `}
  ${(props) =>
    props.btnType === 'danger' &&
    css`
      background-color: #fe3d3c;
      color: white;
      border: 1px solid #fe3d3c;
    `}
    ${(props) =>
    props.btnType === 'danger-secondary' &&
    css`
      background-color: #white;
      color: #fe3d3c;
      border: 1px solid #fe3d3c;
    `}
`
