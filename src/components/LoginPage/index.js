import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { SubmissionError } from 'redux-form'

import LoginForm from './loginForm';

class LandingPage extends Component {
  handleLogin({ email, password }) {
    const result = this.props.login(email, password);

    return result.then((result) => {
      if (!result.error) {
        this.props.push('/dashboard');
      } else {
        // TODO: Actually check error code
        throw new SubmissionError({
          password: 'Wrong password',
          _error: 'Login failed!'
        })
      }
    });
  }

  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col sm={{ size: 8, offset: 2 }}>
            <Card>
              <CardBody>
                <h2>Login</h2>
                <p>
                  Here's a user I made earlier:<br />
                  Email: <code>example2@example.com</code><br />
                  Password: <code>asdfASDF1234_</code>
                </p>

                <LoginForm onSubmit={ this.handleLogin.bind(this) } />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LandingPage;
