export const <%= componentName %>FetchFailure = (state = {}) => ({
  ...state,
  error: true,
  loading: false,
  <%= componentName %>: null
});

export const <%= componentName %>FetchRequest = (state = {}) => ({
  ...state,
  loading: true,
});

export const <%= componentName %>FetchSuccess = (state = {}, { <%= componentName %> = {} }) => ({
  ...state,
  error: false,
  loading: false,
  <%= componentName %>
});
