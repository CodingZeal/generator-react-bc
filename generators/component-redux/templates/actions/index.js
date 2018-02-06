import url from "url";
import { RSAA } from "redux-api-middleware";
import { ActionTypes } from "../constants/actionTypes";
import { auth } from "lib";

export const <%= ComponentName %>Fetch = () => dispatch => {
  const endpoint = url.format({
    protocol: "https",
    hostname: "localhost",
    port: 3030,
    pathname: "/<%= componentNamePlural %>"
  });

  dispatch({
    [RSAA]: {
      endpoint,
      method: "GET",
      types: [
        ActionTypes.FETCH_REQUEST,
        ActionTypes.FETCH_SUCCESS,
        ActionTypes.FETCH_FAILURE
      ],
      headers: {
        "Content-Type": "application/json",
        "Authentication": auth.token
      }
    }
  });
};
