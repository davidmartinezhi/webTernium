import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Modal as BootstrapModal, Button } from "react-bootstrap";

export default function ModalAlert(props) {
    const { area, isVisible, setIsVisible } = props;


  return (
    <>
      <BootstrapModal centered size="lg" show={isVisible} onHide={() => setIsVisible(false)}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title> <FontAwesomeIcon style={{color:"red"}} icon={faCircleExclamation} /> Alerta de Contingencia</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>En el area: --- </BootstrapModal.Body>
        <BootstrapModal.Footer>
          <Button variant="warning" onClick={() => setIsVisible(false)}>
            Entendido
          </Button>
        </BootstrapModal.Footer>
      </BootstrapModal>
    </>
  );
}
