export const findFailure = (state = {}) => ({
  ...state,
  error: true,
  loading: false,
  <%= componentName %>: null
});

export const findRequest = (state = {}) => ({
  ...state,
  error: false,
  loading: true
});

export const findSuccess = (state = {}, { payload }) => ({
  ...state,
  error: false,
  loading: false,
  <%= componentName %>: payload.<%= componentName %>
});
