import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';

class LandingPage extends Component {
  handleLogin() {
    const result = this.props.login('example2@example.com', 'asdfASDF1234_');
    console.log('result', result);

    result.then((result) => {
      if (!result.error) {
        this.props.push('/');
      }
    });
  }

  render() {
    return [
      <Container>
        <h2>Login</h2>
        <Button onClick={this.handleLogin.bind(this)}>Login</Button>
      </Container>
    ];
  }
}

export default LandingPage;
