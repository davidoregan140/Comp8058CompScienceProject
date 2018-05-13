import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGuests, deleteGuest } from "../../actions";
//import "../invite.css";

// const user = {
//   mainImage:
//     "http://res.cloudinary.com/wedmgmgt/image/upload/c9fps9o9nnr73gsyljcn.jpg"
// };

class GuestList extends Component {
  componentDidMount() {
    this.props.fetchGuests();
  }
  renderGuests() {
    return this.props.guests.reverse().map(guest => {
      return (
        <div className="card darken-1" key={guest._id}>
          <div className="card-content">
            <span className="card-title">Name: {guest.name}</span>

            <p>Email: {guest.email}</p>
            <p className="right">Age Group: {guest.agegroup}</p>
            <p>Invite? {guest.inviteYN}</p>
            <a
              href=""
              onClick={() => this.props.deleteGuest(guest._id)}
              className="right"
            >
              Delete
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderGuests()}</div>;
  }
}

function mapStateToProps({ guests }) {
  return { guests };
}

export default connect(mapStateToProps, { fetchGuests, deleteGuest })(
  GuestList
);
