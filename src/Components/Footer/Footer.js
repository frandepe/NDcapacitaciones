import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <Container className="footer__container" fluid>
        <Row className="footer__coldown">
          <Col xs={6} md={4}>
            <p>
              <i className="fas fa-phone"></i>Tel.: (02392) 15512249
            </p>
            <p>ndcapacitaciones@gmail.com</p>
          </Col>
          <Col xs={6} md={4}>
            <b>Trenque Lauquen</b>
            <p>
              <i className="fas fa-map-marker-alt"></i>VIANI 230, Prov. Bs As
            </p>
            <p>Código postal B6400</p>
          </Col>
          <Col xs={6} md={4}>
            <a href="https://www.facebook.com/nicolas.depaulo.121">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=542392512249&&text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20las%20capacitaciones">
              <i className="fab fa-whatsapp-square"></i>
            </a>
            <a href="https://www.instagram.com/nicolasdepaulo911/?hl=es-la">
              <i className="fab fa-instagram"></i>
            </a>
          </Col>
        </Row>
        <Row className="footer__colup">
          <Col>© FMD | Todos los derechos reservados 2022</Col>
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
