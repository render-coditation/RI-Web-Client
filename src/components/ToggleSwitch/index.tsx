import { ToggleSlider, ToggleSwitchContainer } from './style'

export type ToggleSwitchProps = {
  bgColor: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const ToggleSwitch = ({ bgColor, checked, onChange }: ToggleSwitchProps) => (
  <ToggleSwitchContainer className='switch' bgColor={bgColor}>
    <input type='checkbox' onChange={onChange} checked={checked} />
    <ToggleSlider className='slider' />
  </ToggleSwitchContainer>
)
