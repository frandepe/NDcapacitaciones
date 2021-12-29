import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <Container className="footer__container" fluid>
        <Row className="footer__coldown">
          <Col xs={6} md={4}>
            <p>
              <i class="fas fa-phone"></i>Tel.: (2392) 0000-0000
            </p>
            <p>email@email.com.ar</p>
          </Col>
          <Col xs={6} md={4}>
            <b>Trenque Lauquen</b>
            <p>
              <i class="fas fa-map-marker-alt"></i>Av. Corrientes 9999, Prov. Bs
              As
            </p>
            <p>Código postal C1231</p>
          </Col>
          <Col xs={6} md={4}>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-whatsapp-square"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter-square"></i>
          </Col>
        </Row>
        <Row className="footer__colup">
          <Col>© CPA | Todos los derechos reservador 2022</Col>
          <Col>
            Esta página web tiene carácter informativo, de manera que en ella no
            se aloja ningún tipo de publicidad.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
