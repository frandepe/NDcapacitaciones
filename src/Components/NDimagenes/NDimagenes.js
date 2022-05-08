import "./NDimagenes.scss";
import { Row, Col, Container } from "react-bootstrap";
import LazyLoad from "../LazyLoad/LazyLoad";

const NDimagenes = ({ descripcion, imagen1, imagen2, imagen3, color }) => {
  return (
    <div className="NDimagenes__container" style={{ backgroundColor: color }}>
      <Container className="NDimagenes__img">
        <Row>
          <Col>
            <p>{descripcion}</p>
          </Col>
        </Row>
        <Row gap={2} className="row-md-4 mx-auto">
          <Col>
            <LazyLoad className="col1" src={imagen1} alt="img" />
          </Col>
          <Col>
            <LazyLoad className="col2" src={imagen2} alt="img" />
          </Col>
          <Col>
            <LazyLoad className="col3" src={imagen3} alt="img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NDimagenes;
