import { Nav, Tab } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import Header from 'src/components/Header'
import BackArrowIcon from '../../assets/icons/BackArrowIcon'
import { Button, DangerOutlinedButton, PrimaryButton } from '../../components/Buttons'
import { FlexAlignCenter, FlexColumn, FlexContainer } from '../../components/SharedComponents'
import { GeneralTabData } from './GeneralTabData'
import {
  PageHeading,
  ProjectDetailHeader,
  StyledArchiveButton,
  StyledDangerButton,
  StyledTabItem,
  TabsAndActions,
} from './style'

interface ProjectDetailProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
}

export const ProjectDetails = ({ heading, ...rest }: ProjectDetailProps) => (
  <>
    <Header headerTitle={heading} />
    <FlexColumn>
      <ProjectDetailHeader>
        <BackArrowIcon />
        <PageHeading>Project_Lorem_Ipsum</PageHeading>
        <PrimaryButton>
          <AiOutlinePlus size={24} />
          WMI
        </PrimaryButton>
      </ProjectDetailHeader>
      <Tab.Container id='left-tabs-example' defaultActiveKey='general'>
        <TabsAndActions>
          <FlexContainer>
            <Nav variant='tabs'>
              <Nav.Item>
                <StyledTabItem eventKey='general'>General</StyledTabItem>
              </Nav.Item>
            </Nav>
          </FlexContainer>
          <FlexContainer gap='10px'>
            <StyledArchiveButton>Archive</StyledArchiveButton>
            <StyledDangerButton>Terminate</StyledDangerButton>
          </FlexContainer>
        </TabsAndActions>
        <Tab.Content>
          <Tab.Pane eventKey='general'>
            <GeneralTabData />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </FlexColumn>
  </>
)
