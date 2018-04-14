import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { incrementCounter } from 'actions/counter';
import { pingMarqeta } from 'actions/marqeta';
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
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPageComponent);
