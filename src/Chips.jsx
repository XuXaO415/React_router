import React from "react";
import { Link } from "react-router-dom";
import ChipsPix from "./ChipsPix.jpeg";


function Chips() {
    return (
        <div className="chips">
        <h1>Chips</h1>
        <h1>Cappuccino flavored chips 🤔 🤔 🤔</h1>
        {/* <img src={ChipsPix} alt="chips-pix" /> */}
        <img src="https://pyxis.nymag.com/v1/imgs/3bc/877/48da78cf624b67d71affecba5c423e4775-21-lays-cappucino.2x.h473.w710.jpg" />
        <h1>
            <Link to="/">Go back</Link>
        </h1>
        </div>
    );

}


export default Chips;