import React from "react";
import bulb from "../../assets/img/bulb.svg";
import "./Quotes.css";

const Quotes = () => {
  return (
    <div className="quotes_container">
      <div className="quotes_wrapper">
        <h3 className="quote_text">what we save, saves us.</h3>
        <div className="quote_image">
          <img src={bulb} alt="Quote" />
        </div>
      </div>
    </div>
  );
};

export default Quotes;
