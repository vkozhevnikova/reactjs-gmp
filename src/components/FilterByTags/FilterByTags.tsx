import * as React from 'react';
import cn from 'classnames';
import { IFilterByTagsProps } from './interfaces';
import { IGenresProps } from '../../types/IGenresProps';

import styles from './FilterByTags.module.scss';

export const FilterByTags: React.FC<IFilterByTagsProps> = ({ options }) => {
  const renderItem = (item: string) => {
    const isAllItem = item === 'All';
    const caption = isAllItem ? 'All' : options[item];

    return (
      <button key={item} className={cn(styles.button, { [styles.isActive]: isAllItem })} type='button'>
        {caption}
      </button>
    );
  };

  const renderList = (items: IGenresProps) => {
    const itemsKeys = Object.keys(items);

    return itemsKeys.map(renderItem);
  };

  return (
    <div className={styles.filter}>
      {renderItem('All')}
      {renderList(options)}
    </div>
  );
};
