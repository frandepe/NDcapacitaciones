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
import contactImg from "./contactimg2.jpg";
import BannerHeader from "../../Components/BannerHeader/BannerHeader";
import { cursosInfo } from "../Fechas/Cursos";

const Contacto = () => {
  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_05mdgai",
        "template_r52o8xo",
        e.target,
        "1pJRcoYPZ5B_8OK6a"
      )
      .then(
        (result) => {
          setResultado(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setLoading(false);
    e.target.reset();
  };
  const hoy = new Date();
  const hayCursos = cursosInfo.some((e) => new Date(e.createdDate) > hoy);

  return (
    <div>
      <BannerHeader
        title="Contactanos"
        src={contactImg}
        description="Escribinos para poder brindarte una información personalizada sobre
          nuestras capacitaciones."
      />

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
              <FloatingLabel required label="Apellido*" className="mb-3">
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
              <Form.Select
                className="me-sm-2"
                id="inlineFormCustomSelect"
                name="curso"
                style={{ marginBottom: "20px" }}
              >
                <option value="" disabled>
                  {hayCursos
                    ? "Selecciona el curso al que desea asistir"
                    : "No registramos cursos pendientes"}
                </option>
                {cursosInfo
                  .filter((e) => new Date(e.createdDate) > hoy)
                  .map((e) => {
                    return (
                      <option key={e.id} value={e.titulo + " " + e.fecha}>
                        {e.titulo + " " + e.fecha}
                      </option>
                    );
                  })
                  .reverse()}
              </Form.Select>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Escriba un mensaje*"
              >
                <Form.Control
                  required
                  name="mensaje"
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <Button className="contacto__btn" type="submit">
                {!loading ? "Enviar" : "Enviando..."}
              </Button>
            </Form>
            <div className="contacto__b">
              <b>
                {resultado && (
                  <Alert variant="primary">
                    <Alert.Heading>Hola!</Alert.Heading>
                    <p>
                      Gracias por contactarse, en breve nos pondremos en
                      contacto con ustéd. Recuerde que puede enviarnos un
                      mensaje directo a nuestro WhatsApp.
                    </p>
                    <hr />
                    <p className="mb-0">
                      Debajo encontrará nuestras redes sociales para mantenerse
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
