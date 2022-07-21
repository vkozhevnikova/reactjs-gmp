export const reducerFactory = (initialState, handlers) => {
  // eslint-disable-next-line @typescript-eslint/default-param-last, func-names
  return function (state = initialState, action) {
    const handler = handlers[action.type];

    if (handler) {
      return handler(state, action);
    }

    return state;
  };
};
