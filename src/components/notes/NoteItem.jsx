import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteButton from "./NoteButton";

function NoteItem({ id, title, body }) {
  return(
    <div className="note-item">
      <NoteItemBody title={title} body={body} />
      {/* <NoteButton /> */}
    </div>
  );
}

export default NoteItem;