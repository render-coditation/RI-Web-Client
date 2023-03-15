import Select, { GroupBase, OptionsOrGroups } from 'react-select'

export type Option = {
  value: string
  label: string | JSX.Element
}

export type DropdownProps = {
  options: OptionsOrGroups<any, GroupBase<any>>
  value: Option
  onChange: React.Dispatch<React.SetStateAction<Option>>
  placeholder?: string
  containerStyles?: React.CSSProperties
}

export const Dropdown = ({
  options,
  value,
  onChange,
  placeholder,
  containerStyles,
}: DropdownProps) => (
  <Select
    defaultValue={options[0]}
    onChange={onChange}
    options={options}
    value={value}
    placeholder={placeholder}
    styles={{
      control: (baseStyles, state) => ({
        ...baseStyles,

        padding: '1rem',

        ...containerStyles,
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
