import React from "react";
import { BiCheck } from "react-icons/bi";

function ConfirmButton() {
  return (
    <div className="add-new-page__action">
      <button className="action" type="submit"><BiCheck /></button>
    </div>
  )
}


export default ConfirmButton;