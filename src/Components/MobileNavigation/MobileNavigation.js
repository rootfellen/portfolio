import React from "react";
import NavLinks from "../NavLinks/NavLinks";
import cl from "../Navbar/Navbar.module.css";
import { slide as Menu } from "react-burger-menu";
import styles from "./burgerStyles";

const MobileNavigation = () => {
  return (
    <nav className={cl.MobileNavigation}>
      <Menu right styles={styles}>
        <NavLinks />
      </Menu>
    </nav>
  );
};

export default MobileNavigation;
