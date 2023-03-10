import styled, { css } from 'styled-components'
import { BadgeProps } from '.'
import {
  STATUS_PILL_ERROR_BG,
  STATUS_PILL_ERROR_TEXT,
  STATUS_PILL_NORMAL_BG,
  STATUS_PILL_NORMAL_TEXT,
  STATUS_PILL_SUCCESS_BG,
  STATUS_PILL_SUCCESS_TEXT,
  STATUS_PILL_WARNING_BG,
  STATUS_PILL_WARNING_TEXT,
} from '../../constants/style/colors'

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
  color: ${STATUS_PILL_NORMAL_TEXT};
  background-color: ${STATUS_PILL_NORMAL_BG};
  ${(props) =>
    props.type === 'success' &&
    css`
      background-color: ${STATUS_PILL_SUCCESS_BG};
      color: ${STATUS_PILL_SUCCESS_TEXT};
    `}
  ${(props) =>
    props.type === 'error' &&
    css`
      background-color: ${STATUS_PILL_ERROR_BG};
      color: ${STATUS_PILL_ERROR_TEXT};
    `}
        ${(props) =>
    props.type === 'warning' &&
    css`
      background-color: ${STATUS_PILL_WARNING_BG};
      color: ${STATUS_PILL_WARNING_TEXT};
    `}
`
