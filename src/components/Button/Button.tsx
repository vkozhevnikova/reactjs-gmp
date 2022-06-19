import * as React from 'react';
import cn from 'classnames';
import { IButtonProps } from './IButtonProps';

import styles from './Button.module.scss';

export const Button: React.FC<IButtonProps> = ({ type = 'button', theme = 'default', children, className }) => {
  return (
    <button type={type} className={cn(styles.button, styles[theme], className)}>
      {children}
    </button>
  );
};
