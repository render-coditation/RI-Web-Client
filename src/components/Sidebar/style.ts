import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fafafa;
  height: 100vh;
  position: sticky;
  top: 30px;
  z-index: 10;
  left: 0;
  transition: all 0.5s;
  border-right: 2px solid #e2e2e2;
  width: 75px;
`

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px 1px 1px 0px;
  margin-right: 2px;
  margin-top: 2rem;
  height: 75px;
  transition: all 0.5s;
`

export const ProfilePicImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`
