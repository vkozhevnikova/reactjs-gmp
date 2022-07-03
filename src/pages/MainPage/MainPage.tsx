import * as React from 'react';
import movies from '../../data/movies.json';
import genres from '../../data/genre.json';
import genreForFilter from '../../data/genreForFilter.json';

import { ErrorBoundary } from '../../components/UI/ErrorBoundary';
import { Layout } from '../../components/Layout';
import { MovieList } from '../../components/Movie/MovieList';
import { FilterByTags } from '../../components/FilterByTags';
import { Sort } from '../../components/Sort';

import styles from './MainPage.module.scss';

const MainPage = () => {
  const optionsForFilter = genreForFilter.reduce((acc, genre) => {
    return {
      ...acc,
      [genre]: genres[genre],
    };
  }, {});

  const optionsForSort = {
    releaseDate: 'Release date',
    rating: 'Rating',
  };

  return (
    <Layout>
      <div className={styles.filterPanel}>
        <FilterByTags options={optionsForFilter} />
        <Sort
          caption='Sort by'
          id='sorting-movies'
          name='sorting-movies'
          value=''
          options={optionsForSort}
          onChange={() => {}}
          className={styles.sort}
        />
      </div>

      <ErrorBoundary>
        <MovieList movies={movies} />
      </ErrorBoundary>
    </Layout>
  );
};

export default MainPage;
