import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import { map } from 'lodash';

class DashboardPage extends Component {
  renderBalance(data, currency) {
    return (
      <p>
        <strong>Currency:</strong> {currency}<br />
        <strong>Available balance:</strong> {data.available_balance}
      </p>
    )
  }

  render() {
    return [
      <Container>
        <h2>Dashboard</h2>
        { map(this.props.balances.gpa.balances, this.renderBalance) }
      </Container>,
    ];
  }
}

export default DashboardPage;
