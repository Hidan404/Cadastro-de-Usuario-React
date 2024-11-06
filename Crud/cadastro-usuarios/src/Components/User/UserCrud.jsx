import React, { Component } from "react";
import axios from "axios"
import Main from "../Template/Main";

const headrProps = {
    icon: "users",
    title: "Usuarios",
    subtitle: "cadastro de usuarios: incluir, listar, alterar e excluir"
}
const baseUrl = "http://localhost:3000/user"
const initialState = {
    user: { name: "", email: ""},
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState}

    clear(){
        this.setState({ user: initialState.user})
    }
    save(){
        const user = this.state.user
        const method = user.id
        const url = user.id? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
        .then(resp => {
            const list = this.getUpdateList(resp.data)
            this.setState({ user: initialState.user, list})
        })
    }
    getUpdateList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }
    updateField(event){
        const user = { ...this.state.user}
        user[event.target.name] = event.target.value
        this.setState( { user })
    }
    renderForm(){
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label >Nome</label>
                            <input type="text" className="form-control" name="name"
                            value={this.state.user.name}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o input"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label >Email</label>
                            <input type="text" className="form-control" name="name"
                            value={this.state.user.email}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o Email"
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>Salvar</button>
                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }
    render(){
        return (
            <Main {...headrProps}>
                {this.renderForm()}
            </Main>
        )
    }
}