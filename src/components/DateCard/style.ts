import styled from 'styled-components'
import { FONT_600 } from '../../constants/style/fonts'
import { CardContainer } from '../ProjectInfoCard/style'

export const DateCardContainer = styled(CardContainer)`
  padding: 15px;
  gap: 10px;
`

export const StyledDate = styled.p`
  font-weight: ${FONT_600};
  font-size: 1.5rem;
  line-height: 1.75rem;
`

export const WorkstationTableWrapper = styled.div`
  height: 14.5rem;
  overflow-y: scroll;
`

export const WorkstationTableHead = styled.thead`
  position: sticky;
  top: 0;

  th {
    /* padding-top: 21px;
    padding-bottom: 21px; */
    padding: 21px 0;
    font-weight: 700;
    font-size: 15px;
    line-height: 1.125rem;
    background-color: #fafafa;
  }
`

export const WorkstationTableItem = styled.td`
  height: 100%;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.125rem;
  padding: 17px 0;

  a {
    padding: 0;
  }
`
