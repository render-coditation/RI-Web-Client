import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap'
import Header from 'src/components/Header'
import AddIcon from '../../assets/icons/AddIcon'
import BackArrowIcon from '../../assets/icons/BackArrowIcon'
import { Button, DangerOutlinedButton, PrimaryButton } from '../../components/Buttons'
import { FlexAlignCenter, FlexColumn, FlexContainer } from '../../components/SharedComponents'
import { GeneralTabData } from './GeneralTabData'
import { PageHeading, ProjectDetailHeader, StyledTabItem, TabsAndActions } from './style'

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
          <AddIcon />
          WMI
        </PrimaryButton>
      </ProjectDetailHeader>
      <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
        <TabsAndActions>
          <FlexContainer>
            <Nav variant='tabs'>
              <Nav.Item>
                <StyledTabItem eventKey='general'>General</StyledTabItem>
              </Nav.Item>
            </Nav>
          </FlexContainer>
          <FlexContainer gap='10px'>
            <Button>Archive</Button>
            <DangerOutlinedButton>Terminate</DangerOutlinedButton>
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
