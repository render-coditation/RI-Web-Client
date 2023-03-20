import { BiCalendar } from 'react-icons/bi'

import { CardHeading } from '../ProjectInfoCard/style'
import { FlexAlignCenter, FlexContainer } from '../SharedComponents'
import { DateCardContainer, StyledDate } from './style'

type DateCardProps = {
  heading: string
  date: string
  calendarIconColor?: string
}

export const DateCard = ({ heading, date, calendarIconColor }: DateCardProps) => (
  <DateCardContainer>
    <FlexAlignCenter gap='7px'>
      <BiCalendar size={22} color={calendarIconColor} />
      <CardHeading>{heading}</CardHeading>
    </FlexAlignCenter>
    <StyledDate>{date}</StyledDate>
  </DateCardContainer>
)
