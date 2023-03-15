import Dropdown from 'react-bootstrap/Dropdown'
import { StyledDropdown } from './style'

type DropdownNewProps = {
  placeholder?: string
  options: string[]
  value: string | undefined
  onSelect: (eventKey: string, event: any) => void
}

export const DropdownNew = ({ placeholder, options, value, onSelect }: DropdownNewProps) => (
  <StyledDropdown onSelect={onSelect}>
    <Dropdown.Toggle>{value || placeholder}</Dropdown.Toggle>

    <Dropdown.Menu>
      {options.map((option) => (
        <Dropdown.Item eventKey={option} key={option}>
          {option}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </StyledDropdown>
)
