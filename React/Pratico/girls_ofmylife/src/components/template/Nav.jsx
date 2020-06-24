import './Nav.css'
import React from 'react'
import Logo from './Logo'
import NavIten from './elements/NavItens'

export default props=>
    <aside className="nav">
        <nav className="navbar">
            <Logo></Logo>
            <button className="btn mx-2"><a href="#" className="fa fa-user"></a></button>
        </nav>
    </aside>