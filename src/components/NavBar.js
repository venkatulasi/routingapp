import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul className="listitem">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
