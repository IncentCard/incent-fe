import { connect } from 'react-redux';

import { incrementCounter } from 'actions/counter';
import LandingPageComponent from 'components/LandingPage';

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter.counter,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    incrementCounter: () => {
      dispatch(incrementCounter())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPageComponent);
