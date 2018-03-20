import { createActionTypes } from "zeal-redux-utils";

export const ActionTypes = createActionTypes("<%= componentName %>", [
  "<%= COMPONENT_NAME %>_FIND_REQUEST",
  "<%= COMPONENT_NAME %>_FIND_SUCCESS",
  "<%= COMPONENT_NAME %>_FIND_FAILURE"
]);
