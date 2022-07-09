import React from "react";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Navigation from "../Navigation/Navigation";
import cl from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={cl.Navbar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default Navbar;
