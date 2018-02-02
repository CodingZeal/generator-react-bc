import { id } from "../index";

test("id returns correct value", () => {
  const state = { <%= componentName %>: { id: true } };

  expect(id(state)).toEqual({ id: state.<%= componentName %>.id });
});
