import React from "react";
import NoteDetail from "../components/note/NoteDetail";
import { useNavigate, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/network-data";
import autoBindReact from "auto-bind/react";
import PropTypes from "prop-types";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    autoBindReact(this);

    this.state = {
      note: null,
    };
  }

  async componentDidMount() {
    const { data } = await getNote(this.props.id);

    this.setState(() => {
      return {
        note: data
      }
    })
  }
  
  async onDeleteHandler(id) {
    const { navigate } = this.props;
    await deleteNote(id);
    navigate("/");
  }

  async onArchiveHandler(id) {
    const { navigate } = this.props;
    await archiveNote(id);
    navigate("/");
  }

  async onUnarchiveHandler(id) {
    const { navigate } = this.props;
    await unarchiveNote(id);
    navigate("/archives");
  }

  render() {
    if (this.state.note === null || this.state.note === undefined) {
      return <PageNotFound />;
    }
    return (
      <section>
        <NoteDetail
          {...this.state.note}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onUnarchive={this.onUnarchiveHandler}
        />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired, 
}

export default DetailPageWrapper;
