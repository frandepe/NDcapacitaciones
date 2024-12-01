import React, { useState } from "react";
import "./ModalCursoEnCasa.scss"; // Importamos el archivo de estilos SASS

const ModalCursoEnCasa = () => {
  const [show, setShow] = useState(true); // El modal está visible por defecto

  const handleClose = () => setShow(false);

  if (!show) return null; // Si el modal está cerrado, no lo renderizamos

  return (
    <div className="top-right-modal">
      <div className="top-right-modal-header">
        <h5>¡Tu seguridad es lo primero!</h5>
        <button onClick={handleClose} className="close-btn">
          &times;
        </button>
      </div>
      <div className="modal-body">
        <h6>Curso de Primeros Auxilios, RCP y DEA en tu casa</h6>
        <p>Programá el día y horario que más te convengan</p>
        <p>
          Te brindamos la oportunidad de aprender primeros auxilios, RCP y DEA
          de manera práctica, en la comodidad de tu hogar, con tu familia o
          amigos.
        </p>
        <p>
          <strong>Curso con certificado nacional</strong>
        </p>
        <div className="contact-info">
          <p>
            Consultá por <a href="/programas">otros cursos</a>,{" "}
            <a href="/contacto">escribinos</a> o comunicate al{" "}
            <strong>(02392) 15512249</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalCursoEnCasa;
