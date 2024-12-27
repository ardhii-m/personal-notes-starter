import React from "react";

class NoteInput extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
    }
    this.titleHandler = this.titleHandler.bind(this);
    this.bodyHandler = this.bodyHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  titleHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    });
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
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.submitHandler}>
        <input className="note-input__title" type="text" placeholder="Insert Title Here..." value={this.state.title} onChange={this.titleHandler} />
        <input className="note-input__body" type="text" placeholder="Insert Note Here..." value={this.state.body} onChange={this.bodyHandler} />
        <button type="submit">Add Note</button>
      </form>
    )
  }
}

export default NoteInput;