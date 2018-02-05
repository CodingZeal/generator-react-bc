import { createActionTypes } from "zeal-redux-utils";

export const ActionTypes = createActionTypes("<%= componentName %>", [
  "FETCH_REQUEST",
  "FETCH_SUCCESS",
  "FETCH_FAILURE"
]);
