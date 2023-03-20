import styled from 'styled-components'
import { LIGHT_GREY_TEXT_COLOR, PRIMARY_COLOR } from '../../constants/style/colors'
import { FONT_600 } from '../../constants/style/fonts'
import { CardContainer, CardHeading } from '../ProjectInfoCard/style'
import { FlexContainer } from '../SharedComponents'

export const RenderCardContainer = styled(CardContainer)`
  max-width: 17.375rem;
`

export const RenderCardHeader = styled(FlexContainer)`
  align-items: center;
  justify-content: space-between;
`

export const RenderCardHeading = styled(CardHeading)`
  font-size: 17px;
  line-height: 20px;
  color: ${LIGHT_GREY_TEXT_COLOR};
`
export const RenderNumberContainer = styled(FlexContainer)`
  align-items: flex-end;
  margin-bottom: 1.87rem;
`

export const RenderNumber = styled.span`
  color: ${PRIMARY_COLOR};
  font-weight: ${FONT_600};
  font-size: 4rem;
  line-height: 4.69rem;
`
export const RenderNumberText = styled(CardHeading)`
  margin-bottom: 3px;
`

export const RenderInfoText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #595959;
`
