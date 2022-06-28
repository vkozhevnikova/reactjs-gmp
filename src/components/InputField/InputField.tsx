import * as React from 'react';
import cn from 'classnames';
import { IInputFieldProps } from './interfaces';

import styles from './InputField.module.scss';

export const InputField: React.FC<IInputFieldProps> = ({
  type = 'text',
  placeholder,
  value,
  name,
  disabled,
  onChange,
  className,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      className={cn(styles.input, className)}
    />
  );
};
