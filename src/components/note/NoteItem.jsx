import React from "react";
import NoteItemBody from "./NoteItemBody";
import PropTypes from "prop-types";

function NoteItem({ id, title, body, createdAt }) {
  return (
    <article className="note-item">
      <NoteItemBody id={id} title={title} body={body} createdAt={createdAt} />
    </article>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
