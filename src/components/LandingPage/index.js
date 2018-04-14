import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

import vincent from 'assets/vincent.png';
import './index.css';

class LandingPage extends Component {
  render() {
    return [
      <Jumbotron>
        <Container>
          <img src={vincent} className="App-logo" alt="logo" />
          <h1>Welcome to vIncent Card</h1>
        </Container>
      </Jumbotron>,
      <Container>
        <h2>Redux Counter</h2>
        <p>The current counter value: {this.props.counter}</p>
        <Button onClick={this.props.incrementCounter}>Increment</Button>
      </Container>,
      <Container>
        <h2>Marqeta</h2>
        <Button onClick={this.props.pingMarqeta}>Ping</Button>
      </Container>
    ];
  }
}

export default LandingPage;
