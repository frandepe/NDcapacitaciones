import "./InfoFecha.scss";
import { Button } from "react-bootstrap";

const InfoFecha = ({ lugar, titulo, localidad, horario, descripcion }) => {
  return (
    <div className="infofecha__container">
      <h4>{titulo}</h4>

      <p>{descripcion}</p>

      <p>
        <span>Localidad:</span> {localidad}
      </p>
      <p>
        <span>Lugar:</span> {lugar}
      </p>
      <p>
        <span>Horario:</span> {horario}
      </p>
      <b>Certificado nacional o internacional</b>

      <div className="infofecha__button">
        <Button href="contacto">Consultar</Button>
      </div>
    </div>
  );
};

export default InfoFecha;
