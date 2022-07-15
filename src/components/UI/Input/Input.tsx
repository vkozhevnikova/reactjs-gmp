import * as React from 'react';
import cn from 'classnames';
import { IInputProps } from './interfaces';

import styles from './Input.module.scss';

export const Input: React.FC<IInputProps> = ({
  id,
  type,
  placeholder,
  value,
  name,
  disabled,
  onChange,
  className,
  readonly,
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readonly}
      onChange={onChange}
      className={cn(styles.input, className)}
    />
  );
};
