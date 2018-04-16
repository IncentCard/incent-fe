import React, { Component } from 'react';

class LoadingWrapper extends Component {
  render() {
    const { loading, children } = this.props;

    if (loading) {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      return children;
    }
  }
}

export default LoadingWrapper;
