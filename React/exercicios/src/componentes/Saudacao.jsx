import React, {Component} from 'react'

export default class Saudacao extends Component{

    //alterar valores das props, inicia valores padroes num objeto state, e pode alteralos depois
     state = {
        tipo : this.props.tipo,
        nome : this.props.nome
    }

    constructor(props){
        super(props)

        this.setTipo = this.setTipo.bind(this)
    }


    setTipo(e){

        // let i = 1
        // setInterval(()=>{
        //     this.setState({tipo: i++})
        // }, 1000)

        this.setState({tipo : e.target.value}) // o estado que muda o visual
    }

    setNome(e){
        this.setState({nome: e.target.value})
    }

    render(){
        const {tipo, nome} = this.state // referenciando dentro do atributo props o tipo e nome
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}