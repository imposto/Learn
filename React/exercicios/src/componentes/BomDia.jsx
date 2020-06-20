import React from 'react'


// recebendo um parametro da tag html do index.js modificando a mensagem de acordo
// react.fragment envolve um conjunto de tags de mais de uma linha para serem inseridas como componente, sem necessidar de uma div que pode compremeter seu layout

// export default props =>
//     <React.Fragment>
//         <h1>Bom dia {props.nome}</h1>
//         <h2>Até Breve</h2>
//     </React.Fragment>

export default props => [
    <h1 key="h1" >Bom dia {props.nome}</h1>,
    <h2 key = "h2">Até Breve</h2>
]

