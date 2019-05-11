import React from 'react';
import { Field, reduxForm } from 'redux-form';

class IdeaForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          {error}
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field
          name="title"
          label="Enter Title"
          component={this.renderInput}
        />
        <Field
          name="description"
          label="Enter Description"
          component={this.renderInput}
        />
        <button className="ui button green">
          Create
        </button>
      </form>
    );
  }
}

const validate = ({ title, description, goal }) => {
  const errors = {};

  if (!title) {
    errors.title = 'Please enter a title.'
  }

  if (!description) {
    errors.description = 'Please enter a description.'
  }

  return errors;
};

export default reduxForm({
  form: 'IdeaForm',
  validate
})(IdeaForm);