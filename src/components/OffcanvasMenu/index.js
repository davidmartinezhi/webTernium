import React, { useState } from "react";
import { Offcanvas, Button, Nav, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from '../../assets/img/png/Ternium_Logo.svg.png'
import "./OffcanvasMenu.css";

export default function OffcanvasMenu(props) {
  const { filterController, unityAreaController, deployAnimation } = props;
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
        <span>  Abrir Menú  </span>
      </Button>

      <Offcanvas style={{borderRadius: " 0px 10px 10px 0px" }} show={show} onHide={handleClose} backdrop={false}>
        <Offcanvas.Header closeButton className="nav-header-ternium">
          <Offcanvas.Title ><img src={logo} className="logo-ternium" alt="Ternium logo"/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Menu callback={setElementsToShow} />
          {elementsToShow == "1" ? (
            <Areas unityAreaController={unityAreaController}/>
          ) : elementsToShow == "2" ? (
            <Filters filterController={filterController} />
          ) : (
            <Analyze deployAnimation={deployAnimation} />
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
        className="nav-ternium flex-row"
        justify
        variant="tabs"
        activeKey={elementsToShow}
        defaultActiveKey={elementsToShow}
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

function Areas(props) {
  const {unityAreaController} = props;

  return (
    <>
    <ListGroup variant="flush">
      <ListGroup.Item action onClick={() => unityAreaController("Area1")}>
        Area 1
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => unityAreaController("Area2")}>
        Area 2
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => unityAreaController("Area3")}>
        Area 3
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => unityAreaController("Area4")}>
        Area 4
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => unityAreaController("Area5")}>
        Area 5
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => unityAreaController("Area6")}>
        Area 6
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => unityAreaController("Area7")}>
        Area 7
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => unityAreaController("Area8")}>
        Area 8
      </ListGroup.Item>
    </ListGroup>
    <ListGroup className="crear-area" >
    <ListGroup.Item className="crear-area-item" action onClick={() => console.log("Crear filtro")}>
      Añadir Area
    </ListGroup.Item>
    </ListGroup>
    </>
  );
}

function Filters(props) {
  const { filterController } = props;

  return (
    <>
    <ListGroup variant="flush">
      <ListGroup.Item action onClick={() => filterController(3)}>
        3 Colores
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => filterController(5)}>
        5 Colores
      </ListGroup.Item>
    </ListGroup>

    <ListGroup className="crear-filtro" >
    <ListGroup.Item className="crear-filtro-item" action onClick={() => console.log("Crear filtro")}>
      Añadir Filtro
    </ListGroup.Item>
    </ListGroup>
    </>
  );
}

function Analyze(props) {
  const { deployAnimation } = props;

  return (
    <ListGroup variant="flush">
      <ListGroup.Item action onClick={() => deployAnimation()}>
        Animaciones
      </ListGroup.Item>
    </ListGroup>
  );
}
