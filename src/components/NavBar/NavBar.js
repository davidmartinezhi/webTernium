import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Col } from "react-bootstrap";
import OffcanvasMenu from "../OffcanvasMenu";

import "./NavBar.css";

export default function NavBar(props) {
  const { filterController, unityAreaController, deployAnimation } = props;

  return (
    <Navbar className="navbar-ternium" expand="md">
      <Col md={2} className="navbar-col">
        <OffcanvasMenu filterController={filterController} unityAreaController={unityAreaController} deployAnimation={deployAnimation}/>
      </Col>
      <Col md={8} className="navbar-col"></Col>
      <Col md={2} className="navbar-col">
        <Button
          type="primary"
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          <FontAwesomeIcon className="alert-bell" icon={faBell} />
        </Button>
      </Col>
    </Navbar>
  );
}
