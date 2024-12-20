import Slider from "../../Components/Slider/Slider";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import "./Home.scss";
import Leyes from "../../Components/Leyes/Leyes";
import Confian from "../../Components/Confian/Confian";
import NecesidadDeCapacitar from "../../Components/NecesidadDeCapacitar/NecesidadDeCapacitar";
import Testimonial from "../../Components/Testimonial/Testimonial";
import { VerVideo } from "../../Components/VerVideo/VerVideo";
import ModalPromoCurso from "../../Components/ModalPromoCurso/ModalPromoCurso";
import { cursosInfo } from "../Fechas/Cursos";
import ModalCursoEnCasa from "../../Components/ModalCursoEnCasa/ModalCursoEnCasa";

const Home = () => {
  const hoy = new Date();
  const hayCursos = cursosInfo.some((e) => new Date(e.countdown) > hoy);
  return (
    <div>
      <ModalCursoEnCasa />
      {hayCursos && <ModalPromoCurso />}
      <div className="home__containerSlider">
        <Slider />
        <div className="home__intro">
          <div className="home__intro--content">
            <h1>
              <span>ND</span>Capacitaciones
            </h1>
            <p>Cursos de primeros auxilios</p>
            <Button href="/contacto">Contactar</Button>
          </div>
        </div>
      </div>
      <Container className="home__containerIntroduction">
        <Row>
          <Col className="home__titular" sm={12}>
            <h1>
              Nicolas De Paulo - Coordinador de Defensa Civil en Municipio
              Trenque Lauquen
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="home__sobremi" sm={8}>
            Soy instructor dedicado a la capacitación y entrenamiento en
            emergencias, asociado a ACES (Asociación para la Capacitación en
            Emergencias y Socorros) certificado y avalado internacionalmente por
            AIDER.ORG y diferentes instituciones internacionales como el Colegio
            americano de emergencias, el Instituto de atención y seguridad de
            emergencias (ambas de EEUU), y la Organización Panamericana de la
            Salud.
          </Col>
          <Col className="home__instrucciones" sm={4}>
            <h3>Instructor de: </h3>
            <p>“Socorros urbanos con RCP y DEA”</p>
            <p>“Formador de Brigadistas de Emergencias”</p>
            <p>“Monitor de Zonas Cardio Seguras”</p>
            <p>“Primeros Auxilios para Perros y Gatos”</p>
            <p>“Primeros Socorros Psicologicos”</p>
          </Col>
        </Row>
      </Container>
      <Leyes />
      <NecesidadDeCapacitar />
      <VerVideo />
      <Testimonial />
      <div>
        <Stack
          href="fechas"
          gap={2}
          className="col-md-2 mx-auto home__inscripciones"
        >
          <a href="fechas">
            <h4>Inscripciones abiertas</h4>
            <p>Reservá tu lugar. ¡Cupos limitados!</p>
          </a>
        </Stack>
      </div>
      <Confian />
    </div>
  );
};

export default Home;
