import "./App.css"
import React from "react"
import Logo from "../Components/Template/logo"
import Nav from "../Components/Template/Nav"
import Main from "../Components/Template/Main"
import Footer from "../Components/Template/Footer"

const app = (props) => {
    return (
        <div className="App">
            <Logo />
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}


export default app