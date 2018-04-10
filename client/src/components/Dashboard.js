import React from "react";
import { Link } from "react-router-dom";
import InviteList from "./invites/InviteList";

const Dashboard = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <InviteList />
      <h1>Wedding Dashboard</h1>
      <p>Here is where we will help you design your dream day</p>

      <div style={{ textAlign: "center" }} className="fixed-action-btn">
        <Link
          to="/invites/new"
          className="btn-large waves-effect waves-light red"
        >
          New Invite
        </Link>
      </div>
    </div>
  );
};
export default Dashboard;
