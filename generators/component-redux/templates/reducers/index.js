import { createReducer } from "zeal-redux-utils";
import { ActionTypes } from "../constants/actionTypes";
import { <%= componentName %>FetchFailure, <%= componentName %>FetchSuccess } from "./<%= componentName %>";

const initialState = {
  <%= componentName %>: null
};

const handlers = {
  [ActionTypes.<%= COMPONENT_NAME %>_FAILURE]: <%= componentName %>FetchFailure,
  [ActionTypes.<%= COMPONENT_NAME %>_SUCCESS]: <%= componentName %>FetchSuccess
};

export default createReducer(initialState, handlers);
