import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import "./Contacto.scss";

const Contacto = () => {
  return (
    <div>
      <div className="contacto__titulo">
        <h3>Contactanos</h3>
        <p>Escribí para una información personalizada sobre nuestros cursos</p>
        <p>También estamos abiertos a cualquier tipo de sugerencia!</p>
      </div>

      <Container className="contacto__container">
        <Row>
          <Col>
            <Form className="contacto__form">
              <FloatingLabel
                controlId="floatingInput"
                label="Nombre"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Apellido"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
                <Col xs="auto" className="my-3">
                  <Form.Label
                    className="me-sm-2"
                    htmlFor="inlineFormCustomSelect"
                    visuallyHidden
                  >
                    Preference
                  </Form.Label>
                  <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                    <option value="0">Tipo</option>
                    <option value="1">Persona</option>
                    <option value="2">Empresa</option>
                  </Form.Select>
                </Col>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingTextarea"
                label="Asunto"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Comentarios">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Form>
          </Col>
          <Col className="contacto__info">
            <b>Trenque Lauquen</b>
            <p>
              <i class="fas fa-map-marker-alt"></i> Av. Corrientes 9999, Prov.
              Bs As
            </p>
            <p>Código postal C1231</p>
            <p>
              <i class="fas fa-phone"></i> Tel.: (2392) 0000-0000
            </p>
            <p>email@email.com.ar</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacto;
