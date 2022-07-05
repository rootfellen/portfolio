import React from "react";
import "./App.css";
import NavFooter from "./Components/Footer-Nav/NavFooter";
import Logo from "./Components/Logo/Logo";
import Navbar from "./Components/Navbar/Navbar";
import Quotes from "./Components/Quotes/Quotes";
import Socials from "./Components/Socials/Socials";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <>
      <div className="hero_container">
        <Logo />
        <Socials />
        <Navbar />
      </div>
      <div className="wrapper">
        <Quotes />
        <Title />
        <NavFooter />
      </div>
    </>
  );
};

export default App;
