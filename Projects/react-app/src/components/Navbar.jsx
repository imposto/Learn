import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default props =>
    <nav className="navbar">
        <ul class="nav flex-column">
                <li class="nav-item">
                    <Link to="/"><a class="nav-link active" href="#">Active</a></Link>
                </li>
                <li class="nav-item">
                    <Link to="hobbies"><a class="nav-link" href="#">Link</a></Link>
                </li>
                <li class="nav-item">
                    <Link to="projetos"><a class="nav-link" href="#">Link</a></Link>
                </li>
                <li class="nav-item">
                    <Link to=""><a class="nav-link disabled" href="#">Disabled</a></Link>
                </li>
        </ul>
    </nav>