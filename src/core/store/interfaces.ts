import { IMovieState } from './movie/interfaces';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IInitialState extends IMovieState {}

export interface IAction {
  type: string;
  payload: any;
}

export type TDispatch = (action: IAction, state: IInitialState) => void;

export interface IContextProviderProps {
  children: React.ReactNode;
}
