import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from './movies/api';
import { moviesReducer } from './movies/slice';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    movies: moviesReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
