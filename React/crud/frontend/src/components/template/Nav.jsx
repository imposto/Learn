import './Nav.css'
import React from 'react'
import NavItem from './Nav-Item'

export default props=>
    <aside className="nav">
        <nav className="nav-bar">
            <NavItem icon="home" item="Início" url="/"/>
            <NavItem icon="user" item="Usuário" url="users"/>
        </nav>
    </aside>