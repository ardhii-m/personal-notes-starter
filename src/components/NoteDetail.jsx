import React from "react";
import { showFormattedDate } from "../utils/index";
import NoteButton from "./NoteButton";
import parser from 'html-react-parser';
import PropTypes from "prop-types";

function NoteDetail({ id, title, createdAt, body, archived, onArchive, onDelete }) {
  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">
        {parser(body)}
      </div>
      <NoteButton id={id} isArchived={archived} onArchive={onArchive} onDelete={onDelete} />
    </section>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  
}

export default NoteDetail;