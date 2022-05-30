import Slider from "../../Components/Slider/Slider";
import { Container, Row, Col, Stack } from "react-bootstrap";
import "./Home.scss";
import Leyes from "../../Components/Leyes/Leyes";
import Confian from "../../Components/Confian/Confian";
import NecesidadDeCapacitar from "../../Components/NecesidadDeCapacitar/NecesidadDeCapacitar";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.from(".home__containerIntroduction", {
      scrollTrigger: {
        trigger: ".home__containerIntroduction",
        start: "top 90%",
        end: "bottom 60%",
      },
      duration: 2,
      ease: "ease-in",
      y: 100,
      opacity: 0,
    });
  }, []);

  return (
    <div>
      <Slider />
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
          </Col>
        </Row>
      </Container>
      <Leyes />
      <NecesidadDeCapacitar />
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
