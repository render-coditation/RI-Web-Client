import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const SideNavBarContainer = styled.div`
  margin: 0 2rem;
`
export const NavTab = styled(NavLink)`
  display: flex;
  text-decoration: none;
  text-align: left;
  height: 35px;
  color: #b9b8b8;
  border-radius: 0.5rem;
  text-decoration: none;
  align-items: center;
  transition: all 0.5s;
  font-weight: 500;
  font-size: 15px;
  &.active {
    color: #3c82f5 !important;
    font-weight: 700 !important;
    font-size: 15p !important;
    line-height: 18px !important;
  }
  &.active::before {
    content: '';
    display: block;
    position: absolute;
    left: -5px;
    margin-top: 1rem;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #3c82f5;
  }
`
export const NavTabText = styled.div`
  white-space: nowrap;
  display: block;
`

export const NavTabIcon = styled.div`
  font-size: 24px;
  width: 35px;
`
export const SidebarHeading = styled.div`
  margin: 2rem 0 1rem 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #999695;
  align-items: center;
  white-space: nowrap;
`
export const PaddedDivider = styled.div`
  align-self: center;
  width: 150px;
  border: 2px solid #f9f9f9;
  margin: 1rem 0;
`
