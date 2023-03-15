import DatePicker from 'react-date-picker'
import styled from 'styled-components'
import { ROUNDED } from '../../constants/style/borders'
import { LIGHT_GREY_TEXT_COLOR } from '../../constants/style/colors'
import { FONT_700 } from '../../constants/style/fonts'

export const DatePickerContainer = styled(DatePicker)`
  padding: 10px;
  width: 100%;

  border: 1px solid ${LIGHT_GREY_TEXT_COLOR};
  border-radius: ${ROUNDED};

  .react-date-picker__wrapper {
    border: none;
    font-weight: ${FONT_700};
    font-size: 17px;
    line-height: 20px;

    .react-date-picker__inputGroup input {
      outline: none;
    }
  }
`
