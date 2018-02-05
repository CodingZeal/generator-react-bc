export const <%= componentName %>FetchFailure = (state = {}) => ({
  ...state,
  error: true,
  <%= componentName %>: null
});

export const <%= componentName %>FetchSuccess = (state = {}, { payload = {} }) => ({
  ...state,
  error: false,
  <%= componentName %>: payload
});
