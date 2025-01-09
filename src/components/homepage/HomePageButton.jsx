import React from "react";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";

function AddNoteButton() {
  return (
    <div className="homepage__action">
      <Link to="/add">
        <button className="action">
          <HiPlus />
        </button>
      </Link>
    </div>
  );
}

export default AddNoteButton;
