import React, { Component } from 'react';
import {Container, Row, Card, Badge} from 'react-bootstrap';

import '../css/bootstrap.css';
import '../css/styles.css';

class Proyectos extends Component{
  render(){
    return <Container style={{marginTop: '5%'}}>
      <h3 align="center"><Badge variant="warning" pill>Public</Badge> Projects</h3>
      <Row>
      <Card style={{ width: '18rem' }} className="col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe d-block mx-auto mx-md-0">
        <Card.Body>
          <Card.Title>Nodo313 <img style={{borderRadius: '15px', border: '1px solid black'}}
                alt=""
                src="https://www.nodo313.net/logo_foro_blanco.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Forum</Card.Subtitle>
          <Card.Text>
            Spanish forum founded at the beginning of 2018.
          </Card.Text>
          <Card.Link target="_blank" href="https://www.nodo313.net">Access</Card.Link>
          <Card.Link target="_blank" href="https://www.nodo313.net/index.php?members/cbrn.2/">My profile</Card.Link>
        </Card.Body>
      </Card>

      </Row>
    </Container>
  }
}

export default Proyectos;
