import React, { Component } from 'react';
import {Table, Container, Row, Badge} from 'react-bootstrap';

import { FaGithub, FaJs, FaPython } from "react-icons/fa";


import '../css/bootstrap.css';
import '../css/styles.css';

class Github extends Component{

  state = {
    datos : []
  }



  getLanguageIcon = (icon) => {
    if(icon === "JavaScript"){
      return <FaJs style={{color:'orange'}} />
    }else if(icon === "Python"){
      return <FaPython />
    }
  }

  componentDidMount = async() => {
    const res = await fetch('https://api.github.com/users/cbrn/repos?client_id=&client_secret=');
    const data = await res.json();

    this.setState({datos: data})
  }

  render(){
    return <Container style={{marginTop: '5%'}}>
      <h3 align="center"><Badge variant="dark" pill>Github <FaGithub /></Badge> Projects</h3>
      <Row>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Repository <span role="img" aria-label="package">📦</span></th>
            <th>Description <span role="img" aria-label="book">📖</span></th>
            <th>Language <span role="img" aria-label="japan">🈸</span></th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.datos.map(dato => {
            return <tr key={dato.id}>
              <td><a href={dato.html_url}>{dato.name}</a></td>
              <td>{dato.description}</td>
              <td>{dato.language} {this.getLanguageIcon(dato.language)}</td>
            </tr>
          })
          }
        </tbody>
      </Table>

      </Row>
    </Container>
  }
}

export default Github;
