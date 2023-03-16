import styled from 'styled-components'
import { FlexContainer } from 'src/components/SharedComponents'
import { FONT_600, FONT_700 } from '../../constants/style/fonts'
import { PRIMARY_COLOR } from '../../constants/style/colors'
import { Nav } from 'react-bootstrap'

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
