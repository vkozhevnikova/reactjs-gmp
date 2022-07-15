import { IInputProps } from '../Input/interfaces';

export interface ISelectMultipleProps extends Omit<IInputProps, 'value'> {
  options: { [key: string]: string };
  value: string[];
  className?: string;
}
