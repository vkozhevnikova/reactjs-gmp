import * as React from 'react';
import cn from 'classnames';
import { IFilterByTagsProps } from './interfaces';

import styles from './FilterByTags.module.scss';

export const FilterByTags: React.FC<IFilterByTagsProps> = ({ options }) => {
  return (
    <div className={styles.filter}>
      <button className={cn(styles.button, styles.isActive)} type='button'>
        All
      </button>
      {Object.keys(options).map(item => (
        <button key={item} className={styles.button} type='button'>
          {options[item]}
        </button>
      ))}
    </div>
  );
};
