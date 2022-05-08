import "./Confian.scss";
import imgConfian1 from "./confian1.jfif";
import imgConfian2 from "./confian2.jpg";
import imgConfian3 from "./confian3.png";
import imgConfian4 from "./confian4.jpg";
import { Container, Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LazyLoad from "../LazyLoad/LazyLoad";

gsap.registerPlugin(ScrollTrigger);

const Confian = () => {
  useEffect(() => {
    gsap.from(".confian__container", {
      scrollTrigger: {
        trigger: ".confian__container",
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
    <div className="confian__container">
      <h2>Aval</h2>

      <Container className="confian__flexImg">
        <Row>
          <Col sm>
            <LazyLoad src={imgConfian1} alt="American College of Emergency" />
          </Col>
          <Col sm>
            <LazyLoad
              src={imgConfian2}
              alt="Emergency Care and Safety Institute "
            />
          </Col>
          <Col sm>
            <LazyLoad src={imgConfian3} alt="Aider" />
          </Col>
          <Col sm>
            <LazyLoad
              src={imgConfian4}
              alt="Organización Panamericana de la Salud"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Confian;
