import { AMICardActions, AMICardBody, AMICardButton, AMICardContainer } from './style'

export type AMICardProps = {
  title?: string
  description?: string
  isSelected?: boolean
  onClick?: () => void
  showActions?: boolean
}

export const AMICard = ({
  title,
  description,
  isSelected = false,
  onClick,
  showActions = true,
}: AMICardProps) => (
  <AMICardContainer isSelected={isSelected}>
    <AMICardBody>
      <h1>{title}</h1>
      <p>{description}</p>
    </AMICardBody>
    {showActions && (
      <AMICardActions>
        <AMICardButton onClick={onClick}>View App Package</AMICardButton>
      </AMICardActions>
    )}
  </AMICardContainer>
)
