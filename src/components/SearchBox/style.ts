import styled from 'styled-components'
import { ROUNDED } from '../../constants/style/borders'
import { LIGHT_GREY_TEXT_COLOR } from '../../constants/style/colors'
import { FlexContainer } from '../SharedComponents'

export const SearchBoxContainer = styled(FlexContainer)`
  border-radius: ${ROUNDED};
  padding: 9px 10px;
  border: 1px solid ${LIGHT_GREY_TEXT_COLOR};
  gap: 7px;
`

export const SearchBoxInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
`
