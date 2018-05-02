import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInvites } from "../../actions";
import "../invite.css";

const user = {
  mainImage:
    "http://res.cloudinary.com/wedmgmgt/image/upload/c9fps9o9nnr73gsyljcn.jpg"
};

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
            <img className="card-img-top" src={user.mainImage} alt="" />
            <p className="couple">The Wedding of {invite.couple}</p>
            <a href="http://www.google.ie/havenhotel">{invite.venue}</a>
            <p>On: {new Date(invite.date).toLocaleDateString()}</p>
            <p>{invite.body}</p>
            <p>{invite.lastResponded}</p>
            <p className="right">
              Sent On: {new Date(invite.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Attending: {invite.yes}</a>
            <a>Not Attending: {invite.no}</a>
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
