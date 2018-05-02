import React, { Component } from "react";
import "./NoteForm.css";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteContent: ""
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeNote = this.writeNote.bind(this);
  }

  // When the user input changes, set the newNoteContent
  // to the value of what's in the input box.
  handleUserInput(e) {
    this.setState({ newNoteContent: e.target.value });
  }

  writeNote() {
    // call a method that sets the noteContent for a note to
    // the value of the input
    this.props.addNote(this.state.newNoteContent);
    // Set newNoteContent back to an empty string.
    this.setState({
      newNoteContent: ""
    });
  }

  render() {
    return (
      <form className="formWrapper">
        <input
          type="text"
          className="noteInput"
          name="content"
          placeholder="Write a new note..."
          defaultValue={this.state.newNoteContent}
          onChange={this.handleUserInput}
        />

        <button className="noteButton" onClick={this.writeNote}>
          Add Note
        </button>
      </form>
    );
  }
}

export default NoteForm;
