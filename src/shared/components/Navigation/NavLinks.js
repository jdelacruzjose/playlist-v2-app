import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>Users</NavLink>
      </li>
      <li>
        <NavLink to="/u1/playlist">My Playlist</NavLink>
      </li>
      <li>
        <NavLink to="/playlist/new">Add Playlist</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authenticate</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
