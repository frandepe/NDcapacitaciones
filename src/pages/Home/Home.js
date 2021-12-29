import React from "react";
import Slider from "../../Components/Slider/Slider";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.scss";
import Leyes from "../../Components/Leyes/Leyes";
import Confian from "../../Components/Confian/Confian";

const Home = () => {
  return (
    <div>
      <Slider />
      <Container>
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
            AIDER.ORG y diferentes instituciones internacionales como el
            American College of Emergency, el Emergency Care and Safety
            Institute ambas de EEUU , la Organización Panamericana de la Salud,
            etc.
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
      <Confian />
    </div>
  );
};

export default Home;
