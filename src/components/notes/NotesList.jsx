import React from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../../utils";

function NotesList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem 
          key={note.id}
          id={note.id}
          onArchive={onArchive}
          onDelete={onDelete}
          createdAt={showFormattedDate(note.createdAt)}
          {...note} 
          />
        ))
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )
      }
    </div>
  );
}

export default NotesList;