import * as React from 'react';
import movies from '../../data/movies.json';
import genres from '../../data/genre.json';
import genreForFilter from '../../data/genreForFilter.json';

import { ErrorBoundary } from '../../components/ErrorBoundary';
import { Layout } from '../../components/Layout';
import { MovieList } from '../../components/MovieList';
import { FilterByTags } from '../../components/FilterByTags';

import styles from './MainPage.module.scss';

const MainPage = () => {
  const optionsForFilter = genreForFilter.reduce((acc, genre) => {
    return {
      ...acc,
      [genre]: genres[genre],
    };
  }, {});

  return (
    <Layout>
      <div className={styles.filterPanel}>
        <FilterByTags options={optionsForFilter} />
      </div>

      <ErrorBoundary>
        <MovieList movies={movies} />
      </ErrorBoundary>
    </Layout>
  );
};

export default MainPage;
