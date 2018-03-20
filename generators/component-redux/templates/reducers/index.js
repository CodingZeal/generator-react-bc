import { createReducer } from "zeal-redux-utils";
import { ActionTypes } from "../constants/actionTypes";
import * as <%= componentName %> from "./<%= componentName %>";

const initialState = {
  error: false,
  loading: true,
  <%= componentName %>: null
};

const handlers = {
  [ActionTypes.<%= COMPONENT_NAME %>_FIND_FAILURE]: <%= componentName %>.findFailure,
  [ActionTypes.<%= COMPONENT_NAME %>_FIND_REQUEST]: <%= componentName %>.findRequest,
  [ActionTypes.<%= COMPONENT_NAME %>_FIND_SUCCESS]: <%= componentName %>.findSuccess
};

export default createReducer(initialState, handlers);
