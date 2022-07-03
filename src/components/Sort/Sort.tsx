import React from 'react';
import cn from 'classnames';
import { ISortProps } from './interfaces';

import { Select } from '../UI/Select';

import styles from './Sort.module.scss';

export const Sort: React.FC<ISortProps> = ({ caption, className, ...selectProps }) => {
  return (
    <div className={cn(styles.sort, className)}>
      <div className={styles.caption}>{caption}</div>
      <Select {...selectProps} />
    </div>
  );
};
