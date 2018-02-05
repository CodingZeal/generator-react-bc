import url from "url";
import { RSAA } from "redux-api-middleware";
import { ActionTypes } from "../constants/actionTypes";

export const <%= componentName %> = ({
  method = "GET",
  protocol = "http",
  hostname = "localhost",
  port = 3030,
  pathname = "/<%= componentNamePlural %>",
  ...data
} = {}) => dispatch => {
  const endpoint = url.format({
    protocol,
    hostname,
    port,
    pathname
  });

  dispatch({
    [RSAA]: {
      endpoint,
      method,
      types: [
        ActionTypes.FETCH_REQUEST,
        ActionTypes.FETCH_SUCCESS,
        ActionTypes.FETCH_FAILURE
      ],
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  });
};
