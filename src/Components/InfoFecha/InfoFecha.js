import "./InfoFecha.scss";
import Countdown from "react-countdown";
import { Button } from "react-bootstrap";

// '2022-05-10T14:12:00'
const InfoFecha = ({
  lugar,
  titulo,
  localidad,
  horario,
  descripcion,
  fecha,
  countdown,
}) => {
  const Completionist = () => (
    <span className="infofecha__cursoConcluido">Este curso ha concluído</span>
  );

  const renderer = ({ days, hours, minutes, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div>
          <p>
            {`Aún quedan:
					${days} días, ${hours} horas, ${minutes} minutos para
					participar`}
          </p>
        </div>
      );
    }
  };

  const finishDate = new Date(countdown);
  return (
    <div className="infofecha__container">
      <h4>{titulo}</h4>

      <p>
        <span>Temario:</span> {descripcion}
      </p>

      <p>
        <span>Fecha:</span> {fecha}{" "}
        <Countdown date={finishDate} renderer={renderer} />
      </p>

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

      {finishDate > new Date() && (
        <div className="infofecha__button">
          <Button href="contacto">Consultar</Button>
        </div>
      )}
    </div>
  );
};

export default InfoFecha;
