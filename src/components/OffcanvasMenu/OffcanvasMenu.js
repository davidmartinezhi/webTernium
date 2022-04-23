import React, { useState } from "react";
import { Offcanvas, Button , Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './OffcanvasMenu.css'


export default function OffcanvasMenu() {
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(display);
  return (
    <>
      <Button className="button-ternium" onClick={handleShow} prefix={<FontAwesomeIcon icon={faBars} />}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop={false} >
        <Offcanvas.Header closeButton className="nav-header-ternium">
                <Offcanvas.Title>Ternium</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body> 
            <Menu callback={setDisplay}/>
            <Areas showing={display}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Menu({callback}) {
  return (
    <Nav className="nav-ternium" justify variant="tabs" defaultActiveKey="link-0">
      <Nav.Item className="nav-item-ternium">
        <button onClick={callback(1)}>Areas</button>
      </Nav.Item>
      <Nav.Item className="nav-item-ternium">
        <button onClick={callback(2)}>Filtros</button>
      </Nav.Item>
      <Nav.Item className="nav-item-ternium">
        <button onClick={callback(3)}>Analísis</button>
      </Nav.Item>
    </Nav>
  );
}


function Areas({showing}) {
  return (
    <Nav defaultActiveKey="/home" justify className="areas">
      {showing === 3 ?
        <>
          <Nav.Link eventKey="link-1">Active</Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="disabled">Disabled</Nav.Link>
        </>
      :
        <>
          <Nav.Link eventKey="link-1">sas</Nav.Link>
          <Nav.Link eventKey="link-1">dsadsa</Nav.Link>
          <Nav.Link eventKey="link-2">dsads</Nav.Link>
          <Nav.Link eventKey="disabled">dsasda</Nav.Link>
        </>
      }

    </Nav>
  );
}
