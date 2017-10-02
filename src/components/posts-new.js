import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderInput(field) {
    return (
      <div className="form-group">
        <label>{ field.label }</label>
        <input
          type="text"
          placeholder={ field.placeholder }
          className="form-control"
          { ...field.input } />
      </div>
    );
  }

  renderTextArea(field) {
    return (
      <div className="form-group">
        <label>{ field.label }</label>
        <textarea
          type="text"
          placeholder={ field.placeholder }
          className="form-control"
          rows={ field.rows }
          { ...field.input } >
        </textarea>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          <Field
            name="title"
            label="Title"
            placeholder="My Post"
            component={ this.renderInput }
          />
          <Field
            name="categories"
            label="Categories"
            placeholder="fun, vacation"
            component={ this.renderInput }
          />
          <Field
            name="content"
            rows="10"
            label="Content"
            placeholder="My vacation was awsome and blahblahblah yadayada"
            component={ this.renderTextArea }
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostNewForm'
})(PostsNew);