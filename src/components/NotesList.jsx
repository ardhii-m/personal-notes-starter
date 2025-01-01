import React from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../utils/index";
import PropTypes from "prop-types";

function NotesList({ notes }) {
  return (
    <section className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem 
          key={note.id}
          id={note.id}
          createdAt={showFormattedDate(note.createdAt)}
          {...note} 
          />
        ))
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )
      }
    </section>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NotesList;