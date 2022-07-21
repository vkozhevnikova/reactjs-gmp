export interface IButtonProps {
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  theme: 'default' | 'ghost' | 'info' | 'invisible';
  className?: string;
}
