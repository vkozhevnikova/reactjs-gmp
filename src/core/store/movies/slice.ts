import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMoviesState } from './interfaces';

const initialState: IMoviesState = {
  movieDetails: null,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovieDetails: (state, action: PayloadAction<string | number>) => {
      state.movieDetails = action.payload
    }
  },
});

export const moviesActions = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
