import React from "react";

class NoteButton extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="note-item__action">
        <button className="note-item__archive-button">Archive</button>
        <button className="note-item__delete-button">Delete</button>
      </div>
    )
  }
}

export default NoteButton;