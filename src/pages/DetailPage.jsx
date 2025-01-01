import React from "react";
import { getNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";
import autoBindReact from "auto-bind/react";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    autoBindReact(this);
    
    this.state = {
      note: getNote(props.id),
    };
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      }
    });
   }

  onArchiveHandler(id) {
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getActiveNotes(),
      };
    });
  }

  onUnarchiveHandler(id) {
    unarchiveNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
  }

  render() {
    if (this.state.note === null || this.state.note === undefined) {
      return <PageNotFound />;
    }
    return (
      <section>
        <NoteDetail {...this.state.note} 
                  onDelete={this.onDeleteHandler} 
                  onArchive={this.onArchiveHandler}/>
      </section>
    );
  }
}

export default DetailPageWrapper;
