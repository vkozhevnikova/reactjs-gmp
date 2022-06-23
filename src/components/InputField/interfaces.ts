export interface IInputFieldProps {
  type: 'text' | 'password' | 'tel' | 'email' | 'number';
  placeholder?: string;
  value: string;
  name: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
