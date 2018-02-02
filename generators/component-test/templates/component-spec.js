import React from "react";
import { shallow } from "enzyme";

import { t } from "testHelpers";
import <%= ComponentName %> from "../component";

describe("<<%= ComponentName %> />", () => {
  const defaultProps = { t };

  const render = props => shallow(<<%= ComponentName %> {...defaultProps} {...props} />);
  const wrapper = render();

  test("renders the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
