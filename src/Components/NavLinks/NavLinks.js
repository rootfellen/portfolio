import React from "react";
import { Link } from "react-router-dom";
import cl from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <>
      <Link className={cl.nav_list__item} to="/works">
        works
      </Link>
      <Link className={cl.nav_list__item} to="/about">
        about
      </Link>
      <Link className={cl.nav_list__item} to="/contact">
        contact
      </Link>
    </>
  );
};

export default NavLinks;
