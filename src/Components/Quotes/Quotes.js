import React from "react";
import bulb from "../../assets/img/bulb2.png";
import bulb2 from "../../assets/img/bulb.svg";
import "./Quotes.css";

const Quotes = (props) => {
  return (
    <div className="quotes_container">
      <div className="quotes_wrapper">
        <h3 className="quote_text">what we save, saves us.</h3>
        <div onClick={props.handleLight} className="quote_image">
          <img src={props.light ? bulb : bulb2} alt="Quote" />
        </div>
      </div>
    </div>
  );
};

export default Quotes;
