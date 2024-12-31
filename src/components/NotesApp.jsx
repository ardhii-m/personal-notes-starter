import React from "react";
import NoteInput from "./form/NoteInput";
import NotesList from "./notes/NotesList";
import { getInitialData } from "../utils";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchQuery: '',
    }
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          }
        ]
      }
    });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {...note, archived: !note.archived};
      }
      return note;
    });

    this.setState({ notes });
  }

  render() {
    const activeNotes = this.state.notes.filter((note) => note.archived === false);
    const archivedNotes = this.state.notes.filter((note) => note.archived === true);

    return (
      <div className="note-app">
        <h1 className="note-app__header">Notes App</h1>

        <div className="note-app__body">
          <h2>Create A Note</h2>
          <NoteInput addNote={this.onAddNoteHandler} />

          <h2>Notes List</h2>
          <NotesList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />

          <h2>Archived Notes</h2>
          <NotesList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        </div>
      </div>
    );
  }
}

export default NotesApp;