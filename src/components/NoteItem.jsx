import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteButton from "./NoteButton";

function NoteItem({ id, title, body, createdAt, archived, onArchive, onDelete }) {
  return(
    <article className="note-item">
      <NoteItemBody id={id} title={title} body={body} createdAt={createdAt} />
      <NoteButton id={id} isArchived={archived} onArchive={onArchive} onDelete={onDelete} />
    </article>
  );
}

export default NoteItem;