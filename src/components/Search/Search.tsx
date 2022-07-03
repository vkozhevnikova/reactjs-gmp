import React, { useState } from 'react';
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
      <div className={styles.title}>Find your movie</div>

      <form className={styles.form}>
        <Input
          type='text'
          id='search'
          name='search'
          value={value}
          placeholder='What do you want to watch?'
          onChange={handleChange}
          className={styles.input}
        />

        <Button type='submit' theme='default' className={styles.button}>
          Search
        </Button>
      </form>
    </div>
  );
};
