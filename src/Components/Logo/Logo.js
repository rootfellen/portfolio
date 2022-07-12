import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <Link to="/" className="logo-container">
      <h1 className="logo-title">serhii T.</h1>
      <p className="logo-position">front-end developer</p>
    </Link>
  );
};

export default Logo;
