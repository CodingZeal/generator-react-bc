import {
  <%= componentName %>FetchSuccess,
  <%= componentName %>FetchFailure,
  <%= componentName %>FetchRequest
} from "../<%= componentName %>";

test("<%= componentName %>FetchFailure", () => {
  const state = { foo: "bar", <%= componentName %>: {} };

  expect(<%= componentName %>FetchFailure(state)).toEqual({
    ...state,
    error: true,
    loading: false,
    <%= componentName %>: null
  });
});

test("<%= componentName %>FetchRequest", () => {
  const state = { foo: "bar" };
  const action = {
    payload: {
      <%= componentName %>: {}
    }
  };

  expect(<%= componentName %>FetchRequest(state, action)).toEqual({
    ...state,
    error: false,
    loading: true,
    <%= componentName %>: action.payload
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
    loading: false,
    <%= componentName %>: action.payload
  });
});
