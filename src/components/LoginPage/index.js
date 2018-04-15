import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { SubmissionError } from 'redux-form'

import LoginForm from './loginForm';

class LandingPage extends Component {
  handleLogin({ email, password }) {
    const result = this.props.login(email, password);
    console.log('result', result);

    return result.then((result) => {
      if (!result.error) {
        this.props.push('/');
      } else {
        throw new SubmissionError({
          password: 'Wrong password',
          _error: 'Login failed!'
        })
      }
    });
  }

  render() {
    return [
      <Container>
        <h2>Login</h2>
        <p>
          Here's a user I made earlier:<br />
          Email: <code>example2@example.com</code><br />
          Password: <code>asdfASDF1234_</code>
        </p>

        <LoginForm onSubmit={ this.handleLogin.bind(this) } />
      </Container>
    ];
  }
}

export default LandingPage;
