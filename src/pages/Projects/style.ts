import { Form, Modal } from 'react-bootstrap'
import styled from 'styled-components'
export const PaddedDivider = styled.div<{ dividerWidth: string }>`
  margin: 0.2rem 0 0.2rem 0.4rem;
  border-top: 2.5px solid #f3f3f3;
  display: inline-table;
  width: ${({ dividerWidth }) => dividerWidth || '20rem'};
  @media screen and (min-width: 1400px) {
    width: ${({ dividerWidth }) => dividerWidth || '40rem'};
  }
`
export const HeaderWrapper = styled.div`
  margin-bottom: 2px solid grey;
`
export const HeaderTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
`
export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`
export const SearchAndAddProject = styled.div`
  display: flex;
  margin: 0 2rem;
`
