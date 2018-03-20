import { <%= componentName %>Props } from "../index";

test("<%= componentName %>Props returns correct values", () => {
  const state = {
    <%= moduleName %>: { <%= componentName %>: { id: true } },
    error: true,
    loading: true
  };

  expect(<%= componentName %>Props(state)).toEqual(state.<%= moduleName %>);
});
