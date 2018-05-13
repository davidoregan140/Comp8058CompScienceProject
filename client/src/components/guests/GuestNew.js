// inviteNew shows inviteForm and inviteFormReview
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import GuestForm from "./GuestForm";
import GuestFormReview from "./GuestFormReview";

class GuestNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <GuestFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <GuestForm
        onGuestSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "guestForm"
})(GuestNew);
