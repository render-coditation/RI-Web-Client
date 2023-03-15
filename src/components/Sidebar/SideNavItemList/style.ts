import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavTab = styled(NavLink)`
  display: flex;
  padding: 12px 2px;
  text-decoration: none;
  text-align: left;
  height: 48px;
  color: black;
  background-color: #fafaff;
  border-radius: 0.5rem;
  text-decoration: none;
  align-items: center;
  transition: all 0.5s;
  margin: 9.5px 5px 9.5px 4.5px;
  :hover {
    background-color: #acdfde;
    color: #f0f0fa;
    transition: all 0.5s;
  }
  &.active {
    background-color: #33bcba;
    color: #f0f0fa !important;
    transition: all 0.5s;
    & div svg {
      fill: #fff;
    }
  }
`

interface IOpen {
  isOpen: boolean
}

export const NavTabIcon = styled.div`
  font-size: 24px;
  width: 35px;
  margin-left: 1rem;
`
export const NavTabText = styled.div`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
`
