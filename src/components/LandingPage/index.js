import React, { Component } from 'react';

import logo from 'assets/logo.svg';
import './index.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.props.counter}</p>
        <button onClick={this.props.incrementCounter}>INC</button>
      </div>
    );
  }
}

export default LandingPage;
