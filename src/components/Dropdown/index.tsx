// import ArrowDownIcon from '../../assets/icons/ArrowDownIcon'
import Select from 'react-select'

export type Option = {
  value: string
  label: string | JSX.Element
}

export type DropdownProps = {
  options: any
  value: string
  onChange: any
}

// export const Dropdown = ({ options, value, onChange }: DropdownProps) => (
//   <DropdownContainer>
//     <DropdownSelect name='' id='' onChange={onChange} value={value}>
//       {options.map((option) => (
//         <DropdownOption value={option.value} key={option.value}>
//           {option.label}
//         </DropdownOption>
//       ))}
//     </DropdownSelect>
//     <ArrowDownIcon />
//   </DropdownContainer>
// )

export const Dropdown = ({ options, value, onChange }: DropdownProps) => (
  <Select defaultValue={options[0]} onChange={onChange} options={options} value={value} />
)
