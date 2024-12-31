import React from "react";
import { deleteNote, unarchiveNote, getArchivedNotes } from "../utils/local-data";
import NotesList from "../components/NotesList";
import autoBindReact from "auto-bind/react";

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    autoBindReact(this);

    this.state = {
      notes: getArchivedNotes(),
    }
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      }
    });
   }

  onUnarchiveHandler(id) {
    unarchiveNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      }
    });
  }

  render() {
    return (
      <section>
        <h2>Arsip Catatan</h2>
        <NotesList 
          notes={this.state.notes} 
          onDelete={this.onDeleteHandler} 
          onArchive={this.onUnarchiveHandler}
        />
      </section>
    )
  }
}

export default ArchivePage;