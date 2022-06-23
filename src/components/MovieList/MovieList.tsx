import * as React from 'react';
import { IMovieListProps } from './interfaces';
import { MovieCard } from '../MovieCard';

import styles from './MovieList.module.scss';

export const MovieList: React.FC<IMovieListProps> = ({ movies }) => {
  return (
    <div className={styles.list}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} className={styles.card} />
      ))}
    </div>
  );
};
