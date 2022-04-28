import React from 'react'
import {Navbar, Col} from 'react-bootstrap'
import OffcanvasMenu from "../OffcanvasMenu";

import './NavBar.css';

export default function NavBar(props) {

  const {filterController} = props;

  return (
    <Navbar className="navbar-ternium" expand="md">
      <Col md={2} className="navbar-col">
        <OffcanvasMenu filterController={filterController} />
      </Col>
      <Col md={8} className="navbar-col"></Col>
      <Col md={2} className="navbar-col">Alert</Col>
    </Navbar>
  );
}
