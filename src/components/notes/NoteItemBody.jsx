import React from "react";
import NoteButton from "./NoteButton";

function NoteItemBody({ title, body }) {
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      {/* <p className="note-item__date">{date}</p> */}
      <p className="note-item__body">{body}</p>
      <NoteButton />
    </div>
  );
}

export default NoteItemBody;