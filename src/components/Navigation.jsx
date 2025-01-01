import React from "react";
import { Link } from "react-router-dom";
import { BiHome, BiArchive } from "react-icons/bi";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/"><BiHome /></Link></li>
        <li><Link to="/archives"><BiArchive /></Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;