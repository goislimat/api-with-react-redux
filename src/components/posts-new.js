import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from "../actions/index";

class PostsNew extends Component {

  constructor() {
    super();
    this.renderField = this.renderField.bind(this);
  }

  errorMessage(field) {
    const { touched, error } = field.meta;

    return (
      <small className="text-help">
        { touched ? error : '' }
      </small>
    );
  }

  lookForErrors(field) {
    const { touched, error } = field.meta;

    return touched && error ? 'has-danger' : '';
  }

  renderInput(field) {
    return (
      <input
        type="text"
        placeholder={ field.placeholder }
        className="form-control"
        { ...field.input } />
    );
  }

  renderTextArea(field) {
    return (
      <textarea
        type="text"
        placeholder={ field.placeholder }
        className="form-control"
        rows={ field.rows }
        { ...field.input } />
    );
  }

  renderCorrectField(field) {
    switch (field.type) {
      case "textarea":
        return this.renderTextArea(field);
        break;
      default:
        return this.renderInput(field);
    }
  }

  renderField(field) {
    const className = `form-group ${ this.lookForErrors(field) }`;

    return (
      <div className={className}>
        <label>{ field.label }</label>
        { this.renderCorrectField(field) }

        { this.errorMessage(field) }
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <Field
            name="title"
            label="Title"
            placeholder="My Post"
            component={ this.renderField }
          />
          <Field
            name="categories"
            label="Categories"
            placeholder="fun, vacation"
            component={ this.renderField }
          />
          <Field
            name="content"
            label="Content"
            type="textarea"
            rows="10"
            placeholder="My vacation was awesome and blahblahblah yadayada"
            component={ this.renderField }
          />
          <button className="btn btn-primary">
            Submit
          </button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

/**
 * Função auxiliar de validação, deve ser adicionada ao export redux-form ao final do arquivo
 * @param values tem os valores digitados pelo usuário, no caso, values.title, values.categories e
 *        values.content
 * @returns {{}} objeto de erros
 */
function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = "Title is required";
  }
  if(!values.categories) {
    errors.categories = "At least one category is required";
  }
  if(!values.content) {
    errors.content = "Content is required";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(connect(null, { createPost })(PostsNew));