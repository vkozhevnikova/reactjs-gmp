import * as React from 'react';
import cn from 'classnames';
import genresList from '../../data/genre.json';
import { IMovieCardProps } from './interfaces';
import { IGenresProps } from '../../types/IGenresProps';
import { getYear } from '../../utils/getYear';

import styles from './MovieCard.module.scss';

export const MovieCard: React.FC<IMovieCardProps> = ({ movie, className }) => {
  const { url, title, preview, genre, releaseDate } = movie;

  const renderItem = (item: string) => {
    return (
      <span key={item} className={styles.genre}>
        {genresList[item]}
      </span>
    );
  };

  const renderList = (items: string[]) => items.map(renderItem);

  return (
    <div className={cn(styles.card, className)}>
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
