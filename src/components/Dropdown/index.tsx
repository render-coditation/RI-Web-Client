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

export const Dropdown = ({ options, value, onChange }: DropdownProps) => (
  <Select
    defaultValue={options[0]}
    onChange={onChange}
    options={options}
    value={value}
    styles={{
      control: (baseStyles, state) => ({
        ...baseStyles,

        padding: '1rem',
      }),
      valueContainer: (baseStyles, state) => ({
        ...baseStyles,

        padding: 0,
      }),
      indicatorSeparator: (baseStyles, state) => ({
        ...baseStyles,

        display: 'none',
      }),

      dropdownIndicator: (baseStyles, state) => ({
        ...baseStyles,

        width: '1.5rem',
        height: '1.5rem',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
      }),
    }}
  />
)
