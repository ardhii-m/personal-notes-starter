import React from "react";
import NotesList from "../components/note/NotesList";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "../utils/network-data";
import HomePageButton from "../components/homepage/HomePageButton";
import SearchBar from "../components/SearchBar";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/localeContext";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || ''
  });
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase(),
    );
  });

  return (
    <section>
      <h2>{locale === 'id' ? 'Daftar Catatan Aktif' : 'Active Notes List'}</h2>
      <SearchBar
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
      />
      <NotesList notes={filteredNotes} />
      <HomePageButton />
    </section>
  );
}

HomePage.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
}

export default HomePage;

// function HomePageWrapper() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const keyword = searchParams.get("keyword");
//   function changeSearchParams(keyword) {
//     setSearchParams({ keyword });
//   }

//   return (
//     <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
//   );
// }

// class HomePage extends React.Component {
//   constructor(props) {
//     super(props);
//     autoBindReact(this);

//     this.state = {
//       notes: [],
//       keyword: props.defaultKeyword || "",
//     };
//   }

//   async componentDidMount() {
//     const { data } = await getActiveNotes();

//     this.setState(() => {
//       return {
//         notes: data
//       }
//     })
//   }

//   onKeywordChangeHandler(keyword) {
//     this.setState(() => {
//       return {
//         keyword,
//       };
//     });

//     this.props.keywordChange(keyword);
//   }

//   render() {
//     const notes = this.state.notes.filter((note) => {
//       return note.title
//         .toLowerCase()
//         .includes(this.state.keyword.toLowerCase());
//     });

//     return (
//       <section>
//         <h2>Daftar Catatan</h2>
//         <SearchBar
//           keyword={this.state.keyword}
//           keywordChange={this.onKeywordChangeHandler}
//         />
//         <NotesList notes={notes} />
//         <HomePageButton />
//       </section>
//     );
//   }
// }

// HomePage.propTypes = {
//   defaultKeyword: PropTypes.string,
//   keywordChange: PropTypes.func.isRequired,
// }

// export default HomePageWrapper;
