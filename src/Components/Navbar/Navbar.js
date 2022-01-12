import logo from "./Logo.png";
import "./Navbar.scss";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Navbar3 = () => {
  return (
    <div className="nav-cont">
      <Navbar bg="light" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="340"
              height="auto"
              className="d-inline-block align-top img-logotipo"
              alt={"logo"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav
              className="me-auto my-2 my-lg-0 me-2 Navbar3__nav"
              style={{ maxHeight: "500px" }}
              navbarScroll
            >
              <Nav.Link className="Navbar3__losli" href="home">
                Inicio
              </Nav.Link>
              <Nav.Link className="Navbar3__losli" href="FAQ">
                FAQ
              </Nav.Link>
              <NavDropdown
                className="Navbar3__losli"
                title="Capacitaciones"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="programas">Programas</NavDropdown.Item>
                <NavDropdown.Item href="fechas">
                  Próximas Fechas
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="info-nd-capacitaciones">
                  ND Capacitaciones Info
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="Navbar3__losli" href="contacto">
                Contacto
              </Nav.Link>
            </Nav>
            <div className="Navbar3__contenedor-tel">
              <div>
                <b>Telefonos útiles:</b>
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
