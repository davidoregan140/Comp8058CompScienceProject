import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import GuestField from "./GuestField";
//import validateEmails from "../../utils/validateEmails";
import GuestFormFields from "./GuestFormFields";

class GuestForm extends Component {
  renderFields() {
    return _.map(GuestFormFields, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={GuestField}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onGuestSubmit)}>
          {this.renderFields()}
          <Link to="/guests" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  //errors.recipients = validateEmails(values.recipients || "");

  _.each(GuestFormFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "guestForm",
  destroyOnUnmount: false
})(GuestForm);
