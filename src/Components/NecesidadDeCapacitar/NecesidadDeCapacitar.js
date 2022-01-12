import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./Capacitacion-RCP.jpeg";
import img2 from "./imgCursoGente2.jpg";
import img3 from "./ImgCursoGente4.jpg";
import "./NecesidadDeCapacitar.scss";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const NecesidadDeCapacitar = () => {
  let imgCursos = gsap.timeline({
    scrollTrigger: {
      trigger: ".colimg",
      start: "20px 80%",
    },
  });

  useEffect(() => {
    imgCursos
      .from(".colimg1", {
        duration: 1,
        scale: 0.6,
        opacity: 0,
      })
      .from(".colimg2", {
        duration: 1,
        ease: "ease-in",
        scale: 0.6,
        opacity: 0,
      })
      .from(".colimg3", {
        duration: 1,
        ease: "ease-in",
        scale: 0.6,
        opacity: 0,
      });
  }, []);

  return (
    <div className="divContainer">
      <Container>
        <Row className="NecesidadDeCapacitar__container">
          <Col className="colimg colimg1">
            <img src={img2} width="540" height="350" alt={"Capatitacion RCP"} />
          </Col>
          <Col className="NecesidadDeCapacitar__col">
            <h3>¿Con qué propósito realizamos las capacitaciones?</h3>
            <p>
              “El objetivo de este tipo de capacitaciones es mejorar nuestra
              calidad de servicios y brindar seguridad a los clientes. Queremos
              ser comerciantes responsables y capaces de resolver una emergencia
              si se nos presenta a través de las técnicas de primeros auxilios y
              RCP”.
            </p>
          </Col>
        </Row>
        <Row className="NecesidadDeCapacitar__container2">
          <Col className="NecesidadDeCapacitar__col">
            <h3>¿En qué consiste la RCP?</h3>
            <p>
              “La RCP tradicionalmente consistía en realizar respiración boca a
              boca intercalando compresiones torácicas. Actualmente se centra
              más en las compresiones torácicas y se reduce al mínimo o elimina
              la respiración boca a boca. De esta manera, la técnica es más
              sencilla y supone interrumpir menos la circulación de la sangre”.
            </p>
          </Col>
          <Col className="colimg colimg2">
            <img
              align="right"
              src={img1}
              width="540"
              height="auto"
              alt={"Capatitacion RCP"}
            />
          </Col>
        </Row>
        <Row className="NecesidadDeCapacitar__container3">
          <Col className="colimg colimg3">
            <img src={img3} width="540" height="350" alt={"Capatitacion RCP"} />
          </Col>
          <Col className="NecesidadDeCapacitar__col">
            <h3>Convertite en protagonista</h3>
            <p>
              Cuando se produce un paro cardiorespiratorio, la respiración y
              circulación se detienen. Si recibe asistencia con la técnica de
              reanimación cardiopulmonar (RCP), la persona tiene posibilidades
              de recuperarse y no presentar secuelas.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NecesidadDeCapacitar;
