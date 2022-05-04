import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Modal as BootstrapModal, Button } from "react-bootstrap";

export default function ModalAnimation(props) {
    const { isVisible, setIsVisible } = props;


  return (
    <>
      <BootstrapModal centered size="lg" show={isVisible} onHide={() => setIsVisible(false)}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title> <FontAwesomeIcon icon={faCircleInfo} /> Comportamiento en el transcurso del día</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
            Hola
        </BootstrapModal.Body>
        <BootstrapModal.Footer>
          <Button variant="warning" onClick={() => setIsVisible(false)}>
            cerrar
          </Button>
        </BootstrapModal.Footer>
      </BootstrapModal>
    </>
  );
}
