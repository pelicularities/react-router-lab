import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <nav>
      <NavLink exact to="/">
        Home Page
      </NavLink>
      <NavLink to="/tacos">Tacos Feed</NavLink>
      <NavLink to="/twitter">Twitter Feed</NavLink>
    </nav>
  );
}
