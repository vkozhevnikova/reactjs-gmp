import React from 'react';
import cn from 'classnames';
import { actionTypes, useGlobalContext } from '../../../core/store';
import { I18Y, LOCALE } from '../../../core/i18y';
import { GENRES } from '../../../core/constants';
import { IMovieCardProps } from './interfaces';
import { IMovieProps } from '../../../core/types/IMovieProps';
import { getYear } from '../../../core/utils/date';

import { MovieContextMenu } from '../MovieContextMenu';

import styles from './MovieCard.module.scss';

export const MovieCard: React.FC<IMovieCardProps> = ({ movie, className, onEdit, onDelete }) => {
  const { dispatch } = useGlobalContext();
  const { id, url, title, preview, genre, releaseDate } = movie;

  const handlerViewDetails = (event, item: IMovieProps) => {
    event.preventDefault();

    dispatch({
      type: actionTypes.SET_MOVIE_DETAILS,
      payload: item,
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      <a href={url} className={styles.preview} onClick={event => handlerViewDetails(event, movie)}>
        <img src={preview} alt={title} />
      </a>

      <div className={styles.info}>
        <a href={url} className={styles.title} onClick={event => handlerViewDetails(event, movie)}>
          {title}
        </a>
        <span className={styles.year}>{getYear(releaseDate)}</span>
      </div>
      <div className={styles.genres}>{renderList(genre)}</div>
    </div>
  );
};
