import { DateCard } from '../../components/DateCard'
import { ProjectInfoCard } from '../../components/ProjectInfoCard'
import { FlexColumn, FlexWrap } from '../../components/SharedComponents'
import UsersIcon from '../../assets/users-icon.svg'
import { CardHeading } from '../../components/ProjectInfoCard/style'
import {
  WorkstationArtistList,
  WorkstationCard,
  WorkstationTableHead,
  WorkstationTableItem,
  WorkstationTableWrapper,
} from './style'
import { ERROR_COLOR, PRIMARY_COLOR } from '../../constants/style/colors'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RenderCard } from '../../components/RenderCard'
import { StatusCard } from '../../components/StatusCard'

export const GeneralTabData = () => (
  <FlexColumn gap='20px'>
    <FlexWrap gap='20px'>
      <ProjectInfoCard heading='PROJECT' name='Project_XYZ' icon={UsersIcon} />
      <ProjectInfoCard
        heading='CREATED BY'
        name='John Doe'
        subtitle='john.doe@renderimagination.com'
        icon='https://picsum.photos/200'
      />
      <DateCard heading='CREATED ON' date='13/12/2022' calendarIconColor={PRIMARY_COLOR} />
      <DateCard heading='DELIVERY BY' date='13/12/2022' calendarIconColor={ERROR_COLOR} />
    </FlexWrap>
    <FlexWrap gap='20px'>
      <ProjectInfoCard heading='CLIENT PROJECT CODE' name='Project_XYZ_Code_1' icon={UsersIcon} />
      <ProjectInfoCard
        heading='INTERNAL PROJECT CODE'
        name='Project_XYZ_IN_Name_1'
        icon={UsersIcon}
      />
      <ProjectInfoCard
        heading='INTERNAL PROJECT CODE'
        name='Project_XYZ_IN_Name_1'
        icon={UsersIcon}
      />
      <StatusCard status='Active' />
    </FlexWrap>

    <FlexWrap gap='20px'>
      <WorkstationCard>
        <CardHeading>WORKSTATIONS</CardHeading>

        <WorkstationTableWrapper>
          <Table>
            <WorkstationTableHead>
              <tr>
                <th>#</th>
                <th>Workstation Name</th>
                <th>Project Name</th>
                <th>Instance Type</th>
              </tr>
            </WorkstationTableHead>

            <tr>
              <WorkstationTableItem>01</WorkstationTableItem>
              <WorkstationTableItem>Workstation_Name_Lorem_IP</WorkstationTableItem>
              <WorkstationTableItem>
                <Link to='#'>Project_Name_XYZ</Link>
              </WorkstationTableItem>
              <WorkstationTableItem>G5 16x Large</WorkstationTableItem>
            </tr>
            <tr>
              <WorkstationTableItem>01</WorkstationTableItem>
              <WorkstationTableItem>Workstation_Name_Lorem_IP</WorkstationTableItem>
              <WorkstationTableItem>
                <Link to='#'>Project_Name_XYZ</Link>
              </WorkstationTableItem>
              <WorkstationTableItem>G5 16x Large</WorkstationTableItem>
            </tr>
            <tr>
              <WorkstationTableItem>01</WorkstationTableItem>
              <WorkstationTableItem>Workstation_Name_Lorem_IP</WorkstationTableItem>
              <WorkstationTableItem>
                <Link to='#'>Project_Name_XYZ</Link>
              </WorkstationTableItem>
              <WorkstationTableItem>G5 16x Large</WorkstationTableItem>
            </tr>
            <tr>
              <WorkstationTableItem>01</WorkstationTableItem>
              <WorkstationTableItem>Workstation_Name_Lorem_IP</WorkstationTableItem>
              <WorkstationTableItem>
                <Link to='#'>Project_Name_XYZ</Link>
              </WorkstationTableItem>
              <WorkstationTableItem>G5 16x Large</WorkstationTableItem>
            </tr>
            <tr>
              <WorkstationTableItem>01</WorkstationTableItem>
              <WorkstationTableItem>Workstation_Name_Lorem_IP</WorkstationTableItem>
              <WorkstationTableItem>
                <Link to='#'>Project_Name_XYZ</Link>
              </WorkstationTableItem>
              <WorkstationTableItem>G5 16x Large</WorkstationTableItem>
            </tr>
            <tr>
              <WorkstationTableItem>01</WorkstationTableItem>
              <WorkstationTableItem>Workstation_Name_Lorem_IP</WorkstationTableItem>
              <WorkstationTableItem>
                <Link to='#'>Project_Name_XYZ</Link>
              </WorkstationTableItem>
              <WorkstationTableItem>G5 16x Large</WorkstationTableItem>
            </tr>
            <tr>
              <WorkstationTableItem>01</WorkstationTableItem>
              <WorkstationTableItem>Workstation_Name_Lorem_IP</WorkstationTableItem>
              <WorkstationTableItem>
                <Link to='#'>Project_Name_XYZ</Link>
              </WorkstationTableItem>
              <WorkstationTableItem>G5 16x Large</WorkstationTableItem>
            </tr>
          </Table>
        </WorkstationTableWrapper>
      </WorkstationCard>

      <WorkstationArtistList
        artists={[
          { name: 'John Doe', email: 'john.doe@renderimagination.com' },
          { name: 'John Doe', email: 'john.doe@renderimagination.com' },
        ]}
        showSearchBar={false}
      />
    </FlexWrap>
    <RenderCard noOfMachines={7} />
  </FlexColumn>
)
