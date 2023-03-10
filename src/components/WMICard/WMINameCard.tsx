import { WMIName, WMINameCardContainer } from './style'

export type WMINameCardProps = {
  name: string
  description?: string
  icon?: string
}

export const WMINameCard = ({ name, description, icon }: WMINameCardProps) => (
  <WMINameCardContainer>
    <WMIName>
      <h1>{name}</h1>
      <p>{description}</p>
    </WMIName>
    <figure>
      <img src={icon} alt='wmi-icon' />
    </figure>
  </WMINameCardContainer>
)
