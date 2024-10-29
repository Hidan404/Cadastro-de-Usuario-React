// Main.jsx
import "./Main.css";
import React from "react";
import Header from "./Header"; // Corrigido de "Headeer" para "Header"

const Main = (props) => {
    return (
        <React.Fragment>
            <Header />
            <main className="content">
                box p
            </main>
        </React.Fragment>
    );
}

export default Main;
