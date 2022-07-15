import { IMovieProps } from '../../../types/IMovieProps';

export interface IMovieCardProps {
  movie: IMovieProps;
  className?: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}
