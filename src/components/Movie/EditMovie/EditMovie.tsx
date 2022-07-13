import React, { useState, useEffect } from 'react';
import { I18Y, LOCALE } from '../../../core/i18y';
import { IEditMovieProps } from './interfaces';
import { IMovieProps } from '../../../types/IMovieProps';
import { MovieForm } from '../MovieForm';

import movies from '../../../data/movies.json';

import styles from './EditMovie.module.scss';

export const EditMovie: React.FC<IEditMovieProps> = ({ movieId }) => {
  const [movieData, setMovieData] = useState<IMovieProps>(null);

  useEffect(() => {
    const movie = movies.find(item => item.id === movieId);
    setMovieData(movie);
  }, [movieId]);

  return (
    <div className={styles.editMovie}>
      <h2 className={styles.title}>{I18Y[LOCALE].POPUP_TITLE_EDIT_MOVIE}</h2>
      <MovieForm movie={movieData} />
    </div>
  );
};
