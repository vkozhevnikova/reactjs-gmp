import { IMovieProps } from '../../types/IMovieProps';

export interface IMoviesResponse {
  data: IMovieProps[];
  total: number;
  offset: number;
  limit: number;
}

export interface IMoviesState {
  movieDetails: string | number;
}