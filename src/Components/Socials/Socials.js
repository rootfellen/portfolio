import React from "react";
import "./Socials.css";

const Socials = () => {
  return (
    <div className="socials-wrapper">
      <ul className="socials-list">
        <li className="socials-list--item">
          <a
            href="https://github.com/rootfellen"
            rel="noreferrer"
            target="_blank"
          >
            gh
          </a>
        </li>
        <li className="socials-list--item">
          <a
            href="https://www.linkedin.com/in/rootfellen/"
            rel="noreferrer"
            target="_blank"
          >
            in
          </a>
        </li>
        <li className="socials-list--item">
          <a
            href="https://twitter.com/Rootfellen"
            rel="noreferrer"
            target="_blank"
          >
            tw
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
