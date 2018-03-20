import td from "testdouble";

import { api } from "lib/api";
import { ActionTypes } from "../../constants/actionTypes";
import { find } from "../<%= componentName %>";

beforeEach(() => {
  api.get = td.func();
});

afterEach(td.reset);

describe("find", () => {
  test("calls api.get with the correct object", () => {
    const id = 42;
    find(id);

    td.verify(
      api.get({
        pathname: `/<%= componentNamePlural %>/${id}`,
        types: {
          success: ActionTypes.<%= COMPONENT_NAME %>_FIND_SUCCESS,
          failure: ActionTypes.<%= COMPONENT_NAME %>_FIND_FAILURE
        }
      })
    );
  });
});
