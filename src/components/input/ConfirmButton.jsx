import React from "react";
import { HiCheck } from "react-icons/hi";

function ConfirmButton() {
  return (
    <div className="add-new-page__action">
      <button className="action" type="submit">
        <HiCheck />
      </button>
    </div>
  );
}

export default ConfirmButton;
