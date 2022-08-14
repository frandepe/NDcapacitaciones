import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
  Alert,
} from "react-bootstrap";
import emailjs from "emailjs-com";
import "./Contacto.scss";
import { useState } from "react";
import img from "./comunicar.png";

const Contacto = () => {
  const [resultado, setResultado] = useState("");


  // const cart = [
  //   ({
  //     createdDate: "2022-06-12T22:29:11.431Z",
  //     name: "oferta 3",
  //     category: "special",
  //     price: "1433",
  //     imagen: "dsdd",
  //     id: "62a668e9f98812ff5a2cb51a",
  //     quantity: 3,
  //   },
  //   {
  //     createdDate: "2022-06-12T16:48:07.183Z",
  //     name: "queso rayado",
  //     category: "quesos",
  //     price: "54",
  //     imagen: "dsdd",
  //     id: "62a64adaca86140206d9f32d",
  //     quantity: 3,
  //   },
  //   {
  //     createdDate: "2022-06-11T16:08:41.776Z",
  //     name: "queso azul",
  //     price: "194",
  //     imagen: "dsdd",
  //     category: "quesos",
  //     id: "62a4be2d9d36d3853996a184",
  //     quantity: 2,
  //   }),
  // ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "NDcapacitaciones",
        "template_l95zlcb",
        e.target,
        "user_hMTTtuym8LmPBuh0B4Z05"
      )
      .then(
        (result) => {
          console.log(result.text);
          setResultado(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className="contacto__titulo">
        <h3>Contactanos</h3>
        <p>
          Escribinos para poder brindarte una información personalizada sobre
          nuestras capacitaciones
        </p>
        <p>También estamos abiertos a cualquier tipo de sugerencia!</p>
      </div>

      <Container className="contacto__container">
        <Row>
          <Col>
            <Form onSubmit={sendEmail} className="contacto__form">
              <FloatingLabel label="Nombre*" className="mb-3">
                <Form.Control
                  required
                  name="nombre"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel
                required
                // controlId="floatingInput"
                label="Apellido*"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="name@example.com"
                  name="apellido"
                />
              </FloatingLabel>
              <FloatingLabel label="Email*" className="mb-3">
                <Form.Control
                  required
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                />
                <Col xs="auto" className="my-3">
                  <Form.Label
                    className="me-sm-2"
                    htmlFor="inlineFormCustomSelect"
                    visuallyHidden
                  >
                    Preference
                  </Form.Label>
                  <Form.Select
                    className="me-sm-2"
                    id="inlineFormCustomSelect"
                    name="tipo"
                  >
                    <option value="Persona">Persona</option>
                    <option value="Empresa">Empresa</option>
                  </Form.Select>
                </Col>
              </FloatingLabel>

              <FloatingLabel label="Asunto*" className="mb-3">
                <Form.Control
                  required
                  name="asunto"
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Mensaje*">
                <Form.Control
                  required
                  name="mensaje"
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <Button className="contacto__btn" type="submit">
                Enviar
              </Button>
            </Form>
            <div className="contacto__b">
              <b>
                {resultado && (
                  <Alert variant="primary">
                    <Alert.Heading>Hola!</Alert.Heading>
                    <p>
                      Gracias por contactarse, en breve nos pondremos en
                      contacto con ustéd. Recuerda que puedes enviarnos un
                      mensaje directo a nuestro WhatsApp.
                    </p>
                    <hr />
                    <p className="mb-0">
                      Debajo encontrarás nuestras redes sociales para mantenerte
                      al día sobre las capacitaciones.
                    </p>
                  </Alert>
                )}
              </b>
            </div>
          </Col>
          <Col sm={4} className="contacto__info">
            <div className="contacto__trenque">
              <b>Trenque Lauquen</b>
            </div>

            <p>
              <i className="fas fa-map-marker-alt"></i> VIANI 230, Prov. Bs As
            </p>
            <p>Código postal B6400</p>
            <p>
              <i className="fas fa-phone"></i> Tel : (02392) 15512249
            </p>
            <p>ndcapacitaciones@gmail.com</p>
            <div className="contacto__img">
              <img src={img} alt="comunicate" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacto;
