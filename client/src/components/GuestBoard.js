import React from "react";
import { Link } from "react-router-dom";
import GuestList from "./guests/GuestList";

const GuestBoard = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="title">Guest List</h1>
      <p className="subtitle">We can help you plan who to invite</p>

      <GuestList />
      <div style={{ textAlign: "center" }} className="fixed-action-btn">
        <Link
          to="/guests/new"
          className="btn-large waves-effect waves-light red"
        >
          New Guest
        </Link>
      </div>
    </div>
  );
};
export default GuestBoard;
