import React from 'react';
import { MovieForm } from '../MovieForm';

import styles from './AddMovie.module.scss';

export const AddMovie: React.FC = () => {
  return (
    <div className={styles.addMovie}>
      <h2 className={styles.title}>Add movie</h2>
      <MovieForm />
    </div>
  );
};
