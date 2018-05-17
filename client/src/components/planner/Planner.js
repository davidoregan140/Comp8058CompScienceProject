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
import Note from "./Note";
import NoteForm from "./NoteForm";
import { DB_CONFIG } from "../Config/DBConfig";
import firebase from "firebase/app";
import "firebase/database";
import "./Planner.css";

class Planner extends Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app
      .database()
      .ref()
      .child("notes");

    this.state = {
      notes: []
    };
  }

  componentWillMount() {
    const previousNotes = this.state.notes;

    // DataSnapshot
    this.database.on("child_added", snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
        noteUrgency: snap.val().noteUrgency
      });

      this.setState({
        notes: previousNotes
      });
    });

    this.database.on("child_removed", snap => {
      for (var i = 0; i < previousNotes.length; i++) {
        if (previousNotes[i].id === snap.key) {
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes
      });
    });
  }

  addNote(note) {
    this.database.push().set({ noteContent: note });
  }

  removeNote(noteId) {
    console.log("from the parent: " + noteId);
    this.database.child(noteId).remove();
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">Wedding Planner Tool</div>
        </div>
        <div className="notesBody">
          {this.state.notes.map(note => {
            return (
              <Note
                noteContent={note.noteContent}
                noteUrgency={note.noteUrgency}
                noteId={note.id}
                key={note.id}
                removeNote={this.removeNote}
              />
            );
          })}
        </div>
        <div className="notesFooter">
          <NoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }
}

export default Planner;
