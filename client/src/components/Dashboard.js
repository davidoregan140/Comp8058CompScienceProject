import React from "react";
import { Link } from "react-router-dom";
import InviteList from "./invites/InviteList";

const Dashboard = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="title">Wedding Dashboard</h1>
      <p className="subtitle">
        Here is where we will help you design your dream day
      </p>

      <InviteList />
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
