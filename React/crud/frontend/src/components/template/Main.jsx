import './Main.css'
import React from 'react'
import Header from './Header'


export default props =>
<React.Fragment>

    {/* props faz com que as propriedades recebidas na main sejam propagadas para o header neste caso icone titulo e subtitulo */}
    <Header {...props}/> 
    <main className="content container-fluid">
        <div className="p-3 mt-3">
            {props.children}
        </div>
    </main>
</React.Fragment>