import { ActionTypes } from "../constants/actionTypes";
import { api } from "lib/api";

export const find = id =>
  api.get({
    pathname: `/<%= componentNamePlural %>/${id}`,
    types: {
      success: ActionTypes.<%= COMPONENT_NAME %>_FIND_SUCCESS,
      failure: ActionTypes.<%= COMPONENT_NAME %>_FIND_FAILURE
    }
  });
