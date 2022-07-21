import React from 'react';
import { GENRES } from '../../../core/constants';
import { getTime, getYear } from '../../../core/utils/date';
import { IMovieDetailsProps } from './interfaces';

import styles from './MovieDetails.module.scss';

export const MovieDetails: React.FC<IMovieDetailsProps> = ({ movie }) => {
  const renderGenre = (item: string) => {
    return (
      <span key={item} className={styles.genre}>
        {GENRES[item]}
      </span>
    );
  };

  const renderGenresList = (items: string[]) => items.map(renderGenre);

  const { preview, title, rating, genre, releaseDate, runtime, overview } = movie;

  return (
    <section className={styles.details}>
      <div className={styles.picture}>
        <img src={preview} alt={title} />
      </div>

      <div className={styles.mainInfo}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.rate}>{rating}</span>
        </div>
        <div className={styles.genres}>{renderGenresList(genre)}</div>
        <div className={styles.options}>
          <span className={styles.optionsItem}>{getYear(releaseDate)}</span>
          <span className={styles.optionsItem}>{getTime(runtime)}</span>
        </div>
        <div className={styles.overview}>{overview}</div>
      </div>
    </section>
  );
};
