import styled, { css } from 'styled-components'
import { FONT_600 } from '../../constants/style/fonts'
import { CardContainer } from '../ProjectInfoCard/style'
import { FlexContainer } from '../SharedComponents'

export const StatusCardContainer = styled(CardContainer)`
  gap: 12px;
  cursor: pointer;

  ${(props) =>
    props.color &&
    css`
      border: 1px solid ${props.color};
      box-shadow: 0px 0px 7px ${props.color};
    `};
`

export const StatusCardHeader = styled(FlexContainer)`
  justify-content: space-between;
  align-items: center;
`

export const StatusText = styled.p`
  font-weight: ${FONT_600};
  font-size: 1.5rem;
  line-height: 1.75rem;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`
