import styled from 'styled-components'
import { LIGHT_GREY_TEXT_COLOR } from '../../constants/style/colors'
import { ButtonContainer } from '../Buttons/style'
import { FlexColumn } from '../SharedComponents'

export const ArtistListItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const AvatarPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
  border-radius: 100%;
`

export const AvatarIcon = styled.figure`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-bottom: 0;
`

export const ArtistDetails = styled(FlexColumn)`
  gap: 2px;
  flex: 1;

  h3 {
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
  }

  p {
    color: ${LIGHT_GREY_TEXT_COLOR};
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
  }
`

export const ArtistListContainer = styled(FlexColumn)``

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: center;
  gap: 6px;
  p {
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #54595e;
    white-space: nowrap;
  }
`

export const AddArtistBtn = styled(ButtonContainer)`
  border: none;
  gap: 4.5px;

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10.5px;
    height: 10.5px;
  }

  figure img {
    width: 100%;
    height: 100%;
  }
`
export const ArtistSearchSection = styled(FlexColumn)``

export const ArtistSearch = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 12px;
`

export const ArtistSearchBar = styled.input`
  padding: 10px 0 9px 15px;
  flex: 1;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  border: 1px solid ${LIGHT_GREY_TEXT_COLOR};
  border-radius: 8px;
`
export const SectionLine = styled.div`
  width: 100%;
  border: 1px solid ${LIGHT_GREY_TEXT_COLOR};
  height: 0;
`
