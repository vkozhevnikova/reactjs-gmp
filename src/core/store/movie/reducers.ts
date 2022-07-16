import actions from './actions';

const handlers = {};

handlers[actions.SET_MOVIE_DETAILS] = (state, action) => ({
  ...state,
  movieDetails: action.payload,
});

export default handlers;
