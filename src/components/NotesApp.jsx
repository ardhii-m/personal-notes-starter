import React from "react";
import NoteInput from "./form/NoteInput";
import NotesList from "./notes/NotesList";
import { getInitialData } from "../utils";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }
  }

  render() {
    return (
      <div className="note-app">
        <h1 className="note-app__header">Notes App</h1>

        <div className="note-app__body">
          <h2>Create A Note</h2>
          <NoteInput />
  
          <h2>Notes List</h2>
          <NotesList notes={this.state.notes}/>
        </div>
      </div>
    );
  }
}

export default NotesApp;