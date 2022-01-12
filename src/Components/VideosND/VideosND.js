import "./VideosND.scss";
import { Row, Col, Container } from "react-bootstrap";

const VideosND = () => {
  return (
    <div className="VideosND__container">
      <Container fluid>
        <Row gap={2} className="row-md-4 mx-auto">
          <Col>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1O9yrxPGGcU?origin=https://braintool.org"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
          <Col>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xIejawqKj1o?origin=https://braintool.org"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </Col>
          <Col>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/yoYdL98Ibwk?origin=https://braintool.org"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VideosND;
