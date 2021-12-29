import { Container, Row, Col } from "react-bootstrap";
import "./Leyes.scss";

const Leyes = () => {
  return (
    <div>
      <Container className="leyes__container">
        <Row>
          <Col className="leyes__left">
            <h2>EL SOCORRISMO Y LAS LEYES</h2>
            <p>
              • Las Leyes del Buen Samaritano: otorgan protección legal a los
              socorristas que asisten a víctimas heridas o que han enfermado
              súbitamente.
            </p>
            <p>
              • Deber de Socorro/Actuar: cuando lo requiere el empleo o hay una
              responsabilidad preexistente.
            </p>
            <p>
              • Abandono de Persona: abandonar a un ser humano en estado de
              necesidad. Para evitar el abandono, en la mayoría de los países se
              exige llamar al SEM y esperar a que llegue el personal de la
              salud.
            </p>
          </Col>
          <Col className="leyes__rigth">
            <b>
              La ley 27159 Sancionada el 01/07/2015 denominada “LEY DE LA MUERTE
              SÚBITA - SISTEMA DE PREVENCIÓN INTEGRAL” en su Art. 1° dice: “El
              objeto de la presente Ley es regular un sistema de prevención
              integral de eventos por muerte súbita en espacios públicos y
              privados de acceso publico, a fin de reducir la morbimortalidad
              súbita de origen cardiovascular”.
            </b>
            <b>
              En su Art. 11°: responsabilidad. Ninguna persona interviniente que
              haya obrado de acuerdo con las disposiciones de la presente ley,
              esta sujeta a responsabilidad civil, penal, ni administrativa,
              derivados del cumplimiento de la misma.
            </b>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Leyes;