/***************************************************************************************
 *    Based on/Adapted from
 *    Title: Udemy Tutorials
 *    Author: Grider, S
 *    Date: 2018
 *    Code version: 1.0
 *    Availability: https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/content
 *
 ***************************************************************************************/

import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const InviteFormReview = ({ onCancel, formValues, submitInvite, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
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
        onClick={() => submitInvite(formValues, history)}
        className="green btn-flat right white-text"
      >
        Send invite
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.inviteForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(InviteFormReview));
