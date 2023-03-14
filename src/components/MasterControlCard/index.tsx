import { ERROR_COLOR } from '../../constants/style/colors'
import { StatusPill } from '../Badges'
import { FlexColumn, FlexContainer } from '../SharedComponents'
import { ToggleSwitch } from '../ToggleSwitch'
import {
  ShutdownHeader,
  MasterControlCardAction,
  MasterControlCardContainer,
  MasterControlCardName,
  TerminateHeader,
} from './style'

export type MasterControlCardProps = {
  name: string
  activeCount: number
  isTerminateOn: boolean
  isShutdownOn: boolean
  onTerminateChange: () => void
  onShutdownChange: () => void
  icon?: JSX.Element
  terminateToggleColor?: string
}

export const MasterControlCard = ({
  name,
  activeCount,
  icon,
  terminateToggleColor,
  isTerminateOn,
  isShutdownOn,
  onTerminateChange,
  onShutdownChange,
}: MasterControlCardProps) => (
  <MasterControlCardContainer>
    <FlexContainer gap='12px'>
      {icon}
      <MasterControlCardName>
        <h1>{name}</h1>
        <StatusPill type='success'>{`${activeCount} Active`}</StatusPill>
      </MasterControlCardName>
    </FlexContainer>
    <FlexColumn>
      <MasterControlCardAction>
        <TerminateHeader>Terminate All?</TerminateHeader>
        <ToggleSwitch
          bgColor={terminateToggleColor}
          checked={isTerminateOn}
          onChange={onTerminateChange}
        />
      </MasterControlCardAction>
      <MasterControlCardAction>
        <ShutdownHeader>Shutdown?</ShutdownHeader>
        <ToggleSwitch bgColor={ERROR_COLOR} checked={isShutdownOn} onChange={onShutdownChange} />
      </MasterControlCardAction>
    </FlexColumn>
  </MasterControlCardContainer>
)
