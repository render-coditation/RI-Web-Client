import styled from 'styled-components'
import { FlexColumn } from '../SharedComponents'

export const InfoCardContainer = styled(FlexColumn)`
  gap: 5px;
`

export const InfoCardTitle = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  white-space: nowrap;
`

export const InfoCardSubtitle = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  color: #b9b8b8;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;

  .icon {
    width: 18px;
    height: 18px;
  }

  .icon img {
    width: 100%;
    height: 100%;
  }
`
