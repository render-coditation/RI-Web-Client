import React from 'react'
import * as S from './style'

interface INavItem {
  id: number
  name: string
  path: string
}

interface ISideNavItemList {
  items: INavItem[]
  heading: string
  isDivider?: boolean
  iconType: 'svg' | 'custom'
}

const SideNavItemList = ({ items, heading, isDivider }: ISideNavItemList) => (
  <>
    <S.SideNavBarContainer>
      <S.SidebarHeading>{heading}</S.SidebarHeading>
      {items?.map((item) => (
        <S.NavTab to={item.path} key={item.id} className='link'>
          <S.NavTabText>{item.name}</S.NavTabText>
        </S.NavTab>
      ))}
    </S.SideNavBarContainer>
    {isDivider && <S.PaddedDivider />}
  </>
)

export default SideNavItemList
