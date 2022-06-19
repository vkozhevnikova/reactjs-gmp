export interface IButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  theme: 'default' | 'ghost' | 'info';
  className?: string;
}
