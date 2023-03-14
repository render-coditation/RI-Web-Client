import React from 'react'
import * as S from './style'

interface INavItem {
  id: number
  name: string
  path: string
  icon: JSX.Element | string
}

interface ISideNavItemList {
  items: INavItem[]
  iconType: 'svg' | 'custom'
}

const SideNavItemList = ({ iconType, items }: ISideNavItemList) => (
  <>
    {items.map((item) => (
      <S.NavTab to={item.path} key={item.id} className='link'>
        <S.NavTabIcon>
          {iconType === 'svg' ? item.icon : <span className={`${item.icon}`} />}
        </S.NavTabIcon>
      </S.NavTab>
    ))}
  </>
)

export default SideNavItemList
