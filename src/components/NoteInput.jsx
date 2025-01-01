import React from "react";
import PropTypes from "prop-types";
import autoBindReact from "auto-bind/react";
import ConfirmButton from "./ConfirmButton";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    autoBindReact(this);
    this.state = {
      title: "",
      body: "",
    };
  }

  titleHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  bodyHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="add-new-page__input" onSubmit={this.submitHandler}>
        <div
          className="add-new-page__input__title"
          contentEditable
          data-placeholder="Insert Title Here..."
          onInput={this.titleHandler}
        />

        <div
          className="add-new-page__input__body"
          contentEditable
          data-placeholder="Insert Note Here..."
          onInput={this.bodyHandler}
        />
        <ConfirmButton />
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
