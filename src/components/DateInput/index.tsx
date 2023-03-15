import CalendarIcon from '../../assets/icons/CalendarIcon'
import { DatePickerContainer } from './style'

type DateInputProps = {
  value: Date
  onChange: React.Dispatch<React.SetStateAction<Date>>
}

export const DateInput = ({ value, onChange }: DateInputProps) => (
  <DatePickerContainer
    onChange={onChange}
    value={value}
    clearIcon={null}
    calendarIcon={<CalendarIcon />}
  />
)
