import React, { useState } from 'react';
import { I18Y, LOCALE } from '../../core/i18y';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';

import styles from './Search.module.scss';

export const Search: React.FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event;

    setValue(currentTarget.value);
  };

  return (
    <div className={styles.search}>
      <div className={styles.title}>{I18Y[LOCALE].SEARCH_TITLE}</div>

      <form className={styles.form}>
        <Input
          type='text'
          id='search'
          name='search'
          value={value}
          placeholder={I18Y[LOCALE].SEARCH_PLACEHOLDER}
          onChange={handleChange}
          className={styles.input}
        />

        <Button type='submit' theme='default' className={styles.button}>
          {I18Y[LOCALE].SEARCH_BUTTON}
        </Button>
      </form>
    </div>
  );
};
