import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'


const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Include, Read, Update and Delete '
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    // quando a pagina for carregada ele recuperara a lista
    componentWillMount(){
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data})
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    // sera usado tanto para criar quanto para alterar, no padrao Rest tem DELETE, POST, GET E PUT
    save() {
        const user = this.state.user
        // se o user.id for verdadeiro faremos um update pq ele existe, se nao existe é pq tem de ser criado e nao alterado
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        // por termos colocado o methodo como texto na analise logica do method ele deve ser passado para função como coxete, é uma funcao entao depois vem os parametros
        // axios é baseado em promisso entao tem os .then
        axios[method](url, user)
            .then(resp => {
                // resp.data é o usuario q foi resgatado ou criado 
                const list = this.getUpdateList(resp.data)
                this.setState({ user: initialState.user, list }) // zerei o formulario para o padrao e adicionei ele na list
            })
    }

    getUpdateList(user) {
        const list = this.state.list.filter(u => u.id !== user.id) // filter gera uma outra lista com os filtros, retornando todos os usuarios com id diferente do passado, assim podemos gerar uma atualizada com um excluido
        list.unshift(user) // dentro da nova lista inclumos novamente o usuario alterado no topo.

        return list
    }

    updateField(event) {
        const user = { ...this.state.user }

        // usando a notação de coxetes pois vira um texto 
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            {/* atributo name igual o targt name que vai rastrear */}
                            <input className="form-control" required name="name" value={this.state.user.name} onChange={e => this.updateField(e)} placeholder="Digite um Nome" type="text"></input>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" className="form-control" name="email" value={this.state.user.email} onChange={e => this.updateField(e)} placeholder="Digite seu Email" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary mx-1" onClick={e => this.save(e)}>Salvar</button>
                        <button className="btn btn-secondary mx-1" onClick={e => this.clear(e)}>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }

    load(user){
        this.setState({ user })
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then(resp =>{
            const list = this.state.list.filter(u => u !== user)
            this.setState({list})
        })
    }

    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(user =>{
            return(
                <tr  key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(user)}> 
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        console.log(this.state.list)
        return (         
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}