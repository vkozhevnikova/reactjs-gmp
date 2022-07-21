import React, { createContext, useReducer, useContext } from 'react';
import { reducerFactory } from '../utils/reducerFactory';
import { IContextProviderProps, IInitialState } from './interfaces';

import MOVIE from './movie';

export const GlobalContext = createContext({ state: null, dispatch: null });

const initialState: IInitialState = {
  ...MOVIE.state,
};

export const actionTypes = {
  ...MOVIE.actionTypes,
};

const handlers = {
  ...MOVIE.handlers,
};

export const ContextProvider: React.FC<IContextProviderProps> = ({ children }) => {
  const reducer = reducerFactory(initialState, handlers);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
