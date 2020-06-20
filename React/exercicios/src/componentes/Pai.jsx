import React from "react"
import { childrenWhithProps } from "../utils/utils"

export default props => // pegando o parametro do pai e settando no filho
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenWhithProps(props)}
        </ul>
    </div>