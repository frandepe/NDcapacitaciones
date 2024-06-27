import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { cursosInfo } from "../../pages/Fechas/Cursos";
import "./ModalPromoCurso.scss";

function ModalPromoCurso() {
  const [show, setShow] = useState(false);
  const hoy = new Date();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000); // Mostrar el modal después de 5 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo difuminado
          backdropFilter: "blur(8px)", // Efecto de desenfoque
          border: "none", // Sin borde
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nueva capacitación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Tenes tiempo de inscribirte</h5>
          {cursosInfo
            .filter((e) => new Date(e.countdown) > hoy)
            .map((e) => {
              return (
                <div key={e.id} className="ModalPromoCurso__info">
                  <p>
                    {e.titulo} -{" "}
                    <span className="ModalPromoCurso__info--span">
                      {e.fecha}
                    </span>
                  </p>
                </div>
              );
            })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button href="/fechas" variant="primary">
            Saber más
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPromoCurso;
