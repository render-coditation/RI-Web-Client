import styled from 'styled-components'
import { FlexContainer } from 'src/components/SharedComponents'
import { FONT_600, FONT_700 } from '../../constants/style/fonts'
import { PRIMARY_COLOR } from '../../constants/style/colors'
import { Nav } from 'react-bootstrap'
import { CardContainer } from '../../components/ProjectInfoCard/style'
import { ArtistList } from '../../components/ArtistList'
import { ArtistListContainer } from '../../components/ArtistList/style'

export const ProjectDetailHeader = styled(FlexContainer)`
  align-items: center;
  gap: 20px;
  margin-bottom: 13px;
`

export const PageHeading = styled.h2`
  flex: 1;
  font-weight: ${FONT_600};
  font-size: 2rem;
  line-height: 2.375rem;
  margin: 0;
`

export const TabsAndActions = styled(FlexContainer)`
  justify-content: space-between;
  align-items: center;
`

export const StyledTabItem = styled(Nav.Link)`
  p {
    margin-bottom: 23px;
    color: ${PRIMARY_COLOR};
    font-weight: ${FONT_700};
    font-size: 15px;
    line-height: 18px;
  }
`
export const WorkstationCard = styled(CardContainer)`
  flex: 2;
  gap: 11px;
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

export const WorkstationArtistList = styled(ArtistList)`
  ${ArtistListContainer} {
    flex: 1;
  }
`
