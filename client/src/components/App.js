import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from "./Landing";
import Header from "./Header";
import Gallery from "./Gallery";
import NewGallery from "./NewGallery";
import Dashboard from "./Dashboard";
import InviteNew from "./invites/InviteNew";




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
              <Route exact path="/" component = {Landing} />
              <Route exact path="/invites" component = {Dashboard} />
              <Route path="/invites/new" component = {InviteNew} />
              <Route exact path="/gallery" component = {Gallery} />
              <Route exact path="/newgallery" component = {NewGallery} />

            </div>
          </BrowserRouter>
        </div>
      );
  }
};

export default connect(null, actions)(App);
