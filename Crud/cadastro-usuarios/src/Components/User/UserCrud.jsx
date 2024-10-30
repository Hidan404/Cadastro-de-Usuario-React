import React, { Component } from "react";
import Main from "../Template/Main";

const headrProps = {
    icon: "users",
    title: "Usuarios",
    subtitle: "cadastro de usuarios: incluir, listar, alterar e excluir"
}

export default class UserCrud extends Component {
    render(){
        return (
            <Main {...headrProps}>
                testando aqui 
            </Main>
        )
    }
}