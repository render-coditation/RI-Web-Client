import ProfileIcon from './icons/ProfileIcon'
import { settingsItem } from './menuItems'
import SideNavItemList from './SideNavItemList'
import * as S from './style'

const Sidebar = () => (
  <S.SidebarContainer>
    <S.SidebarHeader>
      <ProfileIcon profileImage='https://picsum.photos/200' />
    </S.SidebarHeader>
    <SideNavItemList items={settingsItem} iconType='svg' />
  </S.SidebarContainer>
)

export default Sidebar
