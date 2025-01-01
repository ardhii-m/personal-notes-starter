import React from "react";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

function AddNoteButton() {
  return (
    <div className="homepage__action">
      <Link to="/add"><button className="action"><BiPlus /></button></Link>
    </div>
  )
}


export default AddNoteButton;