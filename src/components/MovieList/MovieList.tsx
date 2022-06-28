import * as React from 'react';
import { IMovieListProps } from './interfaces';
import { IMovieProps } from '../../types/IMovieProps';
import { MovieCard } from '../MovieCard';

import styles from './MovieList.module.scss';

export const MovieList: React.FC<IMovieListProps> = ({ movies }) => {
  const renderCard = (movie: IMovieProps) => {
    return <MovieCard key={movie.id} movie={movie} className={styles.card} />;
  };
  const renderList = (items: IMovieProps[]) => items.map(renderCard);

  return <div className={styles.list}>{renderList(movies)}</div>;
};
