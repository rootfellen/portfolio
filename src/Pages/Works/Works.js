import React from "react";
import "./Works.css";
import Logo from "../../Components/Logo/Logo";
import Socials from "../../Components/Socials/Socials";
import Navbar from "../../Components/Navbar/Navbar";

const Works = () => {
  return (
    <>
      <div className="blogContainer">
        <div className="container">
          <header className="header">
            <Logo />
            <Socials />
            <Navbar />
          </header>
          <div className="posts">Works were not found</div>
        </div>
      </div>
    </>
  );
};

export default Works;
