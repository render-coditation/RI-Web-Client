import { AvatarPlaceholder } from '../ArtistList/style'
import { FlexColumn, FlexContainer } from '../SharedComponents'
import {
  ProjectAvatar,
  ProjectDetails,
  CardHeading,
  CardContainer,
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
  <CardContainer gap='10px'>
    <CardHeading>{heading}</CardHeading>
    <ProjectDetails>
      <ProjectAvatar>{icon ? <img src={icon} alt='icon' /> : <AvatarPlaceholder />}</ProjectAvatar>
      <FlexColumn>
        <ProjectName>{name}</ProjectName>
        {subtitle && <ProjectSubtitle>{subtitle}</ProjectSubtitle>}
      </FlexColumn>
    </ProjectDetails>
  </CardContainer>
)
