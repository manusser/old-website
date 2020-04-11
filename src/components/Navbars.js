import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';


import Home from '../pages/Home';

class Navbars extends Component {

  render(){
    return <div>
    <BrowserRouter>
    <Navbar bg="dark" expand="lg" variant="dark" className="mx-auto">
      <Navbar.Brand href="#home">
        <img style={{borderRadius: '15px'}}
              alt=""
              src="https://www.nodo313.net/data/avatars/m/0/2.jpg?1568335895"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} cbrn
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Switch>
      <Route exact path="/" component={Home} />

    </Switch>
    </BrowserRouter>
    </div>
  }

}

export default Navbars;
