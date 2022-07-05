import React from "react";
import "./NavFooter.css";
import { Link } from "react-router-dom";

const NavFooter = () => {
  return (
    <div className="navFooter_container">
      <ul className="navfooter_list">
        <Link className="navfooter_list__item" to="works">
          download cv
        </Link>
        <Link className="navfooter_list__item" to="works">
          latest works
        </Link>
        <Link className="navfooter_list__item" to="blog">
          blog
        </Link>
      </ul>
    </div>
  );
};

export default NavFooter;
