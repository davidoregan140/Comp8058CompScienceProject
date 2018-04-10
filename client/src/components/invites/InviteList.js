import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInvites } from "../../actions";

class InviteList extends Component {
  componentDidMount() {
    this.props.fetchInvites();
  }
  renderInvites() {
    return this.props.invites.reverse().map(invite => {
      return (
        <div className="card darken-1" key={invite._id}>
          <div className="card-content">
            <span className="card-title">{invite.title}</span>
            <p>{invite.body}</p>
            <p className="right">
              Sent On: {new Date(invite.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {invite.yes}</a>
            <a>No: {invite.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderInvites()}</div>;
  }
}

function mapStateToProps({ invites }) {
  return { invites };
}

export default connect(mapStateToProps, { fetchInvites })(InviteList);
