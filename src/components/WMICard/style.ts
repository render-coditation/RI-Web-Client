import styled from 'styled-components'
import { LIGHT_GREY_TEXT_COLOR } from '../../constants/style/colors'

export const WMINameCardContainer = styled.div`
  display: flex;
`

export const WMIName = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 7px;
  h1 {
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    color: black;
  }

  p {
    color: ${LIGHT_GREY_TEXT_COLOR};
    font-weight: 600;
    font-size: 13px;
    line-height: 15px;
    max-width: 275px;
  }
`

export const WMICardContainer = styled.div`
  padding: 25px 32px;
  display: flex;
  flex-direction: column;
  max-width: 615px;
  border-radius: 15px;
  border: 2px solid #f9f9f9;
`

export const WMICardDetails = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 40px;
`

export const WMICardActions = styled.div`
  margin-top: 35px;
`
