import 'bootstrap/dist/css/bootstrap.min.css' // Bootstrap
import 'font-awesome/css/font-awesome.min.css' // Font Awesome
import './App.css' // css Global
import React from 'react' // React
import { HashRouter } from 'react-router-dom' // Envolve conjunto da pagina
// BrowserRouter não utlizia as Hashs >> Problemas em produção
// HashRouter

import Router from './Routers' // Rotas
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'




export default props =>

    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Router/>
            <Footer />
        </div>
    </HashRouter>