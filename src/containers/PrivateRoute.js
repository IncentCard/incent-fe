import React from 'react';
import {
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, accessToken, ...rest }) => {
  console.log("Render route", Component, accessToken);

  return (
    <Route
      {...rest}
      render={props =>{
        console.log("Render contents", Component, accessToken)
        return accessToken ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )}
      }
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    accessToken: state.marqeta.login.access_token,
    ...state.router,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
