export interface IInputProps {
  id: string;
  type: 'text' | 'password' | 'tel' | 'email' | 'number';
  placeholder?: string;
  value: string | number | null;
  name: string;
  disabled?: boolean;
  readonly?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
