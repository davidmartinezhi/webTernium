import React from 'react'
import {Navbar, Col} from 'react-bootstrap'
import OffcanvasMenu from "../OffcanvasMenu";

import './NavBar.css';

export default function NavBar() {
  return (
    <Navbar className="navbar-ternium" expand="md">
      <Col md={1} className="navbar-col">
        <OffcanvasMenu />
      </Col>
      <Col md={9} className="navbar-col"></Col>
      <Col md={2} className="navbar-col">Alert</Col>
    </Navbar>
  );
}
