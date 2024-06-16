import logo from "./logo4.png";
import "./Navbar.scss";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { AiFillHome } from "react-icons/ai";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { BsFillCalendarDateFill, BsTelephoneInboundFill } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { MdLocalHospital, MdContactMail } from "react-icons/md";

const Navbar3 = () => {
  return (
    <div className="nav-cont">
      <Navbar bg="light" expand="xl" sticky="top">
        <Container fluid className="Navbar3__container">
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="180"
              height="auto"
              className="d-inline-block align-top img-logotipo"
              alt={"logo"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto Navbar3__nav" navbarScroll>
              <Nav.Link className="Navbar3__losli" href="/">
                <AiFillHome className="Navbar3__icon" /> Inicio
              </Nav.Link>
              <Nav.Link className="Navbar3__losli" href="FAQ">
                <RiQuestionAnswerFill className="Navbar3__icon" /> FAQ
              </Nav.Link>

              <NavDropdown
                className="Navbar3__losli"
                title="🎓 Capacitaciones"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="programas">
                  <GrCertificate className="Navbar3__icon" /> Programas
                </NavDropdown.Item>
                <NavDropdown.Item href="fechas">
                  <BsFillCalendarDateFill className="Navbar3__icon" /> Próximas
                  Fechas
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="info-nd-capacitaciones">
                  <MdLocalHospital className="Navbar3__icon" /> Noticias
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="Navbar3__losli" href="contacto">
                <MdContactMail className="Navbar3__icon" /> Contacto
              </Nav.Link>
            </Nav>
            <div className="Navbar3__contenedor-tel">
              <div>
                <b>
                  <BsTelephoneInboundFill className="Navbar3__icon" /> Telefonos
                  útiles:
                </b>
              </div>
              <div className="Navbar3__telefonos">
                <p>
                  <span>SAME</span> 107
                </p>
                <p>
                  <span>Policía</span> 911
                </p>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar3;
