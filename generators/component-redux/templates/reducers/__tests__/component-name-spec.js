import { findSuccess, findFailure, findRequest } from "../<%= componentName %>";

test("findFailure", () => {
  const state = { foo: "bar", <%= componentName %>: {} };

  expect(findFailure(state)).toEqual({
    ...state,
    error: true,
    loading: false,
    <%= componentName %>: null
  });
});

test("findRequest", () => {
  const state = { foo: "bar" };
  const action = { payload: {} };

  expect(findRequest(state, action)).toEqual({
    ...state,
    error: false,
    loading: true
  });
});

test("findSuccess", () => {
  const state = { foo: "bar" };
  const action = {
    payload: {
      <%= componentName %>: {}
    }
  };

  expect(findSuccess(state, action)).toEqual({
    ...state,
    error: false,
    loading: false,
    <%= componentName %>: action.payload.<%= componentName %>
  });
});
