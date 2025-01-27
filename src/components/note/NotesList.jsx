import React from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../../utils/index";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/localeContext";

function NotesList({ notes }) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <section className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            createdAt={showFormattedDate(note.createdAt)}
            {...note}
          />
        ))
      ) : (
        <p className="notes-list__empty-message">
          {locale === "id" ? "Tidak ada catatan" : "Notes is empty"}
        </p>
      )}
    </section>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotesList;
