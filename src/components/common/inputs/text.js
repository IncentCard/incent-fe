import React, { Component } from 'react'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

import uniqueId from 'lodash/uniqueId';

function makeId(name) {
  return `form-${name}-${uniqueId()}`;
}

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputId: makeId(props.input.name),
    };
  }

  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <FormFeedback>{meta.error}</FormFeedback>
      )
    }
  }

  render() {
    const {
      input,
      meta,
      label,
      type,
    } = this.props;

    console.log(this.props);
    return (
      <FormGroup>
        <Label for={this.state.inputId}>{label}</Label>
        <Input
          invalid={meta.touched && meta.error}
          id={this.state.inputId}
          type={type}
          disabled={meta.submitting}
          {...input}
        />
        { this.renderError(meta) }
      </FormGroup>
    );
  }
}

export default TextInput;
