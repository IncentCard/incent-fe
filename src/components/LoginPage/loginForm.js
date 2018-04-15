import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Button, Form } from 'reactstrap';

import TextInput from 'components/common/inputs/text';
import { emailValidator } from 'utils/fieldValidation';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Field name="email" component={TextInput} type="email" label="Email" validate={emailValidator} />
        <Field name="password" component={TextInput} type="password" label="Password" />

        <Button type="submit">Login</Button>
      </Form>
    )
  }
}

const ReduxLoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default ReduxLoginForm
