import logo from "./Logo.png";
import "./Navbar.scss";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  FormControl,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Navbar3 = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="400"
              height="auto"
              className="d-inline-block align-top"
              alt={"logo"}
            />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          <Navbar.Collapse id="navbarScroll" className="d-flex">
            <Nav
              className="me-auto my-2 my-lg-0 me-2 Navbar3__nav"
              style={{ maxHeight: "100px" }}
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
                <NavDropdown.Item href="#action5">
                  Otro link más
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="Navbar3__losli" href="contacto">
                Contacto
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar3;
