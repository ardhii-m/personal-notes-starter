import React from "react";
import { showFormattedDate } from "../../utils/index";
import NoteButton from "./NoteButton";
import parser from "html-react-parser";
import PropTypes from "prop-types";

function NoteDetail({
  id,
  title,
  createdAt,
  body,
  archived,
  onUnarchive,
  onArchive,
  onDelete,
}) {
  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{parser(body)}</div>
      <NoteButton
        id={id}
        isArchived={archived}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
        onDelete={onDelete}
      />
    </section>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;
