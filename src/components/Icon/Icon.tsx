import * as React from 'react';
import cn from 'classnames';
import { IIconProps } from './interfaces';

import styles from './Icon.module.scss';

export const Icon: React.FC<IIconProps> = ({ icon, className }) => {
  const { id } = icon;

  return (
    <svg className={cn(styles.icon, className)}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
};
