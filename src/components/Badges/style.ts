import styled, { css } from 'styled-components'
import { BadgeProps } from '.'

export const BadgeContainer = styled.div<BadgeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 7px;
  gap: 10px;
  border-radius: 13.5px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #007aff;
  background-color: #d9ebff;
  ${(props) =>
    props.type === 'success' &&
    css`
      background-color: #ebf9f4;
      color: #2fb182;
    `}
  ${(props) =>
    props.type === 'error' &&
    css`
      background-color: #fdf4f6;
      color: #e15a7a;
    `}
        ${(props) =>
    props.type === 'warning' &&
    css`
      background-color: #fff7e6;
      color: #ffae00;
    `}
`
