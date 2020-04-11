import React, { Component } from 'react';
import {Jumbotron, Badge} from 'react-bootstrap';

import '../css/bootstrap.css';
import '../css/styles.css';

import Proyectos from '../components/Proyectos';
import Github from '../components/Github';
import CryptoAPI from '../components/CryptoAPI';



class Home extends Component{
  render(){
    return <div>
    <Jumbotron>
      <h1>Bienvenido</h1>
      <p>
        Web personal donde iré subiendo proyectos que he hecho, herramientas, información interesante, etc.
        Si quieres conocer un poco más sobre mi, pásate por aquí :D.
      </p>
      <p>
        Web construida en <Badge variant="primary" pill>ReactJS</Badge>
      </p>
      <div align="left">

        <h4>Some cryptocurrencies prices</h4>
        <CryptoAPI name="bitcoin"/>
        <CryptoAPI name="ethereum"/>
        <p><b>Data retrieved using <a href="https://github.com/cbrn/ReactJS-Components">CryptoAPI</a> by me.</b></p>
      </div>
    </Jumbotron>
    <Proyectos/>
    <Github/>

    </div>
  }
}

export default Home;
