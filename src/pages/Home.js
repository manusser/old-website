import React, { Component } from 'react';
import {Jumbotron, Badge} from 'react-bootstrap';

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
        Personal website where I'll be uploading my projects, ideas, tools, etc.
      </p>
      <p>
        Made in <Badge variant="primary" pill>ReactJS</Badge>.
      </p>
    </Jumbotron>
    <Proyectos/>
    <Github/>

    </div>
  }
}

export default Home;
