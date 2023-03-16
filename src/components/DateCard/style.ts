import styled from 'styled-components'
import { FONT_600 } from '../../constants/style/fonts'
import { CardContainer } from '../ProjectInfoCard/style'

export const DateCardContainer = styled(CardContainer)`
  padding: 15px;
  gap: 10px;
`

export const StyledDate = styled.p`
  font-weight: ${FONT_600};
  font-size: 1.5rem;
  line-height: 1.75rem;
`
