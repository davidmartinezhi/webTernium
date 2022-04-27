import React, { useState } from "react";
import { Offcanvas, Button, Nav, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { UnityContext } from "react-unity-webgl";
import "./OffcanvasMenu.css";

export default function OffcanvasMenu() {
  const [show, setShow] = useState(true);
  const [elementsToShow, setElementsToShow] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
/* 
UnityInstance.SendMessage("JSHandler", "SetArea", area);
*/
  return (
    <>
      <Button className="button-ternium" size="md" onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} />
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop={false}>
        <Offcanvas.Header closeButton className="nav-header-ternium">
          <Offcanvas.Title>Ternium</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Menu callback={setElementsToShow} />
          {elementsToShow == 1 ? (
            <Areas />
          ) : elementsToShow == 2 ? (
            <Filters />
          ) : (
            <h1>Analísis</h1>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Menu({ callback, elementsToShow }) {
  return (
    <>
      <Nav
        className="nav-ternium"
        justify
        variant="tabs"
        activeKey={elementsToShow}
        defaultActiveKey={1}
        onSelect={(selectedKey) => {
          callback(selectedKey);
        }}
      >
        <Nav.Item className="nav-item-ternium">
          <Nav.Link eventKey={1}>Areas</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item-ternium">
          <Nav.Link eventKey={2}>Filtros</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item-ternium">
          <Nav.Link eventKey={3}>Analísis</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

function Areas() {

    const unityMessage = (area) => {
        UnityContext.send("JSHandler", "SetArea", area);
    }

  return (
    <ListGroup variant="flush">
      <ListGroup.Item action onClick={() => unityMessage("Area1")}>
        Area 1
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => unityMessage("Area2")}>
        Area 2
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => unityMessage("Area3")}>
        Area 3
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => unityMessage("Area4")}>
        Area 4
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => unityMessage("Area5")}>
        Area 5
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => unityMessage("Area6")}>
        Area 6
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => unityMessage("Area7")}>
        Area 7
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => unityMessage("Area8")}>
        Area 8
      </ListGroup.Item>
    </ListGroup>
  );
}

function Filters() {
    const unityMessage = (filter) => {
        UnityContext.send("JSHandler", "RecibeWeb", filter);
    }

  return (
    <ListGroup variant="flush">
      <ListGroup.Item action onClick={() => unityMessage("3")}>
        3 Colores
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => unityMessage("5")}>
        5 Colores
      </ListGroup.Item>
    </ListGroup>
  );
}
