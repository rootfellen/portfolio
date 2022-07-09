import React from "react";
import "./App.css";
import NavFooter from "./Components/Footer-Nav/NavFooter";
import Logo from "./Components/Logo/Logo";
import Navbar from "./Components/Navbar/Navbar";
import Quotes from "./Components/Quotes/Quotes";
import Socials from "./Components/Socials/Socials";
import Title from "./Components/Title/Title";
import Character from "./Components/Character/Character";

const App = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <Logo />
          <Socials />
          <Navbar />
        </header>
        <main className="hero">
          <Character />
        </main>
      </div>
    </>
  );
};

export default App;
