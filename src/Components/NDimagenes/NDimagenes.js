import "./NDimagenes.scss";
import { Row, Col, Container } from "react-bootstrap";
import LazyLoad from "../LazyLoad/LazyLoad";
import { BsCalendarDate } from "react-icons/bs";

const NDimagenes = ({
  descripcion,
  fecha,
  link,
  imagen1,
  imagen2,
  imagen3,
  color,
}) => {
  return (
    <div className="NDimagenes__container" style={{ backgroundColor: color }}>
      <Container className="NDimagenes__img">
        <Row>
          <Col>
            <b className="NDimagenes__fecha">
              <BsCalendarDate />
              {fecha}
            </b>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href={link}
              className="NDimagenes__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer más
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{descripcion}</p>
          </Col>
        </Row>
        <Row
          sm={1}
          md={2}
          lg={3}
          className="row-md-4 mx-auto NDimagenes__container-images"
        >
          <Col className="NDimagenes__Col12">
            <LazyLoad className="col1" src={imagen1} alt="img" />
          </Col>
          <Col className="NDimagenes__Col12">
            <LazyLoad className="col2" src={imagen2} alt="img" />
          </Col>
          <Col className="NDimagenes__Col3">
            <LazyLoad className="col3" src={imagen3} alt="img" />
          </Col>
        </Row>
      </Container>
    </div>
    //  lg={4} md={6}
  );
};

export default NDimagenes;
