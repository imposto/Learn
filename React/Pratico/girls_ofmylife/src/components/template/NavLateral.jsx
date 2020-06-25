import React from 'react'
import './NavLateral.css'
import NavIten from './elements/NavItens'
import Nav from './Nav'

export default props=>
    <aside className="navLateral">
        <nav className="navLateral">
            <NavIten icon="user" url="#">Delicia</NavIten>
            <NavIten icon="user" url="#">Delicia</NavIten>
            <NavIten icon="user" url="#">Delicia</NavIten>
            <NavIten icon="user" url="#">Delicia</NavIten>
            <NavIten icon="user" url="#">Delicia</NavIten>
        </nav>
    </aside>