import { createActionTypes } from "zeal-redux-utils";

export const ActionTypes = createActionTypes("<%= componentName %>", [
  "<%= COMPONENT_NAME %>_FETCH_SUCCESS",
  "<%= COMPONENT_NAME %>_FETCH_FAILURE"
]);
