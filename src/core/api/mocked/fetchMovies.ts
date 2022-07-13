import MOVIES from '../../data/movies.json';
import { IMovieProps } from '../../../types/IMovieProps';

export const fetchMovies = async (): Promise<IMovieProps[]> => {
  return Promise.resolve(MOVIES);
};