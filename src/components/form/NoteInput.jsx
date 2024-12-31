import React from "react";
import Swal from "sweetalert2";

class NoteInput extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
      titleChar: 50,
    }
    this.titleHandler = this.titleHandler.bind(this);
    this.bodyHandler = this.bodyHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  titleHandler(event) {
    const titleInput = event.target.value;

    if (titleInput.length <= 50) {
      this.setState(() => {
        return {
          title: titleInput,
          titleChar: 50 - titleInput.length,
        }
      });
    }
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
    Swal.fire(
      'Success',
      'Note added!',
      'success'
    )
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.submitHandler}>
        <p className="note-input__title__char-limit">Sisa Karakter:{this.state.titleChar}</p>
        <input 
        className="note-input__title"
        type="text" 
        placeholder="Insert Title Here..." 
        value={this.state.title} 
        onChange={this.titleHandler} 
        required
        />

        <input 
        className="note-input__body" 
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