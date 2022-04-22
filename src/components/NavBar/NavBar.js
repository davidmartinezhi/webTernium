import React from 'react'
import {Navbar, Row, Col} from 'react-bootstrap'
import OffcanvasMenu from '../OffcanvasMenu';

export default function NavBar() {

  return (
    <Navbar className="navbar-ternium">
            <Col md={1}>
                <OffcanvasMenu />
            </Col>
            <Col md={9}></Col>
            <Col md={2}>
                Alert
            </Col>

    </Navbar>
  )
}
