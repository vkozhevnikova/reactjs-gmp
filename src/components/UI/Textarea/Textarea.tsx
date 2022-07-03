import React from 'react';
import cn from 'classnames';
import { ITextareaProps } from './interfaces';

import styles from './Textarea.module.scss';

export const Textarea: React.FC<ITextareaProps> = ({
  id,
  placeholder,
  value,
  name,
  disabled,
  cols,
  rows,
  onChange,
  className,
}) => {
  return (
    <textarea
      value={value}
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      className={cn(styles.textarea, className)}
    />
  );
};
