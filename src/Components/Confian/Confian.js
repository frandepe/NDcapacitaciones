import "./Confian.scss";
import imgConfian1 from "./confian1.jfif";
import imgConfian2 from "./confian2.jpg";
import imgConfian3 from "./confian3.png";
import imgConfian4 from "./confian4.jpg";
import { Container, Col, Row } from "react-bootstrap";

const Confian = () => {
  return (
    <div className="confian__container">
      <h2>Aval</h2>

      <Container className="confian__flexImg">
        <Row>
          <Col sm>
            <img src={imgConfian1} alt="American College of Emergency" />
          </Col>
          <Col sm>
            <img src={imgConfian2} alt="Emergency Care and Safety Institute " />
          </Col>
          <Col sm>
            <img src={imgConfian3} alt="Aider" />
          </Col>
          <Col sm>
            <img
              src={imgConfian4}
              alt="Organización Panamericana de la Salud"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Confian;
