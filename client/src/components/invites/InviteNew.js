/***************************************************************************************
 *    Based on/Adapted from
 *    Title: Udemy Tutorials
 *    Author: Grider, S
 *    Date: 2018
 *    Code version: 1.0
 *    Availability: https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/content
 *
 ***************************************************************************************/

// inviteNew shows inviteForm and inviteFormReview
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import InviteForm from "./InviteForm";
import InviteFormReview from "./InviteFormReview";

class InviteNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <InviteFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <InviteForm
        onInviteSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "inviteForm"
})(InviteNew);
