import React from "react";
import coder from "../../Assets/Imgs/coder.png"
import "./Logo.css"

const logo = (props) => {
    return (
        <aside className="logo">
           <a href="/" className="logo">
                <img src={coder} alt="logo"></img>
           </a>
        </aside>
    )
}


export default logo