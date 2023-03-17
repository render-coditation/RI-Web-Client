import { useEffect, useState } from 'react'
import { Nav, Tab } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import Header from 'src/components/Header'
import { getProjectDetailsService } from 'src/services/projects'
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

export type ProjectType = {
  projectId: string
  name: string
  createdBy: string
  createdAt: string
  deliveryDate: string
  clientProjectCode: string
  internalProjectCode: string
  status: string
  artists: string[]
}

export const ProjectDetails = ({ heading, ...rest }: ProjectDetailProps) => {
  const [projectDetails, setProjectDetails] = useState<ProjectType>({
    projectId: '',
    name: '',
    createdBy: '',
    createdAt: '',
    deliveryDate: '',
    clientProjectCode: '',
    internalProjectCode: '',
    status: '',
    artists: [],
  })

  const { projectId = '' } = useParams()

  useEffect(() => {
    const getProjectDetails = async () => {
      try {
        const response = await getProjectDetailsService(projectId)

        setProjectDetails({
          ...projectDetails,
          projectId: response.data.project_id,
          name: response.data.name,
          createdBy: response.data.created_by,
          createdAt: response.data.created_at,
          deliveryDate: response.data.delivery_date,
          clientProjectCode: response.data.client_project_code,
          internalProjectCode: response.data.internal_code,
          status: 'Active',
          artists: response.data.artists,
        })
      } catch (err) {
        console.error('Error while fetching project details: ', err)
      }
    }

    getProjectDetails()
  }, [])
  return (
    <>
      <Header headerTitle={heading} />
      <FlexColumn>
        <ProjectDetailHeader>
          <BackArrowIcon />
          <PageHeading>{projectDetails?.name}</PageHeading>
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
              <GeneralTabData projectDetails={projectDetails} />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </FlexColumn>
    </>
  )
}
