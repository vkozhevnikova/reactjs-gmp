import actionTypes from './actionTypes';

const handlers = {};

handlers[actionTypes.SET_MOVIE_DETAILS] = (state, action) => ({
  ...state,
  movieDetails: action.payload,
});

export default handlers;
