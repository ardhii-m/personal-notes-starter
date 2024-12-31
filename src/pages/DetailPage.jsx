import React from "react";
import { getNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";
import { useParams } from "react-router-dom";
import NotFound from "../components/NotFound";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props){ 
    super(props);

    this.state = {
      note: getNote(props.id)
    };
  }

  render() {
    if(this.state.note === null) {
      return (
        <section>
        <h2>404</h2>
        <p>Page Not Found</p>
      </section>
      );
    }
    return (
      <section>
        <NoteDetail {...this.state.note} />
      </section>
    );
  }
}

export default DetailPageWrapper;
