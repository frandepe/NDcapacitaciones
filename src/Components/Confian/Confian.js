import "./Confian.scss";
import confian1png from "./confian1png.png";
import confian2png from "./confian2png.png";
import confian3png from "./confian3png.png";
import confian4png from "./confian4png.png";
import confian5png from "./confian5png.png";
import confian6png from "./confian6png.png";
import { Container, Col, Row } from "react-bootstrap";
import LazyLoad from "../LazyLoad/LazyLoad";

const aval = [
  { image: confian1png, id: 1 },
  { image: confian2png, id: 2 },
  { image: confian3png, id: 3 },
  { image: confian4png, id: 4 },
  { image: confian5png, id: 5 },
  { image: confian6png, id: 6 },
];

const Confian = () => {
  return (
    <div className="confian__container">
      <h2>Apoyos Institucionales</h2>
      <Container className="confian__slider">
        <Row className="confian__slide-track">
          {aval?.map((element) => {
            return (
              <Col key={element.id} className="confian__slide">
                <LazyLoad src={element.image} alt="imagen no encontrada" />
              </Col>
            );
          })}
          {aval?.map((element) => {
            return (
              <Col key={element.id} className="confian__slide">
                <LazyLoad src={element.image} alt="imagen no encontrada" />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Confian;
