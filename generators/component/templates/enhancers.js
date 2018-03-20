import { compose, <% if (withRedux) { %>lifecycle, <% } %>setDisplayName } from "recompose";
<% if (withRedux) { %>import { connect } from "react-redux";
<% } %>
import { withTranslate } from "lib/withTranslate";
<% if (withRedux) { %>import { withLoading } from "lib/withLoading";<% } %>
<% if (withRedux) { %>import { find } from "../../actions/<%= componentName %>";
import { <%= componentName %>Props } from "../../selectors";

const mapStateToProps = <%= componentName %>Props;
<% } %>
export const enhance = compose(
  setDisplayName("<%= ComponentName %>"),<% if (withRedux) { %>
  connect(mapStateToProps, { find }),
  lifecycle({
    componentDidMount() {
      this.props.find();
    }
  }),
  withLoading,<% } %>
  withTranslate({ namespace: "<%= moduleName %>", component: "<%= componentName %>" })
);
