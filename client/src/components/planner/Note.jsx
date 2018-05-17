/***************************************************************************************
 *    Based on/Adapted from
 *    Title: React with Firebase Notes / To-Do App Tutorial & Firebase documentation
 *    Author: Doyle, Wes
 *    Date: 2018
 *    Code version: 1.0
 *    Sources: https://www.youtube.com/watch?v=-RtJroTMDf4
 *              https://firebase.google.com/docs/web/setup
 *
 ***************************************************************************************/

import React, { Component } from "react";
import "./Note.css";
import PropTypes from "prop-types";

class Note extends Component {
  constructor(props) {
    super(props);
    this.noteContent = props.noteContent;

    this.noteId = props.noteId;
    this.handleRemoveNote = this.handleRemoveNote.bind(this);
  }

  handleRemoveNote(id) {
    this.props.removeNote(id);
  }

  render() {
    return (
      <div className="note fade-in">
        <span
          className="closebtn"
          onClick={() => this.handleRemoveNote(this.noteId)}
        >
          &times;
        </span>
        <p className="noteContent">{this.noteContent}</p>
      </div>
    );
  }
}

Note.propTypes = {
  noteContent: PropTypes.string
};

export default Note;
