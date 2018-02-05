import { createReducer } from "zeal-redux-utils";
import { ActionTypes } from "../constants/actionTypes";
import {
  <%= componentName %>FetchFailure,
  <%= componentName %>FetchRquest,
  <%= componentName %>FetchSuccess
} from "./<%= componentName %>";

const initialState = {
  <%= componentName %>: null
};

const handlers = {
  [ActionTypes.FAILURE]: <%= componentName %>FetchFailure,
  [ActionTypes.REQUEST]: <%= componentName %>FetchRequest,
  [ActionTypes.SUCCESS]: <%= componentName %>FetchSuccess
};

export default createReducer(initialState, handlers);
