import React from "react";
import "./Socials.css";
import guyImg from "../../assets/img/guy.svg";

const Socials = () => {
  return (
    <div className="socials_wrapper">
      <ul className="socials_list">
        <li className="socials_list__item">
          <a href="http://github.com">gh</a>
        </li>
        <li className="socials_list__item">
          <a href="http://linkedincom">in</a>
        </li>
        <li className="socials_list__item">
          <a href="http://twitter.com">tw</a>
        </li>
      </ul>
      <div className="guy">
        <img src={guyImg} alt="guy" />
      </div>
    </div>
  );
};

export default Socials;
