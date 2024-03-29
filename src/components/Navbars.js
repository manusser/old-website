import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';


import Home from '../pages/Home';
import Emojipedia from '../pages/Emojipedia';
import CryptoAPI from '../components/CryptoAPI';
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
          <Nav.Link as={NavLink} to="/emojis">Emojipedia</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
        <Navbar.Text style={{paddingRight: '20px'}}>
            <CryptoAPI name="bitcoin"/>
        </Navbar.Text>
        <Navbar.Text style={{paddingRight: '20px'}}>
            <CryptoAPI name="ethereum"/>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/emojis" component={Emojipedia} />
    </Switch>
    </BrowserRouter>
    </div>
  }

}

export default Navbars;
