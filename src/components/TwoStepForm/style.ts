import { Form, Modal } from 'react-bootstrap'
import styled from 'styled-components'
import { LIGHT_GREY_TEXT_COLOR } from '../../constants/style/colors'
import { ButtonContainer } from '../Buttons/style'
import { FlexColumn } from '../SharedComponents'

export const TwoStepModal = styled(Modal)``
export const PaddedDivider = styled.div<{ dividerWidth: string }>`
  margin: 0.2rem 0 0.2rem 0.4rem;
  border-top: 2px solid ${LIGHT_GREY_TEXT_COLOR};
  display: inline-table;
  width: ${({ dividerWidth }) => dividerWidth || '20rem'};
  @media screen and (min-width: 1400px) {
    width: ${({ dividerWidth }) => dividerWidth || '40rem'};
  }
`
export const FormHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: 5rem; */
  margin: 10px 0;
`
export const FormDatesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
`
export const FormHeaderBackIcon = styled.div`
  margin: 0 4px 0px 0;
  cursor: pointer;
  padding: 0.4rem;
  :hover {
    border-radius: 50rem;
    background-color: ${LIGHT_GREY_TEXT_COLOR};
    transition: all 0.5s;
  }
`

export const FormHeaderCloseIcon = styled.div`
  cursor: pointer;
  padding: 0.4rem;
  :hover {
    border-radius: 50rem;
    background-color: ${LIGHT_GREY_TEXT_COLOR};
    transition: all 0.5s;
  }
`
export const FormHeaderText = styled.p`
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
`
export const FormTitleWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
`
export const FormTitle = styled.div`
  margin-left: 1rem;
`
export const FormTitleNumber = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3c82f5;
  color: white;
  font-weight: bold;
  margin-right: 10px;
`
export const FormTitleNumberInactive = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #54595e26;
  color: white;
  font-weight: bold;
  margin-right: 10px;
`
export const FormTitleText = styled.span`
  display: inline-block;
  font-size: 14px;
  line-height: 30px;
`
export const FormGroup = styled(Form.Group)`
  margin: 0.4rem 0;
`
export const FormLabels = styled(Form.Label)`
  margin: 0rem 0 0.5rem 0;
  color: #54595e;
  font-size: 15px;
  font-weight: 600;
`
// Artists

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
  img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
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

export const ArtistListContainer = styled(FlexColumn)`
  height: 460px;
`

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

export const DeleteIcon = styled.div`
  background-color: #fdf4f6;
  padding: 0.2rem 0.3rem;
  border-radius: 10rem;
  cursor: pointer;
  :hover {
    background-color: #acdfde;
    transition: all 0.5s;
  }
`
export const ListContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  height: 20rem;
`
export const ListItems = styled.li`
  background-color: #f3f3f3;
  margin: 0.2rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  :hover {
    background-color: #acdfde;
    transition: all 0.5s;
  }
`
export const ListContainerList = styled.div`
  overflow-y: auto;
  height: 20rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const FooterWrapper = styled.div`
  margin: 1rem 0 1rem 1rem;
  display: flex;
  justify-content: flex-end;
`
