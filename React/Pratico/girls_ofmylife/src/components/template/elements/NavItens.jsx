import React from 'react'
import './NavItens.css'

export default props=>
    <a href={props.url} className={` mx-2 i fa fa-${props.icon}`}> {props.name} </a>