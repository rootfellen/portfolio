import React from "react";
import person from "../../assets/img/guy.svg";
import cl from "./Character.module.css";

const Character = () => {
  return (
    <div className={cl.characterContainer}>
      <img className={cl.characterImage} src={person} alt="me" />
    </div>
  );
};

export default Character;
