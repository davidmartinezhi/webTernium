import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Modal as BootstrapModal, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import animation from "../../assets/video/mp4/TerniumAnimation.mp4";
import "./ModalAnimation.css";

export default function ModalAnimation(props) {
    const { isVisible, setIsVisible } = props;


  return (
    <>
      <BootstrapModal centered size="xl" show={isVisible} onHide={() => setIsVisible(false)}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title> <FontAwesomeIcon icon={faCircleInfo} /> Comportamiento en el transcurso del día</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
            <ReactPlayer 
                  url={animation}
                  playing={true} 
                  loop={true} 
                  controls={false}
                  width="100%"
                  height="100%"
            />
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
