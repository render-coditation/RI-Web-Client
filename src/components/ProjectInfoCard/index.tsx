import { FlexColumn, FlexContainer } from '../SharedComponents'
import {
  ProjectAvatar,
  ProjectDetails,
  ProjectHeading,
  ProjectInfoCardContainer,
  ProjectName,
  ProjectSubtitle,
} from './style'

export type ProjectInfoCardProps = {
  heading: string
  name: string
  icon?: string
  subtitle?: string
}

export const ProjectInfoCard = ({ heading, name, icon, subtitle }: ProjectInfoCardProps) => (
  <ProjectInfoCardContainer>
    <ProjectHeading>{heading}</ProjectHeading>
    <ProjectDetails>
      <ProjectAvatar>
        <img src={icon} alt='icon' />
      </ProjectAvatar>
      <FlexColumn>
        <ProjectName>{name}</ProjectName>
        {subtitle && <ProjectSubtitle>{subtitle}</ProjectSubtitle>}
      </FlexColumn>
    </ProjectDetails>
  </ProjectInfoCardContainer>
)
