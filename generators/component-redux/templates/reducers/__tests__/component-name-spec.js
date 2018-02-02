import { <%= componentName %>FetchSuccess, <%= componentName %>FetchFailure } from "../<%= componentName %>";

test("<%= componentName %>FetchFailure", () => {
  const state = { foo: "bar", <%= componentName %>: {} };

  expect(<%= componentName %>FetchFailure(state)).toEqual({
    ...state,
    error: true,
    <%= componentName %>: null
  });
});

test("<%= componentName %>FetchSuccess", () => {
  const state = { foo: "bar" };
  const action = {
    payload: {
      <%= componentName %>: {}
    }
  };

  expect(<%= componentName %>FetchSuccess(state, action)).toEqual({
    ...state,
    error: false,
    <%= componentName %>: action.payload
  });
});
