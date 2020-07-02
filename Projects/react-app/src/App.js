import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Logo from './components/Logo'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css';


function App() {
  return (
    <div className="App">
      <Logo></Logo>
      <Header></Header>
      <Navbar></Navbar>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
