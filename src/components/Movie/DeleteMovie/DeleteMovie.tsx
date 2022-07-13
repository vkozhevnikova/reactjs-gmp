import React from 'react';
import { I18Y, LOCALE } from '../../../core/i18y';
import { IDeleteMovieProps } from './interfaces';

import { Button } from '../../UI/Button';

import styles from './DeleteMovie.module.scss';

export const DeleteMovie: React.FC<IDeleteMovieProps> = ({ id }) => {
  return (
    <div className={styles.deleteMovie}>
      <h2 className={styles.title}>{I18Y[LOCALE].POPUP_TITLE_DELETE_MOVIE}</h2>
      <p>{I18Y[LOCALE].POPUP_TEXT_DELETE_MOVIE}</p>
      <div className={styles.buttons}>
        <Button type='button' theme='default'>
          {I18Y[LOCALE].BUTTON_CONFIRM}
        </Button>
      </div>
    </div>
  );
};
