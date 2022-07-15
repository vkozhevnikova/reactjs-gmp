import * as React from 'react';
import cn from 'classnames';
import { IButtonProps } from './interfaces';

import styles from './Button.module.scss';

export const Button: React.FC<IButtonProps> = ({
  onClick,
  type = 'button',
  theme = 'default',
  children,
  className,
}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={cn(styles.button, styles[theme], className)} onClick={onClick}>
      {children}
    </button>
  );
};
