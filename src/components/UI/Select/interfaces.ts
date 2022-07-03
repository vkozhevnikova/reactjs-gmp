export interface ISelectProps {
  options: { [key: string]: string };
  id: string;
  name: string;
  placeholder?: string;
  value: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
