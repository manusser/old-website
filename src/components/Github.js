import React, { Component } from 'react';
import {Table, Container, Row, Badge} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../css/bootstrap.css';
import '../css/styles.css';

class Github extends Component{

  state = {
    datos : []
  }

  componentDidMount = async() => {
    const res = await fetch('https://api.github.com/users/cbrn/repos');
    const data = await res.json();

    this.setState({datos: data})
  }

  render(){
    return <Container style={{marginTop: '10%', marginBottom: '5%'}}>
      <h3 align="center">Proyectos en Github<FontAwesomeIcon icon="github" /></h3>
      <Row>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Repository</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.datos.map(dato => {
            return <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>{dato.name}</td>
              <td><a href={dato.html_url}>{dato.html_url}</a></td>
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
