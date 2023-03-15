import DropdownBS from 'react-bootstrap/Dropdown'
import { StyledDropdown } from './style'

type DropdownProps = {
  placeholder?: string
  options: string[]
  value: string | undefined
  onSelect: (eventKey: string, event: any) => void
  containerStyles?: React.CSSProperties
}

export const Dropdown = ({
  placeholder,
  options,
  value,
  onSelect,
  containerStyles,
}: DropdownProps) => (
  <StyledDropdown onSelect={onSelect}>
    <DropdownBS.Toggle style={containerStyles}>{value || placeholder}</DropdownBS.Toggle>

    <DropdownBS.Menu>
      {options.map((option) => (
        <DropdownBS.Item eventKey={option} key={option}>
          {option}
        </DropdownBS.Item>
      ))}
    </DropdownBS.Menu>
  </StyledDropdown>
)
