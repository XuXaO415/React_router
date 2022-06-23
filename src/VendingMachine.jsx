import React from "react";
import { NavLink, Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div className="vending-machine">
        <h1>Hello, I am a vending machine. What would like to eat?</h1>
    <img src="https://i.pinimg.com/originals/80/8a/33/808a3361fb08e59de7564cbac896e3be.gif" alt="vending-machine-pix" />
    <h1><Link to="/soda">Soda</Link></h1>
    <h1><Link to="/chips"></Link></h1>
    <h1><Link to="/sardines"></Link></h1>
  

    </div>
  );
}

export default VendingMachine;
