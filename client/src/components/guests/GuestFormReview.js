import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import GuestFormFields from "./GuestFormFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const GuestFormReview = ({ onCancel, formValues, submitGuest, history }) => {
  const reviewFields = _.map(GuestFormFields, ({ name, label, type }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm the information before clicking send</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitGuest(formValues, history)}
        className="green btn-flat right white-text"
      >
        Save guest
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.guestForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(GuestFormReview));
