import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteButton from "./NoteButton";

function NoteItem({ id, title, body, createdAt, archived, onArchive, onDelete }) {
  return(
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <NoteButton id={id} isArchived={archived} onArchive={onArchive} onDelete={onDelete} />
    </div>
  );
}

export default NoteItem;