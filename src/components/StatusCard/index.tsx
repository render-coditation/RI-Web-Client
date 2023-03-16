import { FiArrowUpRight } from 'react-icons/fi'
import { GoPrimitiveDot } from 'react-icons/go'
import { STATUS_PILL_ERROR_TEXT, STATUS_PILL_SUCCESS_TEXT } from '../../constants/style/colors'
import { CardHeading } from '../ProjectInfoCard/style'
import { FlexAlignCenter } from '../SharedComponents'
import { StatusCardContainer, StatusCardHeader, StatusText } from './style'

type StatusTypes = 'Active' | 'Inactive'

type StatusCardProps = {
  status: StatusTypes
  onClick?: () => void
}

const getStatusColor = (status: StatusTypes) => {
  switch (status) {
    case 'Active':
      return STATUS_PILL_SUCCESS_TEXT

    case 'Inactive':
      return STATUS_PILL_ERROR_TEXT

    default:
      return STATUS_PILL_SUCCESS_TEXT
  }
}

export const StatusCard = ({ status }: StatusCardProps) => (
  <StatusCardContainer color={getStatusColor(status)}>
    <StatusCardHeader>
      <CardHeading>STATUS</CardHeading>
      <FiArrowUpRight color={getStatusColor(status)} size={30} />
    </StatusCardHeader>

    <FlexAlignCenter>
      <GoPrimitiveDot color={getStatusColor(status)} size={30} />
      <StatusText color={getStatusColor(status)}>{status}</StatusText>
    </FlexAlignCenter>
  </StatusCardContainer>
)
