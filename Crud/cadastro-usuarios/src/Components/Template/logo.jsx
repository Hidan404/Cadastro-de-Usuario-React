import React from "react";
import coder from "../../Assets/Imgs/coder.png"
import "./Logo.css"
import { Link } from "react-router-dom";

const logo = (props) => {
    return (
        <aside className="logo">
           <Link to="/" className="logo">
                <img src={coder} alt="logo"></img>
           </Link>
        </aside>
    )
}


export default logo