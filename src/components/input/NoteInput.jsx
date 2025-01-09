import React from "react";
import PropTypes from "prop-types";
import ConfirmButton from "./ConfirmButton";
import LocaleContext from "../../contexts/localeContext";

function NoteInput({ addNote }) {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const { locale } = React.useContext(LocaleContext);

  const titleHandler = (event) => {
    setTitle(event.target.value);
  }

  const bodyHandler = (event) => {
    setBody(event.target.innerText);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    addNote({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form className="add-new-page__input" onSubmit={submitHandler}>
      <input
        className="add-new-page__input__title"
        placeholder={locale === 'id' ? 'Tambahkan Judul Disini...' : 'Insert Title Here...' }
        value={title}
        onChange={titleHandler}
      />

      <div
        className="add-new-page__input__body"
        contentEditable="true"
        data-placeholder={locale === 'id' ? 'Tambahkan Catatan Disini...' : 'Insert Note Here...' }
        value={body}
        onInput={bodyHandler}
      />
      <ConfirmButton />
    </form>
  );
}

// class NoteInput extends React.Component {
//   constructor(props) {
//     super(props);
//     autoBindReact(this);
//     this.state = {
//       title: "",
//       body: "",
//     };
//   }

//   titleHandler(event) {
//     this.setState(() => {
//       return {
//         title: event.target.value,
//       };
//     });
//   }

//   bodyHandler(event) {
//     this.setState(() => {
//       return {
//         body: event.target.innerText,
//       };
//     });
//   }

//   submitHandler(event) {
//     event.preventDefault();
//     this.props.addNote(this.state);
//   }

//   render() {
    // return (
    //   <form className="add-new-page__input" onSubmit={this.submitHandler}>
    //     <input
    //       className="add-new-page__input__title"
    //       placeholder="Insert Title Here..."
    //       value={this.state.title}
    //       onChange={this.titleHandler}
    //     />

    //     <div
    //       className="add-new-page__input__body"
    //       contentEditable="true"
    //       data-placeholder="Insert Note Here..."
    //       value={this.state.body}
    //       onInput={this.bodyHandler}
    //     />
    //     <ConfirmButton />
    //   </form>
    // );
//   }
// }

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
