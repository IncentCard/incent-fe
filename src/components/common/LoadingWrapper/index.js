import React, { Component } from 'react';

import './index.css';

class LoadingWrapper extends Component {
  render() {
    const { loading, children } = this.props;

    if (loading) {
      return (
        <div className="loading-wrapper-container">
          <div className="loading-wrapper-spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>
        </div>
      )
    } else {
      return children;
    }
  }
}

export default LoadingWrapper;
