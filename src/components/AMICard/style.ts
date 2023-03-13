import styled, { css } from 'styled-components'
import { AMICardProps } from '.'
import { LIGHT_GREY_TEXT_COLOR, PRIMARY_COLOR } from '../../constants/style/colors'
import { ButtonContainer } from '../Buttons/style'

export const AMICardContainer = styled.div<AMICardProps>`
  display: flex;
  flex-direction: column;
  padding: 25px 10px 15px 20px;
  max-width: 216px;
  min-height: 236px;
  justify-content: space-between;
  border-radius: 15px;
  ${(props) =>
    props.isSelected &&
    css`
      border: 2px solid ${PRIMARY_COLOR};
      box-shadow: 0px 0px 7px ${PRIMARY_COLOR};
    `}
`

export const AMICardActions = styled.div`
  display: flex;
  justify-content: center;
`

export const AMICardButton = styled(ButtonContainer)`
  padding: 7px;
  font-size: 12px;
  line-height: 14px;
`

export const AMICardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h1 {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
  }

  p {
    font-weight: 600;
    font-size: 13px;
    line-height: 15px;
    color: ${LIGHT_GREY_TEXT_COLOR};
  }
`
