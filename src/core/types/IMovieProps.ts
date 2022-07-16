export interface IMovieProps {
  id: string;
  slug: string;
  url: string;
  title: string;
  preview: string;
  genre: string[];
  releaseDate: string | Date;
  runtime: number;
  overview: string;
  rating: number;
}
