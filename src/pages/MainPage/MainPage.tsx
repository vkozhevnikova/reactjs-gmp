import React, { useState } from 'react';
import { I18Y, LOCALE } from '../../core/i18y';
import { GENRES } from '../../core/constants';

import { ErrorBoundary } from '../../components/UI/ErrorBoundary';
import { Layout } from '../../components/Layout';
import { MovieList } from '../../components/Movie/MovieList';
import { FilterByTags } from '../../components/FilterByTags';
import { Sort } from '../../components/Sort';

import styles from './MainPage.module.scss';

const MainPage = () => {
  const [sorting, setSorting] = useState('releaseDate');

  const genreForFilter = ['doc', 'comedy', 'horror', 'criminal'];
  const optionsForFilter = genreForFilter.reduce((acc, genre) => {
    return {
      ...acc,
      [genre]: GENRES[genre],
    };
  }, {});

  const optionsForSort = {
    releaseDate: I18Y[LOCALE].RELEASE_DATE,
    rating: I18Y[LOCALE].RATING,
  };

  return (
    <Layout>
      <div className={styles.filterPanel}>
        <FilterByTags options={optionsForFilter} />
        <Sort
          caption={I18Y[LOCALE].SORT_BY_CAPTION}
          id='sorting-movies'
          name='sorting-movies'
          value={sorting}
          options={optionsForSort}
          onChange={setSorting}
          className={styles.sort}
        />
      </div>

      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
    </Layout>
  );
};

export default MainPage;
