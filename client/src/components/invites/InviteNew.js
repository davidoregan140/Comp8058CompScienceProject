// inviteNew shows inviteForm and inviteFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import InviteForm from './InviteForm';
import InviteFormReview from './InviteFormReview';

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
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'inviteForm'
})(InviteNew);
