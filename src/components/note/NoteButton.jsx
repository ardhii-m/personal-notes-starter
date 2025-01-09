import React from "react";
import { BiArchiveIn, BiArchiveOut, BiTrash } from "react-icons/bi";
import PropTypes from "prop-types";

function NoteButton({ id, isArchived, onDelete, onArchive, onUnarchive }) {
  return (
    <div className="detail-page__action">
      {isArchived ? (
        <button className="action" onClick={() => onUnarchive(id)}>
          <BiArchiveOut />
        </button>
      ) : (
        <button className="action" onClick={() => onArchive(id)}>
          <BiArchiveIn />
        </button>
      )}

      <button className="action" onClick={() => onDelete(id)}>
        <BiTrash />
      </button>
    </div>
  );
}

NoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default NoteButton;
