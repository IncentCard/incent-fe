import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { incrementCounter } from 'actions/counter';
import { pingMarqeta, getUser, pingThenGetUser } from 'actions/marqeta';
import LandingPageComponent from 'components/LandingPage';

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter.counter,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    incrementCounter,
    pingMarqeta,
    getUser,
    pingThenGetUser,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPageComponent);
