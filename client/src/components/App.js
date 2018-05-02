import React, { Component } from "react";
//import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
import Header from "./Header";
import Gallery from "./Gallery";
import NewGallery from "./NewGallery";
import Dashboard from "./Dashboard";
import InviteNew from "./invites/InviteNew";
import CloudGallery from "./CloudGallery.js";
import ChatBox from "./chat/ChatBox";
import Planner from "./planner/Planner";
//import InviteList from "./invites/InviteList.js";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/invites" component={Dashboard} />
            <Route path="/invites/new" component={InviteNew} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/newgallery" component={NewGallery} />
            <Route exact path="/cloudgallery" component={CloudGallery} />
            <Route exact path="/chat" component={ChatBox} />
            <Route exact path="/planner" component={Planner} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
