import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { pingMarqeta, getBalances } from 'actions/marqeta';
import DashboardPageComponent from 'components/DashboardPage';
import LoadingWrapper from 'components/common/LoadingWrapper';

class DashboardPageContainer extends Component {
  loadData() {
    this.props.getBalances(this.props.currentUser.token);
  }

  componentWillMount() {
    this.loadData();
  }

  render() {
    return (
      <LoadingWrapper loading={!this.props.balances.loaded}>
        <DashboardPageComponent { ...this.props }/>
      </LoadingWrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.marqeta.login.user,
    balances: state.marqeta.balances,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    pingMarqeta,
    getBalances,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPageContainer);
