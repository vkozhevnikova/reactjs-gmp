export interface IDatePickerInputProps {
  id: string;
  placeholder?: string;
  startDateCurrent?: string | Date;
  onChange: (date: Date) => void;
}
