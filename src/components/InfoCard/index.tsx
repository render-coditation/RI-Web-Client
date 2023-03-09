import { InfoCardContainer, InfoCardSubtitle, InfoCardTitle } from './style'

export type InfoCardProps = {
  title: string
  subtitle?: string
  icon?: string
  containerStyle?: React.CSSProperties
  titleStyle?: React.CSSProperties
  subtitleStyle?: React.CSSProperties
}

export const InfoCard = ({
  title,
  subtitle,
  icon,
  containerStyle,
  titleStyle,
  subtitleStyle,
}: InfoCardProps) => (
  <InfoCardContainer style={containerStyle}>
    <InfoCardTitle style={titleStyle}>{title}</InfoCardTitle>
    <InfoCardSubtitle style={subtitleStyle}>
      <div>
        <img src={icon} alt='info-card-icon' />
      </div>
      <p>{subtitle}</p>
    </InfoCardSubtitle>
  </InfoCardContainer>
)
