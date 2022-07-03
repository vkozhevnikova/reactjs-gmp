export interface ITextareaProps {
  id: string;
  placeholder?: string;
  value: string;
  name: string;
  disabled?: boolean;
  cols?: number;
  rows?: number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}
