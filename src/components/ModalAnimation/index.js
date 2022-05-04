import React from "react";
import { Modal as BootstrapModal, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import animation from "../../assets/video/mp4/TerniumAnimation.mp4";
import clock from "../../assets/video/mp4/Clock.mp4"
import "./ModalAnimation.css";

export default function ModalAnimation(props) {
    const { isVisible, setIsVisible } = props;

 
  return (
    <>
      <BootstrapModal
        centered
        size="xl"
        show={isVisible}
        onHide={() => setIsVisible(false)}
      >
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>
            {" "}
            <ReactPlayer
            url={clock}
            playing={true}
            loop={true}
            controls={false}
            width="30px"
            height="30px"
          />
            Comportamiento en el transcurso del día 

          </BootstrapModal.Title>

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
