import React from "react";
import { Link } from "react-router-dom";
import SardinesPix from "./Sardines.gif";

function Sardines() {
    return (
        <div className="sardines">
        <h1>Sardines</h1>
        <img src="https://i.makeagif.com/media/8-04-2016/v0HbPm.gif" alt="sardines-pix" />
        <h1><Link to="/">Go Back</Link></h1>
        <img src={SardinesPix} alt="sardines-pix" />
        </div>
    );

}


export default Sardines;

