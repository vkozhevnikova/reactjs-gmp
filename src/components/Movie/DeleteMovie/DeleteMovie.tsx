import React from 'react';
import { IDeleteMovieProps } from './interfaces';

import { Button } from '../../UI/Button';

import styles from './DeleteMovie.module.scss';

export const DeleteMovie: React.FC<IDeleteMovieProps> = ({ id }) => {
  return (
    <div className={styles.deleteMovie}>
      <h2 className={styles.title}>Delete movie</h2>
      <p>Are you sure you want to delete this movie?</p>
      <div className={styles.buttons}>
        <Button type='button' theme='default'>
          Confirm
        </Button>
      </div>
    </div>
  );
};
