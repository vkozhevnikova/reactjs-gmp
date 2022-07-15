import React from 'react';
import cn from 'classnames';
import { GENRES } from '../../../core/constants';
import { IMovieCardProps } from './interfaces';
import { getYear } from '../../../utils/date';

import { MovieContextMenu } from '../MovieContextMenu';

import styles from './MovieCard.module.scss';
import { I18Y, LOCALE } from '../../../core/i18y';

export const MovieCard: React.FC<IMovieCardProps> = ({ movie, className, onEdit, onDelete }) => {
  const { id, url, title, preview, genre, releaseDate } = movie;

  const renderItem = (item: string) => {
    return (
      <span key={item} className={styles.genre}>
        {GENRES[item]}
      </span>
    );
  };

  const renderList = (items: string[]) => items.map(renderItem);

  return (
    <div className={cn(styles.card, className)}>
      <MovieContextMenu className={styles.menuContext}>
        <button type='button' className={styles.actionBtn} onClick={() => onEdit(id)}>
          {I18Y[LOCALE].BUTTON_EDIT}
        </button>
        <button type='button' className={styles.actionBtn} onClick={() => onDelete(id)}>
          {I18Y[LOCALE].BUTTON_DELETE}
        </button>
      </MovieContextMenu>

      <a href={url} className={styles.preview}>
        <img src={preview} alt={title} />
      </a>

      <div className={styles.info}>
        <a href={url} className={styles.title}>
          {title}
        </a>
        <span className={styles.year}>{getYear(releaseDate)}</span>
      </div>
      <div className={styles.genres}>{renderList(genre)}</div>
    </div>
  );
};
