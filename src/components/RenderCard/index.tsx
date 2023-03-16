import {
  RenderCardContainer,
  RenderCardHeader,
  RenderCardHeading,
  RenderInfoText,
  RenderNumber,
  RenderNumberContainer,
  RenderNumberText,
} from './style'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { FlexContainer } from '../SharedComponents'
import ProcessIcon from '../../assets/icons/ProcessIcon'

type RenderCardProps = {
  noOfMachines: number
}

export const RenderCard = ({ noOfMachines }: RenderCardProps) => (
  <RenderCardContainer>
    <RenderCardHeader>
      <RenderCardHeading>RENDER FARM</RenderCardHeading>
      <ProcessIcon />
    </RenderCardHeader>

    <RenderNumberContainer>
      <RenderNumber>{noOfMachines}</RenderNumber>
      <RenderNumberText>Machines</RenderNumberText>
    </RenderNumberContainer>

    <FlexContainer gap='5px'>
      <AiOutlineQuestionCircle size={18} />
      <RenderInfoText>
        No. of machines this project is using to render assets/scenes/frames.
      </RenderInfoText>
    </FlexContainer>
  </RenderCardContainer>
)
