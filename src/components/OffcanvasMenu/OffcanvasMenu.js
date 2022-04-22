import React, { useState } from "react";
import { Offcanvas, Button , Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './OffcanvasMenu.css'


export default function OffcanvasMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="button-ternium" onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} />
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop={false} >
        <Offcanvas.Header closeButton className="nav-header-ternium">
                <Offcanvas.Title>Ternium</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body> 
            <Menu />
            <Areas/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Menu() {
  return (
    <Nav className="nav-ternium" justify variant="tabs" defaultActiveKey="link-0">
      <Nav.Item className="nav-item-ternium">
        <Nav.Link href="link-0">Areas</Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item-ternium">
        <Nav.Link eventKey="link-1">Filtros</Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item-ternium">
        <Nav.Link eventKey="link-2">Analísis</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}


function Areas() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}
