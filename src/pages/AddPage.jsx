import React from "react";
import { addNote } from "../utils/network-data";
import NoteInput from "../components/input/NoteInput";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../contexts/localeContext";

function AddPage() {
  const { locale } = React.useContext(LocaleContext);
  const navigate = useNavigate();

  async function onAddNoteHandler({ title, body }) {
    await addNote({ title, body });
    navigate("/");
  }

  return (
    <section>
      <h2>{locale === 'id' ? 'Tambah Catatan Baru' : 'Add New Note'}</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
