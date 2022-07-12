import React from "react";
import "./NavFooter.css";
import { Link } from "react-router-dom";

const NavFooter = () => {
  return (
    <div className="navFooter_container">
      <ul className="navfooter_list">
        <a
          className="navfooter_list__item"
          href="../../assets/CV/Serhii Tarasenko CV.pdf"
          download
        >
          download cv
        </a>
        <a
          className="navfooter_list__item"
          href="https://github.com/rootfellen?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          latest works
        </a>
        <Link className="navfooter_list__item" to="/blog">
          blog
        </Link>
      </ul>
    </div>
  );
};

export default NavFooter;
