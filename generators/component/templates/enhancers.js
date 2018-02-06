import { compose, <% if (withRedux) { %>lifecycle, <% } %>setDisplayName } from "recompose";
<% if (withRedux) { %>import { connect } from "react-redux";
<% } %>
import { <% if (withRedux) { %>withLoading, <% } %>withTranslate } from "lib";
<% if (withRedux) { %>import { <%= componentName %>Fetch } from '../../actions';
import { <%= componentName %>Props } from '../../selectors';

const mapStateToProps = <%= componentName %>Props;
<% } %>
const composed<%= ComponentName %> = compose(
  setDisplayName("<%= ComponentName %>"),<% if (withRedux) { %>
  connect(mapStateToProps, { <%= componentName %>Fetch }),
  lifecycle({
    componentDidMount() {
      this.props.<%= componentName %>Fetch();
    }
  }),
  withLoading,<% } %>
  withTranslate({ namespace: "<%= moduleName %>", component: "<%= componentName %>" })
);

export { composed<%= ComponentName %> as <%= ComponentName %> }
