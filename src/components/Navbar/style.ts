import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 100vh;
  width: 250px;
  position: sticky;
  border-right: 2px solid #e2e2e2;
`

export const SidebarToggleControl = styled.div`
  font-size: 2rem;
  position: relative;
  left: 2rem;
  color: black;
  cursor: pointer;
`

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1px 1px 1px 0px;
  margin-right: 2px;
  margin-top: 2rem;
  height: 75px;
  transition: all 0.5s;
`
