import { DateCard } from '../../components/DateCard'
import { DateInput } from '../../components/DateInput'
import { ProjectInfoCard } from '../../components/ProjectInfoCard'
import { FlexColumn, FlexContainer, FlexWrap } from '../../components/SharedComponents'
import UsersIcon from '../../assets/users-icon.svg'
import { CardContainer, CardHeading } from '../../components/ProjectInfoCard/style'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import {
  WorkstationTableHead,
  WorkstationTableItem,
  WorkstationTableWrapper,
} from '../../components/DateCard/style'
import { ERROR_COLOR, PRIMARY_COLOR } from '../../constants/style/colors'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const GeneralTabData = () => (
  <FlexColumn>
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
    </FlexWrap>

    <FlexWrap>
      <CardContainer gap='11px'>
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
      </CardContainer>
    </FlexWrap>
  </FlexColumn>
)
