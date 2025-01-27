import React from "react";
import NotesList from "../components/note/NotesList";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "../utils/network-data";
import HomePageButton from "../components/homepage/HomePageButton";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../contexts/localeContext";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setLoading(true);
      setNotes(data);
      setLoading(false);
    });
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  if (loading) {
    return (
      <section>
        <p>{locale === 'id' ? 'Memuat...' : 'Loading...'}</p>
      </section>
    );
  }

  return (
    <section>
      <h2>{locale === "id" ? "Daftar Catatan Aktif" : "Active Notes List"}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NotesList notes={filteredNotes} />
      <HomePageButton />
    </section>
  );
}

export default HomePage;
