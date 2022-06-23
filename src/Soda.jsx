import React from "react";
import { Link } from "react-router-dom";
import SodaPix from "./SodaPix.jpeg";

function Soda() {
  return (
    <div className="soda">
      <h1>Soda</h1>

      <h1>OMG SOOOOOOOOOO MUCH SUGARRRRRR</h1>
      <img src={SodaPix} alt="soda-pix" />
      <h1>
        <Link to="/">Go back</Link>
      </h1>
    </div>
  );
}

export default Soda;
