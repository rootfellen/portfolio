import React from "react";
import "./Blog.css";
import Logo from "../../Components/Logo/Logo";
import Socials from "../../Components/Socials/Socials";
import Navbar from "../../Components/Navbar/Navbar";
import Character from "../../Components/Character/Character";
import Title from "../../Components/Title/Title";
import NavFooter from "../../Components/Footer-Nav/NavFooter";

const Blog = () => {
  return (
    <>
      <div className="blogContainer">
        <div className="container">
          <header className="header">
            <Logo />
            <Socials />
            <Navbar />
          </header>
          <div className="posts">Posts were not found</div>
          <NavFooter />
        </div>
      </div>
    </>
  );
};

export default Blog;
