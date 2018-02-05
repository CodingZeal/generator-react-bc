import { createReducer } from "zeal-redux-utils";
import { ActionTypes } from "../constants/actionTypes";
import { <%= componentName %>FetchFailure, <%= componentName %>FetchSuccess } from "./<%= componentName %>";

const initialState = {
  <%= componentName %>: null
};

const handlers = {
  [ActionTypes.FAILURE]: <%= componentName %>FetchFailure,
  [ActionTypes.SUCCESS]: <%= componentName %>FetchSuccess
};

export default createReducer(initialState, handlers);
