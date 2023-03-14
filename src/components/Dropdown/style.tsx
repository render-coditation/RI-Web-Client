import styled from 'styled-components'
import { ROUNDED } from '../../constants/style/borders'
import { LIGHT_GREY_TEXT_COLOR } from '../../constants/style/colors'
import { FlexContainer } from '../SharedComponents'

export const DropdownContainer = styled(FlexContainer)`
  padding: 1rem;
  border: 1px solid ${LIGHT_GREY_TEXT_COLOR};
  border-radius: ${ROUNDED};
`

export const DropdownSelect = styled.select`
  /* Hide default arrow for Firefox */
  -moz-appearance: none;
  /* for Safari, Chrome, Opera */
  -webkit-appearance: none;

  flex: 1;
  outline: none;
  border: none;
  background: none;
`
export const DropdownMenu = styled.option`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid ${LIGHT_GREY_TEXT_COLOR};
  border-radius: ${ROUNDED};
  color: red;
`
