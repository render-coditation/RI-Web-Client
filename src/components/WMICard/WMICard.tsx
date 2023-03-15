import { PRIMARY_COLOR } from '../../constants/style/colors'
import { InfoCard } from '../InfoCard'
import { WMICardActions, WMICardContainer, WMICardDetails } from './style'
import { WMINameCard } from './WMINameCard'
import CPUIcon from '../../assets/fan.svg'
import GPUIcon from '../../assets/cpu.svg'
import DatabaseIcon from '../../assets/database.svg'

export type WMICardProps = {
  name: string
  description: string
  icon: string
  instanceName: string
  instanceVariant: string
  cpuCores: number
  memory: number
  storage: number
  children?: React.ReactNode
}

export const WMICard = (props: WMICardProps) => (
  <WMICardContainer>
    <WMINameCard name={props.name} description={props.description} icon={props.icon} />
    <WMICardDetails>
      <InfoCard
        title={props.instanceName}
        subtitle={props.instanceVariant}
        containerStyle={{
          flex: 1,
        }}
      />
      <InfoCard
        title={`${props.cpuCores}-Core`}
        subtitle='CPU'
        icon={CPUIcon}
        titleStyle={{
          fontSize: '24px',
          lineHeight: '28.18px',
          color: PRIMARY_COLOR,
        }}
      />
      <InfoCard
        title={`${props.memory} GB`}
        subtitle='Memory'
        icon={GPUIcon}
        titleStyle={{
          fontSize: '24px',
          lineHeight: '28.18px',
          color: PRIMARY_COLOR,
        }}
      />
      <InfoCard
        title={`${props.storage} GB`}
        subtitle='Storage'
        icon={DatabaseIcon}
        titleStyle={{
          fontSize: '24px',
          lineHeight: '28.18px',
          color: PRIMARY_COLOR,
        }}
      />
    </WMICardDetails>
    {props.children && <WMICardActions>{props.children}</WMICardActions>}
  </WMICardContainer>
)
