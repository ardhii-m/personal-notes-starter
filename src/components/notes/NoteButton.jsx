import React from "react";

function NoteButton({ id, isArchived, onDelete, onArchive }) {
  return (
    <div className="note-item__action">
        {isArchived 
        ? <button className="note-item__archive-button" onClick={() => onArchive(id)}>Unarchive</button> 
        : <button className="note-item__archive-button" onClick={() => onArchive(id)}>Archive</button> 
        }

      <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default NoteButton;