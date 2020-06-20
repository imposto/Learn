import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro' // Todos os componentes criados por voce começa com maiuscula
// exemplo utilizando um codigo js de uma variavel dentro do parametro
// const elemento = <h1>React</h1>
// ReactDOM.render(<Primeiro/>, document.getElementById('root'))

// import BomDia from './componentes/BomDia'
// ReactDOM.render(<BomDia nome ="Guilherme" idade={20} />, document.getElementById('root'))

// import Multi from "./componentes/Multiplos" // exportei tudo oque nao era default, caso algum seja default nao precisa das chaves
// // da pra importar tanto pelo conjunto inteiro no default, ai as funcionalidades devem ser acessadas com o nome do importe.nomedafuncionalidade,
// // ou tambem da pra importar com destruction que importa so algumas funcionaldiades especificas que podem ser usadas sozinhas
// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Jéssica"/>
//         <Multi.BoaNoite nome="Jéssica"/>
//     </div>
// , document.getElementById("root"))

// import Saudacao from "./componentes/Saudacao"

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="João"/>
//     </div>
// ,document.getElementById('root'))

import Pai from "./componentes/Pai"
import Filhos from "./componentes/Filho"

ReactDOM.render(
    <div>
        <Pai nome="Ricardo" sobrenome="Bastos">
            {/* como passar componentes filhos aqui */}
            <Filhos nome="Pedro" />
            <Filhos nome="Jessica" />
            <Filhos nome="Persival"/>
        </Pai>
    </div>
,document.getElementById('root'))