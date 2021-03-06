import * as React from 'react';
import cn from 'classnames';
import { IFilterByTagsProps } from './interfaces';
import { IGenresProps } from '../../core/types/IGenresProps';
import { LOCALE, I18Y } from '../../core/i18y';

import styles from './FilterByTags.module.scss';

export const FilterByTags: React.FC<IFilterByTagsProps> = ({ options }) => {
  const renderItem = (item: string) => {
    const isAllItem = item === I18Y[LOCALE].FILTER_ALL_TAG_CAPTION;
    const caption = isAllItem ? I18Y[LOCALE].FILTER_ALL_TAG_CAPTION : options[item];

    return (
      <button
        key={item}
        className={cn(styles.button, { [styles.isActive]: isAllItem })}
        type='button'
      >
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
      {renderItem(I18Y[LOCALE].FILTER_ALL_TAG_CAPTION)}
      {renderList(options)}
    </div>
  );
};
