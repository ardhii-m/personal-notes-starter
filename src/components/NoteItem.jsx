import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteButton from "./NoteButton";

function NoteItem({ id, title, body, createdAt }) {
  return(
    <article className="note-item">
      <NoteItemBody id={id} title={title} body={body} createdAt={createdAt} />
    </article>
  );
}

export default NoteItem;