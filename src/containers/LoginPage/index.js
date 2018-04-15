import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import { login } from 'actions/marqeta';
import LoginPageComponent from 'components/LoginPage';

const mapStateToProps = (state, ownProps) => {
  return {
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    login,
    push,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPageComponent);
