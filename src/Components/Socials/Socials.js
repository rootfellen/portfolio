import React from "react";
import "./Socials.css";

const Socials = () => {
  return (
    <div className="socials-wrapper">
      <ul className="socials-list">
        <li className="socials-list--item">
          <a href="http://github.com">gh</a>
        </li>
        <li className="socials-list--item">
          <a href="http://linkedincom">in</a>
        </li>
        <li className="socials-list--item">
          <a href="http://twitter.com">tw</a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
