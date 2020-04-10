import React, { Component } from 'react';
import {Jumbotron, Button, Badge} from 'react-bootstrap';

import '../css/bootstrap.css';
import '../css/styles.css';

import Proyectos from '../components/Proyectos';
import Github from '../components/Github';

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
        Web construida en <Badge variant="primary">ReactJS</Badge>
      </p>
    </Jumbotron>
    <Proyectos/>
    <Github/>
    </div>
  }
}

export default Home;
