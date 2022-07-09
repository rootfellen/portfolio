import React from "react";
import person from "../../assets/img/guy.svg";

const Character = () => {
  return (
    <div className="character-container">
      <img src={person} alt="me" />
    </div>
  );
};

export default Character;
