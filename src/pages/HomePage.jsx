import React from "react";
import NotesList from "../components/NotesList";
import { archiveNote, deleteNote, getActiveNotes } from "../utils/local-data";
import autoBindReact from "auto-bind/react";

class HomePage extends React.Component {
   constructor(props) {
    super(props);
    autoBindReact(this);
    
    this.state = {
      notes: getActiveNotes(),
    }

   }

   onArchiveHandler(id) {
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getActiveNotes(),
      }
    })
   }

   onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getActiveNotes(),
      }
    });
   }

   render() {
    return (
      <section>
        <h2>Daftar Catatan</h2>
        <NotesList 
          notes={this.state.notes} 
          onDelete={this.onDeleteHandler} 
          onArchive={this.onArchiveHandler}
        />
      </section>
    )
   }
}

export default HomePage;