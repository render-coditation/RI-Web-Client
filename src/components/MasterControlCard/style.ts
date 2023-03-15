import styled from 'styled-components'
import { ROUNDED_3XL } from '../../constants/style/borders'
import { ERROR_COLOR, MASTER_CONTROL_CARD_BORDER } from '../../constants/style/colors'
import { FONT_600 } from '../../constants/style/fonts'
import { FlexColumn, FlexContainer } from '../SharedComponents'

export const MasterControlCardContainer = styled(FlexColumn)`
  border: 1px solid ${MASTER_CONTROL_CARD_BORDER};
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
  border-radius: ${ROUNDED_3XL};
  padding: 13px 15px 19px 15px;
`

export const MasterControlCardName = styled(FlexColumn)`
  gap: 3px;
  min-height: 4.625rem;
  h1 {
    font-weight: ${FONT_600};
    font-size: 24px;
    line-height: 28px;
  }
`

export const MasterControlCardAction = styled(FlexContainer)`
  justify-content: space-between;
  margin-top: 1.5rem;
`

export const TerminateHeader = styled.p`
  font-weight: ${FONT_600};
  font-size: 15px;
  line-height: 18px;
`
export const ShutdownHeader = styled(TerminateHeader)`
  color: ${ERROR_COLOR};
`
