import styled from 'styled-components'
import { ROUNDED_2XL, ROUNDED_3XL } from '../../constants/style/borders'
import { LIGHT_GREY_TEXT_COLOR } from '../../constants/style/colors'
import { FONT_500, FONT_600 } from '../../constants/style/fonts'
import { AvatarIcon } from '../ArtistList/style'
import { FlexColumn, FlexContainer } from '../SharedComponents'

export const CardContainer = styled(FlexColumn)`
  box-shadow: 0px 0px 6px rgba(13, 10, 44, 0.08);
  border-radius: ${ROUNDED_3XL};
  padding: 15px;
  flex: 1;
`

export const CardHeading = styled.p`
  font-weight: ${FONT_600};
  font-size: 13px;
  line-height: 15px;
  color: #9b9b9b;
`

export const ProjectDetails = styled(FlexContainer)`
  gap: 9px;
  align-items: center;
`
export const ProjectAvatar = styled(AvatarIcon)`
  height: 35px;
  width: 35px;

  img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
`

export const ProjectName = styled.p`
  font-weight: ${FONT_600};
  font-size: 17px;
  line-height: 20px;
  margin-bottom: 0;
`

export const ProjectSubtitle = styled.small`
  font-weight: ${FONT_500};
  font-size: 13px;
  line-height: 15px;
  color: ${LIGHT_GREY_TEXT_COLOR};
`
