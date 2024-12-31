import React from "react";
import PropTypes from "prop-types";
import autoBindReact from "auto-bind/react";

class NoteInput extends React.Component {
  constructor(props){
    super(props);
    autoBindReact(this);
    this.state = {
      title: '',
      body: '',
    }
  }

  titleHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    })
  }

  bodyHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="add-new-page__input" onSubmit={this.submitHandler}>
        <input 
        className="add-new-page__input__title"
        type="text" 
        placeholder="Insert Title Here..." 
        value={this.state.title} 
        onChange={this.titleHandler} 
        required
        />

        <input 
        className="add-new-page__input__body" 
        type="text" 
        placeholder="Insert Note Here..." 
        value={this.state.body} 
        onChange={this.bodyHandler} 
        required 
        />

        <button type="submit">Add Note</button>
      </form>
    )
  }
}

export default NoteInput;