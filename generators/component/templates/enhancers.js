import { compose, setDisplayName } from "recompose";
import { withTranslate } from "lib";

export default compose(
  setDisplayName("<%= ComponentName %>"),
  withTranslate({ namespace: "<%= moduleName %>", component: "<%= componentName %>" })
);
