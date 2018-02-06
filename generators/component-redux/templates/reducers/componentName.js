export const <%= componentName %>FetchFailure = (state = {}) => ({
  ...state,
  error: true,
  loading: false,
  <%= componentName %>: null
});

export const <%= componentName %>FetchRequest = (state = {}) => ({
  ...state,
  error: false,
  loading: true,
});

export const <%= componentName %>FetchSuccess = (state = {}, <%= componentName %> = {}) => ({
  ...state,
  error: false,
  loading: false,
  <%= componentName %>
});
