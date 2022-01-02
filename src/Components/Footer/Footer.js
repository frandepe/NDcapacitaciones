import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <Container className="footer__container" fluid>
        <Row className="footer__coldown">
          <Col xs={6} md={4}>
            <p>
              <i className="fas fa-phone"></i>Tel.: (2392) 0000-0000
            </p>
            <p>email@email.com.ar</p>
          </Col>
          <Col xs={6} md={4}>
            <b>Trenque Lauquen</b>
            <p>
              <i className="fas fa-map-marker-alt"></i>Av. Corrientes 9999,
              Prov. Bs As
            </p>
            <p>Código postal C1231</p>
          </Col>
          <Col xs={6} md={4}>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-whatsapp-square"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter-square"></i>
          </Col>
        </Row>
        <Row className="footer__colup">
          <Col>© CPA | Todos los derechos reservador 2022</Col>
          <Col>
            Desarrollo y diseño por{" "}
            <a href="https://www.linkedin.com/in/franco-de-paulo-13509b186/">
              FMD
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
