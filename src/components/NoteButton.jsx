import React from "react";
import { BiArchiveIn, BiArchiveOut, BiTrash } from "react-icons/bi";
import PropTypes from "prop-types";

function NoteButton({ id, isArchived, onDelete, onArchive }) {
  return (
    <div className="detail-page__action">
        {isArchived 
        ? <button className="action" onClick={() => onArchive(id)}><BiArchiveOut/></button> 
        : <button className="action" onClick={() => onArchive(id)}><BiArchiveIn /></button> 
        }

      <button className="action" onClick={() => onDelete(id)}><BiTrash /></button>
    </div>
  )
}

export default NoteButton;