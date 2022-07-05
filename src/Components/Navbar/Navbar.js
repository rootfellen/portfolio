import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <ul className="nav_list">
        <Link className="nav_list__item" to="works">
          works
        </Link>
        <Link className="nav_list__item" to="about">
          about
        </Link>
        <Link className="nav_list__item" to="contact">
          contact
        </Link>
      </ul>
    </>
  );
};

export default Navbar;
