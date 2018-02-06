import { createReducer } from "zeal-redux-utils";
import { ActionTypes } from "../constants/actionTypes";
import {
  <%= componentName %>FetchFailure,
  <%= componentName %>FetchRquest,
  <%= componentName %>FetchSuccess
} from "./<%= componentName %>";

const initialState = {
  error: false,
  loading: true,
  <%= componentName %>: null
};

const handlers = {
  [ActionTypes.FETCH_FAILURE]: <%= componentName %>FetchFailure,
  [ActionTypes.FETCH_REQUEST]: <%= componentName %>FetchRequest,
  [ActionTypes.FETCH_SUCCESS]: <%= componentName %>FetchSuccess
};

export default createReducer(initialState, handlers);
