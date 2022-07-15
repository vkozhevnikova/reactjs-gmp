import MOVIES from '../../data/movies.json';
import { IMovieProps } from '../../../types/IMovieProps';

export const fetchMovieById = async (id: string): Promise<IMovieProps> => {
  const movie = MOVIES.find(item => item.id === id);

  return Promise.resolve(movie);
};
