import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Log in with Google</a>
          </li>
        );
      default:
        return (
          <div>
            <li>
              <a href="/api/logout">Log Out</a>
            </li>
            <li>
              <a href="/chat">Chats</a>
            </li>
            <li>
              <Link to={this.props.auth ? "/invites" : "/"}>Invites</Link>
            </li>
            <li>
              <Link to={this.props.auth ? "/guests" : "/"}>Guests</Link>
            </li>
            <li>
              <Link to={this.props.auth ? "/cloudgallery" : "/"}>Gallery</Link>
            </li>
            <li>
              <Link to={this.props.auth ? "/planner" : "/"}>Planner</Link>
            </li>
          </div>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={(this.props.auth, "/")} className="left brand-logo">
            Weddr
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>{this.renderContent()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
