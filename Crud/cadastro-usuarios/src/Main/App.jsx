import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "./App.css"
import React from "react"
import { HashRouter } from "react-router-dom"
//import Routes from "./Routes"
import Logo from "../Components/Template/logo"
import Nav from "../Components/Template/Nav"
import Main from "../Components/Template/Main"
import Footer from "../Components/Template/Footer"


const app = (props) => {
    return (
        <HashRouter>
            <div className="App">
            <Logo />
            <Nav />
            <Main icon="home" title="inicio" subtitle="segundo projeto do cap Rreact">
                <div className="display-4">Bem vindo</div>
                <hr />
                <p className="mb-0">Sistema de cadastro em react para demonstração de CRUD</p>
            </Main>
            <Footer />
        </div>
        </HashRouter>
        
    )
}


export default app