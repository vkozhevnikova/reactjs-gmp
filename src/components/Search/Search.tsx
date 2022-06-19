import React, { ReactEventHandler, useState } from 'react';
import { Button } from '../Button';
import { InputField } from '../InputField';

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
        <InputField
          type='text'
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
