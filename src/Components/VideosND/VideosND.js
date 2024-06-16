import "./VideosND.scss";
import { Row, Col, Container } from "react-bootstrap";
import CustomReactPlayer from "./VideoPlayer/CustomVideoPlayer";

const VideosND = () => {
  return (
    <div className="VideosND__container">
      <Container fluid>
        <Row gap={2} className="row-md-4 mx-auto">
          <Col>
            <CustomReactPlayer url="https://www.youtube.com/embed/QqPQu4mZiHI?origin=https://braintool.org" />
          </Col>
          <Col>
            <CustomReactPlayer url="https://www.youtube.com/embed/xIejawqKj1o?origin=https://braintool.org" />
          </Col>
          <Col>
            <CustomReactPlayer url="https://www.youtube.com/embed/yoYdL98Ibwk?origin=https://braintool.org" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VideosND;
