import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";
import CustomReactPlayer from "../VideosND/VideoPlayer/CustomVideoPlayer";

function ModalVideo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Ver video
      </Button>

      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title>Dejando Huella</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="VerVideo__container-video">
            <ReactPlayer
              url="./video/video-compilado.mp4"
              controls
              width="300px"
              height="100%"
              playing={show}
              onPause={handleClose}
            />
            {/* <CustomReactPlayer url="./video/video-compilado.mp4" /> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalVideo;
