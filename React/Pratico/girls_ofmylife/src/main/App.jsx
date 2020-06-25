import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import Nav from '../components/template/Nav'
import NavLateral from '../components/template/NavLateral'
import Main from '../components/template/main/Home'
import Footer from '../components/template/Footer'
import './App.css'

export default props =>

    <React.Fragment>
        <div className="app">
            <Nav> </Nav>
            <NavLateral></NavLateral>
            <Main></Main>
            <Footer></Footer>
        </div>
    </React.Fragment>