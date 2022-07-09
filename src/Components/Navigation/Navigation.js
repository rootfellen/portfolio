import React from "react";
import NavLinks from "../NavLinks/NavLinks";
import cl from "../Navbar/Navbar.module.css";

const Navigation = () => {
  return (
    <nav className={cl.Navigation}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
