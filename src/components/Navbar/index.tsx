import { DashboardItems, ManagementItems } from './menuItems'
import SideNavItemList from './SideNavItemList'
import * as S from './style'

const Navbar = () => (
  <S.SidebarContainer>
    <SideNavItemList heading='DASHBOARD' items={DashboardItems} iconType='svg' isDivider />
    <SideNavItemList heading='MANAGEMENT' items={ManagementItems} iconType='svg' />
  </S.SidebarContainer>
)

export default Navbar
