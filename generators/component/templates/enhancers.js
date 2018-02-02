import { compose, setDisplayName } from "recompose";
import { withTranslate } from "lib";

const composed<%= ComponentName %> = compose(
  setDisplayName("<%= ComponentName %>"),
  withTranslate({ namespace: "<%= moduleName %>", component: "<%= componentName %>" })
);

export { composed<%= ComponentName %> as <%= ComponentName %> }
