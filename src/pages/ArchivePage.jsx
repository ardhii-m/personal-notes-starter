import React from "react";
import { getArchivedNotes } from "../utils/network-data";
import NotesList from "../components/note/NotesList";
import autoBindReact from "auto-bind/react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/localeContext";

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || ''
  });
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });

  return (
    <section>
      <h2>{locale === 'id' ? 'Arsip Catatan' : 'Archived Notes'}</h2>
      <SearchBar
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
      />
      <NotesList notes={filteredNotes} />
    </section>
  );
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
}

export default ArchivePage;
